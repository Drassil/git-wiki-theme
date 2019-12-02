# areatrigger\_template\_polygon\_vertices

[<-Back-to:World](database-world.md)

**The \`areatrigger\_template\_polygon\_vertices\` table**

This table contains the description of the shape of an areatrigger.

**Structure**

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
<td><p><a href="#areatriggerid">AreaTriggerId</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><a href="#idx">Idx</a></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><a href="#verticex">VerticeX</a></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><a href="#verticey">VerticeY</a></td>
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
<tr class="even">
<td><a href="areatrigger_template_polygon_vertices">VerticeTargetX</a></td>
<td>float</td>
<td>signed</td>
<td><br />
</td>
<td>YES</td>
<td>NULL</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p><a href="areatrigger_template_polygon_vertices">VerticeTargetY</a></p></td>
<td>float</td>
<td>signed</td>
<td><br />
</td>
<td>YES</td>
<td>NULL</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><a href="#verifiedbuild">VerifiedBuild</a></td>
<td>int(10)</td>
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
</tbody>
</table>

**Description of the fields**

### AreaTriggerId

### Idx

### VerticeX

### VerticeY

### VerticeTargetX

### VerticeTargetY

### VerifiedBuild

This field was used to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.


