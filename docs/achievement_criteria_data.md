# achievement\_criteria\_data

`            Back-to:World     `

**The \`achievement\_criteria\_data\` table**

This table contains the data that a player needs to obtain / complete in order to receive a given achievement.

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
<td><p><a href="#criteria_id">criteria_id</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#type">type</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#value1">value1</a></p></td>
<td><p>medium(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#value2">value2</a></p></td>
<td><p>medium(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#scriptname">ScriptName</a></p></td>
<td><p>char(64)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### criteria\_id

This is the ID from [Achievement\_Criteria.dbc](Achievement+Criteria).

### type

Depending on this value, it will determine how value1 and value2 are used.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Type</p></th>
<th><p>Name</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>TYPE_NONE</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>TYPE_T_CREATURE</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>TYPE_T_PLAYER_CLASS_RACE</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>TYPE_T_PLAYER_LESS_HEALTH</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>TYPE_T_PLAYER_DEAD</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>TYPE_S_AURA</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>TYPE_S_AREA</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>TYPE_T_AURA</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>TYPE_VALUE</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>TYPE_T_LEVEL</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>TYPE_T_GENDER</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>TYPE_SCRIPT</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>TYPE_MAP_DIFFICULTY</p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
<td><p>TYPE_MAP_PLAYER_COUNT</p></td>
</tr>
<tr class="odd">
<td><p>14</p></td>
<td><p>TYPE_T_TEAM</p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>TYPE_S_DRUNK</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>TYPE_HOLIDAY</p></td>
</tr>
<tr class="even">
<td><p>17</p></td>
<td><p>TYPE_BG_LOSS_TEAM_SCORE</p></td>
</tr>
<tr class="odd">
<td><p>18</p></td>
<td><p>TYPE_INSTANCE_SCRIPT</p></td>
</tr>
<tr class="even">
<td><p>19</p></td>
<td><p>TYPE_S_EQUIPED_ITEM</p></td>
</tr>
<tr class="odd">
<td><p>20</p></td>
<td><p>TYPE_MAP_ID</p></td>
</tr>
<tr class="even">
<td><p>21</p></td>
<td><p>TYPE_S_PLAYER_CLASS_RACE</p></td>
</tr>
<tr class="odd">
<td>22</td>
<td>TYPE_NTH_BIRTHDAY</td>
</tr>
<tr class="even">
<td>23</td>
<td>TYPE_S_KNOWN_TITLE</td>
</tr>
</tbody>
</table>

### value1

\***TYPE\_T\_CREATURE**

-   -   The target here must be a valid entry from creature\_template

\***TYPE\_T\_PLAYER\_CLASS\_RACE**

-   -   The target here is a valid class (paste class list). value2 must also be set

\***TYPE\_T\_PLAYER\_LESS\_HEALTH**

-   -   The percentage of health that the target must reach.

\***TYPE\_T\_PLAYER\_DEAD**

-   -   The faction of the target player (must match player attempting achievement).

\***TYPE\_S\_AURA**

-   -   The spell ID of the aura that must be on the player. value2 must also be set.

\***TYPE\_S\_AREA**

-   -   Area ID from AreaTable.dbc

\***TYPE\_T\_AURA**

-   -   The spell ID of the aura that must be on the target. value2 must also be set.

\***TYPE\_VALUE**

-   -   Value to compare needed to attain achievement. This value is used in conjunction with another type. (see value2 for comparisation type)

\***TYPE\_T\_LEVEL**

-   -   The minimum level that the target can be.

\***TYPE\_T\_GENDER**

-   -   Gender: 0=Male, 1=Female

\***TYPE\_SCRIPT**

-   -   Used to disable an achievement if all requirements are not defined. Would usually be used if not all are known.

\***TYPE\_MAP\_DIFFICULTY**

-   -   Map difficulty: (for dungeons)
        -   Normal = 0
        -   Heroic = 1
    -   Map difficulty: (for raids)
        -   10 Man Normal = 0
        -   25 Man Normal = 1
        -   10 Man Heroic = 2
        -   25 Man Heroic = 3

\***TYPE\_MAP\_PLAYER\_COUNT**

-   -   The number of other players that must be in the zone. (not sure if it is minimum or maximum).

\***TYPE\_T\_TEAM**

-   -   The target must be on this team: Alliance = 469, Horde = 67

\***TYPE\_S\_DRUNK**

-   -   How drunk the player must be:
        -   DRUNKEN\_SOBER = 0
        -   DRUNKEN\_TIPSY = 1
        -   DRUNKEN\_DRUNK = 2
        -   DRUNKEN\_SMASHED = 3

\***TYPE\_HOLIDAY**

-   -   Holiday ID from Holiday.dbc and game\_event. Must be an active holiday.

\***TYPE\_BG\_LOSS\_TEAM\_SCORE**

-   -   Player's team win bg and opposition team have team score in range. // Min. score

\***TYPE\_INSTANCE\_SCRIPT**

-   -   Make instance script call for check current criteria requirements fit.

\***TYPE\_S\_EQUIPED\_ITEM**

-   -   Item level

\***TYPE\_MAP\_ID**

-   -   Player must be on mapId

\***TYPE\_S\_PLAYER\_CLASS\_RACE**

-   -   The Source here is a valid class (paste class list). value2 must also be set

 

\***TYPE\_NTH\_BIRTHDAY**

-    Number of Birthday

\***TYPE\_S\_KNOWN\_TITLE**

 

-   The value here is a valid titleId. See CharTitles.dbc

 

### value2

\***TYPE\_T\_PLAYER\_CLASS\_RACE**
\***TYPE\_S\_PLAYER\_CLASS\_RACE**

-   -   The value here is a valid race ID. See ChrRaces.dbc

\***TYPE\_S\_AURA**

-   -   Effect Index of the aura

\***TYPE\_T\_AURA**

-   -   Effect Index of the aura

\***TYPE\_BG\_LOSS\_TEAM\_SCORE**

-   -   Max. score

\***TYPE\_S\_EQUIPED\_ITEM**

-   Item quality

\***TYPE\_VALUE**

-   ComparisationType:

    |                          |
    |--------------------------|
    | COMP\_TYPE\_EQ = 0       |
    | COMP\_TYPE\_HIGH = 1     |
    | COMP\_TYPE\_LOW = 2      |
    | COMP\_TYPE\_HIGH\_EQ = 3 |
    | COMP\_TYPE\_LOW\_EQ = 4  |

### ScriptName

The ScriptName for when scripting it in the core.
This might also be 'SmartTrigger'. It will than use [SmartAI](smart_scripts).
