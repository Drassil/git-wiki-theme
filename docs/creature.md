# creature

[<-Back-to:World](database-world.md)

**Table Structure**

Contains individual creature spawn data for each individual spawn of each individual creature in the game world.

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
<td><p><a href="#guid">guid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p>Auto Increment</p></td>
<td><p>Global Unique Identifier</p></td>
</tr>
<tr class="odd">
<td><p><a href="#id">id</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Creature Identifier</p></td>
</tr>
<tr class="even">
<td><p><a href="#map">map</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Map Identifier</p></td>
</tr>
<tr class="odd">
<td><p><a href="#spawnmask">spawnMask</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#phasemask">phaseMask</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#modelid">modelid</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0 core determined random model or model_id to prevent random model selection by core.</p></td>
</tr>
<tr class="even">
<td><p><a href="#equipment_id">equipment_id</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#position_x">position_x</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
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
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spawntimesecs">spawntimesecs</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>120</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spawndist">spawndist</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>5</p></td>
<td><p> </p></td>
<td><p>Dist in yards for random movement.</p></td>
</tr>
<tr class="odd">
<td><p><a href="#currentwaypoint">currentwaypoint</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Storage used by core. &quot;Always set as 0&quot;</p></td>
</tr>
<tr class="even">
<td><p><a href="#curhealth">curhealth</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>Storage used by core. &quot;Always set as 1&quot;</p></td>
</tr>
<tr class="odd">
<td><p><a href="#curmana">curmana</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Storage used by core. &quot;Always set as 0&quot;</p></td>
</tr>
<tr class="even">
<td><p><a href="#movementtype">MovementType</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0 No movement, 1 random, 2 path</p></td>
</tr>
<tr class="odd">
<td><p><a href="#npcflag">npcflag</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#unit_flags">unit_flags</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#dynamicflags">dynamicflags</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Field Descriptions**

### guid

A unique identifier given to each creature to distinguish one creature from another. Two creatures can NOT have same GUID.

### id

The ID of the [template](creature_template#creature_template-entry) that is used when instantiating this creature.

### map

The ID of the [map](Map) that the creature is spawned on.

### spawnMask

Controls under which difficulties the creature is spawned. The values are bit-masked, so you can add them together to combine the affects of two or more values.

Example:

4 + 8 = 12

The creature will spawn in only the 10 and 25 man heroic versions of the map that the creature is spawned on.


 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Value</p></th>
<th><p>Comment</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Not spawned</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Spawned only in 10-man-normal versions of maps (includes maps without a heroic mode)</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Spawned only in 25-man-normal versions of maps (or heroics pre 3.2)</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Spawned only in 10-man heroic versions of maps</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Spawned only in 25-man-heroic versions of maps</p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>Spawned in all versions of maps</p></td>
</tr>
</tbody>
</table>

### phaseMask

This is a bit-mask field that describes all the phases that a creature will appear in. Aura 261 determines the phase you can see. For example, if you had this aura <http://www.wowhead.com/?spell=55782>, you would be able to see creatures in phase 2. If you wanted the creature to be visible in both phase 1 and phase 2, you would set the phase-mask to 3.

### modelid

The model ID associated with the creature. Note that two creatures that use the same template can have different models. See [creature\_model\_info](creature_model_info) for more information on model-specific characteristics.

Note:

This can be left at 0 and a random model from its assigned models in [creature\_template](creature_template) will be assigned by the core.

### equipment\_id

The ID as defined within [creature\_equip\_template](creature_equip_template) corresponding to the [entry](creature_template). The value essential defines the equip:

-   ** -1**: A random equip from the set of equips in [creature\_equip\_template](creature_equip_template) will be chosen.
-   **  0**: No equipment defined.
-   **1+**: The individual id within creature\_equip\_template.

### position\_x

The X position of the creatures spawn point.

### position\_y

The Y position of the creatures spawn point.

### position\_z

The Z position of the creatures spawn point.

### orientation

The orientation of the creatures spawn point. (North = 0.0; South = pi (3.14159))

### spawntimesecs

The respawn time, in seconds, of the creature.

### spawndist

The maximum distance that the creature may spawn from its spawn point. Also controls how far away the creature can walk from its spawn point if its [MovementType](#creature-MovementType) = 1.

### currentwaypoint

The current [waypoint](waypoint_data#waypoint_data-point) that the creature is on, if any.

### curhealth

The health that the creature will spawn with.

### curmana

The mana that the creature will spawn with.

### MovementType

The movement type associated with the creature. Usually the same as its [MovementType](creature_template#creature_template-MovementType), but it can be different.

### npcflag

Same as [creature\_template.npcflag](creature_template#creature_template-npcflag) .

NOTE: A creature.npcflag record will override a [creature\_template.npcflag](creature_template#creature_template-npcflag) record.

### unit\_flags

Same as creature\_template.unit\_flags.

Note:

A creature.unit\_flags record will override a [creature\_template.unit\_flags](creature_template#creature_template-unit_flags) record.

### dynamicflags

Same as creature\_template.dynamicflags.

Note:

A creature.dynamicflags record will override a [creature\_template.dynamicflags](creature_template#creature_template-dynamicflags) record.
