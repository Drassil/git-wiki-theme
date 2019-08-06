# TrinityCore to AzerothCore Character & Auth Migration Tool

### 1) Install AzerothCore  

Follow the Installation instructions and install a fresh setup of AzerothCore (we will need this after the conversion).

Instructions to setup AzerothCore can be found [here](http://www.azerothcore.org/wiki/Installation).

Make sure you have a fresh installation completed and working with no additional modules before proceeding. 

### 2) Backup your TrinityCore Databases

Backup your TrinityCore Databases before proceeding (always backup before making changes)
- auth
- characters
- world

### 3) Character & Auth Migration

Download the [TC-to-AC character migration tool](https://github.com/azerothcore/tool-tc-migration).

The following files must be run in order from 1 to 5 on your TrinityCore characters database:

- 1_CREATE_CLEANUP_TABLES
- 2_CREATE_MISSING_TABLES
- 3_ALTER_TABLES
- 4_CLEANUP_AND_CONVERT_SPELLS
- 5_FINAL_CLEANUP

Run the following file no.6 on your Trinitycore Auth Database

- 6_AUTH_CONVERTER

Change the `worldserver.conf` of your AzerothCore server to point to your converted (ex TrinityCore) characters database
and start the `./worldserver`


