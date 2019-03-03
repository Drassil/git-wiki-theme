# quest\_template\_locale

[<-Back-to:World](database-world.md)

**The \`quest\_template\_locale\` table**

This table is used to provide to localized clients with localized string for quest templates.

**Structure**

|                                                                       |              |                |         |          |             |           |             |
|-----------------------------------------------------------------------|--------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                                             | **Type**     | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [Id](#quest_template_locale-Id)                                       | mediumint(8) | unsigned       | PRI     | NO       |             |           |             |
| [Title\_loc1](#quest_template_locale-Title_loc)                       | text         | signed         |         | YES      | NULL        |           |             |
| [Title\_loc2](#quest_template_locale-Title_loc)                       | text         | signed         |         | YES      | NULL        |           |             |
| [Title\_loc3](#quest_template_locale-Title_loc)                       | text         | signed         |         | YES      | NULL        |           |             |
| [Title\_loc4](#quest_template_locale-Title_loc)                       | text         | signed         |         | YES      | NULL        |           |             |
| [Title\_loc5](#quest_template_locale-Title_loc)                       | text         | signed         |         | YES      | NULL        |           |             |
| [Title\_loc6](#quest_template_locale-Title_loc)                       | text         | signed         |         | YES      | NULL        |           |             |
| [Title\_loc7](#quest_template_locale-Title_loc)                       | text         | signed         |         | YES      | NULL        |           |             |
| [Title\_loc8](#quest_template_locale-Title_loc)                       | text         | signed         |         | YES      | NULL        |           |             |
| [Details\_loc1](#quest_template_locale-Details_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [Details\_loc2](#quest_template_locale-Details_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [Details\_loc3](#quest_template_locale-Details_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [Details\_loc4](#quest_template_locale-Details_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [Details\_loc5](#quest_template_locale-Details_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [Details\_loc6](#quest_template_locale-Details_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [Details\_loc7](#quest_template_locale-Details_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [Details\_loc8](#quest_template_locale-Details_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [Objectives\_loc1](#quest_template_locale-Objectives_loc)             | text         | signed         |         | YES      | NULL        |           |             |
| [Objectives\_loc2](#quest_template_locale-Objectives_loc)             | text         | signed         |         | YES      | NULL        |           |             |
| [Objectives\_loc3](#quest_template_locale-Objectives_loc)             | text         | signed         |         | YES      | NULL        |           |             |
| [Objectives\_loc4](#quest_template_locale-Objectives_loc)             | text         | signed         |         | YES      | NULL        |           |             |
| [Objectives\_loc5](#quest_template_locale-Objectives_loc)             | text         | signed         |         | YES      | NULL        |           |             |
| [Objectives\_loc6](#quest_template_locale-Objectives_loc)             | text         | signed         |         | YES      | NULL        |           |             |
| [Objectives\_loc7](#quest_template_locale-Objectives_loc)             | text         | signed         |         | YES      | NULL        |           |             |
| [Objectives\_loc8](#quest_template_locale-Objectives_loc)             | text         | signed         |         | YES      | NULL        |           |             |
| [OfferRewardText\_loc1](#quest_template_locale-OfferRewardText_loc)   | text         | signed         |         | YES      | NULL        |           |             |
| [OfferRewardText\_loc2](#quest_template_locale-OfferRewardText_loc)   | text         | signed         |         | YES      | NULL        |           |             |
| [OfferRewardText\_loc3](#quest_template_locale-OfferRewardText_loc)   | text         | signed         |         | YES      | NULL        |           |             |
| [OfferRewardText\_loc4](#quest_template_locale-OfferRewardText_loc)   | text         | signed         |         | YES      | NULL        |           |             |
| [OfferRewardText\_loc5](#quest_template_locale-OfferRewardText_loc)   | text         | signed         |         | YES      | NULL        |           |             |
| [OfferRewardText\_loc6](#quest_template_locale-OfferRewardText_loc)   | text         | signed         |         | YES      | NULL        |           |             |
| [OfferRewardText\_loc7](#quest_template_locale-OfferRewardText_loc)   | text         | signed         |         | YES      | NULL        |           |             |
| [OfferRewardText\_loc8](#quest_template_locale-OfferRewardText_loc)   | text         | signed         |         | YES      | NULL        |           |             |
| [RequestItemsText\_loc1](#quest_template_locale-RequestItemsText_loc) | text         | signed         |         | YES      | NULL        |           |             |
| [RequestItemsText\_loc2](#quest_template_locale-RequestItemsText_loc) | text         | signed         |         | YES      | NULL        |           |             |
| [RequestItemsText\_loc3](#quest_template_locale-RequestItemsText_loc) | text         | signed         |         | YES      | NULL        |           |             |
| [RequestItemsText\_loc4](#quest_template_locale-RequestItemsText_loc) | text         | signed         |         | YES      | NULL        |           |             |
| [RequestItemsText\_loc5](#quest_template_locale-RequestItemsText_loc) | text         | signed         |         | YES      | NULL        |           |             |
| [RequestItemsText\_loc6](#quest_template_locale-RequestItemsText_loc) | text         | signed         |         | YES      | NULL        |           |             |
| [RequestItemsText\_loc7](#quest_template_locale-RequestItemsText_loc) | text         | signed         |         | YES      | NULL        |           |             |
| [RequestItemsText\_loc8](#quest_template_locale-RequestItemsText_loc) | text         | signed         |         | YES      | NULL        |           |             |
| [EndText\_loc1](#quest_template_locale-EndText_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [EndText\_loc2](#quest_template_locale-EndText_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [EndText\_loc3](#quest_template_locale-EndText_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [EndText\_loc4](#quest_template_locale-EndText_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [EndText\_loc5](#quest_template_locale-EndText_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [EndText\_loc6](#quest_template_locale-EndText_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [EndText\_loc7](#quest_template_locale-EndText_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [EndText\_loc8](#quest_template_locale-EndText_loc)                   | text         | signed         |         | YES      | NULL        |           |             |
| [CompletedText\_loc1](#quest_template_locale-CompletedText_loc)       | text         | signed         |         | YES      | NULL        |           |             |
| [CompletedText\_loc2](#quest_template_locale-CompletedText_loc)       | text         | signed         |         | YES      | NULL        |           |             |
| [CompletedText\_loc3](#quest_template_locale-CompletedText_loc)       | text         | signed         |         | YES      | NULL        |           |             |
| [CompletedText\_loc4](#quest_template_locale-CompletedText_loc)       | text         | signed         |         | YES      | NULL        |           |             |
| [CompletedText\_loc5](#quest_template_locale-CompletedText_loc)       | text         | signed         |         | YES      | NULL        |           |             |
| [CompletedText\_loc6](#quest_template_locale-CompletedText_loc)       | text         | signed         |         | YES      | NULL        |           |             |
| [CompletedText\_loc7](#quest_template_locale-CompletedText_loc)       | text         | signed         |         | YES      | NULL        |           |             |
| [CompletedText\_loc8](#quest_template_locale-CompletedText_loc)       | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText1\_loc1](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText1\_loc2](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText1\_loc3](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText1\_loc4](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText1\_loc5](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText1\_loc6](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText1\_loc7](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText1\_loc8](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText2\_loc1](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText2\_loc2](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText2\_loc3](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText2\_loc4](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText2\_loc5](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText2\_loc6](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText2\_loc7](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText2\_loc8](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText3\_loc1](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText3\_loc2](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText3\_loc3](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText3\_loc4](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText3\_loc5](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText3\_loc6](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText3\_loc7](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText3\_loc8](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText4\_loc1](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText4\_loc2](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText4\_loc3](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText4\_loc4](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText4\_loc5](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText4\_loc6](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText4\_loc8](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |
| [ObjectiveText4\_loc8](#quest_template_locale-ObjectiveText_loc)      | text         | signed         |         | YES      | NULL        |           |             |

**Description of the fields**

### Id

This id must be the same as [quest\_template.id](quest+template+tc2#Questtemplatetc2-Id) and then the row will be used to provide localization support for this quest\_template record.

### Title\_loc

Translated content for [quest\_template.Title](quest+template+tc2#Questtemplatetc2-Title) field for language X.
See [localization languages](Localization+lang) list to know which value to use for X.

### Details\_loc

Translated content for [quest\_template.Details](quest+template+tc2#Questtemplatetc2-Details) field for language X.
See [localization languages](Localization+lang) list to know which value to use for X.

### Objectives\_loc

Translated content for [quest\_template.Objectives](quest+template+tc2#Questtemplatetc2-Objectives) field for language X.
See [localization languages](Localization+lang) list to know which value to use for X.

### OfferRewardText\_loc

Translated content for [quest\_template.OfferRewardText](quest+template+tc2#Questtemplatetc2-OfferRewardText) field for language X.
See [localization languages](Localization+lang) list to know which value to use for X.

### RequestItemsText\_loc

Translated content for [quest\_template.RequestItemsText](quest+template+tc2#Questtemplatetc2-RequestItemsText) field for language X.
See [localization languages](Localization+lang) list to know which value to use for X.

### EndText\_loc

Translated content for [quest\_template.EndText](quest+template+tc2#Questtemplatetc2-EndText) field for language X.
See [localization languages](Localization+lang) list to know which value to use for X.

### CompletedText\_loc

Translated content for [quest\_template.CompletedText](quest+template+tc2#Questtemplatetc2-CompletedText) field for language X.
See [localization languages](Localization+lang) list to know which value to use for X.

### ObjectiveText\_loc

Translated content for [quest\_template.ObjectiveText](quest+template+tc2#Questtemplatetc2-Objectives) field for language X.
See [localization languages](Localization+lang) list to know which value to use for X.
