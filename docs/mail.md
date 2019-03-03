# mail

[<-Back-to:Characters](database-characters.md)

**The \`mail\` table**

This table contains main data about all mails in the game.

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
<td><p><a href="#id">id</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Identifier</p></td>
</tr>
<tr class="odd">
<td><p><a href="#messagetype">messageType</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stationery">stationery</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>41</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#mailtemplateid_x">mailTemplateId</a></p></td>
<td><p>mediumint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#sender">sender</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Character Global Unique Identifier</p></td>
</tr>
<tr class="odd">
<td><p><a href="#receiver">receiver</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Character Global Unique Identifier</p></td>
</tr>
<tr class="even">
<td><p><a href="#subject">subject</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#body">body</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#has_items">has_items</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#expire_time">expire_time</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#deliver_time">deliver_time</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#money">money</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><a href="#cod">cod</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><a href="#checked">checked</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td> </td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>

**Description of the fields**

### id

This field contains unique ID of any messages.

Don't have autoincrement !!!

### messageType

-   0 = Normal
-   1 doesn't exist
-   2 = Auction
-   3 = Creature
-   4 = Gameobject
-   5 = Item

### stationery

This field can contain these values:

-   1 = Test
-   41 = Normal mail layout,

<!-- -->

-   61 = GM (Blizzard)
-   62 = Auction
-   64 = VAL (???)
-   65 = CHR (???)

### mailTemplateId

Id from MailTemplate.dbc

### sender

In this field is entered sender [character.guid.](2129969.html#characters(table)-guid)

### receiver

Here is receiver's [character.guid.](2129969.html#characters(table)-guid)

### subject

Here is stored mail subject.

### body

The text contained in the mail.

### has\_items

Default: 0,

When is set to 1, that mail can contain items.

For items look at [mail\_items](mail_items) table.

### expire\_time

Here is timestamp which stores date for auto-return mail to sender.

### deliver\_time

Here is timestamp which stores date of send mail.

### money

The ammout of money in mail, or money to pay when is COD.

### cod

Default: 0 - No COD,

when is set to 1, that field \`money\` stores gold for COD.

### checked

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th><p>Comment</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>MAIL_CHECK_MASK_NONE</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>MAIL_CHECK_MASK_READ</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>MAIL_CHECK_MASK_RETURNED</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>MAIL_CHECK_MASK_COPIED</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>MAIL_CHECK_MASK_COD_PAYMENT</p></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>MAIL_CHECK_MASK_HAS_BODY</p></td>
</tr>
</tbody>
</table>

/td
