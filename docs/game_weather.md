# game\_weather

[<-Back-to:World](database-world.md)

**Table Structure**

This table holds the percent chances for weather changes to occur in various zones. Not all zones can have their weather changed. For any given zone the percentage of all weather types for each season should total, and not exceed 100%.

<table style="width:100%;">
<colgroup>
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#zone">zone</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#spring_rain_chance">spring_rain_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="even">
<td><p><a href="#spring_snow_chance">spring_snow_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="odd">
<td><p><a href="#spring_storm_chance">spring_storm_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="even">
<td><p><a href="#summer_rain_chance">summer_rain_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="odd">
<td><p><a href="#summer_snow_chance">summer_snow_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="even">
<td><p><a href="#summer_storm_chance">summer_storm_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="odd">
<td><p><a href="#fall_rain_chance">fall_rain_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="even">
<td><p><a href="#fall_snow_chance">fall_snow_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="odd">
<td><p><a href="#fall_storm_chance">fall_storm_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="even">
<td><p><a href="#winter_rain_chance">winter_rain_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="odd">
<td><p><a href="#winter_snow_chance">winter_snow_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
<tr class="even">
<td><p><a href="#winter_storm_chance">winter_storm_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>25</p></td>
</tr>
</tbody>
</table>

**Field Descriptions**

### zone

This field contains the zone id from the [AreaTable DBC file](AreaTable) that you wish to change the weather for.

### spring\_rain\_chance

Percent chance for rain in the Spring

### spring\_snow\_chance

Percentage chance for snow to occur in the Spring

### spring\_storm\_chance

Percent chance for a sand storm to occur in the Spring

### summer\_rain\_chance

Percent chance for rain to occur in the Summer

### summer\_snow\_chance

Percent chance for snow to occur in the Summer

### summer\_storm\_chance

Percent chance for a sand storm to occur in the Summer

### fall\_rain\_chance

Percent chance for rain to occur in the Fall

### fall\_snow\_chance

Percent chance for snow to occur in the Fall

### fall\_storm\_chance

Percent chance for a sand storm to occur in the Fall

### winter\_rain\_chance

Percentage chance for rain to occur in the Winter

### winter\_snow\_chance

Percentage chance for snow to occur in the Winter

### winter\_storm\_chance

Percentage chance for a sand storm to occur in the Winter
