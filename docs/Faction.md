# Faction

**Faction.dbc**

This dbc contains information on all of the base factions. These factions are unique and represent a faction with which a player can gain reputation.

**IMPORTANT:** These values are used for **ALL** tables **EXCEPT** the [creature\_template](creature_template) and [gameobject\_template\_addon](gameobject_template_addon) tables.


## Structure

| Column | Field               | Type                                                           | Notes                                                                                                                                                                                                                                                                                                      |
|--------|---------------------|----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | ID                  | Integer                                                        |                                                                                                                                                                                                                                                                                                            |
| 2      | reputationIndex     | Integer                                                        | Each faction that has gainable rep has a unique number. All factions that you can not gain rep with have -1.                                                                                                                                                                                               |
| 3      | reputationRaceMask  | BitMask                                                        | &lt;.. Points to another Allied / AtWar ID                                                                                                                                                                                                                                                                 |
| 4      | reputationRaceMask  | BitMask                                                        | .. Honor Hold has 1101,690 & Thrallmar 690,1101 for example. ..&gt;                                                                                                                                                                                                                                        |
| 5      | reputationRaceMask  | BitMask                                                        | Only city factions have a value. Possible relationship to Modifiers and 17 (1 = Stormwind; 2 = Orgrimmar; 4 = Wildhammer Clan & Iron Forge; 8 = Dranassus; 16 = Undercity; 64 = Gnomeregan Exiles; 512 = Shattrath City Factions & Silvermoon City; 528 = Thunder Bluff & Darkspear Trolls; 1024 = Exodar) |
| 6      | reputationRaceMask  | BitMask                                                        | Only Horde cities have a value. Possible relationship to Modifiers and 18 (16 = Silvermoon City; 32 = Thunder Bluff; 128 = Darkspear Trolls; 512 = Undercity; 528 = Orgrimmar)                                                                                                                             |
| 7      | reputationClassMask | BitMask                                                        | (479 = Cenerion Circle; 1503 = Lower City, "Friendly, Hidden", Netherwing; Shatari Skyguards)                                                                                                                                                                                                              |
| 8      | reputationClassMask | BitMask                                                        | (1024 = Cenerion Circle;)                                                                                                                                                                                                                                                                                  |
| 9      | reputationClassMask | BitMask                                                        | Never set pre 3.\* but 0x80 on "Kirin Tor"                                                                                                                                                                                                                                                                 |
| 10     | reputationClassMask | BitMask                                                        | Never set pre 3.\* but 0x80 on "Kirin Tor"                                                                                                                                                                                                                                                                 |
| 11     | reputationBase      | Integer\[4\]                                                   | Based on 0 = Neutral                                                                                                                                                                                                                                                                                       |
| 15     | reputationFlags     | Integer\[4\]                                                   |                                                                                                                                                                                                                                                                                                            |
| 19     | **parentFactionID** | iRefID                                                         | Recursive. i.e. Undercity lists ID 67, which is Horde                                                                                                                                                                                                                                                      |
| 20     | parentFactionMod    | Float\[2\]                                                     |                                                                                                                                                                                                                                                                                                            |
| 22     | parentFactionCap    | Integer\[2\]                                                   |                                                                                                                                                                                                                                                                                                            |
| 24     | Name                | [Loc](Localization_lang)                                       | Display name of the faction                                                                                                                                                                                                                                                                                |
| 41     | Description         | [Loc](http://www.pxr.dk/wowdev/wiki/index.php?title=Loc "Loc") | Seen in the reputation-GUI on click.                                                                                                                                                                                                                                                                       |

## Flags

       FACTION_FLAG_NONE             = 0x00, // no faction flag
       FACTION_FLAG_VISIBLE          = 0x01, // makes visible in client (set or can be set at interaction with target of this faction)
       FACTION_FLAG_AT_WAR           = 0x02, // enable AtWar-button in client. player controlled (except opposition team always war state), Flag only set on initial creation
       FACTION_FLAG_HIDDEN           = 0x04, // hidden faction from reputation pane in client (player can gain reputation, but this update not sent to client)
       FACTION_FLAG_INVISIBLE_FORCED = 0x08, // always overwrite FACTION_FLAG_VISIBLE and hide faction in rep.list, used for hide opposite team factions
       FACTION_FLAG_PEACE_FORCED     = 0x10, // always overwrite FACTION_FLAG_AT_WAR, used for prevent war with own team factions
       FACTION_FLAG_INACTIVE         = 0x20, // player controlled, state stored in characters.data (CMSG_SET_FACTION_INACTIVE)
       FACTION_FLAG_RIVAL            = 0x40, // flag for the two competing outland factions
       FACTION_FLAG_SPECIAL          = 0x80 // horde and alliance home cities and their northrend allies have this flag

## **Content**

| **ID** | **Reputation ID** | **Name**                            |
|--------|-------------------|-------------------------------------|
| 1      | -1                | PLAYER, Human                       |
| 2      | -1                | PLAYER, Orc                         |
| 3      | -1                | PLAYER, Dwarf                       |
| 4      | -1                | PLAYER, Night Elf                   |
| 5      | -1                | PLAYER, Undead                      |
| 6      | -1                | PLAYER, Tauren                      |
| 7      | -1                | Creature                            |
| 8      | -1                | PLAYER, Gnome                       |
| 9      | -1                | PLAYER, Troll                       |
| 14     | -1                | Monster                             |
| 15     | -1                | Defias Brotherhood                  |
| 16     | -1                | Gnoll - Riverpaw                    |
| 17     | -1                | Gnoll - Redridge                    |
| 18     | -1                | Gnoll - Shadowhide                  |
| 19     | -1                | Murloc                              |
| 20     | -1                | Undead, Scourge                     |
| 21     | 1                 | Booty Bay                           |
| 22     | -1                | Beast - Spider                      |
| 23     | -1                | Beast - Boar                        |
| 24     | -1                | Worgen                              |
| 25     | -1                | Kobold                              |
| 26     | -1                | Troll, Bloodscalp                   |
| 27     | -1                | Troll, Skullsplitter                |
| 28     | -1                | Prey                                |
| 29     | -1                | Beast - Wolf                        |
| 30     | -1                | Defias Brotherhood Traitor          |
| 31     | -1                | Friendly                            |
| 32     | -1                | Trogg                               |
| 33     | -1                | Troll, Frostmane                    |
| 34     | -1                | Orc, Blackrock                      |
| 35     | -1                | Villian                             |
| 36     | -1                | Victim                              |
| 37     | -1                | Beast - Bear                        |
| 38     | -1                | Ogre                                |
| 39     | -1                | Kurzen's Mercenaries                |
| 40     | -1                | Escortee                            |
| 41     | -1                | Venture Company                     |
| 42     | -1                | Beast - Raptor                      |
| 43     | -1                | Basilisk                            |
| 44     | -1                | Dragonflight, Green                 |
| 45     | -1                | Lost Ones                           |
| 46     | 29                | Blacksmithing - Armorsmithing       |
| 47     | 20                | Ironforge                           |
| 48     | -1                | Dark Iron Dwarves                   |
| 49     | -1                | Human, Night Watch                  |
| 50     | -1                | Dragonflight, Red                   |
| 51     | -1                | Gnoll - Mosshide                    |
| 52     | -1                | Orc, Dragonmaw                      |
| 53     | -1                | Gnome - Leper                       |
| 54     | 18                | Gnomeregan Exiles                   |
| 55     | -1                | Leopard                             |
| 56     | -1                | Scarlet Crusade                     |
| 57     | -1                | Gnoll - Rothide                     |
| 58     | -1                | Beast - Gorilla                     |
| 59     | 4                 | Thorium Brotherhood                 |
| 60     | -1                | Naga                                |
| 61     | -1                | Dalaran                             |
| 62     | -1                | Forlorn Spirit                      |
| 63     | -1                | Darkhowl                            |
| 64     | -1                | Grell                               |
| 65     | -1                | Furbolg                             |
| 66     | -1                | Horde Generic                       |
| 67     | 12                | Horde                               |
| 68     | 17                | Undercity                           |
| 69     | 21                | Darnassus                           |
| 70     | 6                 | Syndicate                           |
| 71     | -1                | Hillsbrad Militia                   |
| 72     | 19                | Stormwind                           |
| 73     | -1                | Demon                               |
| 74     | -1                | Elemental                           |
| 75     | -1                | Spirit                              |
| 76     | 14                | Orgrimmar                           |
| 77     | -1                | Treasure                            |
| 78     | -1                | Gnoll - Mudsnout                    |
| 79     | -1                | HIllsbrad, Southshore Mayor         |
| 80     | -1                | Dragonflight, Black                 |
| 81     | 16                | Thunder Bluff                       |
| 82     | -1                | Troll, Witherbark                   |
| 83     | 23                | Leatherworking - Elemental          |
| 84     | -1                | Quilboar, Razormane                 |
| 85     | -1                | Quilboar, Bristleback               |
| 86     | 22                | Leatherworking - Dragonscale        |
| 87     | 0                 | Bloodsail Buccaneers                |
| 88     | -1                | Blackfathom                         |
| 89     | -1                | Makrura                             |
| 90     | -1                | Centaur, Kolkar                     |
| 91     | -1                | Centaur, Galak                      |
| 92     | 2                 | Gelkis Clan Centaur                 |
| 93     | 3                 | Magram Clan Centaur                 |
| 94     | -1                | Maraudine                           |
| 108    | -1                | Theramore                           |
| 109    | -1                | Quilboar, Razorfen                  |
| 110    | -1                | Quilboar, Razormane 2               |
| 111    | -1                | Quilboar, Deathshead                |
| 128    | -1                | Enemy                               |
| 148    | -1                | Ambient                             |
| 168    | -1                | Nethergarde Caravan                 |
| 169    | 10                | Steamwheedle Cartel                 |
| 189    | -1                | Alliance Generic                    |
| 209    | -1                | Nethergarde                         |
| 229    | -1                | Wailing Caverns                     |
| 249    | -1                | Silithid                            |
| 269    | -1                | Silvermoon Remnant                  |
| 270    | 51                | Zandalar Tribe                      |
| 289    | 30                | Blacksmithing - Weaponsmithing      |
| 309    | -1                | Scorpid                             |
| 310    | -1                | Beast - Bat                         |
| 311    | -1                | Titan                               |
| 329    | -1                | Taskmaster Fizzule                  |
| 349    | 5                 | Ravenholdt                          |
| 369    | 7                 | Gadgetzan                           |
| 389    | -1                | Gnomeregan Bug                      |
| 409    | -1                | Harpy                               |
| 429    | -1                | Burning Blade                       |
| 449    | -1                | Shadowsilk Poacher                  |
| 450    | -1                | Searing Spider                      |
| 469    | 11                | Alliance                            |
| 470    | 9                 | Ratchet                             |
| 471    | 8                 | Wildhammer Clan                     |
| 489    | -1                | Goblin, Dark Iron Bar Patron        |
| 509    | 53                | The League of Arathor               |
| 510    | 52                | The Defilers                        |
| 511    | -1                | Giant                               |
| 529    | 13                | Argent Dawn                         |
| 530    | 15                | Darkspear Trolls                    |
| 531    | -1                | Dragonflight, Bronze                |
| 532    | -1                | Dragonflight, Blue                  |
| 549    | 24                | Leatherworking - Tribal             |
| 550    | 26                | Engineering - Goblin                |
| 551    | 25                | Engineering - Gnome                 |
| 569    | 33                | Blacksmithing - Hammersmithing      |
| 570    | 31                | Blacksmithing - Axesmithing         |
| 571    | 32                | Blacksmithing - Swordsmithing       |
| 572    | -1                | Troll, Vilebranch                   |
| 573    | -1                | Southsea Freebooters                |
| 574    | 34                | Caer Darrow                         |
| 575    | -1                | Furbolg, Uncorrupted                |
| 576    | 35                | Timbermaw Hold                      |
| 577    | 28                | Everlook                            |
| 589    | 27                | Wintersaber Trainers                |
| 609    | 36                | Cenarion Circle                     |
| 629    | -1                | Shatterspear Trolls                 |
| 630    | -1                | Ravasaur Trainers                   |
| 649    | -1                | Majordomo Executus                  |
| 669    | -1                | Beast - Carrion Bird                |
| 670    | -1                | Beast - Cat                         |
| 671    | -1                | Beast - Crab                        |
| 672    | -1                | Beast - Crocilisk                   |
| 673    | -1                | Beast - Hyena                       |
| 674    | -1                | Beast - Owl                         |
| 675    | -1                | Beast - Scorpid                     |
| 676    | -1                | Beast - Tallstrider                 |
| 677    | -1                | Beast - Turtle                      |
| 678    | -1                | Beast - Wind Serpent                |
| 679    | -1                | Training Dummy                      |
| 689    | -1                | Dragonflight, Black - Bait          |
| 709    | -1                | Battleground Neutral                |
| 729    | 41                | Frostwolf Clan                      |
| 730    | 40                | Stormpike Guard                     |
| 749    | 42                | Hydraxian Waterlords                |
| 750    | -1                | Sulfuron Firelords                  |
| 769    | -1                | Gizlock's Dummy                     |
| 770    | -1                | Gizlock's Charm                     |
| 771    | -1                | Gizlock                             |
| 789    | -1                | Moro'gai                            |
| 790    | -1                | Spirit Guide - Alliance             |
| 809    | 44                | Shen'dralar                         |
| 829    | -1                | Ogre (Captain Kromcrush)            |
| 849    | -1                | Spirit Guide - Horde                |
| 869    | -1                | Jaedenar                            |
| 889    | 46                | Warsong Outriders                   |
| 890    | 45                | Silverwing Sentinels                |
| 891    | 47                | Alliance Forces                     |
| 892    | 48                | Horde Forces                        |
| 893    | -1                | Revantusk Trolls                    |
| 909    | 50                | Darkmoon Faire                      |
| 910    | 54                | Brood of Nozdormu                   |
| 911    | 55                | Silvermoon City                     |
| 912    | -1                | Might of Kalimdor                   |
| 914    | -1                | PLAYER, Blood Elf                   |
| 915    | -1                | Armies of C'Thun                    |
| 916    | -1                | Silithid Attackers                  |
| 917    | -1                | The Ironforge Brigade               |
| 918    | -1                | RC Enemies                          |
| 919    | -1                | RC Objects                          |
| 920    | -1                | Red                                 |
| 921    | -1                | Blue                                |
| 922    | 56                | Tranquillien                        |
| 923    | -1                | Farstriders                         |
| 924    | -1                | DEPRECATED                          |
| 925    | -1                | Sunstriders                         |
| 926    | -1                | Magister's Guild                    |
| 927    | -1                | PLAYER, Draenei                     |
| 928    | -1                | Scourge Invaders                    |
| 929    | -1                | Bloodmaul Clan                      |
| 930    | 49                | Exodar                              |
| 931    | -1                | Test Faction (not a real faction)   |
| 932    | 58                | The Aldor                           |
| 933    | 60                | The Consortium                      |
| 934    | 62                | The Scryers                         |
| 935    | 39                | The Sha'tar                         |
| 936    | 59                | Shattrath City                      |
| 937    | -1                | Troll, Forest                       |
| 938    | -1                | The Omenai                          |
| 939    | -1                | DEPRECATED                          |
| 940    | -1                | The Sons of Lothar                  |
| 941    | 61                | The Mag'har                         |
| 942    | 64                | Cenarion Expedition                 |
| 943    | -1                | Fel Orc                             |
| 944    | -1                | Fel Orc Ghost                       |
| 945    | -1                | Sons of Lothar Ghosts               |
| 946    | 38                | Honor Hold                          |
| 947    | 37                | Thrallmar                           |
| 948    | 86                | Test Faction 2                      |
| 949    | 85                | Test Faction 1                      |
| 950    | -1                | ToWoW - Flag                        |
| 951    | -1                | ToWoW - Flag Trigger Alliance (DND) |
| 952    | 87                | Test Faction 3                      |
| 953    | -1                | Test Faction 4                      |
| 954    | -1                | ToWoW - Flag Trigger Horde (DND)    |
| 955    | -1                | Broken                              |
| 956    | -1                | Ethereum                            |
| 957    | -1                | Earth Elemental                     |
| 958    | -1                | Fighting Robots                     |
| 959    | -1                | Actor Good                          |
| 960    | -1                | Actor Evil                          |
| 961    | -1                | Stillpine Furbolg                   |
| 962    | -1                | Crazed Owlkin                       |
| 963    | -1                | Chess Alliance                      |
| 964    | -1                | Chess Horde                         |
| 965    | -1                | Monster Spar                        |
| 966    | -1                | Monster Spar Buddy                  |
| 967    | 63                | The Violet Eye                      |
| 968    | -1                | Sunhawks                            |
| 969    | -1                | Hand of Argus                       |
| 970    | 65                | Sporeggar                           |
| 971    | -1                | Fungal Giant                        |
| 972    | -1                | Spore Bat                           |
| 973    | -1                | Monster, Predator                   |
| 974    | -1                | Monster, Prey                       |
| 975    | -1                | Void Anomaly                        |
| 976    | -1                | Hyjal Defenders                     |
| 977    | -1                | Hyjal Invaders                      |
| 978    | 66                | Kurenai                             |
| 979    | -1                | Earthen Ring                        |
| 980    | 43                | The Burning Crusade                 |
| 981    | -1                | Arakkoa                             |
| 982    | -1                | Zangarmarsh Banner (Alliance)       |
| 983    | -1                | Zangarmarsh Banner (Horde)          |
| 984    | -1                | Zangarmarsh Banner (Neutral)        |
| 985    | -1                | Caverns of Time - Thrall            |
| 986    | -1                | Caverns of Time - Durnholde         |
| 987    | -1                | Caverns of Time - Southshore Guards |
| 988    | -1                | Shadow Council Covert               |
| 989    | 67                | Keepers of Time                     |
| 990    | 57                | The Scale of the Sands              |
| 991    | -1                | Dark Portal Defender, Alliance      |
| 992    | -1                | Dark Portal Defender, Horde         |
| 993    | -1                | Dark Portal Attacker, Legion        |
| 994    | -1                | Inciter Trigger                     |
| 995    | -1                | Inciter Trigger 2                   |
| 996    | -1                | Inciter Trigger 3                   |
| 997    | -1                | Inciter Trigger 4                   |
| 998    | -1                | Inciter Trigger 5                   |
| 999    | -1                | Mana Creature                       |
| 1000   | -1                | Khadgar's Servant                   |
| 1001   | -1                | Bladespire Clan                     |
| 1002   | -1                | Ethereum Sparbuddy                  |
| 1003   | -1                | Protectorate                        |
| 1004   | -1                | Arcane Annihilator (DNR)            |
| 1005   | 68                | Friendly, Hidden                    |
| 1006   | -1                | Kirin'Var - Dathric                 |
| 1007   | -1                | Kirin'Var - Belmara                 |
| 1008   | -1                | Kirin'Var - Luminrath               |
| 1009   | -1                | Kirin'Var - Cohlien                 |
| 1010   | -1                | Servant of Illidan                  |
| 1011   | 69                | Lower City                          |
| 1012   | 70                | Ashtongue Deathsworn                |
| 1013   | -1                | Spirits of Shadowmoon 1             |
| 1014   | -1                | Spirits of Shadowmoon 2             |
| 1015   | 71                | Netherwing                          |
| 1016   | -1                | Wyrmcult                            |
| 1017   | -1                | Treant                              |
| 1018   | -1                | Leotheras Demon I                   |
| 1019   | -1                | Leotheras Demon II                  |
| 1020   | -1                | Leotheras Demon III                 |
| 1021   | -1                | Leotheras Demon IV                  |
| 1022   | -1                | Leotheras Demon V                   |
| 1023   | -1                | Azaloth                             |
| 1024   | -1                | Rock Flayer                         |
| 1025   | -1                | Flayer Hunter                       |
| 1026   | -1                | Shadowmoon Shade                    |
| 1027   | -1                | Legion Communicator                 |
| 1028   | -1                | Ravenswood Ancients                 |
| 1029   | -1                | Chess, Friendly to All Chess        |
| 1030   | -1                | Black Temple Gates - Illidari       |
| 1031   | 72                | Sha'tari Skyguard                   |
| 1032   | -1                | Area 52                             |
| 1033   | -1                | Maiev                               |
| 1034   | -1                | Skettis Shadowy Arakkoa             |
| 1035   | -1                | Skettis Arakkoa                     |
| 1036   | -1                | Dragonmaw Enemy                     |
| 1037   | 88                | Alliance Vanguard                   |
| 1038   | 73                | Ogri'la                             |
| 1039   | -1                | Ravager                             |
| 1040   | -1                | REUSE                               |
| 1041   | -1                | Frenzy                              |
| 1042   | -1                | Skyguard Enemy                      |
| 1043   | -1                | Skunk, Petunia                      |
| 1044   | -1                | Theramore Deserter                  |
| 1045   | -1                | Vrykul                              |
| 1046   | -1                | Northsea Pirates                    |
| 1047   | -1                | Tuskarr                             |
| 1048   | -1                | UNUSED                              |
| 1049   | -1                | Troll, Amani                        |
| 1050   | 74                | Valiance Expedition                 |
| 1051   | -1                | UNUSED                              |
| 1052   | 75                | Horde Expedition                    |
| 1053   | -1                | Westguard                           |
| 1054   | -1                | Spotted Gryphon                     |
| 1055   | -1                | Tamed Plaguehound                   |
| 1056   | -1                | Vrykul (Ancient Spirit 1)           |
| 1057   | -1                | Vrykul (Ancient Siprit 2)           |
| 1058   | -1                | Vrykul (Ancient Siprit 3)           |
| 1059   | -1                | CTF - Flag - Alliance               |
| 1060   | -1                | Test                                |
| 1061   | -1                | vrykul                              |
| 1062   | -1                | Vrykul Gladiator                    |
| 1063   | -1                | Valgarde Combatant                  |
| 1064   | 76                | The Taunka                          |
| 1065   | -1                | Monster, Zone Force Reaction 1      |
| 1066   | -1                | Monster, Zone Force Reaction 2      |
| 1067   | 77                | The Hand of Vengeance               |
| 1068   | 78                | Explorers' League                   |
| 1069   | -1                | Ram Racing Powerup DND              |
| 1070   | -1                | Ram Racing Trap DND                 |
| 1071   | -1                | Craig's Squirrels                   |
| 1072   | -1                | REUSE                               |
| 1073   | 79                | The Kalu'ak                         |
| 1074   | -1                | Holiday - Water Barrel              |
| 1075   | -1                | Holiday - Generic                   |
| 1076   | -1                | Iron Dwarves                        |
| 1077   | 80                | Shattered Sun Offensive             |
| 1078   | -1                | Fighting Vanity Pet                 |
| 1079   | -1                | Murloc, Winterfin                   |
| 1080   | -1                | Friendly, Force Reaction            |
| 1081   | -1                | Object, Force Reaction              |
| 1082   | 82                | REUSE                               |
| 1083   | -1                | REUSE                               |
| 1084   | -1                | Vrykul, Sea                         |
| 1085   | 81                | Warsong Offensive                   |
| 1086   | -1                | Poacher                             |
| 1087   | -1                | Holiday Monster                     |
| 1088   | -1                | Furbolg, Redfang                    |
| 1089   | -1                | Furbolg, Frostpaw                   |
| 1090   | 84                | Kirin Tor                           |
| 1091   | 83                | The Wyrmrest Accord                 |
| 1092   | -1                | Azjol-Nerub                         |
| 1093   | -1                | REUSE                               |
| 1094   | 90                | The Silver Covenant                 |
| 1095   | -1                | Grizzly Hills Trapper               |
| 1096   | -1                | REUSE                               |
| 1097   | 89                | Wrath of the Lich King              |
| 1098   | 91                | Knights of the Ebon Blade           |
| 1099   | -1                | Wrathgate Scourge                   |
| 1100   | -1                | Wrathgate Alliance                  |
| 1101   | -1                | Wrathgate Horde                     |
| 1102   | -1                | CTF - Flag - Horde                  |
| 1103   | -1                | CTF - Flag - Neutral                |
| 1104   | 92                | Frenzyheart Tribe                   |
| 1105   | 93                | The Oracles                         |
| 1106   | 94                | Argent Crusade                      |
| 1107   | -1                | Troll, Drakkari                     |
| 1108   | -1                | CoT Arthas                          |
| 1109   | -1                | CoT Stratholme Citizen              |
| 1110   | -1                | CoT Scourge                         |
| 1111   | -1                | Freya                               |
| 1112   | -1                | Mount - Taxi - Alliance             |
| 1113   | -1                | Mount - Taxi - Horde                |
| 1114   | -1                | Mount - Taxi - Neutral              |
| 1115   | -1                | Elemental, Water                    |
| 1116   | -1                | Elemental, Air                      |
| 1117   | 95                | Sholazar Basin                      |
| 1118   | 96                | Classic                             |
| 1119   | 97                | The Sons of Hodir                   |
| 1120   | -1                | Iron Giants                         |
| 1121   | -1                | Frost Vrykul                        |
| 1122   | -1                | Earthen                             |
| 1123   | -1                | Monster Referee                     |
| 1124   | 98                | The Sunreavers                      |
| 1125   | -1                | Hyldsmeet                           |
| 1126   | 99                | The Frostborn                       |
| 1127   | -1                | Orgrimmar (Alex Test)               |
| 1136   | 100               | Tranquillien Conversion             |
| 1137   | 101               | Wintersaber Conversion              |
| 1145   | -1                | Hates Everything                    |
| 1154   | 102               | Silver Covenant Conversion          |
| 1155   | 103               | Sunreavers Conversion               |
| 1156   | 104               | The Ashen Verdict                   |
| 1159   | -1                | CTF - Flag - Alliance 2             |
| 1160   | -1                | CTF - Flag - Horde 2                |


