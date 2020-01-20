[Database Structure](Database-Structure) > [World-Database](World-Database) > [smart_scripts](smart_scripts)

# smart\_scripts

**Table Structure**

<table height="400">
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
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
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
<td><p>smallint(5)</p></td>
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
<td><p>smallint(5)</p></td>
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
<td><p><a href="#event_type">event_param1</a></p></td>
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
<td><p><a href="#event_type">event_param2</a></p></td>
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
<td><p><a href="#event_type">event_param3</a></p></td>
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
<td><p><a href="#event_type">event_param4</a></p></td>
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
<td><p><a href="#event_type">event_param5</a></p></td>
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
<td><p><a href="#action_type">action_param1</a></p></td>
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
<td><p><a href="#action_type">action_param2</a></p></td>
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
<td><p><a href="#action_type">action_param3</a></p></td>
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
<td><p><a href="#action_type">action_param4</a></p></td>
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
<td><p><a href="#action_type">action_param5</a></p></td>
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
<td><p><a href="#action_type">action_param6</a></p></td>
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
<td><p><a href="#target_type">target_param1</a></p></td>
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
<td><p><a href="#target_type">target_param2</a></p></td>
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
<td><p><a href="#target_type">target_param3</a></p></td>
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
<td><p><a href="#target_type">target_param4</a></p></td>
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
<td><p><a href="#target_type">target_x</a></p></td>
<td><p>float</p></td>
<td><p><br />
</p></td>
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
<td><p><a href="#target_type">target_y</a></p></td>
<td><p>float</p></td>
<td><p><br />
</p></td>
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
<td><p><a href="#target_type">target_z</a></p></td>
<td><p>float</p></td>
<td><p><br />
</p></td>
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
<td><p><a href="#target_type">target_o</a></p></td>
<td><p>float</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p>Event Comment</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

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
    | SMART\_SCRIPT\_TYPE\_TIMED\_ACTIONLIST                              | 9     |

### id

-   Incremental id *bound* to each entryorguid & source\_type (0, 1, 2, ...).

### link

-   Simple event linking;

<!-- -->

-   Example: if id = 0 and link = 1; id 1 will only be able to occur if id = 0 was triggered (id 1 has to use event\_type SMART\_EVENT\_LINK).

<!-- -->

-   Smart\_event to be used.

### event\_phase\_mask

When dealing with phases, *phase IDs* have to be used. There are 13 (12+1) different phases: 1, 2, ... 12 and the default 0.

**Example:** The script is in phase 0 by default - If we want it to go to phase 1, we got two choices:

-   SMART\_ACTION\_INC\_PHASE by 1 or SMART\_ACTION\_SET\_PHASE 1

If the script is in phase 0 and want to skip to phase 2:

-   SMART\_ACTION\_INC\_PHASE by 2 or SMART\_ACTION\_SET\_PHASE 2

If the script is in phase 1 and want to skip to phase 2:

-   SMART\_ACTION\_INC\_PHASE by 1 or SMART\_ACTION\_SET\_PHASE 2

| Name                             | Flag | Hex   | Comment                     |
|----------------------------------|------|-------|-----------------------------|
| SMART\_EVENT\_PHASE\_ALWAYS\_BIT | 0    | 0x000 | Means all phases (1 ... 12) |
| SMART\_EVENT\_PHASE\_1           | 1    | 0x001 | Phase 1 only.               |
| SMART\_EVENT\_PHASE\_2           | 2    | 0x002 | Phase 2 only.               |
| SMART\_EVENT\_PHASE\_3           | 4    | 0x004 | Phase 3 only.               |
| SMART\_EVENT\_PHASE\_4           | 8    | 0x008 | Phase 4 only.               |
| SMART\_EVENT\_PHASE\_5           | 16   | 0x010 | Phase 5 only.               |
| SMART\_EVENT\_PHASE\_6           | 32   | 0x020 | Phase 6 only.               |
| SMART\_EVENT\_PHASE\_7           | 64   | 0x040 | Phase 7 only.               |
| SMART\_EVENT\_PHASE\_8           | 128  | 0x080 | Phase 8 only.               |
| SMART\_EVENT\_PHASE\_9           | 256  | 0x100 | Phase 9 only.               |
| SMART\_EVENT\_PHASE\_10          | 512  | 0x200 | Phase 10 only.              |
| SMART\_EVENT\_PHASE\_11          | 1024 | 0x400 | Phase 11 only.              |
| SMART\_EVENT\_PHASE\_12          | 2048 | 0x800 | Phase 12 only.              |

