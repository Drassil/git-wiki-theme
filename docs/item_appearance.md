# item\_appearance

**`Back-to:Hotfixes`**

**The \`item\_appearance\` table**

This table contains some of the appearance data regarding item hotfixes. Together with item, item\_modified\_appearance and item\_sparse they present the means to hotfix an item.

 

**Structure**

|                                                   |             |                |         |          |             |           |             |
|---------------------------------------------------|-------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                         | **Type**    | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [ID](#item_appearance-ID)                         | int(10)     | unsigned       | PRI     | NO       | 0           |           |             |
| [DisplayID](#item_appearance-DisplayID)           | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [IconFileDataID](#item_appearance-IconFileDataID) | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [VerifiedBuild](#item_appearance-VerifiedBuild)   | smallint(6) | signed         |         | NO       | 0           |           |             |

**Description of the fields**

### **ID**

This is the unique ID for the item\_appearance table and has no relation whatsoever to the item id that is being hotfixed.
This value links to [hotfix\_data.RecordID](hotfix_data#hotfix_data-hotfix_data-RecordID) with the proper TableHash accompanied and [item\_modified\_appearance.AppearanceId](item_modified_appearance#item_modified_appearance-AppearanceID).

### DisplayID

The model ID of the item. This value can be found as the ID in itemdisplayinfo.dbc.

### IconFileDataID

The ID of the item's icon that will show up in bags and such, found in FileData.db2.

### VerifiedBuild

This field was used to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.


