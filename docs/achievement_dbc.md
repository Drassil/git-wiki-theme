# achievement\_dbc

`            Back-to:World     `

**The \`achievement\_dbc\` table**

Stores achievement data that is missing in [Achievement.dbc](Achievement)

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
<td><p><a href="#id">ID</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#requiredfaction">requiredFaction</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#mapid">mapID</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#points">points</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Achievement points awarded for completing the achievement, has no use serverside</p></td>
</tr>
<tr class="even">
<td><p><a href="#flags">flags</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#count">count</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#refachievement">refAchievement</a></p></td>
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

### ID

This is the ID of the achievement from [Achievement\_Criteria.dbc](Achievement+Criteria) (2nd column)

### requiredFaction

-   Condition:
    -   Both: -1,
    -   Horde: 0,
    -   Alliance: 1

### mapID

Condition: Player must be on that map to be allowed criteria updates (-1 if not set)

### points

Achievement points awarded for completing the achievement, has no use serverside

### flags

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Value</p></th>
<th><p>Comment</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>ACHIEVEMENT_FLAG_COUNTER</p></td>
<td><p>0x00000001</p></td>
<td><p>Just count statistic (never stop and complete)</p></td>
</tr>
<tr class="even">
<td><p>ACHIEVEMENT_FLAG_HIDDEN</p></td>
<td><p>0x00000002</p></td>
<td><p>Not sent to client - internal use only</p></td>
</tr>
<tr class="odd">
<td><p>ACHIEVEMENT_FLAG_STORE_MAX_VALUE</p></td>
<td><p>0x00000004</p></td>
<td><p>Store only max value? used only in &quot;Reach level xx&quot;</p></td>
</tr>
<tr class="even">
<td><p>ACHIEVEMENT_FLAG_SUMM</p></td>
<td><p>0x00000008</p></td>
<td><p>Use summ criteria value from all reqirements (and calculate max value)</p></td>
</tr>
<tr class="odd">
<td><p>ACHIEVEMENT_FLAG_MAX_USED</p></td>
<td><p>0x00000010</p></td>
<td><p>Show max criteria (and calculate max value ??)</p></td>
</tr>
<tr class="even">
<td><p>ACHIEVEMENT_FLAG_REQ_COUNT</p></td>
<td><p>0x00000020</p></td>
<td><p>Use not zero req count (and calculate max value)</p></td>
</tr>
<tr class="odd">
<td><p>ACHIEVEMENT_FLAG_AVERAGE</p></td>
<td><p>0x00000040</p></td>
<td><p>Show as average value (value / time_in_days) depend from other flag (by def use last criteria value)</p></td>
</tr>
<tr class="even">
<td><p>ACHIEVEMENT_FLAG_BAR</p></td>
<td><p>0x00000080</p></td>
<td><p>Show as progress bar (value / max vale) depend from other flag (by def use last criteria value)</p></td>
</tr>
<tr class="odd">
<td><p>ACHIEVEMENT_FLAG_REALM_FIRST_REACH</p></td>
<td><p>0x00000100</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>ACHIEVEMENT_FLAG_REALM_FIRST_KILL</p></td>
<td><p>0x00000200</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

### count

Should always be 1.

### refAchievement

Should always be 0.
