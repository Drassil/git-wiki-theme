# spawn\_group

[<-Back-to:World](database-world.md)

**The \`spawn\_group\` table**

This table contains Spawn Group members.

**Structure**

|                                                                                              |             |                |         |          |             |           |             |
|----------------------------------------------------------------------------------------------|-------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                                                                    | **Type**    | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [g](spawn_group_template_87293959.html#spawn_group_template-mapId)[roupId](#spawn_group-gro) | int(10)     | unsigned       | PRI     | NO       | NULL        |           |             |
| [spawnType](#spawn_group-spawnType)                                                          | tinyint(10) | unsigned       | PRI     | NO       | NULL        |           |             |
| [spawnId](#spawn_group-spawnId)                                                              | int(10)     | unsigned       | PRI     | NO       | NULL        |           |             |

**Description of the fields**

### groupId

This is the Group ID for the group. It must match a group already existing in the [spawn\_group\_template](spawn_group_template) table.

### spawnType

This is the spawn type. It must be 0 for creatures, and 1 for game objects.

### spawnId

This is the spawn ID of the creature/game object that should be included in the group. The ID must exist in the [creature](creature) or [gameobject](gameobject) tables respectively.


