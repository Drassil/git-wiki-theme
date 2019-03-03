# spelldifficulty\_dbc

[<-Back-to:World](database-world.md)

**The \`spelldifficulty\_dbc\` table**

This table contains spell data regarding cpp scripts. The id is called in the script, and depending on what version of the dungeon/raid the characters are in, the proper spell ID will be casted by the creature.

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
<td><p><a href="#id">id</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellid0">spellid0</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellid1">spellid1</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellid2">spellid2</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellid3">spellid3</a></p></td>
<td><p>int(11)</p></td>
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

### id

id referenced in the cpp script for the creature AI.

### spellid0

Spell ID to be used in normal dungeon (or normal 10men raid).

### spellid1

Spell ID to be used in heroic dungeon (or normal 25men raid).

### spellid2

Spell ID to be used in heroic 10men raid.

### spellid3

Spell ID to be used in heroic 25men raid.
