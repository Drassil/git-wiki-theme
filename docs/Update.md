## 1) Update your local sources

Move to your AzerothCore sources directory.

- If you have your own fork of AzerothCore, you need to [sync it](Syncing-your-fork).

- Otherwise, if you cloned AzerothCore directly from the main repo, you have to `git pull` to update it.

## 2) Recompile

Compile again your sources, this step is the same as the [Compilation step during Installation](Installation#3-compiling), but generally you can skip the CMake part.

For example, in Linux/Mac you just have to `cd build;` and run `make -j 4; make install`.

## 3) Update the Database

**If you are updating your production environment, BACKUP your databases BEFORE updating them!**

You need to import the **new** sql update files (located at https://github.com/azerothcore/azerothcore-wotlk/tree/master/data/sql/updates) to each database.

To automate this process you can use the db-assembler bash script `bash apps/db_assembler/db_assembler.sh`.

![](https://user-images.githubusercontent.com/75517/50738699-6912ee80-11d7-11e9-95ea-667baa0bda70.png)

IMPORTANT: remember to properly set your `conf/config.sh` file before using the `db_assembler.sh` script

