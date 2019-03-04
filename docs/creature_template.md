# creature\_template

This table contains the description of creatures. Each spawned creature is an instance of a template present in this table, this means every creature MUST be defined in this table.

| Field                                                                | Type                  | Null | Key | Default | Extra | Comment                              |
|----------------------------------------------------------------------|-----------------------|------|-----|---------|-------|--------------------------------------|
| [entry](#creature_template-entry)                                 | mediumint(8) unsigned | NO   | PRI | 0       |       |                                      |
| [difficulty\_entry\_1](#creature_template-difficulty_entry)       | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [difficulty\_entry\_2](#creature_template-difficulty_entry)       | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [difficulty\_entry\_3](#creature_template-difficulty_entry)       | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [KillCredit1](#creature_template-KillCredit1)                     | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [KillCredit2](#creature_template-KillCredit2)                     | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [modelid1](#creature_template-modelid)                            | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [modelid2](#creature_template-modelid)                            | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [modelid3](#creature_template-modelid)                            | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [modelid4](#creature_template-modelid)                            | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [name](#creature_template-name)                                   | char(100)             | NO   | MUL | 0       |       |                                      |
| [subname](#creature_template-subname)                             | char(100)             | YES  |     | (NULL)  |       |                                      |
| [IconName](#creature_template-IconName)                           | char(100)             | YES  |     | (NULL)  |       |                                      |
| [gossip\_menu\_id](#creature_template-gossip_menu_id)             | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [minlevel](#creature_template-minlevel)                           | tinyint(3) unsigned   | NO   |     | 1       |       |                                      |
| [maxlevel](#creature_template-maxlevel)                           | tinyint(3) unsigned   | NO   |     | 1       |       |                                      |
| [exp](#creature_template-exp)                                     | smallint(6)           | NO   |     | 0       |       |                                      |
| [faction](#creature_template-faction)                             | smallint(5) unsigned  | NO   |     | 0       |       |                                      |
| [npcflag](#creature_template-npcflag)                             | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [speed\_walk](#creature_template-speed_walk)                      | float                 | NO   |     | 1       |       | Result of 2.5/2.5, most common value |
| [speed\_run](#creature_template-speed_run)                        | float                 | NO   |     | 1.14286 |       | Result of 8.0/7.0, most common value |
| [scale](#creature_template-scale)                                 | float                 | NO   |     | 1       |       |                                      |
| [rank](#creature_template-rank)                                   | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [dmgschool](#creature_template-dmgschool)                         | tinyint(4)            | NO   |     | 0       |       |                                      |
| [BaseAttackTime](#creature_template-BaseAttackTime)               | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [RangeAttackTime](#creature_template-RangeAttackTime)             | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [BaseVariance](#creature_template-BaseVariance)                   | float                 | NO   |     | 1       |       |                                      |
| [RangeVariance](#creature_template-RangeVariance)                 | float                 | NO   |     | 1       |       |                                      |
| [unit\_class](#creature_template-unit_class)                      | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [unit\_flags](#creature_template-unit_flags)                      | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [unit\_flags2](#creature_template-unit_flags2)                    | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [dynamicflags](#creature_template-dynamicflags)                   | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [family](#creature_template-family)                               | tinyint(4)            | NO   |     | 0       |       |                                      |
| [trainer\_type](#creature_template-trainer_type)                  | tinyint(4)            | NO   |     | 0       |       |                                      |
| [trainer\_spell](#creature_template-trainer_spell)                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [trainer\_class](#creature_template-trainer_class)                | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [trainer\_race](#creature_template-trainer_race)                  | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [type](#creature_template-type)                                   | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [type\_flags](#creature_template-type_flags)                      | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [lootid](#creature_template-lootid)                               | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [pickpocketloot](#creature_template-pickpocketloot)               | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [skinloot](#creature_template-skinl)                              | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [resistance1](#creature_template-resistance)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance2](#creature_template-resistance)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance3](#creature_template-resistance)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance4](#creature_template-resistance)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance5](#creature_template-resistance)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [resistance6](#creature_template-resistance)                      | smallint(6)           | NO   |     | 0       |       |                                      |
| [spell1](#creature_template-spell)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell2](#creature_template-spell)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell3](#creature_template-spell)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell4](#creature_template-spell)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell5](#creature_template-spell)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell6](#creature_template-spell)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell7](#creature_template-spell)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [spell8](#creature_template-spell)                                | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [PetSpellDataId](#creature_template-PetSpellDataId)               | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [VehicleId](#creature_template-VehicleId)                         | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [mingold](#creature_template-mingold)                             | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [maxgold](#creature_template-maxgold)                             | mediumint(8) unsigned | NO   |     | 0       |       |                                      |
| [AIName](#creature_template-AIName)                               | char(64)              | NO   |     |         |       |                                      |
| [MovementType](#creature_template-MovementType)                   | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [InhabitType](#creature_template-InhabitType)                     | tinyint(3) unsigned   | NO   |     | 3       |       |                                      |
| [HoverHeight](#creature_template-HoverHeight)                     | float                 | NO   |     | 1       |       |                                      |
| [HealthModifier](#creature_template-HealthModifier)               | float                 | NO   |     | 1       |       |                                      |
| [ManaModifier](#creature_template-ManaModifier)                   | float                 | NO   |     | 1       |       |                                      |
| [ArmorModifier](#creature_template-ArmorModifier)                 | float                 | NO   |     | 1       |       |                                      |
| [DamageModifier](#creature_template-DamageModifier)               | float                 | NO   |     | 1       |       |                                      |
| [ExperienceModifier](#creature_template-ExperienceModifier)       | float                 | NO   |     | 1       |       |                                      |
| [RacialLeader](#creature_template-RacialLeader)                   | tinyint(3) unsigned   | NO   |     | 0       |       |                                      |
| [movementId](#creature_template-movementId)                       | int(11) unsigned      | NO   |     | 0       |       |                                      |
| [RegenHealth](#creature_template-RegenHealth)                     | tinyint(3) unsigned   | NO   |     | 1       |       |                                      |
| [mechanic\_immune\_mask](#creature_template-mechanic_immune_mask) | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [flags\_extra](#creature_template-flags_extra)                    | int(10) unsigned      | NO   |     | 0       |       |                                      |
| [ScriptName](#creature_template-ScriptName)                       | char(64)              | NO   |     |         |       |                                      |
| [VerifiedBuild](#creature_template-VerifiedBuild)                 | smallint(5)           | YES  |     | 0       |       |                                      |

**
**

**Description of the fields**

#### entry

Creature's unique id.

#### difficulty\_entry\_X

| name                                                      | entry | difficulty\_entry\_1 | difficulty\_entry\_2 | difficulty\_entry\_3 |
|-----------------------------------------------------------|-------|----------------------|----------------------|----------------------|
| [Anomalus](http://www.wowhead.com/npc=26763/anomalus)     | 26763 | 30529                | 0                    | 0                    |
| [Sindragosa](http://www.wowhead.com/npc=36853/sindragosa) | 36853 | 38265                | 38266                | 38267                |

Anomalus is a boss located in The Nexus. You can fight him on two types of difficulties (normal dungeon and heroic dungeon). It's obvious that depending on the type of difficulty bosses have different statistics like health and damage. In case of Anomalus information from entry 26763 is used when you fight him at normal difficulty and entry 30529 is used when you fight him at heroic difficulty.

Another important case of that would be Sindragosa. Boss located in the Icecrown Citadel, you can fight her on 4 different difficulties (10man normal/heroic, 25man normal/heroic). Depending on the type of difficulty, she must have different statistics. So if you see her in 10man normal raid she will use information from entry 36853, in a 25man normal raid entry 38265 will be used and so on. 

If you look at database you will notice a very characteristic pattern which is summarized in table below:

| name             | entry             | difficulty\_entry\_1 | difficulty\_entry\_2 | difficulty\_entry\_3 |
|------------------|-------------------|----------------------|----------------------|----------------------|
| Normal Creature  | Different than 0  | 0                    | 0                    | 0                    |
| Dungeon Creature | Normal Dungeon    | Heroic Dungeon       | 0                    | 0                    |
| Raid Creature    | 10man Normal Raid | 25man Normal Raid    | 10man Heroic Raid    | 25man Heroic Raid    |

**KillCredit1**

If this is a kill credit template -- one that is a dummy template that is used when more than one creature can count as a kill in a quest, then this is a link to the first [entry](http://archive.trinitycore.info/Creature_template_tc2#entry) of the creature that could be killed to give quest credit.

#### KillCredit2

If this is a kill credit template -- one that is a dummy template that is used when more than one creature can count as a kill in a quest, then this is a link to the second [entry](http://archive.trinitycore.info/Creature_template_tc2#entry) of the creature that could be killed to give quest credit. If more than two creatures can be killed and count toward a single objective, an smart or C++ script will be required.

#### modelidX

A random graphical model that the client applies on this creature. Of course if you specify only one modelid and the rest will be equal to 0, model you have set won't be chosen randomly. This is a [creature\_model\_info.modelid](creature_model_info)

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
| **Quest**          |  Unused or unknown (see entry 32870 "The Real Ronakada").                          |
| **PVP**            | Unused or Unknown (see entry 29387 "Arena Master: Dalaran Arena").                 |

**Attention!** This is not required to make the NPC function unless you are using scripts or gossip options. Names are case sensitive, If in doubt use an example above.

#### gossip\_menu\_id

The gossip ID of this creature. This field is obtained from sniff (update fields). If you can not sniff this value, and need to make one up, it must be &gt; 50000. This field is the link to [gossip\_menu.entry](Gossip_menu#gossip_menu-entry).

#### minlevel

The minimum level of the creature if the creature has a level range.

#### maxlevel

The maximum level of the creature if the creature has a level range. When added to world, a level in chosen in the specified level range.

#### exp

The expansion table the creatures health value is taken from. Values are from 0 to 2. See creature\_classlevelstats.

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

# **npcflag**

Decimal
Hexadecimal
Name
Comment
1
0x0000 0001
Gossip
If creature has more gossip options, add this flag to bring up a menu.
2
0x0000 0002
Quest Giver
Any creature giving or taking quests needs to have this flag.
16
0x0000 0010
Trainer
Allows the creature to have a trainer list to teach spells
32
0x0000 0020
Class Trainer
64
0x0000 0040
Profession Trainer
128
0x0000 0080
Vendor
Any creature selling items needs to have this flag.
256
0x0000 0100
Vendor Ammo
512
0x0000 0200
Vendor Food
1024
0x0000 0400
Vendor Poison
2048
0x0000 0800
Vendor Reagent
4096
0x0000 1000
Repairer
Creatures with this flag can repair items.
8192
0x0000 2000
Flight Master
Any creature serving as flight master has this.
16384
0x0000 4000
Spirit Healer
Makes the creature invisible to alive characters and has the resurrect function.
32768
0x0000 8000
Spirit Guide
65536
0x0001 0000
Innkeeper
Creatures with this flag can set hearthstone locations.
131072
0x0002 0000
Banker
Creatures with this flag can show the bank
262144
0x0004 0000
Petitioner
524288
0x0008 0000
Tabard Designer
Allows the designing of guild tabards.
1048576
0x0010 0000
Battlemaster
Creatures with this flag port players to battlegrounds.
2097152
0x0020 0000
Auctioneer
Allows creature to display auction list.
4194304
0x0040 0000
Stable Master
Has the option to stable pets for hunters.
8388608
0x0080 0000
Guild Banker
16777216
0x0100 0000
Spellclick
Needs data on npc\_spellclick\_spells table
67108864
0x0400 0000
Mailbox
NPC will act like a mailbox (opens mailbox with right-click)

So if you want a NPC that is a quest giver(2), a vendor(128) and can repair(4096) you just add specific flags together: 2+128+4096=4226                                                                                                                                                                                                                     

#### speed\_walk

Controls how fast the creature can walk. For vehicles: increases fly speed.

#### speed\_run

Controls how fast the creature can run. For vehicles: increases ground movement speed.

#### scale

If non-zero, this field defines the size of how the model of the creature appears ingame. If zero, it will use default model size taken from the DBC.

#### rank

The rank of the creature:

| Rank | Name       | Default Respawn Time                                                                                
   [Creature.spawntimesecs](http://archive.trinitycore.info/Creature_tc2#spawntimesecs "Creature tc2")  | Corpse Decay Time               
    Worldserver.conf (Corpse.Decay)  | Total Default Respawn                                                                                     
     [spawntimesecs](http://archive.trinitycore.info/Creature_tc2#spawntimesecs "Creature tc2") + Corpse.Decay  |
|------|------------|-----------------------------------------------------------------------------------------------------|---------------------------------|-----------------------------------------------------------------------------------------------------------|
| 0    | Normal     | 5 min                                                                                               | 60 sec                          | 6 min                                                                                                     |
| 1    | Elite      | 5 min                                                                                               | 5 min                           | 10 min                                                                                                    |
| 2    | Rare Elite | 5 min                                                                                               | 5 min                           | 10 min                                                                                                    |
| 3    | Boss       | 5 min                                                                                               | 1 hour                          | 1 hour, 5 min                                                                                             |
| 4    | Rare       | 5 min                                                                                               | 5 min                           | 10 min                                                                                                    |

**Note 1:** An NPC's rank is mostly visual (which also requires your Cache to be cleared to see changes). Changing this value will not change its health, damage, or loot. However, it will change the respawn time of the creature.

**Note 2:** Respawn times can be modified in two other places: [Creature.spawntimesecs](http://archive.trinitycore.info/Creature_tc2#spawntimesecs "Creature tc2") (only for that single GUID of the creature) and in the worldserver.conf file under the "Corpse.Decay" settings (for ALL creatures of the same rank). The default \`spawntimesecs\` for all spawned creatures is 300 seconds (5 minutes). For example, using the ".npc add" command to spawn a "Normal" NPC will give it a default respawn time of 6 minutes (spawntimesecs + Corpse.Decay time). Also, the creature must decay first before it can respawn. For this reason, the Corpse Decay Time of the creature is also it's minimum respawn time, since setting the creature's Creature.spawntimesecs = 0 will remove the Default Respawn Time. In the example above, setting our Normal NPC's spawntimesecs = 0 will mean the creature's respawn time decreases from 6 minutes to 60 seconds.

**Note 3:** If you want the creature to show a skull or "??" in the portrait (often with Bosses), set the [type\_flags](http://archive.trinitycore.info/Creature_template_tc2#type_flags) to 4.

#### dmgschool

Creature's melee damage school.

| ID  | Name                  |
|-----|-----------------------|
| 0   | SPELL\_SCHOOL\_NORMAL |
| 1   | SPELL\_SCHOOL\_HOLY   |
| 2   | SPELL\_SCHOOL\_FIRE   |
| 3   | SPELL\_SCHOOL\_NATURE |
| 4   | SPELL\_SCHOOL\_FROST  |
| 5   | SPELL\_SCHOOL\_SHADOW |
| 6   | SPELL\_SCHOOL\_ARCANE |

#### BaseAttackTime

This is the base time that determines how long a creature must wait between melee attacks. This time is in milliseconds.

#### RangeAttackTime

This is the base time that determines how long a creature must wait between ranged attacks. This time is in milliseconds.

#### unit\_class

This is the creature's class, and it dictates levels of health and mana. Also note that health and mana will change according to [exp](http://archive.trinitycore.info/Creature_template_tc2#exp "Creature template tc2"), [health\_mod](http://archive.trinitycore.info/Creature_template_tc2#Health_mod "Creature template tc2"), and [mana\_mod](http://archive.trinitycore.info/Creature_template_tc2#Mana_mod "Creature template tc2"). Not setting this value will report a minor warning in the "DB\_Errors.log".

| Value | Name           | Power Shown                                            |
|-------|----------------|--------------------------------------------------------|
| 1     | CLASS\_WARRIOR | health only (equal to rogue)                           |
| 2     | CLASS\_PALADIN | health & mana (more health than mage but less mana)    |
| 4     | CLASS\_ROGUE   | Health only (equal to warrior)                         |
| 8     | CLASS\_MAGE    | health & mana (less health than paladin but more mana) |

#### unit\_flags

Allows the manual application of unit flags to creatures. Again this is a bitmask field and to apply more than one flag, just add the different numbers. Some possible flags are:

# unit\_flags

Decimal
Hexadecimal
Name
Comments
1
0x0000 0001
UNIT\_FLAG\_SERVER\_CONTROLLED
2
0x0000 0002
UNIT\_FLAG\_NON\_ATTACKABLE
4
0x0000 0004
UNIT\_FLAG\_REMOVE\_CLIENT\_CONTROL
8
0x0000 0008
UNIT\_FLAG\_PVP\_ATTACKABLE
Allows to apply PvP rules to attackable state in addition to faction dependent state
16
0x0000 0010
UNIT\_FLAG\_RENAME
32
0x0000 0020
UNIT\_FLAG\_PREPARATION
Don't take reagents for spells with SPELL\_ATTR\_EX5\_NO\_REAGENT\_WHILE\_PREP
64
0x0000 0040
UNIT\_FLAG\_UNK\_6
not sure what it does, but it is needed to cast nontriggered spells in smart\_scripts
128
0x0000 0080
UNIT\_FLAG\_NOT\_ATTACKABLE\_1
UNIT\_FLAG\_PVP\_ATTACKABLE| UNIT\_FLAG\_NOT\_ATTACKABLE\_1 is NON\_PVP\_ATTACKABLE
256
0x0000 0100
UNIT\_FLAG\_IMMUNE\_TO\_PC
disables combat/assistance with PlayerCharacters (PC)
512
0x0000 0200
UNIT\_FLAG\_IMMUNE\_TO\_NPC
disables combat/assistance with NonPlayerCharacters (NPC)
1024
0x0000 0400
UNIT\_FLAG\_LOOTING
Loot animation
2048
0x0000 0800
UNIT\_FLAG\_PET\_IN\_COMBAT
In combat? 2.0.8
4096
0x0000 1000
UNIT\_FLAG\_PVP
Changed in 3.0.3
8192
0x0000 2000
UNIT\_FLAG\_SILENCED
Can't cast spells
16384
0x0000 4000
UNIT\_FLAG\_CANNOT\_SWIM
2.0.8
32768
0x0000 8000
UNIT\_FLAG\_UNK\_15
Only Swim (['OnlySwim' from UnitFlags.cs in WPP](https://github.com/TrinityCore/WowPacketParser/blob/master/WowPacketParser/Enums/UnitFlags.cs))
65536
0x0001 0000
UNIT\_FLAG\_UNK\_16
No Attack 2 (['NoAttack2' from UnitFlags.cs in WPP](https://github.com/TrinityCore/WowPacketParser/blob/master/WowPacketParser/Enums/UnitFlags.cs))
131072
0x0002 0000
UNIT\_FLAG\_PACIFIED
Creature will not attack
262144
0x0004 0000
UNIT\_FLAG\_STUNNED
3.0.3 ok
524288
0x0008 0000
UNIT\_FLAG\_IN\_COMBAT
('AffectingCombat'[from UnitFlags.cs in WPP](https://github.com/TrinityCore/WowPacketParser/blob/master/WowPacketParser/Enums/UnitFlags.cs))
1048576
0x0010 0000
UNIT\_FLAG\_TAXI\_FLIGHT
Disable casting at client side spell not allowed by taxi flight (mounted?), probably used with 0x4 flag
2097152
0x0020 0000
UNIT\_FLAG\_DISARMED
3.0.3, disable melee spells casting..., "Required melee weapon" added to melee spells tooltip.
4194304
0x0040 0000
UNIT\_FLAG\_CONFUSED
Confused.
8388608
0x0080 0000
UNIT\_FLAG\_FLEEING
(['Feared' from UnitFlags.cs in WPP](https://github.com/TrinityCore/WowPacketParser/blob/master/WowPacketParser/Enums/UnitFlags.cs))
16777216
0x0100 0000
UNIT\_FLAG\_PLAYER\_CONTROLLED
Used in spell Eyes of the Beast for pet... let attack by controlled creature. Also used by Vehicles (PCV).
54432
0x0200 0000
UNIT\_FLAG\_NOT\_SELECTABLE
Can't be selected by mouse or with /target {name} command.
67108864
0x0400 0000
UNIT\_FLAG\_SKINNABLE
Skinnable
134217728
0x0800 0000
UNIT\_FLAG\_MOUNT
The client seems to handle it perfectly. Also used when making custom mounts.
268435456
0x1000 0000
UNIT\_FLAG\_UNK\_28
([PreventKneelingWhenLooting from UnitFlags.cs in WPP](https://github.com/TrinityCore/WowPacketParser/blob/master/WowPacketParser/Enums/UnitFlags.cs))
536870912
0x2000 0000
UNIT\_FLAG\_UNK\_29
Used in Feign Death spell or NPC will play dead. ([PreventEmotes](https://github.com/TrinityCore/WowPacketParser/blob/master/WowPacketParser/Enums/UnitFlags.cs))
1073741824
0x4000 0000
UNIT\_FLAG\_SHEATHE
2147483648
0x8000 0000
UNIT\_FLAG\_UNK\_31

#### unit\_flags2

Allows additional application of unit flags to creatures. Again, this is a bitmask field and to apply more than one flag, just add the different numbers. Some possible flags are:

# unit\_flags2

Decimal
Hexadecimal
Name
Comments
1
0x0000 0001
UNIT\_FLAG2\_FEIGN\_DEATH
2
0x0000 0002
UNIT\_FLAG2\_UNK1
Hide unit model (show only player equip)
4
0x0000 0004
UNIT\_FLAG2\_IGNORE\_REPUTATION
8
0x0000 0008
UNIT\_FLAG2\_COMPREHEND\_LANG
16
0x0000 0010
UNIT\_FLAG2\_MIRROR\_IMAGE
32
0x0000 0020
UNIT\_FLAG2\_INSTANTLY\_APPEAR\_MODEL
Unit model instantly appears when summoned (does not fade in)
64
0x0000 0040
UNIT\_FLAG2\_FORCE\_MOVEMENT
128
0x0000 0080
UNIT\_FLAG2\_DISARM\_OFFHAND
256
0x0000 0100
UNIT\_FLAG2\_DISABLE\_PRED\_STATS
Player has disabled predicted stats (Used by raid frames)
1024
0x0000 0400
UNIT\_FLAG2\_DISARM\_RANGED
this does not disable ranged weapon display (maybe additional flag needed?)
2048
0x0000 0800
UNIT\_FLAG2\_REGENERATE\_POWER
4096
0x0000 1000
UNIT\_FLAG2\_RESTRICT\_PARTY\_INTERACTION
Restrict interaction to party or raid
8192
0x0000 2000
UNIT\_FLAG2\_PREVENT\_SPELL\_CLICK
Prevent spellclick
16384
0x0000 4000
UNIT\_FLAG2\_ALLOW\_ENEMY\_INTERACT
32768
0x0000 8000
UNIT\_FLAG2\_DISABLE\_TURN
65536
0x0001 0000
UNIT\_FLAG2\_UNK2
131072
0x0002 0000
UNIT\_FLAG2\_PLAY\_DEATH\_ANIM
Plays special death animation upon death
262144
0x0004 0000
UNIT\_FLAG2\_ALLOW\_CHEAT\_SPELLS
allows casting spells with AttributesEx7 & SPELL\_ATTR7\_IS\_CHEAT\_SPELL

#### dynamicflags

Flags that control visual appearance of the creature.

A few known flags and their use are:

# dynamicflags

Decimal
Hexadecimal
Name
Comments
0
0x00
UNIT\_DYNFLAG\_NONE
1
0x01
UNIT\_DYNFLAG\_LOOTABLE
2
0x02
UNIT\_DYNFLAG\_TRACK\_UNIT
Creature's location will be seen as a small dot in the minimap
4
0x04
UNIT\_DYNFLAG\_TAPPED
Makes creatures name appear grey (Lua\_UnitIsTapped)
8
0x08
UNIT\_DYNFLAG\_TAPPED\_BY\_PLAYER
Lua\_UnitIsTappedByPlayer usually used by PCVs (Player Controlled Vehicles)
16
0x10
UNIT\_DYNFLAG\_SPECIALINFO
32
0x20
UNIT\_DYNFLAG\_DEAD
Makes the creature appear dead (this DOES NOT make the creature's name grey or not attack players).
64
0x40
UNIT\_DYNFLAG\_REFER\_A\_FRIEND
128
0x80
UNIT\_DYNFLAG\_TAPPED\_BY\_ALL\_THREAT\_LIST
Lua\_UnitIsTappedByAllThreatList

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

#### trainer\_type

If the NPC is a trainer (has the trainer flag), then this field controls what kind of trainer it is. Both this field and the related field must be filled in for a trainer to work correctly.

| ID  | Type                       | Related Field                                                                         | Comments            |
|-----|----------------------------|---------------------------------------------------------------------------------------|---------------------|
| 0   | TRAINER\_TYPE\_CLASS       | [trainer\_class](http://archive.trinitycore.info/Creature_template_tc2#trainer_class) | Trains class spells |
| 1   | TRAINER\_TYPE\_MOUNTS      | [trainer\_race](http://archive.trinitycore.info/Creature_template_tc2#trainer_race)   | Trains riding skill |
| 2   | TRAINER\_TYPE\_TRADESKILLS | [trainer\_spell](http://archive.trinitycore.info/Creature_template_tc2#trainer_spell) | Trains professions  |
| 3   | TRAINER\_TYPE\_PETS        | [trainer\_class](http://archive.trinitycore.info/Creature_template_tc2#trainer_class) | Trains pet skills   |

#### trainer\_spell

If the NPC is a trainer that teaches professions ([trainer\_type](http://archive.trinitycore.info/Creature_template_tc2#trainer_type) = 2), then the player must already know the spell ID specified here to be able to talk to this NPC.

#### trainer\_class

If the NPC is a class trainer or a pet trainer ([trainer\_type](http://archive.trinitycore.info/Creature_template_tc2#trainer_type) = 0 or 3), then the player's class must be the same as the value specified here to talk to this trainer. For pet trainers, this value must be 3 (hunter). See [characters.class](http://archive.trinitycore.info/Characters_tc2#class "Characters tc2")

#### trainer\_race

If the NPC is a mount trainer ([trainer\_type](http://archive.trinitycore.info/Creature_template_tc2#trainer_type) = 1), then the player's race must be the same as the value specified here to talk to this trainer. See [characters.race](http://archive.trinitycore.info/Characters_tc2#race "Characters tc2")

#### type

The type of the creature.

| ID  | Type           |
|-----|----------------|
| 0   | None           |
| 1   | Beast          |
| 2   | Dragonkin      |
| 3   | Demon          |
| 4   | Elemental      |
| 5   | Giant          |
| 6   | Undead         |
| 7   | Humanoid       |
| 8   | Critter        |
| 9   | Mechanical     |
| 10  | Not specified  |
| 11  | Totem          |
| 12  | Non-Combat Pet |
| 13  | Gas Cloud      |

#### type\_flags

This field can control whether a mob is minable or herbable or lootable by engineer. If it is either of those three, then the loot given when it is skinned/mined will be stored in the [skinning\_loot\_template](http://archive.trinitycore.info/Loot_template_tc2 "Loot template tc2") table. It also controls, whether this mob can be tamed by a hunter. Other fields have no special meaning on the serverside. The entire field will be send to the client in SMSG\_CREATURE\_QUERY\_RESPONSE

# type\_flags

Decimal
Hexadecimal
Name
Comments
1
0x0000 0001
CREATURE\_TYPEFLAGS\_TAMEABLE
Makes the mob tameable (must also be a beast and have family set)
2
0x0000 0002
CREATURE\_TYPEFLAGS\_GHOST
Creature are also visible for not alive player. Allow gossip interaction if npcflag allow?
4
0x0000 0004
CREATURE\_TYPEFLAGS\_BOSS
Changes creature's visible level to "??" in the creature's portrait - Inmune Knockback.
8
0x0000 0008
CREATURE\_TYPEFLAGS\_DO\_NOT\_PLAY\_WOUND\_PARRY\_ANIMATION
Does not play wound animation on parry.
16
0x0000 0010
CREATURE\_TYPEFLAGS\_HIDE\_FACTION\_TOOLTIP
Hides tooltip faction.
32
0x0000 0020
CREATURE\_TYPEFLAGS\_UNK6
64
0x0000 0040
CREATURE\_TYPEFLAGS\_SPELL\_ATTACKABLE
Spell attackable.
128
0x0000 0080
CREATURE\_TYPEFLAGS\_DEAD\_INTERACT
Player can interact with the creature if its dead (not player dead)
256
0x0000 0100
CREATURE\_TYPEFLAGS\_HERBLOOT
Makes mob herbable
512
0x0000 0200
CREATURE\_TYPEFLAGS\_MININGLOOT
Makes mob minable
1024
0x0000 0400
CREATURE\_TYPEFLAGS\_DONT\_LOG\_DEATH
Does not combatlog death.
2048
0x0000 0800
CREATURE\_TYPEFLAGS\_MOUNTED\_COMBAT
Creature can remain mounted when entering combat
4096
0x0000 1000
CREATURE\_TYPEFLAGS\_AID\_PLAYERS
Can aid any player in combat if in range?
8192
0x0000 2000
CREATURE\_TYPEFLAGS\_IS\_PET\_BAR\_USED
Is using pet bar.
16384
0x0000 4000
CREATURE\_TYPEFLAGS\_MASK\_UID
32768
0x0000 8000
CREATURE\_TYPEFLAGS\_ENGINEERLOOT
Makes mob lootable by engineer
65536
0x0001 0000
CREATURE\_TYPE\_FLAG\_EXOTIC\_PET
Tamable as an exotic pet. Normal tamable flag must also be set.
131072
0x0002 0000
CREATURE\_TYPEFLAGS\_USE\_DEFAULT\_COLLISION\_BOX
Collision related. (always using default collision box?)
262144
0x0004 0000
CREATURE\_TYPEFLAGS\_IS\_SIEGE\_WEAPON
Is siege weapon.
524288
0x0008 0000
CREATURE\_TYPEFLAGS\_PROJECTILE\_COLLISION
Projectiles can collide with this creature - interacts with TARGET\_DEST\_TRAJ

1048576
0x0010 0000
CREATURE\_TYPEFLAGS\_HIDE\_NAMEPLATE
Hides nameplate.
2097152
0x0020 0000
CREATURE\_TYPEFLAGS\_DO\_NOT\_PLAY\_MOUNTED\_ANIMATIONS
Does not play mounted animations.
4194304
0x0040 0000
CREATURE\_TYPEFLAGS\_IS\_LINK\_ALL
8388608
0x0080 0000
CREATURE\_TYPEFLAGS\_INTERACT\_ONLY\_WITH\_CREATOR
Can only interact with its creator.

134217728
0x0800 0000
CREATURE\_TYPEFLAGS\_FORCE\_GOSSIP
Allows the creature to display a single gossip option.

#### lootid

The ID of the loot template ID that this creature should use to generate loots. See [creature\_loot\_template.entry](http://archive.trinitycore.info/Loot_template_tc2#entry "Loot template tc2")

#### pickpocketloot

The ID of the pickpocketing loot template that this creature should use to generate pickpocketing loots. See [pickpocketing\_loot\_template.entry](http://archive.trinitycore.info/Loot_template_tc2#entry "Loot template tc2")

#### skinloot

The ID of the skinning loot template that this creature should use to generate skinning loots. See [skinning\_loot\_template.entry](http://archive.trinitycore.info/Loot_template_tc2#entry "Loot template tc2")

**resistanceX**

| resistanceX | school |
|-------------|--------|
| 1           | Holy   |
| 2           | Fire   |
| 3           | Nature |
| 4           | Frost  |
| 5           | Shadow |
| 6           | Arcane |

#### spellX

Spell ID that can be used for Mind Control of this creature. 
For vehicle creatures: spell on action bar with position X.

#### PetSpellDataId

ID, found in CreatureSpellData.dbc, that displays what spells the pet has in the client.

#### VehicleId

Entry of vehicle if creature is/has a vehicle entry. This field determines how the player appears on the vehicle, how the vehicle moves, and whether or not the vehicle action bar is shown. For example, a vehicleID of 292 will make the player invisible, prevent the vehicle from strafing left/right (but will allow forwards/backwards), and will show the vehicle action bar spells (which are defined in [spell1-8](http://trinitycore.atlassian.net#spell)). An npc\_spellclick\_spells entry must be made for this creature entry in order for this to work.

#### mingold

Minimum money that the creature drops when killed, in copper.

#### maxgold

Maximum money that the creature drops when killed, in copper.

#### AIName

This field is overridden by ScriptName field if both are set.

<table>
<thead>
<tr class="header">
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>ArcherAI</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>NullAI</td>
<td>Empty AI, creature does nothing.</td>
</tr>
<tr class="odd">
<td>NullCreatureAI</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>OutdoorPvPObjectiveAI</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>PassiveAI</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>PetAI</td>
<td>Creature is a pet.</td>
</tr>
<tr class="odd">
<td>SmartAI</td>
<td>Creature uses new smart AI.</td>
</tr>
<tr class="even">
<td>TurretAI</td>
<td><br />
</td>
</tr>
</tbody>
</table>

#### MovementType

The creature's default movement type.

| ID  | Type                                        |
|-----|---------------------------------------------|
| 0   | Idle; stay in one place                     |
| 1   | Random movement inside the spawndist radius |
| 2   | Waypoint movement                           |

#### InhabitType

Controls where the creature can move and attack.

| Bitmask | Type   |
|---------|--------|
| 1       | Ground |
| 2       | Water  |
| 4       | Flying |
| 8       | Rooted |

(This is a bitmask. You can add values together: 1+4=5 would make the creature walk on ground and fly.)

**Note:** If your vehicle is a flying vehicle then your accessory **MUST** have it's [InhabitType](http://trinitycore.atlassian.net#InhabitType) set to (4 - Flying). This being if you set it for both ground and flying it will spawn on the ground if the vehicle is initially spawned on the ground.

#### HoverHeight

Distance above the ground that the creature will hover if it has MOVEMENTFLAG\_DISABLE\_GRAVITY enabled. Value taken from sniffs.

#### HealthModifier

Used to modify the base Level/Class health of a creature. This field comes from WDB.

#### ManaModifier

Used to modify the base Level/Class mana of a creature. This field comes from WDB.

#### ArmorModifier

Used to modify the base Level/Class armor of a creature.

**DamageModifier**

TODO!

**ExperienceModifier**

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

#### mechanic\_immune\_mask

This makes the creature immune to specific spell natures. See Spell.dbc at row effect\_X\_mechanic\_id.

Uses references from SpellMechanic.dbc.

# mechanic\_immune\_mask

Decimal
Hexadecimal
Type
Comment
1
0x0000 0001
MECHANIC\_CHARM
2
0x0000 0002
MECHANIC\_DISORIENTED
4
0x0000 0004
MECHANIC\_DISARM
8
0x0000 0008
MECHANIC\_DISTRACT
16
0x0000 0010
MECHANIC\_FEAR
32
0x0000 0020
MECHANIC\_GRIP
Death Grip and similar effects
64
0x0000 0040
MECHANIC\_ROOT
128
0x0000 0080
MECHANIC\_PACIFY
Not used: 0 spells with this mechanic
256
0x0000 0100
MECHANIC\_SILENCE
512
0x0000 0200
MECHANIC\_SLEEP
1024
0x0000 0400
MECHANIC\_SNARE
2048
0x0000 0800
MECHANIC\_STUN
4096
0x0000 1000
MECHANIC\_FREEZE
8192
0x0000 2000
MECHANIC\_KNOCKOUT
Incapacitate effects such as Repetance (Paladin)
16384
0x0000 4000
MECHANIC\_BLEED
32768
0x0000 8000
MECHANIC\_BANDAGE
Healing etc.
65536
0x0001 0000
MECHANIC\_POLYMORPH
131072
0x0002 0000
MECHANIC\_BANISH
262144
0x0004 0000
MECHANIC\_SHIELD
524288
0x0008 0000
MECHANIC\_SHACKLE
Shackle Undead only
1048576
0x0010 0000
MECHANIC\_MOUNT
Any effect that summons a mount
2097152
0x0020 0000
MECHANIC\_INFECTED
Frost Fever, Blood Plague etc.
4194304
0x0040 0000
MECHANIC\_TURN
e.g. Turn Evil
8388608
0x0080 0000
MECHANIC\_HORROR
e.g. Death Coil (Warlock)
16777216
0x0100 0000
MECHANIC\_INVULNERABILITY
Forbearance, Nether Protection, Diplomatic Immunity only
54432
0x0200 0000
MECHANIC\_INTERRUPT
67108864
0x0400 0000
MECHANIC\_DAZE
134217728
0x0800 0000
MECHANIC\_DISCOVERY
Any Create Item effect
268435456
0x1000 0000
MECHANIC\_IMMUNE\_SHIELD
Divine Shield, Ice Block, Hand of Protection...
536870912
0x2000 0000
MECHANIC\_SAPPED
1073741824
0x4000 0000
MECHANIC\_ENRAGED

To combine immunities just add values. Immune to everything corresponds to the value 2147483647 (0x3FFF FFFF).

#### flags\_extra

These flags control certain creature specific attributes. Flags can be added together to apply more than one.

**Example:** 32+64=96

# flags\_extra

Decimal
Hexadecimal
Name
Type
1
0x00000001
CREATURE\_FLAG\_EXTRA\_INSTANCE\_BIND
creature kill binds instance to killer and killer's group
2
0x00000002
CREATURE\_FLAG\_EXTRA\_CIVILIAN
creature does not aggro (ignore faction/reputation hostility)
4
0x00000004
CREATURE\_FLAG\_EXTRA\_NO\_PARRY
creature does not parry
8
0x00000008
CREATURE\_FLAG\_EXTRA\_NO\_PARRY\_HASTEN
creature does not counter-attack at parry
16
0x00000010
CREATURE\_FLAG\_EXTRA\_NO\_BLOCK
creature does not block
32
0x00000020
CREATURE\_FLAG\_EXTRA\_NO\_CRUSH
creature does not do crush-attacks
64
0x00000040
CREATURE\_FLAG\_EXTRA\_NO\_XP\_AT\_KILL
creature kill does not give XP
128
0x00000080
CREATURE\_FLAG\_EXTRA\_TRIGGER
creature is trigger-NPC (invisible to players only)
256
0x00000100
CREATURE\_FLAG\_EXTRA\_NO\_TAUNT
creature is immune to taunt-auras and "attack me"-effects
512
0x00000200
CREATURE\_FLAG\_EXTRA\_NO\_MOVE\_FLAGS\_UPDATE
creature won't update movement flags
1024
0x00000400
CREATURE\_FLAG\_EXTRA\_GHOST\_VISIBILITY
creature will be only visible for dead players
16384
0x00004000
CREATURE\_FLAG\_EXTRA\_WORLDEVENT
custom flag for world events (left room for merging)
32768
0x00008000
CREATURE\_FLAG\_EXTRA\_GUARD
creature is a guard (Will ignore feign death and vanish)
131072
0x00020000
CREATURE\_FLAG\_EXTRA\_NO\_CRIT
creature does not do critical strikes
262144
0x00040000
CREATURE\_FLAG\_EXTRA\_NO\_SKILLGAIN
creature won't increase weapon skills
524288
0x00080000
CREATURE\_FLAG\_EXTRA\_TAUNT\_DIMINISH
creature taunt is subject to diminishing returns
1048576
0x00100000
CREATURE\_FLAG\_EXTRA\_ALL\_DIMINISH
Creature is subject to all diminishing returns
2097152
0x00200000
CREATURE\_FLAG\_EXTRA\_NO\_PLAYER\_DAMAGE\_REQ
NPCs can help with killing this creature and player will still be credited if he tags the creature

268435456
0x10000000
CREATURE\_FLAG\_EXTRA\_DUNGEON\_BOSS
Creature is a dungeon boss. This flag is generically set by core during runtime. Setting this in database will give you startup error.

536870912
0x20000000
CREATURE\_FLAG\_EXTRA\_IGNORE\_PATHFINDING
Creature will ignore pathfinding. This is like disabling Mmaps, only for one creature.
1073741824
0x40000000
CREATURE\_FLAG\_EXTRA\_IMMUNITY\_KNOCKBACK
creature will immune all knockback effects

#### ScriptName

The name of the script that this creature uses, if any. This ties a script from a scripting engine to this creature.

#### VerifiedBuild

This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is [-Client Build](http://archive.trinitycore.info/DB:Auth:realmlist#gamebuild "DB:Auth:realmlist") then it was parsed with WDB files from that specific [client build](http://archive.trinitycore.info/DB:Auth:realmlist#gamebuild "DB:Auth:realmlist") and manually edited later for some special necessity.


