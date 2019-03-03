# character\_reputation

[<-Back-to:Characters](database-characters.md)

**The \`character\_reputation\` table**

This table holds the reputation information for each character.

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
<td><p><a href="#faction">faction</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#standing">standing</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#flags">flags</a></p></td>
<td><p>smallint(5)</p></td>
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

The GUID of the character. See characters.guid

### faction

The faction ID that the character has the given reputation in. See Faction.dbc

### standing

The current reputation value that the character has.

### flags

This field is a bitmask containing flags that apply to the faction and how it's displayed to the character. Just like any flag field, you can combine flags by adding them together. If this field is 0, then it is not shown in the reputation list in-game.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th><p>Name</p></th>
<th><p>Comments</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>FACTION_FLAG_VISIBLE</p></td>
<td><p>Displayed in the reputation tab</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>FACTION_FLAG_AT_WAR</p></td>
<td><p>Active when the player sets the at war checkbox</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>FACTION_FLAG_HIDDEN</p></td>
<td><p>Hidden faction from reputation pane in client</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>FACTION_FLAG_INVISIBLE_FORCED</p></td>
<td><p>Always overwrites FACTION_FLAG_VISIBLE and hide faction in rep.list</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>FACTION_FLAG_PEACE_FORCED</p></td>
<td><p>Always overwrites FACTION_FLAG_AT_WAR</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td><p>FACTION_FLAG_INACTIVE</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>64</p></td>
<td><p>FACTION_FLAG_RIVAL</p></td>
<td><p>Flag for the two competing outland factions</p></td>
</tr>
<tr class="even">
<td><p>128</p></td>
<td><p>FACTION_FLAG_SPECIAL</p></td>
<td><p>Horde and alliance home cities and their northrend allies have this flag</p></td>
</tr>
</tbody>
</table>


