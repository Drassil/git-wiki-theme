# battleground\_deserters

[<-Back-to:Characters](database-characters.md)

**The \`battleground\_deserters\` table**

This table holds datas about BattleGrounds deserters. To enable storing this kind of informations, set **Battleground . TrackDeserters . Enable   =   1** in **worldserver.config** file.

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
<td><p>int</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#type">type</a></p></td>
<td><p>tinyint</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#datetime">datetime</a></p></td>
<td><p>datetime</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

Link to characters.guid

### type

**0** = player leaves the BG

**1** = player is kicked from BG because offline

**2** = player is invited to join and refuses to do it

**3** = player is invited to join and do nothing (time expires)

**4** = player is invited to join and logs out

### datetime

date and time of the event

 
