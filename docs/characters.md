# characters (table)

[<-Back-to:Characters](database-characters.md)

**The \`characters\` table**

This table holds vital static information for each character. This information loaded and used to create the player objects in-game.

**Structure**

| Field                       | Type         | Attributes | Key | Null | Default | Extra | Comment |
|-----------------------------|--------------|------------|-----|------|---------|-------|---------|
|[guid](#guid)                |int(10)       |unsigned    |PRI  |NO    |0        |Unique |Global Unique Identifier|
|[account](#account)          |int(10)       |unsigned    |     |NO    |0        |       |Account Identifier|
|[name](#name)                |varchar(12)   |signed      |     |NO    |NULL     |       ||
|[race](#race)                |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[class](#class)              |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[gender](#gender)            |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[level](#level)              |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[xp](#xp)                    |int(10)       |unsigned    |     |NO    |0        |       ||
|[money](#money)              |int(10)       |unsigned    |     |NO    |0	     |       ||
|[skin](#skin)			      |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[face](#face)			      |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[hairStyle](#hairStyle)	  |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[hairColor](#hairColor)	  |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[facialStyle](#facialStyle)  |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[bankSlots](#bankSlots)      |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[restState](#restState)      |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[playerflags](#playerflags)  |int(10)       |unsigned    |     |NO    |0        |       ||
|[position_x](#position_x)    |float         |signed      |     |NO    |0        |       ||
|[position_y](#position_y)    |float         |signed      |     |NO    |0        |       ||
|[position_z](#position_z)    |float         |signed      |     |NO    |0        |       ||
|[map](#map)    			  |smallint(5)   |signed      |     |NO    |0        |       |Map Identifier|
|[instance_id](#instance_id)  |int(10)       |unsigned    |     |NO    |0        |       ||
|[instance_mode_mask](#instance_mode_mask)|tinyint(3)|unsigned| |NO    |0        |       ||
|[orientation](#orientation)  |float         |signed	  |     |NO    |0        |       ||
|[taximask](#taximask)        |text          |signed      |     |NO    |0        |       ||
|[online](#online)            |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[cinematic](#cinematic)      |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[totaltime](#totaltime)      |int(10)       |unsigned    |     |NO    |0        |       ||
|[leveltime](#leveltime)      |int(10)       |unsigned    |     |NO    |0        |       ||
|[logout_time](#logout_time)  |int(10)       |unsigned    |     |NO    |0        |       ||
|[is_logout_resting](#is_logout_resting)|tinyint(3)|unsigned|   |NO    |0        |       ||
|[rest_bonus](#rest_bonus)    |float         |signed      |     |NO    |0        |       ||
|[resettalents_cost](#resettalents_cost)|int(10)|unsigned |     |NO    |0        |       ||
|[resettalents_time](#resettalents_time)|int(10)|unsigned |     |NO    |0        |       ||
|[trans_x](#trans_x)          |float         |signed      |     |NO    |0        |       ||
|[trans_y](#trans_y)          |float         |signed      |     |NO    |0        |       ||
|[trans_z](#trans_z)          |float         |signed      |     |NO    |0        |       ||
|[trans_o](#trans_o)          |float         |signed      |     |NO    |0        |       ||
|[transguid](#transguid)      |mediumint(8)  |unsigned    |     |NO    |0        |       ||
|[extra_flags](#extra_flags)  |smallint(5)   |unsigned    |     |NO    |0        |       ||
|[extra_flags](#extra_flags)  |smallint(5)   |unsigned    |     |NO    |0        |       ||
|[stable_slots](#stable_slots)|tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[at_login](#at_login)        |smallint(5)   |unsigned    |     |NO    |0        |       ||
|[zone](#zone)                |smallint(5)   |unsigned    |     |NO    |0        |       ||
|[death_expire_time](#death_expire_time)|int(10)|unsigned |     |NO    |0        |       ||
|[taxi_path](#taxi_path)      |text          |signed      |     |YES   |NULL     |       ||
|[arenaPoints](#arenaPoints)  |int(10)       |unsigned    |     |NO    |0        |       ||
|[totalhonorpoints](#totalhonorpoints)|int(10)|unsigned   |     |NO    |0        |       ||
|[todayhonorpoints](#todayhonorpoints)|int(10)|unsigned   |     |NO    |0        |       ||
|[yesterdayhonorpoints](#yesterdayhonorpoints)|int(10)|unsigned ||NO   |0        |       ||
|[totalkills](#totalkills)    |int(10)       |unsigned    |     |NO    |0        |       ||
|[todayKills](#todaykills)    |smallint(5)   |unsigned    |     |NO    |0        |       ||
|[yesterdayKills](#yesterdayKills)|smallint(5)|unsigned   |     |NO    |0        |       ||
|[chosenTitle](#chosenTitle)  |int(10)       |unsigned    |     |NO    |0        |       ||
|[knownCurrencies](#knownCurrencies)|bigint(20)|unsigned  |     |NO    |0        |       ||
|[watchedFaction](#watchedFaction)|int(10)   |unsigned    |     |NO    |0        |       ||
|[drunk](#drunk)              |tinyint(3)    |unsigned    |     |NO    |0        |       ||
|[health](#health)            |int(10)       |unsigned    |     |NO    |0        |       ||
|[power](#power1)             |int(10)       |unsigned    |     |NO    |0        |       ||
|[power](#power2)             |int(10)       |unsigned    |     |NO    |0        |       ||
|[power](#power3)             |int(10)       |unsigned    |     |NO    |0        |       ||
|[power](#power4)             |int(10)       |unsigned    |     |NO    |0        |       ||
|[power](#power5)             |int(10)       |unsigned    |     |NO    |0        |       ||
|[power](#power6)             |int(10)       |unsigned    |     |NO    |0        |       ||
|[power](#power7)             |int(10)       |unsigned    |     |NO    |0        |       ||
|[latency](#latency)          |mediumint(8)  |unsigned    |     |NO    |0        |       ||
|[talentGroupsCount](#talentGroupsCount)|tinyint(3)|unsigned|   |NO    |1        |       ||
|[activeTalentGroup](#activeTalentGroup)|tinyint(3)|unsigned|   |NO    |0        |       ||
|[exploredzones](#exploredzones)|longtext    |signed      |     |YES   |NULL     |       ||
|[equipmentcache](#equipmentcache)|longtext  |signed      |     |YES   |NULL     |       ||
|[ammoid](#ammoid)            |int(10)       |unsigned    |     |NO    |0        |       ||
|[knownTitles](#knownTitles)  |longtext      |signed      |     |YES   |NULL     |       ||
|[actionbars](#actionbars)    |longtext      |unsigned    |     |NO    |0        |       ||
|[grantableLevels](#grantablelevels)|longtext|unsigned    |     |NO    |0        |       ||
|[creation_date](#creation_date)|timestamp   |signed      |     |NO    |CURRENT_TIMESTAMP|||
|[deleteInfos_Account](#deleteInfos_Account)|int(10)|unsigned|  |YES   |NULL     |       ||
|[deleteInfos_Name](#deleteInfos_Name)|varchar(12)|unsigned|    |YES   |NULL     |       ||
|[deleteDate](#deleteDate)    |int(10)       |unsigned    |     |YES   |NULL     |       ||
  
**Description of the fields**

### guid

The character global unique identifier. This number must be unique and is the best way to identify separate characters.

### account

The account ID in which this character resides. See [account.id](http://www.azerothcore.org/wiki/account#id). in the auth database.

### name

The name of the character.

### race

The race of the character. See [ChrRaces.dbc](ChrRaces)

### class

The class of the character: [ChrClasses.dbc](ChrClasses)

### gender

The gender of the character.

|    |             |
| -- | ---         |
| 0  | Male        |
| 1  | Female      |
| 2  | Unknown (?) |


### level

The level of the character.

### xp

The amount of experience this character has earned towards the next level.

### money

The amount of copper this character has.

### skin

Contains data about the skincolor of the character.
skinColor = playerbytes  % 256

### face

Contains data about the facestyle of the character.
faceStyle = (playerbytes &gt;&gt; 8) % 256

### hairStyle
Contains data about the hairStyle of the character.
hairStyle = (playerbytes &gt;&gt; 16) % 256

### hairColor
Contains data about the haircolor of the character.
hairColor = (playerbytes &gt;&gt; 24) % 256

### facialStyle

Contains data about facial hair of the character.
facialHair = playerBytes2 % 256

### bankSlots

### restState

### playerFlags

A bitmask that represents what Player flags the player has. Each bit controls a different flag and to combine flags, you can add each flag that you want, in effect activating the respective bits.

| Flag     |            | Name                          | Comment                                                                           |
|----------|------------|-------------------------------|-----------------------------------------------------------------------------------|
| 1        | 0x00000001 | PLAYER_FLAGS_GROUP_LEADER     |                                                                                   |
| 2        | 0x00000002 | PLAYER_FLAGS_AFK              |                                                                                   |
| 4        | 0x00000004 | PLAYER_FLAGS_DND              |                                                                                   |
| 8        | 0x00000008 | PLAYER_FLAGS_GM               |                                                                                   |
| 16       | 0x00000010 | PLAYER_FLAGS_GHOST            |                                                                                   |
| 32       | 0x00000020 | PLAYER_FLAGS_RESTING          |                                                                                   |
| 64       | 0x00000040 | PLAYER_FLAGS_UNK7             |                                                                                   |
| 128      | 0x00000080 | PLAYER_FLAGS_UNK8             | pre-3.0.3 PLAYER_FLAGS_FFA_PVP flag for FFA PVP state                             |
| 256      | 0x00000100 | PLAYER_FLAGS_CONTESTED_PVP    | Player has been involved in a PvP combat and will be attacked by contested guards |
| 512      | 0x00000200 | PLAYER_FLAGS_IN_PVP           |                                                                                   |
| 1024     | 0x00000400 | PLAYER_FLAGS_HIDE_HELM        |                                                                                   |
| 2048     | 0x00000800 | PLAYER_FLAGS_HIDE_CLOAK       |                                                                                   |
| 4096     | 0x00001000 | PLAYER_FLAGS_PLAYED_LONG_TIME | played long time                                                                  |
| 8192     | 0x00002000 | PLAYER_FLAGS_TOO_LONG         | played too long time                                                              |
| 16384    | 0x00004000 | PLAYER_FLAGS_IS_OUT_OF_BOUNDS |                                                                                   |
| 32768    | 0x00008000 | PLAYER_FLAGS_DEVELOPER        | prefix for something?                                                             |
| 65536    | 0x00010000 | PLAYER_FLAGS_UNK17            | pre-3.0.3 PLAYER_FLAGS_SANCTUARY flag for player entered sanctuary                |
| 131072   | 0x00020000 | PLAYER_FLAGS_TAXI_BENCHMARK   | taxi benchmark mode (on/off) (2.0.1)                                              |
| 262144   | 0x00040000 | PLAYER_FLAGS_PVP_TIMER        | 3.0.2, pvp timer active (after you disable pvp manually)                          |
| 524288   | 0x00080000 | PLAYER_FLAGS_UNK20            |                                                                                   |
| 1048576  | 0x00100000 | PLAYER_FLAGS_UNK21            |                                                                                   |
| 2097152  | 0x00200000 | PLAYER_FLAGS_UNK22            |                                                                                   |
| 4194304  | 0x00400000 | PLAYER_FLAGS_COMMENTATOR2     |                                                                                   |
| 8388608  | 0x00800000 | PLAYER_ALLOW_ONLY_ABILITY     | used by bladestorm and killing spree                                              |
| 16777216 | 0x01000000 | PLAYER_FLAGS_UNK25            | disabled all melee ability on tab include autoattack                              |
| 33554432 | 0x02000000 | PLAYER_FLAGS_NO_XP_GAIN       |                                                                                   |

### position\_x

The x position of the character's location.

### position\_y

The y position of the character's location.

### position\_z

The z position of the character's location.

### map

The map ID the character is in.

### instance\_id

The instance ID the character is currently in and bound to

### instance\_mode\_mask

The current dungeon difficulty that the player is in. This field is bitmask. Values are put together, however, only two of four should be used at once. This description may not be 100% correct.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th><p>Comment</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Normal</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Heroic</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>10 man</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td><p>25 man</p></td>
</tr>
</tbody>
</table>

### orientation

The orientation the character is facing. (North = 0.0, South = 3.14159)

### taximask

Known taxi nodes separated with space

### online

Records whether the character is online (1) or offline (0).

### cinematic

Boolean 1 or 0 controlling whether the start cinematic has been shown or not.

### totaltime

The total time that the character has been active in the world, measured in seconds.

### leveltime

The total time the character has spent in the world at the current level, measured in seconds.

### logout\_time

The time when the character last logged out, measured in Unix time.

### is\_logout\_resting

Boolean 1 or 0 controlling if the character is currently in a resting zone or not.

### rest\_bonus

The cumulated bonus of rested rate for gaining experience.

### resettalents\_cost

The cost for the character to reset its talents, measured in copper.

### resettalents\_time

`field-no-description|30`

### trans\_x

The x position of the transport this character was on when they were last saved.

### trans\_y

The y position of the transport this character was on when they were last saved.

### trans\_z

The z position of the transport this character was on when they were last saved.

### trans\_o

The orientation of the transport this character was on when they were last saved.

### transguid

The global unique identifier of the transport this character was on when they were last saved.

### extra\_flags

These flags control certain player specific attributes, mostly GM features

| Flag |            | Name                           | Description                                         |
|------|------------|--------------------------------|-----------------------------------------------------|
| 1    | 0x00000001 | PLAYER_EXTRA_GM_ON             | Defines GM state                                    |
| 2    | 0x00000002 | PLAYER_EXTRA_GM_ACCEPT_TICKETS | NO LONGER USED Defines if tickets are accepted      |
| 4    | 0x00000004 | PLAYER_EXTRA_ACCEPT_WHISPERS   | Defines if whispers are accepted                    |
| 8    | 0x00000008 | PLAYER_EXTRA_TAXICHEAT         | Sets taxicheat                                      |
| 16   | 0x00000010 | PLAYER_EXTRA_GM_INVISIBLE      | Defines GM visibility                               |
| 32   | 0x00000020 | PLAYER_EXTRA_GM_CHAT           | Show GM badge in chat messages                      |
| 64   | 0x00000040 | PLAYER_EXTRA_HAS_310_FLYER     | Marks if player already has 310% speed flying mount |
| 256  | 0x00000100 | PLAYER_EXTRA_PVP_DEATH         | Store PvP death status until corpse creating        |

### stable\_slots

The Stable Slots available (bought) at the Stable Master.

### at\_login

This field is a bitmask controlling different actions taken once a player logs in with the character.

| Flag |      | Name                       | Description                          |
|------|------|----------------------------|--------------------------------------|
| 1    | 0x01 | AT_LOGIN_RENAME            | Force character to change name       |
| 2    | 0x02 | AT_LOGIN_RESET_SPELLS      | Reset spells (professions as well)   |
| 4    | 0x04 | AT_LOGIN_RESET_TALENTS     | Reset talents                        |
| 8    | 0x08 | AT_LOGIN_CUSTOMIZE         | Customize Characters                 |
| 16   | 0x10 | AT_LOGIN_RESET_PET_TALENTS | Reset pet talents                    |
| 32   | 0x20 | AT_LOGIN_FIRST             | Set at and removed after first login |
| 64   | 0x40 | AT_LOGIN_CHANGE_FACTION    | Faction change                       |
| 128  | 0x80 | AT_LOGIN_CHANGE_RACE       | Race change                          |

For multiple actions, add values together.

### zone

The zone ID the character is in.

### death\_expire\_time

Time when a character can be resurrected in case of a server crash or client exit while in ghost form, measured in Unix time.

### taxi\_path

Stores the players current taxi path ([TaxiPath.dbc](TaxiPath)) if logged off while on one.

### arenaPoints

The amount of arena points this character has stored up, and will receive next time arena points are distributed.

### totalHonorPoints

The amount of honor points this character has got

### todayHonorPoints

The amount of honor points this character has gotten today

### yesterdayHonorPoints

The amount of honor points this character got yesterday

### totalKills

The amount of players this character has killed

### todayKills

The amount of players this character has killed today

### yesterdayKills

The amount of players this character killed yesterday

### chosenTitle

Current title, using the bit\_index field (InGameOrder in [CharTitles.dbc](CharTitles))

### knownCurrencies

Known currencies (what to be listed in the Currency tab), bitmask of BitIndexes, see [CurrencyTypes.dbc](CurrencyTypes)

### watchedFaction

Tracked faction at experience bar (using reputation ID, see [Faction.dbc](Faction))

### drunk

Character's drunk state, 0-100

-   0 = Sober
-   1-49 = Tipsy
-   50-89 = Drunk
-   90-100 = Smashed

### health

The characters current health.

### power

Current character powers (snapshot from when the character was saved)

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Field</p></th>
<th><p>Power name</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>power1</p></td>
<td><p>Mana</p></td>
</tr>
<tr class="even">
<td><p>power2</p></td>
<td><p>Rage</p></td>
</tr>
<tr class="odd">
<td><p>power3</p></td>
<td><p>Focus</p></td>
</tr>
<tr class="even">
<td><p>power4</p></td>
<td><p>Energy</p></td>
</tr>
<tr class="odd">
<td><p>power5</p></td>
<td><p>Happiness</p></td>
</tr>
<tr class="even">
<td><p>power6</p></td>
<td><p>Runes</p></td>
</tr>
<tr class="odd">
<td><p>power7</p></td>
<td><p>Runic Power</p></td>
</tr>
</tbody>
</table>

### latency

This characters latency, or ping, in milliseconds, as of the last update.

### talentGroupsCount

The number of specs this character has access to. Default value is 1. Maximum currently supported value is 2. Should never be 0 (this is a sign of a character created before the dual spec system.)

### activeTalentGroup

The currently activated spec for this character, spec = 0 is the first spec, spec = 1 is the second spec.

### exploredZones

Bitmasks of explored zones (1 bit for explored, 0 bit for unexplored)

### equipmentCache

Character's equipment and bag cache. `field-no-description|58`

### ammoId

[Template ID](http://www.azerothcore.org/wiki/item_template#entry) of the ammo item

### knownTitles

Contains data about known Titles stored in 6 x 16bit integers. To calculate where a knownTitle is in one of those 6 integers you do the following: We select one of the titles from [CharTitles.dbc](CharTitles), take Archmage title for example:

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>TitleID</p></td>
<td><p>UnkRef?</p></td>
<td><p>MaleTitle</p></td>
<td><p>FemaleTitle</p></td>
<td><p>InGameOrder</p></td>
</tr>
<tr class="even">
<td><p>93</p></td>
<td><p>0</p></td>
<td><p>Archmage %s</p></td>
<td><p>Archmage %s</p></td>
<td><p>61</p></td>
</tr>
</tbody>
</table>

We use the InGameOrder to calculate in which one of the 6 (16bit) integer is the title stored:

InGameOrder / 32 = X
61 / 32 = **1,90625** (1 - Do **NOT** round the value!)

so the 1st integer stores the title. Because counting starts from **0** to 5, it would be "0 **TITLE\_BIT** 0 0 0 0".

Now which bit stores the title? We use modulo to calculate this.

InGameOrder Modulo 32 = X
61 Mod 32 = **29**

so the 29bit stores the title. This would be 2 ^ 29 = 536870912. This bit stores the Archmage title. This would mean if you **only** have the Archmage title, characters.knownTitles would be "0 536870912 0 0 0 0".

### actionBars

A bitmask that contains visible actionbars for the player

| Flag |            | Comment          |
|------|------------|------------------|
| 1    | 0x00000001 | Bottom Left Bar  |
| 2    | 0x00000002 | Bottom Right Bar |
| 4    | 0x00000004 | Rigth Bar        |
| 8    | 0x00000008 | Right Bar 2      |

### grantableLevels

Recruit A Friend stuff.

### creation_date

Character's creation date and time. Format YYY-MM-DD HH:MM:SS according to server's time.

### deleteInfos\_Account

Stores the account id if the character is deleted and CharDelete.Method in worldserver.conf is set to 1.

### deleteInfos\_Name

Stores the name of character if the character is deleted and CharDelete.Method in worldserver.conf is set to 1.

### deleteDate

Stores the date when the character was deleted and CharDelete.Method in worldserver.conf is set to 1. Will be checked by worldserver against CharDelete.KeepDays in worldserver.conf. If this value is lower than deleteDate + CharDelete.KeepDays the character will be purged.
