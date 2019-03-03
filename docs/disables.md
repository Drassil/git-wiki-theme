# disables

[<-Back-to:World](database-world.md)

**The \`disables\` table**

This table is used to disable dungeons/bgs/spells/etc.

**Structure**

<table>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
<td><p><strong>Extra</strong></p></td>
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#sourcetype">sourceType</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#entry">entry</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#flags">flags</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#params_0">params_0</a></p></td>
<td><p>varchar(255)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>&quot;</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#params_1">params_1</a></p></td>
<td><p>varchar(255)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>&quot;</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#comment">comment</a></p></td>
<td><p>varchar(255)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>&quot;</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### sourceType

| Value | Type                                 |
|-------|--------------------------------------|
| 0     | DISABLE\_TYPE\_SPELL                 |
| 1     | DISABLE\_TYPE\_QUEST                 |
| 2     | DISABLE\_TYPE\_MAP                   |
| 3     | DISABLE\_TYPE\_BATTLEGROUND          |
| 4     | DISABLE\_TYPE\_ACHIEVEMENT\_CRITERIA |
| 5     | DISABLE\_TYPE\_OUTDOORPVP            |
| 6     | DISABLE\_TYPE\_VMAP                  |
| 7     | DISABLE\_TYPE\_MMAP                  |
| 8     | DISABLE\_TYPE\_LFG\_MAP              |

### entry

Entry of Spell/Quest/Map/BG/Achievement/Map.

### flags

If sourceType = DISABLE\_TYPE\_SPELL: Specifies who the spell is disabled for.

| Value | Type                                                                                          |
|-------|-----------------------------------------------------------------------------------------------|
| 0     | Spell enabled                                                                                 |
| 1     | Spell disabled for players                                                                    |
| 2     | Spell disabled for creatures                                                                  |
| 4     | Spell disabled for pets                                                                       |
| 8     | Spell completely disabled (used for no logner existing spells in DBCs)                        |
| 16    | Spell disabled for MapId                                                                      |
| 32    | Spell disabled for AreaId                                                                     |
| 64    | Line of Sight (LOS) is disabled for this spell (replaces "vmap.ignoreSpellIds" config option) |

Example: INSERT INTO \`disables\` VALUES (0, 8921, (1+16+32), "571,1", "1519", "Moonfire Example");

This will disable spell Moonfire (8921) for players in maps 571,1 and area 1519.

***If sourceType = DISABLE\_TYPE\_MAP:***

Specifies what type of map is disabled (5man/10man/heroic/etc).

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Value</p></th>
<th><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>DUNGEON_STATUSFLAG_NORMAL OR RAID_STATUSFLAG_10MAN_NORMAL</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>DUNGEON_STATUSFLAG_HEROIC OR RAID_STATUSFLAG_25MAN_NORMAL</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>RAID_STATUSFLAG_10MAN_HEROIC</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>RAID_STATUSFLAG_25MAN_HEROIC</p></td>
</tr>
</tbody>
</table>

The value is a bitmask of VALID modes for the specific map, 15 is as such NOT a valid mask on certain maps, only those actually found possible for the respective map.

***If sourceType = DISABLE\_TYPE\_VMAP:***

Specifies on which map should be vMap disabled

| Value | Type                    |
|-------|-------------------------|
| 1     | VMAP\_DISABLE\_AREAFLAG |
| 2     | VMAP\_DISABLE\_HEIGHT   |
| 4     | VMAP\_DISABLE\_LOS      |
| 8     | VMAP\_LIQUIDSTATUS      |

Example: INSERT INTO \`disables\` VALUES (6, 1, (2 + 4), 0, 0, "Disable Kalimdor vMaps");

This will disable vMaps on whole Kalimdor.

***If sourceType = DISABLE\_TYPE\_QUEST:***

***If sourceType = DISABLE\_TYPE\_ACHIEVEMENT\_CRITERIA:***

***If sourceType = DISABLE\_TYPE\_OUTDOORPVP:***

***If sourceType = DISABLE\_TYPE\_MMAP:***

******If sourceType = DISABLE\_TYPE\_LFG\_MAP:***
***

No flags needed just add the entry to the table with \`flags\`=0.

### params\_0

MapId if DISABLE\_TYPE\_SPELL used, 0 for all maps.

### params\_1

AreaId if DISABLE\_TYPE\_SPELL used, 0 for all areas.

### comment

A comment as to why the something was disabled, or any other text that you want.
