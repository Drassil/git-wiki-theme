# quest\_template\_addon

**Table: quest\_template\_addon**

**
**Contains extra definitions like linking quests, dependencies and requirements for the quests defined in the [quest\_template](https://trinitycore.atlassian.net/wiki/display/tc/quest_template) table to become available to the player.

**Structure:**

<table>
<thead>
<tr class="header">
<th><p><strong>Field</strong></p></th>
<th><p><strong>Type</strong></p></th>
<th><p><strong>Attributes</strong></p></th>
<th><p><strong>Key</strong></p></th>
<th><p><strong>Null</strong></p></th>
<th><p><strong>Default</strong></p></th>
<th><p><strong>Extra</strong></p></th>
<th><p><strong>Comment</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="#id">ID</a></td>
<td>mediumint(8)</td>
<td>unsigned</td>
<td>PRI</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td>Unique ID linked to quest_template.ID</td>
</tr>
<tr class="even">
<td><a href="#maxlevel">MaxLevel</a></td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#allowableclasses">AllowableClasses</a></td>
<td>int(10)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><a href="#sourcespellid">SourceSpellID</a></td>
<td>mediumint(8)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#prevquestid">PrevQuestID</a></td>
<td>mediumint(8)</td>
<td><br />
</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><a href="#nextquestid">NextQuestID</a></td>
<td>mediumint(8)</td>
<td><br />
</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#exclusivegroup">ExclusiveGroup</a></td>
<td>mediumint(8)</td>
<td><br />
</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><a href="#rewardmailtemplateid">RewardMailTemplateID</a></td>
<td>mediumint(8)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#rewardmaildelay">RewardMailDelay</a></td>
<td>int(10)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><a href="#requiredskillid">RequiredSkillID</a></td>
<td>smallint(5)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#requiredskillpoints">RequiredSkillPoints</a></td>
<td>smallint(5)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><a href="#requiredminrepfaction">RequiredMinRepFaction</a></td>
<td>smallint(5)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#requiredmaxrepfaction">RequiredMaxRepFaction</a></td>
<td>smallint(5)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><a href="#requiredminrepvalue">RequiredMinRepValue</a></td>
<td>mediumint(8)</td>
<td><br />
</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#requiredmaxrepvalue">RequiredMaxRepValue</a></td>
<td>mediumint(8)</td>
<td><br />
</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><a href="#provideditemcount">ProvidedItemCount</a></td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#specialflags">SpecialFlags</a></td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
</tbody>
</table>

**Description of the fields:**

### **ID**

Unique quest ID, matching the same quest ID in [quest\_template.ID](https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-ID)

### **MaxLevel**

Maximum player level at which a character can get the quest.

### **AllowableClasses**

Classes required to get the quest. 0 means the quest is available for all classes.
This field is a bitmask, you can combine class values. See [ChrClasses.dbc](https://trinitycore.atlassian.net/wiki/display/tc/ChrClasses)

### **SourceSpellID**

The spell ID cast on player upon starting the quest.

### **PrevQuestID**

-   **if value &gt; 0:** Contains the previous quest id, that must be completed before this quest can be started.
-   **If value &lt; 0:** Contains the parent quest id, that must be active before this quest can be started.

See the [examples section](https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-Examples) for examples.

### **NextQuestID**

Contains the next quest id, in case PrevQuestId of that other quest is not sufficient.

See the [examples section](https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-Examples) for examples.

### **ExclusiveGroup**

-   **if ExclusiveGroup &gt; 0**

Allows to define a group of quests of which only one may be chosen and completed. E.g. if from quests 1200, 1201 and 1202 only one should be allowed to be chosen, insert 1200 into ExclusiveGroup of all 3 quests.

-   **if ExclusiveGroup &lt; 0**

Allows to define a group of quests of which all must be completed and rewarded to start next quest. E.g. if quest 1000 dependent from one of quests 1200, 1201 and 1202 and all this quests have same negative exclusive group then all this quest must be completed and rewarded before quest 1000 can be started.

Note: All quests that use an ExclusiveGroup must also have entries in pool\_template and pool\_quest in order for the core to choose one randomly. See the [examples section](https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-Examples) for examples.

### **RewardMailTemplateID**

If the quest gives as a reward an item from a possible list of items, the ID here corresponds to the proper loot template in [quest\_mail\_loot\_template](https://trinitycore.atlassian.net/wiki/display/tc/loot_template). According to the rules in that loot template, items "looted" will be sent by mail at the completion of the quest.

### **RewardMailDelay**

How many seconds to wait until the mail is sent to the character that turned in a quest rewarding items from a loot template defined in [RewardMailTemplateId](https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-RewardMailTemplateId)

### **RequiredSkillID**

Skill required to know to accept the quest. See [SkillLine.dbc](https://trinitycore.atlassian.net/wiki/display/tc/SkillLine)
0 means no skill is required.

### **RequiredSkillPoints**

Skill points required to have in order to accept the quest.

### **RequiredMinRepFaction**

Faction ID for reputation requirement. See [Faction.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Faction)

### **RequiredMaxRepFaction**

The Faction ID for the faction that controls the maximum reputation value that the player can have and still get the quest. See [Faction.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Faction)

### **RequiredMinRepValue**

Players must have this reputation or higher in order to receive the quest.

### **RequiredMaxRepValue**

The maximum reputation value that the player can have with a faction and still get the quest. If the player has more reputation than the value in this field, the quest will not be able to be taken anymore.

### **ProvidedItemCount**

Number of items given to the player (inserted in the player's bags) upon accepting the quest.

### **SpecialFlags**

This field is a bitmask and is for controlling server side quest functions. Blizzard keeps these data server-side and they are not sent to the client, so we have to populate the field manually.

-   0: No extra requirements

<!-- -->

-    1: Makes the quest repeatable.
-    2: Makes the quest only completable by some external event (an entry in [areatrigger\_involvedrelation](https://trinitycore.atlassian.net/wiki/display/tc/areatrigger_involvedrelation), spell effect quest complete or an entry in [spell\_scripts](https://trinitycore.atlassian.net/wiki/display/tc/scripts) with command 7 as some examples)
-    4: Make quest auto-accept. As of patch 3.3.5a only quests in the starter area need this flag.
-    8: Only used for Dungeon Finder quests
-   16: Makes the quest monthly
-   32: The quest requires RequiredOrNpcGo killcredit (a spell cast), but NOT an actual NPC kill. This action usually involves killing an invisible "bunny" NPC.


