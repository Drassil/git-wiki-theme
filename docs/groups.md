# groups

[<-Back-to:Characters](database-characters.md)

**The \`groups\` table**

This table holds basic info about groups.

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
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#leaderguid">leaderGuid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#lootmethod">lootMethod</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#looterguid">looterGuid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#lootthreshold">lootThreshold</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#8">icon1</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#8">icon2</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#8">icon3</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#8">icon4</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#8">icon5</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td><p> </p></td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#8">icon6</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#8">icon7</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#8">icon8</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#grouptype">groupType</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#difficulty">difficulty</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#raiddifficulty">raiddifficulty</a></p></td>
<td><p>tinyint(3)</p></td>
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

### guid

The ID of the group. This number is unique to each group and is the main method to identify a group.

### leaderGuid

The GUID of the character. See characters.guid

### lootMethod

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Value</p></th>
<th><p>Name</p></th>
<th><p>Comments</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>FREE_FOR_ALL</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>ROUND_ROBIN</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>MASTER_LOOT</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>GROUP_LOOT</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>NEED_BEFORE_GREED</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

### looterGuid

Master looter's guid. See characters.guid
If [lootMethod](#groups-lootMethod) is not 2, then it's group leader's guid.

### lootThreshold

`field-no-description|5`

### icon1-8

`field-no-description|6`

### groupType

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Value</p></th>
<th><p>Name</p></th>
<th><p>Comments</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>GROUPTYPE_NORMAL</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>GROUPTYPE_BG</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>GROUPTYPE_RAID</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>GROUPTYPE_BGRAID</p></td>
<td><p>GROUPTYPE_BG + GROUPTYPE_RAID, // mask</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>GROUPTYPE_UNK1</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>GROUPTYPE_LFG</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

### difficulty

`field-no-description|8`

### raiddifficulty

`field-no-description|9`
