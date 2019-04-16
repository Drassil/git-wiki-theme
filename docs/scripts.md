# scripts

[<-Back-to:World](database-world.md)

# Tables: \*\*\*\_scripts

This table format is used for 3 different tables to control possible scripts activated by different actions:

**spell\_scripts:** Holds scripts that can be activated by spells with effect SPELL\_EFFECT\_SCRIPT\_EFFECT (77) or SPELL\_EFFECT\_DUMMY(3).

**event\_scripts:** Holds scripts activated whenever an event is activated, be it by an object or as the spell effect SPELL\_EFFECT\_SEND\_EVENT (61).

**waypoint\_scripts:** Holds scripts used in the [waypoint\_data](waypoint_data) table.

NOTE: An entry in this table may have more than one row as a script may do more than just one action. Also each action the script may make can have a separate delay attached to it. In that case, the core will activate the appropriate action after the correct delay.

## **Structure**

<table>
<tbody>
<tr class="odd">
<td><strong>Field</strong></td>
<td><strong>Type</strong></td>
<td><strong>Attributes</strong></td>
<td><strong>Key</strong></td>
<td><strong>Null</strong></td>
<td><strong>Default</strong></td>
<td><strong>Extra</strong></td>
<td><strong>Comment</strong></td>
</tr>
<tr class="even">
<td><a href="#id">id</a></td>
<td>mediumint(8)</td>
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
<tr class="odd">
<td><a href="#effindex">effIndex</a> <sup>[1]</sup></td>
<td>tinyint(3)</td>
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
<td><a href="#delay">delay</a></td>
<td>int(10)</td>
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
<tr class="odd">
<td><a href="#command">command</a></td>
<td>mediumint(8)</td>
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
<td><a href="#datalong">datalong</a></td>
<td>mediumint(8)</td>
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
<tr class="odd">
<td><a href="#datalong2">datalong2</a></td>
<td>int(10)</td>
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
<td><a href="#otherfields">dataint</a></td>
<td>int(11)</td>
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
<td><a href="#otherfields">x</a></td>
<td>float</td>
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
<td><a href="#otherfields">y</a></td>
<td>float</td>
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
<td><a href="#otherfields">z</a></td>
<td>float</td>
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
<td><a href="#otherfields">o</a></td>
<td>float</td>
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
<td><a href="#guid">guid</a> <sup>[2]</sup></td>
<td>int(11)</td>
<td>signed</td>
<td>PRI</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
</tbody>
</table>

<sup>1</sup> present in spell\_scripts table only. 
<sup>2</sup> present in waypoint\_scripts table only.

## **Description of the fields**

### id

For **spell\_scripts**, it is the spell ID. See [Spell.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Spell)

For **event\_scripts**, it is the event ID. There doesn't exist currently a full list of events. In any case, the event IDs are taken directly from gameobject WDB data or spell effect data. If both a gameobject and a spell activate the same event, the IDs will match.

