# pvpstats\_players

[<-Back-to:Characters](database-characters.md)

**The \`[pvpstats\_players](http://collab.kpsn.org/pages/createpage.action?spaceKey=tc&title=pvpstats_battlegrounds&linkCreation=true&fromPageId=331580)\` table**

This table holds datas about BattleGrounds scores. To enable storing this kind of informations, set **Battleground . StoreStatistics . Enable   =   1** in **worldserver.config** file.

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
<td><p><a href="#battleground_id">battleground_id</a></p></td>
<td><p>bigint</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#character_guid">character_guid</a></p></td>
<td><p>int</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#win">win</a></p></td>
<td><p>bit</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#score_*">score_killing_blows</a></p></td>
<td>mediumint</td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#score_*">score_deaths</a></p></td>
<td>mediumint</td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#score_*">score_honorable_kills</a></p></td>
<td><p>mediumint</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#score_*">score_bonus_honor</a></p></td>
<td><p>mediumint</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#score_*">score_damage_done</a></p></td>
<td>mediumint</td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#score_*">score_healing_done</a></p></td>
<td><p>mediumint</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#attr_*">attr_1</a></p></td>
<td><p>mediumint</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td>0</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#attr_*">attr_2</a></p></td>
<td><p>mediumint</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td>0</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#attr_*">attr_3</a></p></td>
<td><p>mediumint</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td>0</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#attr_*">attr_4</a></p></td>
<td>mediumint</td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td>0</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#attr_*">attr_5</a></p></td>
<td><p>mediumint</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td>0</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>

**Description of the fields**

### battleground\_id

Link to pvpstats\_battlegrounds.id

### character\_guid

Link to characters.guid

### winner

1 when player has won the BG, 0 otherwise

### score\_\*

All scores which are in common between all BattleGrounds

### attr\_\*

All scores which are not in common between all BattleGrounds. This fields changes their mean according to pvpstats\_battlegrounds.type

 
