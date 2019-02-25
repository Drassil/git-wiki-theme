# waypoints

`Back-to:World`

###### **Used by [SAI](https://trinitycore.atlassian.net/wiki/display/tc/smart_scripts)**

## **Version 3.3.5a**

### Information

Contains waypoint data, allowing Creatures to move to certain X, Y, and Z coordinates.

|            |                      |
|------------|----------------------|
| Comment    | *Creature waypoints* |
| Collate    | *utf8\_general\_ci*  |
| Engine     | MyISAM               |
| Row Format | FIXED                |

### Structure

| Field                                                                                                 | Type         | Attributes | Key | Null | Default |
|-------------------------------------------------------------------------------------------------------|--------------|------------|-----|------|---------|
| [entry](https://trinitycore.atlassian.net/wiki/display/tc/waypoints#waypoints-entry)                  | MEDIUMINT(8) | UNSIGNED   | PRI | NO   | 0       |
| [pointid](https://trinitycore.atlassian.net/wiki/display/tc/waypoints#waypoints-pointid)              | MEDIUMINT(8) | UNSIGNED   | PRI | NO   | 0       |
| [position\_x](https://trinitycore.atlassian.net/wiki/display/tc/waypoints#waypoints-position_x)       | FLOAT        | -          | -   | NO   | 0       |
| [position\_y](https://trinitycore.atlassian.net/wiki/display/tc/waypoints#waypoints-position_y)       | FLOAT        | -          | -   | NO   | 0       |
| [position\_z](https://trinitycore.atlassian.net/wiki/display/tc/waypoints#waypoints-position_z)       | FLOAT        | -          | -   | NO   | 0       |
| [point\_comment](https://trinitycore.atlassian.net/wiki/display/tc/waypoints#waypoints-point_comment) | TEXT         | -          | -   | YES  | -       |

#### entry

Entry of the creature. See [creature\_template.entry](https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-entry).

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

| Entry | Pointid | Position\_x | Position\_y | Position\_z | Point\_comment           |
|-------|---------|-------------|-------------|-------------|--------------------------|
| 16208 | 1       | 6647.83     | -6344.92    | 9.13345     | Apothecary Enith point 1 |
| 16208 | 2       | 6657.92     | -6345.96    | 15.3468     | Apothecary Enith point 2 |

Creature with ID 16208 will now have 2 waypoints, first it will move to pointid 1, when it reaches the XYZ position, it will move to pointid 2. The comment helps clarify which creature the ID belongs to.


