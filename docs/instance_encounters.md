# instance\_encounters

[<-Back-to:World](database-world.md)

**The \`instance\_encounters\` table**

Definitions of instance encounters. Used by LFG.

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
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Unique entry from DungeonEncounter.dbc</p></td>
</tr>
<tr class="odd">
<td><p><a href="#credittype">creditType</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#creditentry">creditEntry</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#lastencounterdungeon">lastEncounterDungeon</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>If not 0, LfgDungeon.dbc entry for the instance it is last encounter in</p></td>
</tr>
<tr class="even">
<td><p><a href="#comment">comment</a></p></td>
<td><p>varchat(255)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>&quot;</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### entry

Unique entry from [DungeonEncounter.dbc](DungeonEncounter)

### creditType

See enum EncounterCreditType.

ENCOUNTER\_CREDIT\_KILL\_CREATURE = 0

ENCOUNTER\_CREDIT\_CAST\_SPELL = 1

### creditEntry

If creditType = 0, then value for this field is creature entry. See creature\_template.entry

If creditType = 1, then value for this field is a spell. See Spell.dbc.

### lastEncounterDungeon

Reference to [LfgDungeon.dbc](LfgDungeon) entry for the instance it which is this encounter last. If 0, encounter is not last one.

### comment

Instance encounter comment for easy identification. Encounter name used only.
