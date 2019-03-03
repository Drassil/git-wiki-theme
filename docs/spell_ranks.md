# spell\_ranks

[<-Back-to:World](database-world.md)

**The \`spell\_ranks\` table**

Table used by the core to group different ranks of spells (the gray text seen on ranked spells) into one "spell stem". This partly involves checks for aura stacking (e.g. different levels of the same spell). One spell can not be linked to multiple rank chains (they are "unique").

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
<td><p><a href="#first_spell_id">first_spell_id</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spell_id">spell_id</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#rank">rank</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### first\_spell\_id

SpellId from Spell.dbc which is first rank of spell rank chain. It identifies the whole chain.

### spell\_id

SpellId from Spell.dbc

### rank

An integer which ranks the spell within the chain of spell ranks for the given \`spell\_id\`. It can differ from the rank text in game (for example, some ranks in client start with level 0, while the server always starts from level 1 onward). Several conditions have to be fulfilled:

-   At least two levels are required
-   There can be no jumps between ranks (e.g. one spell being level 3 and one being level 5 while level 4 is missing altogether)
-   There can be no duplicates in ranks.

