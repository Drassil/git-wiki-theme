# character\_queststatus\_rewarded

[<-Back-to:Characters](database-characters.md)

**The \`character\_queststatus\_rewarded\` table**

This table holds information of **every** rewarded quest to a player.

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
<td><p>Global Unique Identifier</p></td>
</tr>
<tr class="odd">
<td><p><a href="#quest">quest</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Quest Identifier</p></td>
</tr>
<tr class="even">
<td><a href="#active">active</a></td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td> </td>
<td>NO</td>
<td>1</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

The character GUID. See characters.guid

### quest

The quest ID of the rewarded quest. See quest\_template.id

### active

`field-no-description`
