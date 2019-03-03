# game\_event\_condition

[<-Back-to:World](database-world.md)

**The \`game\_event\_condition\` table**

This table contains conditions to meet for the specified game event to be completed. Also contains the world state fields used for reporting the given conditions progress and/or max required value. This table will do absolutely nothing if you have not set the event to be a world event.

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
<td><p><a href="#evententry">eventEntry</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>Entry of the game event</p></td>
</tr>
<tr class="odd">
<td><p><a href="#condition_id">condition_id</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#req_num">req_num</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#max_world_state_field">max_world_state_field</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#done_world_state_field">done_world_state_field</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#description">description</a></p></td>
<td><p>varchar(25)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>&quot;</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### eventEntry

This is a link to the event entry in the game\_event table.

### condition\_id

This is the condition ID for this particular world event condition. It is an arbitrary number, and you can have multiple conditions for each world event. It links to the condition\_id field of the game\_event\_quest\_condition table.

### req\_num

This is an arbitrary value that determines when this condition is met. For example, if you set this value to 1000, and there is only one quest in game\_event\_quest\_condition that will fulfill this condition, and it increases this condition by 100 (by setting the num field to 100), then you would need to have your players complete 10 of that quest to fulfill this condition.

### max\_world\_state\_field

This is the world state update field number sent to the client that is used to report the maximum number of needed points in order to satisfy this condition. It can be found in gossip texts referenced with $XXXXw where XXXX is the world state number that will be sent when that gossip is displayed. If you are doing a custom event, you can pick any number you want that isn't in use, it just needs to match the custom text that you put into the npc\_text table.

### done\_world\_state\_field

This is the world state update field number sent to the client that is used to report the number of accumulated points so far for this condition. It can be found in gossip texts referenced with $XXXXw where XXXX is the world state number that will be sent when that gossip is displayed. If you are doing a custom event, you can pick any number you want that isn't in use, it just needs to match the custom text that you put into the npc\_text table.

### description

Arbitrary text field describing this condition.
