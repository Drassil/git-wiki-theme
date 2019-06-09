# game_graveyard_zone

[<-Back-to:World](database-world.md)

<table>
<tbody>
<tr class="even">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#id">id</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unasigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#ghost_zone">ghost_zone</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unasigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#faction">faction</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unasigned</p></td>
<td><p></p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### id
Graveyard's ID. See [WorldSafeLocs.dbc](WorldSafelocs)

### ghost_zone
Zone's ID of ghost position before teleportation to graveyard. See [AreaTable.dbc](AreaTable)

### faction
Graveyard's team.

0 - Any team accepted

469 - Alliance team only

47 - Horde team only
