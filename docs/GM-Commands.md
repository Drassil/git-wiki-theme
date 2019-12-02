<p>GM commands can be entered mainly in 2 ways. Either by typing it directly into the world console window. In the world console window the leading dot (.) is not mandantory, but you can use it. The other way is using the gm command ingame in the chat console of the wow client. There, all commands must start with a leading dot, f.ex.: .gm on</p>

<p>Note: Some commands are working only by selecting a player or a creature. These commands can not be used in the world console.</p>

<h1>GM Commands 3.x</h1>
<table>
<colgroup>
<col width="45%" />
<col width="5%" />
<col width="50%" />
</colgroup>
<thead>
<tr>
<th>Command</th>
<th>Security</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>account create</td>
<td>4</td>
<td>Syntax: .account create $account $password Create account and set password to it.</td>
</tr>
<tr>
<td>account delete</td>
<td>4</td>
<td>Syntax: .account delete $account Delete account with all characters.</td>
</tr>
<tr>
<td>account lock</td>
<td>0</td>
<td>Syntax: .account lock [on\off] Allow login from account only from current used IP or remove this requirement.</td>
</tr>
<tr>
<td>account onlinelist</td>
<td>4</td>
<td>Syntax: .account onlinelist Show list of online accounts.</td>
</tr>
<tr>
<td>account password</td>
<td>0</td>
<td>Syntax: .account password $old_password $new_password $new_password Change your account password.</td>
</tr>
<tr>
<td>account set addon</td>
<td>3</td>
<td>Syntax: .account set addon [$account] #addon Set user (possible targeted) expansion addon level allowed. Addon values: 0 - normal, 1 - tbc, 2 - wotlk.</td>
</tr>
<tr>
<td>account set gmlevel</td>
<td>4</td>
<td>Syntax: .account set gmlevel [$account] #level [#realmid] Set the security level for targeted player (can't be used at self) or for account $name to a level of #level on the realm #realmID. #level may range from 0 to 3. #reamID may be -1 for all realms.</td>
</tr>
<tr>
<td>account set password</td>
<td>4</td>
<td>Syntax: .account set password $account $password $password Set password for account.</td>
</tr>
<tr>
<td>account set</td>
<td>3</td>
<td>Syntax: .account set $subcommand Type .account set to see the list of possible subcommands or .help account set $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>account</td>
<td>0</td>
<td>Syntax: .account Display the access level of your account.</td>
</tr>
<tr>
<td>additem</td>
<td>3</td>
<td>Syntax: .additem #itemid/[#itemname]/#shift-click-item-link #itemcount Adds the specified number of items of id #itemid (or exact (!) name $itemname in brackets, or link created by shift-click at item in inventory or recipe) to your or selected character inventory. If #itemcount is omitted, only one item will be added. .</td>
</tr>
<tr>
<td>additemset</td>
<td>3</td>
<td>Syntax: .additemset #itemsetid Add items from itemset of id #itemsetid to your or selected character inventory. Will add by one example each item from itemset.</td>
</tr>
<tr>
<td>announce</td>
<td>1</td>
<td>Syntax: .announce $MessageToBroadcast Send a global message to all players online in chat log.</td>
</tr>
<tr>
<td>aura</td>
<td>3</td>
<td>Syntax: .aura #spellid Add the aura from spell #spellid to the selected Unit.</td>
</tr>
<tr>
<td>ban account</td>
<td>3</td>
<td>Syntax: .ban account $Name $bantime $reason Ban account kick player. $bantime: negative value leads to permban, otherwise use a timestring like "4d20h3s".</td>
</tr>
<tr>
<td>ban character</td>
<td>3</td>
<td>Syntax: .ban character $Name $bantime $reason Ban character and kick player. $bantime: negative value leads to permban, otherwise use a timestring like "4d20h3s".</td>
</tr>
<tr>
<td>ban ip</td>
<td>3</td>
<td>Syntax: .ban ip $Ip $bantime $reason Ban IP. $bantime: negative value leads to permban, otherwise use a timestring like "4d20h3s".</td>
</tr>
<tr>
<td>ban</td>
<td>3</td>
<td>Syntax: .ban $subcommand Type .ban to see the list of possible subcommands or .help ban $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>baninfo account</td>
<td>3</td>
<td>Syntax: .baninfo account $accountid Watch full information about a specific ban.</td>
</tr>
<tr>
<td>baninfo character</td>
<td>3</td>
<td>Syntax: .baninfo character $charactername Watch full information about a specific ban.</td>
</tr>
<tr>
<td>baninfo ip</td>
<td>3</td>
<td>Syntax: .baninfo ip $ip Watch full information about a specific ban.</td>
</tr>
<tr>
<td>baninfo</td>
<td>3</td>
<td>Syntax: .baninfo $subcommand Type .baninfo to see the list of possible subcommands or .help baninfo $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>bank</td>
<td>3</td>
<td>Syntax: .bank Show your bank inventory.</td>
</tr>
<tr>
<td>banlist account</td>
<td>3</td>
<td>Syntax: .banlist account [$Name] Searches the banlist for a account name pattern or show full list account bans.</td>
</tr>
<tr>
<td>banlist character</td>
<td>3</td>
<td>Syntax: .banlist character $Name Searches the banlist for a character name pattern. Pattern required.</td>
</tr>
<tr>
<td>banlist ip</td>
<td>3</td>
<td>Syntax: .banlist ip [$Ip] Searches the banlist for a IP pattern or show full list of IP bans.</td>
</tr>
<tr>
<td>banlist</td>
<td>3</td>
<td>Syntax: .banlist $subcommand Type .banlist to see the list of possible subcommands or .help banlist $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>bindsight</td>
<td>3</td>
<td>Syntax: .bindsight Binds vision to the selected unit indefinitely. Cannot be used while currently possessing a target.</td>
</tr>
<tr>
<td>cast back</td>
<td>3</td>
<td>Syntax: .cast back #spellid [triggered] Selected target will cast #spellid to your character. If 'trigered' or part provided then spell casted with triggered flag.</td>
</tr>
<tr>
<td>cast dist</td>
<td>3</td>
<td>Syntax: .cast dist #spellid [#dist [triggered]] You will cast spell to pint at distance #dist. If 'trigered' or part provided then spell casted with triggered flag. Not all spells can be casted as area spells.</td>
</tr>
<tr>
<td>cast self</td>
<td>3</td>
<td>Syntax: .cast self #spellid [triggered] Cast #spellid by target at target itself. If 'trigered' or part provided then spell casted with triggered flag.</td>
</tr>
<tr>
<td>cast target</td>
<td>3</td>
<td>Syntax: .cast target #spellid [triggered] Selected target will cast #spellid to his victim. If 'trigered' or part provided then spell casted with triggered flag.</td>
</tr>
<tr>
<td>cast</td>
<td>3</td>
<td>Syntax: .cast #spellid [triggered] Cast #spellid to selected target. If no target selected cast to self. If 'trigered' or part provided then spell casted with triggered flag.</td>
</tr>
<tr>
<td>character customize</td>
<td>2</td>
<td>Syntax: .character customize [$name] Mark selected in game or by $name in command character for customize at next login.</td>
</tr>
<tr>
<td>character erase</td>
<td>4</td>
<td>Syntax: .character erase $name Delete character $name. Character finally deleted in case any deleting options.</td>
</tr>
<tr>
<td>character level</td>
<td>3</td>
<td>Syntax: .character level [$playername] [#level] Set the level of character with $playername (or the selected if not name provided) by #numberoflevels Or +1 if no #numberoflevels provided). If #numberoflevels is omitted, the level will be increase by 1. If #numberoflevels is 0, the same level will be restarted. If no character is selected and name not provided, increase your level. Command can be used for offline character. All stats and dependent values recalculated. At level decrease talents can be reset if need. Also at level decrease equipped items with greater level requirement can be lost.</td>
</tr>
<tr>
<td>character rename</td>
<td>2</td>
<td>Syntax: .character rename [$name] Mark selected in game or by $name in command character for rename at next login.</td>
</tr>
<tr>
<td>character reputation</td>
<td>2</td>
<td>Syntax: .character reputation [$player_name] Show reputation information for selected player or player find by $player_name.</td>
</tr>
<tr>
<td>combatstop</td>
<td>2</td>
<td>Syntax: .combatstop [$playername] Stop combat for selected character. If selected non-player then command applied to self. If $playername provided then attempt applied to online player $playername.</td>
</tr>
<tr>
<td>cometome</td>
<td>3</td>
<td>SYntax: .cometome $parameter Make selected creature come to your current location (new position not saved to DB).</td>
</tr>
<tr>
<td>commands</td>
<td>0</td>
<td>Syntax: .commands Display a list of available commands for your account level.</td>
</tr>
<tr>
<td>cooldown</td>
<td>3</td>
<td>Syntax: .cooldown [#spell_id] Remove all (if spell_id not provided) or #spel_id spell cooldown from selected character or you (if no selection).</td>
</tr>
<tr>
<td>damage</td>
<td>3</td>
<td>Syntax: .damage $damage_amount [$school [$spellid]] Apply $damage to target. If not $school and $spellid provided then this flat clean melee damage without any modifiers. If $school provided then damage modified by armor reduction (if school physical), and target absorbing modifiers and result applied as melee damage to target. If spell provided then damage modified and applied as spell damage. $spellid can be shift-link.</td>
</tr>
<tr>
<td>debug arena</td>
<td>3</td>
<td>Syntax: .debug arena Toggle debug mode for arenas. In debug mode GM can start arena with single player.</td>
</tr>
<tr>
<td>debug bg</td>
<td>3</td>
<td>Syntax: .debug bg Toggle debug mode for battlegrounds. In debug mode GM can start battleground with single player.</td>
</tr>
<tr>
<td>debug Mod32Value</td>
<td>3</td>
<td>Syntax: .debug Mod32Value #field #value Add #value to field #field of your character.</td>
</tr>
<tr>
<td>debug play cinematic</td>
<td>1</td>
<td>Syntax: .debug play cinematic #cinematicid Play cinematic #cinematicid for you. You stay at place while your mind fly.</td>
</tr>
<tr>
<td>debug play movie</td>
<td>1</td>
<td>Syntax: .debug play movie #movieid Play movie #movieid for you.</td>
</tr>
<tr>
<td>debug play sound</td>
<td>1</td>
<td>Syntax: .debug play sound #soundid Play sound with #soundid. Sound will be play only for you. Other players do not hear this. Warning: client may have more 5000 sounds...</td>
</tr>
<tr>
<td>debug</td>
<td>1</td>
<td>Syntax: .debug $subcommand Type .debug to see the list of possible subcommands or .help debug $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>demorph</td>
<td>2</td>
<td>Syntax: .demorph Demorph the selected player.</td>
</tr>
<tr>
<td>die</td>
<td>3</td>
<td>Syntax: .die Kill the selected player. If no player is selected, it will kill you.</td>
</tr>
<tr>
<td>dismount</td>
<td>0</td>
<td>Syntax: .dismount Dismount you, if you are mounted.</td>
</tr>
<tr>
<td>distance</td>
<td>3</td>
<td>Syntax: .distance Display the distance from your character to the selected creature.</td>
</tr>
<tr>
<td>event activelist</td>
<td>2</td>
<td>Syntax: .event activelist Show list of currently active events.</td>
</tr>
<tr>
<td>event start</td>
<td>2</td>
<td>Syntax: .event start #event_id Start event #event_id. Set start time for event to current moment (change not saved in DB).</td>
</tr>
<tr>
<td>event stop</td>
<td>2</td>
<td>Syntax: .event stop #event_id Stop event #event_id. Set start time for event to time in past that make current moment is event stop time (change not saved in DB).</td>
</tr>
<tr>
<td>event</td>
<td>2</td>
<td>Syntax: .event #event_id Show details about event with #event_id.</td>
</tr>
<tr>
<td>cheat cooldown</td>
<td>2</td>
<td>Syntax: .cheat cooldown [on/off] Enables or disables your character's spell cooldowns.</td>
</tr>
<tr>
<td>cheat power</td>
<td>2</td>
<td>Syntax: .cheat power [on/off] Enables or disables your character's spell cost (e.g mana).</td>
</tr>
<tr>
<td>flusharenapoints</td>
<td>3</td>
<td>Syntax: .flusharenapoints Use it to distribute arena points based on arena team ratings, and start a new week.</td>
</tr>
<tr>
<td>freeze</td>
<td>1</td>
<td>Syntax: .freeze (#player) "Freezes" #player and disables his chat. When using this without #name it will freeze your target.</td>
</tr>
<tr>
<td>gm chat</td>
<td>1</td>
<td>Syntax: .gm chat [on/off] Enable or disable chat GM MODE (show gm badge in messages) or show current state of on/off not provided.</td>
</tr>
<tr>
<td>gm fly</td>
<td>3</td>
<td>Syntax: .gm fly [on/off] Enable/disable gm fly mode.</td>
</tr>
<tr>
<td>gm ingame</td>
<td>0</td>
<td>Syntax: .gm ingame Display a list of available in game Game Masters.</td>
</tr>
<tr>
<td>gm list</td>
<td>3</td>
<td>Syntax: .gm list Display a list of all Game Masters accounts and security levels.</td>
</tr>
<tr>
<td>gm visible</td>
<td>1</td>
<td>Syntax: .gm visible on/off Output current visibility state or make GM visible(on) and invisible(off) for other players.</td>
</tr>
<tr>
<td>gm</td>
<td>1</td>
<td>Syntax: .gm [on/off] Enable or Disable in game GM MODE or show current state of on/off not provided.</td>
</tr>
<tr>
<td>gmannounce</td>
<td>1</td>
<td>Syntax: .gmannounce $announcement Send an announcement to online Gamemasters.</td>
</tr>
<tr>
<td>gmnameannounce</td>
<td>1</td>
<td>Syntax: .gmnameannounce $announcement. Send an announcement to all online GM's, displaying the name of the sender.</td>
</tr>
<tr>
<td>gmnotify</td>
<td>1</td>
<td>Syntax: .gmnotify $notification Displays a notification on the screen of all online GM's.</td>
</tr>
<tr>
<td>go creature</td>
<td>1</td>
<td>Syntax:.go creature #creature_guidTeleport your character to creature with guid #creature_guid..go creature #creature_nameTeleport your character to creature with this name..go creature id #creature_entryTeleport your character to a creature that was spawned from the template with this entry.If more than one creature is found, then you are teleported to the first that is found inside the database.</td>
</tr>
<tr>
<td>go graveyard</td>
<td>1</td>
<td>Syntax: .go graveyard #graveyardId Teleport to graveyard with the graveyardId specified.</td>
</tr>
<tr>
<td>go grid</td>
<td>1</td>
<td>Syntax: .go grid #gridX #gridY [#mapId] Teleport the gm to center of grid with provided indexes at map #mapId (or current map if it not provided).</td>
</tr>
<tr>
<td>go object</td>
<td>1</td>
<td>Syntax: .go object #object_guid Teleport your character to gameobject with guid #object_guid</td>
</tr>
<tr>
<td>go taxinode</td>
<td>1</td>
<td>Syntax: .go taxinode #taxinode Teleport player to taxinode coordinates. You can look up zone using .lookup taxinode $namepart</td>
</tr>
<tr>
<td>go ticket</td>
<td>1</td>
<td>Syntax: .go ticket #ticketid Teleports the user to the location where $ticketid was created.</td>
</tr>
<tr>
<td>go trigger</td>
<td>1</td>
<td>Syntax: .go trigger #trigger_id Teleport your character to areatrigger with id #trigger_id. Character will be teleported to trigger target if selected areatrigger is telporting trigger.</td>
</tr>
<tr>
<td>go xyz</td>
<td>1</td>
<td>Syntax: .go xyz #x #y [#z [#mapid [#orientation]]] Teleport player to point with (#x,#y,#z) coordinates at map #mapid with orientation #orientation. If z is not provided, ground/water level will be used. If mapid is not provided, the current map will be used. If #orientation is not provided, the current orientation will be used.</td>
</tr>
<tr>
<td>go zonexy</td>
<td>1</td>
<td>Syntax: .go zonexy #x #y [#zone] Teleport player to point with (#x,#y) client coordinates at ground(water) level in zone #zoneid or current zone if #zoneid not provided. You can look up zone using .lookup area $namepart</td>
</tr>
<tr>
<td>go</td>
<td>1</td>
<td>Syntax: .go $subcommand Type .go to see the list of possible subcommands or .help go $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>gobject activate</td>
<td>2</td>
<td>Syntax: .gobject activate #guid Activates an object like a door or a button.</td>
</tr>
<tr>
<td>gobject add</td>
<td>2</td>
<td>Syntax: .gobject add #id <spawntimeSecs> Add a game object from game object templates to the world at your current location using the #id. spawntimesecs sets the spawntime, it is optional. Note: this is a copy of .gameobject.</td>
</tr>
<tr>
<td>gobject delete</td>
<td>2</td>
<td>Syntax: .gobject delete #go_guid Delete gameobject with guid #go_guid.</td>
</tr>
<tr>
<td>gobject move</td>
<td>2</td>
<td>Syntax: .gobject move #goguid [#x #y #z] Move gameobject #goguid to character coordinates (or to (#x,#y,#z) coordinates if its provide).</td>
</tr>
<tr>
<td>gobject near</td>
<td>2</td>
<td>Syntax: .gobject near [#distance] Output gameobjects at distance #distance from player. Output gameobject guids and coordinates sorted by distance from character. If #distance not provided use 10 as default value.</td>
</tr>
<tr>
<td>gobject add temp</td>
<td>2</td>
<td>Adds a temporary gameobject that is not saved to DB.</td>
</tr>
<tr>
<td>gobject target</td>
<td>2</td>
<td>Syntax: .gobject target [#go_id\#go_name_part] Locate and show position nearest gameobject. If #go_id or #go_name_part provide then locate and show position of nearest gameobject with gameobject template id #go_id or name included #go_name_part as part.</td>
</tr>
<tr>
<td>gobject set phase</td>
<td>2</td>
<td>Syntax: .gobject set phase #guid #phasemask Gameobject with DB guid #guid phasemask changed to #phasemask with related world vision update for players. Gameobject state saved to DB and persistent.</td>
</tr>
<tr>
<td>gobject turn</td>
<td>2</td>
<td>Syntax: .gobject turn #goguid Set for gameobject #goguid orientation same as current character orientation.</td>
</tr>
<tr>
<td>gobject</td>
<td>2</td>
<td>Syntax: .gobject $subcommand Type .gobject to see the list of possible subcommands or .help gobject $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>summon</td>
<td>1</td>
<td>Syntax: .summon [$charactername] Teleport the given character to you. Character can be offline.</td>
</tr>
<tr>
<td>gps</td>
<td>1</td>
<td>Syntax: .gps [$name\$shift-link] Display the position information for a selected character or creature (also if player name $name provided then for named player, or if creature/gameobject shift-link provided then pointed creature/gameobject if it loaded). Position information includes X, Y, Z, and orientation, map Id and zone Id</td>
</tr>
<tr>
<td>groupsummon</td>
<td>1</td>
<td>Syntax: .groupsummon [$charactername] Teleport the given character and his group to you. Teleported only online characters but original selected group member can be offline.</td>
</tr>
<tr>
<td>guid</td>
<td>2</td>
<td>Syntax: .guid Display the GUID for the selected character.</td>
</tr>
<tr>
<td>guild create</td>
<td>2</td>
<td>Syntax: .guild create [$GuildLeaderName] "$GuildName" Create a guild named $GuildName with the player $GuildLeaderName (or selected) as leader. Guild name must in quotes.</td>
</tr>
<tr>
<td>guild delete</td>
<td>2</td>
<td>Syntax: .guild delete "$GuildName" Delete guild $GuildName. Guild name must in quotes.</td>
</tr>
<tr>
<td>guild invite</td>
<td>2</td>
<td>Syntax: .guild invite [$CharacterName] "$GuildName" Add player $CharacterName (or selected) into a guild $GuildName. Guild name must in quotes.</td>
</tr>
<tr>
<td>guild rank</td>
<td>2</td>
<td>Syntax: .guild rank [$CharacterName] #Rank Set for player $CharacterName (or selected) rank #Rank in a guild.</td>
</tr>
<tr>
<td>guild uninvite</td>
<td>2</td>
<td>Syntax: .guild uninvite [$CharacterName] Remove player $CharacterName (or selected) from a guild.</td>
</tr>
<tr>
<td>guild</td>
<td>3</td>
<td>Syntax: .guild $subcommand Type .guild to see the list of possible subcommands or .help guild $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>help</td>
<td>0</td>
<td>Syntax: .help [$command] Display usage instructions for the given $command. If no $command provided show list available commands.</td>
</tr>
<tr>
<td>hidearea</td>
<td>3</td>
<td>Syntax: .hidearea #areaid Hide the area of #areaid to the selected character. If no character is selected, hide this area to you.</td>
</tr>
<tr>
<td>honor add</td>
<td>2</td>
<td>Syntax: .honor add $amount Add a certain amount of honor (gained today) to the selected player.</td>
</tr>
<tr>
<td>honor add kill</td>
<td>2</td>
<td>Syntax: .honor add kill Add the targeted unit as one of your pvp kills today (you only get honor if it's a racial leader or a player)</td>
</tr>
<tr>
<td>honor update</td>
<td>2</td>
<td>Syntax: .honor update Force the yesterday's honor fields to be updated with today's data, which will get reset for the selected player.</td>
</tr>
<tr>
<td>honor</td>
<td>2</td>
<td>Syntax: .honor $subcommand Type .honor to see the list of possible subcommands or .help honor $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>modify talentpoints</td>
<td>1</td>
<td>Syntax: .modify talentpoints #amount Set free talent points for selected character or character's pet. It will be reset to default expected at next levelup/login/quest reward.</td>
</tr>
<tr>
<td>instance listbinds</td>
<td>3</td>
<td>Syntax: .instance listbinds Lists the binds of the selected player.</td>
</tr>
<tr>
<td>instance savedata</td>
<td>3</td>
<td>Syntax: .instance savedata Save the InstanceData for the current player's map to the DB.</td>
</tr>
<tr>
<td>instance stats</td>
<td>3</td>
<td>Syntax: .instance stats Shows statistics about instances.</td>
</tr>
<tr>
<td>instance unbind</td>
<td>3</td>
<td>Syntax: .instance unbind &lt;mapid\all> [difficulty] Clear all/some of player's binds</td>
</tr>
<tr>
<td>instance</td>
<td>3</td>
<td>Syntax: .instance $subcommand Type .instance to see the list of possible subcommands or .help instance $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>itemmove</td>
<td>2</td>
<td>Syntax: .itemmove #sourceslotid #destinationslotid Move an item from slots #sourceslotid to #destinationslotid in your inventory Not yet implemented</td>
</tr>
<tr>
<td>kick</td>
<td>2</td>
<td>Syntax: .kick [$charactername] [$reason] Kick the given character name from the world with or without reason. If no character name is provided then the selected player (except for yourself) will be kicked. If no reason is provided, default is "No Reason".</td>
</tr>
<tr>
<td>learn all my talents</td>
<td>3</td>
<td>Syntax: .learn all my talents Learn all talents (and spells with first rank learned as talent) available for his class.</td>
</tr>
<tr>
<td>learn all my spells</td>
<td>3</td>
<td>Syntax: .learn all my spells Learn all spells (except talents and spells with first rank learned as talent) available for his class.</td>
</tr>
<tr>
<td>learn all my pettalents</td>
<td>3</td>
<td>Syntax: .learn all my pettalents Learn all talents for your pet available for his creature type (only for hunter pets).</td>
</tr>
<tr>
<td>learn all my class</td>
<td>3</td>
<td>Syntax: .learn all my class Learn all spells and talents available for his class.</td>
</tr>
<tr>
<td>learn all gm</td>
<td>2</td>
<td>Syntax: .learn all gm Learn all default spells for Game Masters.</td>
</tr>
<tr>
<td>learn all lang</td>
<td>1</td>
<td>Syntax: .learn all lang Learn all languages</td>
</tr>
<tr>
<td>learn all default</td>
<td>1</td>
<td>Syntax: .learn all default [$playername] Learn for selected/$playername player all default spells for his race/class and spells rewarded by completed quests.</td>
</tr>
<tr>
<td>learn</td>
<td>3</td>
<td>Syntax: .learn #spell [all] Selected character learn a spell of id #spell. If 'all' provided then all ranks learned.</td>
</tr>
<tr>
<td>modify scale</td>
<td>1</td>
<td>.modify scale #scale Modify size of the selected player or creature to "normal scale"*rate. If no player or creature is selected, modify your size. #rate may range from 0.1 to 10.</td>
</tr>
<tr>
<td>learn all crafts</td>
<td>2</td>
<td>Syntax: .learn crafts Learn all professions and recipes.</td>
</tr>
<tr>
<td>levelup</td>
<td>3</td>
<td>Syntax: .levelup [$playername] [#numberoflevels] Increase/decrease the level of character with $playername (or the selected if not name provided) by #numberoflevels Or +1 if no #numberoflevels provided). If #numberoflevels is omitted, the level will be increase by 1. If #numberoflevels is 0, the same level will be restarted. If no character is selected and name not provided, increase your level. Command can be used for offline character. All stats and dependent values recalculated. At level decrease talents can be reset if need. Also at level decrease equipped items with greater level requirement can be lost.</td>
</tr>
<tr>
<td>linkgrave</td>
<td>3</td>
<td>Syntax: .linkgrave #graveyard_id [alliance\horde] Link current zone to graveyard for any (or alliance/horde faction ghosts). This let character ghost from zone teleport to graveyard after die if graveyard is nearest from linked to zone and accept ghost of this faction. Add only single graveyard at another map and only if no graveyards linked (or planned linked at same map).</td>
</tr>
<tr>
<td>list auras</td>
<td>3</td>
<td>Syntax: .list auras List auras (passive and active) of selected creature or player. If no creature or player is selected, list your own auras.</td>
</tr>
<tr>
<td>list creature</td>
<td>3</td>
<td>Syntax: .list creature #creature_id [#max_count] Output creatures with creature id #creature_id found in world. Output creature guids and coordinates sorted by distance from character. Will be output maximum #max_count creatures. If #max_count not provided use 10 as default value.</td>
</tr>
<tr>
<td>list item</td>
<td>3</td>
<td>Syntax: .list item #item_id [#max_count] Output items with item id #item_id found in all character inventories, mails, auctions, and guild banks. Output item guids, item owner guid, owner account and owner name (guild name and guid in case guild bank). Will be output maximum #max_count items. If #max_count not provided use 10 as default value.</td>
</tr>
<tr>
<td>list object</td>
<td>3</td>
<td>Syntax: .list object #gameobject_id [#max_count] Output gameobjects with gameobject id #gameobject_id found in world. Output gameobject guids and coordinates sorted by distance from character. Will be output maximum #max_count gameobject. If #max_count not provided use 10 as default value.</td>
</tr>
<tr>
<td>list</td>
<td>3</td>
<td>Syntax: .list $subcommand Type .list to see the list of possible subcommands or .help list $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>listfreeze</td>
<td>1</td>
<td>Syntax: .listfreeze Search and output all frozen players.</td>
</tr>
<tr>
<td>wp reload</td>
<td>3</td>
<td>Syntax: .wp reload $pathid Load path changes ingame - IMPORTANT: must be applied first for new paths before .wp load #pathid</td>
</tr>
<tr>
<td>reload spell_group</td>
<td>3</td>
<td>Syntax: .reload spell_group Reload spell_group table.</td>
</tr>
<tr>
<td>lookup area</td>
<td>1</td>
<td>Syntax: .lookup area $namepart Looks up an area by $namepart, and returns all matches with their area ID's.</td>
</tr>
<tr>
<td>lookup creature</td>
<td>3</td>
<td>Syntax: .lookup creature $namepart Looks up a creature by $namepart, and returns all matches with their creature ID's.</td>
</tr>
<tr>
<td>lookup event</td>
<td>2</td>
<td>Syntax: .lookup event $name Attempts to find the ID of the event with the provided $name.</td>
</tr>
<tr>
<td>lookup faction</td>
<td>3</td>
<td>Syntax: .lookup faction $name Attempts to find the ID of the faction with the provided $name.</td>
</tr>
<tr>
<td>lookup item</td>
<td>3</td>
<td>Syntax: .lookup item $itemname Looks up an item by $itemname, and returns all matches with their Item ID's.</td>
</tr>
<tr>
<td>lookup itemset</td>
<td>3</td>
<td>Syntax: .lookup itemset $itemname Looks up an item set by $itemname, and returns all matches with their Item set ID's.</td>
</tr>
<tr>
<td>lookup map</td>
<td>3</td>
<td>Syntax: .lookup map $namepart Looks up a map by $namepart, and returns all matches with their map ID's.</td>
</tr>
<tr>
<td>lookup object</td>
<td>3</td>
<td>Syntax: .lookup object $objname Looks up an gameobject by $objname, and returns all matches with their Gameobject ID's.</td>
</tr>
<tr>
<td>lookup player account</td>
<td>2</td>
<td>Syntax: .lookup player account $account ($limit) Searchs players, which account username is $account with optional parametr $limit of results.</td>
</tr>
<tr>
<td>lookup player email</td>
<td>2</td>
<td>Syntax: .lookup player email $email ($limit) Searchs players, which account email is $email with optional parametr $limit of results.</td>
</tr>
<tr>
<td>lookup player ip</td>
<td>2</td>
<td>Syntax: .lookup player ip $ip ($limit) Searchs players, which account ast_ip is $ip with optional parametr $limit of results.</td>
</tr>
<tr>
<td>lookup quest</td>
<td>3</td>
<td>Syntax: .lookup quest $namepart Looks up a quest by $namepart, and returns all matches with their quest ID's.</td>
</tr>
<tr>
<td>lookup skill</td>
<td>3</td>
<td>Syntax: .lookup skill $$namepart Looks up a skill by $namepart, and returns all matches with their skill ID's.</td>
</tr>
<tr>
<td>lookup spell</td>
<td>3</td>
<td>Syntax: .lookup spell $namepart Looks up a spell by $namepart, and returns all matches with their spell ID's.</td>
</tr>
<tr>
<td>lookup taxinode</td>
<td>3</td>
<td>Syntax: .lookup taxinode $substring Search and output all taxinodes with provide $substring in name.</td>
</tr>
<tr>
<td>lookup tele</td>
<td>1</td>
<td>Syntax: .lookup tele $substring Search and output all .tele command locations with provide $substring in name.</td>
</tr>
<tr>
<td>lookup</td>
<td>3</td>
<td>Syntax: .lookup $subcommand Type .lookup to see the list of possible subcommands or .help lookup $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>maxskill</td>
<td>3</td>
<td>Syntax: .maxskill Sets all skills of the targeted player to their maximum values for its current level.</td>
</tr>
<tr>
<td>modify speed walk</td>
<td>1</td>
<td>Syntax: .modify speed bwalk #rate Modify the speed of the selected player while running to "normal walk speed"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.</td>
</tr>
<tr>
<td>modify bit</td>
<td>1</td>
<td>Syntax: .modify bit #field #bit Toggle the #bit bit of the #field field for the selected player. If no player is selected, modify your character.</td>
</tr>
<tr>
<td>modify speed swim</td>
<td>1</td>
<td>Syntax: .modify speed swim #rate Modify the swim speed of the selected player to "normal swim speed"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.</td>
</tr>
<tr>
<td>modify drunk</td>
<td>1</td>
<td>Syntax: .modify drunk #value Set drunk level to #value (0..100). Value 0 remove drunk state, 100 is max drunked state.</td>
</tr>
<tr>
<td>modify energy</td>
<td>1</td>
<td>Syntax: .modify energy #energy Modify the energy of the selected player. If no player is selected, modify your energy.</td>
</tr>
<tr>
<td>modify faction</td>
<td>1</td>
<td>Syntax: .modify faction #factionid #flagid #npcflagid #dynamicflagid Modify the faction and flags of the selected creature. Without arguments, display the faction and flags of the selected creature.</td>
</tr>
<tr>
<td>modify speed fly</td>
<td>1</td>
<td>.modify speed fly #rate Modify the flying speed of the selected player to "normal flying speed"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.</td>
</tr>
<tr>
<td>modify gender</td>
<td>2</td>
<td>Syntax: .modify gender male/female Change gender of selected player.</td>
</tr>
<tr>
<td>modify honor</td>
<td>1</td>
<td>Syntax: .modify honor $amount Add $amount honor points to the selected player.</td>
</tr>
<tr>
<td>modify hp</td>
<td>1</td>
<td>Syntax: .modify hp #newhp Modify the hp of the selected player. If no player is selected, modify your hp.</td>
</tr>
<tr>
<td>modify mana</td>
<td>1</td>
<td>Syntax: .modify mana #newmana Modify the mana of the selected player. If no player is selected, modify your mana.</td>
</tr>
<tr>
<td>modify money</td>
<td>1</td>
<td>Syntax: .modify money #money .money #money Add or remove money to the selected player. If no player is selected, modify your money. #gold can be negative to remove money.</td>
</tr>
<tr>
<td>modify mount</td>
<td>1</td>
<td>Syntax: .modify mount #id #speed Display selected player as mounted at #id creature and set speed to #speed value.</td>
</tr>
<tr>
<td>modify phase</td>
<td>3</td>
<td>Syntax: .modify phase #phasemask Selected character phasemask changed to #phasemask with related world vision update. Change active until in game phase changed, or GM-mode enable/disable, or re-login. Character pts pasemask update to same value.</td>
</tr>
<tr>
<td>modify rage</td>
<td>1</td>
<td>Syntax: .modify rage #newrage Modify the rage of the selected player. If no player is selected, modify your rage.</td>
</tr>
<tr>
<td>modify reputation</td>
<td>2</td>
<td>Syntax: .modify reputation #repId (#repvalue \ $rankname [#delta]) Sets the selected players reputation with faction #repId to #repvalue or to $reprank. If the reputation rank name is provided, the resulting reputation will be the lowest reputation for that rank plus the delta amount, if specified. You can use '.pinfo rep' to list all known reputation ids, or use '.lookup faction $name' to locate a specific faction id.</td>
</tr>
<tr>
<td>modify runicpower</td>
<td>1</td>
<td>Syntax: .modify runicpower #newrunicpower Modify the runic power of the selected player. If no player is selected, modify your runic power.</td>
</tr>
<tr>
<td>modify speed</td>
<td>1</td>
<td>Syntax: .modify speed $speedtype #rate Modify the running speed of the selected player to "normal base run speed"= 1. If no player is selected, modify your speed. $speedtypes may be fly, all, walk, backwalk, or swim. #rate may range from 0.1 to 50.</td>
</tr>
<tr>
<td>modify spell</td>
<td>1</td>
<td>TODO</td>
</tr>
<tr>
<td>modify standstate</td>
<td>2</td>
<td>Syntax: .modify standstate #emoteid Change the emote of your character while standing to #emoteid.</td>
</tr>
<tr>
<td>modify speed backwalk</td>
<td>1</td>
<td>Syntax: .modify speed backwalk #rate Modify the speed of the selected player while running backwards to "normal walk back speed"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.</td>
</tr>
<tr>
<td>character titles</td>
<td>2</td>
<td>Syntax: .character titles [$player_name] Show known titles list for selected player or player find by $player_name.</td>
</tr>
<tr>
<td>modify speed all</td>
<td>1</td>
<td>Syntax: .modify aspeed #rate Modify all speeds -run,swim,run back,swim back- of the selected player to "normalbase speed for this move type"*rate. If no player is selected, modify your speed. #rate may range from 0.1 to 50.</td>
</tr>
<tr>
<td>modify</td>
<td>1</td>
<td>Syntax: .modify $subcommand Type .modify to see the list of possible subcommands or .help modify $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>movegens</td>
<td>3</td>
<td>Syntax: .movegens Show movement generators stack for selected creature or player.</td>
</tr>
<tr>
<td>mute</td>
<td>1</td>
<td>Syntax: .mute [$playerName] $timeInMinutes [$reason] Disible chat messaging for any character from account of character $playerName (or currently selected) at $timeInMinutes minutes. Player can be offline.</td>
</tr>
<tr>
<td>nameannounce</td>
<td>1</td>
<td>Syntax: .nameannounce $announcement. Send an announcement to all online players, displaying the name of the sender.</td>
</tr>
<tr>
<td>appear</td>
<td>1</td>
<td>Syntax: .appear [$charactername] Teleport to the given character. Either specify the character name or click on the character's portrait,e.g. when you are in a group. Character can be offline.</td>
</tr>
<tr>
<td>neargrave</td>
<td>3</td>
<td>Syntax: .neargrave [alliance\horde] Find nearest graveyard linked to zone (or only nearest from accepts alliance or horde faction ghosts).</td>
</tr>
<tr>
<td>notify</td>
<td>1</td>
<td>Syntax: .notify $MessageToBroadcast Send a global message to all players online in screen.</td>
</tr>
<tr>
<td>npc set phase</td>
<td>2</td>
<td>Syntax: .npc set phase #phasemask Selected unit or pet phasemask changed to #phasemask with related world vision update for players. In creature case state saved to DB and persistent. In pet case change active until in game phase changed for owner, owner re-login, or GM-mode enable/disable..</td>
</tr>
<tr>
<td>npc set movetype</td>
<td>2</td>
<td>Syntax: .npc set movetype [#creature_guid] stay/random/way [NODEL] Set for creature pointed by #creature_guid (or selected if #creature_guid not provided) movement type and move it to respawn position (if creature alive). Any existing waypoints for creature will be removed from the database if you do not use NODEL. If the creature is dead then movement type will applied at creature respawn. Make sure you use NODEL, if you want to keep the waypoints.</td>
</tr>
<tr>
<td>npc set model</td>
<td>2</td>
<td>Syntax: .npc set model #displayid Change the model id of the selected creature to #displayid.</td>
</tr>
<tr>
<td>npc set link</td>
<td>2</td>
<td>Syntax: .npc set link $creatureGUID Links respawn of selected creature to the condition that $creatureGUID defined is alive.</td>
</tr>
<tr>
<td>wpgps</td>
<td>3</td>
<td>Syntax: .wpgps Output current position to sql developer log as partial SQL query to be used in pathing</td>
</tr>
<tr>
<td>npc say</td>
<td>1</td>
<td>Syntax: .npc say $message Make selected creature say specified message.</td>
</tr>
<tr>
<td>npc move</td>
<td>2</td>
<td>Syntax: .npc move [#creature_guid] Move the targeted creature spawn point to your coordinates.</td>
</tr>
<tr>
<td>npc playemote</td>
<td>3</td>
<td>Syntax: .npc playemote #emoteid Make the selected creature emote with an emote of id #emoteid.</td>
</tr>
<tr>
<td>npc follow stop</td>
<td>2</td>
<td>Syntax: .npc follow stop Selected creature (non pet) stop follow you.</td>
</tr>
<tr>
<td>npc info</td>
<td>3</td>
<td>Syntax: .npc info Display a list of details for the selected creature. The list includes: - GUID, Faction, NPC flags, Entry ID, Model ID, - Level, - Health (current/maximum), - Field flags, dynamic flags, faction template, - Position information, - and the creature type, e.g. if the creature is a vendor.</td>
</tr>
<tr>
<td>npc follow</td>
<td>2</td>
<td>Syntax: .npc follow start Selected creature start follow you until death/fight/etc.</td>
</tr>
<tr>
<td>npc set flag</td>
<td>2</td>
<td>Syntax: .npc set flag #npcflag Set the NPC flags of creature template of the selected creature and selected creature to #npcflag. NPC flags will applied to all creatures of selected creature template after server restart or grid unload/load.</td>
</tr>
<tr>
<td>npc set factionid</td>
<td>2</td>
<td>Syntax: .npc set factionid #factionid Set the faction of the selected creature to #factionid.</td>
</tr>
<tr>
<td>npc set level</td>
<td>2</td>
<td>Syntax: .npc set level #level Change the level of the selected creature to #level. #level may range from 1 to (CONFIG_MAX_PLAYER_LEVEL) + 3.</td>
</tr>
<tr>
<td>npc delete</td>
<td>2</td>
<td>Syntax: .npc delete [#guid] Delete creature with guid #guid (or the selected if no guid is provided)</td>
</tr>
<tr>
<td>npc delete item</td>
<td>2</td>
<td>Syntax: .npc delete item #itemId Remove item #itemid from item list of selected vendor.</td>
</tr>
<tr>
<td>npc set allowmove</td>
<td>3</td>
<td>Syntax: .npc set allowmove Enable or disable movement creatures in world. Not implemented.</td>
</tr>
<tr>
<td>npc set entry</td>
<td>3</td>
<td>Syntax: .npc set entry $entry Switch selected creature with another entry from creature_template. - New creature.id value not saved to DB.</td>
</tr>
<tr>
<td>npc add move</td>
<td>2</td>
<td>Syntax: .npc add move #creature_guid [#waittime] Add your current location as a waypoint for creature with guid #creature_guid. And optional add wait time.</td>
</tr>
<tr>
<td>npc add item</td>
<td>2</td>
<td>Syntax: .npc add item #itemId &lt;#maxcount>&lt;#incrtime>&lt;#extendedcost>r Add item #itemid to item list of selected vendor. Also optionally set max count item in vendor item list and time to item count restoring and items ExtendedCost.</td>
</tr>
<tr>
<td>npc add formation</td>
<td>1</td>
<td>Syntax: .npc add formation $leader Add selected creature to a leader's formation.</td>
</tr>
<tr>
<td>npc</td>
<td>1</td>
<td>Syntax: .npc $subcommand Type .npc to see the list of possible subcommands or .help npc $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>npc add</td>
<td>2</td>
<td>Syntax: .npc add #creatureid Spawn a creature by the given template id of #creatureid.</td>
</tr>
<tr>
<td>pdump load</td>
<td>3</td>
<td>Syntax: .pdump load $filename $account [$newname] [$newguid] Load character dump from dump file into character list of $account with saved or $newname, with saved (or first free) or $newguid guid.</td>
</tr>
<tr>
<td>pdump write</td>
<td>3</td>
<td>Syntax: .pdump write $filename $playerNameOrGUID Write character dump with name/guid $playerNameOrGUID to file $filename.</td>
</tr>
<tr>
<td>pdump</td>
<td>3</td>
<td>Syntax: .pdump $subcommand Type .pdump to see the list of possible subcommands or .help pdump $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>pet create</td>
<td>2</td>
<td>Syntax: .pet create Creates a pet of the selected creature.</td>
</tr>
<tr>
<td>pet learn</td>
<td>2</td>
<td>Syntax: .pet learn Learn #spellid to pet.</td>
</tr>
<tr>
<td>reload spell_proc</td>
<td>3</td>
<td>Syntax: .reload spell_proc Reload spell_proc table.</td>
</tr>
<tr>
<td>pet unlearn</td>
<td>2</td>
<td>Syntax: .pet unlean unLearn #spellid to pet.</td>
</tr>
<tr>
<td>pet</td>
<td>2</td>
<td>Syntax: .pet $subcommand Type .pet to see the list of possible subcommands or .help pet $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>pinfo</td>
<td>2</td>
<td>Syntax: .pinfo [$player_name/#GUID] Output account information for selected player or player find by $player_name or #GUID.</td>
</tr>
<tr>
<td>playall</td>
<td>2</td>
<td>Syntax: .playall #soundid Player a sound to whole server.</td>
</tr>
<tr>
<td>possess</td>
<td>3</td>
<td>Syntax: .possess Possesses indefinitely the selected creature.</td>
</tr>
<tr>
<td>quest add</td>
<td>3</td>
<td>Syntax: .quest add #quest_id Add to character quest log quest #quest_id. Quest started from item can't be added by this command but correct .additem call provided in command output.</td>
</tr>
<tr>
<td>quest complete</td>
<td>3</td>
<td>Syntax: .quest complete #questid Mark all quest objectives as completed for target character active quest. After this target character can go and get quest reward.</td>
</tr>
<tr>
<td>quest remove</td>
<td>3</td>
<td>Syntax: .quest remove #quest_id Set quest #quest_id state to not completed and not active (and remove from active quest list) for selected player.</td>
</tr>
<tr>
<td>quest</td>
<td>3</td>
<td>Syntax: .quest $subcommand Type .quest to see the list of possible subcommands or .help quest $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>recall</td>
<td>1</td>
<td>Syntax: .recall [$playername] Teleport $playername or selected player to the place where he has been before last use of a teleportation command. If no $playername is entered and no player is selected, it will teleport you.</td>
</tr>
<tr>
<td>reload all quest</td>
<td>3</td>
<td>Syntax: .reload all quest Reload all quest related tables if reload support added for this table and this table can be <em>safe</em> reloaded.</td>
</tr>
<tr>
<td>reload all npc</td>
<td>3</td>
<td>Syntax: .reload all npc Reload npc_option, npc_trainer, npc vendor, points of interest tables.</td>
</tr>
<tr>
<td>reload all loot</td>
<td>3</td>
<td>Syntax: .reload all loot Reload all <code>*_loot_template</code> tables. This can be slow operation with lags for server run.</td>
</tr>
<tr>
<td>reload all item</td>
<td>3</td>
<td>Syntax: .reload all item Reload page_text, item_enchantment_table tables.</td>
</tr>
<tr>
<td>reload all locales</td>
<td>3</td>
<td>Syntax: .reload all locales Reload all <code>locales_*</code> tables with reload support added and that can be <em>safe</em> reloaded.</td>
</tr>
<tr>
<td>reload all gossips</td>
<td>3</td>
<td>Syntax: .reload all gossips Reload gossip_menu, gossip_menu_option, gossip_scripts, points_of_interest tables.</td>
</tr>
<tr>
<td>reload all</td>
<td>3</td>
<td>Syntax: .reload all Reload all tables with reload support added and that can be <em>safe</em> reloaded.</td>
</tr>
<tr>
<td>reload areatrigger_involvedrelation</td>
<td>3</td>
<td>Syntax: .reload areatrigger_involvedrelation Reload areatrigger_involvedrelation table.</td>
</tr>
<tr>
<td>reload areatrigger_tavern</td>
<td>3</td>
<td>Syntax: .reload areatrigger_tavern Reload areatrigger_tavern table.</td>
</tr>
<tr>
<td>reload areatrigger_teleport</td>
<td>3</td>
<td>Syntax: .reload areatrigger_teleport Reload areatrigger_teleport table.</td>
</tr>
<tr>
<td>reload autobroadcast</td>
<td>3</td>
<td>Syntax: .reload autobroadcast Reload autobroadcast table.</td>
</tr>
<tr>
<td>reload command</td>
<td>3</td>
<td>Syntax: .reload command Reload command table.</td>
</tr>
<tr>
<td>reload config</td>
<td>3</td>
<td>Syntax: .reload config Reload config settings (by default stored in trinityd.conf). Not all settings can be change at reload: some new setting values will be ignored until restart, some values will applied with delay or only to new objects/maps, some values will explicitly rejected to change at reload.</td>
</tr>
<tr>
<td>reload creature_questender</td>
<td>3</td>
<td>Syntax: .reload creature_questender Reload creature_questender table.</td>
</tr>
<tr>
<td>reload creature_linked_respawn</td>
<td>2</td>
<td>Syntax: .reload creature_linked_respawn Reload creature_linked_respawn table.</td>
</tr>
<tr>
<td>reload creature_loot_template</td>
<td>3</td>
<td>Syntax: .reload creature_loot_template Reload creature_loot_template table.</td>
</tr>
<tr>
<td>reload creature_queststarter</td>
<td>3</td>
<td>Syntax: .reload creature_queststarter Reload creature_queststarter table.</td>
</tr>
<tr>
<td>reload disenchant_loot_template</td>
<td>3</td>
<td>Syntax: .reload disenchant_loot_template Reload disenchant_loot_template table.</td>
</tr>
<tr>
<td>reload event_scripts</td>
<td>3</td>
<td>Syntax: .reload event_scripts Reload event_scripts table.</td>
</tr>
<tr>
<td>reload fishing_loot_template</td>
<td>3</td>
<td>Syntax: .reload fishing_loot_template Reload fishing_loot_template table.</td>
</tr>
<tr>
<td>reload game_graveyard_zone</td>
<td>3</td>
<td>Syntax: .reload game_graveyard_zone Reload game_graveyard_zone table.</td>
</tr>
<tr>
<td>reload game_tele</td>
<td>3</td>
<td>Syntax: .reload game_tele Reload game_tele table.</td>
</tr>
<tr>
<td>reload gameobject_questender</td>
<td>3</td>
<td>Syntax: .reload gameobject_questender Reload gameobject_questender table.</td>
</tr>
<tr>
<td>reload gameobject_loot_template</td>
<td>3</td>
<td>Syntax: .reload gameobject_loot_template Reload gameobject_loot_template table.</td>
</tr>
<tr>
<td>reload gameobject_queststarter</td>
<td>3</td>
<td>Syntax: .reload gameobject_queststarter Reload gameobject_queststarter table.</td>
</tr>
<tr>
<td>reload gm_tickets</td>
<td>3</td>
<td>Syntax: .reload gm_tickets Reload gm_tickets table.</td>
</tr>
<tr>
<td>reload item_enchantment_template</td>
<td>3</td>
<td>Syntax: .reload item_enchantment_template Reload item_enchantment_template table.</td>
</tr>
<tr>
<td>reload item_loot_template</td>
<td>3</td>
<td>Syntax: .reload item_loot_template Reload item_loot_template table.</td>
</tr>
<tr>
<td>reload locales_creature</td>
<td>3</td>
<td>Syntax: .reload locales_creature Reload locales_creature table.</td>
</tr>
<tr>
<td>reload locales_gameobject</td>
<td>3</td>
<td>Syntax: .reload locales_gameobject Reload locales_gameobject table.</td>
</tr>
<tr>
<td>reload locales_item</td>
<td>3</td>
<td>Syntax: .reload locales_item Reload locales_item table.</td>
</tr>
<tr>
<td>reload locales_npc_text</td>
<td>3</td>
<td>Syntax: .reload locales_npc_text Reload locales_npc_text table.</td>
</tr>
<tr>
<td>reload locales_page_text</td>
<td>3</td>
<td>Syntax: .reload locales_page_text Reload locales_page_text table.</td>
</tr>
<tr>
<td>reload locales_points_of_interest</td>
<td>3</td>
<td>Syntax: .reload locales_points_of_interest Reload locales_point_of_interest table.</td>
</tr>
<tr>
<td>reload locales_quest</td>
<td>3</td>
<td>Syntax: .reload locales_quest Reload locales_quest table.</td>
</tr>
<tr>
<td>reload milling_loot_template</td>
<td>3</td>
<td>Syntax: .reload milling_loot_template Reload milling_loot_template table.</td>
</tr>
<tr>
<td>reload npc_trainer</td>
<td>3</td>
<td>Syntax: .reload npc_trainer Reload npc_trainer table.</td>
</tr>
<tr>
<td>reload npc_vendor</td>
<td>3</td>
<td>Syntax: .reload npc_vendor Reload npc_vendor table.</td>
</tr>
<tr>
<td>reload page_text</td>
<td>3</td>
<td>Syntax: .reload page_text Reload page_text table.</td>
</tr>
<tr>
<td>reload pickpocketing_loot_template</td>
<td>3</td>
<td>Syntax: .reload pickpocketing_loot_template Reload pickpocketing_loot_template table.</td>
</tr>
<tr>
<td>reload points_of_interest</td>
<td>3</td>
<td>Syntax: .reload points_of_interest Reload points_of_interest table.</td>
</tr>
<tr>
<td>reload prospecting_loot_template</td>
<td>3</td>
<td>Syntax: .reload prospecting_loot_template Reload prospecting_loot_template table.</td>
</tr>
<tr>
<td>lookup spell id</td>
<td>3</td>
<td>Syntax: .lookup spell id #spellid Looks up a spell by #spellid, and returns the match with its spell name.</td>
</tr>
<tr>
<td>reload mail_loot_template</td>
<td>3</td>
<td>Syntax: .reload quest_mail_loot_template Reload quest_mail_loot_template table.</td>
</tr>
<tr>
<td>reload quest_template</td>
<td>3</td>
<td>Syntax: .reload quest_template Reload quest_template table.</td>
</tr>
<tr>
<td>reload reference_loot_template</td>
<td>3</td>
<td>Syntax: .reload reference_loot_template Reload reference_loot_template table.</td>
</tr>
<tr>
<td>reload reserved_name</td>
<td>3</td>
<td>Syntax: .reload reserved_name Reload reserved_name table.</td>
</tr>
<tr>
<td>reload skill_discovery_template</td>
<td>3</td>
<td>Syntax: .reload skill_discovery_template Reload skill_discovery_template table.</td>
</tr>
<tr>
<td>reload skill_extra_item_template</td>
<td>3</td>
<td>Syntax: .reload skill_extra_item_template Reload skill_extra_item_template table.</td>
</tr>
<tr>
<td>reload skill_fishing_base_level</td>
<td>3</td>
<td>Syntax: .reload skill_fishing_base_level Reload skill_fishing_base_level table.</td>
</tr>
<tr>
<td>reload skinning_loot_template</td>
<td>3</td>
<td>Syntax: .reload skinning_loot_template Reload skinning_loot_template table.</td>
</tr>
<tr>
<td>reload spell_area</td>
<td>3</td>
<td>Syntax: .reload spell_area Reload spell_area table.</td>
</tr>
<tr>
<td>reload spell_bonus_data</td>
<td>3</td>
<td>Syntax: .reload spell_bonus_data Reload spell_bonus_data table.</td>
</tr>
<tr>
<td>reload disables</td>
<td>3</td>
<td>Syntax: .reload disables Reload disables table.</td>
</tr>
<tr>
<td>reload spell_group_stack_rules</td>
<td>3</td>
<td>Syntax: .reload spell_group Reload spell_group_stack_rules table.</td>
</tr>
<tr>
<td>reload spell_learn_spell</td>
<td>3</td>
<td>Syntax: .reload spell_learn_spell Reload spell_learn_spell table.</td>
</tr>
<tr>
<td>reload spell_linked_spell</td>
<td>3</td>
<td>Usage: .reload spell_linked_spell Reloads the spell_linked_spell DB table.</td>
</tr>
<tr>
<td>reload spell_loot_template</td>
<td>3</td>
<td>Syntax: .reload spell_loot_template Reload spell_loot_template table.</td>
</tr>
<tr>
<td>reload spell_pet_auras</td>
<td>3</td>
<td>Syntax: .reload spell_pet_auras Reload spell_pet_auras table.</td>
</tr>
<tr>
<td>reload spell_proc_event</td>
<td>3</td>
<td>Syntax: .reload spell_proc_event Reload spell_proc_event table.</td>
</tr>
<tr>
<td>reload spell_required</td>
<td>3</td>
<td>Syntax: .reload spell_required Reload spell_required table.</td>
</tr>
<tr>
<td>reload item_set_names</td>
<td>3</td>
<td>Syntax: .reload item_set_names Reload item_set_names table.</td>
</tr>
<tr>
<td>reload spell_scripts</td>
<td>3</td>
<td>Syntax: .reload spell_scripts Reload spell_scripts table.</td>
</tr>
<tr>
<td>reload spell_target_position</td>
<td>3</td>
<td>Syntax: .reload spell_target_position Reload spell_target_position table.</td>
</tr>
<tr>
<td>reload spell_threats</td>
<td>3</td>
<td>Syntax: .reload spell_threats Reload spell_threats table.</td>
</tr>
<tr>
<td>reload acore_string</td>
<td>3</td>
<td>Syntax: .reload acore_string Reload acore_string table.</td>
</tr>
<tr>
<td>reload waypoint_scripts</td>
<td>3</td>
<td>Syntax: .reload waypoint_scripts Reload waypoint_scripts table.</td>
</tr>
<tr>
<td>reload</td>
<td>3</td>
<td>Syntax: .reload $subcommand Type .reload to see the list of possible subcommands or .help reload $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>repairitems</td>
<td>2</td>
<td>Syntax: .repairitems Repair all selected player's items.</td>
</tr>
<tr>
<td>reset achievements</td>
<td>3</td>
<td>Syntax: .reset achievements [$playername] Reset achievements data for selected or named (online or offline) character. Achievements for persistance progress data like completed quests/etc re-filled at reset. Achievements for events like kills/casts/etc will lost.</td>
</tr>
<tr>
<td>reset all</td>
<td>3</td>
<td>Syntax: .reset all spells Syntax: .reset all talents Request reset spells or talents (including talents for all character's pets if any) at next login each existed character.</td>
</tr>
<tr>
<td>reset honor</td>
<td>3</td>
<td>Syntax: .reset honor [Playername] Reset all honor data for targeted character.</td>
</tr>
<tr>
<td>reset level</td>
<td>3</td>
<td>Syntax: .reset level [Playername] Reset level to 1 including reset stats and talents. Equipped items with greater level requirement can be lost.</td>
</tr>
<tr>
<td>reset spells</td>
<td>3</td>
<td>Syntax: .reset spells [Playername] Removes all non-original spells from spellbook. . Playername can be name of offline character.</td>
</tr>
<tr>
<td>reset stats</td>
<td>3</td>
<td>Syntax: .reset stats [Playername] Resets(recalculate) all stats of the targeted player to their original VALUESat current level.</td>
</tr>
<tr>
<td>reset talents</td>
<td>3</td>
<td>Syntax: .reset talents [Playername] Removes all talents of the targeted player or pet or named player. Playername can be name of offline character. With player talents also will be reset talents for all character's pets if any.</td>
</tr>
<tr>
<td>reset</td>
<td>3</td>
<td>Syntax: .reset $subcommand Type .reset to see the list of possible subcommands or .help reset $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>respawn</td>
<td>3</td>
<td>Syntax: .respawn Respawn all nearest creatures and GO without waiting respawn time expiration.</td>
</tr>
<tr>
<td>revive</td>
<td>3</td>
<td>Syntax: .revive Revive the selected player. If no player is selected, it will revive you.</td>
</tr>
<tr>
<td>save</td>
<td>0</td>
<td>Syntax: .save Saves your character.</td>
</tr>
<tr>
<td>saveall</td>
<td>1</td>
<td>Syntax: .saveall Save all characters in game.</td>
</tr>
<tr>
<td>send items</td>
<td>3</td>
<td>Syntax: .send items #playername "#subject" "#text" itemid1[:count1] itemid2[:count2] ... itemidN[:countN] Send a mail to a player. Subject and mail text must be in "". If for itemid not provided related count values then expected 1, if count > max items in stack then items will be send in required amount stacks. All stacks amount in mail limited to 12.</td>
</tr>
<tr>
<td>send mail</td>
<td>1</td>
<td>Syntax: .send mail #playername "#subject" "#text" Send a mail to a player. Subject and mail text must be in "".</td>
</tr>
<tr>
<td>send message</td>
<td>3</td>
<td>Syntax: .send message $playername $message Send screen message to player from ADMINISTRATOR.</td>
</tr>
<tr>
<td>send money</td>
<td>3</td>
<td>Syntax: .send money #playername "#subject" "#text" #money Send mail with money to a player. Subject and mail text must be in "".</td>
</tr>
<tr>
<td>server corpses</td>
<td>2</td>
<td>Syntax: .server corpses Triggering corpses expire check in world.</td>
</tr>
<tr>
<td>server exit</td>
<td>4</td>
<td>Syntax: .server exit Terminate trinity-core NOW. Exit code 0.</td>
</tr>
<tr>
<td>server idlerestart cancel</td>
<td>3</td>
<td>Syntax: .server idlerestart cancel Cancel the restart/shutdown timer if any.</td>
</tr>
<tr>
<td>server idlerestart</td>
<td>3</td>
<td>Syntax: .server idlerestart #delay Restart the server after #delay seconds if no active connections are present (no players). Use #exit_code or 2 as program exit code.</td>
</tr>
<tr>
<td>server idleshutdown cancel</td>
<td>3</td>
<td>Syntax: .server idleshutdown cancel Cancel the restart/shutdown timer if any.</td>
</tr>
<tr>
<td>server idleshutdown</td>
<td>3</td>
<td>Syntax: .server idleshutdown #delay [#exit_code] Shut the server down after #delay seconds if no active connections are present (no players). Use #exit_code or 0 as program exit code.</td>
</tr>
<tr>
<td>server info</td>
<td>0</td>
<td>Syntax: .server info Display server version and the number of connected players.</td>
</tr>
<tr>
<td>server motd</td>
<td>0</td>
<td>Syntax: .server motd Show server Message of the day.</td>
</tr>
<tr>
<td>server plimit</td>
<td>3</td>
<td>Syntax: .server plimit [#num\-1\-2\-3\reset\player\moderator\gamemaster\administrator] Without arg show current player amount and security level limitations for login to server, with arg set player linit ($num > 0) or securiti limitation ($num &lt; 0 or security leme name. With <code>reset</code> sets player limit to the one in the config file</td>
</tr>
<tr>
<td>server restart cancel</td>
<td>3</td>
<td>Syntax: .server restart cancel Cancel the restart/shutdown timer if any.</td>
</tr>
<tr>
<td>server restart</td>
<td>3</td>
<td>Syntax: .server restart #delay Restart the server after #delay seconds. Use #exit_code or 2 as program exit code.</td>
</tr>
<tr>
<td>server set closed</td>
<td>3</td>
<td>Syntax: server set closed on/off Sets whether the world accepts new client connectsions.</td>
</tr>
<tr>
<td>server set motd</td>
<td>3</td>
<td>Syntax: .server set motd $MOTD Set server Message of the day.</td>
</tr>
<tr>
<td>server shutdown cancel</td>
<td>3</td>
<td>Syntax: .server shutdown cancel Cancel the restart/shutdown timer if any.</td>
</tr>
<tr>
<td>server shutdown</td>
<td>3</td>
<td>Syntax: .server shutdown #delay [#exit_code] Shut the server down after #delay seconds. Use #exit_code or 0 as program exit code.</td>
</tr>
<tr>
<td>server</td>
<td>3</td>
<td>Syntax: .server $subcommand Type .server to see the list of possible subcommands or .help server $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>setskill</td>
<td>3</td>
<td>Syntax: .setskill #skill #level [#max] Set a skill of id #skill with a current skill value of #level and a maximum value of #max (or equal current maximum if not provide) for the selected character. If no character is selected, you learn the skill.</td>
</tr>
<tr>
<td>showarea</td>
<td>3</td>
<td>Syntax: .showarea #areaid Reveal the area of #areaid to the selected character. If no character is selected, reveal this area to you.</td>
</tr>
<tr>
<td>unstuck</td>
<td>0</td>
<td>Syntax: .unstuck $playername [inn/graveyard/startzone] Teleports specified player to specified location. Default location is player's current hearth location.</td>
</tr>
<tr>
<td>cheat god</td>
<td>2</td>
<td>Syntax: .cheat god [on/off] Enables or disables your character's ability to take damage.</td>
</tr>
<tr>
<td>cheat casttime</td>
<td>2</td>
<td>Syntax: .cheat casttime [on/off] Enables or disables your character's spell cast times.</td>
</tr>
<tr>
<td>tele add</td>
<td>3</td>
<td>Syntax: .tele add $name Add current your position to .tele command target locations list with name $name.</td>
</tr>
<tr>
<td>tele del</td>
<td>3</td>
<td>Syntax: .tele del $name Remove location with name $name for .tele command locations list.</td>
</tr>
<tr>
<td>tele group</td>
<td>1</td>
<td>Syntax: .tele group#location Teleport a selected player and his group members to a given location.</td>
</tr>
<tr>
<td>tele name</td>
<td>1</td>
<td>Syntax: .tele name [#playername] #location Teleport the given character to a given location. Character can be offline. To teleport to homebind, set #location to "$home" (without quotes).</td>
</tr>
<tr>
<td>tele</td>
<td>1</td>
<td>Syntax: .tele #location Teleport player to a given location.</td>
</tr>
<tr>
<td>ticket assign</td>
<td>1</td>
<td>Usage: .ticket assign $ticketid $gmname. Assigns the specified ticket to the specified Game Master.</td>
</tr>
<tr>
<td>ticket close</td>
<td>1</td>
<td>Usage: .ticket close $ticketid. Closes the specified ticket. Does not delete permanently.</td>
</tr>
<tr>
<td>ticket closedlist</td>
<td>1</td>
<td>Displays a list of closed GM tickets.</td>
</tr>
<tr>
<td>ticket comment</td>
<td>1</td>
<td>Usage: .ticket comment $ticketid $comment. Allows the adding or modifying of a comment to the specified ticket.</td>
</tr>
<tr>
<td>ticket delete</td>
<td>3</td>
<td>Usage: .ticket delete $ticketid. Deletes the specified ticket permanently. Ticket must be closed first.</td>
</tr>
<tr>
<td>ticket list</td>
<td>1</td>
<td>Displays a list of open GM tickets.</td>
</tr>
<tr>
<td>ticket onlinelist</td>
<td>1</td>
<td>Displays a list of open GM tickets whose owner is online.</td>
</tr>
<tr>
<td>ticket unassign</td>
<td>1</td>
<td>Usage: .ticket unassign $ticketid. Unassigns the specified ticket from the current assigned Game Master.</td>
</tr>
<tr>
<td>ticket viewid</td>
<td>1</td>
<td>Usage: .ticket viewid $ticketid. Returns details about specified ticket. Ticket must be open and not deleted.</td>
</tr>
<tr>
<td>ticket viewname</td>
<td>1</td>
<td>Usage: .ticket viewname $creatorname. Returns details about specified ticket. Ticket must be open and not deleted.</td>
</tr>
<tr>
<td>ticket</td>
<td>1</td>
<td>Syntax: .ticket $subcommand Type .ticket to see the list of possible subcommands or .help ticket $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>unaura</td>
<td>3</td>
<td>Syntax: .unaura #spellid Remove aura due to spell #spellid from the selected Unit.</td>
</tr>
<tr>
<td>unban account</td>
<td>3</td>
<td>Syntax: .unban account $Name Unban accounts for account name pattern.</td>
</tr>
<tr>
<td>unban character</td>
<td>3</td>
<td>Syntax: .unban character $Name Unban accounts for character name pattern.</td>
</tr>
<tr>
<td>unban ip</td>
<td>3</td>
<td>Syntax : .unban ip $Ip Unban accounts for IP pattern.</td>
</tr>
<tr>
<td>unban</td>
<td>3</td>
<td>Syntax: .unban $subcommand Type .unban to see the list of possible subcommands or .help unban $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>unbindsight</td>
<td>3</td>
<td>Syntax: .unbindsight Removes bound vision. Cannot be used while currently possessing a target.</td>
</tr>
<tr>
<td>unfreeze</td>
<td>1</td>
<td>Syntax: .unfreeze (#player) "Unfreezes" #player and enables his chat again. When using this without #name it will unfreeze your target.</td>
</tr>
<tr>
<td>unlearn</td>
<td>3</td>
<td>Syntax: .unlearn #spell [all] Unlearn for selected player a spell #spell. If 'all' provided then all ranks unlearned.</td>
</tr>
<tr>
<td>unmute</td>
<td>1</td>
<td>Syntax: .unmute [$playerName] Restore chat messaging for any character from account of character $playerName (or selected). Character can be ofline.</td>
</tr>
<tr>
<td>unpossess</td>
<td>3</td>
<td>Syntax: .unpossess If you are possessed, unpossesses yourself; otherwise unpossesses current possessed target.</td>
</tr>
<tr>
<td>cheat</td>
<td>2</td>
<td>Syntax: .cheat $subcommand Type .cheat to see the list of possible subcommands or .help cheat $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>wchange</td>
<td>3</td>
<td>Syntax: .wchange #weathertype #status Set current weather to #weathertype with an intensity of #status. #weathertype can be 1 for rain, 2 for snow, and 3 for sand. #status can be 0 for disabled, and 1 for enabled.</td>
</tr>
<tr>
<td>whispers</td>
<td>1</td>
<td>Syntax: .whispers on\off Enable/disable accepting whispers by GM from players. By default use trinityd.conf setting.</td>
</tr>
<tr>
<td>wp event</td>
<td>2</td>
<td>Syntax: .wp event $subcommand Type .path event to see the list of possible subcommands or .help path event $subcommand to see info on subcommands.</td>
</tr>
<tr>
<td>wp load</td>
<td>2</td>
<td>Syntax: .wp load $pathid Load pathid number for selected creature. Creature must have no waypoint data.</td>
</tr>
<tr>
<td>wp modify</td>
<td></td>
<td>Syntax: .wp modify $optionOptions:action Changes the value actionaction_chance Changes the value action_chancedel Deletes a selected waypointdelay Changes the value delaymove Moves a selected waypointmove_flag Changes the value move_flag</td>
</tr>
<tr>
<td>wp show</td>
<td>2</td>
<td>Syntax: .wp show $optionOptions:on $pathid (or selected creature with loaded path) - Show visual waypoints (Note: You must have GM on to see the waypoints)off Hide the visual waypoints.info Shows info for selected waypoint.first Shows visual the first waypoint.last Shows visual the last waypoint.</td>
</tr>
<tr>
<td>wp unload</td>
<td>2</td>
<td>Syntax: .wp unload Unload path for selected creature.</td>
</tr>
<tr>
<td>account addon</td>
<td>1</td>
<td>Syntax: .account addon #addon Set expansion addon level allowed. Addon values: 0 - normal, 1 - tbc, 2 - wotlk.</td>
</tr>
<tr>
<td>titles remove</td>
<td>2</td>
<td>Syntax: .titles remove #title Remove title #title (id or shift-link) from known titles list for selected player.</td>
</tr>
<tr>
<td>titles current</td>
<td>2</td>
<td>Syntax: .titles current #title Set title #title (id or shift-link) as current selected titl for selected player. If title not in known title list for player then it will be added to list.</td>
</tr>
<tr>
<td>titles add</td>
<td>2</td>
<td>Syntax: .titles add #title Add title #title (id or shift-link) to known titles list for selected player.</td>
</tr>
<tr>
<td>titles set mask</td>
<td>2</td>
<td>Syntax: .titles set mask #mask Allows user to use all titles from #mask. #mask=0 disables the title-choose-field</td>
</tr>
<tr>
<td>lookup title</td>
<td>2</td>
<td>Syntax: .lookup title $$namepart Looks up a title by $namepart, and returns all matches with their title ID's and index's.</td>
</tr>
<tr>
<td>channel set ownership</td>
<td>3</td>
<td>Syntax: .channel set ownership $channel [on/off] Grant ownership to the first person that joins the channel.</td>
</tr>
<tr>
<td>gobject info</td>
<td>2</td>
<td>Syntax: .gobject info [$object_entry] Query Gameobject information for selected gameobject or given entry.</td>
</tr>
<tr>
<td>reload creature_template</td>
<td>3</td>
<td>Syntax: .reload creature_template $entry Reload the specified creature's template.</td>
</tr>
<tr>
<td>character deleted delete</td>
<td>4</td>
<td>Syntax: .character deleted delete #guid\$name Completely deletes the selected characters. If $name is supplied, only characters with that string in their name will be deleted, if #guid is supplied, only the character with that GUID will be deleted.</td>
</tr>
<tr>
<td>reload creature_onkill_reputation</td>
<td>3</td>
<td>Syntax: .reload creature_onkill_reputation Reload creature_onkill_reputation table.</td>
</tr>
<tr>
<td>reload conditions</td>
<td>3</td>
<td>Reload conditions table.</td>
</tr>
<tr>
<td>reload locales_item_set_name</td>
<td>3</td>
<td>Syntax: .reload locales_item_set_name Reload locales_item_set_name table.</td>
</tr>
<tr>
<td>character deleted list</td>
<td>3</td>
<td>Syntax: .character deleted list [#guid\$name] Shows a list with all deleted characters. If $name is supplied, only characters with that string in their name will be selected, if #guid is supplied, only the character with that GUID will be selected.</td>
</tr>
<tr>
<td>character deleted old</td>
<td>4</td>
<td>Syntax: .character deleted old [#keepDays] Completely deletes all characters with deleted time longer #keepDays. If #keepDays not provided the used value from mangosd.conf option 'CharDelete.KeepDays'. If referenced config option disabled (use 0 value) then command can't be used without #keepDays.</td>
</tr>
<tr>
<td>character deleted restore</td>
<td>3</td>
<td>Syntax: .character deleted restore #guid\$name [$newname] [#new account] Restores deleted characters. If $name is supplied, only characters with that string in their name will be restored, if $guid is supplied, only the character with that GUID will be restored. If $newname is set, the character will be restored with that name instead of the original one. If #newaccount is set, the character will be restored to specific account character list. This works only with one character!</td>
</tr>
<tr>
<td>reload gossip_menu</td>
<td>3</td>
<td>Syntax: .reload gossip_menu Reload gossip_menu table.</td>
</tr>
<tr>
<td>reload gossip_menu_option</td>
<td>3</td>
<td>Syntax: .reload gossip_menu_option Reload gossip_menu_option table.</td>
</tr>
<tr>
<td>cast dest</td>
<td>3</td>
<td>Syntax: .cast dest #spellid #x #y #z [triggered] Selected target will cast #spellid at provided destination. If 'trigered' or part provided then spell casted with triggered flag.</td>
</tr>
<tr>
<td>reload all scripts</td>
<td>3</td>
<td>Syntax: .reload all scripts Reload gameobject_scripts, event_scripts, quest_end_scripts, quest_start_scripts, spell_scripts, db_script_string, waypoint_scripts tables.</td>
</tr>
<tr>
<td>reload locales_gossip_menu_option</td>
<td>3</td>
<td>Syntax: .reload locales_gossip_menu_option Reload locales_gossip_menu_option table.</td>
</tr>
<tr>
<td>reload quest_poi</td>
<td>3</td>
<td>Syntax: .reload quest_poi Reload quest_poi table.</td>
</tr>
<tr>
<td>reload lfg_dungeon_rewards</td>
<td>3</td>
<td>Syntax: .reload lfg_dungeon_rewards Reload lfg_dungeon_rewards table.</td>
</tr>
<tr>
<td>character changefaction</td>
<td>2</td>
<td>Syntax: .character changefaction $name Change character faction.</td>
</tr>
<tr>
<td>character changerace</td>
<td>2</td>
<td>Syntax: .character changerace $name Change character race.</td>
</tr>
<tr>
<td>ban playeraccount</td>
<td>3</td>
<td>Syntax: .ban playeraccount $Name $bantime $reason Ban account and kick player. $bantime: negative value leads to permban, otherwise use a timestring like "4d20h3s".</td>
</tr>
<tr>
<td>achievement add</td>
<td>4</td>
<td>Syntax: .achievement add $achievement Add an achievement to the targeted player. $achievement: can be either achievement id or achievement link</td>
</tr>
<tr>
<td>achievement</td>
<td>4</td>
<td>Syntax: .achievement $subcommand Type .achievement to see the list of possible subcommands or .help achievement $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>reload creature_text</td>
<td>3</td>
<td>Syntax: .reload creature_text Reload creature_text table.</td>
</tr>
<tr>
<td>debug areatriggers</td>
<td>1</td>
<td>Syntax: .debug areatriggers Toggle debug mode for areatriggers. In debug mode GM will be notified if reaching an areatrigger</td>
</tr>
<tr>
<td>learn all recipes</td>
<td>2</td>
<td>Syntax: .learn all recipes [$profession] Learns all recipes of specified profession and sets skill level to max. Example: .learn all recipes enchanting</td>
</tr>
<tr>
<td>npc set spawndist</td>
<td>2</td>
<td>Syntax: .npc set spawndist #dist Adjust spawndistance of selected creature to dist.</td>
</tr>
<tr>
<td>npc set spawntime</td>
<td>2</td>
<td>Syntax: .npc set spawntime #time Adjust spawntime of selected creature to time.</td>
</tr>
<tr>
<td>npc add temp</td>
<td>2</td>
<td>Syntax: .npc add temp Adds temporary NPC, not saved to database.</td>
</tr>
<tr>
<td>npc textemote</td>
<td>1</td>
<td>Syntax: .npc textemote #emoteid Make the selected creature to do textemote with an emote of id #emoteid.</td>
</tr>
<tr>
<td>npc whisper</td>
<td>1</td>
<td>Syntax: .npc whisper #playerguid #text Make the selected npc whisper #text to #playerguid.</td>
</tr>
<tr>
<td>npc yell</td>
<td>1</td>
<td>Syntax: .npc yell $message Make selected creature yell specified message.</td>
</tr>
<tr>
<td>wp add</td>
<td>2</td>
<td>Syntax: .wp add Add a waypoint for the selected creature at your current position.</td>
</tr>
<tr>
<td>reload all spell</td>
<td>3</td>
<td>Syntax: .reload all spell Reload all <code>spell_*</code> tables with reload support added and that can be <em>safe</em> reloaded.</td>
</tr>
<tr>
<td>server set loglevel</td>
<td>4</td>
<td>Syntax: .server set loglevel $facility $name $loglevel. $facility can take the values: appender (a) or logger (l). $loglevel can take the values: disabled (0), trace (1), debug (2), info (3), warn (4), error (5) or fatal (6)</td>
</tr>
<tr>
<td>reload access_requirement</td>
<td>3</td>
<td>Syntax: .reload access_requirement Reload access_requirement table.</td>
</tr>
<tr>
<td>reload achievement_criteria_data</td>
<td>3</td>
<td>Syntax: .reload achievement_criteria_data Reload achievement_criteria_data table.</td>
</tr>
<tr>
<td>reload achievement_reward</td>
<td>3</td>
<td>Syntax: .reload achievement_reward Reload achievement_reward table.</td>
</tr>
<tr>
<td>reload all achievement</td>
<td>3</td>
<td>Syntax: .reload all achievement Reload achievement_reward, achievement_criteria_data tables.</td>
</tr>
<tr>
<td>reload all area</td>
<td>3</td>
<td>Syntax: .reload all area Reload areatrigger_teleport, areatrigger_tavern, game_graveyard_zone tables.</td>
</tr>
<tr>
<td>reload all eventai</td>
<td>3</td>
<td>Syntax: .reload all eventai Reload creature_ai_scripts, creature_ai_summons, creature_ai_texts tables.</td>
</tr>
<tr>
<td>reload auctions</td>
<td>3</td>
<td>Syntax: .reload auctions Reload dynamic data tables from the database.</td>
</tr>
<tr>
<td>reload mail_level_reward</td>
<td>3</td>
<td>Syntax: .reload mail_level_reward Reload mail_level_reward table.</td>
</tr>
<tr>
<td>reload smart_scripts</td>
<td>3</td>
<td>Syntax: .reload smart_scripts Reload smart_scripts table.</td>
</tr>
<tr>
<td>reload vehicle_accessory</td>
<td>3</td>
<td>Syntax: .reload vehicle_accessory Reloads GUID-based vehicle accessory definitions from the database.</td>
</tr>
<tr>
<td>reload vehicle_template_accessory</td>
<td>3</td>
<td>Syntax: .reload vehicle_template_accessory Reloads entry-based vehicle accessory definitions from the database.</td>
</tr>
<tr>
<td>dev</td>
<td>3</td>
<td>Syntax: .dev [on/off] Enable or Disable in game Dev tag or show current state if on/off not provided.</td>
</tr>
<tr>
<td>ticket reset</td>
<td>3</td>
<td>Syntax: .ticket reset Removes all closed tickets and resets the counter, if no pending open tickets are existing.</td>
</tr>
<tr>
<td>reload waypoint_data</td>
<td>3</td>
<td>Syntax: .reload waypoint_data will reload waypoint_data table.</td>
</tr>
<tr>
<td>group</td>
<td>3</td>
<td>Syntax: .group $subcommand Type .group to see the list of possible subcommands or .help group $subcommand to see info on subcommands</td>
</tr>
<tr>
<td>group leader</td>
<td>3</td>
<td>Syntax: .group leader [$characterName] Sets the given character as his group's leader.</td>
</tr>
<tr>
<td>group disband</td>
<td>3</td>
<td>Syntax: .group disband [$characterName] Disbands the given character's group.</td>
</tr>
<tr>
<td>group remove</td>
<td>3</td>
<td>Syntax: .group remove [$characterName] Removes the given character from his group.</td>
</tr>
<tr>
<td>debug moveflags</td>
<td>3</td>
<td>Syntax: .debug moveflags [$newMoveFlags [$newMoveFlags2]] No params given will output the current moveflags of the target</td>
</tr>
<tr>
<td>reload locales_creature_text</td>
<td>3</td>
<td>Syntax: .reload locales_creature_text Reload locales_creature_text Table.</td>
</tr>
<tr>
<td>morph</td>
<td>2</td>
<td>Syntax: .morph #displayid Change your current model id to #displayid.</td>
</tr>
<tr>
<td>modify arenapoints</td>
<td>1</td>
<td>Syntax: .modify arenapoints #value Add $amount arena points to the selected player.</td>
</tr>
<tr>
<td>npc set data</td>
<td>3</td>
<td>Syntax: .npc set data $field $data Sets data for the selected creature. Used for testing Scripting</td>
</tr>
<tr>
<td>disable add quest</td>
<td>3</td>
<td>Syntax: .disable add quest $entry $flag $comment</td>
</tr>
<tr>
<td>disable add map</td>
<td>3</td>
<td>Syntax: .disable add map $entry $flag $comment</td>
</tr>
<tr>
<td>disable add battleground</td>
<td>3</td>
<td>Syntax: .disable add battleground $entry $flag $comment</td>
</tr>
<tr>
<td>disable add achievement_criteria</td>
<td>3</td>
<td>Syntax: .disable add achievement_criteria $entry $flag $comment</td>
</tr>
<tr>
<td>disable add spell</td>
<td>3</td>
<td>Syntax: .disable add spell $entry $flag $comment</td>
</tr>
<tr>
<td>disable add outdoorpvp</td>
<td>3</td>
<td>Syntax: .disable add outdoorpvp $entry $flag $comment</td>
</tr>
<tr>
<td>disable add vmap</td>
<td>3</td>
<td>Syntax: .disable add vmap $entry $flag $comment</td>
</tr>
<tr>
<td>disable remove quest</td>
<td>3</td>
<td>Syntax: .disable remove quest $entry</td>
</tr>
<tr>
<td>disable remove map</td>
<td>3</td>
<td>Syntax: .disable remove map $entry</td>
</tr>
<tr>
<td>disable remove battleground</td>
<td>3</td>
<td>Syntax: .disable remove battleground $entry</td>
</tr>
<tr>
<td>disable remove achievement_criteria</td>
<td>3</td>
<td>Syntax: .disable remove achievement_criteria $entry</td>
</tr>
<tr>
<td>disable remove spell</td>
<td>3</td>
<td>Syntax: .disable remove spell $entry</td>
</tr>
<tr>
<td>disable remove outdoorpvp</td>
<td>3</td>
<td>Syntax: .disable remove outdoorpvp $entry</td>
</tr>
<tr>
<td>disable remove vmap</td>
<td>3</td>
<td>Syntax: .disable remove vmap $entry</td>
</tr>
<tr>
<td>bf start</td>
<td>3</td>
<td>Syntax: .bf start #battleid</td>
</tr>
<tr>
<td>bf stop</td>
<td>3</td>
<td>Syntax: .bf stop #battleid</td>
</tr>
<tr>
<td>bf enable</td>
<td>3</td>
<td>Syntax: .bf enable #battleid</td>
</tr>
<tr>
<td>bf switch</td>
<td>3</td>
<td>Syntax: .bf switch #battleid</td>
</tr>
<tr>
<td>bf timer</td>
<td>3</td>
<td>Syntax: .bf timer #battleid #timer</td>
</tr>
<tr>
<td>quest reward</td>
<td>3</td>
<td>Syntax: .quest reward #questId Grants quest reward to selected player and removes quest from his log (quest must be in completed state).</td>
</tr>
<tr>
<td>cheat waterwalk</td>
<td>2</td>
<td>Syntax: .cheat waterwalk on/off Set on/off waterwalk state for selected player or self if no player selected.</td>
</tr>
<tr>
<td>cheat explore</td>
<td>2</td>
<td>Syntax: .cheat explore #flag Reveal or hide all maps for the selected player. If no player is selected, hide or reveal maps to you. Use a #flag of value 1 to reveal, use a #flag value of 0 to hide all maps.</td>
</tr>
<tr>
<td>cheat taxi</td>
<td>2</td>
<td>Syntax: .cheat taxi on/off Temporary grant access or remove to all taxi routes for the selected character. If no character is selected, hide or reveal all routes to you.Visited taxi nodes sill accessible after removing access.</td>
</tr>
<tr>
<td>cheat status</td>
<td>2</td>
<td>Syntax: .cheat status Shows the cheats you currently have enabled.</td>
</tr>
<tr>
<td>lfg player</td>
<td>2</td>
<td>Syntax: .lfg player Shows information about player (state, roles, comment, dungeons selected).</td>
</tr>
<tr>
<td>lfg group</td>
<td>2</td>
<td>Syntax: .lfg group Shows information about all players in the group (state, roles, comment, dungeons selected).</td>
</tr>
<tr>
<td>lfg queue</td>
<td>2</td>
<td>Syntax: .lfg queue Shows info about current lfg queues.</td>
</tr>
<tr>
<td>lfg clean</td>
<td>3</td>
<td>Syntax: .flg clean Cleans current queue, only for debugging purposes.</td>
</tr>
<tr>
<td>lfg options</td>
<td>3</td>
<td>Syntax: .lfg options [new value] Shows current lfg options. New value is set if extra param is present.</td>
</tr>
</tbody>
</table>
