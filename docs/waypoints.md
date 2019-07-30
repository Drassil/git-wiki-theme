[Database Structure](Database-Structure) > [World-Database](World-Database) > [waypoints](waypoints)

# waypoints

###### **Used by [SAI](smart_scripts)**

### Information

Contains waypoint data, allowing creatures to move to certain X, Y, and Z coordinates. See also [Waypoints-Information](Waypoints-Information) for general information about waypoints.

### Structure

| Field                            | Type         | Attributes | Key | Null | Default |
|----------------------------------|--------------|------------|-----|------|---------|
| [entry](#entry)                  | mediumint(8) | unsigned   | PRI | NO   | 0       |
| [pointid](#pointid)              | mediumint(8) | unsigned   | PRI | NO   | 0       |
| [position\_x](#position_x)       | float        |            |     | NO   | 0       |
| [position\_y](#position_y)       | float        |            |     | NO   | 0       |
| [position\_z](#position_z)       | float        |            |     | NO   | 0       |
| [point\_comment](#point_comment) | text         |            |     | YES  | NULL    |

#### entry

Path ID. Standard way of assigning an ID is [creature\_template.entry](creature_template#entry) * 100, but any random number can be used here.

#### pointid

Unique ID for each waypoint. Starts at 1 and increases with each waypoint.

#### position\_x

The X coordinate of the destination waypoint.

#### position\_y

The Y coordinate of the destination waypoint.

#### position\_z

The Z coordinate of the destination waypoint.

#### point\_comment

Text comment.

### Example Rows

| entry | pointid | position\_x | position\_y | position\_z | point\_comment           |
|-------|---------|-------------|-------------|-------------|--------------------------|
| 16208 | 1       | 6647.83     | -6344.92    | 9.13345     | Apothecary Enith point 1 |
| 16208 | 2       | 6657.92     | -6345.96    | 15.3468     | Apothecary Enith point 2 |

Creature with ID 16208 will now have 2 waypoints, first it will move to pointid 1, when it reaches the XYZ position, it will move to pointid 2. The comment helps clarify which creature the ID belongs to.

