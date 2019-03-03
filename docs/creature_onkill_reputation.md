# creature\_onkill\_reputation

[<-Back-to:World](database-world.md)

**The \`creature\_onkill\_reputation\` table**

This table controls the reputation given by creatures when killed by other players.

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
<td><p><a href="#creature_id">creature_id</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Creature Identifier</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewonkillrepfaction">RewOnKillRepFaction1</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#rewonkillrepfaction">RewOnKillRepFaction2</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#maxstanding">MaxStanding1</a></p></td>
<td><p>tinyint(4)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#isteamaward">IsTeamAward1</a></p></td>
<td><p>tinyint(4)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewonkillrepvalue">RewOnKillRepValue1</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#maxstanding">MaxStanding2</a></p></td>
<td><p>tinyint(4)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#isteamaward">IsTeamAward2</a></p></td>
<td><p>tinyint(4)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#rewonkillrepvalue">RewOnKillRepValue2</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#teamdependent">TeamDependent</a></p></td>
<td><p>tinyint(3)</p></td>
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

### creature\_id

The template ID of the creature. See [creature\_template.entry](creature_template#creature_template-entry)

### RewOnKillRepFaction

The faction ID of the faction that the player will gain or lose points in. See Faction.dbc

### MaxStanding

The maximum standing that the creature will award reputation until. If the player achieves this standing or any other standing higher than this, the creature will not award any reputation.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Rank</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Hated</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Hostile</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Unfriendly</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Neutral</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Friendly</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Honored</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Revered</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Exalted</p></td>
</tr>
</tbody>
</table>

### IsTeamAward

Boolean 0 or 1 that controls if the player receives the reputation not only to the faction but also the faction team.

-   0: Player receives reputation only for the faction
-   1: Player receives reputation both for the faction and the faction's team

NOTE: The reputation value that the player gains for the team (if the field is 1) is half of the value specified in [RewOnKillRepValue](#creature_onkill_reputation-RewOnKillRepValue)

### RewOnKillRepValue

The reputation value that the player gains (or loses if it's negative) by killing the creature.

### TeamDependent

Boolean 0 or 1.

-   0: The creature will give reputation to the any player from both fields (RewOnKillRepFaction1 and RewOnKillRepFaction2) if both fields are non-zero.
-   1: The creature will award alliance players the reputation from RewOnKillRepFaction1 and will award horde players the reputation from RewOnKillRepFaction2

