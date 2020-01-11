## Introduction

This tutorial will walk you through the entire AzerothCore server setup process, and will help get you familiar with using Debian and Command Line Interfaces (CLI). In this tutorial, we'll be going over the following:
- Looking at various tools to help you get your server up and running, such as MySQL Clients, SSH Clients, SFTP Clients, and powerful file editors. 
- Configuring a Droplet on DigitalOcean from scratch
- Building the Core
- Loading the Database

There is a Step-by-Step YouTube Video which walks you through this entire process. It's encouraged you follow along with that video, while using this tutorial as a reference guide.

[![Tutorial Video](https://img.youtube.com/vi/lenMiDtbHhs/0.jpg)](https://www.youtube.com/watch?v=lenMiDtbHhs)

## PC Apps You May Need:
#### MySQL Clients:
- [HeidiSQL](https://www.heidisql.com/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [SQLYog](https://www.webyog.com/product/sqlyog) (Paid)

#### SSH Clients:
- DigitalOcean’s Console
- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/)
- [Termius](https://termius.com/) (Paid)

#### FTP Clients:
- [Filezilla](https://filezilla-project.org/)
- [Terminus](https://termius.com/) (Paid)

#### File Editors:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Notepad++](https://notepad-plus-plus.org/)

## Choosing our Droplet
#### Setup new Droplet
- 8GB RAM / 4 Cores
- Debian 9
- Choose Region
- Enable Monitoring
- One-time Password
- Name the Droplet anything you'd like, in this tutorial we're calling it `AzerothCore`

## Droplet Initial Configuration
#### Change your Time Zone
- Enter the command `timedatectl` to confirm the Droplet is set to UTC (00:00) time.
- Before we can set the time zone, we first need to figure out what the code is for your time zone. Enter the command `timedatectl list-timezones` to see a list of all time zones. Hit Enter until you find your time zone, and make note of it. Hit *Control+C* once you're done looking for time zones.
- Once you're back at the command line, enter `sudo timedatectl set-timezone YOUR_TIME_ZONE`
- Verify that the Time Zone set correctly by entering `timedatectl`

#### Add a new User
- It's best practice to not use the *root* user for applications. Because of this, we're going create a user that will be responsible for all AzerothCore activities. Enter `adduser azcore` to create a new user.
- Next, let's make sure this user has sudo permissions. Provision those permissions by using the following command `usermod -aG sudo azcore`

#### Verify Sudo access for the new User
- Let's log in as our new user `sudo su azcore`
- Enter `sudo whoami` and then enter the password you chose for this user (may be different from your root password).
- If it says *root*, then you're all set! Enter the command `exit` to return to your root user for the next steps.

#### Installing Key Libraries & Additional Apps
- Next we need to install a bunch of important libraries, applications, and tools needed to Azerothcore. Run the following command: 
```
sudo apt-get update && sudo apt-get install git make gcc g++ clang default-libmysqlclient-dev libssl1.0-dev libbz2-dev libreadline-dev libncurses-dev mysql-server libace-6.* libace-dev g++-7
```
- Choose 'Y' for any prompts asking for additional space for the installation.
- Let's refresh our App List once again before we continue `sudo apt-get update`
- Let's install Screen, an application that will let us have multiple applications open at once and persist after we log out of the console `sudo apt-get install screen`
- Next up is curl - we'll be using this to get the VMAP, MMAP, and other required data for the server `sudo apt install curl`
- Let's install the unzip utility, so we can unzip the data files `sudo apt install unzip`
- Finally, let's wrap up with `sudo apt install`

#### Installing CMake
- Let's make sure that the no version of CMake exists by removing any previous installations of CMake. `sudo apt remove --purge --auto-remove cmake`
- Next, we'll begin the process to install CMake. Copy this entire block and paste it into your terminal. If you wish to install a different version of CMake, you can update the version and build number to a different CMake version, which can be found on https://cmake.org/download/
```
version=3.16
build=2
mkdir ~/temp
cd ~/temp
wget https://cmake.org/files/v$version/cmake-$version.$build.tar.gz
tar -xzvf cmake-$version.$build.tar.gz
cd cmake-$version.$build/
```
- After a bunch of text, hit 'Return' or 'Enter' once on your keyboard.
- Now let's install CMake. Copy this entire block and paste it into your terminal.
```
./bootstrap
make -j$(nproc)
sudo make install
```
- After the building is complete (and you get the command line back), hit 'Return' or 'Enter' once on your keyboard to install CMake
- Let's verify that you're running the correct version of CMake by using the `cmake --version` command. Note: If CMake Version doesn't work, close your terminal, reconnect, and try the version command again.
- Navigate back to your primary directory by typing `cd`.
- Let's clean up the install of CMake with `rm -rf temp`. Now let's take a look at configuring the database.

#### Complete the MariaDB Secure Installation
- Let's begin the process `sudo mysql_secure_installation`
- For the following prompts, answer `[no pass]/N/Y/Y/Y/Y`
- Once we're back in the command line, type `sudo mysql` to enter the MariaDB Console
- Once in the MariaDB Console, let's create our User: 
```
GRANT ALL ON *.* TO 'dbadmin'@'%' IDENTIFIED BY 'password1' WITH GRANT OPTION;
```
- Choose a Username you want - it can be anything you'd like, it doesn't have to be `dbadmin`. Also, please make sure you choose a very secure password, as `password1` should *NEVER* be used.
- Let's refresh the permissions for MariaDB `Flush Privileges;`
- Return to the main Debian console `exit`

#### Configure Remote Connections to MariaDB
- Navigate to the folder holding the file we need `cd /etc/mysql/mariadb.conf.d`
- Launch the nano file editor for the configuration file `nano 50-server.cnf`
- Navigate to the Bind Address, and update it to: `0.0.0.0`
- To save your changes, press *Ctrl + X*, then *Y*, followed by *Ctrl + T*. Then use your arrow keys to select `50-server.cnf`
- Now that we've updated a key MariaDB Configuration file, we need to restart the MariaDB process. Enter `sudo /etc/init.d/mysql restart`

#### Configure the Uncomplicated Firewall (UFW)
- Let's refresh our catalog of apps `sudo apt update`
- Let's install UFW `sudo apt install ufw`
- Next, we're going to blanket-block all Incoming connections. This is an important step to protecting your server. We'll open up ports in the following steps `sudo ufw default deny incoming`
- Next, let's blanket-allow all Outgoing connections. This should allow your server to make callouts without issue. `sudo ufw default allow outgoing`
- We need to make sure we don't get locked out of the Console, so we need to unblock port 22, which is the port SSH uses. To do this, enter `sudo ufw allow ssh`
- Let's allow the MariaDB Port to accept incoming connections `sudo ufw allow 3306`
- Let's enable the Authentication Server to accept incoming connections `sudo ufw allow 3724`
- And now the Worldserver port `sudo ufw allow 8085`
- Verify that you've enabled all the above ports, and then turn on UFW with this: `sudo ufw enable`

## AzerothCore Installation
#### Let's clone the AzerothCore Git
- Log in as our sudo user `sudo su azcore`
- Navigate to our home directory `cd` 
- Let's download and clone the latest version of AzerothCore `git clone https://github.com/azerothcore/azerothcore-wotlk.git --branch master --single-branch azerothcore`
- Once the clone is complete, let's navigate to the top level folder of the git directory `cd azerothcore`
- We need to make a folder called *build* `mkdir build`
- Navigate to the new build folder `cd build`
- Now we run the cmake command, this is the pre-compile step to ensure all cpp files are accounted for before we compile, and it tells the compile what to compile. 
```
cmake ../ -DCMAKE_INSTALL_PREFIX=$HOME/azeroth-server/ -DCMAKE_C_COMPILER=/usr/bin/clang -DCMAKE_CXX_COMPILER=/usr/bin/clang++ -DTOOLS=0 -DSCRIPTS=1
```
- Now we compile AzerothCore - this can take some time depending on the number of CPU cores your Droplet has. This tutorial is based on the 4 CPU core Droplet, which compiles in about 8 minutes. Enter the following command to compile the core and place the assembled items in their new home:
```
MTHREADS=`grep -c ^processor /proc/cpuinfo`; MTHREADS=$(($MTHREADS + 2));
make -j $MTHREADS;
make install -j $MTHREADS;
```
- After the terminal says `make install -j $MTHREADS` after compiling, hit 'Return' or 'Enter' on your Keyboard to install and finish the compiling process.

#### Data Files
- As the `azcore` user, let's navigate back to the home directory `cd`
- Now we need to go to the compile server folder `cd azeroth-server`
- We need to make a folder for our data files and navigate to it `mkdir data;cd data`
- Let's download the data files required. `curl https://wow.heyaapl.com/data.zip --output data.zip`
- Let's unzip the main data directory `unzip data.zip`

#### Set up the server config files
- Using SFTP, navigate to `/home/azcore/azeroth-server/etc` and download the authserver.conf.dist and worldserver.conf.dist to your local machine.
- Rename them on your local machine to remove the .dist from the file name. 
- Update the Database information in both the Authserver and Worldserver configuration files by using your file editor to edit. Use the username and password you created in the earlier steps to update the database connection information.
- In the Worldserver config, configure the DataDir folder to: `"/home/azcore/azeroth-server/data"`
- Upload the .conf files back to the etc directory using your SFTP client.

#### Initial Database Setup and Load
- Similar to what was done with the Authserver.conf and Worldserver.conf, we need to update the database import configuration file. Using SFTP, navigate to `/home/azcore/azerothcore/conf/` and find the `config.sh.dist`. Download it to your local machine.
- Rename it to remove the `.dist` from the file name, so it reads `config.sh`. 
- Open up `config.sh` in an editor and locate the section *DB EXPORTER/IMPORTER CONFIGURATIONS*.
- Replace the Database login information beginning at line 153 with the database username and password you set earlier in this tutorial. Do this for the Auth, Character, and World database configuration sections (beginning at line 153, 158, and 163 respectively).
- Save `config.sh` and upload back to the directory `/home/azcore/azerothcore/conf/`.
- We need to be in the git directory in order to execute the import script, so enter the following command `cd /home/azcore/azerothcore`
- Start up the database import script by entering the following command `bash apps/db_assembler/db_assembler.sh`. We need to configure all databases, so we need to choose *Import-all: Assemble & Import All*. Type `import-all` and hit enter. This may error after each execution, but that's ok - it imports each database successfully. Repeate this entire step until the World database loads. Type `quit` once the World database has been imported.

## Server Start Up
#### Final Configuration
- Using your MySQL Client, connect to your database. The IP address of your DigitalOcean server is the hostname, the username is your database username, and the password is your database password. The port should default to 3306. Connect.
- Navigate to the `acore_auth` database, and open up the table called `realmlist`. View the table's Data. 
- Update the `address` value to your server's IP address. This is where you can update the name of the realm of your server if you so choose.

#### Start up Your Server
- In your SSH terminal, enter the following command `cd /home/azcore/azeroth-server/bin`
- Now, let's turn on the Authserver. We're using Screens so we can have both the Authserver and Worldserver open at the same time. We're going to label the Authserver's Screen 'auth'. Enter the following command to start it up `screen -AmdS auth ./authserver`. Enter `screen -r auth` to verify that it started successfully. Press *Ctrl + A, followed by D* to exit the auth screen. To quit the screen altogether, hit *Ctrl + C*. This will kill the process, so only use this when shutting down the Authserver.
- Now, let's turn on the Worldserver. We're going to label the Worldserver's Screen 'world'. Enter the following command to start it up `screen -AmdS world ./worldserver`. Enter `screen -r world` to verify that it started successfully. Press *Ctrl + A, followed by D* to exit the world screen. To quit the screen altogether, hit *Ctrl + C*. This will kill the process, so only use this when shutting down the Worldserver.
- Side note: If you want to learn more about why we're passing `AmdS` when initializing Screens, or to see if there are other arguments you want to pass, [here's a great reference](https://linux.die.net/man/1/screen) on what each letter means and why they're used.

#### Create your In-Game Account
- Navigate to the world screen by typing `screen -r world`
- Enter the following command to create your new account `account create [accountname] [password]`
- Next, let's make your new Account an Administrator account `account set gmlevel [accountname] 3 -1`

#### Update Your Realmlist
- Set your realmlist.wtf to your DigitalOcean IP, which can be found in the `[WoW Directory]/data/enUS`. Edit with your editor, and log in!
