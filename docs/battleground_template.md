# battleground\_template

`            Back-to:World     `

**The \`battleground\_template\` table**

Contains information about the different battlegrounds, like how many players are needed to start, how many can be inside the same one, and the locations where each side starts.

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
<td><p><strong>Atributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
<td><p><strong>Extra</strong></p></td>
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#id">id</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#minplayersperteam">MinPlayersPerTeam</a></p></td>
<td><p>smallintint(5)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#maxplayersperteam">MaxPlayersPerTeam</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#minlvl">MinLvl</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#maxlvl">MaxLvl</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#alliancestartloc">AllianceStartLoc</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#alliancestarto">AllianceStartO</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#hordestartloc">HordeStartLoc</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#hordestarto">HordeStartO</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#startmaxdist">StartMaxDist</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#weight">Weight</a></p></td>
<td><p>tinyint (2)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#scriptname">ScriptName</a></p></td>
<td><p>char (64)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#comment">Comment</a></p></td>
<td><p>char (32)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### id

The battleground ID.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>Alterac Valley</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Warsong Gulch</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>Arathi Basin</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Nagrand Arena</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>Blade's Edge Arena</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>All Arena</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>Eye of the Storm</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>Ruins of Lordaeron</p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>Strand of the Ancients</p></td>
</tr>
<tr class="even">
<td><p>10</p></td>
<td><p>Dalaran Sewers</p></td>
</tr>
<tr class="odd">
<td><p>11</p></td>
<td><p>The Ring of Valor</p></td>
</tr>
<tr class="even">
<td><p>30</p></td>
<td><p>Isle of Conquest</p></td>
</tr>
<tr class="odd">
<td><p>32</p></td>
<td><p>Random battleground</p></td>
</tr>
</tbody>
</table>

### MinPlayersPerTeam

Controls the minimum number of players that need to join the battleground on each faction side for the battleground to start. For the battleground to start, all characters (between min and max player values) must be in the same tier. Tiers are set up in ranges of 10 levels except for level 80. So the first tier is 10-19, the next are 20-29, 30-39, 40-49, 50-59, 60-69, 70-79 and finally 80. If characters of different tiers all join the queue, they will join their respective tier's queue and wait for more players of their tier to join the queue. Characters in different tiers can never join the same battleground.

### MaxPlayersPerTeam

Controls how many players from each team can join the battleground.

NOTE2: If left to be 0, trinity will use the default DBC value.

### MinLvl

The minimum level that players need to be in order to join the battleground.

NOTE: If left to be 0, trinity will use the default DBC value.

### MaxLvl

The maximum level that players can be to enter the battleground.

NOTE: If left to be 0, trinity will use the default DBC value.

### AllianceStartLoc

The location where the alliance players get teleported to when the battleground first starts. See WorldSafeLocs.dbc

### AllianceStartO

The orientation of the alliance players upon teleport into the battleground. North is 0, south is Pi (3.14159).

### HordeStartLoc

The location where the horde players get teleported to when the battleground first starts. See WorldSafeLocs.dbc

### HordeStartO

The orientation of the horde players upon teleport into the battleground. North is 0, south is Pi (3.14159).

### Weight

Determines what battleground(s) will be more frequently chosen when using Random Battleground.
For example: If you want AV to be less often chosen, give 2 and for all other give 3.
