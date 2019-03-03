# spell\_script\_names

[<-Back-to:World](database-world.md)

**The \`spell\_script\_names\` table**

Holds the spell id to ScriptName pairings for use in spell scripts.

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
<td><p><a href="#spell_id">spell_id</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p>UNIQUE</p></td>
<td><p>NO</p></td>
<td><p>NONE</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#scriptname">ScriptName</a></p></td>
<td><p>char(64)</p></td>
<td><p>unsigned</p></td>
<td><p>UNIQUE</p></td>
<td><p>NO</p></td>
<td><p>NONE</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### spell\_id

The ID of the spell to link. If it is negative and the first rank of a spell, includes all ranks of the spell specified in spell\_ranks table.

One spell can have more than one script assigned.

### ScriptName

The script name for the given spell(s).
