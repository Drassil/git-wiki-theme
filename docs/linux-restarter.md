NOTE: screen is linux package/software only!

### Requirements for automatic restarter on GNU/Linux

1. ***Open terminal and run this command
apt-get install screen***

2. ***Create 3 files in your azerothcore directory***

**First file with name auth.sh and put this code in**

    #!/bin/sh
    while true
    do
    ./authserver
    sleep 60
    done

**2rd file with name world.sh and put this code in**

    #!/bin/sh
    while true
    do
    ./worldserver
    sleep 60
    done

**3rd file with name restarter.sh and put this code in**

    #!/bin/bash
    screen -A -m -d -S authserver ./auth.sh
    screen -A -m -d -S worldserver ./world.sh

3. ***For starting Restarter u must type this command in your terminal
./restarter.sh***

4. ***Your restarter now starting Authserver + Worldserver. If u need look in this screens, use this commands***

    screen -r

*After this command, u can see:
There are several suitable screens (u must find numbers before xxx.authserver) and type this command*

    screen -r xxx.authserver 

and u are in screen!

**Some tips fon screens**
*Ctrl + A then Ctrl + D . Doing this will detach you from the screen session which you can later resume by doing screen -r .
You can also do: Ctrl + A then type : , this will put you in screen command mode. Type the command detach to be detached from the running screen session.*


