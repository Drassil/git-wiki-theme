# Waypoints and pathes

### Different kinds of waypoint paths

- Waypoint paths directly attached to a creature via [creature_addon.path_id](creature_addon#path_id) use the tables [waypoint_data](waypoint_data) and [waypoint_scripts](waypoint_scripts). They can be added and manipulated using the GM '.wp' commands.
- [SmartAI](smart_scripts) uses waypoint paths defined in table [waypoints](waypoints).
- The table [script_waypoint](script_waypoint) contains waypoint paths for [CreatureAI](https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/AI/ScriptedAI/ScriptedCreature.h#L159).

### Overview of GM '.wp' commands

- ```.wp add``` [waypoint_data.id](waypoint_data#id): Add a new point for the specified path id. It is recommended to use creature GUID * 10 or GUID * 100 as path id, but it can be any random number.
- ```.wp reload``` [waypoint_data.id](waypoint_data#id): Reload the specified path id (for new paths has to be executed before ```.wp load```).
- ```.wp load``` [waypoint_data.id](waypoint_data#id): Load the specified path id for the selected creature.
- ```.wp unload```: Unload the path of the selected creature.
- ```.wp show on``` [waypoint_data.id](waypoint_data#id): Show all waypoints of the specified path (GM on is required to actually see them). If no path id is specified shows the waypoints of the selected creature.
- ```.wp show off```: Hide all visual waypoints.
- ```.wp show info```: Show information about the selected waypoint.
- ```.wp modify```: Modify the selected waypoint, options:
  - ```del```: Delete the selected waypoint.
  - ```move```: Move the selected waypoint to the position of the GM.
  - ```delay```: Change the [delay](waypoint_data#delay) of the selected waypoint.
  - ```action```: Change the [action](scripts#id) of the selected waypoint.
  - ```action_chance```: Change the [action_chance](waypoint_data#action_chance) of the selected waypoint.
  - ```move_type```: Change the [move_type](waypoint_data#move_type) of the selected waypoint (0: walk, 1: run, 2: fly).
- ```.wp event```: Modify the waypoint [actions](scripts#id), options:
  - ```add``` [guid](scripts#guid): Add a new action with the specified GUID (not to be confused with the creature GUID!). If no GUID is specified a new one is generated automatically.
  - ```listid``` [action](scripts#id): Show information about the specified action id.
  - ```del``` [guid](scripts#guid): Delete the action with the specified GUID.
  - ```mod``` [guid](scripts#guid): Modify the action with the specified GUID, further options:
    - ```setid``` [action](scripts#id): Set a new action id.
    - ```delay``` [delay](scripts#delay): Set a specific delay before the script activates.
    - ```command``` [command](scripts#command): Set the command for this script.
    - ```datalong``` [datalong](scripts#datalong): Set the datalong for this script.
    - ```datalong2``` [datalong2](scripts#datalong2): Set the datalong2 for this script.
    - ```dataint``` [dataint](scripts#dataint): Set the dataint for this script.
    - ```posx``` [posx](scripts#posx): Set the posx for this script.
    - ```posy``` [posy](scripts#posy): Set the posy for this script.
    - ```posz``` [posz](scripts#posz): Set the posz for this script.
    - ```orientation``` [orientation](scripts#orientation): Set the orientation for this script.

### Example for path creation using GM '.wp' commands

Example creature GUID: 1234567, example path id: 123456700

- Create a macro 'wp1' with this command:
  ```
  .wp add 123456700
  ```
- Create a macro 'wp2' with these commands:
  ```
  .wp reload 123456700
  .wp load 123456700
  ```
- Create a macro 'wp3' with this command:
  ```
  .wp show on 123456700
  ```
- Create a macro 'wp4' with this command:
  ```
  .wp show off 123456700
  ```
- Teleport to the creature:
  ```
  .go creature 1234567
  ```
- Use macro 'wp1'
- Create the path:
  - Go to the position where the next waypoint should be and use macro 'wp1'
  - repeat until all waypoints are set (don't forget to also create a path back to the starting position)
  - use macros 'wp3' and 'wp4' to show / hide the path (GM on required to actually see the path)
  - ensure that the waypoints are not too far away from each other, especially if the creature is walking over hills etc. as it will try to directly move to the next waypoint, even if this means going through the ground
- Select the creature and use macro 'wp2'; it should now start moving

### A few helpful SQL statements

#### Delete path

- Select the creature, then unload the path:
  ```
  .wp unload
  ```

- Delete the path from the DB, for example 123456700:
  ```sql
  DELETE FROM `waypoint_data` WHERE `id` = 123456700;
  ```

#### Take over the waypoints from 'waypoint_data' to 'waypoints' (SmartAI)

If you need the waypoints for SmartAI you have to copy the waypoints from table [waypoint_data](waypoint_data) into table [waypoints](waypoints) and then delete the original waypoints (unload the path for the creature via ```.wp unload``` if it was loaded before). Here an example for path 123456700:
```sql
INSERT INTO `waypoints` (`entry`,`pointid`,`position_x`,`position_y`,`position_z`)
  SELECT `id`,`point`,`position_x`,`position_y`,`position_z` FROM `waypoint_data` WHERE `id` = 123456700;
DELETE FROM `waypoint_data` WHERE `id` = 123456700;
```

#### Take over the waypoints from 'waypoint_data' to 'script_waypoint' (CreatureAI)

The same as above, but now for [script_waypoint](script_waypoint) instead of [waypoints](waypoints). The entry of [script_waypoint](script_waypoint) has to be the [creature_template.entry](creature_template#entry), here for example 1234567:
```sql
INSERT INTO `script_waypoint` (`entry`,`pointid`,`location_x`,`location_y`,`location_z`)
  SELECT 1234567 AS `entry`,`point`,`position_x`,`position_y`,`position_z` FROM `waypoint_data` WHERE `id` = 123456700;
DELETE FROM `waypoint_data` WHERE `id` = 123456700;

```
Don't forget to unload the path from the creature if it was loaded before.

