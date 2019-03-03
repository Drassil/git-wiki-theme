# reputation\_spillover\_template

[<-Back-to:World](database-world.md)

**The \`reputation\_spillover\_rate\` table**

`field-no-description|0`

**Structure**

<table>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><strong>Default</strong></td>
<td><strong>Extra</strong></td>
<td><strong>Comment</strong></td>
</tr>
<tr class="even">
<td><p><a href="#faction">faction</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#4">faction1</a></td>
<td><p>smallint(6)</p></td>
<td><p>unsigned</p></td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#4">rate_1</a></p></td>
<td>float</td>
<td>signed</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p><a href="#4">rank1</a></p></td>
<td><p>tinyint(3)</p></td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#4">faction2</a></p></td>
<td><p>smallint(6)</p></td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p><a href="#4">rate_2</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#4">rank_2</a></p></td>
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
<tr class="odd">
<td><p><a href="#4">faction3</a></p></td>
<td><p>smallint(6)</p></td>
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
<td><p><a href="#4">rate_3</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#4">rank_3</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#4">faction4</a></p></td>
<td><p>smallint(6)</p></td>
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
<td><p><a href="#4">rate_4</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#4">rank_4</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
</tbody>
</table>

**Description of the fields**

### faction

`Faction entry (from FactionTemplate) to where the reputation was supposed to be rewarded.`

### faction1-4

`Faction entry (from FactionTemplate) receiving the reputation spillover.`

### rate1-4

`Rate the given reputation points are multiplied by.`

### rank1-4

`Max reputation rank. The player will not be given any spillover above this rank.`
