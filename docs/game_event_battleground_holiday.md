# game\_event\_battleground\_holiday

[<-Back-to:World](database-world.md)

**The \`Game\_event\_battleground\_holiday\` table**

This table is used to add a holiday to a battleground, for things like extra reputation / honor.

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
<td><p><a href="#evententry">eventEntry</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p>Unique</p></td>
<td><p>Entry of the game event</p></td>
</tr>
<tr class="odd">
<td><p><a href="#bgflag">bgflag</a></p></td>
<td><p>int(10)</p></td>
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

### eventEntry

This is entry id of the game\_event that was setup to add the holiday.

### bgflag

This is a bitmask field that decides which battle grounds are affected for this given holiday.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>bit</p></th>
<th><p>Battleground</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>Alterac Valley</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Warsong Gulch</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Arathi Basin</p></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>Nagrand Arena</p></td>
</tr>
<tr class="odd">
<td><p>32</p></td>
<td><p>Blade's Edge Arena</p></td>
</tr>
<tr class="even">
<td><p>64</p></td>
<td><p>All Arena</p></td>
</tr>
<tr class="odd">
<td><p>128</p></td>
<td><p>Eye of the Storm</p></td>
</tr>
<tr class="even">
<td><p>256</p></td>
<td><p>Ruins of Lordaeron</p></td>
</tr>
<tr class="odd">
<td><p>512</p></td>
<td><p>Strand of the Ancients</p></td>
</tr>
<tr class="even">
<td><p>1024</p></td>
<td><p>Dalaran Sewers</p></td>
</tr>
<tr class="odd">
<td><p>2048</p></td>
<td><p>The Ring of Valor</p></td>
</tr>
</tbody>
</table>


