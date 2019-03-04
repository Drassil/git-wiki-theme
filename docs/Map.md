# Map

**Map.dbc**

This DBC contains the maps list.

**Version is : 3.3.5a**

## Structure

| Column | Field                                                                                                                                                        | Type    | Notes                                                                                                                                                                                       |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | ID                                                                                                                                                           | Integer |                                                                                                                                                                                             |
| 2      | InternalName                                                                                                                                                 | String  | reference to World\\Map\\ \[...\] \\                                                                                                                                                        |
| 3      | Flags                                                                                                                                                        | Integer | 0x100 - CAN\_CHANGE\_PLAYER\_DIFFICULTY                                                                                                                                                     |
| 4      | Type                                                                                                                                                         | Integer | 0: none, 1: party, 2: raid, 3: pvp, 4: arena, &gt;=5: none (official from "IsInInstance()")                                                                                                 |
| 5      | IsBattleground                                                                                                                                               | Integer | Boolean (1 = True, 0 = False)                                                                                                                                                               |
| 6-22   | Name                                                                                                                                                         | String  | [Localization](http://archive.trinitycore.info/index.php?title=Localization.dbc_tc2&action=edit&redlink=1 "Localization.dbc tc2 (page does not exist)"); displayed on World Map for example |
| 23     | [AreaTableID](http://archive.trinitycore.info/AreaTable.dbc_tc2 "AreaTable.dbc tc2")                                                                         | Integer | Ref-ID;                                                                                                                                                                                     |
| 24-40  | MapDescriptionA                                                                                                                                              | String  | [Localization](http://archive.trinitycore.info/index.php?title=Localization.dbc_tc2&action=edit&redlink=1 "Localization.dbc tc2 (page does not exist)")                                     |
| 41-57  | MapDescriptionH                                                                                                                                              | String  | [Localization](http://archive.trinitycore.info/index.php?title=Localization.dbc_tc2&action=edit&redlink=1 "Localization.dbc tc2 (page does not exist)")                                     |
| 58     | [LoadingScreen](http://archive.trinitycore.info/index.php?title=LoadingScreens.dbc_tc2&action=edit&redlink=1 "LoadingScreens.dbc tc2 (page does not exist)") | Integer | Ref-ID; The LoadingScreen to Display                                                                                                                                                        |
| 59     | BGMapIconScale                                                                                                                                               | Float   |                                                                                                                                                                                             |
| 60     | GhostEntranceMap                                                                                                                                             | Integer | Ref-ID; Points to column 1, -1 if none                                                                                                                                                      |
| 61     | GhostEntranceX                                                                                                                                               | Float   | The X-Coord of the instance entrance                                                                                                                                                        |
| 62     | GhostEntranceY                                                                                                                                               | Float   | The Y-Coord of the instance entrance                                                                                                                                                        |
| 63     | TimeOfDayOverride                                                                                                                                            | Integer | Set to -1 for everything but Orgrimmar and Dalaran arena. For those, the time of day will change to this.                                                                                   |
| 64     | Expansion                                                                                                                                                    | Integer | Classic: 0; BC: 1; WotLK: 2                                                                                                                                                                 |
| 65     | RaidOffset                                                                                                                                                   | Integer | Instance-Reset?                                                                                                                                                                             |
| 66     | MaxPlayers                                                                                                                                                   | Integer |                                                                                                                                                                                             |

## Content

| ID  | Type | Name                                               | AreaTableID | Expansion | MaxPlayers |
|-----|------|----------------------------------------------------|-------------|-----------|------------|
| 0   | 0    | Eastern Kingdoms                                   | 0           | 0         | 0          |
| 1   | 0    | Kalimdor                                           | 0           | 0         | 0          |
| 13  | 0    | Testing                                            | 3817        | 0         | 0          |
| 25  | 0    | Scott Test                                         | 0           | 0         | 0          |
| 30  | 3    | Alterac Valley                                     | 0           | 0         | 0          |
| 33  | 1    | Shadowfang Keep                                    | 0           | 0         | 10         |
| 34  | 1    | Stormwind Stockade                                 | 717         | 0         | 10         |
| 35  | 0    | &lt;unused&gt;StormwindPrison                      | 717         | 0         | 0          |
| 36  | 1    | Deadmines                                          | 0           | 0         | 10         |
| 37  | 0    | Azshara Crater                                     | 0           | 0         | 0          |
| 42  | 0    | Collin's Test                                      | 0           | 0         | 0          |
| 43  | 1    | Wailing Caverns                                    | 718         | 0         | 10         |
| 44  | 1    | &lt;unused&gt; Monastery                           | 0           | 0         | 10         |
| 47  | 1    | Razorfen Kraul                                     | 0           | 0         | 10         |
| 48  | 1    | Blackfathom Deeps                                  | 719         | 0         | 10         |
| 70  | 1    | Uldaman                                            | 1337        | 0         | 10         |
| 90  | 1    | Gnomeregan                                         | 721         | 0         | 10         |
| 109 | 1    | Sunken Temple                                      | 1477        | 0         | 10         |
| 129 | 1    | Razorfen Downs                                     | 0           | 0         | 10         |
| 169 | 2    | Emerald Dream                                      | 0           | 0         | 40         |
| 189 | 1    | Scarlet Monastery                                  | 0           | 0         | 10         |
| 209 | 1    | Zul'Farrak                                         | 0           | 0         | 10         |
| 229 | 1    | Blackrock Spire                                    | 1583        | 0         | 10         |
| 230 | 1    | Blackrock Depths                                   | 1584        | 0         | 5          |
| 249 | 2    | Onyxia's Lair                                      | 2159        | 0         | 40         |
| 269 | 1    | Opening of the Dark Portal                         | 0           | 1         | 5          |
| 289 | 1    | Scholomance                                        | 0           | 0         | 5          |
| 309 | 2    | Zul'Gurub                                          | 1977        | 0         | 20         |
| 329 | 1    | Stratholme                                         | 0           | 0         | 5          |
| 349 | 1    | Maraudon                                           | 2100        | 0         | 10         |
| 369 | 0    | Deeprun Tram                                       | 2257        | 0         | 0          |
| 389 | 1    | Ragefire Chasm                                     | 2437        | 0         | 10         |
| 409 | 2    | Molten Core                                        | 2717        | 0         | 40         |
| 429 | 1    | Dire Maul                                          | 2557        | 0         | 5          |
| 449 | 0    | Alliance PVP Barracks                              | 2918        | 0         | 0          |
| 450 | 0    | Horde PVP Barracks                                 | 2917        | 0         | 0          |
| 451 | 0    | Development Land                                   | 0           | 2         | 0          |
| 469 | 2    | Blackwing Lair                                     | 2677        | 0         | 40         |
| 489 | 3    | Warsong Gulch                                      | 3277        | 0         | 0          |
| 509 | 2    | Ruins of Ahn'Qiraj                                 | 3429        | 0         | 20         |
| 529 | 3    | Arathi Basin                                       | 3358        | 0         | 0          |
| 530 | 0    | Outland                                            | 0           | 1         | 0          |
| 531 | 2    | Ahn'Qiraj Temple                                   | 3428        | 0         | 40         |
| 532 | 2    | Karazhan                                           | 3457        | 1         | 10         |
| 533 | 2    | Naxxramas                                          | 3456        | 2         | 25         |
| 534 | 2    | The Battle for Mount Hyjal                         | 616         | 1         | 25         |
| 540 | 1    | Hellfire Citadel: The Shattered Halls              | 3714        | 1         | 5          |
| 542 | 1    | Hellfire Citadel: The Blood Furnace                | 3713        | 1         | 5          |
| 543 | 1    | Hellfire Citadel: Ramparts                         | 3562        | 1         | 5          |
| 544 | 2    | Magtheridon's Lair                                 | 3836        | 1         | 25         |
| 545 | 1    | Coilfang: The Steamvault                           | 3715        | 1         | 5          |
| 546 | 1    | Coilfang: The Underbog                             | 3716        | 1         | 5          |
| 547 | 1    | Coilfang: The Slave Pens                           | 3717        | 1         | 5          |
| 548 | 2    | Coilfang: Serpentshrine Cavern                     | 3607        | 1         | 25         |
| 550 | 2    | Tempest Keep                                       | 3845        | 1         | 25         |
| 552 | 1    | Tempest Keep: The Arcatraz                         | 3848        | 1         | 5          |
| 553 | 1    | Tempest Keep: The Botanica                         | 3847        | 1         | 5          |
| 554 | 1    | Tempest Keep: The Mechanar                         | 3849        | 1         | 5          |
| 555 | 1    | Auchindoun: Shadow Labyrinth                       | 3789        | 1         | 5          |
| 556 | 1    | Auchindoun: Sethekk Halls                          | 3791        | 1         | 5          |
| 557 | 1    | Auchindoun: Mana-Tombs                             | 3792        | 1         | 5          |
| 558 | 1    | Auchindoun: Auchenai Crypts                        | 3790        | 1         | 5          |
| 559 | 4    | Nagrand Arena                                      | 0           | 0         | 0          |
| 560 | 1    | The Escape From Durnholde                          | 267         | 1         | 5          |
| 562 | 4    | Blade's Edge Arena                                 | 3702        | 0         | 0          |
| 564 | 2    | Black Temple                                       | 0           | 1         | 25         |
| 565 | 2    | Gruul's Lair                                       | 3923        | 1         | 25         |
| 566 | 3    | Eye of the Storm                                   | 0           | 1         | 0          |
| 568 | 2    | Zul'Aman                                           | 0           | 1         | 10         |
| 571 | 0    | Northrend                                          | 0           | 2         | 0          |
| 572 | 4    | Ruins of Lordaeron                                 | 0           | 0         | 0          |
| 573 | 0    | ExteriorTest                                       | 0           | 2         | 0          |
| 574 | 1    | Utgarde Keep                                       | 0           | 2         | 5          |
| 575 | 1    | Utgarde Pinnacle                                   | 0           | 2         | 5          |
| 576 | 1    | The Nexus                                          | 4265        | 2         | 5          |
| 578 | 1    | The Oculus                                         | 0           | 2         | 5          |
| 580 | 2    | The Sunwell                                        | 0           | 1         | 25         |
| 582 | 0    | Transport: Rut'theran to Auberdine                 | 0           | 0         | 0          |
| 584 | 0    | Transport: Menethil to Theramore                   | 0           | 0         | 0          |
| 585 | 1    | Magister's Terrace                                 | 0           | 1         | 5          |
| 586 | 0    | Transport: Exodar to Auberdine                     | 0           | 0         | 0          |
| 587 | 0    | Transport: Feathermoon Ferry                       | 0           | 0         | 0          |
| 588 | 0    | Transport: Menethil to Auberdine                   | 0           | 0         | 0          |
| 589 | 0    | Transport: Orgrimmar to Grom'Gol                   | 0           | 0         | 0          |
| 590 | 0    | Transport: Grom'Gol to Undercity                   | 0           | 0         | 0          |
| 591 | 0    | Transport: Undercity to Orgrimmar                  | 0           | 0         | 0          |
| 592 | 0    | Transport: Borean Tundra Test                      | 0           | 0         | 0          |
| 593 | 0    | Transport: Booty Bay to Ratchet                    | 0           | 0         | 0          |
| 594 | 0    | Transport: Howling Fjord Sister Mercy (Quest)      | 0           | 2         | 0          |
| 595 | 1    | The Culling of Stratholme                          | 0           | 2         | 5          |
| 596 | 0    | Transport: Naglfar                                 | 0           | 2         | 0          |
| 597 | 0    | Craig Test                                         | 0           | 0         | 0          |
| 598 | 1    | Sunwell Fix (Unused)                               | 0           | 1         | 5          |
| 599 | 1    | Halls of Stone                                     | 0           | 2         | 5          |
| 600 | 1    | Drak'Tharon Keep                                   | 0           | 2         | 5          |
| 601 | 1    | Azjol-Nerub                                        | 0           | 2         | 5          |
| 602 | 1    | Halls of Lightning                                 | 0           | 2         | 5          |
| 603 | 2    | Ulduar                                             | 0           | 2         | 5          |
| 604 | 1    | Gundrak                                            | 0           | 2         | 5          |
| 605 | 0    | Development Land (non-weighted textures)           | 0           | 0         | 0          |
| 606 | 0    | QA and DVD                                         | 0           | 2         | 0          |
| 607 | 3    | Strand of the Ancients                             | 0           | 2         | 0          |
| 608 | 1    | Violet Hold                                        | 0           | 2         | 5          |
| 609 | 0    | Ebon Hold                                          | 0           | 2         | 0          |
| 610 | 0    | Transport: Tirisfal to Vengeance Landing           | 0           | 0         | 0          |
| 612 | 0    | Transport: Menethil to Valgarde                    | 0           | 0         | 0          |
| 613 | 0    | Transport: Orgrimmar to Warsong Hold               | 0           | 0         | 0          |
| 614 | 0    | Transport: Stormwind to Valiance Keep              | 0           | 0         | 0          |
| 615 | 2    | The Obsidian Sanctum                               | 0           | 2         | 0          |
| 616 | 2    | The Eye of Eternity                                | 0           | 2         | 5          |
| 617 | 4    | Dalaran Sewers                                     | 0           | 0         | 0          |
| 618 | 4    | The Ring of Valor                                  | 0           | 0         | 0          |
| 619 | 1    | Ahn'kahet: The Old Kingdom                         | 0           | 2         | 0          |
| 620 | 0    | Transport: Moa'ki to Unu'pe                        | 0           | 2         | 0          |
| 621 | 0    | Transport: Moa'ki to Kamagua                       | 0           | 2         | 0          |
| 622 | 0    | Transport: Orgrim's Hammer                         | 0           | 2         | 0          |
| 623 | 0    | Transport: The Skybreaker                          | 0           | 2         | 0          |
| 624 | 2    | Vault of Archavon                                  | 0           | 2         | 0          |
| 628 | 3    | Isle of Conquest                                   | 0           | 2         | 0          |
| 631 | 2    | Icecrown Citadel                                   | 0           | 2         | 0          |
| 632 | 1    | The Forge of Souls                                 | 0           | 2         | 0          |
| 641 | 0    | Transport: Alliance Airship BG                     | 0           | 2         | 0          |
| 642 | 0    | Transport: HordeAirshipBG                          | 0           | 2         | 0          |
| 647 | 0    | Transport: Orgrimmar to Thunder Bluff              | 0           | 2         | 0          |
| 649 | 2    | Trial of the Crusader                              | 0           | 2         | 0          |
| 650 | 1    | Trial of the Champion                              | 0           | 2         | 0          |
| 658 | 1    | Pit of Saron                                       | 0           | 2         | 0          |
| 668 | 1    | Halls of Reflection                                | 0           | 2         | 0          |
| 672 | 0    | Transport: The Skybreaker (Icecrown Citadel Raid)  | 0           | 2         | 0          |
| 673 | 0    | Transport: Orgrim's Hammer (Icecrown Citadel Raid) | 0           | 2         | 0          |
| 712 | 0    | Transport: The Skybreaker (IC Dungeon)             | 0           | 2         | 0          |
| 713 | 0    | Transport: Orgrim's Hammer (IC Dungeon)            | 0           | 2         | 0          |
| 718 | 0    | Trasnport: The Mighty Wind (Icecrown Citadel Raid) | 0           | 2         | 0          |
| 723 | 0    | Stormwind                                          | 0           | 0         | 0          |
| 724 | 2    | The Ruby Sanctum                                   | 0           | 2         | 0          |


