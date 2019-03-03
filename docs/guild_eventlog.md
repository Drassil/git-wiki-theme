# guild\_eventlog

[<-Back-to:Characters](database-characters.md)

**The \`guild\_eventlog\` table**

`table-no-description`

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
<td><p><a href="#guildid">guildid</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Guild Identificator</p></td>
</tr>
<tr class="odd">
<td><p><a href="#logguid">LogGuid</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Log record identificator - auxiliary column</p></td>
</tr>
<tr class="even">
<td><p><a href="#eventtype">EventType</a></p></td>
<td><p>tinyint(1)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Event type</p></td>
</tr>
<tr class="odd">
<td><p><a href="#playerguid1">PlayerGuid1</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Player 1</p></td>
</tr>
<tr class="even">
<td><p><a href="#playerguid2">PlayerGuid2</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Player 2</p></td>
</tr>
<tr class="odd">
<td><p><a href="#newrank">NewRank</a></p></td>
<td><p>tinyint(2)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>New rank(in case promotion/demotion)</p></td>
</tr>
<tr class="even">
<td><p><a href="#timestamp">TimeStamp</a></p></td>
<td><p>bigint(20)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Event UNIX time</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guildid

`Guild Identificator`

### LogGuid

`Log record identificator - auxiliary column`

### EventType

1 = GUILD\_EVENT\_LOG\_INVITE\_PLAYER

2 = GUILD\_EVENT\_LOG\_JOIN\_GUILD

3 = GUILD\_EVENT\_LOG\_PROMOTE\_PLAYER

4 = GUILD\_EVENT\_LOG\_DEMOTE\_PLAYER

5 = GUILD\_EVENT\_LOG\_UNINVITE\_PLAYER

6 = GUILD\_EVENT\_LOG\_LEAVE\_GUILD

### PlayerGuid1

`GUID of Player1`

### PlayerGuid2

`GUID of Player2`

### NewRank

`New rank (in case of promotion/demotion)`

### TimeStamp

`Event UNIX time`
