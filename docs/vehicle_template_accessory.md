# vehicle\_template\_accessory

[<-Back-to:World](database-world.md)

**The \`vehicle\_template\_accessory\` table**

Records in this table can be overwritten by [vehicle\_accessory](https://trinitycore.atlassian.net/wiki/display/tc/vehicle_accessory) table

**Structure**

<table>
<colgroup>
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
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
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#entry">entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#accessory_entry">accessory_entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#seat_id">seat_id</a></p></td>
<td><p>tinyint(1)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#minion">minion</a></p></td>
<td><p>tinyint(1)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#description">description</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#summontype">summontype</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>6</p></td>
<td><p> </p></td>
<td><p>see enum TempSummonType</p></td>
</tr>
<tr class="even">
<td><p><a href="#summontimer">summontimer</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>30000</p></td>
<td><p> </p></td>
<td><p>timer, only relevant for certain summontypes</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### entry

Entry of creature to be used as Vehicle. Entry from creature\_template.

### accessory\_entry

Entry from creature\_template to be used as the rider/turret/addon to the main vehicle. ID from creature\_template.

### seat\_id

Vehicle seat in witch the accessory should be spawned. See VehicleSeat.dbc.

### minion

If value is 0 accessory will not die when vehicle dies.
If value is 1 accessory will die when the vehicle dies.

### description

Comment

### summontype

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th><p>Name</p></th>
<th><p>Comments</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>TEMPSUMMON_TIMED_OR_DEAD_DESPAWN</p></td>
<td><p>Despawns after a specified time OR when the creature disappears</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>TEMPSUMMON_TIMED_OR_CORPSE_DESPAWN</p></td>
<td><p>Despawns after a specified time OR when the creature dies</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>TEMPSUMMON_TIMED_DESPAWN</p></td>
<td><p>Despawns after a specified time</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>TEMPSUMMON_TIMED_DESPAWN_OUT_OF_COMBAT</p></td>
<td><p>Despawns after a specified time after the creature is out of combat</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>TEMPSUMMON_CORPSE_DESPAWN</p></td>
<td><p>Despawns instantly after death</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>TEMPSUMMON_CORPSE_TIMED_DESPAWN</p></td>
<td><p>Despawns after a specified time after death</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>TEMPSUMMON_DEAD_DESPAWN</p></td>
<td><p>Despawns when the creature disappears</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>TEMPSUMMON_MANUAL_DESPAWN</p></td>
<td><p>Despawns when UnSummon() is called</p></td>
</tr>
</tbody>
</table>

### summontimer

Timer linked to summontype
