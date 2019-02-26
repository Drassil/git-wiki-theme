# item\_template\_locale

[<-Back-to:World](database-world.md)

**The \`item\_template\_locale\` table**

This table is used to provide to localized clients with localized string for items.

**Structure**

|                                                            |              |                |         |          |             |           |             |
|------------------------------------------------------------|--------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                                  | **Type**     | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [entry](#item_template_locale-entry)                       | mediumint(8) | unsigned       | PRI     | NO       | 0           |           |             |
| [name\_loc1](#item_template_locale-name_loc)               | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc2](#item_template_locale-name_loc)               | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc3](#item_template_locale-name_loc)               | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc4](#item_template_locale-name_loc)               | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc5](#item_template_locale-name_loc)               | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc6](#item_template_locale-name_loc)               | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc7](#item_template_locale-name_loc)               | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [name\_loc8](#item_template_locale-name_loc)               | varchar(100) | signed         |         | NO       | NULL        |           |             |
| [description\_loc1](#item_template_locale-description_loc) | varchar(255) | signed         |         | YES      | NULL        |           |             |
| [description\_loc2](#item_template_locale-description_loc) | varchar(255) | signed         |         | YES      | NULL        |           |             |
| [description\_loc3](#item_template_locale-description_loc) | varchar(255) | signed         |         | YES      | NULL        |           |             |
| [description\_loc4](#item_template_locale-description_loc) | varchar(255) | signed         |         | YES      | NULL        |           |             |
| [description\_loc5](#item_template_locale-description_loc) | varchar(255) | signed         |         | YES      | NULL        |           |             |
| [description\_loc6](#item_template_locale-description_loc) | varchar(255) | signed         |         | YES      | NULL        |           |             |
| [description\_loc7](#item_template_locale-description_loc) | varchar(255) | signed         |         | YES      | NULL        |           |             |
| [description\_loc8](#item_template_locale-description_loc) | varchar(255) | signed         |         | YES      | NULL        |           |             |

**Description of the fields**

### entry

This entry must be the same as  [item\_template.entry](https://trinitycore.atlassian.net/wiki/display/tc/item_template#item_template-entry) and then the row will be used to provide localization support for this creature record.

### name\_loc

Translated content for [item\_template.name](https://trinitycore.atlassian.net/wiki/display/tc/item_template#item_template-name) field for language X.
See localization languages list to know which value to use for X.

### description\_loc

Translated content for  [item\_template.description](https://trinitycore.atlassian.net/wiki/display/tc/item_template#item_template-description) field for language X.
See localization languages list to know which value to use for X.
