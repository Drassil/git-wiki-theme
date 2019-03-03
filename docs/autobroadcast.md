# autobroadcast

[<-Back-to:Auth](database-auth.md)

**The \`autobroadcast\` table**

This table contains the autobroadcast entries for your realms. Values like it's activity, position and Timer (\*.On, \*.Center, \*.Timer) are defined within the [worldserver.conf](worldserver.conf). They are chosen randomly, based on their weight.

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
<td><a href="#realmid">realmid</a></td>
<td>int(11)</td>
<td>signed</td>
<td>PRI</td>
<td>NO</td>
<td>-1</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#id">id</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p>auto_increment</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><a href="#weight">weight</a></td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td> </td>
<td>YES</td>
<td>1</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#text">text</a></p></td>
<td><p>longtext</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### realmid

The [\`realmlist\`.\`id\`](realmlist). Defines which realm this entry belongs to. Use **-1** for all realms to load this entry.

### id

Unique identifier key per realm. Entries with same id will override each other without warnings - this can be used to replace -1 realmid entry on a specific realm.

### weight

A non-negative integer. Entries with higher weight have more chance to get picked.

### text

The text to broadcast. Color and item/spell/quest link formating codes can be used.
