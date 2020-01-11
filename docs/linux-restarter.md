## Introduction
This tutorial will walk you through creating a script to restart AzerothCore after a shutdown, restart, or crash when using a Linux server.

## Creating The Scripts
#### Prerequisites
- Verify that your Linux server has screen and nano installed. 
```
sudo apt-get update && sudo apt-get install screen nano
```
- Once you've installed screen and nano, continue on to the next step.

#### Script Creation
- Navigate to your server bin directory `~/azeroth-server/bin` and type `nano auth.sh`
- In the new nano screen, enter the following script:
```
#!/bin/sh
while :; do
./authserver
sleep 20
done
```
- Once entered, press Ctrl + O, hit Enter, and then Ctrl + X. That will save the new script and return you to the terminal. We've just created the Authserver restart script. Let's next create the Worldserver script.
- Type `nano world.sh`
- In the new nano screen, enter the following script:
```
while :; do
./worldserver
sleep 20
done
```
- Once entered, press Ctrl + O, hit Enter, and then Ctrl + X. That will save the new script and return you to the terminal. We've just created the Worldserver restart script. Let's next create a script that will launch both the Authserver and Worldserver restarter scripts.
- Type `nano restarter.sh`
```
#!/bin/bash
screen -AmdS auth ./auth.sh
screen -AmdS world ./world.sh
```
- Once entered, press Ctrl + O, hit Enter, and then Ctrl + X. Finally, let's create our server shutdown script.
- Type `nano shutdown.sh`
```
#!/bin/bash
screen -X -S "world" quit
screen -X -S "auth" quit
```
- Once entered, press Ctrl + O, hit Enter, and then Ctrl + X. Next, let's start our server.

## Server Management
#### Server Startup
- To start your server with the scripts, ensure you are in you server bin directory `~/azeroth-server/bin`.
- We will start the restart scripts by typing the following command `./restarter.sh'
- Side note: If you wish to start the server and see the worldserver console, use the following command `./restarter.sh;screen -r world`

#### Server Monitoring
- To access and view the Authserver or Worldserver consoles:
-- Authserver: `screen -r auth`
-- Worldserver: `screen -r world`
- When you want to exit the screen and return to your terminal, type Ctrl + A, followed by D.

#### Server Shutdown
- To terminate the restarter and shutdown your server, ensure you are in you server bin directory `~/azeroth-server/bin`.
- Type `./shutdown.sh` and the scripts will turn off and your server will terminate.
