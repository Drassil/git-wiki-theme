# creature\_addon

[<-Back-to:World](database-world.md)

**The \`creature\_addon\` table**

The creature\_addon and creature\_template\_addon tables define different things that are applied on creatures when they are loaded. These "different things" can be for example to have the creature be mounted, to have it emote something, to have it display an aura effect, etc. Through the use of the fields in this table, many things can be changed about the outward visual appearance of the creature. The creature\_template\_addon table affects all creatures with that creature template ID while the creature\_addon table affects individually spawned creatures (so that two creatures using the same template can look different).

NOTE: A creature\_addon record will override a creature\_template\_addon record should they overlap on the same creature.

NOTICE: The data for this table is largely incomplete and is mostly just a regurgitation of what the client receives from the server. This article is a WIP as to what all the possible values are.

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
<td><p><a href="#guid/entry">guid/entry</a></p></td>
<td><p>int(10)/medumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#path_id">path_id</a></p></td>
<td><p>int(11)</p></td>
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
<tr class="even">
<td><p><a href="#mount">mount</a></p></td>
<td><p>mediumint(8)</p></td>
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
<td><p><a href="#bytes1">bytes1</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#bytes2">bytes2</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#emote">emote</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><a href="#aianimkit/movementanimkit/meleeanimkit">aiAnimKit</a></td>
<td>smallint(6)</td>
<td>signed</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#aianimkit/movementanimkit/meleeanimkit">movementAnimKit</a></td>
<td>smallint(6)</td>
<td>signed</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><a href="#aianimkit/movementanimkit/meleeanimkit">meleeAnimKit</a></td>
<td>smallint(6)</td>
<td>signed</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#isLarge">isLarge</a></td>
<td>tinyint(1)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#auras">auras</a></p></td>
<td><p>text</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid/entry

For creature\_addon, this field signifies a unique creature guid. It will affect just that creature whose GUID matches the one specified here.
For creature\_template\_addon, this field signifies the [creature\_template.entry](creature_template#creature_template-entry). It will affect all spawned creatures using that template entry.

### path\_id

If a creature has waypoint pathed movement, this field hold the waypoint\_data.id for the path the creature is to follow.

### mount

The model ID of the mount to be used to make the creature appear mounted. The value here overrides the value for the creature's unit field UNIT\_FIELD\_MOUNTDISPLAYID.

### bytes1

The value here overrides the value for the creature's unit field UNIT\_FIELD\_BYTES\_1.

List of known values and what their visual effects on the creature

-   1 = Sitting
-   2 = Sit chair
-   3 = Sleep
-   4 = Sit low chair
-   5 = Sit medium chair
-   6 = Sit high chair
-   7 = Shows health bar as empty (combine with the state dead emote to make a creature look dead)
-   8 = Makes the mob kneel
-   9 = Submerges the creature below the ground
-   54432 = Hover mode
-   50331648 = Hover mode 2

### bytes2

The value here overrides the value for the creature's unit field UNIT\_FIELD\_BYTES\_2.

NOTE: //creatures always have melee weapon ready if any unless specified otherwise

List of few known values and what their visual effects on the creature

-   0 = STATE\_UNARMED (not prepared weapon)
-   1 = STATE\_MELEE (prepared melee weapon)
-   2 = STATE\_RANGED (prepared ranged weapon)

### emote

Emote ID that the creature should continually perform.

List of often used emote IDs and what they do can be found [here](Emotes).

### aiAnimKit / movementAnimKit / meleeAnimKit

AnimKit ID from AnimKit.db2 that is applied on creature when spawned.

### isLarge

This field controls the visibility distance for creatures:

0 = Normal, standard visible distance from worldserver.conf (default 90 yards)

1 = Large, maximum visibility distance (250 yards)

### auras

This field controls any auras to be applied on the creature (both in effect and visually). To apply multiple auras, you can add more aura entries, separating each entry by a space. Remember that if a spell applies multiple auras.

List of useful aura entries (examples):

-   '16380' - Makes the creature invisible.
-   '18950' - Makes the creature detect other invisible units (players or creatures).
-   '16380 18950' - Both auras above

