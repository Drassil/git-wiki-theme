# creature\_classlevelstats

``

**Table Structure**

This table contains the base values for creature health, mana, armor, attack power, ranged attack power, damage, and experience.

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#level">level</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="odd">
<td><p><a href="#class">class</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p><a href="#basehp0">basehp0</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p><a href="#basehp1">basehp1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p><a href="#basehp2">basehp2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p><a href="#basemana">basemana</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#basearmor">basearmor</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><a href="#attackpower">attackpower</a></td>
<td>smallint(5)</td>
<td>unsigned</td>
<td>NO</td>
<td>0</td>
</tr>
<tr class="even">
<td><a href="#rangedattackpower">rangedattackpower</a></td>
<td>smallint(5)</td>
<td>unsigned</td>
<td>NO</td>
<td>0</td>
</tr>
<tr class="odd">
<td><a href="#damage_base">damage_base</a></td>
<td>float</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
</tr>
<tr class="even">
<td><a href="#damage_exp1">damage_exp1</a></td>
<td>float</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
</tr>
<tr class="odd">
<td><a href="#damage_exp2">damage_exp2</a></td>
<td>float</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
</tr>
<tr class="even">
<td><a href="#comment">comment</a></td>
<td>text</td>
<td><br />
</td>
<td>YES</td>
<td>NULL</td>
</tr>
</tbody>
</table>

**Field Descriptions**

### level

Level of the creature.

### class

Class of the creature. This is a reference to the [unit\_class](creature_template#creature_template-unit_class) field in the [creature\_template](creature_template) table.

### basehp0

Base health for the creature if creature\_template.exp value is set to 0. This value is multiplied by [creature\_template.Health\_mod](creature_template#creature_template-Health_mod)  to determine the creature's final health.

### basehp1

Base health for the creature if creature\_template.exp value is set to 1. This value is multiplied by [creature\_template.Health\_mod](creature_template#creature_template-Health_mod)  to determine the creature's final health.

### basehp2

Base health for the creature if creature\_template.exp value is set to 2. This value is multiplied by [creature\_template.Health\_mod](creature_template#creature_template-Health_mod)  to determine the creature's final health.

### basemana

Base mana for the creature. This value is multiplied by  [creature\_template.Mana\_mod](creature_template#creature_template-Mana_mod) to determine the creature's final mana.

### basearmor

Base armor for the creature. This value is multiplied by creature\_template.Armor\_mod to determine the creature's final armor.

### attackpower

Base attack power for the creature. This value is multiplied by [creature\_template.attackpower](creature_template#creature_template-attackpower) to determine the creature's final attack power.

### rangedattackpower

Base ranged attack power for the creature. It is currently unknown what this value is multiplied by to determine the creature's final attack power. Maybe it works the same as attack power and multiplies by [creature\_template.attackpower](creature_template#creature_template-attackpower)?

### damage\_base

This field is used for unknown. (Might be the base dmg if exp1 and exp2 is set to 0).

### damage\_exp1

Min damage. This will increase/decrease by creature\_template.damagemodifier.

### damage\_exp2

Max damage This will increase/decrease by creature\_template.damagemodifier.

### comment

A comment describing the purpose of the record (entry).


