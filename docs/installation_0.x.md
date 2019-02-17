## 1) Installing the requirements

Make sure your system fits with the [requirements](https://github.com/AzerothCore/azerothcore-wotlk/wiki/Requirements).


## 2) Getting the source files

`git clone -b 0.x git@github.com:AzerothCore/azerothcore-wotlk.git azerothcore`

## 3) Compiling

### Compiling on GNU/Linux or Mac OS X

`cd azerothcore`

`mkdir build; cd build`

Before running the CMake command, replace `/home/youruser/azeroth-server/` with the path of the server installation (where you want to place the compiled binaries).

**CMake on Linux:**

`cmake ../ -DCMAKE_INSTALL_PREFIX=/home/youruser/azeroth-server/ -DTOOLS=0 -DSCRIPTS=1`

**CMake on Mac OS X:**

`cmake ../ -DCMAKE_INSTALL_PREFIX=/home/youruser/azeroth-server/ -DTOOLS=0 -DSCRIPTS=1 -DMYSQL_ADD_INCLUDE_PATH=/usr/local/include -DMYSQL_LIBRARY=/usr/local/mysql/lib/libmysqlclient_r.dylib -DREADLINE_INCLUDE_DIR=/usr/local/opt/readline/include -DREADLINE_LIBRARY=/usr/local/opt/readline/lib/libreadline.dylib -DOPENSSL_INCLUDE_DIR=/usr/local/opt/openssl/include -DOPENSSL_SSL_LIBRARIES=/usr/local/opt/openssl/lib/libssl.dylib -DOPENSSL_CRYPTO_LIBRARIES=/usr/local/opt/openssl/lib/libcrypto.dylib`

Then, replacing `4` with the number of threads that you want to execute, type:

`make -j 4`

`make install`

### Compiling on Windows

Open CMake , press `Browse Source...` button and select the folder that you cloned earlier then press `Browse Build...` and select a folder where the CMake will generate the build files. Press the `Configure` button.

CMake will ask you to select what compiler to use. For example you'll want to select `Visual Studio 14 2015 Win64` to compile x64 binaries using Visual Studio 2015. Do not change the `Use default native compilers` option. Press `Finish` and wait until CMake is done checking for requires files.  

Change `CMAKE_INSTALL_PREFIX` to the location where you will run your server from.  
Press `Configure` once again and then press `Generate`. If no error occurred you can close CMake.  
Go to the location where the build files have been generated and open AzerothCore.sln  

Press `BUILD` then select `Build solution` or press F6.  
Wait until the Build has been finished (It should take between 10-40 minutes depending on your hardware).  

Go to the bin/Debug or bin/Release folder inside your build folder and copy the following files into `CMAKE_INSTALL_PREFIX` folder:  
`authserver.exe`  
`worldserver.exe`  
`libmysql.dll`  
`ace.dll`  
`authserver.conf.dist` and rename it to `authserver.conf`  
`worldserver.conf.dist` and rename it to `worldserver.conf`  

Copy `libeay32.dll` and `ssleay32.dll` from OpenSSL install folder into `CMAKE_INSTALL_PREFIX`.  
**Note:** Do not use ARM architecture as azerothcore requires SSE2 and ARM doesn't support it.  


## 4) Setting the configuration files

Inside the directory where you installed the binaries (e.g. `/home/youruser/azeroth-server/`), open the `/etc` directory, then:

- copy the file `authserver.conf.dist` and rename it to `authserver.conf`
- copy the file `worldserver.conf.dist` and rename it to `worldserver.conf`

Open both `authserver.conf` and `worldserver.conf` files and go to the `MYSQL SETTINGS` section, then set the variables:

`LoginDatabaseInfo     = "127.0.0.1;3306;root;your_password;auth"`

`WorldDatabaseInfo     = "127.0.0.1;3306;root;your_password;world"`

`CharacterDatabaseInfo = "127.0.0.1;3306;root;your_password;characters"`

replacing `your_password` with the password of your MySQL server root user
(the `authserver.conf` has the `LoginDatabaseInfo` variable only).

In the worldserver.conf file, also set:

`DataDir = "/home/youruser/azeroth-server/data"`

replacing `/home/youruser/azeroth-server` with the path where you installed the binaries.


## 5) Download the data files

Go to the directory of your azeroth server (e.g. `/home/youruser/azeroth-server`) and create a new directory named `data`

Download [this archive](https://mega.nz/#F!FMYzASKA!M-RY7OgXUR0nhWpnPKwusg). It contains several archives, extract all of them placing the extracted `dbc`, `maps`, `mmaps`, `vmaps` directories inside the data directory.


## 6) Setting up the database

### MySQL client tool

In order to set up your database, you can use whatever MySQL client you like. Some examples are [HeidiSQL](http://www.heidisql.com/download.php), [SequelPro](http://www.sequelpro.com/) and [phpMyAdmin](https://www.phpmyadmin.net/).

We will assume that you already know how to perform the basic tasks like creating a new database, selecting a database and importing a SQL dump file. If you don't, don't worry: it's very easy and you will find a lot of guides on Google, whatever MySQL client tool you're using.

### Creating the databases

Create three empty databases:

- `world`
- `characters`
- `auth`

if, for some reasons, you decide to name them differently, remember to edit your `authserver.conf` and `worldserver.conf` accordingly.
### Use the AzerothCore Database Assembler

In your sources directory, move to `azerothcore/conf`

copy the file `config.sh.dist` and rename it to `config.sh`

edit `config.sh` and set `ALL_IN_ONE=1`

Now move to `azerothcore/bin/db_assembler/`.

- For Mac OS X users **only**: open the `db_assembler.sh` file with a text editor and replace the first line `#!/bin/bash` with **#!/usr/local/bin/bash**

run the `db_assembler.sh` script:

`./db_assembler.sh`

it will generate the databases under the `/bin/db_assembler/output` directory of your azerothcore sources directory.

### SECTION FOR WHO CAN'T GET FULL BASED DB IN WINDOWS ###
# STEP FOR AUTH DB:
Go to AzerothCore\data\sql\base\db_auth 
(AzerothCore is folder where you clone source code)
open CMD and cd it there, in my case: ( You should complete to step to cd to db_auth folder )
"cd D:\Wow-Sources Repos\AzerothCore\data\sql\base\db_auth"
"D:"

or more easy UI Way is shift + right click in the db_auth folder, you will see an option "open command window here"
it would give the same result above.

Now type:
"copy /b *.sql nameofoutputsql_youwantrofl.sql"

Then you can get a full based db_auth file without import one by one. Don't forget to do apply update/db_auth folder.
Do it the same for characters and world

### Import the SQL dumps
 
Using your MySQL client tool, import the generated SQL dumps:

- `auth.sql` to your `auth` database

- `characters.sql` to your `characters` database

- `world.sql` to your `world` database


## 7) Starting the servers

### GNU/Linux and Mac OS X

Open 2 terminal windows (or terminal tabs) and move to the `bin` directory of your azeroth server (for example `/home/youruser/azeroth-server/bin`), 

then in one window/tab type:

`./authserver`

in the other one:

`./worldserver`


### Windows

Run `worldserver.exe` and `authserver.exe` from `CMAKE_INSTALL_PREFIX`.