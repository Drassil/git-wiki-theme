# gameobject

[<-Back-to:World](database-world.md)

**The \`gameobject\` table**

This table holds the individual object data on each spawned game object in the world. This data along with the object's template data is read and used to instantiate the objects in the world.

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
<td><p><a href="#guid">guid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p>Auto increment</p></td>
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
<td><p>Gameobject Identifier</p></td>
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
<td><p><a href="#rotation0">rotation0</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#rotation1">rotation1</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#rotation2">rotation2</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#rotation3">rotation3</a></p></td>
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
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#animprogress">animprogress</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#state">state</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

The global unique identifier for the game object. This field must be unique among all game objects.

### id

The template ID of the gameobject. See [gameobject\_template.entry](http://www.azerothcore.org/wiki/gameobject_template#entry)

### map

The map ID where this object is spawned. See Maps.dbc

### spawnMask

Controls under which difficulties the object is spawned.

Just like flags you can add them as you wish so 3 would be: Spawned in 10/25 man normal versions of maps (pre 3.2 all maps)

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

This is a bitmask field that describes all the phases that this gameobject will appear in. Aura 261 determines the phase you can see. For example, if you had this aura <http://www.wowhead.com/?spell=55782>, you would be able to see gameobjects in phase 2. If you wanted the gameobject to be visible in both phase 1 and phase 2, you would set the phaseMask to 3.

### position\_x

The X position.

### position\_y

The Y position.

### position\_z

The Z position.

### orientation

The orientation. (North = 0, South = 3.14159)

### rotation0

### rotation1

### rotation2

### rotation3

### spawntimesecs

Time in seconds for this object to respawn.

Using a negative value will result in the object starting out by being "despawned" until a script will spawn it. It will then despawn after the amount of time specified here has passed.

### animprogress

Not really known what this is used for at this time. However, always set it to 100 for chests.

### state

For chests or doors.

-   1 = closed
-   0 = open

