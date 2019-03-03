# item\_soulbound\_trade\_data

[<-Back-to:Characters](database-characters.md)

**The \`item\_soulbound\_trade\_data**

This table stores information about which players can trade soulbound items between each other.

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
<td><p><a href="#itemguid">itemGuid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p>Unique</p></td>
<td><p>Item GUID</p></td>
</tr>
<tr class="odd">
<td><p><a href="#alowedplayers">alowedplayers</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p>Space separated GUID list of players who can receive this item in trade</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### itemGuid

The GUID of the item that can be traded. See item\_instance.guid.

### alowedplayers

GUIDs of players eligible for the trade separated by space. See characters.guid.
