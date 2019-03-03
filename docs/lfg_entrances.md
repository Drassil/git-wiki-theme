# lfg\_entrances

[<-Back-to:World](database-world.md)

**The \`lfg\_entrances\` table**

`` Used by LFG system to teleport players on specified position. This table should be used instead of `areatrigger_teleport` tabe for all dungeons in the future. ``

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
<td><p><a href="#dungeonid">dungeonId</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Dungeon entry from dbc</p></td>
</tr>
<tr class="odd">
<td><p><a href="#name">name</a></p></td>
<td><p>varchar(255)</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Dungeon name from dbc</p></td>
</tr>
<tr class="even">
<td><p><a href="#position_x">position_x</a></p></td>
<td><p>float</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#position_y">position_y</a></p></td>
<td><p>float</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#position_z">position_z</a></p></td>
<td><p>float</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#orientation">orientation</a></p></td>
<td><p>float</p></td>
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

### dungeonId

Dungeon ID from LFGDungeons.dbc

### name

Dungeon name from LFGDungeons.dbc

### position\_x

X coordinate for the entrance position

### position\_y

Y coordinate for the entrance position

### position\_z

Z coordinate for the entrance position

### orientation

Orientation the player will get when appearing at this location
