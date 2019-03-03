# character\_action

[<-Back-to:Characters](database-characters.md)

**The \`character\_action\` table**

Contains all the individual button data for each character. A button is any of the places in the GUI where you can place for example a spell, item, or macro as a shortcut.

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
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spec">spec</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#button">button</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#action">action</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#type">type</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

The GUID of the character. See characters.guid

### spec

spec = 0 is the first spec, spec = 1 is the second spec.

### button

The ID of the button on the action bar where the action icon will be placed.

Special bars are used for stances, auras, pets, stealth, and other similar special modes.

**Possible values**

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Button IDs</p></th>
<th><p>Set (key)</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1-11</p></td>
<td><p>1 (SHIFT + 1)</p></td>
</tr>
<tr class="even">
<td><p>12-23</p></td>
<td><p>2 (SHIFT + 2)</p></td>
</tr>
<tr class="odd">
<td><p>24-35</p></td>
<td><p>3 (SHIFT + 3) h1. Right Side Bar</p></td>
</tr>
<tr class="even">
<td><p>36-47</p></td>
<td><p>4 (SHIFT + 4) Right Side Bar 2</p></td>
</tr>
<tr class="odd">
<td><p>48-59</p></td>
<td><p>5 (SHIFT + 5) h1. Bottom Right Bar</p></td>
</tr>
<tr class="even">
<td><p>60-71</p></td>
<td><p>6 (SHIFT + 6) Bottom Left Bar</p></td>
</tr>
<tr class="odd">
<td><p>72-83</p></td>
<td><p>1 SpecialA</p></td>
</tr>
<tr class="even">
<td><p>84-95</p></td>
<td><p>1 SpecialB</p></td>
</tr>
<tr class="odd">
<td><p>96-107</p></td>
<td><p>1 SpecialC</p></td>
</tr>
<tr class="even">
<td><p>108-119</p></td>
<td><p>1 SpecialD</p></td>
</tr>
</tbody>
</table>

### action

Depending on the type value, this could be either the spell ID (Spell.dbc), the item ID or macro ID.

### type

The type of action:

**Possible types**

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Spell</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Click</p></td>
</tr>
<tr class="odd">
<td><p>32</p></td>
<td><p>Eq set</p></td>
</tr>
<tr class="even">
<td><p>64</p></td>
<td><p>Macro</p></td>
</tr>
<tr class="odd">
<td><p>65</p></td>
<td><p>Click macro</p></td>
</tr>
<tr class="even">
<td><p>128</p></td>
<td><p>Item</p></td>
</tr>
</tbody>
</table>


