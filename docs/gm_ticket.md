# gm\_ticket

[<-Back-to:Characters](database-characters.md)

**The \`gm\_tickets\` table**

This table stores all tickets

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
<td><p><a href="#id">Id</a></p></td>
<td><p>int(10)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>Auto increment</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#type">type</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>0 open, 1 closed, 2 character deleted</p></td>
</tr>
<tr class="even">
<td><p><a href="#playerguid">playerGuid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>Global Unique Identifier of ticket creator</p></td>
</tr>
<tr class="odd">
<td><p><a href="#name">name</a></p></td>
<td><p>varchar(12)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p>Name of ticket creator</p></td>
</tr>
<tr class="even">
<td><p><a href="#description">description</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><br />
</td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#createtime">createtime</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#mapid">mapId</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="dd">
<td><p><a href="#posx">posX</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#posy">posY</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p><a href="#posz">posZ</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#lastmodifiedtime">lastModifiedTime</a></p></td>
<td><p>int(10)</p></td>
<td><p>signed</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p><a href="#closedby">closedBy</a></p></td>
<td><p>int(10)</p></td>
<td><p>signed</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#assignedto">assignedTo</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><p>GUID of admin to whom ticket is assigned</p></td>
</tr>
<tr class="odd">
<td><p><a href="#comment">comment</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#response">response</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p><a href="#completed">completed</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#escalated">escalated</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p><a href="#viewed">viewed</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#needmorehelp">needMoreHelp</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><p><a href="#resolvedBy">resolvedBy</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><br />
</td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><br />
</td>
<td>GUID of GM who resolved the ticket</td>
</tr>

</tbody>
</table>

'Description of the fields'''

### Id

The ticket global unique identifier. This number must be unique and is the best way to identify separate tickets.

### type
Type of ticket. 
Variables: 0 = open, 1 = closed, 2 = character deleted.

### playerGuid

Player's GUID. See characters.guid

### name

The name of the character who created that ticket

### description

The content of the ticket

### createTime

The creation time of the ticket as linux timestamp

### mapId

Map where ticket has ben created. See Map.dbc

### posX

Position X Where ticket has ben created.

### posY

Position Y Where ticket has ben created.

### posZ

Position Z Where ticket has ben created.

### lastModifiedTime

The time when the ticket was closed or deleted by the issuer as linux timestamp

### closedBy

0 : Open

-1 : Closed by Console

&gt;0 : player who abandoned ticket or GM who closed ticket

### assignedTo

Specify account number of GameMaster that have this ticket assigned.

### comment

The comment to the ticket, only visible to game masters

### response

Requires GM response. 17 = true, 1 = false (17 is default)

### completed

`field-no-description|14`

### escalated

`field-no-description|15`

### viewed

0 : no one has viewed the ticket.

&gt;0 : How many times the ticket has been viewed.

### needMoreHelp

Requests further GM interaction on a ticket to which a GM has already responded. Basically means "has a new ticket"

### resolvedBy

GUID of GM who resolved the ticket.
