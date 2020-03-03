# outdoorpvp_template

[<-Back-to:World](database-world.md)

<table>
<tbody>
<tr class="even">
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
<td><p><a href="#TypeId">TypeId</a></p></td>
<td><p>tinyint(2)</p></td>
<td><p>unasigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p></p></td>
<td><p></p></td>
<td><p></p></td>
</tr>
<tr class="even">
<td><p><a href="#ScriptName">ScriptName</a></p></td>
<td><p>char(64)</p></td>
<td><p>signed</p></td>
<td><p></p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p></p></td>
<td><p></p></td>
</tr>
<tr class="even">
<td><p><a href="#comment">comment</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p></p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p></p></td>
<td><p></p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### TypeId
`field-no-description|1`

### ScriptName
The name of the script that this outdoor pvp uses. This ties a script from a scripting engine to this outdoor pvp.

### comment
The script name for the given outdoorpvp_template.