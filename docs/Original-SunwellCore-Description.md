_This is the content of original page published by sunwell team on their sunwell.pl site when core has been released to the public. It has been stored here just as an archived resource
You can access to the original html page here: http://www.azerothcore.org/pages/sunwell.pl/_

<div id="content"> 

<div class="page-title">Why <span style="font-size: 28px;">S</span>unwell<span style="font-size: 28px;">C</span>ore</div>

‣ [Current development state](#devstate)  
‣ [Server performance](#performance)  
‣ [MoveMaps](#movemaps)  
‣ [Spell system](#spellsystem)  
‣ [Spell stacking](#spellstacking)  
‣ [HoT and DoT calculation](#hotdot)  
‣ [Instance ID system](#instanceid)  
‣ [Dungeon Finder](#dungeonfinder)  
‣ [Battleground Queues](#bgqueues)  
‣ [Transport System](#transports)  
‣ [Instances](#instances)  
‣ [Quests](#quests)  
‣ [Pets](#pets)  
‣ [Battlegrounds and arenas](#battlegrounds)  
‣ [Dynamic MMR](#dynamicmmr)  
‣ [Achievements](#achievements)  
‣ [Ingame seasonal events](#events)  
‣ [Wintergrasp](#wintergrasp)  
‣ [Raid Browser](#raidbrowser)  
‣ [Arena Spectator](#arenaspectator)  
‣ [Summary](#summary)  
‣ [Download](#download)  

<a name="devstate"></a>Current development state

The most rational way to assess the current development state would be to check our BugTracker statistics. Over the years thousands of players have been reporting all spotted bugs. At the moment of writing this, there are over 5600 bug reports fixed and only 25 bug reports open (unresolved). That's over 99% of bugs fixed! The BugTracker hasn't been cleared since May 2011.  

Besides fixing the most obvious part, which is the content (quests, instances, spells, etc.), we have managed to rewrite major emulator structures and systems to eliminate more general bugs and problems, and also to optimize it. You'll find more informations below.

<a name="performance"></a>Server performance

Firstly, we will have to explain what "update time diff" is (we usually refer to it as "diff" in short). Update time diff is the time it takes the server to process all current tasks. The longer the diff is, the longer you wait for your actions to be processed (running, casting spells, etc.) and the less dynamic the game is. Diff adds up to your network latency (explicitly shown in the game client) and creates final delay you experience while playing. You can check current and average diff (average in the last ~10 seconds) using ".server info" command ingame.  

We have managed to lower diffs to ~20ms (milliseconds) on average @ 2500 players online. Here is a [screenshot](img/diff/diff_2015-11-08.jpg). We expect diffs to be ~40ms on average @ 4000 players online. We say "expect", because we haven't yet reached 4k since latest optimizations. However, we can guarantee the core easily supports 4000 players online, because it has already supported in the past. Here is a screenshot of 4000 players online with diffs ~65ms on average: [click](img/diff/diff_2014-01-06.jpg).  

Such exceptionally low diffs were achieved by countless optimizations over the years. Fortunately, we don't have to multiply our player counters by 2 to build up hype, as some popular servers do.

<a name="movemaps"></a>MoveMaps

MoveMaps have been coded and enabled in the whole game world since May 2013 and haven't been changed since then. Nice things to mention:

*   working properly in standard places,
*   working in water,
*   working on the boundaries of water/land,
*   proper charge pathing,
*   NPCs take into consideration path existence when selecting a target from threat list,
*   NPCs evade after the target is unreachable for a few seconds, not sooner,
*   slightly different rules for pets.

Current MoveMaps implementation is our own, original work. We are using a publicly available library to do the path calculations, while the usage of the library and incorporating it into core systems is our work. Thanks to that the MoveMaps are very fast, having almost no impact on server's performance.  

MoveMaps are not perfect though, and never will be. They depend on pre-generated representation of visual textures, which is not ideal is some places.

<a name="spellsystem"></a>Spell system

Generally speaking, we have rewritten spell, talent and dual talent specialization systems (September 2014). To be specific, we have completely rewritten the way spells and talents (both in core and database) are stored, added and removed, and rewritten dual talent specialization and talent resetting. This fixed very serious and unacceptable bugs, such as:

*   talent bonuses applied twice,
*   talents working without any points spent,
*   doubled glyph effects,
*   possessing spells which should have been removed from a character,
*   and some more.

Players hardly notice any difference, however the changes are significant, prevent many bugs, and positively affect balance in PvP and PvE.  

Besides that, fully working character spells, talents and glyphs have always been our top priority. It happens that from time to time a new bug is discovered and reported. It is then fixed as soon as possible.

<a name="spellstacking"></a>Spell stacking

We wrote our own spell stacking system (November 2012). This greatly influences balance in PvP and makes PvE harder, as it should be. Features:

*   Allows more sophisticated stacking rules, to reproduce all rules from the official servers.
*   Fixes stacking of many spells.
*   If required, allows to have multiple auras applied that shouldn't stack with each other. In such situations only the strongest effects of all the auras are working.
*   Implemented "A more powerful spell is already active".
*   Faster and simpler from technical point of view.
*   Working fully blizzlike.

Examples:

*   Divine Spirit (80 spirit) + Fel Intelligence (48 intellect + 64 spirit) = 80 spirit + 48 intellect.
*   Battle Shout won't be applied to characters having a stronger Blessing of Might. Characters with a weaker effect or no effect at all will gain the buff properly.
*   Blessing of Kings and Blessing of Sanctuary will coexist on the target because of other bonuses, but bonus statistics won't accumulate.
*   Faerie Fire and Faerie Fire (Feral) from any number of casters will coexist on the target, because they give additional bonuses to the caster when having a talent, but the -5% armor effect won't accumulate.

<a name="hotdot"></a>HoT and DoT calculation

We reworked HoT and DoT calculation (November 2012) to make it work the same as on the official servers. This influences balance in PvP and PvE. Changes:

*   Caster bonuses are calculated once, when the spell is cast, and are constant for the duration of the effect, not affected by the caster losing/gaining any buffs.
*   Target modifiers and bonuses affect the DoT/HoT up to date.
*   Percentage caster bonuses to damage/heal and to crit chance remain constant after first calculation, even if the aura is refreshed using some talents.
*   When refreshing DoT/HoT using talents, Spell Power bonus is recalculated at the moment of refreshing (and then constant again for the new duration).
*   DoTs i HoTs are now independent of caster existence. Thanks to that you may for example apply a DoT using Dancing Rune Weapon a second before the DRW disappears and the DoT will correctly deal damage afterwards.
*   Introduces "DoT rolling" mechanic, which is important during raids.
*   Fully blizzlike.

<a name="instanceid"></a>Instance ID system

We have completely rewritten instance id system and character binding (December 2014). It eliminated some major bugs and fixed various related problems:

*   fixed disappearing permanent instance binds (which allowed to run the same raid few times a week),
*   fixed automatic instance id reset randomly not working,
*   corrected bugs in creation, loading, closing and resetting of instance maps,
*   corrected bugs in group saving, loading and storing group data,
*   fixed a few other problems spotted on the occasion, including a few crashes.

We have also implemented Instance Lock Extension function, allowing you to extend selected instance id periods. Instance Lock Extension allows every group to progress raids at their own pace. This was possible thanks to rewriting whole instance id system and eliminating huge amount of bugs in it. We also fixed displaying of global id reset times in the in-game calendar and displaying of your own instance lockout periods taking into account current extensions.

<a name="dungeonfinder"></a>Dungeon Finder

We have fixed a lot of problems with the Dungeon Finder. The most significant change is our own system of queueing and joining players/groups together into DF groups. The publicly available one, copied to every emulator, performs poorly with lots of players queued. During peak hours, with thousands of players online, it checked less than 1% of all possible combinations of queued players. Our own system checks them all, properly forms groups and is hundreds of times faster. The changes (May 2013) include:

*   Properly joining players together into DF groups, no matter the number of players queued.
*   After a proposal fails, players who accepted it are put back to the beginning of the queue.
*   You can replace missing group members while inside the instance (by queueing DF again). New members will be teleported to leader's current location.
*   Dungeon rewards working for every dungeon, even the low level ones.
*   DF won't put groups into instances with mobs/bosses killed.
*   Implemented minimum level of gear requirement (only when accessing instances through DF).
*   Vote to kick works properly, with a reason to kick asked.
*   There are no bugs caused by being disconnected, entering and leaving the instance, and kicking or refilling players.
*   Luck of the Draw, Dungeon Cooldown and Dungeon Deserter buffs are working properly.
*   Groups are teleported to proper starting locations.

<a name="bgqueues"></a>Battleground Queues

We have rewritten Battleground Queue system and everything related to it (July 2015). Not only lots of bugs were fixed, but also many improvements were introduced. A list of main changes:

*   Joined random and specific queues. Random queue will now gather groups together with specific queues.
*   Battlegrounds are created only after required amount of players is gathered for a particular Battleground. This helps to avoid premature closing of large Battlegrounds, caused by insufficient number of participants. In case of lower number of players queued, large Battlegrounds simply won't be created.
*   Already created Battlegrounds with free slots are filled up first using queued players. Only then new ones are created. When filling, Battlegrounds with more free slots (in percentage) are prioritized.
*   Fixed conditions for queueing as a group and queueing alone. You can queue for two different Battlegrounds at the same time without any bugs (as a group and alone).
*   Rewritten algorithms for assembling teams from queued groups/players. This applies to premade Battlegrounds, standard Battlegrounds, non-rated arenas and non-rated arenas against the same faction.
*   Fixed balancing of players in the opposite teams on Battlegrounds. The algorithm was reworked, and now takes into account actually invited characters and characters being teleported at the moment.
*   Fixed exceeding maximum number of players on either team.
*   Always sending proper queue and bg status to the game client.
*   And some more... ;)

<a name="transports"></a>Transport System

For the typical motion transports (zeppelins, ships, etc.), we have fixed position desynchronization (visual vs actual) affecting a few of them, vmap issues and some bugs with fighting on such transports moving.  

But most importantly, we have implemented static transports (July 2015), ie. elevators and trams. This means that players, pets, totems, traps, etc., now move along with elevators. Their position is updated both visually and actually according to the movement of the elevator. This applies to all kinds of transport, in every state, for any parameters, any rotation of the transport, rotation of it's path and rotation of it's animation. Also Line of Sight is properly blocked in the current position of every transport. This will surely be noticeable on Ring of Valor arena.

<a name="instances"></a>Instances

Instead of waiting for hundreds of bugs to be reported, we decided to entirely rewrite every instance there is in the game. And by entirely we mean entirely (bosses, trash, scenes, achievements, etc.). Up to this moment, we have managed to rewrite:

*   WotLK dungeons: 16 of 16
*   WotLK raids: 9 of 9
*   TBC dungeons: 16 of 16
*   TBC raids: 6 of 9
*   Vanilla dungeons: 17 of 19
*   Vanilla raids: 0 of 5

Every instance in the game is open and available. Exact list of their current status is below.  

**WotLK dungeons:**

*   Halls of Reflection - <span style="color: green">rewritten and available</span>
*   Pit of Saron - <span style="color: green">rewritten and available</span>
*   The Forge of Souls - <span style="color: green">rewritten and available</span>
*   Trial of the Champion - <span style="color: green">rewritten and available</span>
*   The Culling of Stratholme - <span style="color: green">rewritten and available</span>
*   Utgarde Pinnacle - <span style="color: green">rewritten and available</span>
*   Halls of Lightning - <span style="color: green">rewritten and available</span>
*   The Oculus - <span style="color: green">rewritten and available</span>
*   Halls of Stone - <span style="color: green">rewritten and available</span>
*   Gundrak - <span style="color: green">rewritten and available</span>
*   Violet Hold - <span style="color: green">rewritten and available</span>
*   Drak'Tharon Keep - <span style="color: green">rewritten and available</span>
*   Ahn'kahet: The Old Kingdom - <span style="color: green">rewritten and available</span>
*   Azjol-Nerub - <span style="color: green">rewritten and available</span>
*   The Nexus - <span style="color: green">rewritten and available</span>
*   Utgarde Keep - <span style="color: green">rewritten and available</span>

**WotLK raids:**

*   The Ruby Sanctum - <span style="color: green">rewritten and available</span>
*   Icecrown Citadel - <span style="color: green">rewritten and available</span>
*   Onyxia's Lair - <span style="color: green">rewritten and available</span>
*   Trial of the Crusader - <span style="color: green">rewritten and available</span>
*   Ulduar - <span style="color: green">rewritten and available</span>
*   The Eye of Eternity - <span style="color: green">rewritten and available</span>
*   Vault of Archavon - <span style="color: green">rewritten and available</span>
*   The Obsidian Sanctum - <span style="color: green">rewritten and available</span>
*   Naxxramas - <span style="color: green">rewritten and available</span>

**TBC dungeons:**

*   Magisters' Terrace - <span style="color: green">rewritten and available</span>
*   The Black Morass - <span style="color: green">rewritten and available</span>
*   The Arcatraz - <span style="color: green">rewritten and available</span>
*   The Botanica - <span style="color: green">rewritten and available</span>
*   The Mechanar - <span style="color: green">rewritten and available</span>
*   Old Hillsbrad Foothills - <span style="color: green">rewritten and available</span>
*   Shadow Labyrinth - <span style="color: green">rewritten and available</span>
*   The Shattered Halls - <span style="color: green">rewritten and available</span>
*   The Steamvault - <span style="color: green">rewritten and available</span>
*   Sethekk Halls - <span style="color: green">rewritten and available</span>
*   Auchenai Crypts - <span style="color: green">rewritten and available</span>
*   Mana-Tombs - <span style="color: green">rewritten and available</span>
*   The Underbog - <span style="color: green">rewritten and available</span>
*   The Slave Pens - <span style="color: green">rewritten and available</span>
*   The Blood Furnace - <span style="color: green">rewritten and available</span>
*   Hellfire Ramparts - <span style="color: green">rewritten and available</span>

**TBC raids:**

*   Sunwell Plateau - <span style="color: green">rewritten and available</span>
*   Black Temple - <span style="color: green">rewritten and available</span>
*   The Battle for Mount Hyjal - **<span style="color: #BC9000">available, not rewritten yet</span>**
*   Tempest Keep: The Eye - <span style="color: green">rewritten and available</span>
*   Serpentshrine Cavern - <span style="color: green">rewritten and available</span>
*   Magtheridon's Lair - <span style="color: green">rewritten and available</span>
*   Gruul's Lair - <span style="color: green">rewritten and available</span>
*   Zul'Aman - **<span style="color: #BC9000">available, not rewritten yet</span>**
*   Karazhan - **<span style="color: #BC9000">available, not rewritten yet</span>**

**Vanilla dungeons:**

*   Scholomance - <span style="color: green">rewritten and available</span>
*   Stratholme - <span style="color: green">rewritten and available</span>
*   Dire Maul - <span style="color: green">rewritten and available</span>
*   Blackrock Spire - **<span style="color: #BC9000">available, not rewritten yet</span>**
*   Blackrock Depths - **<span style="color: #BC9000">available, not rewritten yet</span>**
*   Temple of Atal'Hakkar - <span style="color: green">rewritten and available</span>
*   Maraudon - <span style="color: green">rewritten and available</span>
*   Zul'Farrak - <span style="color: green">rewritten and available</span>
*   Uldaman - <span style="color: green">rewritten and available</span>
*   Razorfen Downs - <span style="color: green">rewritten and available</span>
*   The Scarlet Monastery - <span style="color: green">rewritten and available</span>
*   Razorfen Kraul - <span style="color: green">rewritten and available</span>
*   Gnomeregan - <span style="color: green">rewritten and available</span>
*   The Stockade - <span style="color: green">rewritten and available</span>
*   Blackfathom Deeps - <span style="color: green">rewritten and available</span>
*   Shadowfang Keep - <span style="color: green">rewritten and available</span>
*   The Deadmines - <span style="color: green">rewritten and available</span>
*   Wailing Caverns - <span style="color: green">rewritten and available</span>
*   Ragefire Chasm - <span style="color: green">rewritten and available</span>

**Vanilla raids:**

*   Temple of Ahn'Qiraj - **<span style="color: #BC9000">available, not rewritten yet</span>**
*   Ruins of Ahn'Qiraj - **<span style="color: #BC9000">available, not rewritten yet</span>**
*   Blackwing Lair - **<span style="color: #BC9000">available, not rewritten yet</span>**
*   Molten Core - **<span style="color: #BC9000">available, not rewritten yet</span>**
*   Zul'Gurub - **<span style="color: #BC9000">available, not rewritten yet</span>**

We fixed some reported bugs in the not yet rewritten instances, but we are aware more needs to be done. Further reporting bugs in those instances is pointless, because they will be totally rewritten anyway. This list will then be updated accordingly.

<a name="quests"></a>Quests

The Loremaster achievement has been obtainable since November 2012\. We've been fixing quests from the very beginning. We always try to fix them with proper visual effects, texts, waypoints, and so on. In some cases doing just the visual effects for a single quest took hours, and we did it anyway.  

To our best knowledge, there's only one quest in the game that is not working, namely: The Battle For The Undercity. It is possible that some quests get stuck under certain circumstances, or are missing some visuals, or worked but got broken by an update. In such cases please report them on our BugTracker. We will fix them as soon as possible.

<a name="pets"></a>Pets

Various fixes have been done to pets in order to achieve their correct behavior:

*   If a pet is ordered to cast a spell, but the target is out of range or not in LoS, the pet will run up to the target and then cast the ordered spell (no need to order it again).
*   Properly working defensive stance (aggressive and passive too).
*   All pets have AoE damage reduction aura.
*   Correctly inheriting owner's statistics.
*   Pets react to crowd control auras on targets.
*   Correct pet size scaling with it's level.
*   Fixed controlling pets if one of them is dead (eg. Shaman's Feral Spirit).
*   Fixed dismissing dead pets.
*   Damage done by and to pets is properly counted in Battleground statistics.
*   And many more.

Moreover, nearly all non-combat pets have their custom animations and behaviors scripted.

<a name="battlegrounds"></a>Battlegrounds and arenas

We have completely rewritten Warsong Gulch, Arathi Basin and Eye of the Storm, and fixed reported bugs in the rest of the Battlegrounds. We consider rewriting the remaining three in the future, just to be sure everything is top-notch.  

All Battleground achievements are working. Experience is properly awarded on Battlegrounds for killing, various bg actions and winning/losing. There wasn't much to fix on arenas. We have scripted the Ring of Valor arena - working elevators/pillars, MoveMaps and LoS smoothly matching pillar movement.  

Battleground Queues and Arena Matching have been rewritten, which is described in detail in other sections on this page.

<a name="dynamicmmr"></a>Dynamic MMR

MMR (Match Making Rating) is a rating for each player that changes every time you play an arena battle. Your MMR increases when you win, and it decreases when you lose. It is used to pair teams of similar skill. But there's a dillema: lower allowed difference in MMR results in fairer matches, but increases waiting time in the queue. Solution: Dynamic MMR.  

The allowed MMR difference between two teams grows as you wait in the queue. The most adequate opponents are searched for in larger and larger span of MMR values as you wait. Previous algorithm for matching arena teams had a constant MMR difference set and a lot of defects, so we rewrote it completely.

<a name="achievements"></a>Achievements

Every achievement in the game should be obtainable. To give you an example, just imagine ~140 achievements in Ulduar instance alone and every one of them working properly. We have paid close attention to achievements in every instance we have rewritten. There may be some difficulties with obtaining achievements in the not yet rewritten instances, but they should be doable. Achievements of all the categories are working (General, Quests, Exploration, PvP, Dungeons & Raids, Professions, Reputation, World Events).

<a name="events"></a>Ingame seasonal events

We have rewritten every seasonal event in the game. All achievements from the events are working, together with the "What A Long, Strange Trip It's Been" achievement, awarded for completing all seasonal achievements. The list of available and working seasonal events:

*   Lunar Festival
*   Love is in the Air
*   Noblegarden
*   Children's Week
*   Midsummer Fire Festival
*   Brewfest
*   Hallow's End
*   Day of the Dead
*   Pilgrim's Bounty
*   Feast of Winter Veil

The following are also fixed:

*   Gurubashi Arena event
*   Stranglethorn Fishing Extravaganza
*   Kalu'ak Fishing Derby
*   Elemental Invasions from Vanilla

<a name="wintergrasp"></a>Wintergrasp

Countless fixes have been applied to the Wintergrasp. Here are the most important ones:

*   Increased visibility distance.
*   Fixed Wintergrasp ranks. Higher ranks are gained for killing players, turrets and Keep NPCs.
*   Fixed applying Tenacity and fixed it's formula.
*   Players are always rewarded, regardless being dead or alive.
*   All players in range are credited for certain actions.
*   To drive vehicles you have to have adequate rank obtained. Additional vehicle seats do not require ranks.
*   Players are automatically put into vehicles after they are built.
*   Fixed trajectory spells target selection.
*   Fixed additional bonuses for damaging/destroying towers.
*   Wintergrasp weekly quests are pooled (only 1 weekly available at a time) and available both inside and outside the Fortress.
*   Player corpses can be looted.
*   Minor and Major Elementals disappear during the fight.
*   Major Elementals are only visible to the faction controlling the Wintergrasp.
*   Lots of general changes to the vehicles.
*   And many more...

<a name="raidbrowser"></a>Raid Browser

We share with you written from scratch Raid Browser and our AddOn for it (February 2015).  
Raid Browser can be used to find players interested in doing specific raids from any expansion. It's a kind of announcement table, where you can list yourself alone or as group, adding a brief comment (eg. your requirements, expectations, gs, "I have achievement X").  
Important: Raid Browser is not Raid Finder. It won't assemble groups. You still have full control over choosing group members.  

Raid Browser is available after typing /rb or in Social (O) -> Raid tab -> Raid Browser.  

Why is it worth using?

*   You get a lot of info about a character before even writing a private message. About every listed player in RB you will get such informations as: level, class, talents, avg itemLevel, role (tank / healer / dps), comment, a list of killed bosses if the player has an ID, spell power, attack power, heal power, melee crit rating, ranged crit rating, spell crit rating, defense skill, dodge rating, block rating, parry rating, haste rating, expertise rating and other.
*   No need to read repeated spam on lfg channel.

Raid Browser is working without the AddOn, but the default interface won't display all of this data.  
Link to the AddOn: [download](https://mega.nz/#!DA8AHQ4Y!4YDX5jxztWQPDEvnEp3HqRt7_6DtzU-q3FyvMpjL7bg).  
Screenshots: [solo example](img/addons/RB_solo.jpg), [group example](img/addons/RB_group.jpg).  

We encourage to use Raid Browser and propagate using it. This way everyone will more easily find a group.

<a name="arenaspectator"></a>Arena Spectator

We share with you our Arena Spectator system and an AddOn for it (December 2013).  
Arena Spectator can be used to watch live arena matches with all the details displayed.  
Link do the AddOn: [download](https://mega.nz/#!TY90EIxQ!_cs7moweSoRrAIbC4FnFXImE7IEFWiKI8lJRvsVCaxA).  
To leave the arena before it ends, type: /g .sp leave

<a name="summary"></a>Summary

Sounds too good to be true? Check it out yourself ;) With passion and dedication, we've been doing as much as we could and have always strived to deliver highest quality possible. There are no promises. Everything is already here. If you are looking for the best Wrath of the Lich King experience, you have come to the right place.  

Reading through the changes is relatively quick, compared to actually making them. Lots of the changes described by a single sentence took many days and sleepless nights. We would like to clearly state this: the server is not perfect. No server will ever be. We are doing our best. No more and no less.

<a name="download"></a>Download

*   [Core](https://mega.nz/#!PENFDRAC!AjFd5pgRtNpqxiq41Kbc6WFIVEaWPc1DegvJZLIT5uU)
*   [Databases](https://mega.nz/#!qVdTjLqJ!WMxklbqTVOYhAhCqOVc8tRtN-JH7Ml3nGSiXIsLXDCc)
*   [Dbc](https://mega.nz/#!PIc2QSJK!cHT74BaRzmobGd_pgvV0qt5m9YgTzScH1y7ZrRViEME), [Maps](https://mega.nz/#!zd81TDaY!ZhaeQbEeZ2ksufA0utu5pEiNrbMiMtAef4ej-3fhi-I), [MMaps](https://mega.nz/#!6McnED6T!qEllG_Rh9QZJlEfcJR6Sv9i8XbmAbkmkTolqJ3aOydc), [VMaps](https://mega.nz/#!XEElWYCJ!KE4ra8DtKYfeorEXsQ4jEoxkLVMRmjtltieCUceKmQs)

16th February 2016  
- xinef & pussywizard

 </div>