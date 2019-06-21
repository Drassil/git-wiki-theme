# npc\_vendor

[<-Back-to:World](database-world.md)

**Table Structure**

This table holds the vendor data for all NPCs that sell items and currency. The price for each item or currency is in its item template as [BuyPrice](item_template#item_template-BuyPrice) or as [ExtendedCost](npc_vendor#npc_vendor-ExtendedCost).

<table style="width:100%;">
<colgroup>
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#entry">entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#slot">slot</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#item">item</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#maxcount">maxcount</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#incrtime">incrtime</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#extendedcost">ExtendedCost</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
</tbody>
</table>

**Field Descriptions**

### entry

The ID of the creature. See [creature\_template.entry](creature_template#creature_template-entry).

### slot

Position of the item when the vendor window opens. The image below explains how the vendor-inventory slots are numbered. To continue on past the first page just use numbers 10, 11, 12, etc...

### item

The item ID. See  [item\_template.entry](item_template#item_template-entry).

### maxcount

The maximum number of items carried by the vendor at any time. If you want the vendor to carry an unlimited number of the item then set this to **0** else set it to any positive number. In the image below the maxcount value is circled.

### incrtime

Combined with [maxcount](#npc_vendor-maxcount), this field tells how often (in seconds) the vendor list is refreshed and the limited item copies are restocked. For limited item copies, every refresh, the quantity is increased by [item\_template.BuyCount](item_template#item_template-BuyCount) .

### ExtendedCost

The value here corresponds to the ID in [ItemExtendedCost.dbc](ItemExtendedCost) and that ID controls the item's non monetary price, be it honor points, arena points, different types of badges or any combination of the above.
