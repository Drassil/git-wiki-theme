# page\_text\_locale

[<-Back-to:World](database-world.md)

**The \`page\_text\_locale\` table**

This table is used to provide localized clients with localized string for page\_texts.

**Structure**

|                                      |              |                |         |          |             |           |             |
|--------------------------------------|--------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                            | **Type**     | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [ID](#page_text_locale-entry)        | mediumint(8) | unsigned       | PRI     | NO       | 0           |           |             |
| [l](#page_text_locale-Text_loc)ocale | longtext     | signed         |         | YES      | NULL        |           |             |
| [Name](#page_text_locale-Name)       | longtext     | signed         |         | YES      | NULL        |           |             |

**Description of the fields**

### ID

This entry must be the same as  [page\_text.entry](https://trinitycore.atlassian.net/wiki/display/tc/page_text#page_text-entry) and then the row will be used to provide localization support for this page\_text record.

### Name

Translated content for [page\_text.text](https://trinitycore.atlassian.net/wiki/display/tc/page_text#page_text-text) field for language X.
See  [localization languages](https://trinitycore.atlassian.net/wiki/display/tc/Localization+lang) list to know which value to use for X.
