# graveyard\_zone

[<-Back-to:World](database-world.md)

**The \`graveyard\_zone\` table**

Contains information about zones connected to world's graveyards.

This table is used to set what factions a given graveyard will accept, and also to specify the nearest graveyard to a given zone.

For a list of all existing graveyard zones and their respective IDs, check out WorldSafeLocs.dbc

**Structure**

|                                         |              |                |         |          |             |           |             |
|-----------------------------------------|--------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                               | **Type**     | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| ID                                      | mediumint(8) | unsigned       | PRI     | NO       | 0           |           |             |
| [GhostZone](#graveyard_zone-ghost_zone) | mediumint(8) | unsigned       | PRI     | NO       | 0           |           |             |
| [Faction](#graveyard_zone-faction)      | smallint(5)  | unsigned       |         | NO       | 0           |           |             |
| Comment                                 | TEXT         |                |         |          |             |           |             |

**Description of the fields**

### ID

Graveyard's ID. See WorldSafeLocs.dbc

### GhostZone

Zone's Id of ghost position before teleportation to graveyard. See AreaTable.dbc

### Faction

Graveyard's team.

0 - Any team accepted

469 - Alliance team only

67 - Horde team only

**Comment**
