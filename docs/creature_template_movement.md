# creature\_template\_movement

**The \`creature\_template\_movement\` table**

This table contains the description of creatures movements, where the creature can move and attack.

**Structure**

<table>
<thead>
<tr class="header">
<th><strong>Field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Attributes</strong></th>
<th><strong>Key</strong></th>
<th><strong>Null</strong></th>
<th><strong>Default</strong></th>
<th><strong>Extra</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>CreatureId</td>
<td>int(10)</td>
<td>unsigned</td>
<td>PRI</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>Ground</td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>Swim</td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>Flight</td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>Rooted</td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
</tbody>
</table>

|                                                                |
|----------------------------------------------------------------|
| Ground States:  "None"=0, "Run"=1, "Hover"=2                   
                                                                 
 Swim States:     "None"=0, "Swim"=1                             
                                                                 
 Flight States:      "None"=0, "DisableGravity"=1, "CanFly" =2;  
                                                                 
 Rooted States:   "None"=0, "Rooted "=1                          |

Notice:

Rooted creature that doesn't fall once dead must use \`Ground\`=1, \`Swim\`=0, \`Flight\`=0, \`Rooted\`=1 (\`Swim\`=1 if above water)

Rooted creature that falls once dead must use \`Ground\`=0, \`Swim\`=0, \`Flight\`=1, \`Rooted\`=1
