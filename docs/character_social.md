# character\_social

[<-Back-to:Characters](database-characters.md)

**The \`character\_social\` table**

Contains data about characters' friends/ignored list.

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
<td><p>Character Global Unique Identifier</p></td>
</tr>
<tr class="odd">
<td><p><a href="#friend">friend</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Friend Global Unique Identifier</p></td>
</tr>
<tr class="even">
<td><p><a href="#flags">flags</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Friend Flags</p></td>
</tr>
<tr class="odd">
<td><p><a href="#note">note</a></p></td>
<td><p>varchar(48)</p></td>
<td><p>signed</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td><p>Friend Note</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

The GUID of the character. See character.guid

### friend

The GUID of the friend/ignored. See characters.guid

### flags

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Unused entry - previously listed as friend or blocked (removed/unblocked)</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Added as friend</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Added as blocked user</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Added as friend, and in ignorelist as well</p></td>
</tr>
</tbody>
</table>

### note

Note about the friend (which appears beside the friend's name in friend list in Client).

Important note: There can be only 50 friend and 50 ignored characters. If you have problems with friends disappearing, try removing some of them first.