-   Event will only be able to occur if creature/GO is in this phase.

<!-- -->

-   Example: If we want an event to only be able to occure in phase 1 and 4, **event\_phase\_mask** = 1+8 = 9

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
<td><p>SMART_EVENT_FLAG_RESERVED_5</p></td>
<td><p>32</p></td>
<td><p>0x20</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_FLAG_RESERVED_6</p></td>
<td><p>64</p></td>
<td><p>0x40</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_FLAG_DEBUG_ONLY</p></td>
<td><p>128</p></td>
<td><p>0x80</p></td>
<td><p>Event only occurs in debug build</p></td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_FLAG_DONT_RESET</p></td>
<td><p>256</p></td>
<td><p>0x100</p></td>
<td><p>Event will not reset in SmartScript::OnReset()</p></td>
</tr>
</tbody>
</table>

-   Sets if the event should not repeat or should only happen in a given instance/dungeon difficulty (if applicable);

<!-- -->

-   Values can be added together (bitwise math).

### event\_type

<table height="400">
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Value</p></th>
<th><p>Param1</p></th>
<th><p>Param2</p></th>
<th><p>Param3</p></th>
<th><p>Param4</p></th>
<th><p>Param5</p></th>
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
<td><p><br />
</p></td>
<td><p>In combat.</p></td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_UPDATE_OOC</p></td>
<td><p>1</p></td>
<td><p>InitialMin</p></td>
<td><p>InitialMax</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
<td>Out of combat.</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_HEALTH_PCT</p></td>
<td><p>2</p></td>
<td><p>HPMin%</p></td>
<td><p>HPMax%</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
<td><p>Health Percentage</p></td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_MANA_PCT</p></td>
<td><p>3</p></td>
<td><p>ManaMin%</p></td>
<td><p>ManaMax%</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td>On Creature Aggro</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_KILL</p></td>
<td><p>5</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p>Player only (0/1)</p></td>
<td><p>Creature entry (if param3 is 0)</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td>On Creature Evade Attack</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_SPELLHIT</p></td>
<td><p>8</p></td>
<td><p>SpellID</p></td>
<td><p>School</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
<td>On Creature/Gameobject Spell Hit</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_RANGE</p></td>
<td><p>9</p></td>
<td><p>MinDist</p></td>
<td><p>MaxDist</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
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
<td><p>type (None = 0, Map = 1, Area = 2)</p></td>
<td><p>MapId</p></td>
<td><p>ZoneId</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td>On Creature/Gameobject Respawn</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_TARGET_HEALTH_PCT</p></td>
<td><p>12</p></td>
<td><p>HPMin%</p></td>
<td><p>HPMax%</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td>On Target Casting Spell</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_FRIENDLY_HEALTH</p></td>
<td><p>14</p></td>
<td><p>HPDeficit</p></td>
<td><p>Radius</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_FRIENDLY_MISSING_BUFF</p></td>
<td><p>16</p></td>
<td><p>SpellId</p></td>
<td><p>Radius</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td>On Creature/Gameobject Summoned Unit</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_TARGET_MANA_PCT</p></td>
<td><p>18</p></td>
<td><p>ManaMin%</p></td>
<td><p>ManaMax%</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td>On Creature Reached Home</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_RECEIVE_EMOTE</p></td>
<td><p>22</p></td>
<td><p><a href="Emotes">EmoteId</a></p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p></p></td>
<td><p><br />
</p></td>
<td>On Receive Emote.</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_HAS_AURA</p></td>
<td><p>23</p></td>
<td><p>SpellID</p></td>
<td><p>Stacks</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
<td>On Creature Has Aura</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_TARGET_BUFFED</p></td>
<td><p>24</p></td>
<td><p>SpellID</p></td>
<td><p>Stacks</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_CHARMED</p></td>
<td><p>29</p></td>
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
<td><p><br />
</p></td>
<td>On Target Charmed</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_SPELLHIT_TARGET</p></td>
<td><p>31</p></td>
<td><p>SpellId</p></td>
<td><p>School</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
<td>On Target Spell Hit</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_DAMAGED</p></td>
<td><p>32</p></td>
<td><p>MinDmg</p></td>
<td><p>MaxDmg</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
<td>On Creature Damaged</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_DAMAGED_TARGET</p></td>
<td><p>33</p></td>
<td><p>MinDmg</p></td>
<td><p>MaxDmg</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td>ESCORT_MOTION_TYPE = 17, POINT_MOTION_TYPE = 8</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_SUMMON_DESPAWNED</p></td>
<td><p>35</p></td>
<td><p>Entry</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_DATA_SET</p></td>
<td><p>38</p></td>
<td><p>Field</p></td>
<td><p>Value</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td>On Creature Waypoint ID Reached</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_AREATRIGGER_ONTRIGGER</p></td>
<td><p>46</p></td>
<td><p>TriggerId (0 any)</p></td>
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
<td><p>SMART_EVENT_TEXT_OVER</p></td>
<td><p>52</p></td>
<td><p><a href="creature_text#groupid">creature_text.GroupID</a></p></td>
<td><p><a href="creature#id">creature.id</a> (0 any)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td>On TEXT_OVER Event Triggered After SMART_ACTION_TALK</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_RECEIVE_HEAL</p></td>
<td><p>53</p></td>
<td><p>MinHeal</p></td>
<td><p>MaxHeal</p></td>
<td><p>CooldownMin</p></td>
<td><p>CooldownMax</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_UPDATE</p></td>
<td><p>60</p></td>
<td><p>InitialMin</p></td>
<td><p>InitialMax</p></td>
<td><p>RepeatMin</p></td>
<td><p>RepeatMax</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td>Used to link together multiple events as a chain of events.</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_GOSSIP_SELECT</p></td>
<td><p>62</p></td>
<td><p><a href="gossip_menu_option#menuid">gossip_menu_option.MenuID</a></p></td>
<td><p><a href="gossip_menu_option#optionid">gossip_menu_option.OptionID</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td>On gossip clicked (<a href="gossip_menu_option">gossip_menu_option</a>).</td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><div class="content-wrapper">
<p>SMART_EVENT_UNUSED_66</p>
</div></td>
<td><p>66</p></td>
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
<td>UNUSED</td>
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
<td><p><br />
</p></td>
<td>On Creature is behind target.</td>
</tr>
<tr class="odd">
<td><p>SMART_EVENT_GAME_EVENT_START</p></td>
<td><p>68</p></td>
<td><p><a href="game_event#evententry">game_event.eventEntry</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td>On <a href="game_event">game_event</a> started.</td>
</tr>
<tr class="even">
<td><p>SMART_EVENT_GAME_EVENT_END</p></td>
<td><p>69</p></td>
<td><p><a href="game_event#evententry">game_event.eventEntry</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td>On <a href="game_event">game_event</a> ended.</td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td>SMART_EVENT_ON_SPELLCLICK</td>
<td>73</td>
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
<td>SMART_EVENT_FRIENDLY_HEALTH_PCT</td>
<td>74</td>
<td><p>minHpPct</p></td>
<td><p>maxHpPct</p></td>
<td><p>repeatMin</p></td>
<td><p>repeatMax</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td>SMART_EVENT_DISTANCE_CREATURE</td>
<td>75</td>
<td>database guid</td>
<td>database entry</td>
<td>distance</td>
<td>repeat interval (ms)</td>
<td><p><br />
</p></td>
<td><p>On creature guid OR any instance of creature entry is within distance.</p></td>
</tr>
<tr class="odd">
<td>SMART_EVENT_DISTANCE_GAMEOBJECT</td>
<td>76</td>
<td>database guid</td>
<td>database entry</td>
<td>distance</td>
<td>repeat interval (ms)</td>
<td><p><br />
</p></td>
<td><p>On gameobject guid OR any instance of gameobject entry is within distance.</p></td>
</tr>
<tr class="even">
<td>SMART_EVENT_COUNTER_SET</td>
<td>77</td>
<td>counterID</td>
<td>value</td>
<td>cooldownMin</td>
<td>cooldownMax</td>
<td><p><br />
</p></td>
<td>If the value of specified counterID is equal to a specified value</td>
</tr>
</tbody>
</table>

