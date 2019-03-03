# player\_factionchange\_spells

[<-Back-to:World](database-world.md)

**The \`player\_factionchange\_spells\` table**

Basically all spell changes made when player changes faction.

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
<td><p><a href="#alliance_id">alliance_id</a></p></td>
<td><p>int(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#horde_id">horde_id</a></p></td>
<td><p>int(8)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### alliance\_id

This is the alliance spell ID. If you convert to horde and your spells have a record in his table, they will be converted to [\#horde\_id](#player_factionchange_spells-horde_id)

### horde\_id

This is the horde spell ID. If you convert to alliance and your spells have a record in his table, they will be converted to [\#alliance\_id](#player_factionchange_spells-alliance_id)
