# skill\_extra\_item\_template

[<-Back-to:World](database-world.md)

**The \`skill\_extra\_item\_template\` table**

This table holds information about when using certain profession spells, you have the chance of creating more than one copy of the item.

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
<td><p><a href="#spellid">spellId</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>SpellId of the item creation spell</p></td>
</tr>
<tr class="odd">
<td><p><a href="#requiredspecialization">requiredSpecialization</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Specialization spell id</p></td>
</tr>
<tr class="even">
<td><p><a href="#additionalcreatechance">additionalCreateChance</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>chance to create add</p></td>
</tr>
<tr class="odd">
<td><p><a href="#additionalmaxnum">additionalMaxNum</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>max num of adds</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### spellId

The spell ID that creates the item. See Spell.dbc

### requiredSpecialization

The required specialization spell ID. The character must have the spell ID specified here learned to have a chance at making another item instantly.

### additionalCreateChance

The chance that the player will make another item instantly.

### additionalMaxNum

The number of extra copies that can be made.
