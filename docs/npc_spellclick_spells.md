# npc\_spellclick\_spells

[<-Back-to:World](database-world.md)

**The \`npc\_spellclick\_spells\` table**

This table holds information about spells to be cast upon receiving CMSG\_SPELLCLICK.

That opcode is sent for quests in which you have to loot creatures, who are already dead at spawning. Examples are [Planning for the Future](http://www.wowhead.com/quest=11960) and [Rifle the bodies](http://www.wowhead.com/quest=11999).

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
<td><p><strong>Comment</strong>'</p></td>
</tr>
<tr class="even">
<td><p><a href="#npc_entry">npc_entry</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td>Reference to the creature_template table</td>
</tr>
<tr class="odd">
<td><p><a href="#spell_id">spell_id</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p>The ID of the spell to be cast</p></td>
</tr>
<tr class="even">
<td><a href="#cast_flags">cast_flags</a></td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>NULL</td>
<td><br />
</td>
<td><p>Who casts the spell on who, creature &lt;=&gt; player (values: 0-3)</p></td>
</tr>
<tr class="odd">
<td><p><a href="#user_type">user_type</a></p></td>
<td><p>smallint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>Relation with summoner: 0-no 1-friendly 2-raid 3-party player can click</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### npc\_entry

Reference to creature\_template.entry

### spell\_id

The spell which should be cast.

Note that for several quests there are more than one spell per click.

[Planing for the Future](http://www.wowhead.com/quest=11960) for example has [Planning for the Future: Create Snowfall Glade Pup](http://www.wowhead.com/spell=46773) which will create the item in the player’s inventory
and [Planning for the Future: Create Snowfall Glade Pup Cover](http://www.wowhead.com/spell=46167) which despawns the creature.

This creates the illusion that the creature has been looted.

### cast\_flags

On every spellclick event, a player and a creature "participate". This field defines who casts the spell on who.
Lower bit defines caster: 1=Clicker, 0=Clickee; higher bit defines target, same mapping as caster bit.
You can use that table for the actual value:

| Caster   | Target  | cast\_flags value |
|----------|---------|-------------------|
| Creature | Clickee | 0                 |
| Clicker  | Clickee | 1                 |
| Clickee  | Clicker | 2                 |
| Clicker  | Clicker | 3                 |

### user\_type

Relation with summoner: defines who is able to use this spellclick.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Value</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Only self</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Friendly</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Raid</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Party</p></td>
</tr>
</tbody>
</table>


