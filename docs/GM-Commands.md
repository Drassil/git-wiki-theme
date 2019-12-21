GM commands can be entered mainly in 2 ways. Either by typing it directly into the world console window. In the world console window the leading dot (.) is not mandantory, but you can use it. The other way is using the gm command ingame in the chat console of the wow client. There, all commands must start with a leading dot, f.ex.: .gm on

Note: Some commands are working only by selecting a player or a creature. These commands can not be used in the world console.

# GM Commands 3.x

|Command|Security|Description|
|-------|--------|-----------|
|account create|4|Syntax: .account create $account $password Create account and set password to it.|
|account delete|4|Syntax: .account delete $account Delete account with all characters.|
|account lock|0|Syntax: .account lock [on/off] Allow login from account only from current used IP or remove this requirement.|
|account lock country|0|Syntax: .account lock country [on/off]. Allow login from account only from current used Country or remove this requirement.|
|account onlinelist|4|Syntax: .account onlinelist Show list of online accounts.|
|account password|0|Syntax: .account password $old_password $new_password $new_password Change your account password.|
|account set addon|3|Syntax: .account set addon [$account] #addon Set user (possible targeted) expansion addon level allowed. Addon values: 0 - normal, 1 - tbc, 2 - wotlk.|
|account set gmlevel|4|Syntax: .account set gmlevel [$account] #level [#realmid] Set the security level for targeted player (can't be used at self) or for account $name to a level of #level on the realm #realmID. #level may range from 0 to 3. #reamID may be -1 for all realms.|
|account set password|4|Syntax: .account set password $account $password $password Set password for account.|
|account set|3|Syntax: .account set $subcommand Type .account set to see the list of possible subcommands or .help account set $subcommand to see info on subcommands|
|account|0|Syntax: .account Display the access level of your account.|
|additem|3|Syntax: .additem #itemid/[#itemname]/#shift-click-item-link #itemcount Adds the specified number of items of id #itemid (or exact (!) name $itemname in brackets, or link created by shift-click at item in inventory or recipe) to your or selected character inventory. If #itemcount is omitted, only one item will be added. .|
|additemset|3|Syntax: .additemset #itemsetid Add items from itemset of id #itemsetid to your or selected character inventory. Will add by one example each item from itemset.|
|announce|1|Syntax: .announce $MessageToBroadcast Send a global message to all players online in chat log.|
|arena captain|3|Syntax: .arena captain #TeamID $name. A command to set new captain to the team. $name must be in the team|
|aura|3|Syntax: .aura #spellid Add the aura from spell #spellid to the selected Unit.|
|ban account|3|Syntax: .ban account $Name $bantime $reason Ban account kick player. $bantime: negative value leads to permban, otherwise use a timestring like "4d20h3s".|
|ban character|3|Syntax: .ban character $Name $bantime $reason Ban character and kick player. $bantime: negative value leads to permban, otherwise use a timestring like "4d20h3s".|
|ban ip|3|Syntax: .ban ip $Ip $bantime $reason Ban IP. $bantime: negative value leads to permban, otherwise use a timestring like "4d20h3s".|
|ban|3|Syntax: .ban $subcommand Type .ban to see the list of possible subcommands or .help ban $subcommand to see info on subcommands|
|baninfo account|3|Syntax: .baninfo account $accountid Watch full information about a specific ban.|
|baninfo character|3|Syntax: .baninfo character $charactername Watch full information about a specific ban.|
|baninfo ip|3|Syntax: .baninfo ip $ip Watch full information about a specific ban.|
|baninfo|3|Syntax: .baninfo $subcommand Type .baninfo to see the list of possible subcommands or .help baninfo $subcommand to see info on subcommands|
|bank|3|Syntax: .bank Show your bank inventory.|
|banlist account|3|Syntax: .banlist account [$Name] Searches the banlist for a account name pattern or show full list account bans.|
|banlist character|3|Syntax: .banlist character $Name Searches the banlist for a character name pattern. Pattern required.|
|banlist ip|3|Syntax: .banlist ip [$Ip] Searches the banlist for a IP pattern or show full list of IP bans.|
|banlist|3|Syntax: .banlist $subcommand Type .banlist to see the list of possible subcommands or .help banlist $subcommand to see info on subcommands|
|bindsight|3|Syntax: .bindsight Binds vision to the selected unit indefinitely. Cannot be used while currently possessing a target.|
|cast back|3|Syntax: .cast back #spellid [triggered] Selected target will cast #spellid to your character. If 'trigered' or part provided then spell casted with triggered flag.|
|cast dist|3|Syntax: .cast dist #spellid [#dist [triggered]] You will cast spell to pint at distance #dist. If 'trigered' or part provided then spell casted with triggered flag. Not all spells can be casted as area spells.|
|cast self|3|Syntax: .cast self #spellid [triggered] Cast #spellid by target at target itself. If 'trigered' or part provided then spell casted with triggered flag.|
|cast target|3|Syntax: .cast target #spellid [triggered] Selected target will cast #spellid to his victim. If 'trigered' or part provided then spell casted with triggered flag.|
|cast|3|Syntax: .cast #spellid [triggered] Cast #spellid to selected target. If no target selected cast to self. If 'trigered' or part provided then spell casted with triggered flag.|
|character customize|2|Syntax: .character customize [$name] Mark selected in game or by $name in command character for customize at next login.|
|character erase|4|Syntax: .character erase $name Delete character $name. Character finally deleted in case any deleting options.|
|character level|3|Syntax: .character level [$playername] [#level] Set the level of character with $playername (or the selected if not name provided) by #numberoflevels Or +1 if no #numberoflevels provided). If #numberoflevels is omitted, the level will be increase by 1. If #numberoflevels is 0, the same level will be restarted. If no character is selected and name not provided, increase your level. Command can be used for offline character. All stats and dependent values recalculated. At level decrease talents can be reset if need. Also at level decrease equipped items with greater level requirement can be lost.|
|character rename|2|Syntax: .character rename [$name] Mark selected in game or by $name in command character for rename at next login.|
|character reputation|2|Syntax: .character reputation [$player_name] Show reputation information for selected player or player find by $player_name.|
|combatstop|2|Syntax: .combatstop [$playername] Stop combat for selected character. If selected non-player then command applied to self. If $playername provided then attempt applied to online player $playername.|
|cometome|3|SYntax: .cometome $parameter Make selected creature come to your current location (new position not saved to DB).|
|commands|0|Syntax: .commands Display a list of available commands for your account level.|
|cooldown|3|Syntax: .cooldown [#spell_id] Remove all (if spell_id not provided) or #spel_id spell cooldown from selected character or you (if no selection).|
|damage|3|Syntax: .damage $damage_amount [$school [$spellid]] Apply $damage to target. If not $school and $spellid provided then this flat clean melee damage without any modifiers. If $school provided then damage modified by armor reduction (if school physical), and target absorbing modifiers and result applied as melee damage to target. If spell provided then damage modified and applied as spell damage. $spellid can be shift-link.|
|debug arena|3|Syntax: .debug arena Toggle debug mode for arenas. In debug mode GM can start arena with single player.|
|debug bg|3|Syntax: .debug bg Toggle debug mode for battlegrounds. In debug mode GM can start battleground with single player.|
|debug getitemstate|3|Syntax: .debug getitemstate [unchanged\|changed\|new\|removed\|queue\|check_all]. Get specified item state of the items of the selected player.|
|debug getitemvalue|3|Syntax: .debug getitemvalue $guid $index. Get value from item with $guid at $index.|
|debug setitemvalue|3|Syntax: .debug getitemvalue $guid $index $value. Set $value for item with $guid at $index.|
|debug getvalue|3|Syntax: .debug $field [1\|0]: 1: get uint32 value of $field of the selected unit; 0: get float value of $field of the selected unit|
|debug setvalue|3|Syntax: .debug $field $value [1\|0]: 1: set uint32 $value for $field of the selected unit; 0: set float $value for $field of the selected unit|
|debug entervehicle|3|Enter targeted vehicle.|
|debug hostil|1|Get hostile reference list of the selected unit.|
|debug itemexpire|3|Syntax: .debug itemexpire $guid. Delete the item with $guid.|
|debug lootrecipient|3|Syntax: .debug lootrecipient. Get loot recipient of the selected creature.|
|debug send equiperror|3|Syntax: .debug send equiperror #errorid. Test equip error id.|
|debug Mod32Value|3|Syntax: .debug Mod32Value #field #value Add #value to field #field of your character.|
|debug play cinematic|1|Syntax: .debug play cinematic #cinematicid Play cinematic #cinematicid for you. You stay at place while your mind fly.|
|debug play movie|1|Syntax: .debug play movie #movieid Play movie #movieid for you.|
|debug play sound|1|Syntax: .debug play sound #soundid Play sound with #soundid. Sound will be play only for you. Other players do not hear this. Warning: client may have more 5000 sounds...|
|debug send buyerror|3|Syntax: .debug send buyerror #errorid. Test buy error id.|
|debug send channelnotify|3|Syntax: .debug send channelnotify #notifytype. Send #notifytype to the channel "test".|
|debug send chatmmessage|3|Syntax: .debug send chatmmessage #msgtype. Send a message "testtest" of type #msgtype.|
|debug send largepacket|3|Send large packet (>128000 bytes).|
|debug send opcode|3|Syntax: .debug send opcode. Sends a packet to the current player as specified in the file "opcode.txt" which has to lie in the server's working directory. Example for the content of the file: `631 uint32 6146` which starts a different background music on the client: Opcode "SMSG_PLAY_MUSIC" (dec 631, hex 0x277) which needs in this case an uint32 to specify the sound ID (here: 6146 "Zone - Orgrimmar02").|
|debug send qinvalidmsg|3|Syntax: .debug send qinvalidmsg #questfailedreasons. Send a quest failed message of type #questfailedreasons to the current player.|
|debug send qpartymsg|3|Syntax: .debug send qpartymsg #questsharemessages. Send a quest share message of type #questsharemessages to the current player.|
|debug send sellerror|3|Syntax: .debug send sellerror #errorid. Test sell error id.|
|debug send setphaseshift|3|Syntax: .debug send setphaseshift #phaseshift. Send phase shift packet to the current player.|
|debug send spellfail|3|Syntax: .debug send spellfail #resultid [#arg1] [#arg2]. Send spell fail packet to the current player using spell result #resultid and optional arguments #arg1 and #arg2.|
|debug setaurastate|3|Syntax: .debug setaurastate #aurastatetype. Modify aura state of the selected unit (#aurastatetype > 0) or reset the state (#aurastatetype = 0).|
|debug setbit|3|Syntax: .debug setbit #fieldnumber #bitnumber. Set bit #bitnumber of field #fieldnumber for the selected unit.|
|debug spawnvehicle|3|Syntax: .debug spawnvehicle #entry [#vehicleid]. Spawn vehicle with creature template #entry and optional #vehicleid.|
|debug unitstate|3|Syntax: .debug unitstate [#unitstate]. Set #unitstate for the selected unit. If no parameter is specified show the unit state and the react state of the unit.|
|debug uws|3|Syntax: .debug uws #worldstate #value. Send update world state for #worldstate and #value to the current player.|
|debug|3|Syntax: .debug $subcommand Type .debug to see the list of possible subcommands or .help debug $subcommand to see info on subcommands|
|demorph|2|Syntax: .demorph Demorph the selected player.|
|deserter bg add|3|Syntax: .deserter bg add $time. Adds the bg deserter debuff to your target with $time duration.|
|deserter bg remove|3|Syntax: .deserter bg remove. Removes the bg deserter debuff from your target.|
|deserter instance add|3|Syntax: .deserter instance add $time. Adds the instance deserter debuff to your target with $time duration.|
|deserter instance remove|3|Syntax: .deserter instance remove. Removes the instance deserter debuff from your target.|
|die|3|Syntax: .die Kill the selected player. If no player is selected, it will kill you.|
|dismount|0|Syntax: .dismount Dismount you, if you are mounted.|
|distance|3|Syntax: .distance Display the distance from your character to the selected creature.|
|event activelist|2|Syntax: .event activelist Show list of currently active events.|
|event start|2|Syntax: .event start #event_id Start event #event_id. Set start time for event to current moment (change not saved in DB).|
|event stop|2|Syntax: .event stop #event_id Stop event #event_id. Set start time for event to time in past that make current moment is event stop time (change not saved in DB).|
|event|2|Syntax: .event #event_id Show details about event with #event_id.|
|explorecheat|3|Syntax: .explorecheat [1\|0]. 1: Set all zones to explored; 0: Set all zones to unexplored|
|cheat cooldown|2|Syntax: .cheat cooldown [on/off] Enables or disables your character's spell cooldowns.|
|cheat power|2|Syntax: .cheat power [on/off] Enables or disables your character's spell cost (e.g mana).|
|flusharenapoints|3|Syntax: .flusharenapoints Use it to distribute arena points based on arena team ratings, and start a new week.|
|freeze|1|Syntax: .freeze (#player) "Freezes" #player and disables his chat. When using this without #name it will freeze your target.|
|gm chat|1|Syntax: .gm chat [on/off] Enable or disable chat GM MODE (show gm badge in messages) or show current state of on/off not provided.|
|gm fly|3|Syntax: .gm fly [on/off] Enable/disable gm fly mode.|
|gm ingame|0|Syntax: .gm ingame Display a list of available in game Game Masters.|
|gm list|3|Syntax: .gm list Display a list of all Game Masters accounts and security levels.|
|gm visible|1|Syntax: .gm visible on/off Output current visibility state or make GM visible(on) and invisible(off) for other players.|
|gm|1|Syntax: .gm [on/off] Enable or Disable in game GM MODE or show current state of on/off not provided.|
|gmannounce|1|Syntax: .gmannounce $announcement Send an announcement to online Gamemasters.|
|gmnameannounce|1|Syntax: .gmnameannounce $announcement. Send an announcement to all online GM's, displaying the name of the sender.|
|gmnotify|1|Syntax: .gmnotify $notification Displays a notification on the screen of all online GM's.|
|go creature|1|Syntax:.go creature #creature_guidTeleport your character to creature with guid #creature_guid..go creature #creature_nameTeleport your character to creature with this name..go creature id #creature_entryTeleport your character to a creature that was spawned from the template with this entry.If more than one creature is found, then you are teleported to the first that is found inside the database.|
|go graveyard|1|Syntax: .go graveyard #graveyardId Teleport to graveyard with the graveyardId specified.|
|go grid|1|Syntax: .go grid #gridX #gridY [#mapId] Teleport the gm to center of grid with provided indexes at map #mapId (or current map if it not provided).|
|go object|1|Syntax: .go object #object_guid Teleport your character to gameobject with guid #object_guid|
|go taxinode|1|Syntax: .go taxinode #taxinode Teleport player to taxinode coordinates. You can look up zone using .lookup taxinode $namepart|
|go ticket|1|Syntax: .go ticket #ticketid Teleports the user to the location where $ticketid was created.|
|go trigger|1|Syntax: .go trigger #trigger_id Teleport your character to areatrigger with id #trigger_id. Character will be teleported to trigger target if selected areatrigger is telporting trigger.|
|go xyz|1|Syntax: .go xyz #x #y [#z [#mapid [#orientation]]] Teleport player to point with (#x,#y,#z) coordinates at map #mapid with orientation #orientation. If z is not provided, ground/water level will be used. If mapid is not provided, the current map will be used. If #orientation is not provided, the current orientation will be used.|
|go zonexy|1|Syntax: .go zonexy #x #y [#zone] Teleport player to point with (#x,#y) client coordinates at ground(water) level in zone #zoneid or current zone if #zoneid not provided. You can look up zone using .lookup area $namepart|
|go|1|Syntax: .go $subcommand Type .go to see the list of possible subcommands or .help go $subcommand to see info on subcommands|
|gobject activate|2|Syntax: .gobject activate #guid Activates an object like a door or a button.|
|gobject add|2|Syntax: .gobject add #id Add a game object from game object templates to the world at your current location using the #id. spawntimesecs sets the spawntime, it is optional. Note: this is a copy of .gameobject.|
|gobject delete|2|Syntax: .gobject delete #go_guid Delete gameobject with guid #go_guid.|
|gobject move|2|Syntax: .gobject move #goguid [#x #y #z] Move gameobject #goguid to character coordinates (or to (#x,#y,#z) coordinates if its provide).|
|gobject near|2|Syntax: .gobject near [#distance] Output gameobjects at distance #distance from player. Output gameobject guids and coordinates sorted by distance from character. If #distance not provided use 10 as default value.|
|gobject add temp|2|Adds a temporary gameobject that is not saved to DB.|
|gobject target|2|Syntax: .gobject target [#go_id\#go_name_part] Locate and show position nearest gameobject. If #go_id or #go_name_part provide then locate and show position of nearest gameobject with gameobject template id #go_id or name included #go_name_part as part.|
|gobject set phase|2|Syntax: .gobject set phase #guid #phasemask Gameobject with DB guid #guid phasemask changed to #phasemask with related world vision update for players. Gameobject state saved to DB and persistent.|
|gobject turn|2|Syntax: .gobject turn #goguid Set for gameobject #goguid orientation same as current character orientation.|
|gobject|2|Syntax: .gobject $subcommand Type .gobject to see the list of possible subcommands or .help gobject $subcommand to see info on subcommands|
|summon|1|Syntax: .summon [$charactername] Teleport the given character to you. Character can be offline.|
|gps|1|Syntax: .gps [$name\$shift-link] Display the position information for a selected character or creature (also if player name $name provided then for named player, or if creature/gameobject shift-link provided then pointed creature/gameobject if it loaded). Position information includes X, Y, Z, and orientation, map Id and zone Id|
|group join|2|Syntax: .group join $AnyCharacterNameFromGroup [$CharacterName]. Adds to group of player $AnyCharacterNameFromGroup player $CharacterName (or selected).|
|groupsummon|1|Syntax: .groupsummon [$charactername] Teleport the given character and his group to you. Teleported only online characters but original selected group member can be offline.|
|guid|2|Syntax: .guid Display the GUID for the selected character.|
|guild create|2|Syntax: .guild create [$GuildLeaderName] "$GuildName" Create a guild named $GuildName with the player $GuildLeaderName (or selected) as leader. Guild name must in quotes.|
|guild delete|2|Syntax: .guild delete "$GuildName" Delete guild $GuildName. Guild name must in quotes.|
|guild invite|2|Syntax: .guild invite [$CharacterName] "$GuildName" Add player $CharacterName (or selected) into a guild $GuildName. Guild name must in quotes.|
|guild rank|2|Syntax: .guild rank [$CharacterName] #Rank Set for player $CharacterName (or selected) rank #Rank in a guild.|
|guild uninvite|2|Syntax: .guild uninvite [$CharacterName] Remove player $CharacterName (or selected) from a guild.|
|guild|3|Syntax: .guild $subcommand Type .guild to see the list of possible subcommands or .help guild $subcommand to see info on subcommands|
|help|0|Syntax: .help [$command] Display usage instructions for the given $command. If no $command provided show list available commands.|
|hidearea|3|Syntax: .hidearea #areaid Hide the area of #areaid to the selected character. If no character is selected, hide this area to you.|
|honor add|2|Syntax: .honor add $amount Add a certain amount of honor (gained today) to the selected player.|
|honor add kill|2|Syntax: .honor add kill Add the targeted unit as one of your pvp kills today (you only get honor if it's a racial leader or a player)|
|honor update|2|Syntax: .honor update Force the yesterday's honor fields to be updated with today's data, which will get reset for the selected player.|
|honor|2|Syntax: .honor $subcommand Type .honor to see the list of possible subcommands or .help honor $subcommand to see info on subcommands|
|modify talentpoints|1|Syntax: .modify talentpoints #amount Set free talent points for selected character or character's pet. It will be reset to default expected at next levelup/login/quest reward.|
|instance getbossstate|1|Syntax: .instance getbossstate $bossId [$Name]. Gets the current EncounterState for the provided boss id. If no character name is provided, the current map will be used as target.|
|instance setbossstate|1|Syntax: .instance setbossstate $bossId $encounterState [$Name]. Sets the EncounterState for the given boss id to a new value. EncounterStates range from 0 to 5. If no character name is provided, the current map will be used as target.|
|instance listbinds|3|Syntax: .instance listbinds Lists the binds of the selected player.|
|instance savedata|3|Syntax: .instance savedata Save the InstanceData for the current player's map to the DB.|
|instance stats|3|Syntax: .instance stats Shows statistics about instances.|
|instance unbind|3|Syntax: .instance unbind <mapid\all> [difficulty] Clear all/some of player's binds|
|instance|3|Syntax: .instance $subcommand Type .instance to see the list of possible subcommands or .help instance $subcommand to see info on subcommands|
|itemmove|2|Syntax: .itemmove #sourceslotid #destinationslotid Move an item from slots #sourceslotid to #destinationslotid in your inventory Not yet implemented|
|kick|2|Syntax: .kick [$charactername] [$reason] Kick the given character name from the world with or without reason. If no character name is provided then the selected player (except for yourself) will be kicked. If no reason is provided, default is "No Reason".|
|learn all my talents|3|Syntax: .learn all my talents Learn all talents (and spells with first rank learned as talent) available for his class.|
|learn all my spells|3|Syntax: .learn all my spells Learn all spells (except talents and spells with first rank learned as talent) available for his class.|
|learn all my pettalents|3|Syntax: .learn all my pettalents Learn all talents for your pet available for his creature type (only for hunter pets).|
|learn all my class|3|Syntax: .learn all my class Learn all spells and talents available for his class.|
|learn all gm|2|Syntax: .learn all gm Learn all default spells for Game Masters.|
|learn all lang|1|Syntax: .learn all lang Learn all languages|
|learn all default|1|Syntax: .learn all default [$playername] Learn for selected/$playername player all default spells for his race/class and spells rewarded by completed quests.|
|learn|3|Syntax: .learn #spell [all] Selected character learn a spell of id #spell. If 'all' provided then all ranks learned.|
|modify scale|1|.modify scale #scale Modify size of the selected player or creature to "normal scale"*rate. If no player or creature is selected, modify your size. #rate may range from 0.1 to 10.|
|learn all crafts|2|Syntax: .learn crafts Learn all professions and recipes.|
|levelup|3|Syntax: .levelup [$playername] [#numberoflevels] Increase/decrease the level of character with $playername (or the selected if not name provided) by #numberoflevels Or +1 if no #numberoflevels provided). If #numberoflevels is omitted, the level will be increase by 1. If #numberoflevels is 0, the same level will be restarted. If no character is selected and name not provided, increase your level. Command can be used for offline character. All stats and dependent values recalculated. At level decrease talents can be reset if need. Also at level decrease equipped items with greater level requirement can be lost.|
|linkgrave|3|Syntax: .linkgrave #graveyard_id [alliance\horde] Link current zone to graveyard for any (or alliance/horde faction ghosts). This let character ghost from zone teleport to graveyard after die if graveyard is nearest from linked to zone and accept ghost of this faction. Add only single graveyard at another map and only if no graveyards linked (or planned linked at same map).|
|list auras|3|Syntax: .list auras List auras (passive and active) of selected creature or player. If no creature or player is selected, list your own auras.|
|list creature|3|Syntax: .list creature #creature_id [#max_count] Output creatures with creature id #creature_id found in world. Output creature guids and coordinates sorted by distance from character. Will be output maximum #max_count creatures. If #max_count not provided use 10 as default value.|
|list item|3|Syntax: .list item #item_id [#max_count] Output items with item id #item_id found in all character inventories, mails, auctions, and guild banks. Output item guids, item owner guid, owner account and owner name (guild name and guid in case guild bank). Will be output maximum #max_count items. If #max_count not provided use 10 as default value.|
|list object|3|Syntax: .list object #gameobject_id [#max_count] Output gameobjects with gameobject id #gameobject_id found in world. Output gameobject guids and coordinates sorted by distance from character. Will be output maximum #max_count gameobject. If #max_count not provided use 10 as default value.|
|list|3|Syntax: .list $subcommand Type .list to see the list of possible subcommands or .help list $subcommand to see info on subcommands|
|wp reload|3|Syntax: .wp reload $pathid Load path changes ingame - IMPORTANT: must be applied first for new paths before .wp load #pathid|
|reload spell_group|3|Syntax: .reload spell_group Reload spell_group table.|
|lookup area|1|Syntax: .lookup area $namepart Looks up an area by $namepart, and returns all matches with their area ID's.|
|lookup creature|3|Syntax: .lookup creature $namepart Looks up a creature by $namepart, and returns all matches with their creature ID's.|
|lookup event|2|Syntax: .lookup event $name Attempts to find the ID of the event with the provided $name.|
|lookup faction|3|Syntax: .lookup faction $name Attempts to find the ID of the faction with the provided $name.|
|lookup item|3|Syntax: .lookup item $itemname Looks up an item by $itemname, and returns all matches with their Item ID's.|
|lookup itemset|3|Syntax: .lookup itemset $itemname Looks up an item set by $itemname, and returns all matches with their Item set ID's.|
|lookup map|3|Syntax: .lookup map $namepart Looks up a map by $namepart, and returns all matches with their map ID's.|
|lookup object|3|Syntax: .lookup object $objname Looks up an gameobject by $objname, and returns all matches with their Gameobject ID's.|
|lookup player account|2|Syntax: .lookup player account $account ($limit) Searchs players, which account username is $account with optional parametr $limit of results.|
|lookup player email|2|Syntax: .lookup player email $email ($limit) Searchs players, which account email is $email with optional parametr $limit of results.|
|lookup player ip|2|Syntax: .lookup player ip $ip ($limit) Searchs players, which account ast_ip is $ip with optional parametr $limit of results.|
|lookup quest|3|Syntax: .lookup quest $namepart Looks up a quest by $namepart, and returns all matches with their quest ID's.|
|lookup skill|3|Syntax: .lookup skill $$namepart Looks up a skill by $namepart, and returns all matches with their skill ID's.|
|lookup spell|3|Syntax: .lookup spell $namepart Looks up a spell by $namepart, and returns all matches with their spell ID's.|
|lookup taxinode|3|Syntax: .lookup taxinode $substring Search and output all taxinodes with provide $substring in name.|
|lookup tele|1|Syntax: .lookup tele $substring Search and output all .tele command locations with provide $substring in name.|
|lookup|3|Syntax: .lookup $subcommand Type .lookup to see the list of possible subcommands or .help lookup $subcommand to see info on subcommands|
|maxskill|3|Syntax: .maxskill Sets all skills of the targeted player to their maximum values for its current level.|
|mailbox|1|Syntax: .mailbox. Open mailbox.|
|modify speed walk|1|Syntax: .modify speed bwalk #rate Modify the speed of the selected player while running to "normal walk speed"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.|
|modify bit|1|Syntax: .modify bit #field #bit Toggle the #bit bit of the #field field for the selected player. If no player is selected, modify your character.|
|modify speed swim|1|Syntax: .modify speed swim #rate Modify the swim speed of the selected player to "normal swim speed"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.|
|modify drunk|1|Syntax: .modify drunk #value Set drunk level to #value (0..100). Value 0 remove drunk state, 100 is max drunked state.|
|modify energy|1|Syntax: .modify energy #energy Modify the energy of the selected player. If no player is selected, modify your energy.|
|modify faction|1|Syntax: .modify faction #factionid #flagid #npcflagid #dynamicflagid Modify the faction and flags of the selected creature. Without arguments, display the faction and flags of the selected creature.|
|modify speed fly|1|.modify speed fly #rate Modify the flying speed of the selected player to "normal flying speed"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.|
|modify gender|2|Syntax: .modify gender male/female Change gender of selected player.|
|modify honor|1|Syntax: .modify honor $amount Add $amount honor points to the selected player.|
|modify hp|1|Syntax: .modify hp #newhp Modify the hp of the selected player. If no player is selected, modify your hp.|
|modify mana|1|Syntax: .modify mana #newmana Modify the mana of the selected player. If no player is selected, modify your mana.|
|modify money|1|Syntax: .modify money #money .money #money Add or remove money to the selected player. If no player is selected, modify your money. #gold can be negative to remove money.|
|modify mount|1|Syntax: .modify mount #id #speed Display selected player as mounted at #id creature and set speed to #speed value.|
|modify phase|3|Syntax: .modify phase #phasemask Selected character phasemask changed to #phasemask with related world vision update. Change active until in game phase changed, or GM-mode enable/disable, or re-login. Character pts pasemask update to same value.|
|modify rage|1|Syntax: .modify rage #newrage Modify the rage of the selected player. If no player is selected, modify your rage.|
|modify reputation|2|Syntax: .modify reputation #repId (#repvalue \ $rankname [#delta]) Sets the selected players reputation with faction #repId to #repvalue or to $reprank. If the reputation rank name is provided, the resulting reputation will be the lowest reputation for that rank plus the delta amount, if specified. You can use '.pinfo rep' to list all known reputation ids, or use '.lookup faction $name' to locate a specific faction id.|
|modify runicpower|1|Syntax: .modify runicpower #newrunicpower Modify the runic power of the selected player. If no player is selected, modify your runic power.|
|modify speed|1|Syntax: .modify speed $speedtype #rate Modify the running speed of the selected player to "normal base run speed"= 1. If no player is selected, modify your speed. $speedtypes may be fly, all, walk, backwalk, or swim. #rate may range from 0.1 to 50.|
|modify spell|1|TODO|
|modify standstate|2|Syntax: .modify standstate #emoteid Change the emote of your character while standing to #emoteid.|
|modify speed backwalk|1|Syntax: .modify speed backwalk #rate Modify the speed of the selected player while running backwards to "normal walk back speed"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.|
|character titles|2|Syntax: .character titles [$player_name] Show known titles list for selected player or player find by $player_name.|
|modify speed all|1|Syntax: .modify aspeed #rate Modify all speeds -run,swim,run back,swim back- of the selected player to "normalbase speed for this move type"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.|
|modify|1|Syntax: .modify $subcommand Type .modify to see the list of possible subcommands or .help modify $subcommand to see info on subcommands|
|movegens|3|Syntax: .movegens Show movement generators stack for selected creature or player.|
|mute|1|Syntax: .mute [$playerName] $timeInMinutes [$reason] Disible chat messaging for any character from account of character $playerName (or currently selected) at $timeInMinutes minutes. Player can be offline.|
|mutehistory|2|Syntax: .mutehistory #accountname. Show mute history for account #accountname.|
|mmap loadedtiles|3|Syntax: .mmap loadedtiles to show which tiles are currently loaded.|
|mmap loc|3|Syntax: .mmap loc to print on which tile one is.|
|mmap path|3|Syntax: .mmap path to calculate and show a path to current select unit.|
|mmap stats|3|Syntax: .mmap stats to show information about current state of mmaps.|
|mmap testarea|3|Syntax: .mmap testarea to calculate paths for all nearby npcs to player.|
|nameannounce|1|Syntax: .nameannounce $announcement. Send an announcement to all online players, displaying the name of the sender.|
|appear|1|Syntax: .appear [$charactername] Teleport to the given character. Either specify the character name or click on the character's portrait,e.g. when you are in a group. Character can be offline.|
|neargrave|3|Syntax: .neargrave [alliance\horde] Find nearest graveyard linked to zone (or only nearest from accepts alliance or horde faction ghosts).|
|notify|1|Syntax: .notify $MessageToBroadcast Send a global message to all players online in screen.|
|npc set phase|2|Syntax: .npc set phase #phasemask Selected unit or pet phasemask changed to #phasemask with related world vision update for players. In creature case state saved to DB and persistent. In pet case change active until in game phase changed for owner, owner re-login, or GM-mode enable/disable..|
|npc set movetype|2|Syntax: .npc set movetype [#creature_guid] stay/random/way [NODEL] Set for creature pointed by #creature_guid (or selected if #creature_guid not provided) movement type and move it to respawn position (if creature alive). Any existing waypoints for creature will be removed from the database if you do not use NODEL. If the creature is dead then movement type will applied at creature respawn. Make sure you use NODEL, if you want to keep the waypoints.|
|npc set model|2|Syntax: .npc set model #displayid Change the model id of the selected creature to #displayid.|
|npc set link|2|Syntax: .npc set link $creatureGUID Links respawn of selected creature to the condition that $creatureGUID defined is alive.|
|wpgps|3|Syntax: .wpgps Output current position to sql developer log as partial SQL query to be used in pathing|
|npc say|1|Syntax: .npc say $message Make selected creature say specified message.|
|npc move|2|Syntax: .npc move [#creature_guid] Move the targeted creature spawn point to your coordinates.|
|npc playemote|3|Syntax: .npc playemote #emoteid Make the selected creature emote with an emote of id #emoteid.|
|npc follow stop|2|Syntax: .npc follow stop Selected creature (non pet) stop follow you.|
|npc info|3|Syntax: .npc info Display a list of details for the selected creature. The list includes: - GUID, Faction, NPC flags, Entry ID, Model ID, - Level, - Health (current/maximum), - Field flags, dynamic flags, faction template, - Position information, - and the creature type, e.g. if the creature is a vendor.|
|npc follow|2|Syntax: .npc follow start Selected creature start follow you until death/fight/etc.|
|npc set flag|2|Syntax: .npc set flag #npcflag Set the NPC flags of creature template of the selected creature and selected creature to #npcflag. NPC flags will applied to all creatures of selected creature template after server restart or grid unload/load.|
|npc set faction original|3|Syntax: .npc set faction original. Revert the temporal faction of the selected creature.|
|npc set faction permanent|3|Syntax: .npc set faction permanent #factionid. Permanently set the faction of the selected creature to #factionid.|
|npc set faction temp|3|Syntax: .npc set faction temp #factionid. Temporarily set the faction of the selected creature to #factionid.|
|npc set level|2|Syntax: .npc set level #level Change the level of the selected creature to #level. #level may range from 1 to (CONFIG_MAX_PLAYER_LEVEL) + 3.|
|npc delete|2|Syntax: .npc delete [#guid] Delete creature with guid #guid (or the selected if no guid is provided)|
|npc delete item|2|Syntax: .npc delete item #itemId Remove item #itemid from item list of selected vendor.|
|npc set allowmove|3|Syntax: .npc set allowmove Enable or disable movement creatures in world. Not implemented.|
|npc set entry|3|Syntax: .npc set entry $entry Switch selected creature with another entry from creature_template. - New creature.id value not saved to DB.|
|npc add move|2|Syntax: .npc add move #creature_guid [#waittime] Add your current location as a waypoint for creature with guid #creature_guid. And optional add wait time.|
|npc add item|2|Syntax: .npc add item #itemId <#maxcount><#incrtime><#extendedcost>r Add item #itemid to item list of selected vendor. Also optionally set max count item in vendor item list and time to item count restoring and items ExtendedCost.|
|npc add formation|1|Syntax: .npc add formation $leader Add selected creature to a leader's formation.|
|npc|1|Syntax: .npc $subcommand Type .npc to see the list of possible subcommands or .help npc $subcommand to see info on subcommands|
|npc add|2|Syntax: .npc add #creatureid Spawn a creature by the given template id of #creatureid.|
|npc tame|2|Syntax: .npc tame. Tame the selected creature (if it is tameable).|
|pdump load|3|Syntax: .pdump load $filename $account [$newname] [$newguid] Load character dump from dump file into character list of $account with saved or $newname, with saved (or first free) or $newguid guid.|
|pdump write|3|Syntax: .pdump write $filename $playerNameOrGUID Write character dump with name/guid $playerNameOrGUID to file $filename.|
|pdump|3|Syntax: .pdump $subcommand Type .pdump to see the list of possible subcommands or .help pdump $subcommand to see info on subcommands|
|pet create|2|Syntax: .pet create Creates a pet of the selected creature.|
|pet learn|2|Syntax: .pet learn Learn #spellid to pet.|
|reload spell_proc|3|Syntax: .reload spell_proc Reload spell_proc table.|
|pet unlearn|2|Syntax: .pet unlean unLearn #spellid to pet.|
|pet|2|Syntax: .pet $subcommand Type .pet to see the list of possible subcommands or .help pet $subcommand to see info on subcommands|
|pinfo|2|Syntax: .pinfo [$player_name/#GUID] Output account information for selected player or player find by $player_name or #GUID.|
|playall|2|Syntax: .playall #soundid Player a sound to whole server.|
|player learn|2|Syntax: .player learn #playername #spell [all]. Learn spell #spell for the specified player. If 'all' is added then all ranks are learned.|
|player unlearn|2|Syntax: .player unlearn #playername #spell [all]. Unlearn spell #spell for the specified player. If 'all' is added then all ranks are unlearned.|
|possess|3|Syntax: .possess Possesses indefinitely the selected creature.|
|quest add|3|Syntax: .quest add #quest_id Add to character quest log quest #quest_id. Quest started from item can't be added by this command but correct .additem call provided in command output.|
|quest complete|3|Syntax: .quest complete #questid Mark all quest objectives as completed for target character active quest. After this target character can go and get quest reward.|
|quest remove|3|Syntax: .quest remove #quest_id Set quest #quest_id state to not completed and not active (and remove from active quest list) for selected player.|
|quest|3|Syntax: .quest $subcommand Type .quest to see the list of possible subcommands or .help quest $subcommand to see info on subcommands|
|recall|1|Syntax: .recall [$playername] Teleport $playername or selected player to the place where he has been before last use of a teleportation command. If no $playername is entered and no player is selected, it will teleport you.|
|reload all quest|3|Syntax: .reload all quest Reload all quest related tables if reload support added for this table and this table can be safe reloaded.|
|reload all npc|3|Syntax: .reload all npc Reload npc_option, npc_trainer, npc vendor, points of interest tables.|
|reload all loot|3|Syntax: .reload all loot Reload all *_loot_template tables. This can be slow operation with lags for server run.|
|reload all item|3|Syntax: .reload all item Reload page_text, item_enchantment_table tables.|
|reload all locales|3|Syntax: .reload all locales Reload all locales_* tables with reload support added and that can be safe reloaded.|
|reload all gossips|3|Syntax: .reload all gossips Reload gossip_menu, gossip_menu_option, gossip_scripts, points_of_interest tables.|
|reload all|3|Syntax: .reload all Reload all tables with reload support added and that can be safe reloaded.|
|reload achievement_reward_locale|3|Syntax: .reload achievement_reward_locale Reload achievement_reward_locale table.|
|reload acore_string|3|Syntax: .reload acore_string Reload acore_string table.|
|reload areatrigger_involvedrelation|3|Syntax: .reload areatrigger_involvedrelation Reload areatrigger_involvedrelation table.|
|reload areatrigger_tavern|3|Syntax: .reload areatrigger_tavern Reload areatrigger_tavern table.|
|reload areatrigger_teleport|3|Syntax: .reload areatrigger_teleport Reload areatrigger_teleport table.|
|reload autobroadcast|3|Syntax: .reload autobroadcast Reload autobroadcast table.|
|reload battleground_template|3|Syntax: .reload battleground_template Reload battleground_template table.|
|reload broadcast_text|3|Syntax: .reload broadcast_text Reload broadcast_text table.|
|reload command|3|Syntax: .reload command Reload command table.|
|reload config|3|Syntax: .reload config Reload config settings (by default stored in worldserver.conf). Not all settings can be change at reload: some new setting values will be ignored until restart, some values will applied with delay or only to new objects/maps, some values will explicitly rejected to change at reload.|
|reload creature_linked_respawn|2|Syntax: .reload creature_linked_respawn Reload creature_linked_respawn table.|
|reload creature_loot_template|3|Syntax: .reload creature_loot_template Reload creature_loot_template table.|
|reload creature_queststarter|3|Syntax: .reload creature_queststarter Reload creature_queststarter table.|
|reload creature_questender|3|Syntax: .reload creature_questender Reload creature_questender table.|
|reload creature_template_locale|3|Syntax: .reload creature_template_locale Reload creature_template_locale table.|
|reload creature_text_locale|3|Syntax: .reload creature_text_locale Reload creature_text_locale table.|
|reload disenchant_loot_template|3|Syntax: .reload disenchant_loot_template Reload disenchant_loot_template table.|
|reload event_scripts|3|Syntax: .reload event_scripts Reload event_scripts table.|
|reload fishing_loot_template|3|Syntax: .reload fishing_loot_template Reload fishing_loot_template table.|
|reload game_tele|3|Syntax: .reload game_tele Reload game_tele table.|
|reload gameobject_questender|3|Syntax: .reload gameobject_questender Reload gameobject_questender table.|
|reload gameobject_loot_template|3|Syntax: .reload gameobject_loot_template Reload gameobject_loot_template table.|
|reload gameobject_queststarter|3|Syntax: .reload gameobject_queststarter Reload gameobject_queststarter table.|
|reload gameobject_template_locale|3|Syntax: .reload gameobject_template_locale. Reload gameobject_template_locale table.|
|reload gm_tickets|3|Syntax: .reload gm_tickets Reload gm_tickets table.|
|reload gossip_menu_option_locale|3|Syntax: .reload gossip_menu_option_locale. Reload gossip_menu_option_locale table.|
|reload item_enchantment_template|3|Syntax: .reload item_enchantment_template Reload item_enchantment_template table.|
|reload item_loot_template|3|Syntax: .reload item_loot_template Reload item_loot_template table.|
|reload item_set_name_locale|3|Syntax: .reload item_set_name_locale. Reload item_set_name_locale table.|
|reload item_template_locale|3|Syntax: .reload item_template_locale. Reload item_template_locale table.|
|reload milling_loot_template|3|Syntax: .reload milling_loot_template. Reload milling_loot_template table.|
|reload npc_spellclick_spells|3|Syntax: .reload npc_spellclick_spells. Reload npc_spellclick_spells table.|
|reload npc_text_locale|3|Syntax: .reload npc_text_locale. Reload npc_text_locale table.|
|reload npc_trainer|3|Syntax: .reload npc_trainer Reload npc_trainer table.|
|reload npc_vendor|3|Syntax: .reload npc_vendor Reload npc_vendor table.|
|reload page_text|3|Syntax: .reload page_text Reload page_text table.|
|reload page_text_locale|3|Syntax: .reload page_text_locale. Reload page_tex_locale table.|
|reload pickpocketing_loot_template|3|Syntax: .reload pickpocketing_loot_template Reload pickpocketing_loot_template table.|
|reload points_of_interest|3|Syntax: .reload points_of_interest Reload points_of_interest table.|
|reload points_of_interest_locale|3|Syntax: .reload points_of_interest_locale. Reload points_of_interest_locale table.|
|reload prospecting_loot_template|3|Syntax: .reload prospecting_loot_template. Reload prospecting_loot_template table.|
|reload quest_offer_reward_locale|3|Syntax: .reload quest_offer_reward_locale. Reload quest_offer_reward_locale table.|
|reload quest_request_item_locale|3|Syntax: .reload quest_request_item_locale. Reload quest_request_item_locale table.|
|reload quest_template_locale|3|Syntax: .reload quest_template_locale. Reload quest_template_locale table.|
|reload reputation_reward_rate|3|Syntax: .reload reputation_reward_rate. Reload reputation_reward_rate table.|
|reload reputation_spillover_template|3|Syntax: .reload reputation_spillover_template. Reload reputation_spillover_template table.|
|lookup spell id|3|Syntax: .lookup spell id #spellid Looks up a spell by #spellid, and returns the match with its spell name.|
|reload mail_loot_template|3|Syntax: .reload quest_mail_loot_template Reload quest_mail_loot_template table.|
|reload quest_template|3|Syntax: .reload quest_template Reload quest_template table.|
|reload reference_loot_template|3|Syntax: .reload reference_loot_template Reload reference_loot_template table.|
|reload reserved_name|3|Syntax: .reload reserved_name Reload reserved_name table.|
|reload skill_discovery_template|3|Syntax: .reload skill_discovery_template Reload skill_discovery_template table.|
|reload skill_extra_item_template|3|Syntax: .reload skill_extra_item_template Reload skill_extra_item_template table.|
|reload skill_fishing_base_level|3|Syntax: .reload skill_fishing_base_level Reload skill_fishing_base_level table.|
|reload skinning_loot_template|3|Syntax: .reload skinning_loot_template Reload skinning_loot_template table.|
|reload spell_area|3|Syntax: .reload spell_area Reload spell_area table.|
|reload spell_bonus_data|3|Syntax: .reload spell_bonus_data Reload spell_bonus_data table.|
|reload disables|3|Syntax: .reload disables Reload disables table.|
|reload spell_group_stack_rules|3|Syntax: .reload spell_group Reload spell_group_stack_rules table.|
|reload spell_linked_spell|3|Usage: .reload spell_linked_spell Reloads the spell_linked_spell DB table.|
|reload spell_loot_template|3|Syntax: .reload spell_loot_template Reload spell_loot_template table.|
|reload spell_pet_auras|3|Syntax: .reload spell_pet_auras Reload spell_pet_auras table.|
|reload spell_proc_event|3|Syntax: .reload spell_proc_event Reload spell_proc_event table.|
|reload spell_required|3|Syntax: .reload spell_required Reload spell_required table.|
|reload item_set_names|3|Syntax: .reload item_set_names Reload item_set_names table.|
|reload spell_scripts|3|Syntax: .reload spell_scripts Reload spell_scripts table.|
|reload spell_target_position|3|Syntax: .reload spell_target_position Reload spell_target_position table.|
|reload spell_threats|3|Syntax: .reload spell_threats Reload spell_threats table.|
|reload warden_action|3|Syntax: .reload warden_action Reload warden_action table.|
|reload waypoint_scripts|3|Syntax: .reload waypoint_scripts Reload waypoint_scripts table.|
|reload|3|Syntax: .reload $subcommand Type .reload to see the list of possible subcommands or .help reload $subcommand to see info on subcommands|
|repairitems|2|Syntax: .repairitems Repair all selected player's items.|
|reset achievements|3|Syntax: .reset achievements [$playername] Reset achievements data for selected or named (online or offline) character. Achievements for persistance progress data like completed quests/etc re-filled at reset. Achievements for events like kills/casts/etc will lost.|
|reset all|3|Syntax: .reset all spells Syntax: .reset all talents Request reset spells or talents (including talents for all character's pets if any) at next login each existed character.|
|reset honor|3|Syntax: .reset honor [Playername] Reset all honor data for targeted character.|
|reset level|3|Syntax: .reset level [Playername] Reset level to 1 including reset stats and talents. Equipped items with greater level requirement can be lost.|
|reset spells|3|Syntax: .reset spells [Playername] Removes all non-original spells from spellbook. . Playername can be name of offline character.|
|reset stats|3|Syntax: .reset stats [Playername] Resets(recalculate) all stats of the targeted player to their original VALUESat current level.|
|reset talents|3|Syntax: .reset talents [Playername] Removes all talents of the targeted player or pet or named player. Playername can be name of offline character. With player talents also will be reset talents for all character's pets if any.|
|reset|3|Syntax: .reset $subcommand Type .reset to see the list of possible subcommands or .help reset $subcommand to see info on subcommands|
|respawn|3|Syntax: .respawn Respawn all nearest creatures and GO without waiting respawn time expiration.|
|revive|3|Syntax: .revive Revive the selected player. If no player is selected, it will revive you.|
|save|0|Syntax: .save Saves your character.|
|saveall|1|Syntax: .saveall Save all characters in game.|
|send items|3|Syntax: .send items #playername "#subject" "#text" itemid1[:count1] itemid2[:count2] ... itemidN[:countN] Send a mail to a player. Subject and mail text must be in "". If for itemid not provided related count values then expected 1, if count > max items in stack then items will be send in required amount stacks. All stacks amount in mail limited to 12.|
|send mail|1|Syntax: .send mail #playername "#subject" "#text" Send a mail to a player. Subject and mail text must be in "".|
|send message|3|Syntax: .send message $playername $message Send screen message to player from ADMINISTRATOR.|
|send money|3|Syntax: .send money #playername "#subject" "#text" #money Send mail with money to a player. Subject and mail text must be in "".|
|server corpses|2|Syntax: .server corpses Triggering corpses expire check in world.|
|server exit|4|Syntax: .server exit Terminate azeroth-core NOW. Exit code 0.|
|server idlerestart cancel|3|Syntax: .server idlerestart cancel Cancel the restart/shutdown timer if any.|
|server idlerestart|3|Syntax: .server idlerestart #delay Restart the server after #delay seconds if no active connections are present (no players). Use #exit_code or 2 as program exit code.|
|server idleshutdown cancel|3|Syntax: .server idleshutdown cancel Cancel the restart/shutdown timer if any.|
|server idleshutdown|3|Syntax: .server idleshutdown #delay [#exit_code] Shut the server down after #delay seconds if no active connections are present (no players). Use #exit_code or 0 as program exit code.|
|server info|0|Syntax: .server info Display server version and the number of connected players.|
|server motd|0|Syntax: .server motd Show server Message of the day.|
|server restart cancel|3|Syntax: .server restart cancel Cancel the restart/shutdown timer if any.|
|server restart|3|Syntax: .server restart #delay Restart the server after #delay seconds. Use #exit_code or 2 as program exit code.|
|server set closed|3|Syntax: server set closed on/off Sets whether the world accepts new client connectsions.|
|server set motd|3|Syntax: .server set motd $MOTD Set server Message of the day.|
|server shutdown cancel|3|Syntax: .server shutdown cancel Cancel the restart/shutdown timer if any.|
|server shutdown|3|Syntax: .server shutdown #delay [#exit_code] Shut the server down after #delay seconds. Use #exit_code or 0 as program exit code.|
|server togglequerylog|4|Syntax: .server togglequerylog. Toggle SQL query log on/off.|
|server|3|Syntax: .server $subcommand Type .server to see the list of possible subcommands or .help server $subcommand to see info on subcommands|
|setskill|3|Syntax: .setskill #skill #level [#max] Set a skill of id #skill with a current skill value of #level and a maximum value of #max (or equal current maximum if not provide) for the selected character. If no character is selected, you learn the skill.|
|showarea|3|Syntax: .showarea #areaid Reveal the area of #areaid to the selected character. If no character is selected, reveal this area to you.|
|spect leave|0|Syntax: .spect leave. Leave arena spectator.|
|spect reset|0|Syntax: .spect reset. Reset arena spectator.|
|spect spectate|0|Syntax: .spect spectate #playername. Start arena spectator, watch #playername.|
|spect version|0|Syntax: .spect version. Check spectator addon version.|
|spect watch|0|Syntax: .spect watch #playername. Watch #playername.|
|skirmish|3|Syntax: .skirmish [arena] [XvX] [Nick1] [Nick2] ... [NickN]. [arena] can be "all" or comma-separated list of possible arenas (NA,BE,RL,DS,RV). [XvX] can be 1v1, 2v2, 3v3, 5v5. After [XvX] specify enough nicknames for that mode.|
|unstuck|0|Syntax: .unstuck $playername [inn/graveyard/startzone] Teleports specified player to specified location. Default location is player's current hearth location.|
|cheat god|2|Syntax: .cheat god [on/off] Enables or disables your character's ability to take damage.|
|cheat casttime|2|Syntax: .cheat casttime [on/off] Enables or disables your character's spell cast times.|
|tele add|3|Syntax: .tele add $name Add current your position to .tele command target locations list with name $name.|
|tele del|3|Syntax: .tele del $name Remove location with name $name for .tele command locations list.|
|tele group|1|Syntax: .tele group#location Teleport a selected player and his group members to a given location.|
|tele name|1|Syntax: .tele name [#playername] #location Teleport the given character to a given location. Character can be offline. To teleport to homebind, set #location to "$home" (without quotes).|
|tele|1|Syntax: .tele #location Teleport player to a given location.|
|ticket assign|1|Usage: .ticket assign $ticketid $gmname. Assigns the specified ticket to the specified Game Master.|
|ticket close|1|Usage: .ticket close $ticketid. Closes the specified ticket. Does not delete permanently.|
|ticket closedlist|1|Displays a list of closed GM tickets.|
|ticket comment|1|Usage: .ticket comment $ticketid $comment. Allows the adding or modifying of a comment to the specified ticket.|
|ticket delete|3|Usage: .ticket delete $ticketid. Deletes the specified ticket permanently. Ticket must be closed first.|
|ticket escalate|2|Usage: .ticket escalate $ticketid. Place the specified ticket in the escalation queue.|
|ticket escalatedlist|2|: Show all tickets in the escalation queue.|
|ticket list|1|Displays a list of open GM tickets.|
|ticket onlinelist|1|Displays a list of open GM tickets whose owner is online.|
|ticket response append|2|.ticket response append $ticketid $response. Append response to the specified ticket (without newline).|
|ticket response appendln|2|.ticket response appendln $ticketid $response. Append response to the specified ticket (with newline).|
|ticket togglesystem|3|Syntax: .ticket togglesystem. Toggle ticket system on/off.|
|ticket unassign|1|Usage: .ticket unassign $ticketid. Unassigns the specified ticket from the current assigned Game Master.|
|ticket viewid|1|Usage: .ticket viewid $ticketid. Returns details about specified ticket. Ticket must be open and not deleted.|
|ticket viewname|1|Usage: .ticket viewname $creatorname. Returns details about specified ticket. Ticket must be open and not deleted.|
|ticket|1|Syntax: .ticket $subcommand Type .ticket to see the list of possible subcommands or .help ticket $subcommand to see info on subcommands|
|unaura|3|Syntax: .unaura #spellid Remove aura due to spell #spellid from the selected Unit.|
|unban account|3|Syntax: .unban account $Name Unban accounts for account name pattern.|
|unban character|3|Syntax: .unban character $Name Unban accounts for character name pattern.|
|unban ip|3|Syntax : .unban ip $Ip Unban accounts for IP pattern.|
|unban|3|Syntax: .unban $subcommand Type .unban to see the list of possible subcommands or .help unban $subcommand to see info on subcommands|
|unbindsight|3|Syntax: .unbindsight Removes bound vision. Cannot be used while currently possessing a target.|
|unfreeze|1|Syntax: .unfreeze (#player) "Unfreezes" #player and enables his chat again. When using this without #name it will unfreeze your target.|
|unlearn|3|Syntax: .unlearn #spell [all] Unlearn for selected player a spell #spell. If 'all' provided then all ranks unlearned.|
|unmute|1|Syntax: .unmute [$playerName] Restore chat messaging for any character from account of character $playerName (or selected). Character can be ofline.|
|unpossess|3|Syntax: .unpossess If you are possessed, unpossesses yourself; otherwise unpossesses current possessed target.|
|cheat|2|Syntax: .cheat $subcommand Type .cheat to see the list of possible subcommands or .help cheat $subcommand to see info on subcommands|
|wchange|3|Syntax: .wchange #weathertype #status Set current weather to #weathertype with an intensity of #status. #weathertype can be 1 for rain, 2 for snow, and 3 for sand. #status can be 0 for disabled, and 1 for enabled.|
|whispers|1|Syntax: .whispers on\off Enable/disable accepting whispers by GM from players. By default use worldserver.conf setting.|
|wp event|2|Syntax: .wp event $subcommand Type .path event to see the list of possible subcommands or .help path event $subcommand to see info on subcommands.|
|wp load|2|Syntax: .wp load $pathid Load pathid number for selected creature. Creature must have no waypoint data.|
|wp modify||Syntax: .wp modify $optionOptions:action Changes the value actionaction_chance Changes the value action_chancedel Deletes a selected waypointdelay Changes the value delaymove Moves a selected waypointmove_flag Changes the value move_flag|
|wp show|2|Syntax: .wp show $optionOptions:on $pathid (or selected creature with loaded path) - Show visual waypoints (Note: You must have GM on to see the waypoints)off Hide the visual waypoints.info Shows info for selected waypoint.first Shows visual the first waypoint.last Shows visual the last waypoint.|
|wp unload|2|Syntax: .wp unload Unload path for selected creature.|
|account addon|1|Syntax: .account addon #addon Set expansion addon level allowed. Addon values: 0 - normal, 1 - tbc, 2 - wotlk.|
|titles remove|2|Syntax: .titles remove #title Remove title #title (id or shift-link) from known titles list for selected player.|
|titles current|2|Syntax: .titles current #title Set title #title (id or shift-link) as current selected titl for selected player. If title not in known title list for player then it will be added to list.|
|titles add|2|Syntax: .titles add #title Add title #title (id or shift-link) to known titles list for selected player.|
|titles set mask|2|Syntax: .titles set mask #mask Allows user to use all titles from #mask. #mask=0 disables the title-choose-field|
|lookup title|2|Syntax: .lookup title $$namepart Looks up a title by $namepart, and returns all matches with their title ID's and index's.|
|gobject info|2|Syntax: .gobject info [$object_entry] Query Gameobject information for selected gameobject or given entry.|
|reload creature_template|3|Syntax: .reload creature_template $entry Reload the specified creature's template.|
|character deleted delete|4|Syntax: .character deleted delete #guid\$name Completely deletes the selected characters. If $name is supplied, only characters with that string in their name will be deleted, if #guid is supplied, only the character with that GUID will be deleted.|
|reload creature_onkill_reputation|3|Syntax: .reload creature_onkill_reputation Reload creature_onkill_reputation table.|
|reload conditions|3|Reload conditions table.|
|character deleted list|3|Syntax: .character deleted list [#guid\$name] Shows a list with all deleted characters. If $name is supplied, only characters with that string in their name will be selected, if #guid is supplied, only the character with that GUID will be selected.|
|character deleted old|4|Syntax: .character deleted old [#keepDays] Completely deletes all characters with deleted time longer #keepDays. If #keepDays not provided the used value from mangosd.conf option 'CharDelete.KeepDays'. If referenced config option disabled (use 0 value) then command can't be used without #keepDays.|
|character deleted restore|3|Syntax: .character deleted restore #guid\$name [$newname] [#new account] Restores deleted characters. If $name is supplied, only characters with that string in their name will be restored, if $guid is supplied, only the character with that GUID will be restored. If $newname is set, the character will be restored with that name instead of the original one. If #newaccount is set, the character will be restored to specific account character list. This works only with one character!|
|reload gossip_menu|3|Syntax: .reload gossip_menu Reload gossip_menu table.|
|reload gossip_menu_option|3|Syntax: .reload gossip_menu_option Reload gossip_menu_option table.|
|cast dest|3|Syntax: .cast dest #spellid #x #y #z [triggered] Selected target will cast #spellid at provided destination. If 'trigered' or part provided then spell casted with triggered flag.|
|reload all scripts|3|Syntax: .reload all scripts Reload gameobject_scripts, event_scripts, quest_end_scripts, quest_start_scripts, spell_scripts, db_script_string, waypoint_scripts tables.|
|reload quest_poi|3|Syntax: .reload quest_poi Reload quest_poi table.|
|reload lfg_dungeon_rewards|3|Syntax: .reload lfg_dungeon_rewards Reload lfg_dungeon_rewards table.|
|character changefaction|2|Syntax: .character changefaction $name Change character faction.|
|character changerace|2|Syntax: .character changerace $name Change character race.|
|ban playeraccount|3|Syntax: .ban playeraccount $Name $bantime $reason Ban account and kick player. $bantime: negative value leads to permban, otherwise use a timestring like "4d20h3s".|
|achievement add|4|Syntax: .achievement add $achievement Add an achievement to the targeted player. $achievement: can be either achievement id or achievement link|
|achievement checkall|3|Syntax: .achievement checkall. Check all achievement criteria of the selected player.|
|achievement|4|Syntax: .achievement $subcommand Type .achievement to see the list of possible subcommands or .help achievement $subcommand to see info on subcommands|
|reload creature_text|3|Syntax: .reload creature_text Reload creature_text table.|
|debug areatriggers|1|Syntax: .debug areatriggers Toggle debug mode for areatriggers. In debug mode GM will be notified if reaching an areatrigger|
|learn all recipes|2|Syntax: .learn all recipes [$profession] Learns all recipes of specified profession and sets skill level to max. Example: .learn all recipes enchanting|
|npc set spawndist|2|Syntax: .npc set spawndist #dist Adjust spawndistance of selected creature to dist.|
|npc set spawntime|2|Syntax: .npc set spawntime #time Adjust spawntime of selected creature to time.|
|npc add temp|2|Syntax: .npc add temp Adds temporary NPC, not saved to database.|
|npc textemote|1|Syntax: .npc textemote #emoteid Make the selected creature to do textemote with an emote of id #emoteid.|
|npc whisper|1|Syntax: .npc whisper #playerguid #text Make the selected npc whisper #text to #playerguid.|
|npc yell|1|Syntax: .npc yell $message Make selected creature yell specified message.|
|wp add|2|Syntax: .wp add Add a waypoint for the selected creature at your current position.|
|reload all spell|3|Syntax: .reload all spell Reload all spell_* tables with reload support added and that can be safe reloaded.|
|server set difftime|4|Syntax: .server set difftime $time. $time (in milliseconds) update time diff is written to the log file.|
|server set loglevel|4|Syntax: .server set loglevel $facility $name $loglevel. $facility can take the values: appender (a) or logger (l). $loglevel can take the values: disabled (0), trace (1), debug (2), info (3), warn (4), error (5) or fatal (6)|
|reload access_requirement|3|Syntax: .reload access_requirement Reload access_requirement table.|
|reload achievement_reward|3|Syntax: .reload achievement_reward Reload achievement_reward table.|
|reload all achievement|3|Syntax: .reload all achievement Reload achievement_reward, achievement_criteria_data tables.|
|reload all area|3|Syntax: .reload all area Reload areatrigger_teleport, areatrigger_tavern, game_graveyard_zone tables.|
|reload auctions|3|Syntax: .reload auctions Reload dynamic data tables from the database.|
|reload mail_level_reward|3|Syntax: .reload mail_level_reward Reload mail_level_reward table.|
|reload smart_scripts|3|Syntax: .reload smart_scripts Reload smart_scripts table.|
|reload vehicle_accessory|3|Syntax: .reload vehicle_accessory Reloads GUID-based vehicle accessory definitions from the database.|
|reload vehicle_template_accessory|3|Syntax: .reload vehicle_template_accessory Reloads entry-based vehicle accessory definitions from the database.|
|dev|3|Syntax: .dev [on/off] Enable or Disable in game Dev tag or show current state if on/off not provided.|
|ticket reset|3|Syntax: .ticket reset Removes all closed tickets and resets the counter, if no pending open tickets are existing.|
|reload waypoint_data|3|Syntax: .reload waypoint_data will reload waypoint_data table.|
|group|3|Syntax: .group $subcommand Type .group to see the list of possible subcommands or .help group $subcommand to see info on subcommands|
|group leader|3|Syntax: .group leader [$characterName] Sets the given character as his group's leader.|
|group disband|3|Syntax: .group disband [$characterName] Disbands the given character's group.|
|group remove|3|Syntax: .group remove [$characterName] Removes the given character from his group.|
|debug moveflags|3|Syntax: .debug moveflags [$newMoveFlags [$newMoveFlags2]] No params given will output the current moveflags of the target|
|morph|2|Syntax: .morph #displayid Change your current model id to #displayid.|
|modify arenapoints|1|Syntax: .modify arenapoints #value Add $amount arena points to the selected player.|
|npc set data|3|Syntax: .npc set data $field $data Sets data for the selected creature. Used for testing Scripting|
|disable add quest|3|Syntax: .disable add quest $entry $flag $comment|
|disable add map|3|Syntax: .disable add map $entry $flag $comment|
|disable add battleground|3|Syntax: .disable add battleground $entry $flag $comment|
|disable add spell|3|Syntax: .disable add spell $entry $flag $comment|
|disable add outdoorpvp|3|Syntax: .disable add outdoorpvp $entry $flag $comment|
|disable add vmap|3|Syntax: .disable add vmap $entry $flag $comment|
|disable remove quest|3|Syntax: .disable remove quest $entry|
|disable remove map|3|Syntax: .disable remove map $entry|
|disable remove battleground|3|Syntax: .disable remove battleground $entry|
|disable remove spell|3|Syntax: .disable remove spell $entry|
|disable remove outdoorpvp|3|Syntax: .disable remove outdoorpvp $entry|
|disable remove vmap|3|Syntax: .disable remove vmap $entry|
|bf start|3|Syntax: .bf start #battleid|
|bf stop|3|Syntax: .bf stop #battleid|
|bf enable|3|Syntax: .bf enable #battleid|
|bf switch|3|Syntax: .bf switch #battleid|
|bf timer|3|Syntax: .bf timer #battleid #timer|
|quest reward|3|Syntax: .quest reward #questId Grants quest reward to selected player and removes quest from his log (quest must be in completed state).|
|cheat waterwalk|2|Syntax: .cheat waterwalk on/off Set on/off waterwalk state for selected player or self if no player selected.|
|cheat taxi|2|Syntax: .cheat taxi on/off Temporary grant access or remove to all taxi routes for the selected character. If no character is selected, hide or reveal all routes to you.Visited taxi nodes sill accessible after removing access.|
|cheat status|2|Syntax: .cheat status Shows the cheats you currently have enabled.|
|lfg player|2|Syntax: .lfg player Shows information about player (state, roles, comment, dungeons selected).|
|lfg group|2|Syntax: .lfg group Shows information about all players in the group (state, roles, comment, dungeons selected).|
|lfg queue|2|Syntax: .lfg queue Shows info about current lfg queues.|
|lfg clean|3|Syntax: .flg clean Cleans current queue, only for debugging purposes.|
|lfg options|3|Syntax: .lfg options [new value] Shows current lfg options. New value is set if extra param is present.|
