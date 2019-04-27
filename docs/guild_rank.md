# guild\_rank

[<-Back-to:Characters](database-characters.md)

**The \`guild\_rank\` table**

This table holds the information on all of the ranks available in a guild along with their names and what rights a person with that rank has.

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
<td><p><a href="#guildid">guildid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#rid">rid</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#rname">rname</a></p></td>
<td><p>varchar(20)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>&quot;</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#rights">rights</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#bankmoneyperday">BankMoneyPerDay</a></p></td>
<td><p>int(10)</p></td>
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

### guildid

The guild ID that the rank is part of. See guild.guildid

### rid

The particular rank ID. This number must be unique to each rank in a guild.

### rname

The name of the rank that is displayed in-game.

### rights

The rights a player with this rank has in the guild. The calculation of multiple rights is a bit different in this case as the rights do not all have 2^n values. To combine ranks, you must do the OR operation (\|) on the two flags.

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
<td><p>64</p></td>
<td><p>GR_RIGHT_EMPTY</p></td>
<td><p>Having just this flag by itself is equivalent to having no rights at all.</p></td>
</tr>
<tr class="even">
<td><p>65</p></td>
<td><p>GR_RIGHT_GCHATLISTEN</p></td>
<td><p>Player can read messages in the guild general chat channel.</p></td>
</tr>
<tr class="odd">
<td><p>66</p></td>
<td><p>GR_RIGHT_GCHATSPEAK</p></td>
<td><p>Player can type messages in the guild general chat channel.</p></td>
</tr>
<tr class="even">
<td><p>68</p></td>
<td><p>GR_RIGHT_OFFCHATLISTEN</p></td>
<td><p>Player can read messages in the guild officers channel.</p></td>
</tr>
<tr class="odd">
<td><p>72</p></td>
<td><p>GR_RIGHT_OFFCHATSPEAK</p></td>
<td><p>Player can type messages in the guild officers channel.</p></td>
</tr>
<tr class="even">
<td><p>80</p></td>
<td><p>GR_RIGHT_INVITE</p></td>
<td><p>Can invite other players to guild.</p></td>
</tr>
<tr class="odd">
<td><p>96</p></td>
<td><p>GR_RIGHT_REMOVE</p></td>
<td><p>Can kick other players out of guild.</p></td>
</tr>
<tr class="even">
<td><p>192</p></td>
<td><p>GR_RIGHT_PROMOTE</p></td>
<td><p>Can promote other players.</p></td>
</tr>
<tr class="odd">
<td><p>320</p></td>
<td><p>GR_RIGHT_DEMOTE</p></td>
<td><p>Can demote other players.</p></td>
</tr>
<tr class="even">
<td><p>4160</p></td>
<td><p>GR_RIGHT_SETMOTD</p></td>
<td><p>Can change the guild message of the day.</p></td>
</tr>
<tr class="odd">
<td><p>8256</p></td>
<td><p>GR_RIGHT_EPNOTE</p></td>
<td><p>Can edit other players' personal notes.</p></td>
</tr>
<tr class="even">
<td><p>16448</p></td>
<td><p>GR_RIGHT_VIEWOFFNOTE</p></td>
<td><p>Can view the officer notes of other players.</p></td>
</tr>
<tr class="odd">
<td><p>32832</p></td>
<td><p>GR_RIGHT_EOFFNOTE</p></td>
<td><p>Can edit officer notes of other players.</p></td>
</tr>
<tr class="even">
<td><p>65600</p></td>
<td><p>GR_RIGHT_MODIFY_GUILD_INFO</p></td>
<td><p>Can edit guild info.</p></td>
</tr>
<tr class="odd">
<td><p>131072</p></td>
<td><p>GR_RIGHT_WITHDRAW_GOLD_LOCK</p></td>
<td><p>Can remove money withdraw capacity.</p></td>
</tr>
<tr class="even">
<td><p>262144</p></td>
<td><p>GR_RIGHT_WITHDRAW_REPAIR</p></td>
<td><p>Can withdraw for repair.</p></td>
</tr>
<tr class="odd">
<td><p>524288</p></td>
<td><p>GR_RIGHT_WITHDRAW_GOLD</p></td>
<td><p>Can withdraw gold.</p></td>
</tr>
<tr class="even">
<td><p>1048576</p></td>
<td><p>GR_RIGHT_CREATE_GUILD_EVENT</p></td>
<td><p>Can create a guild event.</p></td>
</tr>
<tr class="odd">
<td><p>1962495</p></td>
<td><p>GR_RIGHT_ALL</p></td>
<td><p>Has all of the rights.</p></td>
</tr>
</tbody>
</table>

### BankMoneyPerDay

The total money per day, in copper, that a person with this rank can take out. Use the maximum value of an unsigned int (4294967295) to specify unlimited amount.
