# AZEROTHCORE INSTALLATION

## DOCKER INSTALLATION

This page describes how to use [AzerothCore with Docker](Install-with-Docker.md).

## AWS INSTALLATION

This page describes how to use [AzerothCore with AWS](aws-tutorial.md)

## DIGITALOCEAN CLOUD

This page describes how to use [AzerothCore on a Digital Ocean droplet](digital-ocean-video-tutorial.md)

## CLASSIC INSTALLATION

/!\ For **macOS** users: the build on mac is currently broken (see [this issue](https://github.com/azerothcore/azerothcore-wotlk/issues/122)), but you can still use AzerothCore on macOS with Docker.

### 1) Requirements

Make sure your system fits the [Requirements](Requirements.md).


### 2) Getting the source files

Choose one of the following method:


```
1) Clone only the master branch + full history (smaller size - recommended):
git clone https://github.com/azerothcore/azerothcore-wotlk.git --branch master --single-branch azerothcore

2) Clone only the master branch + no previous history (smallest size):
git clone https://github.com/azerothcore/azerothcore-wotlk.git --branch master --single-branch azerothcore --depth 1

3) Clone all branches and all history:
git clone https://github.com/azerothcore/azerothcore-wotlk.git azerothcore
```

Note: If you want to get the full history back, use `git fetch --unshallow` (if you chose option 2).


### 3) Compiling

#### Compiling on GNU/Linux or Mac OS X

```
cd azerothcore
mkdir build
cd build
```

Before running the CMake command, replace `$HOME/azeroth-server/` with the path of the server installation (where you want to place the compiled binaries).

**CMAKE OPTIONS**

Check the options here if you know what you're doing: [CMake options](CMake-options.md)


**CMake on Linux:**

At this point, you must be in your "build/" directory.

**Note**: in the following command the variable `$HOME` is the path of the **current user**, so if you are logged as root, $HOME will be "/root".

**Note2**: in case you use a non-default package for `clang`, you need to replace it accordingly. For example, if you installed `clang-6.0` then you have to replace `clang` with `clang-6.0` and `clang++` with `clang++-6.0`

```
cmake ../ -DCMAKE_INSTALL_PREFIX=$HOME/azeroth-server/ -DCMAKE_C_COMPILER=/usr/bin/clang -DCMAKE_CXX_COMPILER=/usr/bin/clang++ -DTOOLS=0 -DSCRIPTS=1 -DWITH_WARNINGS=1 -DCMAKE_C_FLAGS="-Werror" -DCMAKE_CXX_FLAGS="-Werror"
```

Then, replacing `6` with the number of threads that you want to execute, type:

```
make -j 6
make install
```

**CMake on Mac OS X:**

**Note**: in the follows command the variable `$HOME` is the path of the **current user**, so if you are logged as root, $HOME will be "/root".

```
cmake ../ -DCMAKE_INSTALL_PREFIX=$HOME/azeroth-server/ -DTOOLS=0 -DSCRIPTS=1 -DMYSQL_ADD_INCLUDE_PATH=/usr/local/include -DMYSQL_LIBRARY=/usr/local/lib/libmysqlclient_r.dylib -DREADLINE_INCLUDE_DIR=/usr/local/opt/readline/include -DREADLINE_LIBRARY=/usr/local/opt/readline/lib/libreadline.dylib -DOPENSSL_INCLUDE_DIR=/usr/local/opt/openssl/include -DOPENSSL_SSL_LIBRARIES=/usr/local/opt/openssl/lib/libssl.dylib -DOPENSSL_CRYPTO_LIBRARIES=/usr/local/opt/openssl/lib/libcrypto.dylib
```

Then, replacing `4` with the number of threads that you want to execute, type:

```
make -j 4
make install
```

#### Compiling on Windows

Open CMake, press `Browse Source...` button and select the folder that you cloned earlier then press `Browse Build...` and select a folder where the CMake will generate the build files. Press the `Configure` button.

CMake will ask you to select what compiler to use. For example you'll want to select `Visual Studio 15 2017` to compile binaries using Visual Studio 2017. If you want to build using x64 set `Optional platform for generator` to x64. Do not change the `Use default native compilers` option. Press `Finish` and wait until CMake is done checking for requires files.

Change `CMAKE_INSTALL_PREFIX` to the location where you will run your server from.  
Press `Configure` once again and then press `Generate`. If no error occurred you can close CMake.  
Go to the location where the build files have been generated and open AzerothCore.sln  

_Note: If MySQL is not found by CMake it is required to set MYSQL_INCLUDE_DIR = C:/mysql_libs/include and MYSQL_LIBRARY= C:/mysql_libs/lib_XX/libmysql.lib._
_XX depends if you are compiling in 32 or 64 bits mode. ( See [Windows Requirements article](Requirements.md#windows) )_

Press `BUILD` then select `Build solution` or press F6.  
Wait until the Build has been finished (It should take between 10-40 minutes depending on your hardware).  

You will find your freshly compiled binaries in the Build\bin\Release or Build\bin\Debug folder. These are all used to run your server at the end of this instruction.
 
You will need the following files in order for the core to function properly:
 
```
libeay32.dll
libmySQL.dll 
ssleay32.dll 
ace.dll
worldserver.conf.dist
worldserver.exe 
authserver.conf.dist 
authserver.exe
```

Copy `libeay32.dll` and `ssleay32.dll` from OpenSSL install folder into `CMAKE_INSTALL_PREFIX`.

Copy `libmysql.dll` from your MYSQL_LIBRARY path into `CMAKE_INSTALL_PREFIX`


**Note:** Do not use ARM architecture as azerothcore requires SSE2 and ARM doesn't support it.  


### 4) Setting the configuration files

Inside the directory where you installed the binaries (e.g. `/home/youruser/azeroth-server/`), open the directory where configuration files has been installed  ( `etc/` on linux ) , then:

- copy the file `authserver.conf.dist` and rename it to `authserver.conf` ( DO NOT REMOVE THE .dist FILE )
- copy the file `worldserver.conf.dist` and rename it to `worldserver.conf` ( DO NOT REMOVE THE .dist FILE )

_Please Read [How to edit .conf files](how-to-work-with-conf-files.md) article to understand how configuration files work, and why you need the .dist file too_

Open both `authserver.conf` and `worldserver.conf` files and go to the `MYSQL SETTINGS` section, then set the variables:

```
LoginDatabaseInfo     = "127.0.0.1;3306;acore;acore;acore_auth"
WorldDatabaseInfo     = "127.0.0.1;3306;acore;acore;acore_world"
CharacterDatabaseInfo = "127.0.0.1;3306;acore;acore;acore_characters"
```

The default user is `acore` with password `acore`. If you would like to use another MySQL user, change the credentials here.
(the `authserver.conf` has the `LoginDatabaseInfo` variable only).

In the worldserver.conf file, also set:

`DataDir = "/home/youruser/azeroth-server/data"`

replacing `/home/youruser/azeroth-server` with `CMAKE_INSTALL_PREFIX`.


### 5) Download the data files

Go to `CMAKE_INSTALL_PREFIX` and create a new directory named `data`

Two options to choose from:

##### A) [Extract Client Data](http://www.azerothcore.org/wiki/Extract-Client-Data) from your own WOW client using the AzerothCore extractors (required for custom maps)
##### B) (Easier) Download directly using one of the links below:

Github links:

[Full data (v8) - from 13/08/19 to now](https://github.com/wowgaming/client-data/releases/tag/v7) (Used in the automatic downloader script in `/apps/`)


Mega links:
- [DBC & maps for all versions](https://mega.nz/#F!pyYlkK6b!pNz-zhThXQIg0_rO5L_RsQ)
- [Vmaps & mmaps only (v8) - from 13/08/19 to now](https://mega.nz/#F!xqYxDQ5K!PesmFvXRSqiCRcknVxBn5g)


Old versions links (< v8):
- [From 03/01/19 to 13/08/19](https://mega.nz/#F!Am4DBKCR!o9Qj_xFLfsg4sczqg0xq2A)
- [From 07/18/18 to 03/01/19](https://mega.nz/#!utg3hKJL!TtSzcWxVkvxF4HJvor8LFWhrBwwpH2pHpI-xHGr-HZo) (before commit [59d4e1d3a806a4f2f48f535be366bde1b24d737e](https://github.com/azerothcore/azerothcore-wotlk/commit/59d4e1d3a806a4f2f48f535be366bde1b24d737e)) 
- For older versions, check out this page's history.


Then, extract all the archives and place the extracted `dbc`, `maps`, `mmaps`, `vmaps` directories inside the `data` directory.


### 6) Setting up the database

#### Base DB setup
Follow these instructions: [Database Setup](Database-Setup).

**Note**: by default, database names are configured to be named:

- `acore_characters`
- `acore_auth`
- `acore_world`

 if, for some reasons, you decide to name them differently, remember to edit your `authserver.conf` and `worldserver.conf` accordingly.

#### Configure your auth.realmlist table

In the `acore_auth` database, you must fill the `realmlist` table with your connection info.
It must correspond with the values in `worldserver.conf` (for realmid, flag and realmzone).

    Address: 127.0.0.1 OR <Your LOCAL NETWORK ip>  OR <Your PUBLIC NETWORK ip>
    Port :  worldserver port


### 7) Starting the servers

#### GNU/Linux and Mac OS X

Open 2 terminal windows (or terminal tabs) and move to the `bin` directory of your azeroth server (for example `/home/youruser/azeroth-server/bin`), 

then in one window/tab type:

`./authserver`

in the other one:

`./worldserver`


#### Windows

Run `worldserver.exe` and `authserver.exe` from `CMAKE_INSTALL_PREFIX`.


### 8) Connecting to the server

Edit your `realmlist.wtf` and add the IP you set in the realmlist table (and the port if needed). Then you can connect with a newly made account or the test accounts (`test1` to `test10`, with password `a`).

You can change all the passwords at once by pasting this into the worldserver console:
```
.account set password test1 new_pass new_pass
.account set password test2 new_pass new_pass
.account set password test3 new_pass new_pass
.account set password test4 new_pass new_pass
.account set password test5 new_pass new_pass
.account set password test6 new_pass new_pass
.account set password test7 new_pass new_pass
.account set password test8 new_pass new_pass
.account set password test9 new_pass new_pass
.account set password test10 new_pass new_pass
```

### Optional: Creating a regular user to work with on Linux
Start with logging in to your Linux machine and create an account for the server itself on most recent distributions this can easily be done with the following command :

```sudo adduser <username>``` Note: Change `<username>` to the preferred username of your going to use on your server.  
    
```sudo su - <username>``` Note: Switch user to newly created `<username>` so everything will run and compile with the user you just have created.
