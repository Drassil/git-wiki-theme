# smart\_scripts

**Table Structure**

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
<td><p><a href="#entryorguid">entryorguid</a></p></td>
<td><p>bigint(20)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#source_type">source_type</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#id">id</a></p></td>
<td><p>smallint(5)</p></td>
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
<td><p><a href="#link">link</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#event_type">event_type</a></p></td>
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
<td><p><a href="#event_phase_mask">event_phase_mask</a></p></td>
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
<tr class="even">
<td><p><a href="#event_chance">event_chance</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>100</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#event_flags">event_flags</a></p></td>
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
<tr class="even">
<td><p><a href="#4">event_param1</a></p></td>
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
<td><p><a href="#4">event_param2</a></p></td>
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
<td><p><a href="#4">event_param3</a></p></td>
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
<td><p><a href="#4">event_param4</a></p></td>
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
<td><a href="#4">event_param5</a></td>
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
<td><p><a href="#action_type">action_type</a></p></td>
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
<tr class="even">
<td><p><a href="#6">action_param1</a></p></td>
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
<td><p><a href="#6">action_param2</a></p></td>
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
<td><p><a href="#6">action_param3</a></p></td>
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
<td><p><a href="#6">action_param4</a></p></td>
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
<td><p><a href="#6">action_param5</a></p></td>
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
<td><p><a href="#6">action_param6</a></p></td>
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
<td><p><a href="#target_type">target_type</a></p></td>
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
<td><p><a href="#3">target_param1</a></p></td>
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
<td><p><a href="#3">target_param2</a></p></td>
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
<td><p><a href="#3">target_param3</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><a href="#4">target_param4</a></td>
<td>int(10)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>NO</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p><a href="#target_xyzo">target_x</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#target_xyzo">target_y</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#target_xyzo">target_z</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#target_xyzo">target_o</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#comment">comment</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Event Comment</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

Please note: ![](attachments/2130108/2130327.png) means that the feature/option is not (yet) implemented.

### entryorguid

-   EntryOrGuid &gt; 0: entry of the creature / game object / etc.

<!-- -->

-   EntryOrGuid &lt; 0: guid of the creature / game object / etc.

<!-- -->

-   Depends on source\_type.

### source\_type

-   Object type: creature, game object, spell. see table below for values

    | Name                                                                | Value |
    |---------------------------------------------------------------------|-------|
    | SMART\_SCRIPT\_TYPE\_CREATURE                                       | 0     |
    | SMART\_SCRIPT\_TYPE\_GAMEOBJECT                                     | 1     |
    | SMART\_SCRIPT\_TYPE\_AREATRIGGER                                    | 2     |
    | ![](attachments/2130108/2130327.png) SMART\_SCRIPT\_TYPE\_EVENT     | 3     |
    | ![](attachments/2130108/2130327.png) SMART\_SCRIPT\_TYPE\_GOSSIP    | 4     |
    | ![](attachments/2130108/2130327.png) SMART\_SCRIPT\_TYPE\_QUEST     | 5     |
    | ![](attachments/2130108/2130327.png) SMART\_SCRIPT\_TYPE\_SPELL     | 6     |
    | ![](attachments/2130108/2130327.png) SMART\_SCRIPT\_TYPE\_TRANSPORT | 7     |
    | ![](attachments/2130108/2130327.png) SMART\_SCRIPT\_TYPE\_INSTANCE  | 8     |
    | SMART\_SCRIPT\_TYPE\_TIMED\_ACTIONLIST                              | 9     |

### id

-   Incremental id *bound* to each entryorguid & source\_type (0, 1, 2, ...).

### link

-   Simple event linking;

<!-- -->

-   Example: if id = 0 and link = 1; id 1 will only be able to occur if id = 0 was triggered.

<!-- -->

-   Smart\_event to be used.

### event\_phase\_mask

When dealing with phases, *phase IDs* have to be used. There are 10 (9+1) different phases: 1, 2, ... 9 and the default 0.

**Example:** The script is in phase 0 by default - If we want it to go to phase 1, we got two choices:

-   SMART\_ACTION\_INC\_PHASE by 1 or SMART\_ACTION\_SET\_PHASE 1

If the script is in phase 0 and want to skip to phase 2:

-   SMART\_ACTION\_INC\_PHASE by 2 or SMART\_ACTION\_SET\_PHASE 2

If the script is in phase 1 and want to skip to phase 2:

-   SMART\_ACTION\_INC\_PHASE by 1 or SMART\_ACTION\_SET\_PHASE 2

| Name                             | Flag | Hex   | Comment                    |
|----------------------------------|------|-------|----------------------------|
| SMART\_EVENT\_PHASE\_ALWAYS\_BIT | 0    | 0x000 | Means all phases (1 ... 9) |
| SMART\_EVENT\_PHASE\_1           | 1    | 0x001 | Phase 1 only.              |
| SMART\_EVENT\_PHASE\_2           | 2    | 0x002 | Phase 2 only.              |
| SMART\_EVENT\_PHASE\_3           | 4    | 0x004 | Phase 3 only.              |
| SMART\_EVENT\_PHASE\_4           | 8    | 0x008 | Phase 4 only.              |
| SMART\_EVENT\_PHASE\_5           | 16   | 0x010 | Phase 5 only.              |
| SMART\_EVENT\_PHASE\_6           | 32   | 0x020 | Phase 6 only.              |
| SMART\_EVENT\_PHASE\_7           | 64   | 0x040 | Phase 7 only.              |
| SMART\_EVENT\_PHASE\_8           | 128  | 0x080 | Phase 8 only.              |
| SMART\_EVENT\_PHASE\_9           | 256  | 0x100 | Phase 9 only.              |

-   Event will only be able to occur if creature/GO is in this phase.

<!-- -->

-   Example: If we want an event to only be able to occure in phase 1 and 4, **event\_phase\_mask** = 1+8 = 9

<!-- -->

-   (Inverse of EAI: event\_inverse\_phase\_mask).

### event\_chance

This is the probability of the event to occur as a percentage from 0-100. So, if you want the event to occur roughly half of the time, then set this to 50. 

### event\_flags

<table>
<thead>
<tr class="header">
<th><strong>Name</strong></th>
<th>Flag</th>
<th>Hex</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>SMART_EVENT_FLAG_NOT_REPEATABLE</p></td>
<td><p>1</p></td>
<td><p>0x01</p></td>
<td><p>Event can not repeat</p></td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_FLAG_DIFFICULTY_0</p></td>
<td><p>2</p></td>
<td><p>0x02</p></td>
<td><p>Event only occurs in normal dungeon</p></td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_FLAG_DIFFICULTY_1</p></td>
<td><p>4</p></td>
<td><p>0x04</p></td>
<td><p>Event only occurs in heroic dungeon</p></td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_FLAG_DIFFICULTY_2</p></td>
<td><p>8</p></td>
<td><p>0x08</p></td>
<td><p>Event only occurs in normal raid</p></td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_FLAG_DIFFICULTY_3</p></td>
<td><p>16</p></td>
<td><p>0x10</p></td>
<td><p>Event only occurs in heroic raid</p></td>
</tr>
<tr class="even">
<td>SMART_EVENT_FLAG_RESERVED_5</td>
<td>32</td>
<td>0x20</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_EVENT_FLAG_RESERVED_6</td>
<td>64</td>
<td>0x40</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_FLAG_DEBUG_ONLY</p></td>
<td><p>128</p></td>
<td><p>0x80</p></td>
<td><p>Event only occurs in debug build</p></td>
</tr>
<tr class="odd">
<td>SMART_EVENT_FLAG_DONT_RESET</td>
<td>256</td>
<td>0x100</td>
<td>Event will not reset in SmartScript::OnReset()</td>
</tr>
<tr class="even">
<td>SMART_EVENT_FLAG_WHILE_CHARMED</td>
<td>512</td>
<td>0x200</td>
<td>Event can occur while player controlled</td>
</tr>
</tbody>
</table>

