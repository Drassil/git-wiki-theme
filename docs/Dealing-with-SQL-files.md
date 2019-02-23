# Dealing with SQL files

## SQL basics

If you are not confident with the SQL language, we suggest to read [this tutorial](http://www.w3schools.com/sql/default.asp) before starting.

Also remember to:

- always use [UPDATE](http://www.w3schools.com/sql/sql_update.asp) in order to change the value of fields of **existing rows**

- use [INSERT](http://www.w3schools.com/sql/sql_insert.asp) in order to insert **new rows only**, but be sure to avoid import errors using [DELETE](http://www.w3schools.com/sql/sql_delete.asp) before INSERT

- surround any table or field name with `backticks`, and string values with `single quotes`, example:

```SQL
UPDATE `table_name` SET `field_I_want_to_change` = 'new string value' WHERE `entry` = 10 ;
```

## Write compact code

Compact code helps to keep the size of our SQL update files small, so installing/updating the ACDB will be faster.

### INSERT

Bad:

```SQL
INSERT INTO `table_1` VALUES (1000, ...);
INSERT INTO `table_1` VALUES (2000, ...);
INSERT INTO `table_1` VALUES (3000, ...);
```


Good:

```SQL
INSERT INTO `table_1` VALUES
(1000, ...),
(2000, ...),
(3000, ...);
```

### UPDATE

Bad:

```SQL
UPDATE `table_1` SET `field_1` = 'someValue' WHERE `entry` = 1000;
UPDATE `table_1` SET `field_1` = 'someValue' WHERE `entry` = 2000;
UPDATE `table_1` SET `field_1` = 'someValue' WHERE `entry` = 3000;
```

Good:

```SQL
UPDATE `table_1` SET `field_1` = 'someValue' WHERE `entry` IN (1000, 2000, 3000);
```

### DELETE

Bad:

```SQL
DELETE FROM `table_1` WHERE `entry` = 1000;
DELETE FROM `table_1` WHERE `entry` = 2000;
DELETE FROM `table_1` WHERE `entry` = 3000;
```

Good:

```SQL
DELETE FROM `table_1` WHERE `entry` IN (1000, 2000, 3000);
```

## How to create an sql update file

This kind of procedure is pretty simple and allow any kind of dev, but also testers, to avoid multiple import of the same queries.

We can proceed by steps:

1. Go into **data/sql/updates** and choose the **pending** folder corresponding to the database you apply your SQL to (pending_db_auth or pending_db_characters or pending_db_world).

2. Run the create_sql.sh script with your bash console. On **Windows**: Use `git bash` (right click on the file). On **Unix/Linux/OSX**: run it from the terminal directly or with "bash create_sql.sh" or execute it with a double click.

3. Now you'll have a file called **rev_[a_long_number].sql** , you can open it and add your queries into.

4. Commit with Git and push to github. Follow our tutorial to create a Pull Request.


--------
This feature grants you ( dev / tester / user ) to:

- create PR without going crazy with the alter table header, but avoiding multiple imports
- avoid wrong order of updates
- avoid data inconsistency if an sql generates an error
