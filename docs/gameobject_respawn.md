# gameobject\_respawn

[<-Back-to:Characters](database-characters.md)

**The \`gameobject\_respawn\` table**

This table holds the re-spawn time when game objects should be re spawned in the world. In case of a server crash, this table holds the re-spawn data so that the game objects don't re-spawn immediately on server restart. How often the re-spawn time is saved for game objects can be controlled in trinitycore.conf at SaveRespawnTimeImmediately. Usually the only objects that despawn and need to be re-spawned are chests and doors.

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
<td><p><a href="#respawntime">respawntime</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#instance">instance</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Instance Identifier</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

The GUID of the game object. See gameobject.guid

### respawntime

The time when the game object should be respawned in Unix time.

### instance

If the game object belonged in an instance, this field holds the instance ID where this game object should be respawned. Each instance is different depending on the group so this field is vital in keeping track of which game objects should be respawned for which players at what time.
