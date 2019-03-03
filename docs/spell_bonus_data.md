# spell\_bonus\_data

[<-Back-to:World](database-world.md)

**The \`spell\_bonus\_data\` table**

Table used for storing custom damage/healing bonus coefficients.

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
<td><p><a href="#entry">entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#direct_bonus">direct_bonus</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#dot_bonus">dot_bonus</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#ap_bonus">ap_bonus</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#ap_dot_bonus">ap_dot_bonus</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#comments">comments</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### entry

Spell ID. See Spell.dbc.

Only the first rank of the spell needs data if spell exists in Spell\_ranks and coefficients are same for each rank.

### direct\_bonus

Direct spell power damage.

If &lt; 0

Calculate default spell power coefficient.

If = 0

Don't apply any spell power coefficient. (Don't scale damage with spellpower)

If &gt; 0

Use this as new spell power coefficient.

### dot\_bonus

Spell damage over time.

If &lt; 0
Calculate default spell power coefficient.
If = 0
Don't apply any spell power coefficient. (Don't scale damage with spellpower)
If &gt; 0
Use this as new spell power coefficient.

### ap\_bonus

Direct Melee/Ranged damage.

If &lt; 0

Calculate default attack power coefficient.

If = 0

Don't apply any attack power coefficient. (Don't scale damage with attack power)

If &gt; 0

Use this as new attack power coefficient.

### ap\_dot\_bonus

Melee/Ranged damage over time.

If &lt; 0

Calculate default attack power coefficient.

If = 0

Don't apply any attack power coefficient. (Don't scale damage with attack power)

If &gt; 0

Use this as new attack power coefficient.

### comments

Comment as why it has such values and name of the spell.
