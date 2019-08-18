# gossip\_menu

[<-Back-to:World](database-world.md)

**The \`gossip\_menu\` table**

This table is used for displaying gossip when a player talks to an NPC with [npcflag](creature_template) set.

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
<td><p><a href="#MenuID">MenuID</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#TextID">TextID</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### MenuID

This must match the entry you added to [creature\_template.gossip\_menu\_id](http://www.azerothcore.org/wiki/creature_template#gossip_menu_id). This also
groups the options from gossip\_menu\_option and displays all options associated with this ID.

**Note:** If adding your own custom menu options, then it is common practice to start with an ID at or above 90,000 just to be safe that it doesn't conflict with other gossip menu id's.

### TextID

This links to the [npc\_text.ID](http://www.azerothcore.org/wiki/npc_text#id) for the gossip you want to be initially displayed. Also this tells the NPC what to say at the top of the options menu when it is displayed.
