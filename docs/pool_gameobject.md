# pool\_gameobject

[<-Back-to:World](database-world.md)

**The \`pool\_gameobject\` table**

This table contains gameobjects that are tied to a specific pool.
This table can only contain gameobjects that have a type of GAMEOBJECT\_TYPE\_CHEST, GAMEOBJECT\_TYPE\_GOOBER, GAMEOBJECT\_TYPE\_FISHINGHOLE.

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
<td><p><a href="#guid">guid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#pool_entry">pool_entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#chance">chance</a></p></td>
<td><p>float</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#description">description</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

Gameobject's guid.

### pool\_entry

The pool that this gameobject is in. Refers to pool\_template entry.

### chance

The explicit percentage chance that this gameobject will be spawned.

If the pool spawns just one gameobject (max\_limit = 1 in the respective pool\_template), the core selects the gameobject to be spawned in a two-step process: First, only the explicitly-chanced (chance &gt; 0) gameobjects of the pool are rolled. If this roll does not produce any gameobject, all the gameobjects without explicit chance (chance = 0) are rolled with equal chance.
If the pool spawns more than one gameobject, the chance is ignored and all the gameobjects in the pool are rolled in one step with equal chance.

In case the pool spawns just one gameobject and all the gameobjects have a nonzero chance, the sum of the chances for all the gameobjects must equal to 100, otherwise the pool won't be spawned.

### description

This field usually names the game object corresponding to the guid and mentions which spawn point it is. Example: Spawn Point 4 - Tin Vein
