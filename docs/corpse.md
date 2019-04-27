[Database Structure](Database-Structure) > [Character-Database](Character-Database) > [corpse](corpse)

| Field       | Type        | Attributes | Key | Null | Default | Extra  | Comment                            |
|-------------|-------------|------------|-----|------|---------|--------|------------------------------------|
| corpseGuid  | int(10)     | unsigned   | PRI | NO   | 0       | Unique | Global Unique Identifier           |
| guid        | int(10)     | unsigned   |     | NO   | 0       |        | Character Global Unique Identifier |
| posX        | float       | signed     |     | NO   | 0       |        |                                    |
| posY        | float       | signed     |     | NO   | 0       |        |                                    |
| posZ        | float       | signed     |     | NO   | 0       |        |                                    |
| orientation | float       | signed     |     | NO   | 0       |        |                                    |
| mapId       | smallint(5) | unsigned   |     | NO   | 0       |        | Map Identifier                     |
| phaseMask   | smallint(5) | unsigned   |     | NO   | 0       |        |                                    |
| displayId   | int(10)     | unsigned   |     | NO   | 0       |        |                                    |
| itemCache   | text        | signed     |     | NO   |         |        |                                    |
| bytes1      | int(10)     | unsigned   |     | NO   | 0       |        |                                    |
| bytes2      | int(10)     | unsigned   |     | NO   | 0       |        |                                    |
| guildId     | int(10)     | unsigned   |     | NO   | 0       |        |                                    |
| flags       | tinyint(3)  | unsigned   |     | NO   | 0       |        |                                    |
| dynFlags    | tinyint(3)  | unsigned   |     | NO   | 0       |        |                                    |
| time        | int(10)     | unsigned   |     | NO   | 0       |        |                                    |
| corpseType  | tinyint(3)  | unsigned   |     | NO   | 0       |        |                                    |
| instanceId  | int(10)     | unsigned   |     | NO   | 0       |        |                                    |
