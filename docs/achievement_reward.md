# achievement\_reward

[<-Back-to:World](database-world.md)

**The \`achievement\_reward\` table**

This table describes the reward that you will receive when you obtain a given achievement.

**Structure**

<table>
<colgroup>
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
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
</tr>
<tr class="even">
<td><p><a href="#id">ID</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#titlea">TitleA</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#titleh">TitleH</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#itemid">ItemID</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#sender">Sender</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#subject">Subject</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#body">Body</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><a href="#mailtemplateid">MailTemplateID</a></td>
<td>mediumint(8)</td>
<td>unsigned</td>
<td> </td>
<td>YES</td>
<td>0</td>
<td> </td>
</tr>
</tbody>
</table>

**Description of the fields**

### ID

This is the ID of the achievement from Achievement.dbc

### TitleA

This is the ID of the title for Aliance from CharTitles.dbc if the achievement rewards a title.

### TitleH

This is the ID of the title for Horde from CharTitles.dbc if the achievement rewards a title.

### ItemID

This is the item that you get if the achievement rewards an item. You will get this item in the mail.

### Sender

This is the sender of the mail that you receive.

### Subject

This is the subject of the mail that you receive.

### Body

This is the text of the body of that mail that you receive.

### MailTemplateID

This is Id of MailTemplate from MailTemplate.dbc of that mail that you receive. Subject and Text must be empty. They are read from dbc file.
