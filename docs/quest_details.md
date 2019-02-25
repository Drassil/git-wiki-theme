# quest\_details

 

**Table: quest\_details**

This table handles Quest NPC emotes with emote delays.

 

| Field                                         | Type         | Attributes | Key | NULL | Default | Comment                                                                                                              |
|-----------------------------------------------|--------------|------------|-----|------|---------|----------------------------------------------------------------------------------------------------------------------|
| [ID](#quest_details-ID)                       | mediumint(8) | unsigned   | PRI | NO   | 0       | Unique ID ([quest\_template.ID](https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-ID)) |
| [Emote1](#quest_details-Emote1)               | smallint(5)  | unsigned   |     | NO   | 0       | Quest NPC [Emote](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)                                          |
| [Emote2](#quest_details-Emote2)               | smallint(5)  | unsigned   |     | NO   | 0       | Quest NPC [Emote](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)                                          |
| [Emote3](#quest_details-Emote3)               | smallint(5)  | unsigned   |     | NO   | 0       | Quest NPC [Emote](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)                                          |
| [Emote4](#quest_details-Emote4)               | smallint(5)  | unsigned   |     | NO   | 0       | Quest NPC [Emote](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)                                          |
| [EmoteDelay1](#quest_details-EmoteDelay1)     | int(10)      | unsigned   |     | NO   | 0       | Emote delay in milliseconds                                                                                          |
| [EmoteDelay2](#quest_details-EmoteDelay2)     | int(10)      | unsigned   |     | NO   | 0       | Emote delay in milliseconds                                                                                          |
| [EmoteDelay3](#quest_details-EmoteDelay3)     | int(10)      | unsigned   |     | NO   | 0       | Emote delay in milliseconds                                                                                          |
| [EmoteDelay4](#quest_details-EmoteDelay4)     | int(10)      | unsigned   |     | NO   | 0       | Emote delay in milliseconds                                                                                          |
| [VerifiedBuild](#quest_details-VerifiedBuild) | smallint(5)  |            |     | NO   | 0       | Game client Build number or manually set value                                                                       |

 

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

Emote delay in milliseconds

### EmoteDelay2

Emote delay in milliseconds

### EmoteDelay3

Emote delay in milliseconds

### EmoteDelay4

Emote delay in milliseconds

### VerifiedBuild

This field is used by the TrinityCore DB Team to determine whether a template has been verified from WDB files.

-   If value is 0, it has not been parsed yet.
-   If value is &gt; 0, it has been parsed with WDB files from that specific [Client Build](https://trinitycore.atlassian.net/wiki/display/tc/realmlist#realmlist-gamebuild).
-   If value is -1, it is just a place holder until proper data are found on WDBs.
-   If value is -[Client Build](https://trinitycore.atlassian.net/wiki/display/tc/realmlist#realmlist-gamebuild), it was parsed with WDB files from that specific [client build](https://trinitycore.atlassian.net/wiki/display/tc/realmlist#realmlist-gamebuild) and manually edited later for some specific necessity.

 
