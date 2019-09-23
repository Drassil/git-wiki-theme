### Introduction
To use MySQL server on the command line, you must have the correct system path. This is usually done automatically.

How to check if the MySQL server is a Environment Variable:
* Press `Windows + R` and type cmd
* In the CMD opened type `mysql`

If the MySQL server is not a Environment Variable you will get an error like : `Not recognised command`

### Requirements
It is a must to have MySQL server already installed, if you don't have MySQL server installed follow [this tutorial](http://www.azerothcore.org/wiki/Requirements)

### Procedure

* Locate `mysql.exe`. For example: `C:\Program Files\MySQL\MySQL Server 5.6\bin`
* Search for `Edit the system environment variables`
* Click `Environment Variables` and locate `User variables for $USERNAME`
* Select `Path` variable and click Edit
* Press the `New` button and insert the path to `mysql.exe` you located earlier
* * Example: `C:\Program Files\MySQL\MySQL Server 5.6\bin`

Now everything is set-up and you can acces `mysql` from the command line.

To check if the set-up was done correctly press `Windows + R` and type cmd, when you will type `mysql` in the console you will see all the options.

[Click here to return to the Database Setup](http://www.azerothcore.org/wiki/Database-Setup)
