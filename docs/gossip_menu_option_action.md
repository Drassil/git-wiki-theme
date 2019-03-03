# gossip\_menu\_option\_action

# **Table: gossip\_menu\_option\_action**

This table holds information about what a gossip menu option is doing, redirect to gossip or showing poi on mnap.

## Structure

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
<td><p><a href="#menuid">MenuId</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#optionindex">OptionIndex</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#actionmenuid">ActionMenuId</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#actionpoiid">ActionPoiId</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

## Description of the fields

### MenuId

Gossip entry from Gossip\_menu.MenuId this option is associated with.

### OptionIndex

The OptionIndex associated with this gossip\_menu\_option. Must be unique for a given  [gossip\_menu\_option.OptionIndex](https://trinitycore.atlassian.net/wiki/spaces/tc/pages/2130188/gossip+menu+option#gossip_menu_option-OptionIndex) starting from 0 (zero).

### ActionMenuId

Gossip entry from Gossip\_menu.MenuId this option will link to. Opens Gossip with id specified here.

### ActionPoiId

Poi id from [points\_of\_interest.ID](https://trinitycore.atlassian.net/wiki/spaces/tc/pages/2130272/points+of+interest#points_of_interest-ID) this option is associated with.
If not 0 will show POI on Map.
