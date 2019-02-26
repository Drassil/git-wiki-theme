# gameobject\_template\_locale

[<-Back-to:World](database-world.md)

**The \`gameobject\_template\_locale\` table**

This table is used to provide to localized clients with localized string for gameobjects.

**Structure**

|                                                                        |              |                |         |          |             |           |             |
|------------------------------------------------------------------------|--------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                                              | **Type**     | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [entry](#gameobject_template_locale-entry)                             | mediumint(8) | unsigned       | PRI     | NO       | 0           |           |             |
| [name\_loc1](#gameobject_template_locale-name_loc)                     | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc2](#gameobject_template_locale-name_loc)                     | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc3](#gameobject_template_locale-name_loc)                     | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc4](#gameobject_template_locale-name_loc)                     | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc5](#gameobject_template_locale-name_loc)                     | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc6](#gameobject_template_locale-name_loc)                     | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc7](#gameobject_template_locale-name_loc)                     | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc8](#gameobject_template_locale-name_loc)                     | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [castbarcaption\_loc1](#gameobject_template_locale-castbarcaption_loc) | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [castbarcaption\_loc2](#gameobject_template_locale-castbarcaption_loc) | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [castbarcaption\_loc3](#gameobject_template_locale-castbarcaption_loc) | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [castbarcaption\_loc4](#gameobject_template_locale-castbarcaption_loc) | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [castbarcaption\_loc5](#gameobject_template_locale-castbarcaption_loc) | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [castbarcaption\_loc6](#gameobject_template_locale-castbarcaption_loc) | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [castbarcaption\_loc7](#gameobject_template_locale-castbarcaption_loc) | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [castbarcaption\_loc8](#gameobject_template_locale-castbarcaption_loc) | varchar(100) | signed         |         | NO       | NULL        |           |             |

**Description of the fields**

### entry

This entry must be the same as  [gameobject\_template.entry](https://trinitycore.atlassian.net/wiki/display/tc/gameobject_template#gameobject_template-entry) and then the row will be used to provide localization support for this gameobject record.

### name\_loc

Translated content for [gameobject\_template.name](https://trinitycore.atlassian.net/wiki/display/tc/gameobject_template#gameobject_template-name) field for language X.
See  [localization languages](https://trinitycore.atlassian.net/wiki/display/tc/Localization+lang) list to know which value to use for X.

### castbarcaption\_loc

Translated content for  [gameobject\_template.castBarCaption](https://trinitycore.atlassian.net/wiki/display/tc/gameobject_template#gameobject_template-castBarCaption) field for language X.
See  [localization languages](https://trinitycore.atlassian.net/wiki/display/tc/Localization+lang) list to know which value to use for X.
