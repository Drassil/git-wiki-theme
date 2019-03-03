# game\_event\_pool

[<-Back-to:World](database-world.md)

**The \`game\_event\_pool\` table**

This table determines if a given pool is active for a given game event.

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
<td><p><a href="#evententry">eventEntry</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>Entry of the game event. Put negative entry to remove during event.</p></td>
</tr>
<tr class="odd">
<td><p><a href="#pool_entry">pool_entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p>Unique</p></td>
<td><p>Id of the pool</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### eventEntry

This is the ID of the event.

-   +event adds the pool
-   -event removed the pool

### pool\_entry

This is ID of the pool that you want either active or removed for the event.
