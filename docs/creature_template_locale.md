# creature\_template\_locale

[<-Back-to:World](database-world.md)

**The \`creature\_template\_locale\` table**

This table is used to provide to localized clients with localized string for creatures.

**Structure**

|                                                        |              |                |         |          |             |           |             |
|--------------------------------------------------------|--------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                              | **Type**     | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [entry](#creature_template_locale-entry)               | mediumint(8) | unsigned       | PRI     | NO       | 0           |           |             |
| [name\_loc1](#creature_template_locale-name_loc)       | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc2](#creature_template_locale-name_loc)       | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc3](#creature_template_locale-name_loc)       | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc5](#creature_template_locale-name_loc)       | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc6](#creature_template_locale-name_loc)       | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc7](#creature_template_locale-name_loc)       | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc8](#creature_template_locale-name_loc)       | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [subname\_loc1](#creature_template_locale-subname_loc) | varchar(100) | signed         |         | YES      | NULL        |           |             |
| [subname\_loc2](#creature_template_locale-subname_loc) | varchar(100) | signed         |         | YES      | NULL        |           |             |
| [subname\_loc3](#creature_template_locale-subname_loc) | varchar(100) | signed         |         | YES      | NULL        |           |             |
| [subname\_loc4](#creature_template_locale-subname_loc) | varchar(100) | signed         |         | YES      | NULL        |           |             |
| [subname\_loc5](#creature_template_locale-subname_loc) | varchar(100) | signed         |         | YES      | NULL        |           |             |
| [subname\_loc6](#creature_template_locale-subname_loc) | varchar(100) | signed         |         | YES      | NULL        |           |             |
| [subname\_loc7](#creature_template_locale-subname_loc) | varchar(100) | signed         |         | YES      | NULL        |           |             |
| [subname\_loc8](#creature_template_locale-subname_loc) | varchar(100) | signed         |         | YES      | NULL        |           |             |

**Description of the fields**

### entry

This entry must be the same as creature\_template.entry and then the row will be used to provide localization support for this creature record.

### name\_loc

Translated content for [creature\_template.name](https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-name) field for language X.
See  [localization languages](https://trinitycore.atlassian.net/wiki/display/tc/Localization+lang) list to know which value to use for X.

### subname\_loc

Translated content for creature\_template.subname field for language X.
See [localization languages](https://trinitycore.atlassian.net/wiki/display/tc/Localization+lang) list to know which value to use for X.
