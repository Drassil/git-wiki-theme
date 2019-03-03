# lfg\_dungeon\_rewards

[<-Back-to:World](database-world.md)

**The \`lfg\_dungeon\_encounters\` table**

`table-no-description|0`

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
<td><p><a href="#dungeonid">dungeonId</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Dungeon entry from dbc</p></td>
</tr>
<tr class="odd">
<td><p><a href="#maxlevel">maxlevel</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Max level at which this reward is rewarded</p></td>
</tr>
<tr class="even">
<td><p><a href="#firstquestid">firstQuestId</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Quest id with rewards for first dungeon this day</p></td>
</tr>
<tr class="odd">
<td><p><a href="#firstmoneyvar">firstMoneyVar</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Money multiplier for completing the dungeon first time in a day with less players than max</p></td>
</tr>
<tr class="even">
<td><p><a href="#firstxpvar">firstXPVar</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Experience multiplier for completing the dungeon first time in a day with less players than max</p></td>
</tr>
<tr class="odd">
<td><p><a href="#otherquestid">otherQuestId</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Quest id with rewards for Nth dungeon this day</p></td>
</tr>
<tr class="even">
<td><p><a href="#othermoneyvar">otherMoneyVar</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Money multiplier for completing the dungeon Nth time in a day with less players than max</p></td>
</tr>
<tr class="odd">
<td><p><a href="#otherxpvar">otherXPVar</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Experience multiplier for completing the dungeon Nth time in a day with less players than max</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### dungeonId

Dungeon ID from LFGDungeons.dbc

### maxlevel

Max level at which this reward is rewarded

### firstQuestId

Quest\_template.id with rewards for first dungeon this day.

### firstMoneyVar

Money multiplier for completing the dungeon first time in a day with less players than max.

### firstXPVar

Experience multiplier for completing the dungeon first time in a day with less players than max.

### otherQuestId

Quest\_template.id with rewards for Nth dungeon this day

### otherMoneyVar

Money multiplier for completing the dungeon Nth time in a day with less players than max.

### otherXPVar

Experience multiplier for completing the dungeon Nth time in a day with less players than max.