### action\_type

<table height="400">
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
<td><p><a href="creature_text#groupid">creature_text.GroupID</a></p></td>
<td><p>Duration to wait before SMART_EVENT_TEXT_OVER is triggered.</p></td>
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
<td><p><a href="FactionTemplate">FactionID</a> (or 0 for default)</p></td>
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
<td><p><a href="creature_template#entry">creature_template.entry</a>(param1)</p></td>
<td><p><a href="creature_template#modelidx">creature_template.modelidx</a>(param2)</p></td>
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
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Play Sound; onlySelf = 1 only sends sound to self, onlySelf = 0 sends sound to everyone in visibility range</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_PLAY_EMOTE</p></td>
<td><p>5</p></td>
<td><p><a href="Emotes">EmoteId</a></p></td>
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
<td><p><a href="quest_template#id">quest_template.id</a></p></td>
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
<td><p><a href="https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Entities/Unit/Unit.h#L1099-L1104">ReactState</a></p></td>
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
<td><p>React State. Can be Passive (0), Defensive (1), Aggressive (2).</p></td>
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
<td><p><a href="Emotes">EmoteId1</a></p></td>
<td><p><a href="Emotes">EmoteId2</a></p></td>
<td><p><a href="Emotes">EmoteId3</a></p></td>
<td><p><a href="Emotes">EmoteId4</a></p></td>
<td><p><a href="Emotes">EmoteId5</a></p></td>
<td><p><a href="Emotes">EmoteId6</a></p></td>
<td><p>Play Random Emote</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_CAST</p></td>
<td><p>11</p></td>
<td><p>SpellId</p></td>
<td><p><a href="#cast-flags">castFlags</a></p></td>
<td><p>limitTargets (0 = all targets)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Cast Spell ID at Target(s)</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SUMMON_CREATURE</p></td>
<td><p>12</p></td>
<td><p>creature_template.entry</p></td>
<td><p><a href="#summon-types">Summon type</a></p></td>
<td><p>duration in ms</p></td>
<td><p>attackInvoker (0/1/2)</p></td>
<td><p>attackScriptOwner (0/1)</p></td>
<td><p><br />
</p></td>
<td><p>Summon Unit; attackInvoker 1: attack target; attackInvoker 2: attack actual invoker</p></td>
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
<td><p><a href="quest_template#id">quest_template.id</a></p></td>
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
<td><p>SMART_ACTION_RESERVED_16</p></td>
<td><p>16</p></td>
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
<td><p>For 4.3.4 + only</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SET_EMOTE_STATE</p></td>
<td><p>17</p></td>
<td><p><a href="Emotes">EmoteId</a></p></td>
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
<p>If false set <a href="creature_template#unit_flags">creature_template.unit_flags</a></p>
<p>If true set <a href="creature_template#unit_flags2">creature_template.unit_flags2</a></p></td>
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
<p>If false set  <a href="creature_template#unit_flags">creature_template.unit_flags</a></p>
<p>If true set <a href="creature_template#unit_flags2">creature_template.unit_flags2</a></p></td>
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
<td><p><a href="#event_phase_mask">event_phase_mask</a></p></td>
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
<td><p>Set event phase 0-12 (the actual values, no bit mask!)</p></td>
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
<td><p><a href="quest_template#id">quest_template.id</a></p></td>
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
<td><p>SMART_ACTION_REMOVEAURASFROMSPELL</p></td>
<td><p>28</p></td>
<td><p>Spellid (0 removes all auras)</p></td>
<td><p>charges (0 removes aura)</p></td>
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
<td><p>SMART_ACTION_FOLLOW</p></td>
<td><p>29</p></td>
<td><p>Distance (0 = Default value)</p></td>
<td><p>Angle (0 = Default value)</p></td>
<td><p>End <a href="creature_template#entry">creature_template.entry</a></p></td>
<td><p>credit</p></td>
<td><p>creditType (0 monsterkill, 1 event)</p></td>
<td><p><br />
</p></td>
<td><p>Follow Target</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_RANDOM_PHASE</p></td>
<td><p>30</p></td>
<td><p><a href="#event_phase_mask">event_phase_mask</a> 1</p></td>
<td><p><a href="#event_phase_mask">event_phase_mask</a> 2</p></td>
<td><p><a href="#event_phase_mask">event_phase_mask</a> 3</p></td>
<td><p><a href="#event_phase_mask">event_phase_mask</a> 4</p></td>
<td><p><a href="#event_phase_mask">event_phase_mask</a> 5</p></td>
<td><p><a href="#event_phase_mask">event_phase_mask</a> 6</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_RANDOM_PHASE_RANGE</p></td>
<td><p>31</p></td>
<td><p><a href="#event_phase_mask">event_phase_mask</a> minimum</p></td>
<td><p><a href="#event_phase_mask">event_phase_mask</a> maximum</p></td>
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
<td><p><a href="creature_template#entry">creature_template.entry</a></p></td>
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
<td><p>This is the ID from <a href="quest_template#requirednpcorgo">quest_template.RequiredNpcOrGo</a></p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_INST_DATA</p></td>
<td><p>34</p></td>
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
<td><p><a href="creature_template#entry">creature_template.entry</a></p></td>
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
<td><p><a href="creature_template#modelidx">creature_template.modelidx</a></p></td>
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
<td><p>SMART_ACTION_SET_INGAME_PHASE_MASK</p></td>
<td><p>44</p></td>
<td><p><a href="creature#phasemask">creature.phaseMask</a></p></td>
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
<td><p>Makes creature Visible = 1  or  Invisible = 0</p></td>
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
<td><p>If a creature or GO is set active it will stay active even if no player is near. Take care, though, as it needs additional ressources (CPU/RAM) to keep them active (other objects/creatures nearby stay active).</p></td>
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
<td><p><a href="gameobject_template#entry">gameobject_template.entry</a></p></td>
<td><p>De-spawn time in seconds.</p></td>
<td><p>targetSummon (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Spawns Gameobject, use target_type to set spawn position; if an entity is specified as target and also coordinates are set (target x,y,z) those coordinates are handled as offset from the target's position; if targetSummon is 1 then the target will summon the GO on the position of the actor</p></td>
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
<td><p><a href="waypoints#entry">waypoints.entry</a></p></td>
<td><p>canRepeat</p></td>
<td><p><a href="quest_template#id">quest_template.id</a></p></td>
<td><p>despawntime</p></td>
<td><p>reactState</p></td>
<td><p>Creature starts Waypoint Movement. Use <a href="waypoints#entry">waypoints</a> table to create movement.</p></td>
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
<td><p><a href="quest_template#id">quest_template.id</a></p></td>
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
<td><p><a href="item_template#entry">item_template.entry</a></p></td>
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
<td><p><a href="item_template#entry">item_template.entry</a></p></td>
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
<td><p>TemplateID (see <a href="#predefined-sai-templates">Predefined SAI templates</a> below)</p></td>
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
<td><p>SMART_ACTION_SET_FLY</p></td>
<td><p>60</p></td>
<td><p>fly (0/1)</p></td>
<td><p>speed</p></td>
<td><p>disable gravity (0/1)</p></td>
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
<td><p><a href="Map">MapID</a></p></td>
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
<td><p>counterID</p></td>
<td><p>value</p></td>
<td><p>reset (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>If reset is 0 the counter with the specified ID is increased by the given value; if reset is 1 the counter is set to the value.</p></td>
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
<td><p>Depends on the script target. If SMART_TARGET_SELF, facing will be the same as in HomePosition, For SMART_TARGET_POSITION you need to set target_o : 0 = North, West = 1.5, South = 3, East = 4.5</p></td>
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
<td><p>controlled (0 or 1)</p></td>
<td><p>ContactDistance</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>PointId is called by SMART_EVENT_MOVEMENTINFORM. Continue this action with the TARGET_TYPE column. Use any target_type, and use target_x, target_y, target_z as the coordinates; if an entity is specified as target and also coordinates are set (target x,y,z) those coordinates are handled as offset from the target's position</p></td>
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
<td><p><a href="creature_equip_template#id">creature_equip_template.ID</a></p></td>
<td><p>Slotmask</p></td>
<td><p>Slot1 (<a href="item_template#entry">item_template.entry</a>)</p></td>
<td><p>Slot2 (<a href="item_template#entry">item_template.entry</a>)</p></td>
<td><p>Slot3 (<a href="item_template#entry">item_template.entry</a>)</p></td>
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
<td><p>EntryOrGuid * 100 (<a href="#entryorguid">entryorguid</a> with 00 added after the entry, or 01, 02, 03 etc. for multiple action lists)</p></td>
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
<td><p><a href="creature_template#npcflag">creature_template.npcflag</a></p></td>
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
<td><p><a href="creature_template#npcflag">creature_template.npcflag</a></p></td>
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
<td><p><a href="creature_template#npcflag">creature_template.npcflag</a></p></td>
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
<td><p><a href="creature_text#groupid">creature_text.GroupID</a></p></td>
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
<td>SMART_ACTION_INVOKER_CAST</td>
<td><p>85</p></td>
<td><p>SpellID</p></td>
<td><p><a href="#cast-flags">castFlags</a></p></td>
<td><p>triggeredFlags</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>if avaliable, last used invoker will cast spellId with castFlags on targets (warning: TC 3.3.5 uses another action here: SMART_ACTION_SELF_CAST)</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_CROSS_CAST</p></td>
<td><p>86</p></td>
<td><p>SpellID</p></td>
<td><p><a href="#cast-flags">castFlags</a></p></td>
<td><p>CasterTargetType (caster is selected here, use it as target_type)</p></td>
<td><p>CasterTarget (target_param1)</p></td>
<td><p>CasterTarget (target_param2)</p></td>
<td><p>CasterTarget (target_param3)</p></td>
<td><p>This action is used to make selected caster (in CasterTargetType) to cast spell. Actual target is entered in target_type as normally.</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_CALL_RANDOM_TIMED_ACTIONLIST</p></td>
<td><p>87</p></td>
<td><p>EntryOrGuid 1 (<a href="#entryorguid">entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 2 (<a href="#entryorguid">entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 3 (<a href="#entryorguid">entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 4 (<a href="#entryorguid">entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 5 (<a href="#entryorguid">entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 6 (<a href="#entryorguid">entryorguid</a> * 100 + n)</p></td>
<td><p>Will select one entry from the ones provided. 0 is ignored.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_CALL_RANDOM_RANGE_TIMED_ACTIONLIST</p></td>
<td><p>88</p></td>
<td><p>EntryOrGuid 1 (<a href="#entryorguid">entryorguid</a> * 100 + n)</p></td>
<td><p>EntryOrGuid 2 (<a href="#entryorguid">entryorguid</a> * 100 + n)</p></td>
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
<td><p><a href="https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Entities/Unit/Unit.h#L137">Value</a></p></td>
<td><p><a href="https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Entities/Unit/Unit.h#L137">Type</a></p></td>
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
<td><p><a href="https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Entities/Unit/Unit.h#L137">Value</a></p></td>
<td><p><a href="https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Entities/Unit/Unit.h#L137">Type</a></p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>
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
<td><p><a href="creature_template#dynamicflags">creature_template.dynamicflags</a></p></td>
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
<td><p><a href="creature_template#dynamicflags">creature_template.dynamicflags</a></p></td>
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
<td><p><a href="creature_template#dynamicflags">creature_template.dynamicflags</a></p></td>
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
<td><p>selfJump (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>If selfJump is 1 the actor will jump to the target (you can add an offset from the target's position by also specifying target coordinates); if selfJump is 0 the targeted creature will jump to the target position</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SEND_GOSSIP_MENU</p></td>
<td><p>98</p></td>
<td><p><a href="gossip_menu#entry">gossip_menu.entry</a></p></td>
<td><p><a href="gossip_menu#text_id">gossip_menu.text_id</a><br />
(same value as <a href="npc_text#id">npc_text.ID</a>)</p></td>
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
<td><p>0: if the target is a creature, set it's current position as it's new home position; if the target is SMART_TARGET_POSITION, use this position as new home position for the actor</p>
<p>1: if the target is a creature, reset it's home position to the one from the DB; if the target is SMART_TARGET_POSITION, reset the actor's home position to the one from the DB (the actual values of the target position are ignored)</p></td>
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
<td><p>SMART_ACTION_SET_ROOT</p></td>
<td><p>103</p></td>
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
<td><p>Enables or disables creature movement</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_GO_FLAG</p></td>
<td><p>104</p></td>
<td><p><a href="gameobject_template_addon#flags">gameobject_template_addon.flags</a></p></td>
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
<td><p>oldFlag = newFlag</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_ADD_GO_FLAG</p></td>
<td><p>105</p></td>
<td><p><a href="gameobject_template_addon#flags">gameobject_template_addon.flags</a></p></td>
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
<td><p>oldFlag |= newFlag</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_REMOVE_GO_FLAG</p></td>
<td><p>106</p></td>
<td><p><a href="gameobject_template_addon#flags">gameobject_template_addon.flags</a></p></td>
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
<td><p>oldFlag &amp;= ~newFlag</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_SUMMON_CREATURE_GROUP</p></td>
<td><p>107</p></td>
<td><p><a href="creature_summon_groups#groupid">creature_summon_groups.groupId</a></p></td>
<td><p>attackInvoker (0/1)</p></td>
<td><p>attackScriptOwner (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>Use creature_summon_groups table. SAI target has no effect, use 0</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_POWER</p></td>
<td><p>108</p></td>
<td><p><a href="https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Miscellaneous/SharedDefines.h#L169">Power type</a></p></td>
<td><p>New power</p></td>
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
<td><p>SMART_ACTION_ADD_POWER</p></td>
<td><p>109</p></td>
<td><p><a href="https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Miscellaneous/SharedDefines.h#L169">Power type</a></p></td>
<td><p>Power to add</p></td>
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
<td><p>SMART_ACTION_REMOVE_POWER</p></td>
<td><p>110</p></td>
<td><p><a href="https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Miscellaneous/SharedDefines.h#L169">Power type</a></p></td>
<td><p>Power to remove</p></td>
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
<td><p>SMART_ACTION_GAME_EVENT_STOP</p></td>
<td><p>111</p></td>
<td><p><a href="game_event#evententry">game_event.eventEntry</a></p></td>
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
<td><p>SMART_ACTION_GAME_EVENT_START</p></td>
<td><p>112</p></td>
<td><p><a href="game_event#evententry">game_event.eventEntry</a></p></td>
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
<td><p>SMART_ACTION_START_CLOSEST_WAYPOINT</p></td>
<td><p>113</p></td>
<td><p>wp1</p></td>
<td><p>wp2</p></td>
<td><p>wp3</p></td>
<td><p>wp4</p></td>
<td><p>wp5</p></td>
<td><p>wp6</p></td>
<td><p>Make target follow closest waypoint to its location</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_RISE_UP</p></td>
<td><p>114</p></td>
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
<td><p>move up for the specified distance (warning: TC 3.3.5 uses another action here: SMART_ACTION_MOVE_OFFSET)</p></td>
</tr>
<tr class="even">
<td><p>SMART_ACTION_RANDOM_SOUND</p></td>
<td><p>115</p></td>
<td><p>soundId1</p></td>
<td><p>soundId2</p></td>
<td><p>soundId3</p></td>
<td><p>soundId4</p></td>
<td><p>onlySelf (0/1)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>SMART_ACTION_SET_SIGHT_DIST</p></td>
<td><p>121</p></td>
<td><p>SightDistance</p></td>
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
<td><p>SMART_ACTION_FLEE</p></td>
<td><p>122</p></td>
<td><p>FleeTime</p></td>
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
<td><p>SMART_ACTION_ADD_THREAT</p></td>
<td><p>123</p></td>
<td><p>+threat</p></td>
<td><p>-threat</p></td>
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
<td><p>SMART_ACTION_LOAD_EQUIPMENT</p></td>
<td><p>124</p></td>
<td><p>Id</p></td>
<td><p>force</p></td>
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
<td><p>SMART_ACTION_TRIGGER_RANDOM_TIMED_EVENT</p></td>
<td><p>125</p></td>
<td><p>id min range</p></td>
<td><p>id max range</p></td>
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
<td><p>SMART_ACTION_REMOVE_ALL_GAMEOBJECTS</p></td>
<td><p>126</p></td>
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
<tr class="even">
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
<tr class="odd">
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
<tr class="even">
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
<tr class="odd">
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
<tr class="even">
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
<tr class="odd">
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
<tr class="even">
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
<tr class="odd">
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
<tr class="even">
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
<tr class="odd">
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
<tr class="even">
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
<tr class="odd">
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
<tr class="even">
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
<tr class="odd">
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
<tr class="even">
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
<tr class="odd">
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

<table height="400">
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Value</p></th>
<th><p>target_param1</p></th>
<th><p>target_param2</p></th>
<th><p>target_param3</p></th>
<th><p>target_param4</p></th>
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
<td><p><br />
</p></td>
<td><p>x</p></td>
<td><p>y</p></td>
<td><p>z</p></td>
<td><p>o</p></td>
<td><p>Use xyz from event params.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_CREATURE_RANGE</p></td>
<td><p>9</p></td>
<td><p><a href="creature_template#entry">creature_template.entry</a> (0 any)</p></td>
<td><p>minDist</p></td>
<td><p>maxDist</p></td>
<td><p>alive state (1 alive, 2 dead, 0 both)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>All creatures with the specified ID within the specified range and the specified alive state.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_CREATURE_GUID</p></td>
<td><p>10</p></td>
<td><p><a href="creature#guid">creature.guid</a></p></td>
<td><p><a href="creature_template#entry">creature_template.entry</a></p></td>
<td><p>getFromHashMap (0/1, this does not work in instances!)</p></td>
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
<td><p>Creature with specified GUID and/or specified creature template ID.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_CREATURE_DISTANCE</p></td>
<td><p>11</p></td>
<td><p><a href="creature_template#entry">creature_template.entry</a> (0 any)</p></td>
<td><p>maxDist</p></td>
<td><p>alive state (1 alive, 2 dead, 0 both)</p></td>
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
<td><p>All creatures with the specified ID within the specified distance and the specified alive state.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_STORED</p></td>
<td><p>12</p></td>
<td><p>id</p></td>
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
<td><p>Uses pre-stored target(list)</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_GAMEOBJECT_RANGE</p></td>
<td><p>13</p></td>
<td><p><a href="gameobject_template#entry">gameobject_template.entry</a> (0 any)</p></td>
<td><p>minDist</p></td>
<td><p>maxDist</p></td>
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
<td><p>All game objects with the specified ID within the specified range.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_GAMEOBJECT_GUID</p></td>
<td><p>14</p></td>
<td><p><a href="gameobject#guid">gameobject.guid</a></p></td>
<td><p><a href="gameobject_template#entry">gameobject_template.entry</a></p></td>
<td><p>getFromHashMap (0/1, this does not work in instances!)</p></td>
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
<td><p>Object with specified GUID and/or specified game object template ID.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_GAMEOBJECT_DISTANCE</p></td>
<td><p>15</p></td>
<td><p><a href="gameobject_template#entry">gameobject_template.entry</a> (0 any)</p></td>
<td><p>maxDist</p></td>
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
<td><p>All objects with the specified ID within the specified distance.</p></td>
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
<td><p>Invoker's party members</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_PLAYER_RANGE</p></td>
<td><p>17</p></td>
<td><p>minDist</p></td>
<td><p>maxDist</p></td>
<td><p>maxCount</p></td>
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
<td><p>All players up to maxCount within the specified range.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_PLAYER_DISTANCE</p></td>
<td><p>18</p></td>
<td><p>maxDist</p></td>
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
<td><p>All players within the specified distance.</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_CLOSEST_CREATURE</p></td>
<td><p>19</p></td>
<td><p><a href="creature_template#entry">creature_template.entry</a> (0 any)</p></td>
<td><p>maxDist (Can be from 0-100 yards)</p></td>
<td><p>dead? (0/1)</p></td>
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
<td><p>Closest creature with the specified ID within the specified range.</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_CLOSEST_GAMEOBJECT</p></td>
<td><p>20</p></td>
<td><p><a href="gameobject_template#entry">gameobject_template.entry</a> (0 any)</p></td>
<td><p>maxDist (Can be from 0-100 yards)</p></td>
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
<td><p>Unit's vehicle who caused this Event to occur</p></td>
</tr>
<tr class="even">
<td><p>SMART_TARGET_OWNER_OR_SUMMONER</p></td>
<td><p>23</p></td>
<td><p>use owner of owner (0/1)</p></td>
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
<td><p>Unit's owner or summoner</p></td>
</tr>
<tr class="odd">
<td><p>SMART_TARGET_THREAT_LIST</p></td>
<td><p>24</p></td>
<td><p>maxDist (0 any)</p></td>
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
<td><p>All units on creature's threat list within the specified distance if maxDist > 0</p></td>
</tr>
<tr class="even">
<td>SMART_TARGET_CLOSEST_ENEMY</td>
<td>25</td>
<td>maxDist</td>
<td>playerOnly (0/1)</td>
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
<td>Any attackable target (creature or player) within maxDist</td>
</tr>
<tr class="odd">
<td>SMART_TARGET_CLOSEST_FRIENDLY</td>
<td>26</td>
<td>maxDist</td>
<td>playerOnly (0/1)</td>
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
<td>Any friendly unit (creature, player or pet) within maxDist</td>
</tr>
<tr class="even">
<td>SMART_TARGET_FARTHEST</td>
<td>28</td>
<td>maxDist</td>
<td>playerOnly (0/1)</td>
<td>isInLos (0/1)</td>
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
<td><p>Farthest unit on the threat list</p></td>
</tr>
</tbody>
</table>

### comment

Commenting on SAI uses a template which is the following: (with an example)

"Creature name - Event - Action"

"Minion of Gurok - On spawn - Set Random Movement"

**Quick notes:**

-   Always update *creature\_template*,*gameobject\_template* or *areatrigger\_scripts* with:

```sql
UPDATE `creature_template` SET `AIName` = 'SmartAI' WHERE `entry` = y;

UPDATE `gameobject_template` SET `AIName` = 'SmartGameObjectAI' WHERE `entry` = y;

INSERT INTO `areatrigger_scripts` (`entry`, `ScriptName`) VALUES (y, 'SmartTrigger');
```

-   If the creature or GO is inside a dungeon, set *event\_flags* accordingly to the instance difficulty (heroic, 25 man, etc.).

**In case of doubt about an *Event*, *Action\_or \_Target,\_check source code (\_src/server/game/AI/SmartScripts* files; mainly \*SmartScript.cpp**)

### Cast Flags

| Name                                                           | Flag | Hex  | Comment                                                                 |
|----------------------------------------------------------------|------|------|-------------------------------------------------------------------------|
| SMARTCAST\_INTERRUPT\_PREVIOUS                                 | 1    | 0x01 | Interrupt any spell casting                                             |
| SMARTCAST\_TRIGGERED                                           | 2    | 0x02 | Triggered (this makes spell cost zero mana and have no cast time)       |
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

