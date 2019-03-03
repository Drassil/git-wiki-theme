# spell\_proc

[<-Back-to:World](database-world.md)

**The \`spell\_proc\` table**

This table holds information on what events (or procs) certain spells are activated. All spells in this table must have apply a SPELL\_AURA\_PROC\_TRIGGER\_SPELL (42) aura. Any entries in this table will overwrite the existing proc settings in the spell's DBC entry.

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
<td><p><a href="#spellid">SpellId</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p>Unique</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#schoolmask">SchoolMask</a></p></td>
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
<td><p><a href="#spellfamilyname">SpellFamilyName</a></p></td>
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
<tr class="odd">
<td><p><a href="#spellfamilymask0">SpellFamilyMask0</a></p></td>
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
<td><p><a href="#spellfamilymask1">SpellFamilyMask1</a></p></td>
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
<td><p><a href="#spellfamilymask2">SpellFamilyMask2</a></p></td>
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
<td><p><a href="#procflags">ProcFlags</a></p></td>
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
<td><p><a href="#spelltypemask">SpellTypeMask</a></p></td>
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
<td><p><a href="#spellphasemask">SpellPhaseMask</a></p></td>
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
<td><p><a href="#hitmask">HitMask</a></p></td>
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
<td><p><a href="#attributesmask">AttributesMask</a></p></td>
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
<td><p><a href="#procperminute">ProcsPerMinute</a></p></td>
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
<td><p><a href="#chance">Chance</a></p></td>
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
<td><p><a href="#cooldown">Cooldown</a></p></td>
<td>int(10)</td>
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
<td><p><a href="#charges">Charges</a></p></td>
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
</tbody>
</table>

**Description of the fields**

### SpellId

The Spell ID that is capable to proc on an event. (Can use negative spellId for ranked spells)

### SchoolMask

This field contains a bitmask that controls on what types of spells the proc can be triggered. For example if an aura procs only when the unit it is casted upon is hit by shadow spells (spell 34914). To combine spell schools, just add the bit values.

| School ID | Bit | Name     |
|-----------|-----|----------|
| 0         | 1   | Physical |
| 1         | 2   | Holy     |
| 2         | 4   | Fire     |
| 3         | 8   | Nature   |
| 4         | 16  | Frost    |
| 5         | 32  | Shadow   |
| 6         | 64  | Arcane   |

### SpellFamilyName

This field controls what family name spells can proc the triggered spell.

| ID  | Family Name  |
|-----|--------------|
| 0   | Generic      |
| 3   | Mage         |
| 4   | Warrior      |
| 5   | Warlock      |
| 6   | Priest       |
| 7   | Druid        |
| 8   | Rogue        |
| 9   | Hunter       |
| 10  | Paladin      |
| 11  | Shaman       |
| 13  | Potion       |
| 15  | Death Knight |
| 53  | Monk         |
| 107 | Demon Hunter |

### SpellFamilyMask0

This field controls what spells' family flags can proc the triggered spell.

### SpellFamilyMask1

`field-no-description|5`

### SpellFamilyMask2

`field-no-description|6`

### ProcFlags

If non-zero, used to override the original spell ProcFlags in DBC.

A bitmask controlling what events trigger the spell. To combine possible events, add the proc bits together.

**Example:** 32+64=96 (PROC\_FLAG\_TAKEN\_MELEE\_SPELL\_HIT + PROC\_FLAG\_SUCCESSFUL\_RANGED\_HIT)

<table>
<thead>
<tr class="header">
<th><p><strong>Event</strong></p></th>
<th>Flag</th>
<th><p><strong>Bit value</strong></p></th>
<th><p><strong>Comment</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>PROC_FLAG_NONE</p></td>
<td>0</td>
<td><p>0x00000000</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_KILLED</p></td>
<td>1</td>
<td><p>0x00000001</p></td>
<td><p>Killed by agressor</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_KILL_AND_GET_XP</p></td>
<td>2</td>
<td><p>0x00000002</p></td>
<td><p>Kill that yields experience or honor</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_SUCCESSFUL_MELEE_HIT</p></td>
<td>4</td>
<td><p>0x00000004</p></td>
<td><p>Melee attack hit successful</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_TAKEN_MELEE_HIT</p></td>
<td>8</td>
<td><p>0x00000008</p></td>
<td><p>Damage taken from melee hit</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_SUCCESSFUL_MELEE_SPELL_HIT</p></td>
<td>16</td>
<td><p>0x00000010</p></td>
<td><p>Successful attack by spells that use a melee weapon</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_TAKEN_MELEE_SPELL_HIT</p></td>
<td>32</td>
<td><p>0x00000020</p></td>
<td><p>Damage taken from spells that use a melee weapon</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_SUCCESSFUL_RANGED_HIT</p></td>
<td>64</td>
<td><p>0x00000040</p></td>
<td><p>Ranged attack hit successful</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_TAKEN_RANGED_HIT</p></td>
<td>128</td>
<td><p>0x00000080</p></td>
<td><p>Damage taken from ranged attack hit</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_SUCCESSFUL_RANGED_SPELL_HIT</p></td>
<td>256</td>
<td><p>0x00000100</p></td>
<td><p>Successful Ranged attack by spells that use a ranged weapon</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_TAKEN_RANGED_SPELL_HIT</p></td>
<td>512</td>
<td><p>0x00000200</p></td>
<td><p>Damage taken from spells that use a ranged weapon</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_SUCCESSFUL_POSITIVE_AOE_HIT</p></td>
<td>1024</td>
<td><p>0x00000400</p></td>
<td><p>AoE spell hit successful (not 100% sure if unused)</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_TAKEN_POSITIVE_AOE</p></td>
<td>2048</td>
<td><p>0x00000800</p></td>
<td><p>Positive AoE spell hit taken (not 100% sure if unused)</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_SUCCESSFUL_AOE_SPELL_HIT</p></td>
<td>4096</td>
<td><p>0x00001000</p></td>
<td><p>AoE damage spell hit successful (not 100% sure if unused)</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_TAKEN_AOE_SPELL_HIT</p></td>
<td>8192</td>
<td><p>0x00002000</p></td>
<td><p>AoE damage spell hit taken (not 100% sure if unused)</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_SUCCESSFUL_POSITIVE_SPELL</p></td>
<td>16384</td>
<td><p>0x00004000</p></td>
<td><p>Positive spell cast successful (by default only on healing)</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_TAKEN_POSITIVE_SPELL</p></td>
<td>32768</td>
<td><p>0x00008000</p></td>
<td><p>Positive spell hit taken (by default only on healing)</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_SUCCESSFUL_NEGATIVE_SPELL_HIT</p></td>
<td>65536</td>
<td><p>0x00010000</p></td>
<td><p>Negative spell cast successful (by default only on damage)</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_TAKEN_NEGATIVE_SPELL_HIT</p></td>
<td>131072</td>
<td><p>0x00020000</p></td>
<td><p>Negative spell hit taken (by default only on damage)</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_DONE_PERIODIC</p></td>
<td>262144</td>
<td><p>0x00040000</p></td>
<td><p>Periodic damage / healing done, determined from flags 14-17</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_TAKEN_PERIODIC</p></td>
<td>524288</td>
<td><p>0x00080000</p></td>
<td><p>Periodic damage / healing taken, determined from flags 14-17</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_TAKEN_ANY_DAMAGE</p></td>
<td>1048576</td>
<td><p>0x00100000</p></td>
<td><p>Any damage taken</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_ON_TRAP_ACTIVATION</p></td>
<td>2097152</td>
<td><p>0x00200000</p></td>
<td><p>On trap activation</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_TAKEN_OFFHAND_HIT</p></td>
<td>4194304</td>
<td><p>0x00400000</p></td>
<td><p>Off-hand melee attacks taken (not used)</p></td>
</tr>
<tr class="odd">
<td><p>PROC_FLAG_SUCCESSFUL_OFFHAND_HIT</p></td>
<td>8388608</td>
<td><p>0x00800000</p></td>
<td><p>Successful off-hand melee attacks</p></td>
</tr>
<tr class="even">
<td><p>PROC_FLAG_DEATH</p></td>
<td>16777216</td>
<td><p>0x01000000</p></td>
<td><p>Died in any way</p></td>
</tr>
</tbody>
</table>

### SpellTypeMask

Used to choose what types of spells may trigger the proc, to combine, just add the bit values.

<table>
<tbody>
<tr class="odd">
<td><p><strong>Event</strong></p></td>
<td><strong>Flag</strong></td>
<td><p><strong>Bit</strong></p></td>
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td><p>PROC_SPELL_TYPE_NONE</p></td>
<td>0</td>
<td><p>0x00000000</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>PROC_SPELL_TYPE_DAMAGE</p></td>
<td>1</td>
<td><p>0x00000001</p></td>
<td>only damaging spells</td>
</tr>
<tr class="even">
<td><p>PROC_SPELL_TYPE_HEAL</p></td>
<td>2</td>
<td><p>0x00000002</p></td>
<td><p>only healing spells</p></td>
</tr>
<tr class="odd">
<td><p>PROC_SPELL_TYPE_NO_DMG_HEAL</p></td>
<td>4</td>
<td><p>0x00000004</p></td>
<td><p>all other spells</p></td>
</tr>
<tr class="even">
<td><p>PROC_SPELL_TYPE_MASK_ALL</p></td>
<td>7</td>
<td><p>0x00000007</p></td>
<td><p>All masks combined</p></td>
</tr>
</tbody>
</table>

### SpellPhaseMask

At which phase may the spell trigger the proc, Normally one of them is used at the same time, but they might be combined too.

<table>
<tbody>
<tr class="odd">
<td><p><strong>Event</strong></p></td>
<td><strong>Flag</strong></td>
<td><p><strong>Bit</strong></p></td>
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td><p>PROC_SPELL_PHASE_NONE</p></td>
<td>0</td>
<td><p>0x00000000</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>PROC_SPELL_PHASE_CAST</p></td>
<td>1</td>
<td><p>0x00000001</p></td>
<td>trigger when spell has just finished casting</td>
</tr>
<tr class="even">
<td><p>PROC_SPELL_PHASE_HIT</p></td>
<td>2</td>
<td><p>0x00000002</p></td>
<td>trigger when the spell hits its target</td>
</tr>
<tr class="odd">
<td><p>PROC_SPELL_PHASE_FINISH</p></td>
<td>4</td>
<td><p>0x00000004</p></td>
<td>trigger after spell has done all its effects on all targets</td>
</tr>
<tr class="even">
<td><p>PROC_SPELL_PHASE_MASK_ALL</p></td>
<td>7</td>
<td><p>0x00000007</p></td>
<td><p>All masks combined</p></td>
</tr>
</tbody>
</table>

### HitMask

Used to add special conditions to spells, some spells might trigger only on critical strikes, for example.

|                         |          |            |                                  |
|-------------------------|----------|------------|----------------------------------|
| **Event**               | **Flag** | **Bit**    | **Comment**                      |
| PROC\_HIT\_NONE         | 0        | 0x00000000 | (special see footnote)           |
| PROC\_HIT\_NORMAL       | 1        | 0x00000001 | only non-critical hits           |
| PROC\_HIT\_CRITICAL     | 2        | 0x00000002 | only critical hits               |
| PROC\_HIT\_MISS         | 4        | 0x00000004 | self-explanatory                 |
| PROC\_HIT\_FULL\_RESIST | 8        | 0x00000008 | only on full resist (no partial) |
| PROC\_HIT\_DODGE        | 16       | 0x00000010 | self-explanatory                 |
| PROC\_HIT\_PARRY        | 32       | 0x00000020 | self-explanatory                 |
| PROC\_HIT\_BLOCK        | 64       | 0x00000040 | partial or full block            |
| PROC\_HIT\_EVADE        | 128      | 0x00000080 | self-explanatory                 |
| PROC\_HIT\_IMMUNE       | 256      | 0x00000100 | self-explanatory                 |
| PROC\_HIT\_DEFLECT      | 512      | 0x00000200 | self-explanatory                 |
| PROC\_HIT\_ABSORB       | 1024     | 0x00000400 | partial or full absorb           |
| PROC\_HIT\_REFLECT      | 2048     | 0x00000800 | self-explanatory                 |
| PROC\_HIT\_INTERRUPT    | 4096     | 0x00001000 | (not used atm)                   |
| PROC\_HIT\_FULL\_BLOCK  | 8192     | 0x00002000 | only on full block               |
| PROC\_HIT\_MASK\_ALL    | 12287    | 0x00002FFF | All masks combined               |

PROC\_HIT\_NONE will trigger on:

-   PROC\_HIT\_NORMAL+PROC\_HIT\_CRITICAL, when trigger is TAKEN
-   PROC\_HIT\_NORMAL+PROC\_HIT\_CRITICAL+PROC\_HIT\_ABSORB, when trigger is DONE

### AttributesMask

Adds special behaviour to the proc, spell might trigger proc only if these conditions are fullfilled

|                                  |          |           |                                                                               |
|----------------------------------|----------|-----------|-------------------------------------------------------------------------------|
| **Event**                        | **Flag** | **Bit**   | **Comment**                                                                   |
| PROC\_ATTR\_REQ\_EXP\_OR\_HONOR  | 1        | 0x0000001 | requires proc target to give exp or honor                                     |
| PROC\_ATTR\_TRIGGERED\_CAN\_PROC | 2        | 0x0000002 | aura can proc even when spell is triggered by another                         |
| PROC\_ATTR\_REQ\_MANA\_COST      | 4        | 0x0000004 | requires triggering spell to have a mana cost                                 |
| PROC\_ATTR\_REQ\_SPELLMOD        | 8        | 0x0000008 | requires triggering spell to be affected by aura SpellId (only for mod drops) |
| PROC\_ATTR\_DISABLE\_EFF\_0      | 16       | 0x0000010 | explicitly disables aura proc effect 0                                        |
| PROC\_ATTR\_DISABLE\_EFF\_1      | 32       | 0x0000020 | explicitly disables aura proc effect 1                                        |
| PROC\_ATTR\_DISABLE\_EFF\_2      | 64       | 0x0000040 | explicitly disables aura proc effect 2                                        |
| PROC\_ATTR\_REDUCE\_PROC\_60     | 128      | 0x0000080 | aura has a reduced chance to proc if level of proc actor &gt; 60              |

### ProcsPerMinute

If non-zero, this field controls the times per minute that the spell should proc. You might not set both ProcsPerMinute and Chance. in that case ProcsPerMinute takes precedence.

### Chance

If non-zero, chance for spell to trigger. If both ProcsPerMinute and Chance are left in zero, takes ProcChance from DBC.

### Cooldown

Define hidden cooldowns on the spell, in milliseconds. Also known as the proc's internal cooldown, or ICD.

### Charges

If non-zero, overrides amount of aura charges available to proc. Else this value is taken from DBC.
