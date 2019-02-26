# waypoint\_data

[<-Back-to:World](database-world.md)

## **Version 3.3.5a**

### Information

This table contains all the path data for creatures that use waypoints.

|         |                       |
|---------|-----------------------|
| Collate | *'utf8\_general\_ci'* |
| Engine  | MyISAM                |

### Structure

| Field                                          | Type         | Attributes | Key | Null | Default | Comment       |
|------------------------------------------------|--------------|------------|-----|------|---------|---------------|
| [id](#waypoint_data-id)                        | INT(10)      | UNSIGNED   | PRI | NO   | 0       | Creature GUID |
| [point](#waypoint_data-point)                  | MEDIUMINT(8) | UNSIGNED   | PRI | NO   | 0       | -             |
| [position\_x](#waypoint_data-position)         | FLOAT        | -          | -   | NO   | 0       | -             |
| [position\_y](#waypoint_data-position)         | FLOAT        | -          | -   | NO   | 0       | -             |
| [position\_z](#waypoint_data-position)         | FLOAT        | -          | -   | NO   | 0       | -             |
| [orientation](#waypoint_data-orientation)      | FLOAT        | -          | -   | NO   | 0       | -             |
| [delay](#waypoint_data-delay)                  | INT(10)      | UNSIGNED   | -   | NO   | 0       | -             |
| [move\_type](#waypoint_data-move_type)         | TINYINT(1)   | -          | -   | NO   | 0       | -             |
| [action](#waypoint_data-action)                | INT(11)      | -          | -   | NO   | 0       | -             |
| [action\_chance](#waypoint_data-action_chance) | SMALLINT(3)  | -          | -   | NO   | 100     | -             |
| [wpguid](#waypoint_data-wpguid)                | INT(11)      | -          | -   | NO   | 0       | -             |

#### id

Unique ID for each path.

*The TDB standard way of assigning an ID is to multiply GUID of the creature by 10.*

*So for a creature with a GUID of 1234 the path ID would be 12340. Any waypoints submitted to TDB should follow this standard.*

*However, this is only a suggestion when creating your own waypoints. This ID can be anything you want as long as creature\_addon.path\_id is set to the ID you pick here for the creature you are creating a waypoint for.*

#### point

Unique point ID for each point in a path. Starts at 1 and increases with each path.

#### position\_x

The X coordinate of the destination waypoint.

#### position\_y

The Y coordinate of the destination waypoint.

#### position\_z

The Z coordinate of the destination waypoint.

#### orientation

The orientation of the creature. (North = 0.0; South = π (3.14159))

#### delay

Time to wait (in ms) between each point.

#### move\_type

|      |     |
|------|-----|
| Walk | 0   |
| Run  | 1   |
| Fly  | 2   |

#### action

ID of the action to be performed. See [waypoint\_scripts.id](https://trinitycore.atlassian.net/wiki/display/tc/scripts#scripts-id).

#### action\_chance

Percentage of action happening (0-100%).

#### wpguid

This field is used by the core and is **NOT** to be set by hand.

This field holds the GUID of the waypoint visual when you enable the visual mode for waypoints.

### Example Rows

| Id    | Point | Position\_x | Position\_y | Position\_z | Orientation | Delay | Move\_type | Action | Action\_chance | wpguid |
|-------|-------|-------------|-------------|-------------|-------------|-------|------------|--------|----------------|--------|
| 20160 | 1     | -4998       | -1167       | 501657      | 0           | 10000 | 0          | 0      | 100            | 0      |
| 20160 | 2     | -4958.38    | -1199.34    | 501659      | 0           | 0     | 0          | 0      | 100            | 0      |


