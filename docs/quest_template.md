# quest\_template

**Table: quest\_template**

Contains all basic definitions of available quests.

## **Structure**

<table>
<thead>
<tr class="header">
<th>Field</th>
<th>Type</th>
<th>Null</th>
<th>Key</th>
<th>Default</th>
<th>Extra</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><a href="#id">ID</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p>PRI</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#questtype">QuestType</a></p></td>
<td><p>tinyint(3) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#questlevel">QuestLevel</a></p></td>
<td><p>int(11)</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>-1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#questpackageid">QuestPackageID</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#minlevel">MinLevel</a></p></td>
<td><p>int(11)</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#questsortid">QuestSortID</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#questinfoid">QuestInfoID</a></p></td>
<td><p>smallint(5) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#suggestedgroupnum">SuggestedGroupNum</a></p></td>
<td><p>tinyint(3) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardnextquest">RewardNextQuest</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardxpdifficulty">RewardXPDifficulty</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardxpmultiplier">RewardXPMultiplier</a></p></td>
<td><p>float</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardmoney">RewardMoney</a></p></td>
<td><p>int(11)</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardmoneydifficulty">RewardMoneyDifficulty</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardmoneymultiplier">RewardMoneyMultiplier</a></p></td>
<td><p>float</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardbonusmoney">RewardBonusMoney</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewarddisplayspell">RewardDisplaySpell(X=1...3)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardspell">RewardSpell</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardhonor">RewardHonor</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardkillh">RewardKillHonor</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#startitem">StartItem</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="quest_template">RewardArtifactXPDifficulty</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="quest_template">RewardArtifactXPMultiplier</a></p></td>
<td><p>float</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="quest_template">RewardArtifactCategoryID</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#flags">Flags</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#flagsex">FlagsEx</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewarditem(x=1...4)">RewardItem(X=1...4)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardamount">RewardAmount(X=1...4)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#itemdrop">ItemDrop(X=1...4)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#itemdropquantity(x=1...4)">ItemDropQuantity(X=1...4)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardchoiceitemid">RewardChoiceItemID(X=1...6)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardchoiceitemquantity(">RewardChoiceItemQuantity(X=1...6)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardchoiceitemdisplayid(x">RewardChoiceItemDisplayID(X=1...6)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#poicontinent">POIContinent</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="quest_template">POIx</a></p></td>
<td><p>float</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="quest_template">POIy</a></p></td>
<td><p>float</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#poipriority">POIPriority</a></p></td>
<td><p>int(11)</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardtitle">RewardTitle</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="quest_template">RewardArenaPoints</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="quest_template">RewardSkillLineID</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardnumskillups">RewardNumSkillUps</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="quest_template">PortraitGiver</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#portraitturnin">PortraitTurnIn</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardfactionid">RewardFactionID(X=1...5)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardfactionvalue">RewardFactionValue(X=1...5)</a></p></td>
<td><p>int(11)</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardfactionoverride(x=1...5)">RewardFactionOverride(X=1...5)</a></p></td>
<td><p>int(11)</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardfactioncapin(x=1...5)">RewardFactionCapIn(X=1...5)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardfactionflags">RewardFactionFlags</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#rewardcurrencyid(">RewardCurrencyID(X=1...4)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#rewardcurrencyqty">RewardCurrencyQty(X=1...4)</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#acceptedsoundkitid">AcceptedSoundKitID</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#completesoundkitid">CompleteSoundKitID</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#areagroupid">AreaGroupID</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#timeallowed">TimeAllowed</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#allowableraces">AllowableRaces</a></p></td>
<td><p>int(11)</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>-1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#questrewardid">QuestRewardID</a></p></td>
<td><p>int(10) unsigned</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#logtitle">LogTitle</a></p></td>
<td><p>text</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>(NULL)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="quest_template">LogDescription</a></p></td>
<td><p>text</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>(NULL)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#questdescription">QuestDescription</a></p></td>
<td><p>text</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>(NULL)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="quest_template">AreaDescription</a></p></td>
<td><p>text</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>(NULL)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="quest_template">PortraitGiverText</a></p></td>
<td><p>text</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>(NULL)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="quest_template">PortraitGiverName</a></p></td>
<td><p>text</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>(NULL)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#portraitturnintext">PortraitTurnInText</a></p></td>
<td><p>text</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>(NULL)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="quest_template">PortraitTurnInName</a></p></td>
<td><p>text</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>(NULL)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="quest_template">QuestCompletionLog</a></p></td>
<td><p>text</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>(NULL)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#verifiedbuild">VerifiedBuild</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

