# instance\_template

[<-Back-to:World](database-world.md)

**The \`instance\_template\` table**

This table has all the templates for every instance. When a group enters an instance, a new copy of that instance is made from the values in these fields.

If you want to change the spot you will start in when you enter/leave an instance, go to areatrigger\_teleport

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
<td><p><a href="#map">map</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#parent">parent</a></p></td>
<td><p>bigint(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#script">script</a></p></td>
<td><p>varchar(128)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#allowmount">allowMount</a></p></td>
<td><p>tinyiny(1)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### map

The map ID of the instance. See Maps.dbc

### parent

If the instance is a subinstance of another instance, this field has the parent instance's map ID.

### script

The name of the instance script that the instance will use and apply (if any).

### allowMount

0 = you can enter on mount and will not get dismounted on enter

1 = you can't enter on mount and get dismounted on enter
