
##  How to setup the AzerothCore DB manually

### MySQL client tool

In order to set up your database, you can use whatever MySQL client you like. Some examples are [HeidiSQL](http://www.heidisql.com/download.php), [SequelPro](http://www.sequelpro.com/) and [phpMyAdmin](https://www.phpmyadmin.net/).

We will assume that you already know how to perform the basic tasks like creating a new database, selecting a database and importing a SQL dump file. If you don't, don't worry: it's very easy and you will find a lot of guides on Google, whatever MySQL client tool you're using.

### Creating the databases

Create three empty databases:

- `acore_world`
- `acore_characters`
- `acore_auth`


### Importing the SQL files

The SQL files are located under `/data/sql/` directory.

In `data/sql/base` there are the files to create the base structure & contents for the 3 database (world, auth and characters).

Similarly, in `data/sql/updates` there are the updates that our developers add with time.

Importing those files manually one by one is a long process that can be automated. The script `apps/db_assembler/db_assembler.sh` allows you to assemble those files (i.e. merge them together), so the process of importing them will be faster.
