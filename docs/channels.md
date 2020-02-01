# channels

[<-Back-to:Characters](database-characters.md)

# Table: channels

Information and settings for ingame, player-based chat channels (not affecting the default system channels)

## Structure

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
<td><p><a href="#m_name">name</a></p></td>
<td><p>varchar(128)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#m_team">team</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#m_announce">announce</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#m_ownership">ownership</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#m_password">password</a></p></td>
<td><p>varchar(32)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#bannedlist">bannedList</a> (NOT IMPLEMENTED FOR NOW)</p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#last_used">lastUsed</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

## Description of the fields

### name

**Channel name**

Name of the channel

### team

**&lt;team id&gt; Allow access to channel from specified player faction ID**

For multirace channels, two (or more) separate entries must exist with the EXACT same settings for all fields apart from this (it needs a different &lt;team id&gt;)

Horde -&gt; 67

Alliance -&gt; 469

### announce

**Channel announce (0/1)**

0 = Channel join/part actions will not be sent

1 = Channel join/part actions will be sent

### ownership

**Channel ownership (0/1)**

0 = No one will ever be an owner.

1 = Ownership is the first person in the channel.

### password

**Channel password**

Empty, or a standard string-based password (no spaces allowed)

### bannedList (NOT IMPLEMENTED FOR NOW)

**Channel banlist**
List of banned player names, separated by spaces

### lastUsed

Used for automated cleaning of unused channels from database. Time is in unixtime.
