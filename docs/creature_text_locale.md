# creature\_text\_locale

[<-Back-to:World](database-world.md)

**The \`creature\_text\_locale\` table**

This table is used to provide to localized clients with localized string for creatures texts.

**Structure**

| Field                                        | Type         | Attributes | Key | Null | Default | Extra | Comment |
|----------------------------------------------|--------------|------------|-----|------|---------|-------|---------|
| [entry](#creature_text_locale-entry)         | mediumint(8) | unsigned   | PRI | NO   | 0       |       |         |
| [groupid](#creature_text_locale-groupid)     | tinyint(3)   | unsigned   | PRI | NO   | 0       |       |         |
| [id](#creature_text_locale-id)               | tinyint(3)   | unsigned   | PRI | NO   | 0       |       |         |
| [text\_loc1](#creature_text_locale-text_loc) | text         |            |     | YES  | NULL    |       |         |
| [text\_loc2](#creature_text_locale-text_loc) | text         |            |     | YES  | NULL    |       |         |
| [text\_loc3](#creature_text_locale-text_loc) | text         |            |     | YES  | NULL    |       |         |
| [text\_loc4](#creature_text_locale-text_loc) | text         |            |     | YES  | NULL    |       |         |
| [text\_loc5](#creature_text_locale-text_loc) | text         |            |     | YES  | NULL    |       |         |
| [text\_loc6](#creature_text_locale-text_loc) | text         |            |     | YES  | NULL    |       |         |
| [text\_loc7](#creature_text_locale-text_loc) | text         |            |     | YES  | NULL    |       |         |
| [text\_loc8](#creature_text_locale-text_loc) | text         |            |     | YES  | NULL    |       |         |

**Description of the fields**

### entry

This entry must be the same as [creature\_text.entry](https://trinitycore.atlassian.net/wiki/display/tc/creature_text#creature_text-entry) and then the row will be used to provide localization support for this creature record.

### groupid

This entry must be the same as [creature\_text.groupid](https://trinitycore.atlassian.net/wiki/display/tc/creature_text#creature_text-groupid) and then the row will be used to provide localization support for this creature record.

### id

This entry must be the same as [creature\_text.id](https://trinitycore.atlassian.net/wiki/display/tc/creature_text#creature_text-id) and then the row will be used to provide localization support for this creature record.

### text\_loc

Translated content for [creature\_text.text](https://trinitycore.atlassian.net/wiki/display/tc/creature_text#creature_text-text) field for language X.
See [localization languages](Localization+lang) list to know which value to use for X.

 
