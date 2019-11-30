# broadcast\_text\_locale

**The \`broadcast\_text\_locale\` table**

 

This table will have **localized texts** for \`broadcast\_text\` table. Used in [gossips](gossip_menu_option), [creature texts](creature_text) and [npc\_text](npc_text)s.

Its purpose is (will be) used as a globalized table containing the localized texts as mentionned above.


**Structure**

| Field                       | Type         |  Key | Null | Default | Extra | Comment |
|-----------------------------|--------------|------|------|---------|-------|---------|
| [ID](#ID)                   | mediumint(8) |  PRI | NO   | 0       |       |         |
| [locale](#locale)           | varchar(4)   |  PRI | NO   | NULL    |       |         |
| [MaleText](#MaleText)       | text         |      | YES  | NULL    |       |         |
| [FemaleText](#FemaleText)   | text         |      | YES  | NULL    |       |         |
| VerifiedBuild               | smallint(5)  |      | YES  | 0       |       |         |

### Description of the fields

 

### ID

The unique ID value for the text, pointing to ID of the text at broadcast_text table.

### locale

The language in what the text will be broadcasted.
Can have 8 values : deDE, esES, esMX, frFR, koKR, ruRU, zhCN, zhTW

### MaleText

The localized text that the male creature will broadcast, or male players can read from gossip menu.

### FemaleText

The localized text that the female creature will broadcast, or female players can read from gossip menu.

#### WDBVerified

This field is used by the AzerothCore Team to determine whether a template has been verified from WDB files (ADB files for this one).

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is [-Client Build](https://www.azerothcore.org/wiki/realmlist "DB:Auth:realmlist") then it was parsed with WDB files from that specific [client build](https://www.azerothcore.org/wiki/realmlist#gamebuild "DB:Auth:realmlist") and manually edited later for some special necessity.

 