For **waypoint\_scripts**, it is the [action](waypoint_data_2130114.html#waypoint_data-action) ID.

### effIndex

The effect index of the spell that this script is to be applied to.

### delay

Delay in seconds before this current step of the script activates. 0 = instant.

### command

The type of action performed by the script after [delay](#scripts-delay) seconds have passed. The value of this field affects what other fields also need to be set. The following commands can be used:

| Command | Name                   | Description                                                              |
|---------|------------------------|--------------------------------------------------------------------------|
| 0       | TALK                   | Creature say/whisper/yell/textemote.                                     |
| 1       | EMOTE                  | Play emote on creature.                                                  |
| 2       | FIELD\_SET             | Change the value at an index for the player.                             |
| 3       | MOVE\_TO               | Relocate creature to a destination.                                      |
| 4       | FLAG\_SET              | Turns on bits on a flag field at an index for the player.                |
| 5       | FLAG\_REMOVE           | Turns off bits on a flag field at an index for the player.               |
| 6       | TELEPORT\_TO           | Teleports the player to a location.                                      |
| 7       | QUEST\_EXPLORED        | Satisfies the explore requirement for a quest.                           |
| 8       | KILL\_CREDIT           | Gives kill credit to the player.                                         |
| 9       | RESPAWN\_GAMEOBJECT    | Spawns a despawned gameobject.                                           |
| 10      | TEMP\_SUMMON\_CREATURE | Temporarily summons a creature.                                          |
| 11      | OPEN\_DOOR             | Opens a door gameobject (type h1. 0).                                    |
| 12      | CLOSE\_DOOR            | Closes a door gameobject (type 0).                                       |
| 13      | ACTIVATE\_OBJECT       | Activates an object.                                                     |
| 14      | REMOVE\_AURA           | Removes an aura due to a spell.                                          |
| 15      | CAST\_SPELL            | Casts a spell.                                                           |
| 16      | PLAY\_SOUND            | Plays a sound.                                                           |
| 17      | CREATE\_ITEM           | Creates specified amount of items for the player.                        |
| 18      | DESPAWN\_SELF          | Forces creature to despawn.                                              |
| 19      | nuttin                 | There is no command 19.                                                  |
| 20      | LOAD\_PATH             | Load path to unit, then unit starts waypoint movement.                   |
| 21      | CALLSCRIPT\_TO\_UNIT   | Calls script from one of \*\_scripts table with given unit as source.    |
| 22      | KILL                   | Changes state of the creature to dead and optionally removes its corpse. |
| 30      | ORIENTATION            | Changes unit's orientation (Used in Waypoint Scripts)                    |
| 31      | EQUIP                  | Sets creature equipment.                                                 |
| 32      | MODEL                  | Sets creature model.                                                     |
| 33      | CLOSE\_GOSSIP          | Closes gossip window. This command is only used for Gossip Scripts.      |
| 34      | PLAYMOVIE              | Plays movie.                                                             |
| 35      | MOVEMENT               | Change movement type.                                                    |

### OtherFields

Depending on what command was used, the meaning and use for the following fields varies.

\***SCRIPT\_COMMAND\_TALK = 0**

-   -   source: Creature.
    -   target: any/Player (for whisper).
    -   datalong: 0=say, 1=yell, 2=text emote, 3=boss emote, 4=whisper 5=boss whisper
    -   dataint: reference to [broadcast\_text.id](broadcast_text)

\***SCRIPT\_COMMAND\_EMOTE = 1**

-   -   source or target: Creature.
    -   datalong: The emote ID to play.
    -   datalong2: If this value is &gt; 0 the npc will play emote state rather than oneshot.

\***SCRIPT\_COMMAND\_FIELD\_SET = 2**

-   -   source or target: Creature.
    -   datalong: Index of the field.
    -   datalong2: Value to place at the index.

\***SCRIPT\_COMMAND\_MOVE\_TO = 3**

-   -   source: Creature.
    -   datalong2: Length (in time) of the motion.
    -   x: X position to move to.
    -   y: Y position to move to.
    -   z: Z position to move to.

\***SCRIPT\_COMMAND\_FLAG\_SET = 4**

-   -   source or target: Creature.
    -   datalong: Field index to be set.
    -   datalong2: Flag bit(s) to set.

\***SCRIPT\_COMMAND\_FLAG\_REMOVE = 5**

-   -   source or target: Creature.
    -   datalong: Field index to be unset.
    -   datalong2: Flag bit(s) to unset.

\***SCRIPT\_COMMAND\_TELEPORT\_TO = 6**

-   -   source or target: Player (datalong2 0) or Creature (datalong2 1).
    -   datalong: Target Map ID. See [Map.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Map)
    -   x: Teleport target x coordinate.
    -   y: Teleport target y coordinate.
    -   z: Teleport target z coordinate.
    -   o: Teleport target orientation.

\***SCRIPT\_COMMAND\_QUEST\_EXPLORED = 7**

-   -   source or target: Player.
    -   target or source: WorldObject.
    -   datalong: Quest entry which external status should be satisfied. See [quest\_template.entry](quest_template_2130261.html#quest_template-entry).
    -   datalong2: Distance away from the NPC/object that the player can be and have the script still take effect (min value 5).

\***SCRIPT\_COMMAND\_KILL\_CREDIT = 8**

-   -   target or source: Player.
    -   datalong: Creatue entry of kill credit. See [creature\_template.entry](creature_template_2130008.html#creature_template-entry).
    -   datalong2: If value &gt; 0 gives kill credit to the whole group player belongs to, otherwise, gives personal kill credit.

\***SCRIPT\_COMMAND\_RESPAWN\_GAMEOBJECT = 9**

-   -   source: WorldObject (summoner).
    -   datalong: Guid of the gameobject to respawn. See [gameobject.guid](gameobject_2130146.html#gameobject-guid).
    -   datalong2: Despawn time in seconds. If the value is &lt; 5 seconds: 5 is used instead.

\***SCRIPT\_COMMAND\_TEMP\_SUMMON\_CREATURE = 10**

-   -   source: WorldObject (summoner).
    -   datalong: Entry of the summoned creature. See [creature\_template.entry](creature_template_2130008.html#creature_template-entry).
    -   datalong2: Despawn time in ms.
    -   x: Summon target x coordinate.
    -   y: Summon target y coordinate.
    -   z: Summon target z coordinate.
    -   o: Summon target orientation.

\***SCRIPT\_COMMAND\_OPEN\_DOOR = 11**

-   -   source: WorldObject.
    -   datalong: Guid of the activated door. See [gameobject.guid](gameobject_2130146.html#gameobject-guid).
    -   datalong2: Delay before closing again the door. If the value is &lt; 15 seconds: 15 is used instead.

\***SCRIPT\_COMMAND\_CLOSE\_DOOR = 12**

-   -   source: WorldObject.
    -   datalong: Guid of the activated door. See [gameobject.guid](gameobject_2130146.html#gameobject-guid).
    -   datalong2: Delay before opening again the door. If the value is &lt; 15 seconds: 15 is used instead.

\***SCRIPT\_COMMAND\_ACTIVATE\_OBJECT = 13**

-   -   source: Unit.
    -   target: GameObject.

\***SCRIPT\_COMMAND\_REMOVE\_AURA = 14**

-   -   source (datalong2 != 0) or target (datalong2 h1. 0): Unit.
    -   datalong: Spell ID. See [Spell.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Spell)
    -   datalong2: If value &gt; 0, then remove from the source; otherwise remove from the target.

\***SCRIPT\_COMMAND\_CAST\_SPELL = 15**

-   -   source: Unit.
    -   target: Unit.
    -   datalong: Spell ID. See [Spell.dbc](https://trinitycore.atlassian.net/wiki/display/tc/Spell)
    -   datalong2:
        -   0 - Source-&gt;Target
        -   1 - Source-&gt;Source (Self cast, use for dummy spells)
        -   2 - Target-&gt;Target
        -   3 - Target-&gt;Source
        -   4 - Source-&gt;Closest entry of dataint.
    -   dataint: Creature entry to target if datalong2 value is 4, or triggered attribute for CastSpell method in other cases.
    -   x: Search range for creature entry (dataint) if datalong2 value is 4.

\***SCRIPT\_COMMAND\_PLAY\_SOUND = 16**

-   -   source: WorldObject.
    -   target: none (datalong2 & 1 0) or Player (datalong2 & 1 != 0).
    -   datalong: Sound ID.
    -   datalong2:
        -   0 - play direct sound to everyone.
        -   1 - play direct sound to target (must be Player).
        -   2 - play sound with distance dependency to anyone.
        -   3 - play sound with distance dependency to target (must be Player).

\***SCRIPT\_COMMAND\_CREATE\_ITEM = 17**

-   -   target or source: Player.
    -   datalong: Item entry to create. See [item\_template.entry](item_template_2130222.html#item_template-entry).
    -   datalong2: Amount of items to create.

\***SCRIPT\_COMMAND\_DESPAWN\_SELF = 18**

-   -   target: Creature.
    -   datalong: Despawn delay.

\***SCRIPT\_COMMAND\_LOAD\_PATH = 20**

-   -   source: Unit.
    -   datalong: Path ID. See [waypoint\_data.id](waypoint_data_2130114.html#waypoint_data-id).
    -   datalong2: If value &gt; 0, means waypoint movement is repeatable.

\***SCRIPT\_COMMAND\_CALLSCRIPT\_TO\_UNIT = 21**

-   -   source: if present, used as a search center.
    -   datalong: entry of searched creature, if source exists, guid of the creature otherwise.
        \*\*datalong2: ID of the script from \*\_scripts table.
    -   dataint:
        -   3 - use spell\_scripts table;
        -   5 - use event\_scripts table;
        -   6 - use waypoint\_scripts table.

\***SCRIPT\_COMMAND\_KILL = 22**

-   -   source: Creature.
    -   dataint: if value == 1 remove corpse.

\***SCRIPT\_COMMAND\_ORIENTATION = 30**

-   -   source: Unit.
    -   target: Unit (datalong != 0).
    -   datalong: If value != 0, then turn to face the target; otherwise turn to value in o.
    -   o: Set orientation to value in field \`o\`.

\***SCRIPT\_COMMAND\_EQUIP = 31**

-   -   source: Creature.
    -   datalong: ID (1, 2, 3 ...)  from equipment entry. See [creature\_equip\_template](creature_equip_template_2129998.html#creature_equip_template-ID).ID

\***SCRIPT\_COMMAND\_MODEL = 32**

-   -   source: Creature.
    -   datalong: model ID.

\***SCRIPT\_COMMAND\_CLOSE\_GOSSIP = 33**

-   -   source: Player.

\***SCRIPT\_COMMAND\_PLAYMOVIE = 34**

-   -   source: Player.
    -   datalong: movie ID.

\***SCRIPT\_COMMAND\_MOVEMENT = 35**

-   -   source: Creature.
    -   datalong: MovementType.
    -   datalong2: MovementDistance (e.g. spawndist for MovementType 1).
    -   dataint: pathid (for MovementType 2, see [waypoint\_data.id](waypoint_data.md#id)).

### guid

`field-no-description|5`

td class=
