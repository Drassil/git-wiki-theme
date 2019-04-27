# creature\_formations

[<-Back-to:World](database-world.md)

**The \`creature\_formations\` table**

This table allows to group mobs. Members of group will follow others, and attack their targets.

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
<td><p><a href="#leaderguid">leaderGUID</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#memberguid">memberGUID</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#dist">dist</a></p></td>
<td><p>float</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#angle">angle</a></p></td>
<td><p>float</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><a href="#groupai">groupAI</a></td>
<td>int(11)</td>
<td>unsigned</td>
<td> </td>
<td>NO</td>
<td>NULL</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><a href="#point_1">point_1</a></td>
<td>int(11)</td>
<td>unsigned</td>
<td> </td>
<td>NO</td>
<td>0</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#point_2">point_2</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

## leaderGUID

GUID of group leader

## memberGUID

GUID of group member

## dist

Maximum distance between group leader and member

## angle

Angle between leader and member
Note: Only degrees are used! Values should be between 0 and 360

![angle](assets/images/angle.png)

## groupAI

Sets group member behaviours, values are:

|       |                                                              |
|-------|--------------------------------------------------------------|
| Value | Behaviour                                                    |
| 0     | Noone assists noone and member don't follow the leader       |
| 512   | Noone assists noone and member follow the leader             |
| 1     | The member aggroes if the leader aggroes                     |
| 2     | The leader aggroes if the member aggroes                     |
| 3     | Everyone assists everyone and member don't follow the leader |
| 515   | Everyone assists everyone and member follow the leader       |

## point\_1  

## point\_2

These values are used to set leaderGUID pre ending path points for memberGUID's where the path is a straight return path and memberGUID's should not crossover to other side of leaderGUID on direction change.

If your leader has a path like the one below where he moves to point 5 then back to 1 you would set point\_1 = 4 and point\_2 = 8 on the memberGUID. If the memberGUID is at angle 90 up to point 5 it will switch to angle 270 for the return trip. This is only needed to keep creatures on the correct side. these values can be left at 0 for creatures following directly behind leaderGUID or any creatures in a circular path. 

 

1     2     3     4    5

-----&lt;---------&gt;------

       8    7      6

 

 

 

 

## Attachments:

![](images/icons/bullet_blue.gif){width="8" height="8"} [followangle2.png](attachments/2129997/2130322.png) (image/png)

