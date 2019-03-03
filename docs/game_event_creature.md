# game\_event\_creature

[<-Back-to:World](database-world.md)

**The \`game\_event\_creature\` table**

Contains all creature instances that have to be spawned/unspawned during defined game events.

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
<td><p><a href="#guid">guid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p>Unique</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### eventEntry

Entry of the event (game\_event.entry)

**Use**+\*entry to have the creature added during the event
**Use**-\*entry to have it removed during the event

### guid

Guid of the creature participating in the event (creature.guid)