**
**

-   Sets if the event should not repeat or should only happen in a given instance/dungeon difficulty (if applicable);

<!-- -->

-   Values can be added together (bitwise math).

### event\_type

<table>
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Value</p></th>
<th><p>Param1</p></th>
<th><p>Param2</p></th>
<th><p>Param3</p></th>
<th><p>Param4</p></th>
<th>Param5</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>SMART_EVENT_UPDATE_IC</p></td>
<td><p>0</p></td>
<td><p>InitialMin</p></td>
<td><p>InitialMax</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td><p>In combat.</p></td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_UPDATE_OOC</p></td>
<td><p>1</p></td>
<td><p>InitialMin</p></td>
<td><p>InitialMax</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>Out of combat.</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_HEALT_PCT</p></td>
<td><p>2</p></td>
<td><p>HPMin%</p></td>
<td><p>HPMax%</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td><p>Health Percentage</p></td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_MANA_PCT</p></td>
<td><p>3</p></td>
<td><p>ManaMin%</p></td>
<td><p>ManaMax%</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td><p>Mana Percentage</p></td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_AGGRO</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Aggro</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_KILL</p></td>
<td><p>5</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p>Player only (0/1)</p></td>
<td><p>Creature entry (if param3 is 0)</p></td>
<td><br />
</td>
<td>On Creature Kill</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_DEATH</p></td>
<td><p>6</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Death</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_EVADE</p></td>
<td><p>7</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Evade Attack</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_SPELLHIT</p></td>
<td><p>8</p></td>
<td><p>SpellID</p></td>
<td><p>School</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><br />
</td>
<td>On Creature/Gameobject Spell Hit</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_RANGE</p></td>
<td><p>9</p></td>
<td><p>MinDist</p></td>
<td><p>MaxDist</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Target In Range</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_OOC_LOS</p></td>
<td><p>10</p></td>
<td><p>NoHostile</p></td>
<td><p>MaxRange</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td>0/1 Player Only</td>
<td>On Target In Distance Out of Combat</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_RESPAWN</p></td>
<td><p>11</p></td>
<td><p>type (None= 0, Map = 1, Area = 2)</p></td>
<td><p>MapId</p></td>
<td><p>ZoneId</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature/Gameobject Respawn</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_TARGET_HEALTH_PCT</p></td>
<td><p>12</p></td>
<td><p>HPMin%</p></td>
<td><p>HPMax%</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Target Health Percentage</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_VICTIM_CASTING</p></td>
<td><p>13</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p>Spell id (0 any)</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Target Casting Spell</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_FRIENDLY_HEALTH</p></td>
<td><p>14</p></td>
<td><p>HPDeficit</p></td>
<td><p>Radius</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Friendly Health Deficit</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_FRIENDLY_IS_CC</p></td>
<td><p>15</p></td>
<td><p>Radius</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_FRIENDLY_MISSING_BUFF</p></td>
<td><p>16</p></td>
<td><p>SpellId</p></td>
<td><p>Radius</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Friendly Lost Buff</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_SUMMONED_UNIT</p></td>
<td><p>17</p></td>
<td><p>CretureId (0 all)</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature/Gameobject Summoned Unit</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_TARGET_MANA_PCT</p></td>
<td><p>18</p></td>
<td><p>ManaMin%</p></td>
<td><p>ManaMax%</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Target Mana Percentage</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_ACCEPTED_QUEST</p></td>
<td><p>19</p></td>
<td><p>QuestID (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Target Accepted Quest</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_REWARD_QUEST</p></td>
<td><p>20</p></td>
<td><p>QuestID (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Target Rewarded Quest</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_REACHED_HOME</p></td>
<td><p>21</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Reached Home</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_RECEIVE_EMOTE</p></td>
<td><p>22</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/Emotes">EmoteId</a></p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p>condition</p></td>
<td><br />
</td>
<td>On Receive Emote.</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_HAS_AURA</p></td>
<td><p>23</p></td>
<td><p>SpellID</p></td>
<td><p>Stacks</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Creature Has Aura</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_TARGET_BUFFED</p></td>
<td><p>24</p></td>
<td><p>SpellID</p></td>
<td><p>Stacks</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Target Buffed With Spell</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_RESET</p></td>
<td><p>25</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>After Combat, On Respawn or Spawn</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_IC_LOS</p></td>
<td><p>26</p></td>
<td><p>NoHostile</p></td>
<td><p>MaxRange</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td>0/1 Player Only</td>
<td>On Target In Distance In Combat</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_PASSENGER_BOARDED</p></td>
<td><p>27</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_PASSENGER_REMOVED</p></td>
<td><p>28</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_CHARMED</p></td>
<td><p>29</p></td>
<td><p>0 (on charm apply) / 1 (on charm remove)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Charmed</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_CHARMED_TARGET</p></td>
<td><p>30</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Target Charmed</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_SPELLHIT_TARGET</p></td>
<td><p>31</p></td>
<td><p>SpellId</p></td>
<td><p>School</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Target Spell Hit</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_DAMAGED</p></td>
<td><p>32</p></td>
<td><p>MinDmg</p></td>
<td><p>MaxDmg</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Creature Damaged</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_DAMAGED_TARGET</p></td>
<td><p>33</p></td>
<td><p>MinDmg</p></td>
<td><p>MaxDmg</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td>On Target Damaged</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_MOVEMENTINFORM</p></td>
<td><p>34</p></td>
<td><p>MovementType (0=any)</p></td>
<td><p>PointID</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>WAYPOINT_MOTION_TYPE = 2,  POINT_MOTION_TYPE = 8</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_SUMMON_DESPAWNED</p></td>
<td><p>35</p></td>
<td><p>Entry</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Summoned Unit Despawned</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_CORPSE_REMOVED</p></td>
<td><p>36</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Corpse Removed</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_AI_INIT</p></td>
<td><p>37</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_DATA_SET</p></td>
<td><p>38</p></td>
<td><p>Field</p></td>
<td><p>Value</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><br />
</td>
<td>On Creature/Gameobject Data Set, Can be used with SMART_ACTION_SET_DATA</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_WAYPOINT_START</p></td>
<td><p>39</p></td>
<td><p>PointId (0 any)</p></td>
<td><p>pathId (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Waypoint ID Started</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_WAYPOINT_REACHED</p></td>
<td><p>40</p></td>
<td><p>PointId (0 any)</p></td>
<td><p>pathId (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Waypoint ID Reached</td>
</tr>
<tr class="even">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_TRANSPORT_ADDPLAYER</p>
</div></td>
<td><p>41</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_TRANSPORT_ADDCREATURE</p>
</div></td>
<td><p>42</p></td>
<td><p>Entry (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_TRANSPORT_REMOVE_PLAYER</p>
</div></td>
<td><p>43</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_TRANSPORT_RELOCATE</p>
</div></td>
<td><p>44</p></td>
<td><p>PointId</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_INSTANCE_PLAYER_ENTER</p>
</div></td>
<td><p>45</p></td>
<td><p>Team (0 any)</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_AREATRIGGER_ONTRIGGER</p></td>
<td><p>46</p></td>
<td><p>TriggerId (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_QUEST_ACCEPTED</p>
</div></td>
<td><p>47</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Target Quest Accepted</td>
</tr>
<tr class="odd">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_QUEST_OBJ_COMPLETION</p>
</div></td>
<td><p>48</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Target Quest Objective Completed</td>
</tr>
<tr class="even">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_QUEST_COMPLETION</p>
</div></td>
<td><p>49</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Target Quest Completed</td>
</tr>
<tr class="odd">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_QUEST_REWARDED</p>
</div></td>
<td><p>50</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Target Quest Rewarded</td>
</tr>
<tr class="even">
<td><div class="content-wrapper">
<p><img src="attachments/2130108/2130327.png" /> SMART_EVENT_QUEST_FAIL</p>
</div></td>
<td><p>51</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Target Quest Field</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_TEXT_OVER</p></td>
<td><p>52</p></td>
<td><p>GroupId (from <a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_text">creature_text</a>)</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature#creature-id">Creature.Id</a> (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On TEXT_OVER Event Triggered After SMART_ACTION_TALK</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_RECEIVE_HEAL</p></td>
<td><p>53</p></td>
<td><p>MinHeal</p></td>
<td><p>MaxHeal</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><br />
</td>
<td>On Creature Received Healing</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_JUST_SUMMONED</p></td>
<td><p>54</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Just spawned</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_WAYPOINT_PAUSED</p></td>
<td><p>55</p></td>
<td><p>PointId (0 any)</p></td>
<td><p>pathID (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Paused at Waypoint ID</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_WAYPOINT_RESUMED</p></td>
<td><p>56</p></td>
<td><p>PointId (0 any)</p></td>
<td><p>pathID (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Resumed after Waypoint ID</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_WAYPOINT_STOPPED</p></td>
<td><p>57</p></td>
<td><p>PointId (0 any)</p></td>
<td><p>pathID (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Stopped On Waypoint ID</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_WAYPOINT_ENDED</p></td>
<td><p>58</p></td>
<td><p>PointId (0 any)</p></td>
<td><p>pathID (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature Waypoint Path Ended</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_TIMED_EVENT_TRIGGERED</p></td>
<td><p>59</p></td>
<td><p>Id</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_UPDATE</p></td>
<td><p>60</p></td>
<td><p>InitialMin</p></td>
<td><p>InitialMax</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_LINK</p></td>
<td><p>61</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>Used to link together multiple events as a chain of events.</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_GOSSIP_SELECT</p></td>
<td><p>62</p></td>
<td><p><a href="gossip_menu_option#gossip_menu_option-menu_id">menu_id</a></p></td>
<td><p><a href="gossip_menu_option#gossip_menu_option-id">id</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On gossip clicked (<a href="gossip_menu_option" class="uri">gossip_menu_option</a>).</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_JUST_CREATED</p></td>
<td><p>63</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_GOSSIP_HELLO</p></td>
<td><p>64</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Right-Click Creature/Gameobject that have gossip enabled.</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_FOLLOW_COMPLETED</p></td>
<td><p>65</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><div class="content-wrapper">
<p>SMART_EVENT_EVENT_PHASE_CHANGE</p>
</div></td>
<td><p>66</p></td>
<td><p>event phase mask</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On event phase mask set</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_IS_BEHIND_TARGET</p></td>
<td><p>67</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On Creature is behind target.</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_GAME_EVENT_START</p></td>
<td><p>68</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/game_event#game_event-eventEntry">game_event.eventEntry</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On <a href="game_event" class="uri">game_event</a> started.</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_GAME_EVENT_END</p></td>
<td><p>69</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/game_event#game_event-eventEntry">game_event.eventEntry</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td>On <a href="game_event" class="uri">game_event</a> ended.</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_GO_STATE_CHANGED</p></td>
<td><p>70</p></td>
<td><p>State (0 - Active, 1 - Ready, 2 - Active alternative)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_GO_EVENT_INFORM</p></td>
<td><p>71</p></td>
<td><p>EventId</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_ACTION_DONE</p></td>
<td><p>72</p></td>
<td><p>EventId</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_EVENT_ON_SPELLCLICK</td>
<td>73</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_EVENT_FRIENDLY_HEALTH_PCT</td>
<td>74</td>
<td>minHpPct</td>
<td>maxHpPct</td>
<td>repeatMin</td>
<td><p>repeatMax</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_EVENT_DISTANCE_CREATURE</td>
<td>75</td>
<td>database guid</td>
<td>database entry</td>
<td>distance</td>
<td>repeat interval (ms)</td>
<td><br />
</td>
<td><p>On creature guid OR any instance of creature entry is within distance.</p></td>
</tr>
<tr class="odd">
<td>SMART_EVENT_DISTANCE_GAMEOBJECT</td>
<td>76</td>
<td>database guid</td>
<td>database entry</td>
<td>distance</td>
<td>repeat interval (ms)</td>
<td><br />
</td>
<td><p>On gameobject guid OR any instance of gameobject entry is within distance.</p></td>
</tr>
<tr class="even">
<td>SMART_EVENT_COUNTER_SET</td>
<td>77</td>
<td>counterID</td>
<td>value</td>
<td>cooldownMin</td>
<td>cooldownMax</td>
<td><br />
</td>
<td>If the value of specified counterID is equal to a specified value</td>
</tr>
</tbody>
</table>

### action\_type

<table>
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Value</p></th>
<th><p>Param1</p></th>
<th><p>Param2</p></th>
<th><p>Param3</p></th>
<th><p>Param4</p></th>
<th><p>Param5</p></th>
<th><p>Param6</p></th>
<th><p>Comment</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>SMART_ACTION_NONE</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Do nothing</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_TALK</p></td>
<td><p>1</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_text#creature_text-groupid">Creature_text.groupid</a></p></td>
<td><p>Duration to wait before SMART_EVENT_TEXT_OVER is triggered.</p></td>
<td>0 It will try to trigger talk of the target
<p>1 Set target as talk target (used for $vars in texts and whisper target)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Param2 in Milliseconds.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_FACTION</p></td>
<td><p>2</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/FactionTemplate">FactionID</a> (or 0 for default)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Sets faction to creature.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_MORPH_TO_ENTRY_OR_MODEL</p></td>
<td><p>3</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-entry">Creature_template.entry</a>(param1)</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-modelid1-4">Creature_template.modelID</a>(param2)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Take DisplayID of creature (param1) OR Turn to DisplayID (param2) OR Both = 0 for Demorph</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SOUND</p></td>
<td><p>4</p></td>
<td><p>SoundId</p></td>
<td><p>onlySelf (0/1)</p></td>
<td><p>Distant Sound (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Play Sound; TextRange = 0 only sends sound to self, TextRange = 1 sends sound to everyone in visibility range</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_PLAY_EMOTE</p></td>
<td><p>5</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/Emotes">EmoteId</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Play Emote</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_FAIL_QUEST</p></td>
<td><p>6</p></td>
<td><p>QuestID</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Fail Quest of Target</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_OFFER_QUEST</p></td>
<td><p>7</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-Id">QuestID</a></p></td>
<td><p>directAdd (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Add Quest to Target</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_REACT_STATE</p></td>
<td><p>8</p></td>
<td><p><a href="https://github.com/TrinityCore/TrinityCore/blob/2652d70/src/server/game/Entities/Unit/Unit.h#L1127-L1133">State</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>React State. Can be Passive (0), Defensive (1), Aggressive (2), Assist (3).</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_ACTIVATE_GOBJECT</p></td>
<td><p>9</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Activate Object</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_RANDOM_EMOTE</p></td>
<td><p>10</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/Emotes">EmoteId1</a></p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/Emotes">EmoteId2</a></p></td>
<td><p>EmoteId3</p></td>
<td><p>Emote4</p></td>
<td><p>Emote5</p></td>
<td><p>Emote6</p></td>
<td><p>Play Random Emote</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_CAST</p></td>
<td><p>11</p></td>
<td><p>SpellId</p></td>
<td><p><a href="#castflags">castFlags</a></p></td>
<td><p>triggeredFlags</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Cast Spell ID at Target</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SUMMON_CREATURE</p></td>
<td><p>12</p></td>
<td><p>creature_template.entry</p></td>
<td><p><a href="#summontypes">Summon type</a></p></td>
<td><p>duration in ms</p></td>
<td><p>attackInvoker</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Summon Unit</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_THREAT_SINGLE_PCT</p></td>
<td><p>13</p></td>
<td><p>Threat% inc</p></td>
<td><p>Threat% dec</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Change Threat Percentage for Single Target</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_THREAT_ALL_PCT</p></td>
<td><p>14</p></td>
<td><p>Threat% inc</p></td>
<td><p>Threat% dec</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Change Threat Percentage for All Enemies</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS</p></td>
<td><p>15</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-Id">QuestID</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_INGAME_PHASE_ID</p></td>
<td><p>16</p></td>
<td><p>phaseId</p></td>
<td><p>apply/remove (1/0)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>For 4.3.4 + only</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_EMOTE_STATE</p></td>
<td><p>17</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/Emotes">EmoteId</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Play Emote Continuously</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_UNIT_FLAG</p></td>
<td><p>18</p></td>
<td><p>(may be more than one field OR'd together)</p></td>
<td><p>type</p>
<p>If false set creature_template.unit_flags</p>
<p>If true set <a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-unit_flags2">creature_template.unit_flags2</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Can set Multi-able flags at once</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_REMOVE_UNIT_FLAG</p></td>
<td><p>19</p></td>
<td><p>(may be more than one field OR'd together)</p></td>
<td><p>type</p>
<p>If false set  <a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-unit_flags">creature_template.unit_flags</a></p>
<p>If true set <a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-unit_flags2">creature_template.unit_flags2</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Can Remove Multi-able flags at once</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_AUTO_ATTACK</p></td>
<td><p>20</p></td>
<td><p>AllowAttackState (0 = Stop attack, anything else means continue attacking)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Stop or Continue Automatic Attack.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_ALLOW_COMBAT_MOVEMENT</p></td>
<td><p>21</p></td>
<td><p>AllowCombatMovement (0 = Stop combat based movement, anything else continue attacking)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Allow or Disable Combat Movement</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_EVENT_PHASE</p></td>
<td><p>22</p></td>
<td><p>smart_scripts.event_phase_mask</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Set event phase 0-9 (the actual values, no bit mask!)</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_INC_EVENT_PHASE</p></td>
<td><p>23</p></td>
<td><p>Increment</p></td>
<td><p>Decrement</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Set param1 OR param2 (not both). Value 0 has no effect.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_EVADE</p></td>
<td><p>24</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Evade Incoming Attack</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_FLEE_FOR_ASSIST</p></td>
<td><p>25</p></td>
<td><p>0/1 (If you want the fleeing NPC to say attempts to flee text on flee, use 1 on param1. For no message use 0.)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>If you want the fleeing NPC to say '%s attempts to run away in fear' on flee, use 1 on param1. 0 for no message.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_CALL_GROUPEVENTHAPPENS</p></td>
<td><p>26</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-Id">QuestID</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_COMBAT_STOP</p></td>
<td><p>27</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_REMOVEAURASFROMSPELL</p></td>
<td><p>28</p></td>
<td><p>Spellid</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>0 removes all auras</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_FOLLOW</p></td>
<td><p>29</p></td>
<td><p>Distance (0 = Default value)</p></td>
<td><p>Angle (0 = Default value)</p></td>
<td><p>End <a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template">creature_template.entry</a></p></td>
<td><p>credit</p></td>
<td><p>creditType (0monsterkill, 1event)</p></td>
<td><p><br />
</p></td>
<td><p>Follow Target</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_RANDOM_PHASE</p></td>
<td><p>30</p></td>
<td><p>smart_scripts.event_phase_mask1</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/smart_scripts#smart_scripts-event_phase_mask">smart_scripts.event_phase_mask</a>2</p></td>
<td><p>smart_scripts.event_phase_mask 3</p></td>
<td><p>smart_scripts.event_phase_mask 4</p></td>
<td><p>smart_scripts.event_phase_mask 5</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/smart_scripts#smart_scripts-event_phase_mask">smart_scripts.event_phase_mask</a>6</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_RANDOM_PHASE_RANGE</p></td>
<td><p>31</p></td>
<td><p>smart_scripts.event_phase_mask minimum</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/smart_scripts#smart_scripts-event_phase_mask">smart_scripts.event_phase_mask</a> maximum</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_RESET_GOBJECT</p></td>
<td><p>32</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Reset Gameobject</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_CALL_KILLEDMONSTER</p></td>
<td><p>33</p></td>
<td><p>Creature_template.entry</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>This is the ID from <a href="https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-RequiredNpcOrGo">quest_template.RequiredNpcOrGo</a></p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_INST_DATA</p></td>
<td><p>34</p></td>
<td><p>Field</p></td>
<td><p>Data</p></td>
<td><p>Type (0 = SetData, 1 = SetBossState)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Set Instance Data</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_INST_DATA64</p></td>
<td><p>35</p></td>
<td><p>Field</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Set Instance Data uint64</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_UPDATE_TEMPLATE</p></td>
<td><p>36</p></td>
<td><p>Creature_template.entry</p></td>
<td><p>Update Level</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Updates creature_template to given entry</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_DIE</p></td>
<td><p>37</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Kill Target</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_IN_COMBAT_WITH_ZONE</p></td>
<td><p>38</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_CALL_FOR_HELP</p></td>
<td><p>39</p></td>
<td><p>Radius in yards that other creatures must be to acknowledge the cry for help.</p></td>
<td><p>0/1 (say calls for help text)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>If you want the NPC to say '%s calls for help!'. Use 1 on param1, 0 for no message.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_SHEATH</p></td>
<td><p>40</p></td>
<td><p>Sheath (0-unarmed, 1-melee, 2-ranged)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_FORCE_DESPAWN</p></td>
<td><p>41</p></td>
<td><p>Despawn timer &quot;ms&quot;</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Despawn Target after param1 in Milliseconds.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_INVINCIBILITY_HP_LEVEL</p></td>
<td><p>42</p></td>
<td><p>flat hp value</p></td>
<td><p>percent hp value</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>If you use both params, only percent will be used.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_MOUNT_TO_ENTRY_OR_MODEL</p></td>
<td><p>43</p></td>
<td><p>creature_template.entry</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-modelid1-4">creature_template.modelID</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Mount to Creature Entry (param1) OR Mount to Creature Display (param2) Or both = 0 for Unmount</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_INGAME_PHASE_MASK (for 3.3.5)</p>
<p>SMART_ACTION_SET_INGAME_PHASE_GROUP (for 4.3.4 +)</p></td>
<td><p>44</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature#creature-phaseMask">creature.phasemask</a> (3.3.5)</p>
<p>creature.phasegroup (4.3.4 +)</p></td>
<td><p>0 = remove / 1 = add (4.3.4+ only)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_DATA</p></td>
<td><p>45</p></td>
<td><p>Field</p></td>
<td><p>Data</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Set Data For Target, can be used with SMART_EVENT_DATA_SET</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_MOVE_FORWARD</p></td>
<td><p>46</p></td>
<td><p>distance</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>move self forward for the specified distance (point movement)</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_VISIBILITY</p></td>
<td><p>47</p></td>
<td><p>0/1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Makes creature Visible = 1  or  Invisible = 0</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_ACTIVE</p></td>
<td><p>48</p></td>
<td><p>0/1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>If a creature or GO is set active it will stay active even if no player is near. Take care, though, as it needs additional ressources (CPU/RAM) to keep them active (the grid where the creature or object is located cannot be unloaded and other objects/creatures nearby also stay active).</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_ATTACK_START</p></td>
<td><p>49</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Allows basic melee swings to creature.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SUMMON_GO</p></td>
<td><p>50</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/gameobject_template#gameobject_template-entry">gameobject_template.entry</a></p></td>
<td><p>De-spawn time in seconds.</p></td>
<td><p>0 - For despawn when the summoner despawn or time runs out</p>
<p>1 - For despawn when time runs out</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Spawns Gameobject, use target_type to set spawn position.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_KILL_UNIT</p></td>
<td><p>51</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Kills Creature.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_ACTIVATE_TAXI</p></td>
<td><p>52</p></td>
<td><p>TaxiID</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Sends player to flight path. You have to be close to Flight Master, which gives Taxi ID you need.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_WP_START</p></td>
<td><p>53</p></td>
<td><p>0 = walk / 1 = run</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/waypoints#waypoints-entry">waypoints.entry</a></p></td>
<td><p>canRepeat</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-ID">quest_template.id</a></p></td>
<td><p>despawntime</p></td>
<td><p>reactState</p></td>
<td><p>Creature starts Waypoint Movement. Use <a href="waypoints" class="uri">waypoints</a> table to create movement.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_WP_PAUSE</p></td>
<td><p>54</p></td>
<td><p>time (in ms)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Creature pauses its Waypoint Movement for given time.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_WP_STOP</p></td>
<td><p>55</p></td>
<td><p>despawnTime</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/quest_template#quest_template-ID">quest_template.id</a></p></td>
<td><p>fail (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Creature stops its Waypoint Movement.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_ADD_ITEM</p></td>
<td><p>56</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/item_template#item_template-entry">item_template.entry</a></p></td>
<td><p>count</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Adds item(s) to player.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_REMOVE_ITEM</p></td>
<td><p>57</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/item_template#item_template-entry">item_template.entry</a></p></td>
<td><p>count</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Removes item(s) from player.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_INSTALL_AI_TEMPLATE</p></td>
<td><p>58</p></td>
<td><p>TemplateID (see <strong>Predefined SAI templates</strong> below)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_RUN</p></td>
<td><p>59</p></td>
<td><p>0 = Off / 1 = On</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_DISABLE_GRAVITY</p></td>
<td><p>60</p></td>
<td><p>0 = On / 1 = Off</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Only works for creatures with inhabit air.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_SWIM</p></td>
<td><p>61</p></td>
<td><p>0 = Off / 1 = On</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_TELEPORT</p></td>
<td><p>62</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/Map">MapID</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Continue this action with the TARGET_TYPE column. Use any target_type (except 0), and use target_x, target_y, target_z, target_o as the coordinates</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_COUNTER</p></td>
<td><p>63</p></td>
<td>counterID</td>
<td>value</td>
<td><p>reset (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_STORE_TARGET_LIST</p></td>
<td><p>64</p></td>
<td><p>varID</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_WP_RESUME</p></td>
<td><p>65</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Creature continues in its Waypoint Movement.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_ORIENTATION</p></td>
<td><p>66</p></td>
<td><p>Depends on the script target.if SMART_TARGET_SELF, facing will be the same as in HomePosition, For SMART_TARGET_POSITION you need to set target_o : 0 = North, West = 1.5, South = 3, East = 4.5</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_CREATE_TIMED_EVENT</p></td>
<td><p>67</p></td>
<td><p>id</p></td>
<td><p>InitialMin</p></td>
<td><p>InitialMax</p></td>
<td><p>RepeatMin(only if it repeats)</p></td>
<td><p>RepeatMax(only if it repeats)</p></td>
<td><p>chance</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_PLAYMOVIE</p></td>
<td><p>68</p></td>
<td><p>entry</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_MOVE_TO_POS</p></td>
<td><p>69</p></td>
<td><p>PointId</p></td>
<td><p>isTransport (0 or 1)</p></td>
<td><p>disablePathfinding (0 or 1)</p></td>
<td><p>ContactDistance</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>PointId is called by SMART_EVENT_MOVEMENTINFORM. Continue this action with the TARGET_TYPE column. Use any target_type, and use target_x, target_y, target_z, target_o as the coordinates</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_RESPAWN_TARGET</p></td>
<td><p>70</p></td>
<td><p>Respawntime in seconds</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_EQUIP</p></td>
<td><p>71</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_equip_template#creature_equip_template-CreatureID">creature_equip_template.CreatureID</a></p></td>
<td><p>Slotmask</p></td>
<td><p>Slot1 (<a href="https://trinitycore.atlassian.net/wiki/display/tc/item_template#item_template-entry">item_template.entry</a>)</p></td>
<td><p>Slot2 (<a href="https://trinitycore.atlassian.net/wiki/display/tc/item_template#item_template-entry">item_template.entry</a>)</p></td>
<td><p>Slot3 (<a href="https://trinitycore.atlassian.net/wiki/display/tc/item_template#item_template-entry">item_template.entry</a>)</p></td>
<td><p><br />
</p></td>
<td><p>only slots with mask set will be sent to client, bits are 1, 2, 4, leaving mask 0 is defaulted to mask 7 (send all), Slots1-3 are only used if no Param1 is set</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_CLOSE_GOSSIP</p></td>
<td><p>72</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td>Closes gossip window.</td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_TRIGGER_TIMED_EVENT</p></td>
<td><p>73</p></td>
<td><p>id(&gt;1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_REMOVE_TIMED_EVENT</p></td>
<td><p>74</p></td>
<td><p>id(&gt;1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_ADD_AURA</p></td>
<td><p>75</p></td>
<td><p>SpellId</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Adds aura to player(s). Use target_type 17 to make AoE aura.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT</p></td>
<td><p>76</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>WARNING: CAN CRASH CORE, do not use if you dont know what you are doing</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_RESET_SCRIPT_BASE_OBJECT</p></td>
<td><p>77</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_CALL_SCRIPT_RESET</p></td>
<td><p>78</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_RANGED_MOVEMENT</p></td>
<td><p>79</p></td>
<td><p>attackDistance</p></td>
<td><p>attackAngle</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Sets movement to follow at a specific range to the target.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_CALL_TIMED_ACTIONLIST</p></td>
<td><p>80</p></td>
<td><p>EntryOrGuid * 100 (<a href="#entryorguid">smart_scripts.entryorguid</a> with 00 added after the entry, or 01, 02, 03 etc. for multiple action lists)</p></td>
<td><p>timer update type(0 OOC, 1 IC, 2 ALWAYS)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_NPC_FLAG</p></td>
<td><p>81</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-npcflag">Creature_template.npcflag</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_ADD_NPC_FLAG</p></td>
<td><p>82</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-npcflag">Creature_template.npcflag</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_REMOVE_NPC_FLAG</p></td>
<td><p>83</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-npcflag">Creature_template.npcflag</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SIMPLE_TALK</p></td>
<td><p>84</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_text#creature_text-groupid">creature_text.groupid</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Makes a player say text. SMART_EVENT_TEXT_OVER is not triggered and whispers can not be used.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SELF_CAST</p></td>
<td><p>85</p></td>
<td><p>SpellID</p></td>
<td><p><a href="#cast_flags">castFlags</a></p></td>
<td><p>triggeredFlags</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>The target will cast the spell on it self</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_CROSS_CAST</p></td>
<td><p>86</p></td>
<td><p>SpellID</p></td>
<td><p><a href="#cast_flags">castFlags</a></p></td>
<td><p>CasterTargetType (caster is selected here, use it as target_type)</p></td>
<td><p>CasterTarget (target_param1)</p></td>
<td><p>CasterTarget (target_param2)</p></td>
<td><p>CasterTarget (target_param3)</p></td>
<td><p>This action is used to make selected caster (in CasterTargetType) to cast spell. Actual target is entered in target_type as normally.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_CALL_RANDOM_TIMED_ACTIONLIST</p></td>
<td><p>87</p></td>
<td><p>EntryOrGuid 1 (<a href="#entryorguid">smart_scripts.entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 2 (<a href="#entryorguid">smart_scripts.entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 3 (<a href="#entryorguid">smart_scripts.entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 4 (<a href="#entryorguid">smart_scripts.entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 5 (<a href="#entryorguid">smart_scripts.entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 6 (<a href="#entryorguid">smart_scripts.entryorguid</a> * 100 + n)</p></td>
<td><p>Will select one entry from the ones provided. 0 is ignored.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_CALL_RANDOM_RANGE_TIMED_ACTIONLIST</p></td>
<td><p>88</p></td>
<td><p>EntryOrGuid 1 (<a href="#entryorguid">smart_scripts.entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 2 (<a href="#entryorguid">smart_scripts.entryorguid</a> * 100 + n)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>0 is ignored.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_RANDOM_MOVE</p></td>
<td><p>89</p></td>
<td><p>Radius</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Creature moves to random position in given radius.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_UNIT_FIELD_BYTES_1</p></td>
<td><p>90</p></td>
<td><p>Value</p></td>
<td><p>Type</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_REMOVE_UNIT_FIELD_BYTES_1</p></td>
<td><p>91</p></td>
<td><p>Value</p></td>
<td><p>Type</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_INTERRUPT_SPELL</p></td>
<td><p>92</p></td>
<td><p>With delay (0/1)</p></td>
<td><p>SpellId</p></td>
<td><p>Instant (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>This action allows you to interrupt the current spell being cast. If you do not set the spellId, the core will find the current spell depending on the withDelay and the withInstant values.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SEND_GO_CUSTOM_ANIM</p></td>
<td><p>93</p></td>
<td><p>animprogress (0-255)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_DYNAMIC_FLAG</p></td>
<td><p>94</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature#creature-dynamicflags">creature.dynamicflags</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_ADD_DYNAMIC_FLAG</p></td>
<td><p>95</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature#creature-dynamicflags">creature.dynamicflags</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_REMOVE_DYNAMIC_FLAG</p></td>
<td><p>96</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature#creature-dynamicflags">creature.dynamicflags</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_JUMP_TO_POS</p></td>
<td><p>97</p></td>
<td><p>Speed XY</p></td>
<td><p>Speed Z</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SEND_GOSSIP_MENU</p></td>
<td><p>98</p></td>
<td><p>gossip_menu.entry</p></td>
<td><p><a href="#text_id">gossip_menu.text_id</a><br />
(same value as <a href="#id">npc_text.ID</a>)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Can be used together with 'SMART_EVENT_GOSSIP_HELLO' to set custom gossip.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_GO_SET_LOOT_STATE</p></td>
<td><p>99</p></td>
<td><p>LootState (0 - Not ready, 1 - Ready, 2 - Activated, 3 - Just deactivated)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SEND_TARGET_TO_TARGET</p></td>
<td><p>100</p></td>
<td><p>Id</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Send targets previously stored with SMART_ACTION_STORE_TARGET, to another npc/go, the other npc/go can then access them as if it was its own stored list</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_HOME_POS</p></td>
<td><p>101</p></td>
<td><p>0: take position of target as new home position</p>
<p>1: read home position from DB</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_HEALTH_REGEN</p></td>
<td><p>102</p></td>
<td><p>0/1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Sets the current creatures health regen on or off.</p></td>
</tr>
<tr class="even">
<td>SMART_ACTION_SET_ROOT</td>
<td>103</td>
<td>0/1</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>Enables or disables creature movement</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_SET_GO_FLAG</td>
<td>104</td>
<td><a href="gameobject_template_addon_46235672.html#gameobject_template_addon-flags">gameobject_template_addon.flags</a></td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>oldFlag = newFlag</td>
</tr>
<tr class="even">
<td>SMART_ACTION_ADD_GO_FLAG</td>
<td>105</td>
<td><a href="gameobject_template_addon_46235672.html#gameobject_template_addon-flags">gameobject_template_addon.flags</a></td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>oldFlag |= newFlag</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_REMOVE_GO_FLAG</td>
<td>106</td>
<td><a href="gameobject_template_addon_46235672.html#gameobject_template_addon-flags">gameobject_template_addon.flags</a></td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>oldFlag &amp;= ~newFlag</td>
</tr>
<tr class="even">
<td>SMART_ACTION_SUMMON_CREATURE_GROUP</td>
<td>107</td>
<td><a href="creature_summon_groups_2130086.html#creature_summon_groups-groupId">creature_summon_groups.groupId</a></td>
<td>Attack invoker (0/1)</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>Use creature_summon_groups table. SAI target has no effect, use 0</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_SET_POWER</td>
<td>108</td>
<td>Power type</td>
<td>New power</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_ADD_POWER</td>
<td>109</td>
<td>Power type</td>
<td>Power to add</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_REMOVE_POWER</td>
<td>110</td>
<td>Power type</td>
<td>Power to remove</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_GAME_EVENT_STOP</td>
<td>111</td>
<td>GameEventId</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_GAME_EVENT_START</td>
<td>112</td>
<td>GameEventId</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_START_CLOSEST_WAYPOINT</td>
<td>113</td>
<td>wp1</td>
<td>wp2</td>
<td>wp3</td>
<td>wp4</td>
<td><p>wp5</p>
<p><br />
</p></td>
<td>wp6</td>
<td>Make target follow closest waypoint to its location</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_MOVE_OFFSET</td>
<td>114</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><p>Use  target_x,  target_y,  target_z</p>
<p>With target_type=1</p></td>
</tr>
<tr class="even">
<td>SMART_ACTION_RANDOM_SOUND</td>
<td>115</td>
<td>soundId1</td>
<td>soundId2</td>
<td>soundId3</td>
<td>soundId4</td>
<td>onlySelf (0/1)</td>
<td>Distant Sound (0/1)</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_SET_CORPSE_DELAY</td>
<td>116</td>
<td>timer</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_DISABLE_EVADE</td>
<td>117</td>
<td>disable evade (1) / re-enable (0)</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_GO_SET_GO_STATE</td>
<td>118</td>
<td>state</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_SET_CAN_FLY</td>
<td>119</td>
<td>0/1</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_REMOVE_AURAS_BY_TYPE</td>
<td>120</td>
<td>Type</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_SET_SIGHT_DIST</td>
<td>121</td>
<td>SightDistance</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_FLEE</td>
<td>122</td>
<td>FleeTime</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_ADD_THREAT</td>
<td>123</td>
<td>+threat</td>
<td>-threat</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_LOAD_EQUIPMENT</td>
<td>124</td>
<td>Id</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_TRIGGER_RANDOM_TIMED_EVENT</td>
<td>125</td>
<td>id min range</td>
<td>id max range</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_REMOVE_ALL_GAMEOBJECTS</td>
<td>126</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_REMOVE_MOVEMENT</td>
<td>127</td>
<td>movementType</td>
<td>Forced</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_PLAY_ANIMKIT</td>
<td>128</td>
<td>AnimKit ID</td>
<td><p>type:</p>
<p>1- PlayOneShotAnimKitId</p>
<p>2- SetAIAnimKitId</p>
<p>3- SetMeleeAnimKitId</p>
<p>4- SetMovementAnimKitId</p></td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>// don't use on 3.3.5a</td>
</tr>
<tr class="even">
<td>SMART_ACTION_SCENE_PLAY</td>
<td>129</td>
<td>SceneId</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>// don't use on 3.3.5a</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_SCENE_CANCEL</td>
<td>130</td>
<td>SceneId</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>// don't use on 3.3.5a</td>
</tr>
<tr class="even">
<td>SMART_ACTION_SPAWN_SPAWNGROUP</td>
<td>131</td>
<td>groupId</td>
<td>minDelay</td>
<td>maxDelay</td>
<td>spawnflags</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_DESPAWN_SPAWNGROUP</td>
<td>132</td>
<td>groupId</td>
<td>minDelay</td>
<td>maxDelay</td>
<td>spawnflags</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>SMART_ACTION_RESPAWN_BY_SPAWNID</td>
<td>133</td>
<td>spawnType (0 npc/ 1 gob)</td>
<td>spawnId (DB Guid)</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>Use to respawn npcs and gobs, the target in this case is always=1 and only a single unit could be a target via the spawnId (action_param1, action_param2)</td>
</tr>
<tr class="odd">
<td>SMART_ACTION_INVOKER_CAST</td>
<td>134</td>
<td><p>SpellID</p></td>
<td><a href="#cast_flags">castFlags</a></td>
<td>triggeredFlags</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>if avaliable, last used invoker will cast spellId with castFlags on targets</td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_MOVE_TO_POS_TARGET</p></td>
<td><p>201</p></td>
<td><p>pointId</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_GO_STATE</p></td>
<td><p>202</p></td>
<td><p>state</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_EXIT_VEHICLE</p></td>
<td><p>203</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_UNIT_MOVEMENT_FLAGS</p></td>
<td><p>204</p></td>
<td><p>flags</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_COMBAT_DISTANCE</p></td>
<td><p>205</p></td>
<td><p>combatDistance</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_CASTER_COMBAT_DIST</p></td>
<td><p>206</p></td>
<td><p>followDistance</p></td>
<td><p>resetToMax</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_HOVER</p></td>
<td><p>207</p></td>
<td><p>0/1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_ADD_IMMUNITY</p></td>
<td><p>208</p></td>
<td><p>type</p></td>
<td><p>id</p></td>
<td><p>value</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_REMOVE_IMMUNITY</p></td>
<td><p>209</p></td>
<td><p>type</p></td>
<td><p>id</p></td>
<td><p>value</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_FALL</p></td>
<td><p>210</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_EVENT_FLAG_RESET</p></td>
<td><p>211</p></td>
<td><p>0/1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_STOP_MOTION</p></td>
<td><p>212</p></td>
<td><p>stopMoving</p></td>
<td><p>movementExpired</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_NO_ENVIRONMENT_UPDATE</p></td>
<td><p>213</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_ZONE_UNDER_ATTACK</p></td>
<td><p>214</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_LOAD_GRID</p></td>
<td><p>215</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_MUSIC</p></td>
<td><p>216</p></td>
<td><p>SoundId</p></td>
<td><p>onlySelf</p></td>
<td><p>type</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Plays the specified sound file as music. Type can be one of these values:<br />
0: Play music for the specified target(s)<br />
1: Play music for all players in the entire zone<br />
2: Play music for all players in the area</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_RANDOM_MUSIC</p></td>
<td><p>217</p></td>
<td><p>SoundId1</p></td>
<td><p>SoundId2</p></td>
<td><p>SoundId3</p></td>
<td><p>SoundId4</p></td>
<td><p>onlySelf</p></td>
<td><p>type</p></td>
<td><p>Plays randomly one of the specified sound files as music. Type can be one of these values:<br />
0: Play music for the specified target(s)<br />
1: Play music for all players in the entire zone<br />
2: Play music for all players in the area</p></td>
</tr>
</tbody>
</table>

### Predefined SAI templates

<table>
<thead>
<tr class="header">
<th><p>Description Name</p></th>
<th><p>Value (Param1)</p></th>
<th><p>Param2</p></th>
<th><p>Param3</p></th>
<th><p>Param4</p></th>
<th><p>Param5</p></th>
<th><p>Param6</p></th>
<th><p>Comment</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>SMARTAI_TEMPLATE_BASIC</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMARTAI_TEMPLATE_CASTER</p></td>
<td><p>1</p></td>
<td><p>spellid</p></td>
<td><p>repeatMin</p></td>
<td><p>repeatMax</p></td>
<td><p>range</p></td>
<td><p>manaPCT</p></td>
<td><p>+JOIN: target_param1 as castFlag</p></td>
</tr>
<tr class="odd">
<td><p>SMARTAI_TEMPLATE_TURRET</p></td>
<td><p>2</p></td>
<td><p>spellid</p></td>
<td><p>repeatMin</p></td>
<td><p>repeatMax</p></td>
<td><p>range</p></td>
<td><p>manaPCT</p></td>
<td><p>+JOIN: target_param1 as castflag</p></td>
</tr>
<tr class="even">
<td><p>SMARTAI_TEMPLATE_PASSIVE</p></td>
<td><p>3</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMARTAI_TEMPLATE_CAGED_GO_PART</p></td>
<td><p>4</p></td>
<td><p>creatureID</p></td>
<td><p>give credit at point end (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMARTAI_TEMPLATE_CAGED_NPC_PART</p></td>
<td><p>5</p></td>
<td><p>gameObjectID</p></td>
<td><p>despawntime</p></td>
<td><p>run (0/1)</p></td>
<td><p>dist</p></td>
<td><p>TextGroupID</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

### target\_type

<table>
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Value</p></th>
<th><p>target_param1</p></th>
<th><p>target_param2</p></th>
<th><p>target_param3</p></th>
<th>target_param4</th>
<th><p>target_x</p></th>
<th><p>target_y</p></th>
<th><p>target_z</p></th>
<th><p>target_o</p></th>
<th><p>Comment</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>SMART_TARGET_NONE</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>None.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_SELF</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Self cast.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_VICTIM</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Our current target. (ie: highest aggro)</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_HOSTILE_SECOND_AGGRO</p></td>
<td><p>3</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Second highest aggro.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_HOSTILE_LAST_AGGRO</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Dead last on aggro.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_HOSTILE_RANDOM</p></td>
<td><p>5</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Just any random target on our threat list.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_HOSTILE_RANDOM_NOT_TOP</p></td>
<td><p>6</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Any random target except top threat.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_ACTION_INVOKER</p></td>
<td><p>7</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Unit who caused this Event to occur.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_POSITION</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p>x</p></td>
<td><p>y</p></td>
<td><p>z</p></td>
<td><p>o</p></td>
<td><p>Use xyz from event params.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_CREATURE_RANGE</p></td>
<td><p>9</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-entry">creature Entry</a> (0 any)</p></td>
<td><p>minDist</p></td>
<td><p>maxDist</p></td>
<td><p>Number of target</p>
<p>0 = all targets</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>(Random?) creature with specified ID within specified range.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_CREATURE_GUID</p></td>
<td><p>10</p></td>
<td><p>guid</p></td>
<td><p>entry</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Creature with specified GUID.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_CREATURE_DISTANCE</p></td>
<td><p>11</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-entry">creature Entry</a> (0 any)</p></td>
<td><p>maxDist</p></td>
<td><p>Number of target</p>
<p>0 = all targets</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Creature with specified ID within distance. (Different from #9?)</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_STORED</p></td>
<td><p>12</p></td>
<td><p>id</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Uses pre-stored target(list)</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_GAMEOBJECT_RANGE</p></td>
<td><p>13</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/gameobject_template#gameobject_template-entry">GO Entry</a> (0 any)</p></td>
<td><p>minDist</p></td>
<td><p>maxDist</p></td>
<td><p>Number of target</p>
<p>0 = all targets</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>(Random?) object with specified ID within specified range.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_GAMEOBJECT_GUID</p></td>
<td><p>14</p></td>
<td><p>guid</p></td>
<td><p>entry</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Object with specified GUID.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_GAMEOBJECT_DISTANCE</p></td>
<td><p>15</p></td>
<td><p>GO Entry (0 any)</p></td>
<td><p>maxDist</p></td>
<td><p>Number of target</p>
<p>0 = all targets</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Object with specified ID within distance. (Different from #13?)</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_INVOKER_PARTY</p></td>
<td><p>16</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Invoker's party members</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_PLAYER_RANGE</p></td>
<td><p>17</p></td>
<td><p>minDist</p></td>
<td><p>maxDist</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>(Random?) player within specified range.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_PLAYER_DISTANCE</p></td>
<td><p>18</p></td>
<td><p>maxDist</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>(Random?) player within specified distance. (Different from #17?)</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_CLOSEST_CREATURE</p></td>
<td><p>19</p></td>
<td><p><a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-entry">creature Entry</a> (0 any)</p></td>
<td><p>maxDist (Can be from 0-100 yards)</p></td>
<td><p>dead? (0/1)</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Closest creature with specified ID within specified range.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_CLOSEST_GAMEOBJECT</p></td>
<td><p>20</p></td>
<td><p>GO Entry (0 any)</p></td>
<td><p>maxDist (Can be from 0-100 yards)</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Closest object with specified ID within specified range.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_CLOSEST_PLAYER</p></td>
<td><p>21</p></td>
<td><p>maxDist</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Closest player within specified range.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_ACTION_INVOKER_VEHICLE</p></td>
<td><p>22</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Unit's vehicle who caused this Event to occur</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_OWNER_OR_SUMMONER</p></td>
<td><p>23</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Unit's owner or summoner</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_THREAT_LIST</p></td>
<td><p>24</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>All units on creature's threat list</p></td>
</tr>
<tr class="even">
<td>SMART_TARGET_CLOSEST_ENEMY</td>
<td>25</td>
<td>maxDist</td>
<td>playerOnly (0/1)</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>Any attackable target (creature or player) within maxDist</td>
</tr>
<tr class="odd">
<td>SMART_TARGET_CLOSEST_FRIENDLY</td>
<td>26</td>
<td>maxDist</td>
<td>playerOnly (0/1)</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>Any friendly unit (creature, player or pet) within maxDist</td>
</tr>
<tr class="even">
<td>SMART_TARGET_LOOT_RECIPIENTS</td>
<td>27</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>All tagging players</td>
</tr>
<tr class="odd">
<td>SMART_TARGET_FARTHEST</td>
<td>28</td>
<td>maxDist</td>
<td>playerOnly</td>
<td>isInLos (0/1)</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><p>Farthest unit on the threat list</p></td>
</tr>
<tr class="even">
<td>SMART_TARGET_VEHICLE_ACCESSORY</td>
<td>29</td>
<td>seat</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>Vehicle can target unit in given seat</td>
</tr>
</tbody>
</table>

### comment

Commenting on SAI uses a template which is the following: (with an example)

"Creature name - Event - Action"

"Minion of Gurok - On spawn - Set Random Movement"

**Quick notes:**

-   Always update *creature\_template*,*gameobject\_template* or *areatrigger\_scripts* with:

``` cpp
UPDATE `creature_template` SET `AIName`='SmartAI' WHERE `entry`=y;

UPDATE `gameobject_template` SET `AIName`='SmartGameObjectAI' WHERE `entry`=y;

INSERT INTO `areatrigger_scripts` (`entry`, `ScriptName`) VALUES(y,'SmartTrigger');
```

-   If the creature or GO is inside a dungeon, set *event\_flags* accordingly to the instance difficulty (heroic, 25 man, etc.).

**In case of doubt about an *Event*, *Action\_or \_Target,\_check source code (\_src/server/game/AI/SmartScripts* files; mainly \*SmartScript.cpp**)

### Cast Flags

| Name                                                           | Flag | Hex  | Comment                                                                 |
|----------------------------------------------------------------|------|------|-------------------------------------------------------------------------|
| SMARTCAST\_INTERRUPT\_PREVIOUS                                 | 1    | 0x01 | Interrupt any spell casting                                             |
| SMARTCAST\_TRIGGERED                                           | 2    | 0x02 | Triggered (this makes spell cost zero mana and have no cast time)       |
| ![](attachments/2130108/2130327.png) CAST\_FORCE\_CAST         | 4    | 0x04 | Forces cast even if creature is out of mana or out of range             |
| ![](attachments/2130108/2130327.png) CAST\_NO\_MELEE\_IF\_OOM  | 8    | 0x08 | Prevents creature from entering melee if out of mana or out of range    |
| ![](attachments/2130108/2130327.png) CAST\_FORCE\_TARGET\_SELF | 16   | 0x10 | Forces the target to cast this spell on itself                          |
| CAST\_AURA\_NOT\_PRESENT                                       | 32   | 0x20 | Only casts the spell if the target does not have an aura from the spell |
| SMARTCAST\_COMBAT\_MOVE                                        | 64   | 0x40 | Prevent combat movement on cast, allow on fail range, mana, LOS         |

### React States

| Name              | Value | Comment                                                       |
|-------------------|-------|---------------------------------------------------------------|
| REACT\_PASSIVE    | 0     | Does not defend or attack at all. Does nothing.               |
| REACT\_DEFENSIVE  | 1     | Only attacks back when attacked.                              |
| REACT\_AGGRESSIVE | 2     | Will attack if on threat list and in threat radius. (default) |

### Summon Types

| Name                                        | Value | Comment                                                              |
|---------------------------------------------|-------|----------------------------------------------------------------------|
| TEMPSUMMON\_TIMED\_OR\_DEAD\_DESPAWN        | 1     | Despawns after a specified time OR when the creature disappears.     |
| TEMPSUMMON\_TIMED\_OR\_CORPSE\_DESPAWN      | 2     | Despawns after a specified time OR when the creature dies.           |
| TEMPSUMMON\_TIMED\_DESPAWN                  | 3     | Despawns after a specified time.                                     |
| TEMPSUMMON\_TIMED\_DESPAWN\_OUT\_OF\_COMBAT | 4     | Despawns after a specified time after the creature is out of combat. |
| TEMPSUMMON\_CORPSE\_DESPAWN                 | 5     | Despawns instantly after death.                                      |
| TEMPSUMMON\_CORPSE\_TIMED\_DESPAWN          | 6     | Despawns after a specified time after death.                         |
| TEMPSUMMON\_DEAD\_DESPAWN                   | 7     | Despawns when the creature disappears.                               |
| TEMPSUMMON\_MANUAL\_DESPAWN                 | 8     | Despawns when UnSummon() (or Force Despawn action) is called.        |

### Invoker:

|                                                                      |
|----------------------------------------------------------------------|
| // white list of events that actually have an invoker passed to them |

Actions like SMART\_ACTION\_INVOKER\_CAST and targets like SMART\_TARGET\_ACTION\_INVOKER will work only if the event is in this list:

SMART\_EVENT\_AGGRO

SMART\_EVENT\_DEATH

SMART\_EVENT\_KILL

SMART\_EVENT\_SUMMONED\_UNIT

SMART\_EVENT\_SPELLHIT

SMART\_EVENT\_SPELLHIT\_TARGET

SMART\_EVENT\_DAMAGED

SMART\_EVENT\_RECEIVE\_HEAL

SMART\_EVENT\_RECEIVE\_EMOTE

SMART\_EVENT\_JUST\_SUMMONED

SMART\_EVENT\_DAMAGED\_TARGET

SMART\_EVENT\_SUMMON\_DESPAWNED

SMART\_EVENT\_PASSENGER\_BOARDED

SMART\_EVENT\_PASSENGER\_REMOVED

SMART\_EVENT\_GOSSIP\_HELLO

SMART\_EVENT\_GOSSIP\_SELECT

SMART\_EVENT\_ACCEPTED\_QUEST

SMART\_EVENT\_REWARD\_QUEST

SMART\_EVENT\_FOLLOW\_COMPLETED

SMART\_EVENT\_ON\_SPELLCLICK

SMART\_EVENT\_GO\_LOOT\_STATE\_CHANGED

SMART\_EVENT\_AREATRIGGER\_ONTRIGGER

SMART\_EVENT\_IC\_LOS

SMART\_EVENT\_OOC\_LOS

SMART\_EVENT\_DISTANCE\_CREATURE

SMART\_EVENT\_FRIENDLY\_HEALTH

SMART\_EVENT\_FRIENDLY\_HEALTH\_PCT

SMART\_EVENT\_FRIENDLY\_IS\_CC

SMART\_EVENT\_FRIENDLY\_MISSING\_BUFF

SMART\_EVENT\_ACTION\_DONE

SMART\_EVENT\_TARGET\_HEALTH\_PCT

SMART\_EVENT\_TARGET\_MANA\_PCT

SMART\_EVENT\_RANGE

SMART\_EVENT\_VICTIM\_CASTING

SMART\_EVENT\_TARGET\_BUFFED

SMART\_EVENT\_IS\_BEHIND\_TARGET

SMART\_EVENT\_INSTANCE\_PLAYER\_ENTER

SMART\_EVENT\_TRANSPORT\_ADDCREATURE

SMART\_EVENT\_DATA\_SET

## Attachments:

![](images/icons/bullet_blue.gif){width="8" height="8"} [Unused.png](attachments/2130108/2130327.png) (image/png)

