# scene\_template

[<-Back-to:World](database-world.md)

**The \`scene\_template\` table**

This table is used to store necessary data for scenes to run, e.g. ScriptPackageId and Flags.

**Structure**

<table>
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
<td><p>SceneId</p></td>
<td><p>in(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NONE</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>Flags</p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>16</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>ScriptPackageId</p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NONE</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>ScriptName</p></td>
<td><p>char(64)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>' '</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### SceneId

SceneId given by auras which have SPELL\_AURA\_SCENE\_PLAY (430).

Some scenes do not have a spell, this are handled by scripts.
Use C++ hook to start them, e.g.:

> player-&gt;GetSceneMgr().PlayScene(SceneId); 

### Flags

This flags handle behavior of scene.

| Flag                                           | Int Value | **Bit value** | **Comment**                                     |
|------------------------------------------------|-----------|---------------|-------------------------------------------------|
| SCENEFLAG\_NONE                                | 0         | 0x00000000    |                                                 |
| SCENEFLAG\_UNK1                                | 1         | 0x00000001    | NYI                                             |
| SCENEFLAG\_UNK2 | (SCENEFLAG\_CANCLE\_AT\_END) | 2         | 0x00000002    | Scene is being canceled at SceneComplete // NYI |
| SCENEFLAG\_NOT\_CANCELABLE                     | 4         | 0x00000004    | Player can't cancle scene (cinematic scenes)    |
| SCENEFLAG\_UNK8                                | 8         | 0x00000008    | NYI                                             |
| SCENEFLAG\_UNK16                               | 16        | 0x00000010    | NYI                                             |
| SCENEFLAG\_UNK32                               | 32        | 0x00000020    | NYI                                             |

### ScriptPackageId

ScriptPackageId is the Id of the clientside SceneScriptPackage, see SceneScriptPackage.db2

### ScriptName

Name of script defined in: scene\_scripts.cpp
