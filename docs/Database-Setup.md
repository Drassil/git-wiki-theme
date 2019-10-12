You can setup the database manually or using the automated script.

## How to setup the AzerothCore DB using the automated script

### Edit script configuration

- Copy the file `conf/config.sh.dist` to `conf/config.sh`
- Open the `conf/config.sh` with any text editor
- Go to the secion `DB EXPORTER/IMPORTER CONFIGURATIONS`
- Edit the variables accordingly, e.g. you most likely need to edit `MYSQL_USER` and `MYSQL_PASS` variables putting your mysql server settings.

### Run the script

**Note**: if you're using MySQL 5.7, first run `mysql -e "SET GLOBAL sql_mode = '';" -u root -p` first (replace `root` with your mysql user).

**Note**: if you're using Windows you must set-up MySQL as an Environment Variable using [this tutorial](http://www.azerothcore.org/wiki/Environment-Variable) and run the commands using **git bash**

- Make sure you are currently located in the `azerothcore-wotlk` directory
- Run `bash apps/db_assembler/db_assembler.sh`
- Select `import-all: Assemble & Import all`
- Once the process is finished, you can exit the script.

-----------

Alternatively, you could also [set up your DB manually](Database-Manual-Setup.md) but this process is harder and not recommended for beginners.
