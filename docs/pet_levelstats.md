# pet\_levelstats

[<-Back-to:World](database-world.md)

**The \`pet\_levelstats\` table**

This table holds information on individual pet base stats based on level.

**Structure**

|                                                   |              |                |         |          |             |           |             |
|---------------------------------------------------|--------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                         | **Type**     | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [creature\_entry](#pet_levelstats-creature_entry) | mediumint(8) | unsigned       | PRI     | NO       | NULL        |           |             |
| [level](#pet_levelstats-level)                    | tinyint(3)   | unsigned       | PRI     | NO       | NULL        |           |             |
| [hp](#pet_levelstats-hp)                          | smallint(5)  | unsigned       |         | NO       | NULL        |           |             |
| [mana](#pet_levelstats-mana)                      | smallint(5)  | unsigned       |         | NO       | NULL        |           |             |
| [armor](#pet_levelstats-armor)                    | int(10)      | unsigned       |         | NO       | 0           |           |             |
| [str](#pet_levelstats-str)                        | smallint(5)  | unsigned       |         | NO       | NULL        |           |             |
| [agi](#pet_levelstats-agi)                        | smallint(5)  | unsigned       |         | NO       | NULL        |           |             |
| [sta](#pet_levelstats-sta)                        | smallint(5)  | unsigned       |         | NO       | NULL        |           |             |
| [inte](#pet_levelstats-inte)                      | smallint(5)  | unsigned       |         | NO       | NULL        |           |             |
| [spi](#pet_levelstats-spi)                        | smallint(5)  | unsigned       |         | NO       | NULL        |           |             |

**Description of the fields**

### creature\_entry

The pet creature template ID. See creature\_template.entry

### level

The pet level.

### hp

The base health of the pet at currently selected [level](#pet_levelstats-level), calculated through core.

### mana

The base mana of the pet at currently selected [level](#pet_levelstats-level), calculated through core.

### armor

The base armor of the pet at currently selected [level](#pet_levelstats-level), calculated through core.

### str

The base strength of the pet at currently selected [level](#pet_levelstats-level), calculated through core.

### agi

The base agility of the pet at currently selected [level](#pet_levelstats-level), calculated through core.

### sta

The base stamina of the pet at currently selected [level](#pet_levelstats-level), calculated through core.

### inte

The base intellect of the pet at currently selected [level](#pet_levelstats-level), calculated through core.

### spi

The base spirit of the pet at currently selected [level](#pet_levelstats-level), calculated through core.
