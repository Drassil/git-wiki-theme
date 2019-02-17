We've two kind of versions:

- Chronological versioning, For accepted sql files

- Versioning by id, mostly used for pending sql

## Chronological Versioning

We use the good old MaNGOS-way to make sure that all the **/data/sql/updates/** files are imported in the right order, preventing from double imports or skipping files.

In order to achieve this, we use a specific **convention for file names** and we add a special **SQL Header** at the top of their content.

### File names

The format we use to name sql update files is: **YYY_MM_DD_XX.sql**

where:
- **YYYY** -> year
- **MM** -> month
- **DD** -> day
- **XX** -> an incremental number starting from 00 to uniquely identify different files of the same day

### SQL Header

The SQL Header is a special query that **must** be added at the top of the content of **every** sql update file.

The format is the following:

ALTER TABLE version_db_**database** CHANGE COLUMN  **previous_file_name**  **this_file_name**  bit;

Replacing:
- *database* with **world**, **character** or **auth**
- *previous-file-name* with the name of the latest file ( without extension )
- *this-file-name** with the name of the new file itself ( without extension )

The following is an example of the SQL Header query ( for auth database ):

`ALTER TABLE version_db_auth CHANGE COLUMN 2016_07_09_01 2016_07_10_00 bit;`

## Versioning by id

Pending sql files cannot use the protection system described above because we are not able to know previously the date when they will be accepted. 

So we're using an optional versioning ( but recommended for devs and expecially for pull requests ).

We've  introduced a field inside version_db_* tables that is a primary key string, and also a 'required_rev' field that you can use to allow relation by versions. 

For example you can create a version "X" that is related to a version "Y" that is not necessary the previous one.

currently we're using this bash command to avoid, as much as possibile, collisions between revisions: date +%s%N

if a collision happens ( extremely hard ), it can be easily solved manually however.

the final query will be:

`INSERT INTO version_db_auth(sql_rev,required_rev) VALUES ('1472557015805232200','1472557004102672900');`

or in case of not required_rev:

`INSERT INTO version_db_auth(sql_rev) VALUES ('1472557015805232200');`

Adding it in first line of your sql, it generates an error in case of double import; Such as for chronological versioning.

There's a bash script under pending_* folders that will create an sql with this row on first line for you, moreover will name the file to be reconized by our import system. We strongly suggest to use it.

## The pending import system

As said before, we've a special workflow for PR to allow db data consistency for devs

it requires some stuffs to be done on your PR's sql to be compatible with our import system and allow you to avoid double importing of same queries.

The how to is described under [[Dealing-with-SQL-files|Dealing-with-SQL-files]] article