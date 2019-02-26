# areatrigger\_scripts

`Back-to:World`

**The \`areatrigger\_scripts\` table**

Allows for an area trigger to be scripted with Trinity Script.

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
<td><p><a href="#areatrigger_scripts-entry">entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#areatrigger_scripts-ScriptName">ScriptName</a></p></td>
<td><p>char(64)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### entry

This is the trigger identifier from [AreaTrigger.dbc](http://collab.kpsn.org/display/tc/AreaTrigger)

### ScriptName

The ScriptName for when scripting it in the core.
This might also be 'SmartTrigger'. It will than use [SmartAI](http://collab.kpsn.org/display/tc/smart_scripts).
