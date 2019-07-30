[Database Structure](Database-Structure) > [World-Database](World-Database) > [script_waypoint](script_waypoint)

# script\_waypoint

###### **Used by [CreatureAI](https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/AI/ScriptedAI/ScriptedCreature.h#L159)**

### Information

Used for CreatureAI waypoint movement. See also [Waypoints-Information](Waypoints-Information) for general information about waypoints.

### Structure

| Field                            | Type         | Attributes | Key | Null | Default |
|----------------------------------|--------------|------------|-----|------|---------|
| [entry](creature_template#entry) | mediumint(8) | unsigned   | PRI | NO   | 0       |
| [pointid](#pointid)              | mediumint(8) | unsigned   | PRI | NO   | 0       |
| [location_x](#location_x)        | float        |            |     | NO   | 0       |
| [location_y](#location_y)        | float        |            |     | NO   | 0       |
| [location_z](#location_z)        | float        |            |     | NO   | 0       |
| [waittime](#waittime)            | int(10)      | unsigned   |     | NO   | 0       |
| [point_comment](#point_comment)  | text         |            |     | YES  | NULL    |

### entry

Entry of the creature, see [creature\_template.entry](creature_template#entry).

### pointid

Unique ID for each waypoint. Starts at 1 and increases with each waypoint.

### location\_x

The X coordinate of the destination waypoint.

### location\_y

The Y coordinate of the destination waypoint.

### location\_z

The Z coordinate of the destination waypoint.

### waittime

Wait time in milliseconds.

### point\_comment

Text comment.

