# GNU/Linux
## Debian-based
`sudo apt-get install git cmake make gcc g++ libmysqlclient-dev libssl-dev libbz2-dev libreadline-dev libncurses-dev`

`sudo apt-get install libace-6.0.3 libace-dev`


# Mac OS X

Install XCode using the App Store, then open the terminal and type:

`xcodeselect --install`

For those who don't have [Homebrew](http://brew.sh/) installed, you can easily install it typing:

`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Then use it to install the required packages:

`brew update`

`brew install openssl readline cmake ace coreutils bash bash-completion`

# Windows

* Install Visual Studio 2013 or 2015 Community  

* Install [CMake](https://cmake.org/) version >= 2.8  

* Install latest version of [Git Extensions](https://git-scm.com/download/win)

* [MySQL Server Community Edition](http://dev.mysql.com/downloads/mysql/5.6.html) ( 5.6 or 5.5 )

* [Mysql Development File](https://docs.google.com/uc?id=0B1fF5EIDoF1fWjYwQ1FCNUJmMWc&export=download)
  
  These files are shipped with MySQL Server but to make it easier we packed the libs and include files for both 32 bits and 64 bits.

  Extract the files to a known location, e.g, C:\MySQL, directory structure must be following: C:\MySQL\include and C:\MySQL\lib\debug (Move libmysql.dll and libmysql.lib there) 

* Install [OpenSSL](http://www.slproweb.com/products/Win32OpenSSL.html) version 1.0.x (Do not install the Light version) 
  
  Download the 64bit version. Or you can get both if you plan to compile both 32 and 64bit, they can coexist side by side.

1. Find the 64bit version by finding the _latest _ **Win64 OpenSSL** that is **NOT** the "light" version.
    1. Example: **Win64 OpenSSL v1.0.1p**

2. Find the 32bit version by finding the _latest _ **Win32 OpenSSL** that is **NOT** the "light" version.
    1. Example: **Win32 OpenSSL v1.0.1p**

3. _Note #1: If you get a "Missing Microsoft Visual C++ 2008 Redistributables" error message while installing OpenSSL, download the ** [Microsoft Visual C++ 2008 Redistributable Package (x64)](http://www.microsoft.com/en-us/download/details.aspx?id=29) ** (1.7MB Installer) and install it. If you need 32bit support, download and install the [ **Microsoft Visual C++ 2008 Redistributable Package (x86)** ](http://www.microsoft.com/en-us/download/details.aspx?id=15336)._
4. _Note #2: While installing OpenSSL, choose **The OpenSSL binaries (/bin) directory** (NOT "The Windows system directory") when given the choice on where to copy the OpenSSL DLLs. These DLLs will need to be located easily for Core Installation




***
