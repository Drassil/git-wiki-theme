# game\_event

**Table Structure**

This table holds definitions for all game events that are activated or deactivated automatically by the Game Event System in the core.

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
<td><p><a href="#evententry">eventEntry</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>Unique</p></td>
<td><p>Entry of the game event</p></td>
</tr>
<tr class="odd">
<td><p><a href="#start_time">start_time</a></p></td>
<td><p>timestamp</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p>Absolute start date, the event will never start before</p></td>
</tr>
<tr class="even">
<td><p><a href="#end_time">end_time</a></p></td>
<td><p>timestamp</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p>Absolute end date, the event will never start after; if NULL it will be implicitly set to 2 years in the future on each server start</p></td>
</tr>
<tr class="odd">
<td><p><a href="http://collab.kpsn.org#occurrence">occurrence</a></p></td>
<td><p>bigint(20)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>5184000</p></td>
<td><p><br />
</p></td>
<td><p>Delay in minutes between occurrences of the event</p></td>
</tr>
<tr class="even">
<td><p><a href="#length">length</a></p></td>
<td><p>bigint(20)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>2592000</p></td>
<td><p><br />
</p></td>
<td><p>Length in minutes of the event</p></td>
</tr>
<tr class="odd">
<td><p><a href="#holiday">holiday</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>Client side holiday id (from dbc)</p></td>
</tr>
<tr class="even">
<td>holidayStage</td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td>?</td>
</tr>
<tr class="odd">
<td><p><a href="#description">description</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p>Description of the event displayed in console</p></td>
</tr>
<tr class="even">
<td><p><a href="#world_event">world_event</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>0 if normal event, 1 if world event</p></td>
</tr>
<tr class="odd">
<td>announce</td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>YES</td>
<td>2</td>
<td><br />
</td>
<td>0 dont announce, 1 announce, 2 value from config</td>
</tr>
</tbody>
</table>

**Field Descriptions**

### eventEntry

Entry of the event. Keep it as low as possible and prevent making holes in the list. Higher the max id is, the more memory will be used to store the event data.

### start\_time

Absolute start date of the event. The event will start occurring only if the local time at the server is after the one set here.

### end\_time

Absolute end date of the event. The event will stop occurring if the local time at the server is after the one set here.

### occurrence

Number of minutes between 2 occurrences of the event. (2880 = 2 days, 1440 = 1 day, etc)

### length

Number of minutes the event will last after the start of the occurrence. (2880 = 2 days, 1440 = 1 day, etc)
This value must be lower than occurrence one or the event will never stop.

### holiday

Holiday ID from  [Holidays DBC file](Holidays). This is sent to the client to update the calender.

### description

String containing the name of the event displayed in console each time it starts or stops.

### world\_event

This is a boolean field that determines if this game event is a world event or not. 0 = normal event, 1 = world event. For the world event to work, you need to at a minimum, populate game\_event\_condition and game\_event\_quest\_condition.
