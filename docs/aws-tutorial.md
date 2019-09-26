# Hosting AzerothCore via Amazon AWS

Preface: The goal with this guide is for it to be mostly via a command line. There is also the [AWS Console](https://aws.amazon.com/console/) that some will find more intuitive, however, for guide longevity (as the AWS Console UI may change) the aws-cli tool will be recommended. Also included will be grep commands to receive only the required output. If the entire output is desired simply remove the `| grep` and everything after it.

------

[TOC]

------

## Prerequisites

These tools are required as rest of the tutorial will be done via a bash enabled command line:

- [Amazon AWS Account](https://portal.aws.amazon.com/billing/signup#/start)
- [Git](https://git-scm.com/downloads)
- [Python](https://www.python.org/downloads/) - make sure to check that this is added to PATH if using windows

------

## AWS-CLI

### Installing AWS-CLI

Firstly verify that python & its included pip tool are correctly setup :

```bash
python --version && pip --version
```

This should return both the python and pip version. If not then correctly install python and link it to the PATH. Now that python is installed install aws-cli via:

```bash
pip install awscli --upgrade
```

Verify that awscli correctly installed by entering `aws --version`. If it didn't install correctly refer to [this](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html#install-post) to troubleshoot depending on your computer's operating system.

### Configuring AWS-CLI

An access Key and ID will be required. This can be found at [AWS Security Credentials](https://console.aws.amazon.com/iam/home#/security_credentials) and selecting the Access Keys > Create New Access Key button. **Keep this key safe as it can be used to perform any actions on an AWS account**. It is considered best practice to allow access via an [IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html),  especially if AWS privilege will be shared with anyone else. Once the Key has been obtained use it to give credentials to aws-cli using the command:

```bash
aws configure
```

Insert the ID and Key into their corresponding fields. For the default region name insert `us-east-1` and for the default output format insert `table`. Another server now may be found with the command:

```bash
aws ec2 describe-regions --output table
```

Use the `ping` command plus the various endpoints to test latency to the regions. After an appropriate server has been found run `aws configure` again and enter the new region.

### Creating a Key-Pair

Before any server instances are created a [key-pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) will be required. This key-pair will be used to validated access to the EC2 instances it is affixed to. Create a new key-pair via:

```bash
aws ec2 create-key-pair --key-name AzCore-KP --query 'KeyMaterial' --output text > ~/AzCore-KP.pem
```

The key-pair will be saved into the $HOME directory. Make sure to keep this newly created `AzCore-KP.pem` file safe as **this file cannot be remade** after it is created. If the key-pair is lost after linking it to any EC2 instances they will need to be remade with a new key-pair. The key-pair is used to SSH into the instance and there are no ways to remove access from the key-pair without ultimately deleting the EC2 instance! Before the key-pair can be used the permissions must be set with :

```bash
chmod 400 ~/AzCore-KP.pem
```

### Creating a VPC

*Note: While AWS provides a default VPC that will work fine. The information required for making an entirely new VPC for this guide will be provided incase the default VPC for whatever case isn't available or working. It simultaneously acts as deeper delve into AWS and its networking features.*

Creating a VPC for the region using:

```bash
aws ec2 create-vpc --cidr-block 172.32.0.0/16 | grep -Po "(vpc)-[a-zA-Z0-9]*\s"
```

This should output the vpc-id. Save this as it will be required later.

Also needed is the command:

```bash
aws ec2  modify-vpc-attribute --enable-dns-hostnames --vpc-id $VPC_ID 
```

### Creating a Subnet

A Subnet is required to be linked with the VPC using:

```bash
aws ec2 create-subnet --cidr-block 172.32.0.0/20 --vpc-id $VPC_ID | grep -Po "(?<!\/)(subnet)-[a-zA-Z0-9]*\s"
```

Save the subnet-id value for later use.

### Creating an Internet Gateway

Create and attach the internet gateway with:

```bash
aws ec2 create-internet-gateway | grep -Po "(igw)-[a-zA-Z0-9]*\s"
aws ec2 attach-internet-gateway --internet-gateway-id $IGW_ID --vpc-id $VPC_ID
```

### Creating a Route Table

The newly created VPC comes with a route table included, however, it doesn't have access to an Internet Gateway by default! To fix this issue describe the route tables with:

```bash
aws ec2 describe-route-tables
```

This will return a table with all VPCs in the region. Find the one with the CIDR block used which is most likely `172.32.0.0/16` and save the `RouteTableID` value. After finding the route table id enter: 

```bash
aws ec2 create-route --route-table-id $RouteTableID --destination-cidr-block 0.0.0.0/0 --gateway-id $IGW_ID
```

### Creating a Security Group

The Security Group will provide access to ports required for traffic to the server. This is done by:

```bash
aws ec2 create-security-group --group-name AzerothCore --description "World / Auth / SSH Port Access" --vpc-id $VPC_ID | grep -Po "(sg)-[a-zA-Z0-9]*\s"
```

### Configuring the Security Group

This next string creates the port traffic permissions allowing traffic on ports 22 (SSH), 8085 (World Server), and 3724 (Authentication Server). Where $SECURITY_GROUP_ID is the previously obtained output.

```bash
aws ec2 authorize-security-group-ingress --group-id $SECURITY_GROUP_ID --ip-permissions IpProtocol=tcp,FromPort=22,ToPort=22,IpRanges='[{CidrIp=0.0.0.0/0, Description="SSH from Anywhere"}]' IpProtocol=tcp,FromPort=8085,ToPort=8085,IpRanges='[{CidrIp=0.0.0.0/0, Description="World-Server from Anywhere"}]' IpProtocol=tcp,FromPort=3724,ToPort=3724,IpRanges='[{CidrIp=0.0.0.0/0, Description="Auth-Server from Anywhere"}]'
```

### Finding an AMI

 [Ubuntu 18.04 LTS](https://console.aws.amazon.com/ec2/home?region=us-east-1#launchAmi=ami-024a64a6685d05041) will be used for the guide but any Linux distribution should be fine. Keep in mind there may be small idiosyncrasies with differing distributions. Newer AMI releases of Ubuntu can be found [here](https://cloud-images.ubuntu.com/locator/ec2/) and other AMIs found on the [AWS Marketplace](https://aws.amazon.com/marketplace/ref=csl_ec2_ami). The AMI that is used for the guide is `ami-024a64a6685d05041`. Find more information on this image with:

```bash
aws ec2 describe-images --image-ids ami-024a64a6685d05041
```

### Running the Instance

Now it's finally time to create the server instance. Insert the previously described AMI or a new one in place of $AMI_ID :

```bash
aws ec2 run-instances --image-id $AMI_ID --instance-type t2.micro --count 1 --associate-public-ip-address --key-name AzCore-KP --security-group-ids $SECURITY_GROUP_ID --subnet-id $SUBNET_ID
```

This will create and initialize one t2.micro instance. *Only one instance can constantly be ran in a month without paying for additional server hours.*

### Modifying the Volume

Now, describe the running instance with:

```bash
aws ec2 describe-instances
```

Find the running instance and perform the following command on the volume-id that is attached:

```bash
aws ec2 modify-volume --size 20 --volume-id $VOL_ID
```

*This will change the storage to 20GB. 30GB is the MAX block storage for free tier. Try not to go over that unless intending on paying!*

### Assigning a Static IP

Run the command:

```bash
aws ec2 allocate-address --domain $VPC_ID
```

This will provide an Allocation ID. Now using the Instance ID which can be found in the previously ran `aws ec2 describe-instances` perform the command:

```bash
aws ec2 associate-address --allocation-id $ALLOC_ID --instance-id $INSTANCE_ID
```

*If a domain is desired for connection consider [Amazons Route 53](https://aws.amazon.com/route53/) service. They can be found as low as 12$ per year.*

------

## The Instance

### SSH into the Instance

Describe the instance with `aws ec2 describe-instances` and find the `PublicDnsName `.

Access the server using the command

```bash
SSH -i "~/AzCore-KP.pem" ubuntu@$PublicDnsName
```

### Installing AzerothCore

Follow the Linux portion of the guide found at <http://www.azerothcore.org/wiki/Installation>. Run `sudo apt-get update && sudo apt-get upgrade` before installing dependencies and update security patches.

### Uploading Data file to Server

Download the [newest_data.zip](https://mega.nz/#F!Am4DBKCR!o9Qj_xFLfsg4sczqg0xq2A) and unzip it and its subfolders. Next `cd` into the folder where it is located and perform the command:

```bash
tar zcfv ~/data.tar.gz newest_data/
```

This will zip the file into a tar.gz file. Now to upload it to the server using

```bash
scp -i "~/AzCore-KP.pem" ~/data.tar.gz ubuntu@$PublicDnsName:$CMAKE_INSTALL_PREFIX/data
```

This can take a while depending on upload speed. The $CMAKE_INSTALL_PREFIX will be the path to where the server is installed not the cloned git repository which is `~/azeroth-server/` by default. 

Now untar it with:

```bas
tar xfv $CMAKE_INSTALL_PREFIX/data.tar.gz --strip-components=2
```

It should now be unpacked into `$CMAKE_INSTALL_PREFIX/data/`

Alternatively, borrowed from [stackoverflow](https://stackoverflow.com/a/49444877) and with much better download performance:

```bash
#!/bin/bash
fileid="12XIh3rqm3ukpSKQtMop44U4XCYb6kdda"
filename="data.tar.gz"
curl -c ./cookie -s -L "https://drive.google.com/uc?export=download&id=${fileid}" > /dev/null
curl -Lb ./cookie "https://drive.google.com/uc?export=download&confirm=`awk '/download/ {print $NF}' ./cookie`&id=${fileid}" -o ${filename}
```

Run `nano $CMAKEINSTALL_PREFIX/data/` and save this script as a .`sh` file in the data directory and perform `chmod -x $filename.sh` to make it executable. The script will download a repackaged [newest_data](https://mega.nz/#F!Am4DBKCR!o9Qj_xFLfsg4sczqg0xq2A) from a Google Drive [upload](https://drive.google.com/open?id=12XIh3rqm3ukpSKQtMop44U4XCYb6kdda). *note: I recommend verifying the SHA256 Checksum values match between the mega upload and google drive upload. If not the files are not tampered with or changed.*

### Database Setup

Enter into MySQL using `sudo mysql`. A username and password will be needed to access the database. 

```sql
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY 'password';
```

The .conf files will need to be edited with the newly chosen username and password described [here](http://www.azerothcore.org/wiki/Installation#4-setting-the-configuration-files).

### Kswapd issue 

*Note: If running on a more powerful instance this step is likely irrelevant. For the t2.micro instance with 1GB of ram this step is required.*

As a learning exercise after compilation run a ` top -oh %MEM` and attempt to launch the world server. It will eventually reach a hang-up and the server will become unresponsive. Notice the process taking up a majority of memory is `kswapd`. The `kswapd` process is used whenever the systems memory usage reaches a threshold and then it offloads the memory into a storage. The default swap image, however, does not allocate enough resources to run the the world server so a new one is needed. [Various solutions to this issue can be found here.](https://askubuntu.com/questions/178712/how-to-increase-swap-space) The guide will be using the `dd` [method](https://askubuntu.com/a/178726):

```Bash
#Creates 3GB swap image and sets up a swap area
sudo dd if=/dev/zero of=/media/fasthdd/swapfile.img bs=1024 count=3M
sudo mkswap /media/fasthdd/swapfile.img

#Opens editer with sudo permissions at /etc/fstab
sudo nano /etc/fstab

# Add this line to /etc/fstab
/media/fasthdd/swapfile.img swap swap sw 0 0

#Activiate the swap image
swapon /media/fasthdd/swapfile.img
```

### Connecting to the server

Find the instances Public IP address which can be found with `aws ec2 describe-instances`. Enter the `PublicIpAddress` into your `acore_auth` realmlist table. More connection information can be found [here](http://www.azerothcore.org/wiki/Installation#8-connecting-to-the-server).

------

## Disclaimer

​	Many best practices have not been followed in lieu of guide brevity and general ignorance on internet security. Some things to be known and that should be done if planning to allow anyone access to your server include:

- [Adding an IAM User for anyone who needs AWS access.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) *Don't allow someone to run 100 instances to mine bitcoins... keep in mind that payment information is stored to create an account and AWS charges per server hour used!*  **Be safe.**
- AWS Free Tier allows **750** instance hours meaning 750/24 = 31.25 Days. *Only one instance non-stop can be ran for a month without paying and the free tier only lasts for 12 months after account creation. Don't get unintentional charges. You've been warned!*
- Generally, don't allow another user SSH or admin privileges until some research on how to secure Linux and don't allow anyone root privileges. Only allow users the least privileges required. Your safety is in your hands, good luck!
