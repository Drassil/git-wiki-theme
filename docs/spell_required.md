# spell\_required

[<-Back-to:World](database-world.md)

**The \`spell\_required\` table**

Table used to add restrictions for learning spells from trainer. Player can't learn spell 'spell\_id' till he learns 'req\_spell', when he loses 'req\_spell' 'spell\_id' will be lost too. Table is used also for profession specialisations as specialisations require profession of certain rank to learn.

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
<td><p><a href="#spell_id">spell_id</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#req_spell">req_spell</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### spell\_id

Spell ID from Spell.dbc, which require knowing \`req\_spell\` to learn from trainer.

### req\_spell

Spell ID from Spell.dbc, which is required to be known before \`spell\_id\` can be learned from trainer.