**
**

**Description of the fields**

### ID

The quest ID. This column is the Primary Key for the Table. Each quest ID must be unique!

### QuestType

Accepted values: 0, 1, 2 or 3. Their meaning is described in table below.

| Value | Result                                                                                                   |
|-------|----------------------------------------------------------------------------------------------------------|
| 0     | Quest is enabled, but it is auto-completed when accepted; this skips quest objectives and quest details. |
| 1     | Quest is disabled (not yet implemented in the core).                                                     |
| 2     | Quest is enabled (does not auto-complete).                                                               |
| 3     | Quest is a World Quest.                                                                                  |

### QuestLevel

Level of quest. Player receives full experience amount only if their level is less than or equal to Level+5. If Level is set to -1, the player's level will be used as (Quest)Level for the experience calculation.

### MinLevel

Minimum level at which a player can get the quest.

### QuestSortID

This field defines under what category the quest falls in the quest log.

If **value &gt; 0** then value is Zone IDs taken from AreaTable.dbc.

if **value &lt; 0** then (**-value**) is quest sort id: (in general profession or class quests. Also see [RequiredSkillPoints](#quest_template-RequiredSkillPoints) ) Value is ID from QuestSort.dbc

### QuestInfoID

These values are ID taken from QuestInfo.dbc

### SuggestedGroupNum

Recommended number of players to do the quest together.

### LimitTime

Time in seconds that the player has to complete this quest.

### ~~RequiredClasses~~

~~Classes required to get the quest. 0 means the quest is available for all classes.~~
~~This field is a bitmask, you can combine class values. See [ChrClasses.dbc](https://trinitycore.atlassian.net/wiki/display/tc/ChrRaces)~~

### AllowableRaces

Races allowed to get the quest. 0 means the quest is accessible for all races. Field value is a decimal value which must transform to an 8 bits binary in order to be understandable. In binary form, each different bit represents a different race. They're assigned as follows :

**Race**

These values are 2^ID taken from ChrRaces.dbc

Examples:

0,1791 = All Races

690 (2 + 16 + 32 + 128 + 512) = Horde Quest

1101 (1 + 4 + 8 + 64 + 1024) = Alliance Quest

**Mist of Pandaria and all Expansions after:**

55378 (54432 + 256 + 128 + 32 + 16 + 2 + 512)  = Horde

18875469 (16777216 + 2097152 + 1024 + 64 + 8 + 4 + 1) = Alliance

### RepObjectiveFaction

Faction ID for an objective to achieve a certain reputation value with. See Faction.dbc

### RepObjectiveValue

Reputation value that the player must achieve with the faction in [RepObjectiveFaction](#quest_template-RepObjectiveFaction) as part of the quest objectives.

### RewardNextQuest

**(Old field name: NextQuestIdChain)**

The quest entry from a **creature** or **gameobject** that ends a quest and starts a new one. The result is, that if you end the quest, the new quest instantly appears from the quest giver.

See the [examples section](#quest_template-Examples) for examples.

### RewardXPDifficulty

According to the [Level](#quest_template-Level), the basic experience with index *RewardXPDifficulty* is taken from QuestXP.dbc.

This field also controls the XP given as the XP is calculated from the value in this field by the following formula. If the quest is repeatable, XP will be given only once. The total XP that a character will receive is also affected by the level difference between the character's level and the quest's level.

The formula for calculating XP from the value in this field:
**QuestLevel &gt;= 65:** XP = RewMoneyMaxLevel / 6.0
**QuestLevel h1. 64:** XP = RewMoneyMaxLevel / 4.8
**QuestLevel 63:** XP = RewMoneyMaxLevel / 3.6
**QuestLevel h1. 62:** XP = RewMoneyMaxLevel / 2.4
**QuestLevel 61:** XP = RewMoneyMaxLevel / 1.2
**QuestLevel &lt;= 60:** XP = RewMoneyMaxLevel / 0.6

### RewardMoney

Money earned by completing the quest (if value &gt; 0) or money requirement to complete the quest (if value &lt; 0) .

### RewardBonusMoney

The money a character at level 80 would get when they complete this quest.

### RewardSpell

Spell that is shown to be casted on quest completion in the quest log. Note that this spell will NOT be casted if [RewardSpellCast](#quest_template-RewardSpellCast) is non-zero. The spell in the other field will be casted instead, in which case the spell here only serves as the visual in the quest log.

NOTE: This field comes straight from the WDB and should not be changed.

### RewardSpellCast

Spell that will always be casted at player when completing the quest. This can be learn spell and player learned some spell in result, or buff spell, for example. If this field is non-zero then this spell will ALWAYS be casted and the spell in [RewardSpell](#quest_template-RewardSpell) will not.

NOTE: This field comes straight from the WDB and should not be changed.

### RewardHonor

Number of honorable kill honor rewarded for completing this quest.

Example: An example value is 15 for quest 8388: At level 80 an honorable kill is 124 honor worth. Multiply this with 15 and you receive 1860, after the multiplication the value is rounded up. So the honor rewarded at level 80 is 1860 for this quest.

### RewardHonorMultiplier

Multiplies [RewardHonor](#quest_template-RewardHonor), so if value is 2, it will give double.

**WARNING:** If this field is 1 and [RewardHonor](#quest_template-RewardHonor) is 0, the quest will reward default honor kill value (124 honor at level 80)

### StartItem

Items given by the quest giver at beginning of the quest. Items will be deleted when quest is abandoned.

### Flags

This flag field defines more specifically the type of quest it is. Aside from the daily flag and sharable flag, this field is used just for grouping purposes and NOT for any other quest requirements. The quest requirements are calculated from non-zero values in other quest template fields. Also, while some of these flags are known, others have yet an unknown purpose and the comments below is simply guesswork on them.

<table>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th><p>Name</p></th>
<th><p>Comments</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>QUEST_FLAGS_NONE</p></td>
<td><p>No flags, so no groups assigned to this quest.</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>QUEST_FLAGS_STAY_ALIVE</p></td>
<td><p>If the player dies, the quest is failed.<img src="images/icons/emoticons/help_16.png" title="(question)" alt="(question)" class="emoticon emoticon-question" /></p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>QUEST_FLAGS_PARTY_ACCEPT</p></td>
<td><p>Escort quests or any other event-driven quests. If player in party, all players that can accept this quest will receive confirmation box to accept quest.</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>QUEST_FLAGS_EXPLORATION</p></td>
<td><p>Involves the activation of an areatrigger.</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>QUEST_FLAGS_SHARABLE</p></td>
<td><p>Allows the quest to be shared with other players.</p></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>QUEST_FLAGS_HAS_CONDITION</p></td>
<td><p>Not used currently</p></td>
</tr>
<tr class="odd">
<td><p>32</p></td>
<td><p>QUEST_FLAGS_HIDE_REWARD_POI</p></td>
<td><p>Not used currently: Unsure of content</p></td>
</tr>
<tr class="even">
<td><p>64</p></td>
<td><p>QUEST_FLAGS_RAID</p></td>
<td><p>Can be completed while in raid</p></td>
</tr>
<tr class="odd">
<td><p>128</p></td>
<td><p>QUEST_FLAGS_TBC</p></td>
<td><p>Not used currently: Available if TBC expansion enabled only</p></td>
</tr>
<tr class="even">
<td><p>256</p></td>
<td><p>QUEST_FLAGS_NO_MONEY_FROM_XP</p></td>
<td><p>Not used currently: Experience is not converted to gold at max level</p></td>
</tr>
<tr class="odd">
<td><p>512</p></td>
<td><p>QUEST_FLAGS_HIDDEN_REWARDS</p></td>
<td><p>Item and monetary rewards are hidden in the initial quest details page and in the quest log but will appear once ready to be rewarded.</p></td>
</tr>
<tr class="even">
<td><p>1024</p></td>
<td><p>QUEST_FLAGS_TRACKING</p></td>
<td><p>These quests are automatically rewarded on quest complete and they will never appear in quest log client side.</p></td>
</tr>
<tr class="odd">
<td><p>2048</p></td>
<td><p>QUEST_FLAGS_DEPRECATE_REPUTATION</p></td>
<td><p>Not used currently</p></td>
</tr>
<tr class="even">
<td><p>4096</p></td>
<td><p>QUEST_FLAGS_DAILY</p></td>
<td><p>Daily repeatable quests (only flag that the core applies specific behavior for)</p></td>
</tr>
<tr class="odd">
<td><p>8192</p></td>
<td><p>QUEST_FLAGS_FLAGS_PVP</p></td>
<td><p>Having this quest in log forces PvP flag</p></td>
</tr>
<tr class="even">
<td><p>16384</p></td>
<td><p>QUEST_FLAGS_UNAVAILABLE</p></td>
<td><p>Used on quests that are not generically available</p></td>
</tr>
<tr class="odd">
<td><p>32768</p></td>
<td><p>QUEST_FLAGS_WEEKLY</p></td>
<td><p>Weekly repeatable quests (only flag that the core applies specific behavior for)</p></td>
</tr>
<tr class="even">
<td><p>65536</p></td>
<td><p>QUEST_FLAGS_AUTOCOMPLETE</p></td>
<td><p>Auto complete</p></td>
</tr>
<tr class="odd">
<td><p>131072</p></td>
<td><p>QUEST_FLAGS_DISPLAY_ITEM_IN_TRACKER</p></td>
<td><p>Displays usable item in quest tracker</p></td>
</tr>
<tr class="even">
<td><p>262144</p></td>
<td><p>QUEST_FLAGS_OBJ_TEXT</p></td>
<td><p>Use Objective text as Complete text</p></td>
</tr>
<tr class="odd">
<td><p>524288</p></td>
<td><p>QUEST_FLAGS_AUTO_ACCEPT</p></td>
<td><p>The client recognizes this flag as auto-accept. However, NONE of the current quests (3.3.5a) have this flag. Maybe blizz used to use it, or will use it in the future.</p></td>
</tr>
<tr class="even">
<td>1048576</td>
<td>QUEST_FLAGS_PLAYER_CAST_ON_ACCEPT</td>
<td>Quests with this flag player submit automatically by special button in player GUI</td>
</tr>
<tr class="odd">
<td>2097152</td>
<td> QUEST_FLAGS_PLAYER_CAST_ON_COMPLETE</td>
<td>Automatically suggestion of accepting quest. Not from npc.</td>
</tr>
<tr class="even">
<td>4194304</td>
<td>QUEST_FLAGS_UPDATE_PHASE_SHIFT</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>8388608</td>
<td>QUEST_FLAGS_SOR_WHITELIST</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>16777216</td>
<td>QUEST_FLAGS_LAUNCH_GOSSIP_COMPLETE</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>54432</td>
<td>QUEST_FLAGS_REMOVE_EXTRA_GET_ITEMS</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>67108864</td>
<td>QUEST_FLAGS_HIDE_UNTIL_DISCOVERED</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>134217728</td>
<td>QUEST_FLAGS_PORTRAIT_IN_QUEST_LOG</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>268435456</td>
<td>QUEST_FLAGS_SHOW_ITEM_WHEN_COMPLETED</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>536870912</td>
<td>QUEST_FLAGS_LAUNCH_GOSSIP_ACCEPT</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>1073741824</td>
<td>QUEST_FLAGS_ITEMS_GLOW_WHEN_DONE</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>2147483648</td>
<td>QUEST_FLAGS_FAIL_ON_LOGOUT</td>
<td><br />
</td>
</tr>
</tbody>
</table>

Like all flag based fields, **QuestFlags** can be added for the different types of quest.

Note that some flags may not be supported by core.

### RewardTitleId

The title the character will receive upon completion of the quest. See CharTitles.dbc

### RequiredPlayerKills

Displays how much players you need to kill betd class=td class=a class=/td data-linked-resource-default-alias=fore completing the quest.

### RewardTalents

Will give X bonus talents to the player completed the quest. Leave'"0"for No Bonus Talent Points.''

### RewardArenaPoints

Will Give X Arena Points to the player that completes the quest. Leave"0"For no Arena Points Reward.

### RewardChoiceItemId

Id of item available for reward choice.
Number of Charges in rewarded item available.

### RewardChoiceItemCount

Will choose how many items will be added for reward. E.g "RewardChoiceItemId" is the reward item and "RewardChoiceItemCount" is the count of how many items will be added as a reward.

### RewardItemId

[item Id](item_template_2130222.html#item_template-entry) given for reward (no choice).

### RewardItemCount

field-no-description|46

### RewardFactionId

Faction Id (from Faction.dbc) for which the quest give reputation points.
Number of gain or lost reputation points for Faction at quest completion. This is special reputation rewarding. Normal reputation reward to quest rewarding creature faction calculated and added automatically.

### RewardFactionValueId

This field is used for reputation lookup in QuestFactionReward.dbc if [RewardFactionValueId](#quest_template-RewardFactionValueId) is 0. Value X in this field indicates RepX column of QuestFactionReward.dbc. If RewardRepValueId is positive, reputation from the first row of QuestFactionReward.dbc will be used, for negative values the second row is used.

### RewardFactionValueIdOverride

This field is used to give reputation values not present in QuestFactionReward.dbc or to override them if [RewardRepValueId](#quest_template-RewardRepValueId) is wrong for some reason. The value in this field is 100× the intended reputation reward (if you want to give 400 rep, put 40000 in RewardFactionValueIdOverride).

### POIContinent

MapId of a quest point of interest (POI - Point Of Interest). POI will be shown on the map when quest is active.

### POIx

X coordinate of quest POI.

### POIy

Y coordinate of quest POI.

### POIPriority

TODO

### Title

Title of the quest.

### Objectives

Objectives of the quest. If empty, quest is an auto-complete quest that can be immediately finished without accepting it first.

### Details

The quest text. You can use certain placeholders that will be filled in in-game: $B - line break, $N - name, $R - race, $C - class, $Gmale:female; (male and female can be replace with any synonymn you want, but the order must stay the same. IE: boy:girl / man:woman / sir:madam / dude:chick)

### EndText

field-no-description|57

### OfferRewardText

First text send to the player by the NPC when completing the quest. You can use certain placeholders that will be filled in in-game: $B - line break, $N - name, $R - race, $C - class, $Gmale:female; (male and female can be replace with any synonymn you want, but the order must stay the same. IE: boy:girl / man:woman / sir:madam / dude:chick)

### RequestItemsText

Text sent to player when the player tries to talk to the NPC with the quest active but incomplete. (The text under the "Progress" title in Wowhead.) You can use certain placeholders that will be filled in in-game: $B - line break, $N - name, $R - race, $C - class, $Gmale:female; (male and female can be replace with any synonymn you want, but the order must stay the same. IE: boy:girl / man:woman / sir:madam / dude:chick)

### CompletedText

field-no-description|59

### RequiredNpcOrGo

Value &gt; 0:required creature\_template ID the player needs to kill/cast on in order to complete the quest.
Value &lt; 0:required gameobject\_template ID the player needs to cast on in order to complete the quest.
If\*RequiredSpellCast\*is != 0, the objective is to cast on target, else kill.
NOTE: If RequiredSpellCast is != 0 and the spell has effects Send Event or Quest Complete, this field may be left empty.

### RequiredNpcOrGoCount

The number of times the creature or gameobject must be killed or casted upon.

### RequiredSourceItemId

Item ID that is needed indirectly by the quest. For example, the quests asks for item X but the only way to get item X is by activating item Y; however, item Y is also a quest item. Therefore you set item Y's ID in this field. This requirement will not appear in the quest text, it is just for the core to know when to drop a quest item that isn't in the RequiredItemId field but is still needed by the quest.

### RequiredSourceItemCount

The maximum number of copies of the item in RequiredSourceItemId that can be picked up (and dropped by the core).

### RequiredItemId
Item\_template tc2

Id of required item to complete the quest.

### RequiredItemCount

Amount of required items

### RequiredSpell

Spell Id required to cast on [RequiredNpcOrGo](#quest_template-RequiredNpcOrGo) to update Objective.

### ObjectiveText

Used to define non-standard objective texts, that show up in the questlog. Example, "Heal fallen warrior" and the number gets added by Count values.

### DetailsEmote

field-no-description|69

### DetailsEmoteDelay

Emote delay in ms

### OfferRewardEmote

Emote played by the NPC at the time the character is rewarded for the quest.

### OfferRewardEmoteDelay

Emote delay in ms

### WDBVerified

## **Examples dealing with quests**

Always use PrevQuestId before using NextQuestId. NextQuestId is considered optional and to be used only when PrevQuestId is not sufficient

### Basic quest

Single, stand-alone quest with no prerequisites

``` cpp
    questA
```

``` cpp
entry = questA        PrevQuestId = 0        NextQuestId = 0        ExclusiveGroup = 0        NextQuestInChain = 0
```

### Prequest

When this quest require another quest to be rewarded

``` cpp
    questA
```

``` cpp
entry = questA        PrevQuestId = questX   NextQuestId = 0        ExclusiveGroup = 0        NextQuestInChain = 0
```

### Chain of quests

Player get quests in a strict chain that must be completed in a specific order.

``` cpp
    questA
      |
    questB
      |
    questC
      |
    questD
```

``` cpp
entry = questA      PrevQuestId = 0          NextQuestId = 0       ExclusiveGroup = 0       NextQuestInChain = questB
entry = questB      PrevQuestId = questA     NextQuestId = 0       ExclusiveGroup = 0       NextQuestInChain = questC
entry = questC      PrevQuestId = questB     NextQuestId = 0       ExclusiveGroup = 0       NextQuestInChain = questD
entry = questD      PrevQuestId = questC     NextQuestId = 0       ExclusiveGroup = 0       NextQuestInChain = 0
```

### Chain of quests with multiple start quests.

Player should only be allowed to complete one of three possible

``` cpp
    questA     questB    questC
      \           |         /
        ------ questD -----
                  |
               questE
```

``` cpp
entry = questA      PrevQuestId = 0        NextQuestId = questD    ExclusiveGroup = questA    NextQuestInChain = questD    
entry = questB      PrevQuestId = 0        NextQuestId = questD    ExclusiveGroup = questA    NextQuestInChain = questD
entry = questC      PrevQuestId = 0        NextQuestId = questD    ExclusiveGroup = questA    NextQuestInChain = questD
entry = questD      PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0         NextQuestInChain = questE
entry = questE      PrevQuestId = questD   NextQuestId = 0         ExclusiveGroup = 0         NextQuestInChain = 0
```

### Chain of quests with multiple start quests.

Player must complete all three initial quests before D becomes available

``` cpp
    questA    questB    questC
      \         |          /
       ------ questD -----
                |
              questE
```

``` cpp
entry = questA      PrevQuestId = 0        NextQuestId = questD   ExclusiveGroup = -questA    NextQuestInChain = questD
entry = questB      PrevQuestId = 0        NextQuestId = questD   ExclusiveGroup = -questA    NextQuestInChain = questD
entry = questC      PrevQuestId = 0        NextQuestId = questD   ExclusiveGroup = -questA    NextQuestInChain = questD
entry = questD      PrevQuestId = 0        NextQuestId = 0        ExclusiveGroup = 0          NextQuestInChain = questE
entry = questE      PrevQuestId = questD   NextQuestId = 0        ExclusiveGroup = 0          NextQuestInChain = 0
```

### Quests with split and a child quest

Completing A unlocks B and C that can be done at the same time. They both need to be completed before D becomes available. X is needed to obtain item for C and this quest should only be available if C is active

``` cpp
                questA
              /        \
          questB     questC  -  questX
              \        /
                questD
```

``` cpp
entry = questA       PrevQuestId = 0        NextQuestId = 0        ExclusiveGroup = 0         NextQuestInChain = 0
entry = questB       PrevQuestId = questA   NextQuestId = questD   ExclusiveGroup = -questB   NextQuestInChain = 0
entry = questC       PrevQuestId = questA   NextQuestId = questD   ExclusiveGroup = -questB   NextQuestInChain = 0
entry = questX       PrevQuestId = -questC  NextQuestId = 0        ExclusiveGroup = 0         NextQuestInChain = 0
entry = questD       PrevQuestId = 0        NextQuestId = 0        ExclusiveGroup = 0         NextQuestInChain = 0
```

### Multiple quest chains, leading to one final quest

Player may complete (not required to) X, but has to complete all three quest chains before final quest becomes available

``` cpp
                *questX*
                   |
    *questA*    *questC*    *questE*
       |           |            |
    *questB*    *questD*    *questF*
       \           |           /
         ------ *questG* -----
```

``` cpp
PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = questC    entry = questX
PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = questB    entry = questA
PrevQuestId = questA   NextQuestId = questG    ExclusiveGroup = -questB    NextQuestInChain = 0         entry = questB
PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = questD    entry = questC
PrevQuestId = questC   NextQuestId = questG    ExclusiveGroup = -questB    NextQuestInChain = 0         entry = questD
PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = questF    entry = questE
PrevQuestId = questE   NextQuestId = questG    ExclusiveGroup = -questB    NextQuestInChain = 0         entry = questF

PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = 0         entry = questG
```

### Complicated

Player must first complete A, then B to unlock the chain from C to E. Three other quests in a group will also be unlocked, those can be done at the same time. The three grouped quests must all be completed before I becomes available. Completion of E and I is required to obtain the final quest.

``` cpp
                *questA*
                   |
                *questB*
              /          \
          *questC*     *questF*
             |         *questG*
          *questD*     *questH*
             |            |
          *questE*     *questI*
             \           /
                *questJ*
```

``` cpp
PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = questB    entry = questA
PrevQuestId = questA   NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = 0         entry = questB

PrevQuestId = questB   NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = questD    entry = questC
PrevQuestId = questC   NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = questE    entry = questD
PrevQuestId = questD   NextQuestId = questJ    ExclusiveGroup = -questE    NextQuestInChain = 0         entry = questE

PrevQuestId = questB   NextQuestId = questI    ExclusiveGroup = -questF    NextQuestInChain = 0         entry = questF
PrevQuestId = questB   NextQuestId = questI    ExclusiveGroup = -questF    NextQuestInChain = 0         entry = questG
PrevQuestId = questB   NextQuestId = questI    ExclusiveGroup = -questF    NextQuestInChain = 0         entry = questH

PrevQuestId = 0        NextQuestId = questJ    ExclusiveGroup = -questE    NextQuestInChain = 0         entry = questI

PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = 0         entry = questJ
```

### Impossible - many quests may unlock many

Player can choose between two alternative chains (Chain A or B, but not both chains). A2 or B2 should unlock C, D and E when complete. When all three complete, F should be unlocked. If player get A3 or B3 after complete F, depends on if chain A or B was chosen

``` cpp
                *questA1*           *questB1*
                    |                   |
                *questA2*           *questB2*
                    \                  /
                     ---- *questC* ----
                          *questD*
                          *questE*
                             |
                          *questF*
                         /        \
                    *questA3*   *questB3*
```

``` cpp
PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = questA2   entry = questA1
PrevQuestId = questA1  NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = 0         entry = questA2

PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = questB2   entry = questB1
PrevQuestId = questB1  NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = 0         entry = questB2

PrevQuestId = 0        NextQuestId = questF    ExclusiveGroup = -questC    NextQuestInChain = 0         entry = questC
PrevQuestId = 0        NextQuestId = questF    ExclusiveGroup = -questC    NextQuestInChain = 0         entry = questD
PrevQuestId = 0        NextQuestId = questF    ExclusiveGroup = -questC    NextQuestInChain = 0         entry = questE

PrevQuestId = 0        NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = 0         entry = questF

PrevQuestId = questF   NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = 0         entry = questA3
PrevQuestId = questF   NextQuestId = 0         ExclusiveGroup = 0          NextQuestInChain = 0         entry = questB3
```

Note:

If player can choose between chain A or B may be determined by faction status (aldor or scryer), using ReqMinRepFaction = 1. Player should not be able to be neutral+1 with both at the same time. This may be the common threshold to obtain aldor or scryer quests (this is unsure). If that is the case, only the unlock of C, D and E after complete A2 *or* B2 is the impossible part.\_Note 2: With the [Conditions](conditions) table now every quest chain is possible.''

/table

