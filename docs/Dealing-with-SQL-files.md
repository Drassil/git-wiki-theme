# Dealing with SQL files

## SQL basics

If you are not confident with the SQL language, we suggest to read [this tutorial](http://www.w3schools.com/sql/default.asp) before starting.

Also remember to:

- always use [UPDATE](http://www.w3schools.com/sql/sql_update.asp) in order to change the value of fields of **existing rows**

- use [INSERT](http://www.w3schools.com/sql/sql_insert.asp) in order to insert **new rows only**, but be sure to avoid import errors using [DELETE](http://www.w3schools.com/sql/sql_delete.asp) before INSERT

- whenever possible, try to make your query **re-executable** (the same query can run twice without error) e.g. deleting before inserting

- surround any table or field name with `backticks`, and string values with `single quotes`, example:

```sql
UPDATE `table_name` SET `field_I_want_to_change` = 'new string value' WHERE `entry` = 10 ;
```

## Write compact code

Compact code helps to keep the size of our SQL update files small, so installing/updating the ACDB will be faster.

### INSERT

Bad:

```sql
INSERT INTO `table_1` VALUES (1000, ...);
INSERT INTO `table_1` VALUES (2000, ...);
INSERT INTO `table_1` VALUES (3000, ...);
```


Good:

```sql
INSERT INTO `table_1` VALUES
(1000, ...),
(2000, ...),
(3000, ...);
```

### UPDATE

Bad:

```sql
UPDATE `table_1` SET `field_1` = 'someValue' WHERE `entry` = 1000;
UPDATE `table_1` SET `field_1` = 'someValue' WHERE `entry` = 2000;
UPDATE `table_1` SET `field_1` = 'someValue' WHERE `entry` = 3000;
```

Good:

```sql
UPDATE `table_1` SET `field_1` = 'someValue' WHERE `entry` IN (1000, 2000, 3000);
```

### DELETE

Bad:

```sql
DELETE FROM `table_1` WHERE `entry` = 1000;
DELETE FROM `table_1` WHERE `entry` = 2000;
DELETE FROM `table_1` WHERE `entry` = 3000;
```

Good:

```sql
DELETE FROM `table_1` WHERE `entry` IN (1000, 2000, 3000);
```

## How to create an sql update file

This kind of procedure is pretty simple and allow not only developers, but also testers, to avoid multiple import of the same queries.

Always make sure you are up to date with the main repository by quickly doing this beforehand: [Update and sync your fork](http://www.azerothcore.org/wiki/Syncing-your-fork).

Then you need to create a new branch which will hold your SQL Update file:

``` git
## Pick our main branch so other branches can be 
## up to date when being created based on master.
git checkout master

## Create a new branch and checkout to start working on it
git checkout -b this_will_fix_that_problem
```

Now that we are ready, generate the update file by:

#### 1. Acessing the right folder

Inside your local repository, you should have a folder in the path **data/sql/updates**. There we will find many **pending** folders:

  - pending_db_auth 
  - pending_db_characters
  - pending_db_world
  
The one you pick depends on the Databases that needs correction. For example, our query will update `creature.npcflags` and, for this reason, we will create an update SQL file inside pending_db_world due to the table belonging to the world database.

``` SQL
UPDATE `creature_template` SET `npc_flag` = 128 WHERE `entry`= 1234;
```

#### 2. Run the create_sql.sh script with your bash console to generate the file.

On **Windows**: 
  Use `git bash here` (right click on the folder) to open up the git console and execute the shell script by typing __./create_sql.sh__.
  Don't close this console yet so we can use it to commit and push to our remote later on.

On **Unix/Linux/OSX**: 
  run it from the terminal directly or with "bash create_sql.sh" or execute it with a double click.

#### 3. Now you'll have a file called **rev_[a_long_number].sql**

You can open it and add/type your queries into it.

#### 4. Commit with Git and push to github

On **Windows**: 
  Remember when we said not to close the terminal on windows? Now you only need to type the following commands into the
  terminal and you will be ready to open a pull request with your fix.

``` git
## Make sure you have your branch with the new fix checked out.
## Select all your modified files
git add .

## Commit your changes (you can simply type "git commit -v" too)
git commit -v -m "Commit message here"

## origin = your git remote (the url of your fork)
## Don't need to type git push origin this_will_fix_that_problem
## Because origin is our default remote and the branch will be the current one
git push
```

--------
This feature grants you ( dev / tester / user ) to:

- create PR without going crazy with the alter table header, but avoiding multiple imports
- avoid wrong order of updates
- avoid data inconsistency if an sql generates an error
