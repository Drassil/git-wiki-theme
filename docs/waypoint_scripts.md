[Database Structure](Database-Structure) > [World-Database](World-Database) > [waypoint_scripts](waypoint_scripts)

# waypoint\_scripts

###### **Used by [waypoint_data](waypoint_data)**

### Information

Waypoint paths directly attached to a creature via [creature_addon.path_id](creature_addon#path_id) use the tables [waypoint_data](waypoint_data) and [waypoint_scripts](waypoint_scripts). They can be added and manipulated using the GM '.wp' commands. See also [Waypoints-Information](Waypoints-Information) for general information about waypoints.

### Structure

| Field                            | Type         | Attributes   | Key | Null | Default | Comment
|----------------------------------|--------------|--------------|-----|------|---------|--------
| [id](scripts#id)                 | int(11)      | unsigned     |     | NO   | 0       |
| [delay](scripts#delay)           | int(11)      | unsigned     |     | NO   | 0       |
| [command](scripts#command)       | int(11)      | unsigned     |     | NO   | 0       |
| [datalong](scripts#otherfields)  | int(11)      | unsigned     |     | NO   | 0       |
| [datalong2](scripts#otherfields) | int(11)      | unsigned     |     | NO   | 0       |
| [dataint](scripts#otherfields)   | int(11)      | unsigned     |     | NO   | 0       |
| [x](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [y](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [z](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [o](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [guid](scripts#guid)             | int(11)      |              | PRI | NO   | 0       | acts as primary key and is set automatically using the [GM command](GM-Commands) 'wp event add'

