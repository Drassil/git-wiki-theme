# item\_modified\_appearance

**`Back-to:Hotfixes`**

**The \`item\_modified\_appearance\` table**

This table links together the appearances and item ids in regards to item hotfixes. Together with item, item\_appearance and item\_sparse they present the means to hotfix an item.

 

**Structure**

|                                                              |             |                |         |          |             |           |             |
|--------------------------------------------------------------|-------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                                    | **Type**    | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [ID](#item_modified_appearance-ID)                           | int(10)     | unsigned       | PRI     | NO       | 0           |           |             |
| [ItemID](#item_modified_appearance-ItemID)                   | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [AppearanceModID](#item_modified_appearance-AppearanceModID) | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [AppearanceID](#item_modified_appearance-AppearanceID)       | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [IconFileDataID](#item_modified_appearance-IconFileDataID)   | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [Index](#item_modified_appearance-Index)                     | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [VerifiedBuild](#item_modified_appearance-VerifiedBuild)     | smallint(6) | signed         |         | NO       | 0           |           |             |

**Description of the fields**

### ID

This is the unique ID for the item\_modified\_appearance table and has no relation whatsoever to the item ID that is being hotfixed.
This value links to [hotfix\_data.RecordID](hotfix_data#hotfix_data-hotfix_data-RecordID) with the proper TableHash accompanied.

### ItemID

This is the unique ID for the item that has received a hotfix.
This value links to [hotfix\_data.RecordID](hotfix_data_2130074.html#hotfix_data-hotfix_data-hotfix_data-RecordID) with the proper TableHash accompanied, [item.ID](hotfixes_item_2130073.html#hotfixes_item-hotfixes_item-ID) and [item\_sparse.ID](item_sparse#item_sparse-ID).

### AppearanceModID

This value is obtained from ItemBonus.db2 and acts as a selector when there are multiple entries for the same item ID.This value is by default set to 0.

### AppearanceID

This value links to item\_appearance.ID and basically creates the link between the specified Item ID and the Appearance tables accompanying it.

### IconFileDataID

This value is unused, leave it at 0.

### Index

This value is unused, leave it at 0.

### VerifiedBuild

This field was used to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.
