# item\_loot\_items

[<-Back-to:Characters](database-characters.md)

**The \`item\_loot\_items\` table**

Contains the items associated with a lootable inventory item such as a "watertight trunk" or "Bulging Sack of Gems"

This table is populated the first time the player right-clicks to open an item. Rows are deleted when
the player either removes an item or destroys the container item.

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
<td><p><a href="#container_id">container_id</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#item_id">item_id</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#item_count">item_count</a></p></td>
<td><p>int(10)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#follow_rules">follow_rules</a></p></td>
<td><p>tinyint(1)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#ffa">ffa</a></p></td>
<td><p>tinyint(1)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#blocked">blocked</a></p></td>
<td><p>tinyint(1)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#counted">counted</a></p></td>
<td><p>tinyint(1)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#under_threshold">under_threshold</a></p></td>
<td><p>tinyint(1)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#needs_quest">needs_quest</a></p></td>
<td><p>tinyint(1)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#rnd_prop">rnd_prop</a></p></td>
<td><p>int(10)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#rnd_suffix">rnd_suffix</a></p></td>
<td><p>int(10)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### container\_id

The GUID of the container item that holds the loot item(s). See item\_instance.guid

Note: A [container\_id](#item_loot_items-container_id) can have more than one [item\_id](#item_loot_items-item_id) associated with it.

### item\_id

The entry of the loot item. See item\_instance.itemEntry

Note: It is possible for there to be more than one of the same item in a container.

### item\_count

The stack size of the item. Only stackable items can be &gt; 1.

### follow\_rules

Flag to determine if the core should apply additional loot rules when the item
is removed from the container.

### ffa

Flag to determine if free-for-all looting applies. This should typically be 0 because the items are inside

an item in the character's inventory.

### blocked

`field-no-description|6`

### counted

`field-no-description|6`

### under\_threshold

`field-no-description|6`

### needs\_quest

Flag to determine if the item is a quest item to be counted as a "quest drop".

### rnd\_prop

The random enchantment (if any) that was rolled and added to the item when the loot container was
originally opened.

For example: "Ebon Scimitar" (as opposed to a plain "Scimitar").

### rnd\_suffix

The random suffix (if any) that was rolled and added to the item when the loot container was
originally opened.

For example: "of the Monkey"
