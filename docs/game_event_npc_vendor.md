# game\_event\_npc\_vendor

[<-Back-to:World](database-world.md)

**The \`game\_event\_npc\_vendor\` table**

This table allows you to change the items a vendor sells, or to create a [vendor list](npc_vendor) for an NPC who does not sell items unless an event is active.

**Structure**

<table>
<colgroup>
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
<td><p><strong>Extra</strong></p></td>
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#evententry">eventEntry</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#guid">guid</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#slot">slot</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#item">item</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#maxcount">maxcount</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#incrtime">incrtime</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#extendedcost">ExtendedCost</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### eventEntry

This is the eventEntry from the game\_event table that you wish to setup a vendor list for while the event is running.

### guid

This is the guid of the NPC that you wish to create a vendor list for.

### slot

Position of the item when the vendor window opens (order from top-left to bottom.right of the window with values 0 and then 1,2,3,etc).

### item

This is an item from the item\_template table.

### maxcount

The maximum number of copies of the item the vendor has available to be sold before [incrtime](#game_event_npc_vendor-incrtime) is up. If 0, then it is an unlimited number of copies.

### incrtime

Combined with [maxcount](#game_event_npc_vendor-maxcount), this field tells how often (in seconds) the vendor list is refreshed and the limited item copies are restocked. For limited item copies, every refresh, the quantity is increased by item\_template.BuyCount

### ExtendedCost

The value here corresponds to the ID in ItemExtendedCost.dbc and that ID controls the item's non monetary price, be it honor points, arena points, different types of badges or any combination of the above.
