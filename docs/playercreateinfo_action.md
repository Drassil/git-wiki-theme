# playercreateinfo\_action

[<-Back-to:World](database-world.md)

**Table Structure**

This table holds information on what default actions a brand new character should start out with. Each race-class combination can have a different default starting setup.

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
<td><p><a href="#race">race</a></p></td>
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
<tr class="odd">
<td><p><a href="#class">class</a></p></td>
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
<td><p><a href="#button">button</a></p></td>
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
<td><p><a href="#action">action</a></p></td>
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
<td><p><a href="#type">type</a></p></td>
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
</tbody>
</table>

**Field Descriptions**

### race

The character's [race](ChrRaces#ChrRaces-Content).

### class

The character's [class](ChrClasses#ChrClasses-Content).

### button

The ID of the slot on the action bar where the action icon will be placed.

Special bars are used for stances, auras, pets, stealth, and other similar special modes.

| Button IDs | Set (key)                          |
|------------|------------------------------------|
| 0-11       | 1 (SHIFT + 1)                      |
| 12-23      | 2 (SHIFT + 2)                      |
| 24-35      | 3 (SHIFT + 3) h1. Right Side Bar   |
| 36-47      | 4 (SHIFT + 4) Right Side Bar 2     |
| 48-59      | 5 (SHIFT + 5) h1. Bottom Right Bar |
| 60-71      | 6 (SHIFT + 6) Bottom Left Bar      |
| 72-83      | 1 SpecialA                         |
| 84-95      | 1 SpecialB                         |
| 96-107     | 1 SpecialC                         |
| 108-119    | 1 SpecialD                         |

### action

Depending on the type value, this could be either the [spell ID](Spell#Spell-ID), the [item ID](item_template#item_template-entry) or macro ID.

### type

The type of action:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Spell</p></td>
</tr>
<tr class="even">
<td><p>64</p></td>
<td><p>Macro</p></td>
</tr>
<tr class="odd">
<td><p>128</p></td>
<td><p>Item</p></td>
</tr>
</tbody>
</table>


