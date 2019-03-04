# game\_tele

[<-Back-to:World](database-world.md)

**Table Structure**

This table contains a list of teleport locations that can be used with the *.tele* command in-game. Entries in this table can be added/deleted manually or with the *.tele add* and *.tele delete* commands.

<table style="width:100%;">
<colgroup>
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
<td><p><strong>Extra</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#id">id</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p>Auto increment</p></td>
</tr>
<tr class="odd">
<td><p><a href="#position_x">position_x</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#position_y">position_y</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#position_z">position_z</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#orientation">orientation</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#map">map</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#name">name</a></p></td>
<td><p>varchar(100)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**
**

**Field Descriptions**

### id

The ID of the teleport location. This number is unique to every location added.

### position\_x

The x-axis coordinate of the teleport location. This can be attained by using the *.gps* command.

### position\_y

The y-axis coordinate of the teleport location. This can be attained by using the *.gps* command.

### position\_z

The z-axis coordinate of the teleport location. This can be attained by using the *.gps* command.

### orientation

The direction that the player will face after arriving at the teleport location. This can be attained by using the *.gps* command.

(North = 0, South = 3.14159)

### map

The map ID of the location. See the [Map DBC file](Map) for the IDs of all of the zones.

### name

A descriptive name for the teleport location. The name *cannot* have any spaces in it. It is also not recommended to use special characters such as periods, commas, slashes, etc...
