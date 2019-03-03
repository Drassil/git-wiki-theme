# pvpstats\_battlegrounds

[<-Back-to:Characters](database-characters.md)

**The \`[pvpstats\_battlegrounds](http://collab.kpsn.org/pages/createpage.action?spaceKey=tc&title=pvpstats_battlegrounds&linkCreation=true&fromPageId=331580)\` table**

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
<td><p><a href="#id">id</a></p></td>
<td><p>bigint</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#winner_faction">winner_faction</a></p></td>
<td><p>tinyint</p></td>
<td> </td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#bracket_id">bracket_id</a></p></td>
<td><p>tinyint</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#type">type</a></p></td>
<td><p>tinyint</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#date">date</a></p></td>
<td><p>datetime</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### id

An unique value which identifies a BattleGround.

### winner\_faction

The faction which won the BattleGround:

0 = HORDE

1 = ALLIANCE

2 = NOONE

### bracket\_id

Identifies the bracket level range:

1 = 10-19

2 = 20-29

3 = 30-39

4 = 40-49

5 = 50-59

6 = 60-69

7 = 70-79

8 = 80

### type

The BattleGround type:

1 = Alterac Valley

2 = Warsong Gulch

3 = Arathi Basin

7 = Eye of the Storm

9 = Strand of the Ancients

30 = Isle of Conquest

### date

Date and time of BattleGround ending.
