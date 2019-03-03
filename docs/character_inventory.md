# character\_inventory

[<-Back-to:Characters](database-characters.md)

**The \`character\_inventory\` table**

Contains all the character inventory data, including the bank data.

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
<td><p><a href="#guid">guid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>Unique</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Global Unique Identifier</p></td>
</tr>
<tr class="odd">
<td><p><a href="#bag">bag</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>Unique</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#slot">slot</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>Unique</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#item">item</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Item Global Unique Identifier</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

The GUID of the character. See characters.guid

### bag

If it isn't 0, then it is the bag's item GUID. See item\_instance.guid

### slot

If the bag field is non-zero, then the slot is the slot in the bag where the item is kept. The range can differ depending on the number of slots the bag has.

If the bag field is zero, then the slot has a range of 0 to 130 and the value stands for the following:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Slot #</p></th>
<th><p>Value</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Head</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Neck</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Shoulders</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Body</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Chest</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Waist</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Legs</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Feet</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Wrists</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>Hands</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>Finger 1</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>Finger 2</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>Trinket 1</p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
<td><p>Trinket 2</p></td>
</tr>
<tr class="odd">
<td><p>14</p></td>
<td><p>Back</p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>Main Hand</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>Off Hand</p></td>
</tr>
<tr class="even">
<td><p>17</p></td>
<td><p>Ranged</p></td>
</tr>
<tr class="odd">
<td><p>18</p></td>
<td><p>Tabard</p></td>
</tr>
<tr class="even">
<td><p>19-22</p></td>
<td><p>Equipped Bags</p></td>
</tr>
<tr class="odd">
<td><p>23-38</p></td>
<td><p>Main Backpack</p></td>
</tr>
<tr class="even">
<td><p>39-66</p></td>
<td><p>Main Bank</p></td>
</tr>
<tr class="odd">
<td><p>67-73</p></td>
<td><p>Bank Bags</p></td>
</tr>
<tr class="even">
<td><p>86-117</p></td>
<td><p>Keys in Keyring</p></td>
</tr>
<tr class="odd">
<td><p>118-135</p></td>
<td><p>Currencies (Emblems,badges,marks etc.)</p></td>
</tr>
</tbody>
</table>

### item

The item's GUID. See item\_instance.guid
