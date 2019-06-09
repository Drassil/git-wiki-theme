# exploration_basexp

[<-Back-to:World](database-world.md)

<p>This table holds the base experience point information needed for when a player explores a new zone.</p>

<table>
<tbody>
<tr class="even">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#level">level</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unasigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#basexp">basexp</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p></p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### level
The player level.

### basexp
The base experience the player will recieve when he or she discovers a new zone at the level specified in the level field.
