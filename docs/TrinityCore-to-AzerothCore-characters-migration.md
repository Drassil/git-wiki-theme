# TrinityCore to AzerothCore Character Migration

### 1) Install AzerothCore  

Follow the Installation instructions and install and setup AzerothCore Fresh Install (we will need this after the conversion).

Instructions to setup AzerothCore can be found at the links below
- http://www.azerothcore.org/wiki/Installation
- http://www.azerothcore.org/wiki/Database-Setup
- http://www.azerothcore.org/wiki/Update

Make sure you have a fresh installation completed and working with no additional modules before proceeding. 

### 2) Backup your TrinityCore Databases

Backup your TrinityCore Databases before proceeding (always backup before making changes)
- auth
- characters
- world

### 3) Character Migration

Download the TC-AC character migration tool.

Now you have your AzerothCore server tested and working we can migrate the characters.

Download TC - AC Migration Tool:  https://github.com/azerothcore/tool-tc-migration.git

The following files must be run in order from 1 to 4 on your TrinityCore characters database:

- 1_CREATE_CLEANUP_TABLES
- 2_CREATE_MISSING_TABLES
- 3_ALTER_TABLES
- 4_CLEANUP_AND_CONVERT_SPELLS
- 5_FINAL_CLEANUP

Change the location of the charcters database in the worldserver.conf to your converted TrinityCore characters Database
and start the `./worldserver`



