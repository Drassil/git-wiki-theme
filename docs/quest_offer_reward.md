# quest\_offer\_reward

 

**Table: quest\_offer\_reward**

This table is used for quests offering rewards without any required quest items (no item delivery involved).

 

| Field                                              | Type         | Attributes        | Key | NULL | Default | Comment                                                                                                              |
|----------------------------------------------------|--------------|-------------------|-----|------|---------|----------------------------------------------------------------------------------------------------------------------|
| [ID](#quest_offer_reward-ID)                       | mediumint(8) | unsigned          | PRI | NO   | 0       | Unique ID ([quest\_template.ID](https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-ID)) |
| [Emote1](#quest_offer_reward-Emote1)               | smallint(5)  | unsigned          |     | NO   | 0       | Quest NPC [Emote](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)                                          |
| [Emote2](#quest_offer_reward-Emote2)               | smallint(5)  | unsigned          |     | NO   | 0       | Quest NPC [Emote](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)                                          |
| [Emote3](#quest_offer_reward-Emote3)               | smallint(5)  | unsigned          |     | NO   | 0       | Quest NPC [Emote](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)                                          |
| [Emote4](#quest_offer_reward-Emote4)               | smallint(5)  | unsigned          |     | NO   | 0       | Quest NPC [Emote](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)                                          |
| [EmoteDelay1](#quest_offer_reward-EmoteDelay1)     | int(10)      | unsigned          |     | NO   | 0       | Emote delay in milliseconds                                                                                          |
| [EmoteDelay2](#quest_offer_reward-EmoteDelay2)     | int(10)      | unsigned          |     | NO   | 0       | Emote delay in milliseconds                                                                                          |
| [EmoteDelay3](#quest_offer_reward-EmoteDelay3)     | int(10)      | unsigned          |     | NO   | 0       | Emote delay in milliseconds                                                                                          |
| [EmoteDelay4](#quest_offer_reward-EmoteDelay4)     | int(10)      | unsigned          |     | NO   | 0       | Emote delay in milliseconds                                                                                          |
| [RewardText](#quest_offer_reward-RewardText)       | text         | utf8\_general\_ci |     | YES  | NULL    | Quest gossip text, single quest dialogue                                                                             |
| [VerifiedBuild](#quest_offer_reward-VerifiedBuild) | smallint(5)  |                   |     | NO   | 0       | Game client Build number or manually set value                                                                       |

 

**Description of the fields:**

### ID

Unique ID ([quest\_template.ID](https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-ID))

### Emote1

Emote (from [Emotes.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)) played by NPC

### Emote2

Emote (from [Emotes.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)) played by NPC

### Emote3

Emote (from [Emotes.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)) played by NPC

### Emote4

Emote (from [Emotes.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)) played by NPC

### EmoteDelay1

Emote delay in milliseconds

### EmoteDelay2

Emote delay in milliseconds

### EmoteDelay3

Emote delay in milliseconds

### EmoteDelay4

Emote delay in milliseconds

### RewardText

Quest gossip text shown when turning in a quest where no item delivery is involved.

Some of the quests are just a reward pick-up without the need to accept an initial new quest.

Such quests can be either class specific, repeatable or quest item retrieval in case of lost items.

 

### VerifiedBuild

 

This field is used by the TrinityCore DB Team to determine whether a template has been verified from WDB files.

 

-   If value is 0, it has not been parsed yet.
-   If value is &gt; 0, it has been parsed with WDB files from that specific [Client Build](https://trinitycore.atlassian.net/wiki/display/tc/realmlist#realmlist-gamebuild).
-   If value is -1, it is just a place holder until proper data are found on WDBs.
-   If value is -[Client Build](https://trinitycore.atlassian.net/wiki/display/tc/realmlist#realmlist-gamebuild), it was parsed with WDB files from that specific [client build](https://trinitycore.atlassian.net/wiki/display/tc/realmlist#realmlist-gamebuild) and manually edited later for some specific necessity.


