# item\_effect

**`Back-to:Hotfixes`**

**The \`item\_effect\` table**

This table contains some of the item effect data regarding item hotfixes. This table is primarily used to hotfix spells on items.

 

**Structure**

|                                                   |             |                |         |          |             |           |             |
|---------------------------------------------------|-------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                         | **Type**    | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [ID](#item_effect-ID)                             | int(10)     | unsigned       | PRI     | NO       | 0           |           |             |
| [ItemID](#item_effect-ItemID)                     | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [OrderIndex](#item_effect-OrderIndex)             | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [SpellID](#item_effect-SpellID)                   | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [Trigger](#item_effect-Trigger)                   | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [Charges](#item_effect-Charges)                   | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [Cooldown](#item_effect-Cooldown)                 | int(11)     | signed         |         | NO       | 0           |           |             |
| [Category](#item_effect-Category)                 | int(10)     | unsigned       |         | NO       | 0           |           |             |
| [CategoryCooldown](#item_effect-CategoryCooldown) | int(11)     | signed         |         | NO       | 0           |           |             |
| [VerifiedBuild](#item_effect-VerifiedBuild)       | smallint(6) | signed         |         | NO       | 0           |           |             |

**Description of the fields**

### ID

This is the unique ID for the item\_effect table and has no relation whatsoever to the item ID that is being hotfixed.
This value links to [hotfix\_data.RecordID](hotfix_data#hotfix_data-hotfix_data-RecordID) with the proper TableHash accompanied.

### ItemID

This is the unique ID for the item that has received a hotfix.
This value links to [hotfix\_data.RecordID](hotfix_data_2130074.html#hotfix_data-hotfix_data-hotfix_data-RecordID) with the proper TableHash accompanied, [item.ID](hotfixes_item_2130073.html#hotfixes_item-hotfixes_item-ID) and [item\_sparse.ID](item_sparse#item_sparse-ID).

### OrderIndex

The order in which the spells are displayed on the item tooltip and are placed upon the item. Starts at 0.

### SpellID

The spell ID of the spell that the item can cast or trigger.

### Trigger

The type of trigger for the spell.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>ID</strong></td>
<td><strong>Trigger Type</strong></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>Use</p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>On Equip</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Chance on Hit</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Soulstone</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Use with no delay</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Learn Spell ID</p></td>
</tr>
</tbody>
</table>

### Charges

The number of times that the item can cast the spell:

-   If 0, then infinite charges are possible.
-   If negative, after the number of charges is depleted the item is deleted as well.
-   If positive, the item is not deleted after all the charges are spent.

### Cooldown

The cooldown in milliseconds for the specific spell controlling how often the spell can be used.
Use -1 to use the default spell cooldown.

Note: this is not the "internal cooldown" of procs commonly found on items such as trinkets with "Chance on hit" effects.

### Category

The category that the spell is in.

### CategoryCooldown

The cooldown time in milliseconds that is applied to all other spells in the category that the triggered spell is also in.
Use -1 to use the default spell cooldown.

### VerifiedBuild

This field was used to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.
