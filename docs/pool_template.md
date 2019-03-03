# pool\_template

[<-Back-to:World](database-world.md)

**The \`pool\_template\` table**

Each unique pool is defined in this table.

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
<td><p><a href="#entry">entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Pool entry</p></td>
</tr>
<tr class="odd">
<td><p><a href="#max_limit">max_limit</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Max number of objects (0) is no limit</p></td>
</tr>
<tr class="even">
<td><p><a href="#description">description</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### entry

The pool ID. This is an arbitrary number that is only used to link the gameobjects, creatures or quests in this pool.

### max\_limit

This is the maximum number of objects that should be spawned in this pool.
0 is no limit.

### description

Field describes the basic information about what the pool refers to. Example: Snarlflare (14272)
