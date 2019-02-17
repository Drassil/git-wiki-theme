You can setup the database manually or using the automated script.

## Setup the DB using the automated script (recommended)

### Edit script configuration

- Copy the file `conf/config.sh.dist` to `conf/config.sh`
- Open the `conf/config.sh` with any text editor
- Go to the secion `DB EXPORTER/IMPORTER CONFIGURATIONS`
- Edit the variables accordingly, e.g. you most likely need to edit `MYSQL_USER` and `MYSQL_PASS` variables putting your mysql server settings.

### Run the script

**Note**: if you're using MySQL 5.7, first run `mysql -e "SET GLOBAL sql_mode = '';" -u root -p` first (replace `root` with your mysql user).

- Run `bash apps/db_assembler/db_assembler.sh`
- Select `import-all: Assemble & Import all`
- Once the process is finished, you can exit the script.

##  Setup the DB using the automated script manually

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
