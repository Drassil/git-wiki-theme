# petition

[<-Back-to:Characters](database-characters.md)

**The \`petition\` table**

This table holds information on all ongoing petitions for a guild or for an arena team.

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
<td><p><a href="#ownerguid">ownerguid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#petitionguid">petitionguid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#name">name</a></p></td>
<td><p>varchar(24)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#type">type</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### ownerguid

The petition's owner's GUID. See characters.guid

### petitionguid

The GUID of the petition item. See item\_instance.guid

### name

The name of the guild or arena team that the player is trying to ask for petitions for.

### type

The type of the petition.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>2</p></td>
<td><p>2vs2 Arena charter</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>3vs3 Arena charter</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>5vs5 Arena charter</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>Guild charter</p></td>
</tr>
</tbody>
</table>


