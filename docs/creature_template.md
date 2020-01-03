# creature_template

This table contains the description of creatures. Each spawned creature is an instance of a template present in this table, this means every creature MUST be defined in this table.

| Field                                                             | Type                  | Null | Key | Default | Extra | Comment                              |
|-------------------------------------------------------------------|-----------------------|------|-----|---------|-------|--------------------------------------|
| [entry](#entry)                                 | mediumint(8) unsigned | NO   | PRI | 0       |       |                                      |
| [difficulty_entry_1](#difficulty_entry_x)       | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [difficulty_entry_2](#difficulty_entry_x)       | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [difficulty_entry_3](#difficulty_entry_x)       | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [KillCredit1](#killcredit1)                     | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [KillCredit2](#killcredit2)                     | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [modelid1](#modelidx)                            | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [modelid2](#modelidx)                            | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [modelid3](#modelidx)                            | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [modelid4](#modelidx)                            | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [name](#name)                                   | char(100)             | NO   | MUL | 0       |       |                                      |
| [subname](#subname)                             | char(100)             | YES  |     | (NULL)  |       |                                      |
| [IconName](#iconname)                           | char(100)             | YES  |     | (NULL)  |       |                                      |
| [gossip_menu_id](#gossip_menu_id)             | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [minlevel](#minlevel)                           | tinyint(3) unsigned   | NO   |     | 1       |       |                                      |
| [maxlevel](#maxlevel)                           | tinyint(3) unsigned   | NO   |     | 1       |       |                                      |
| [exp](#exp)                                     | smallint(6)           | NO   |     | 0       |       |                                      |
| [faction](#faction)                             | smallint(5) unsigned  | NO   |     | 0       |       |                                      |
| [npcflag](#npcflag)                             | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [speed_walk](#speed_walk)                      | float                 | NO   |     | 1       |       | Result of 2.5/2.5, most common value |
| [speed_run](#speed_run)                        | float                 | NO   |     | 1.14286 |       | Result of 8.0/7.0, most common value |
| [scale](#scale)                                 | float                 | NO   |     | 1       |       |                                      |
| [rank](#rank)                                   | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [mindmg](#mindmg)                               | float                 | NO   |     | 0       |       |                                      |
| [maxdmg](#maxdmg)                               | float                 | NO   |     | 0       |       |                                      |
| [dmgschool](#dmgschool)                         | tinyint(4)            | NO   |     | 0       |       |                                      |
| [attackpower](#attackpower)                     | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [BaseAttackTime](#baseattacktime)               | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [RangeAttackTime](#rangeattacktime)             | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [unit_class](#unit_class)                      | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [unit_flags](#unit_flags)                      | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [unit_flags2](#unit_flags2)                    | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [dynamicflags](#dynamicflags)                   | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [family](#family)                               | tinyint(4)            | NO   |     | 0       |       |                                      |
| [trainer_type](#trainer_type)                  | tinyint(4)            | NO   |     | 0       |       |                                      |
| [trainer_spell](#trainer_spell)                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [trainer_class](#trainer_class)                | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [trainer_race](#trainer_race)                  | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [minrangedmg](#minrangedmg)                     | float                 | NO   |     | 0       |       |                                      |
| [maxrangedmg](#maxrangedmg)                     | float                 | NO   |     | 0       |       |                                      |
| [rangedattackpower](#rangedattackpower)         | smallint(5)           | NO   |     | 0       |       |                                      |
| [type](#type)                                   | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [type_flags](#type_flags)                      | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [lootid](#lootid)                               | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [pickpocketloot](#pickpocketloot)               | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [skinloot](#skinloot)                              | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [resistance1](#resistancex)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance2](#resistancex)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance3](#resistancex)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance4](#resistancex)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance5](#resistancex)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance6](#resistancex)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [spell1](#spellx)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell2](#spellx)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell3](#spellx)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell4](#spellx)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell5](#spellx)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell6](#spellx)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell7](#spellx)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell8](#spellx)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [PetSpellDataId](#petspelldataid)               | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [VehicleId](#vehicleid)                         | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [mingold](#mingold)                             | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [maxgold](#maxgold)                             | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [AIName](#ainame)                               | char(64)              | NO   |     |         |       |                                      |
| [MovementType](#movementtype)                   | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [InhabitType](#inhabittype)                     | tinyint(3) unsigned   | NO   |     | 3       |       |                                      |
| [HoverHeight](#hoverheight)                     | float                 | NO   |     | 1       |       |                                      |
| [HealthModifier](#healthmodifier)               | float                 | NO   |     | 1       |       |                                      |
| [ManaModifier](#manamodifier)                   | float                 | NO   |     | 1       |       |                                      |
| [ArmorModifier](#armormodifier)                 | float                 | NO   |     | 1       |       |                                      |
| [DamageModifier](#damagemodifier)               | float                 | NO   |     | 1       |       |                                      |
| [ExperienceModifier](#experiencemodifier)       | float                 | NO   |     | 1       |       |                                      |
| [RacialLeader](#racialleader)                   | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [movementId](#movementid)                       | int(11) unsigned      | NO   |     | 0       |       |                                      |
| [RegenHealth](#regenhealth)                     | tinyint(3) unsigned   | NO   |     | 1       |       |                                      |
| [mechanic_immune_mask](#mechanic_immune_mask) | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [flags_extra](#flags_extra)                    | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [ScriptName](#scriptname)                       | char(64)              | NO   |     |         |       |                                      |
| [VerifiedBuild](#verifiedbuild)                 | smallint(5)           | YES  |     | 0       |       |                                      |

---

**Description of the fields**

#### entry

Creature's unique id.

#### difficulty_entry_x

| name                                                      | entry | difficulty_entry_1 | difficulty_entry_2 | difficulty_entry_3 |
|-----------------------------------------------------------|-------|----------------------|----------------------|----------------------|
| [Anomalus](http://www.wowhead.com/npc=26763/anomalus)     | 26763 | 30529                | 0                    | 0                    |
| [Sindragosa](http://www.wowhead.com/npc=36853/sindragosa) | 36853 | 38265                | 38266                | 38267                |

Anomalus is a boss located in The Nexus. You can fight him on two types of difficulties (normal dungeon and heroic dungeon). It's obvious that depending on the type of difficulty bosses have different statistics like health and damage. In case of Anomalus information from entry 26763 is used when you fight him at normal difficulty and entry 30529 is used when you fight him at heroic difficulty.

Another important case of that would be Sindragosa. Boss located in the Icecrown Citadel, you can fight her on 4 different difficulties (10man normal/heroic, 25man normal/heroic). Depending on the type of difficulty, she must have different statistics. So if you see her in 10man normal raid she will use information from entry 36853, in a 25man normal raid entry 38265 will be used and so on. 

If you look at database you will notice a very characteristic pattern which is summarized in table below:

| name             | entry             | difficulty_entry_1 | difficulty_entry_2 | difficulty_entry_3 |
|------------------|-------------------|----------------------|----------------------|----------------------|
| Normal Creature  | Different than 0  | 0                    | 0                    | 0                    |
| Dungeon Creature | Normal Dungeon    | Heroic Dungeon       | 0                    | 0                    |
| Raid Creature    | 10man Normal Raid | 25man Normal Raid    | 10man Heroic Raid    | 25man Heroic Raid    |

#### KillCredit1

If this is a kill credit template -- one that is a dummy template that is used when more than one creature can count as a kill in a quest, then this is a link to the first [entry](http://www.azerothcore.org/wiki/creature_template#entry) of the creature that could be killed to give quest credit.

#### KillCredit2

If this is a kill credit template -- one that is a dummy template that is used when more than one creature can count as a kill in a quest, then this is a link to the second [entry](http://www.azerothcore.org/wiki/creature_template#entry) of the creature that could be killed to give quest credit. If more than two creatures can be killed and count toward a single objective, an smart or C++ script will be required.

#### modelidx

A random graphical model that the client applies on this creature. Of course if you specify only one modelid and the rest will be equal to 0, model you have set won't be chosen randomly. This is a [creature_model_info.modelid](creature_model_info)

#### name

Base name of the creature.

#### subname

The subname of the creature that appears in &lt;&gt; below the creature's name.

#### IconName

Used to tell the player what kind of NPC this creature is.

| IconName           | description                                                                        |
|--------------------|------------------------------------------------------------------------------------|
| **Directions**     | Used for guards and teleporter NPC's.                                              |
| **Gunner**         | Indicator of a turret NPC/Player Controlled.                                       |
| **vehichleCursor** | Indicator that this is a PCV (Player Controlled Vehicle)                           |
| **Driver**         | Shows a steering wheel icon when mouse over.                                       |
| **Attack**         | Shows a sword icon indicating you can attack this target.                          |
| **Buy**            | Shows a brown bag icon usually if the NPC only sells things.                       |
| **Speak**          | Shows a chat bubble icon if this NPC has quest/gossip options.                     |
| **Pickup**         | Shows a hand grasping icon if this NPC can be picked up for quest/items.           |
| **Interact**       | Shows cog icon commonly used for quest/transport.                                  |
| **Trainer**        | Shows a book icon, identifying this NPC as a trainer.                              |
| **Taxi**           | Shows a boot with wings icon identifying this NPC as a taxi.                       |
| **Repair**         | Shows a anvil icon identifying that this NPC can repair.                           |
| **LootAll**        | Shows a multiple brown bag icon (same as holding shift before looting a creature). |
| **Quest**          | Unused or unknown (see entry 32870 "The Real Ronakada").                           |
| **PVP**            | Unused or Unknown (see entry 29387 "Arena Master: Dalaran Arena").                 |

**Attention!** This is not required to make the NPC function unless you are using scripts or gossip options. Names are case sensitive, If in doubt use an example above.

#### gossip_menu_id

The gossip ID of this creature. This field is obtained from sniff (update fields). If you can not sniff this value, and need to make one up, it must be &gt; 50000. This field is the link to [gossip_menu.entry](http://www.azerothcore.org/wiki/gossip_menu#entry).

#### minlevel

The minimum level of the creature if the creature has a level range.

#### maxlevel

The maximum level of the creature if the creature has a level range. When added to world, a level in chosen in the specified level range.

#### exp

The expansion table the creatures health value is taken from. Values are from 0 to 2. See creature_classlevelstats.

| exp | name                   |
|-----|------------------------|
| 0   | Classic                |
| 1   | The Burning Crusade    |
| 2   | Wrath of The Lich King |

#### faction

The faction of the creature. See [FactionTemplate](FactionTemplate). Just because more than one faction has the same name, the inter-faction relationships can be different.

Note: This field also controls the creature family assistance mechanic. Only creatures with the same faction will assist each other.

#### npcflag

A bitmask that represents what NPC flags the creature has. Each bit controls a different flag and to combine flags, you can add each flag that you want, in effect activating the respective bits.

| Flag     |            | Name               | Comment                                                                          |
|----------|------------|--------------------|----------------------------------------------------------------------------------|
| 1        | 0x00000001 | Gossip             | If creature has more gossip options, add this flag to bring up a menu.           |
| 2        | 0x00000002 | Quest Giver        | Any creature giving or taking quests needs to have this flag.                    |
| 16       | 0x00000010 | Trainer            | Allows the creature to have a trainer list to teach spells                       |
| 32       | 0x00000020 | Class Trainer      |                                                                                  |
| 64       | 0x00000040 | Profession Trainer |                                                                                  |
| 128      | 0x00000080 | Vendor             | Any creature selling items needs to have this flag.                              |
| 256      | 0x00000100 | Vendor Ammo        |                                                                                  |
| 512      | 0x00000200 | Vendor Food        |                                                                                  |
| 1024     | 0x00000400 | Vendor Poison      |                                                                                  |
| 2048     | 0x00000800 | Vendor Reagent     |                                                                                  |
| 4096     | 0x00001000 | Repairer           | Creatures with this flag can repair items.                                       |
| 8192     | 0x00002000 | Flight Master      | Any creature serving as flight master has this.                                  |
| 16384    | 0x00004000 | Spirit Healer      | Makes the creature invisible to alive characters and has the resurrect function. |
| 32768    | 0x00008000 | Spirit Guide       |                                                                                  |
| 65536    | 0x00010000 | Innkeeper          | Creatures with this flag can set hearthstone locations.                          |
| 131072   | 0x00020000 | Banker             | Creatures with this flag can show the bank                                       |
| 262144   | 0x00040000 | Petitioner         |                                                                                  |
| 524288   | 0x00080000 | Tabard Designer    | Allows the designing of guild tabards.                                           |
| 1048576  | 0x00100000 | Battlemaster       | Creatures with this flag port players to battlegrounds.                          |
| 2097152  | 0x00200000 | Auctioneer         | Allows creature to display auction list.                                         |
| 4194304  | 0x00400000 | Stable Master      | Has the option to stable pets for hunters.                                       |
| 8388608  | 0x00800000 | Guild Banker       |                                                                                  |
| 16777216 | 0x01000000 | Spellclick         | Needs data on npc_spellclick_spells table                                        |
| 67108864 | 0x04000000 | Mailbox            | NPC will act like a mailbox (opens mailbox with right-click)                     |

So if you want a NPC that is a quest giver(2), a vendor(128) and can repair(4096) you just add specific flags together: 2+128+4096=4226                                                                              

#### speed_walk

Controls how fast the creature can walk. For vehicles: increases fly speed.

#### speed_run

Controls how fast the creature can run. For vehicles: increases ground movement speed.

#### scale

If non-zero, this field defines the size of how the model of the creature appears ingame. If zero, it will use default model size taken from the DBC.

#### rank

The rank of the creature:

| Rank | Name       | Default Respawn Time Creature.spawntimesecs | Corpse Decay Time Worldserver.conf (Corpse.Decay) | Total Default Respawn spawntimesecs + Corpse.Decay |
|------|------------|---------------------------------------------|---------------------------------------------------|----------------------------------------------------|
| 0    | Normal     | 5 min                                       | 60 sec                                            | 6 min                                              |
| 1    | Elite      | 5 min                                       | 5 min                                             | 10 min                                             |
| 2    | Rare Elite | 5 min                                       | 5 min                                             | 10 min                                             |
| 3    | Boss       | 5 min                                       | 1 hour                                            | 1 hour, 5 min                                      |
| 4    | Rare       | 5 min                                       | 5 min                                             | 10 min                                             |

**Note 1:** An NPC's rank is mostly visual (which also requires your Cache to be cleared to see changes). Changing this value will not change its health, damage, or loot. However, it will change the respawn time of the creature.

**Note 2:** Respawn times can be modified in two other places: [Creature.spawntimesecs](http://www.azerothcore.org/wiki/creature#spawntimesecs) (only for that single GUID of the creature) and in the worldserver.conf file under the "Corpse.Decay" settings (for ALL creatures of the same rank). The default \`spawntimesecs\` for all spawned creatures is 300 seconds (5 minutes). For example, using the ".npc add" command to spawn a "Normal" NPC will give it a default respawn time of 6 minutes (spawntimesecs + Corpse.Decay time). Also, the creature must decay first before it can respawn. For this reason, the Corpse Decay Time of the creature is also it's minimum respawn time, since setting the creature's Creature.spawntimesecs = 0 will remove the Default Respawn Time. In the example above, setting our Normal NPC's spawntimesecs = 0 will mean the creature's respawn time decreases from 6 minutes to 60 seconds.

**Note 3:** If you want the creature to show a skull or "??" in the portrait (often with Bosses), set the [type_flags](http://www.azerothcore.org/wiki/creature_template#type_flags) to 4.

#### mindmg

This is the minimum melee damage. 
Modified by DamageModifier. mindmg = mindmg * DamageModifier.

#### maxdmg

This is the maximum melee damage.
Modified by DamageModifier. maxdmg = maxdmg * DamageModifier.

#### dmgschool

Creature's melee damage school.

| ID | Name                  |
|----|-----------------------|
| 0  | SPELL_SCHOOL_NORMAL |
| 1  | SPELL_SCHOOL_HOLY   |
| 2  | SPELL_SCHOOL_FIRE   |
| 3  | SPELL_SCHOOL_NATURE |
| 4  | SPELL_SCHOOL_FROST  |
| 5  | SPELL_SCHOOL_SHADOW |
| 6  | SPELL_SCHOOL_ARCANE |

#### attackpower

Melee attack power used for spells?

#### BaseAttackTime

This is the base time that determines how long a creature must wait between melee attacks. This time is in milliseconds.

#### RangeAttackTime

This is the base time that determines how long a creature must wait between ranged attacks. This time is in milliseconds.

#### unit_class

This is the creature's class, and it dictates levels of health and mana. Also note that health and mana will change according to [exp](http://www.azerothcore.org/wiki/creature_template#exp), [HealthModifier](http://www.azerothcore.org/wiki/creature_template#HealthModifier), and [ManaModifier](http://www.azerothcore.org/wiki/creature_template#ManaModifier). Not setting this value will report a minor warning in the "DB_Errors.log".

| Value | Name           | Power Shown                                            |
|-------|----------------|--------------------------------------------------------|
| 1     | CLASS_WARRIOR | health only (equal to rogue)                           |
| 2     | CLASS_PALADIN | health & mana (more health than mage but less mana)    |
| 4     | CLASS_ROGUE   | Health only (equal to warrior)                         |
| 8     | CLASS_MAGE    | health & mana (less health than paladin but more mana) |

#### unit_flags

Allows the manual application of unit flags to creatures. Again this is a bitmask field and to apply more than one flag, just add the different numbers. Some possible flags are:

| Flag       |            | Name                            | Comments                                                                                                   |
|------------|------------|---------------------------------|------------------------------------------------------------------------------------------------------------|
| 1          | 0x00000001 | UNIT_FLAG_SERVER_CONTROLLED     |                                                                                                            |
| 2          | 0x00000002 | UNIT_FLAG_NON_ATTACKABLE        |                                                                                                            |
| 4          | 0x00000004 | UNIT_FLAG_REMOVE_CLIENT_CONTROL |                                                                                                            |
| 8          | 0x00000008 | UNIT_FLAG_PVP_ATTACKABLE        | Allows to apply PvP rules to attackable state in addition to faction dependent state                       |
| 16         | 0x00000010 | UNIT_FLAG_RENAME                |                                                                                                            |
| 32         | 0x00000020 | UNIT_FLAG_PREPARATION           | Don't take reagents for spells with SPELL_ATTR_EX5_NO_REAGENT_WHILE_PREP                                   |
| 64         | 0x00000040 | UNIT_FLAG_UNK_6                 | not sure what it does, but it is needed to cast nontriggered spells in smart_scripts                       |
| 128        | 0x00000080 | UNIT_FLAG_NOT_ATTACKABLE_1      | UNIT_FLAG_PVP_ATTACKABLE|UNIT_FLAG_NOT_ATTACKABLE_1 is NON_PVP_ATTACKABLE                                  |
| 256        | 0x00000100 | UNIT_FLAG_IMMUNE_TO_PC          | disables combat/assistance with PlayerCharacters (PC)                                                      |
| 512        | 0x00000200 | UNIT_FLAG_IMMUNE_TO_NPC         | disables combat/assistance with NonPlayerCharacters (NPC)                                                  |
| 1024       | 0x00000400 | UNIT_FLAG_LOOTING               | Loot animation                                                                                             |
| 2048       | 0x00000800 | UNIT_FLAG_PET_IN_COMBAT         | In combat? 2.0.8                                                                                           |
| 4096       | 0x00001000 | UNIT_FLAG_PVP                   | Changed in 3.0.3                                                                                           |
| 8192       | 0x00002000 | UNIT_FLAG_SILENCED              | Can't cast spells                                                                                          |
| 16384      | 0x00004000 | UNIT_FLAG_CANNOT_SWIM           | 2.0.8                                                                                                      |
| 32768      | 0x00008000 | UNIT_FLAG_UNK_15                | Only Swim ('OnlySwim' from UnitFlags.cs in WPP)                                                            |
| 65536      | 0x00010000 | UNIT_FLAG_UNK_16                | No Attack 2 ('NoAttack2' from UnitFlags.cs in WPP)                                                         |
| 131072     | 0x00020000 | UNIT_FLAG_PACIFIED              | Creature will not attack                                                                                   |
| 262144     | 0x00040000 | UNIT_FLAG_STUNNED               | 3.0.3 ok                                                                                                   |
| 524288     | 0x00080000 | UNIT_FLAG_IN_COMBAT             | ('AffectingCombat' from UnitFlags.cs in WPP)                                                               |
| 1048576    | 0x00100000 | UNIT_FLAG_TAXI_FLIGHT           | Disable casting at client side spell not allowed by taxi flight (mounted?), probably used with 0x4 flag    |
| 2097152    | 0x00200000 | UNIT_FLAG_DISARMED              | 3.0.3, disable melee spells casting..., "Required melee weapon" added to melee spells tooltip.             |
| 4194304    | 0x00400000 | UNIT_FLAG_CONFUSED              | Confused.                                                                                                  |
| 8388608    | 0x00800000 | UNIT_FLAG_FLEEING               | ('Feared' from UnitFlags.cs in WPP)                                                                        |
| 16777216   | 0x01000000 | UNIT_FLAG_PLAYER_CONTROLLED     | Used in spell Eyes of the Beast for pet... let attack by controlled creature. Also used by Vehicles (PCV). |
| 33554432   | 0x02000000 | UNIT_FLAG_NOT_SELECTABLE        | Can't be selected by mouse or with /target {name} command.                                                 |
| 67108864   | 0x04000000 | UNIT_FLAG_SKINNABLE             | Skinnable                                                                                                  |
| 134217728  | 0x08000000 | UNIT_FLAG_MOUNT                 | The client seems to handle it perfectly. Also used when making custom mounts.                              |
| 268435456  | 0x10000000 | UNIT_FLAG_UNK_28                | (PreventKneelingWhenLooting from UnitFlags.cs in WPP)                                                      |
| 536870912  | 0x20000000 | UNIT_FLAG_UNK_29                | Used in Feign Death spell or NPC will play dead. (PreventEmotes)                                           |
| 1073741824 | 0x40000000 | UNIT_FLAG_SHEATHE               |                                                                                                            |
| 2147483648 | 0x80000000 | UNIT_FLAG_UNK_31                |                                                                                                            |

#### unit_flags2

Allows additional application of unit flags to creatures. Again, this is a bitmask field and to apply more than one flag, just add the different numbers. Some possible flags are:


| Flag   |            | Name                                  | Comments                                                                    |
|--------|------------|---------------------------------------|-----------------------------------------------------------------------------|
| 1      | 0x00000001 | UNIT_FLAG2_FEIGN_DEATH                |                                                                             |
| 2      | 0x00000002 | UNIT_FLAG2_UNK1                       | Hide unit model (show only player equip)                                    |
| 4      | 0x00000004 | UNIT_FLAG2_IGNORE_REPUTATION          |                                                                             |
| 8      | 0x00000008 | UNIT_FLAG2_COMPREHEND_LANG            |                                                                             |
| 16     | 0x00000010 | UNIT_FLAG2_MIRROR_IMAGE               |                                                                             |
| 32     | 0x00000020 | UNIT_FLAG2_INSTANTLY_APPEAR_MODEL     | Unit model instantly appears when summoned (does not fade in)               |
| 64     | 0x00000040 | UNIT_FLAG2_FORCE_MOVEMENT             |                                                                             |
| 128    | 0x00000080 | UNIT_FLAG2_DISARM_OFFHAND             |                                                                             |
| 256    | 0x00000100 | UNIT_FLAG2_DISABLE_PRED_STATS         | Player has disabled predicted stats (Used by raid frames)                   |
| 1024   | 0x00000400 | UNIT_FLAG2_DISARM_RANGED              | this does not disable ranged weapon display (maybe additional flag needed?) |
| 2048   | 0x00000800 | UNIT_FLAG2_REGENERATE_POWER           |                                                                             |
| 4096   | 0x00001000 | UNIT_FLAG2_RESTRICT_PARTY_INTERACTION | Restrict interaction to party or raid                                       |
| 8192   | 0x00002000 | UNIT_FLAG2_PREVENT_SPELL_CLICK        | Prevent spellclick                                                          |
| 16384  | 0x00004000 | UNIT_FLAG2_ALLOW_ENEMY_INTERACT       |                                                                             |
| 32768  | 0x00008000 | UNIT_FLAG2_DISABLE_TURN               |                                                                             |
| 65536  | 0x00010000 | UNIT_FLAG2_UNK2                       |                                                                             |
| 131072 | 0x00020000 | UNIT_FLAG2_PLAY_DEATH_ANIM            | Plays special death animation upon death                                    |
| 262144 | 0x00040000 | UNIT_FLAG2_ALLOW_CHEAT_SPELLS         | allows casting spells with AttributesEx7 & SPELL_ATTR7_IS_CHEAT_SPELL       |

#### dynamicflags

Flags that control visual appearance of the creature.

A few known flags and their use are:


| Flag |      | Name                                   | Comments                                                                                            |
|------|------|----------------------------------------|-----------------------------------------------------------------------------------------------------|
| 0    | 0x00 | UNIT_DYNFLAG_NONE                      |                                                                                                     |
| 1    | 0x01 | UNIT_DYNFLAG_LOOTABLE                  |                                                                                                     |
| 2    | 0x02 | UNIT_DYNFLAG_TRACK_UNIT                | Creature's location will be seen as a small dot in the minimap                                      |
| 4    | 0x04 | UNIT_DYNFLAG_TAPPED                    | Makes creatures name appear grey (Lua_UnitIsTapped)                                                 |
| 8    | 0x08 | UNIT_DYNFLAG_TAPPED_BY_PLAYER          | Lua_UnitIsTappedByPlayer usually used by PCVs (Player Controlled Vehicles)                          |
| 16   | 0x10 | UNIT_DYNFLAG_SPECIALINFO               |                                                                                                     |
| 32   | 0x20 | UNIT_DYNFLAG_DEAD                      | Makes the creature appear dead (this DOES NOT make the creature's name grey or not attack players). |
| 64   | 0x40 | UNIT_DYNFLAG_REFER_A_FRIEND            |                                                                                                     |
| 128  | 0x80 | UNIT_DYNFLAG_TAPPED_BY_ALL_THREAT_LIST | Lua_UnitIsTappedByAllThreatList                                                                     |

#### family

The family this creature belongs to.

| ID  | Family       | ID  | Family         |
|-----|--------------|-----|----------------|
| 1.  | Wolf         | 26. | Owl            |
| 2.  | Cat          | 27. | Wind Serpent   |
| 3.  | Spider       | 28. | Remote Control |
| 4.  | Bear         | 29. | Felguard       |
| 5.  | Boar         | 30. | Dragonhawk     |
| 6.  | Crocolisk    | 31. | Ravager        |
| 7.  | Carrion Bird | 32. | Warp Stalker   |
| 8.  | Crab         | 33. | Sporebat       |
| 9.  | Gorilla      | 34. | Nether Ray     |
| 11. | Raptor       | 35. | Serpent        |
| 12. | Tallstrider  | 37. | Moth           |
| 15. | Felhunter    | 38. | Chimaera       |
| 16. | Voidwalker   | 39. | Devilsaur      |
| 17. | Succubus     | 40. | Ghoul          |
| 19. | Doomguard    | 41. | Silithid       |
| 20. | Scorpid      | 42. | Worm           |
| 21. | Turtle       | 43. | Rhino          |
| 23. | Imp          | 44. | Wasp           |
| 24. | Bat          | 45. | Core Hound     |
| 25. | Hyena        | 46. | Spirit Beast   |

#### trainer_type

If the NPC is a trainer (has the trainer flag), then this field controls what kind of trainer it is. Both this field and the related field must be filled in for a trainer to work correctly.

| ID | Type                       | Related Field                                                                         | Comments            |
|----|----------------------------|---------------------------------------------------------------------------------------|---------------------|
| 0  | TRAINER_TYPE_CLASS       | [trainer_class](http://www.azerothcore.org/wiki/creature_template#trainer_class) | Trains class spells |
| 1  | TRAINER_TYPE_MOUNTS      | [trainer_race](http://www.azerothcore.org/wiki/creature_template#trainer_race)   | Trains riding skill |
| 2  | TRAINER_TYPE_TRADESKILLS | [trainer_spell](http://www.azerothcore.org/wiki/creature_template#trainer_spell) | Trains professions  |
| 3  | TRAINER_TYPE_PETS        | [trainer_class](http://www.azerothcore.org/wiki/creature_template#trainer_class) | Trains pet skills   |

#### trainer_spell

If the NPC is a trainer that teaches professions ([trainer_type](http://www.azerothcore.org/wiki/creature_template#trainer_type) = 2), then the player must already know the spell ID specified here to be able to talk to this NPC.

#### trainer_class

If the NPC is a class trainer or a pet trainer ([trainer_type](http://www.azerothcore.org/wiki/creature_template#trainer_type) = 0 or 3), then the player's class must be the same as the value specified here to talk to this trainer. For pet trainers, this value must be 3 (hunter). See [characters.class](http://archive.trinitycore.info/Characters_tc2#class "Characters tc2")

#### trainer_race

If the NPC is a mount trainer ([trainer_type](http://www.azerothcore.org/wiki/creature_template#trainer_type) = 1), then the player's race must be the same as the value specified here to talk to this trainer. See [characters.race](http://www.azerothcore.org/wiki/characters#race)

#### minrangedmg

This is the minimum ranged damage. 
Modified by DamageModifier. minrangedmg = minrangedmg * DamageModifier.

#### maxrangedmg

This is the maximum ranged damage.
Modified by DamageModifier. maxrangedmg = maxrangedmg * DamageModifier.

#### rangeattackpower

Range attack power used for spells?

#### type

The type of the creature.

| ID | Type           |
|----|----------------|
| 0  | None           |
| 1  | Beast          |
| 2  | Dragonkin      |
| 3  | Demon          |
| 4  | Elemental      |
| 5  | Giant          |
| 6  | Undead         |
| 7  | Humanoid       |
| 8  | Critter        |
| 9  | Mechanical     |
| 10 | Not specified  |
| 11 | Totem          |
| 12 | Non-Combat Pet |
| 13 | Gas Cloud      |

#### type_flags

This field can control whether a mob is minable or herbable or lootable by engineer. If it is either of those three, then the loot given when it is skinned/mined will be stored in the [skinning_loot_template](http://www.azerothcore.org/wiki/loot_template) table. It also controls, whether this mob can be tamed by a hunter. Other fields have no special meaning on the serverside. The entire field will be send to the client in SMSG_CREATURE_QUERY_RESPONSE

| Flag      |            | Name                                                 | Comments                                                                                   |
|-----------|------------|------------------------------------------------------|--------------------------------------------------------------------------------------------|
| 1         | 0x00000001 | CREATURE_TYPEFLAGS_TAMEABLE                          | Makes the mob tameable (must also be a beast and have family set)                          |
| 2         | 0x00000002 | CREATURE_TYPEFLAGS_GHOST                             | Creature are also visible for not alive player. Allow gossip interaction if npcflag allow? |
| 4         | 0x00000004 | CREATURE_TYPEFLAGS_BOSS                              | Changes creature's visible level to "??" in the creature's portrait - Immune to Knockback. |
| 8         | 0x00000008 | CREATURE_TYPEFLAGS_DO_NOT_PLAY_WOUND_PARRY_ANIMATION | Does not play wound animation on parry.                                                    |
| 16        | 0x00000010 | CREATURE_TYPEFLAGS_HIDE_FACTION_TOOLTIP              | Hides tooltip faction.                                                                     |
| 32        | 0x00000020 | CREATURE_TYPEFLAGS_UNK6                              |                                                                                            |
| 64        | 0x00000040 | CREATURE_TYPEFLAGS_SPELL_ATTACKABLE                  | Spell attackable.                                                                          |
| 128       | 0x00000080 | CREATURE_TYPEFLAGS_DEAD_INTERACT                     | Player can interact with the creature if its dead (not player dead)                        |
| 256       | 0x00000100 | CREATURE_TYPEFLAGS_HERBLOOT                          | Makes mob herbable                                                                         |
| 512       | 0x00000200 | CREATURE_TYPEFLAGS_MININGLOOT                        | Makes mob minable                                                                          |
| 1024      | 0x00000400 | CREATURE_TYPEFLAGS_DONT_LOG_DEATH                    | Does not combatlog death.                                                                  |
| 2048      | 0x00000800 | CREATURE_TYPEFLAGS_MOUNTED_COMBAT                    | Creature can remain mounted when entering combat                                           |
| 4096      | 0x00001000 | CREATURE_TYPEFLAGS_AID_PLAYERS                       | Can aid any player in combat if in range?                                                  |
| 8192      | 0x00002000 | CREATURE_TYPEFLAGS_IS_PET_BAR_USED                   | Is using pet bar.                                                                          |
| 16384     | 0x00004000 | CREATURE_TYPEFLAGS_MASK_UID                          |                                                                                            |
| 32768     | 0x00008000 | CREATURE_TYPEFLAGS_ENGINEERLOOT                      | Makes mob lootable by engineer                                                             |
| 65536     | 0x00010000 | CREATURE_TYPE_FLAG_EXOTIC_PET                        | Tamable as an exotic pet. Normal tamable flag must also be set.                            |
| 131072    | 0x00020000 | CREATURE_TYPEFLAGS_USE_DEFAULT_COLLISION_BOX         | Collision related. (always using default collision box?)                                   |
| 262144    | 0x00040000 | CREATURE_TYPEFLAGS_IS_SIEGE_WEAPON                   | Is siege weapon.                                                                           |
| 524288    | 0x00080000 | CREATURE_TYPEFLAGS_PROJECTILE_COLLISION              | Projectiles can collide with this creature - interacts with TARGET_DEST_TRAJ               |
| 1048576   | 0x00100000 | CREATURE_TYPEFLAGS_HIDE_NAMEPLATE                    | Hides nameplate.                                                                           |
| 2097152   | 0x00200000 | CREATURE_TYPEFLAGS_DO_NOT_PLAY_MOUNTED_ANIMATIONS    | Does not play mounted animations.                                                          |
| 4194304   | 0x00400000 | CREATURE_TYPEFLAGS_IS_LINK_ALL                       |                                                                                            |
| 8388608   | 0x00800000 | CREATURE_TYPEFLAGS_INTERACT_ONLY_WITH_CREATOR        | Can only interact with its creator.                                                        |
| 134217728 | 0x08000000 | CREATURE_TYPEFLAGS_FORCE_GOSSIP                      | Allows the creature to display a single gossip option.                                     |

#### lootid

The ID of the loot template ID that this creature should use to generate loots. See [creature_loot_template.entry](http://www.azerothcore.org/wiki/loot_template#loot_template-Entry)

#### pickpocketloot

The ID of the pickpocketing loot template that this creature should use to generate pickpocketing loots. See [pickpocketing_loot_template.entry](http://www.azerothcore.org/wiki/loot_template#loot_template-Entry)

#### skinloot

The ID of the skinning loot template that this creature should use to generate skinning loots. See [skinning_loot_template.entry](http://www.azerothcore.org/wiki/loot_template#loot_template-Entry)

**resistancex**

| resistancex | school |
|-------------|--------|
| 1           | Holy   |
| 2           | Fire   |
| 3           | Nature |
| 4           | Frost  |
| 5           | Shadow |
| 6           | Arcane |

#### spellx

Spell ID that can be used for Mind Control of this creature. 
For vehicle creatures: spell on action bar with position X.

#### PetSpellDataId

ID, found in CreatureSpellData.dbc, that displays what spells the pet has in the client.

#### VehicleId

Entry of vehicle if creature is/has a vehicle entry. This field determines how the player appears on the vehicle, how the vehicle moves, and whether or not the vehicle action bar is shown. For example, a vehicleID of 292 will make the player invisible, prevent the vehicle from strafing left/right (but will allow forwards/backwards), and will show the vehicle action bar spells (which are defined in [spell1-8](http://trinitycore.atlassian.net#spell)). An npc_spellclick_spells entry must be made for this creature entry in order for this to work.

#### mingold

Minimum money that the creature drops when killed, in copper.

#### maxgold

Maximum money that the creature drops when killed, in copper.

#### AIName

This field is overridden by ScriptName field if both are set.

| Name            | Description                                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------------------|
| NullCreatureAI  | Empty AI, creature does nothing; cannot be charmed.                                                                 |
| TriggerAI       | Same as "NullCreatureAI", except that the creature casts the spell from field spell1 when summoned.                 |
| AggressorAI     | Creature attacks when entering aggro radius; uses only melee attacks.                                               |
| ReactorAI       | Creature attacks only if aggroed; uses only melee attacks.                                                          |
| PassiveAI       | Creature behaves passive, cannot attack.                                                                            |
| CritterAI       | Critter which flees if attacked.                                                                                    |
| GuardAI         | Creature is a zone guard.                                                                                           |
| PetAI           | Creature is a pet.                                                                                                  |
| TotemAI         | Creature casts spell from field spell1; does not move.                                                              |
| CombatAI        | Creature attacks as soon as something is in aggro range; uses also spells.                                          |
| ArcherAI        | Creature casts spell from field spell1; chases the victim.                                                          |
| TurretAI        | Creature attacks using spell from field spell1; does not move.                                                      |
| VehicleAI       | Creature acts as player vehicle.                                                                                    |
| SmartAI         | Creature uses the "[smart_scripts](smart_scripts.md)" table to specify it's behaviour. |

#### MovementType

The creature's default movement type.

| ID | Type                                        |
|----|---------------------------------------------|
| 0  | Idle; stay in one place                     |
| 1  | Random movement inside the spawndist radius |
| 2  | Waypoint movement                           |

#### InhabitType

Controls where the creature can move and attack.

| Bitmask | Type   |
|---------|--------|
| 1       | Ground |
| 2       | Water  |
| 4       | Flying |
| 8       | Rooted |

(This is a bitmask. You can add values together: 1+4=5 would make the creature walk on ground and fly.)

**Note:** If your vehicle is a flying vehicle then your accessory **MUST** have it's [InhabitType](http://www.azerothcore.org/wiki/creature_template#InhabitType) set to (4 - Flying). This being if you set it for both ground and flying it will spawn on the ground if the vehicle is initially spawned on the ground.

#### HoverHeight

Distance above the ground that the creature will hover if it has MOVEMENTFLAG_DISABLE_GRAVITY enabled. Value taken from sniffs.

#### HealthModifier

Used to modify the base Level/Class health of a creature. This field comes from WDB.

#### ManaModifier

Used to modify the base Level/Class mana of a creature. This field comes from WDB.

#### ArmorModifier

Used to modify the base Level/Class armor of a creature.

#### DamageModifier

TODO!

#### ExperienceModifier

TODO!

#### RacialLeader

A flag with two possible values: '1' or '0' indicating whether the creature is a racial leader or not. Killing racial leaders grants 100 honor.

| entry | name                     |
|-------|--------------------------|
| 2784  | King Magni Bronzebeard   |
| 3057  | Cairne Bloodhoof         |
| 4949  | Thrall                   |
| 7999  | Tyrande Whisperwind      |
| 10181 | Lady Sylvanas Windrunner |
| 16802 | Lor'themar Theron        |
| 17468 | Prophet Velen            |
| 29611 | King Varian Wrynn        |
| 36648 | Baine Bloodhoof (Leader) |
| 37764 | Lor'themar Theron        |

#### movementId

We have no idea what this field does. It is passed directly to the client.

#### RegenHealth

Boolean '1' or '0' controlling whether the creature should regenerate it's health or not.

#### mechanic_immune_mask

This makes the creature immune to specific spell natures. See Spell.dbc at row effect_X_mechanic_id.

Uses references from SpellMechanic.dbc.

| Flag       |            | Type                     | Comment                                                  |
|------------|------------|--------------------------|----------------------------------------------------------|
| 1          | 0x00000001 | MECHANIC_CHARM           |                                                          |
| 2          | 0x00000002 | MECHANIC_DISORIENTED     |                                                          |
| 4          | 0x00000004 | MECHANIC_DISARM          |                                                          |
| 8          | 0x00000008 | MECHANIC_DISTRACT        |                                                          |
| 16         | 0x00000010 | MECHANIC_FEAR            |                                                          |
| 32         | 0x00000020 | MECHANIC_GRIP            | Death Grip and similar effects                           |
| 64         | 0x00000040 | MECHANIC_ROOT            |                                                          |
| 128        | 0x00000080 | MECHANIC_SLOW_ATTACK     |                                                          |
| 256        | 0x00000100 | MECHANIC_SILENCE         |                                                          |
| 512        | 0x00000200 | MECHANIC_SLEEP           |                                                          |
| 1024       | 0x00000400 | MECHANIC_SNARE           |                                                          |
| 2048       | 0x00000800 | MECHANIC_STUN            |                                                          |
| 4096       | 0x00001000 | MECHANIC_FREEZE          |                                                          |
| 8192       | 0x00002000 | MECHANIC_KNOCKOUT        | Incapacitate effects such as Repetance (Paladin)         |
| 16384      | 0x00004000 | MECHANIC_BLEED           |                                                          |
| 32768      | 0x00008000 | MECHANIC_BANDAGE         | Healing etc.                                             |
| 65536      | 0x00010000 | MECHANIC_POLYMORPH       |                                                          |
| 131072     | 0x00020000 | MECHANIC_BANISH          |                                                          |
| 262144     | 0x00040000 | MECHANIC_SHIELD          |                                                          |
| 524288     | 0x00080000 | MECHANIC_SHACKLE         | Shackle Undead only                                      |
| 1048576    | 0x00100000 | MECHANIC_MOUNT           | Any effect that summons a mount                          |
| 2097152    | 0x00200000 | MECHANIC_INFECTED        | Frost Fever, Blood Plague etc.                           |
| 4194304    | 0x00400000 | MECHANIC_TURN            | e.g. Turn Evil                                           |
| 8388608    | 0x00800000 | MECHANIC_HORROR          | e.g. Death Coil (Warlock)                                |
| 16777216   | 0x01000000 | MECHANIC_INVULNERABILITY | Forbearance, Nether Protection, Diplomatic Immunity only |
| 33554432   | 0x02000000 | MECHANIC_INTERRUPT       |                                                          |
| 67108864   | 0x04000000 | MECHANIC_DAZE            |                                                          |
| 134217728  | 0x08000000 | MECHANIC_DISCOVERY       | Any Create Item effect                                   |
| 268435456  | 0x10000000 | MECHANIC_IMMUNE_SHIELD   | Divine Shield, Ice Block, Hand of Protection...          |
| 536870912  | 0x20000000 | MECHANIC_SAPPED          |                                                          |
| 1073741824 | 0x40000000 | MECHANIC_ENRAGED         |                                                          |

To combine immunities just add values. Immune to everything corresponds to the value 2147483647 (0x3FFF FFFF).

#### flags_extra

These flags control certain creature specific attributes. Flags can be added together to apply more than one.

**Example:** 32+64=96

| Flag       | Type                                     |            |                                                                                                                                        |
|------------|------------------------------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| 1          | CREATURE_FLAG_EXTRA_INSTANCE_BIND        | 0x00000001 | creature kill binds instance to killer and killer's group                                                                              |
| 2          | CREATURE_FLAG_EXTRA_CIVILIAN             | 0x00000002 | creature does not aggro (ignore faction/reputation hostility)                                                                          |
| 4          | CREATURE_FLAG_EXTRA_NO_PARRY             | 0x00000004 | creature does not parry                                                                                                                |
| 8          | CREATURE_FLAG_EXTRA_NO_PARRY_HASTEN      | 0x00000008 | creature does not counter-attack at parry                                                                                              |
| 16         | CREATURE_FLAG_EXTRA_NO_BLOCK             | 0x00000010 | creature does not block                                                                                                                |
| 32         | CREATURE_FLAG_EXTRA_NO_CRUSH             | 0x00000020 | creature does not do crush-attacks                                                                                                     |
| 64         | CREATURE_FLAG_EXTRA_NO_XP_AT_KILL        | 0x00000040 | creature kill does not give XP                                                                                                         |
| 128        | CREATURE_FLAG_EXTRA_TRIGGER              | 0x00000080 | creature is trigger-NPC (invisible to players only)                                                                                    |
| 256        | CREATURE_FLAG_EXTRA_NO_TAUNT             | 0x00000100 | creature is immune to taunt-auras and "attack me"-effects                                                                              |
| 512        | CREATURE_FLAG_EXTRA_NO_MOVE_FLAGS_UPDATE | 0x00000200 | creature won't update movement flags                                                                                                   |
| 1024       | CREATURE_FLAG_EXTRA_GHOST_VISIBILITY     | 0x00000400 | creature will be only visible for dead players                                                                                         |
| 2048       | CREATURE_FLAG_EXTRA_USE_OFFHAND_ATTACK   | 0x00000800 | creature will use offhand attacks                                                                                                      |
| 4096       | CREATURE_FLAG_EXTRA_NO_SELL_VENDOR       | 0x00001000 | players can't sell items to this vendor                                                                                                |
| 16384      | CREATURE_FLAG_EXTRA_WORLDEVENT           | 0x00004000 | custom flag for world events (left room for merging)                                                                                   |
| 32768      | CREATURE_FLAG_EXTRA_GUARD                | 0x00008000 | creature is a guard (Will ignore feign death and vanish)                                                                               |
| 131072     | CREATURE_FLAG_EXTRA_NO_CRIT              | 0x00020000 | creature does not do critical strikes                                                                                                  |
| 262144     | CREATURE_FLAG_EXTRA_NO_SKILLGAIN         | 0x00040000 | creature won't increase weapon skills                                                                                                  |
| 524288     | CREATURE_FLAG_EXTRA_TAUNT_DIMINISH       | 0x00080000 | creature taunt is subject to diminishing returns                                                                                       |
| 1048576    | CREATURE_FLAG_EXTRA_ALL_DIMINISH         | 0x00100000 | Creature is subject to all diminishing returns                                                                                         |
| 2097152    | CREATURE_FLAG_EXTRA_NO_PLAYER_DAMAGE_REQ | 0x00200000 | NPCs can help with killing this creature and player will still be credited if he tags the creature                                     |
| 268435456  | CREATURE_FLAG_EXTRA_DUNGEON_BOSS         | 0x10000000 | Creature is a dungeon boss. This flag is generically set by core during runtime. Setting this in database will give you startup error. |
| 536870912  | CREATURE_FLAG_EXTRA_IGNORE_PATHFINDING   | 0x20000000 | Creature will ignore pathfinding. This is like disabling Mmaps, only for one creature.                                                 |
| 1073741824 | CREATURE_FLAG_EXTRA_IMMUNITY_KNOCKBACK   | 0x40000000 | creature will immune all knockback effects                                                                                             |

#### ScriptName

The name of the script that this creature uses, if any. This ties a script from a scripting engine to this creature.

#### VerifiedBuild

This field was used to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific [client build](http://archive.trinitycore.info/DB:Auth:realmlist#gamebuild "DB:Auth:realmlist") and manually edited later for some special necessity.
