# quest\_poi\_points

[<-Back-to:World](database-world.md)

**The \`quest\_poi\_points\` table**

Comes from sniffs. Visually speaking, this table is used to identify the X and Y coordinates on the map (not the minimap - the main map) where a quest's question mark should appear. Use the ".gps" command where you are standing to find these coordinates. In order to see changes, ".reload quest\_poi", close Wow.exe, then delete your cache folder.

**Structure**

|                                      |          |                |         |          |             |           |             |
|--------------------------------------|----------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                            | **Type** | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [questid](#quest_poi_points-questid) | int(10)  | unsigned       | PRI     | NO       | 0           |           |             |
| [id](#quest_poi_points-id)x1         | int(10)  | unsigned       | PRI     | NO       | 0           |           |             |
| [idx](#quest_poi_points-idx)2        | int(10)  | unsigned       | PRI     | NO       | 0           |           |             |
| [x](#quest_poi_points-x)             | int(10)  | unsigned       |         | NO       | 0           |           |             |
| [y](#quest_poi_points-y)             | int(10)  | unsigned       |         | NO       | 0           |           |             |

**Description of the fields**

### questid

The Quest Id from quest\_poi.questid

### idx1

Used to group multiple entries from quest\_poi.id. You must manually increment this value by 1 for each new row in quest\_poi\_point with the same questId (0, 1, 2, 3...).

### idx2

`field-no-description|3`

### x

The X position of the question mark on the map.

### y

The Y position of the question mark on the map.
