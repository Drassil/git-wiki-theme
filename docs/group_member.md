# group\_member

[<-Back-to:Characters](database-characters.md)

**The \`group\_member\` table**

This table holds info about group members.

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
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>_</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#memberguid">memberGuid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td> </td>
<td><p>Unique</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#memberflags">memberFlags</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#subgroup">subgroup</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#roles">roles</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>

**Description of the fields**

#### guid

GUID of the group. See [groups.guid](Groups+tc2#Groupstc2-guid).

#### memberGuid

GUID of the character member of the group. See [characters.guid](Characters+tc2#Characterstc2-guid).

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><pre><code>MEMBER_FLAG_ASSISTANT</code></pre></td>
<td><pre><code>0x01</code></pre></td>
<td> </td>
</tr>
<tr class="even">
<td><pre><code>MEMBER_FLAG_MAINTANK</code></pre></td>
<td><pre><code>0x02</code></pre></td>
<td><pre><code>(U)</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>MEMBER_FLAG_MAINASSIST</code></pre></td>
<td><pre><code>0x04</code></pre></td>
<td><pre><code>(U)</code></pre></td>
</tr>
</tbody>
</table>

 

*(U) = Unique per group.*

### subgroup

Ranging 0-7 (1-8 in client), representing the subgroups of a raid group.
There can only be 5 membes in one subgroup per raid group.

### roles

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
<td><p>ROLE_NONE</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>ROLE_LEADER</p></td>
<td><p>The character has signed to Random Dungeon Finder as experienced</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>ROLE_TANK</p></td>
<td><p>The character has signed to Random Dungeon Finder as tank</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>ROLE_HEALER</p></td>
<td><p>The character has signed to Random Dungeon Finder as healer</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>ROLE_DAMAGE</p></td>
<td><p>The character has signed to Random Dungeon Finder as dps</p></td>
</tr>
</tbody>
</table>


