# quest\_objectives

[<-Back-to:World](database-world.md)

Table: quest\_objectives

This table provides answer for a very important question. What do I need to do in order to finish a quest?

## Structure

<table>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Default</strong></p></td>
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td><p>ID</p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td>NO</td>
<td>PRI</td>
<td>0</td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>QuestID</p></td>
<td>mediumint(8)</td>
<td>unsigned</td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>Type</p></td>
<td><p>tinyint(3)</p></td>
<td>unsigned</td>
<td>NO</td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>StorageIndex</p></td>
<td>tinyint(3)</td>
<td>signed</td>
<td>NO</td>
<td><p><br />
</p></td>
<td>0</td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>ObjectID</p></td>
<td><p>int(10)</p></td>
<td>signed</td>
<td>NO</td>
<td><br />
</td>
<td>0</td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>Amount</p></td>
<td><p>int(10)</p></td>
<td>signed</td>
<td>NO</td>
<td><br />
</td>
<td>0</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>Flags</td>
<td>int(10)</td>
<td>unsigned</td>
<td>NO</td>
<td><br />
</td>
<td>0</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>Flags2</td>
<td>int(10)</td>
<td>unsigned</td>
<td>NO</td>
<td><br />
</td>
<td>0</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>ProgressBarWeight</td>
<td>float</td>
<td><br />
</td>
<td>NO</td>
<td><br />
</td>
<td>0</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>Description</td>
<td>text</td>
<td><br />
</td>
<td>YES</td>
<td><br />
</td>
<td>NULL</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>VerifiedBuild</td>
<td>smallint(5)</td>
<td>signed</td>
<td>NO</td>
<td><br />
</td>
<td>0</td>
<td><br />
</td>
</tr>
</tbody>
</table>

## Description of the fields

### ID

Unique ObjectiveId

### QuestID

The Quest Id from quest\_template.id

### Type

<table>
<thead>
<tr class="header">
<th>Type</th>
<th>ID</th>
<th>ObjectID</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>QUEST_OBJECTIVE_MONSTER</td>
<td>0</td>
<td><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-entry">creature_template.entry</a></td>
</tr>
<tr class="even">
<td>QUEST_OBJECTIVE_ITEM</td>
<td>1</td>
<td>itemID from Item.db2</td>
</tr>
<tr class="odd">
<td>QUEST_OBJECTIVE_GAMEOBJECT</td>
<td>2</td>
<td><a href="https://trinitycore.atlassian.net/wiki/display/tc/gameobject_template#gameobject_template-entry">gameobject_template.entry</a></td>
</tr>
<tr class="even">
<td>QUEST_OBJECTIVE_TALKTO</td>
<td>3</td>
<td><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-entry">creature_template.entry</a></td>
</tr>
<tr class="odd">
<td>QUEST_OBJECTIVE_CURRENCY</td>
<td>4</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>QUEST_OBJECTIVE_LEARNSPELL</td>
<td>5</td>
<td>SpellId Spell.db2</td>
</tr>
<tr class="odd">
<td>QUEST_OBJECTIVE_MIN_REPUTATION</td>
<td>6</td>
<td>Faction</td>
</tr>
<tr class="even">
<td>QUEST_OBJECTIVE_MAX_REPUTATION</td>
<td>7</td>
<td>Faction</td>
</tr>
<tr class="odd">
<td>QUEST_OBJECTIVE_MONEY</td>
<td>8</td>
<td>Money</td>
</tr>
<tr class="even">
<td>QUEST_OBJECTIVE_PLAYERKILLS</td>
<td>9</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>QUEST_OBJECTIVE_AREATRIGGER</td>
<td>10</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>QUEST_OBJECTIVE_WINPETBATTLEAGAINSTNPC</td>
<td>11</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>QUEST_OBJECTIVE_DEFEATBATTLEPET</td>
<td>12</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>QUEST_OBJECTIVE_WINPVPPETBATTLES</td>
<td>13</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>QUEST_OBJECTIVE_CRITERIA_TREE</td>
<td>14</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>QUEST_OBJECTIVE_PROGRESS_BAR</td>
<td>15</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>QUEST_OBJECTIVE_HAVE_CURRENCY</td>
<td>16</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>QUEST_OBJECTIVE_OBTAIN_CURRENCY</td>
<td>17</td>
<td><br />
</td>
</tr>
</tbody>
</table>

### StorageIndex

### ObjectID

See above

### Amount

Displays how much players you need to kill before completing the quest.

### Flags

This flag field defines more specifically the type of objective it is.

| Flag | Name                                                           | Description                                                                                                     |
|------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 0    | QUEST\_OBJECTIVE\_FLAG\_NONE                                   | No flags                                                                                                        |
| 1    | QUEST\_OBJECTIVE\_FLAG\_TRACKED\_ON\_MINIMAP                   | Client displays large yellow blob on minimap for creature/gameobject                                            |
| 2    | QUEST\_OBJECTIVE\_FLAG\_SEQUENCED                              | Client will not see the objective displayed until all previous objectives are completed                         |
| 4    | QUEST\_OBJECTIVE\_FLAG\_OPTIONAL                               | Not required to complete the quest                                                                              |
| 8    | QUEST\_OBJECTIVE\_FLAG\_HIDDEN                                 | Never displayed in quest log                                                                                    |
| 16   | QUEST\_OBJECTIVE\_FLAG\_HIDE\_ITEM\_GAINS                      | Skip showing item objective progress                                                                            |
| 32   | QUEST\_OBJECTIVE\_FLAG\_PROGRESS\_COUNTS\_ITEMS\_IN\_INVENTORY | Item objective progress counts items in inventory instead of reading it from updatefields                       |
| 64   | QUEST\_OBJECTIVE\_FLAG\_PART\_OF\_PROGRESS\_BAR                | Hidden objective used to calculate progress bar percent (quests are limited to a single progress bar objective) |

Like all flag based fields, **QuestObjectiveFlags** can be added for the different types of objective.

### Flags2

### ProgressBarWeight

### Description

### VerifiedBuild


