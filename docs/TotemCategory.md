# TotemCategory

&lt;noinclude&gt;|
`Back-to:DBC`

&lt;big&gt;**TotemCategory.dbc**&lt;/big&gt;

**Version is : 3.3.5a**

## Structure

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th><pre><code>Column</code></pre></th>
<th><pre><code>Field</code></pre></th>
<th><pre><code>Type</code></pre></th>
<th><pre><code>Notes</code></pre></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td><pre><code>ID</code></pre></td>
<td><pre><code>Integer</code></pre></td>
<td> </td>
</tr>
<tr class="even">
<td>2-18</td>
<td><pre><code>sRefName</code></pre></td>
<td><pre><code>String + Loc</code></pre></td>
<td><pre><code>Includes all kinds of component things.. not just totems</code></pre></td>
</tr>
<tr class="odd">
<td>19</td>
<td><pre><code>Category</code></pre></td>
<td><pre><code>Integer</code></pre></td>
<td><pre><code>Which category the tool belongs to (1 = totems, 3 = enchanting rods etc)</code></pre></td>
</tr>
<tr class="even">
<td>20</td>
<td><pre><code>CategoryBits</code></pre></td>
<td><pre><code>BitMask</code></pre></td>
<td><pre><code>Which tools in the category the tool can be used as. For instance for totems:</code></pre>
<ul>
<li>bit 0 = earth</li>
<li>bit 1 = air</li>
<li>bit 2 = fire</li>
<li>bit 3 = water</li>
<li>&quot;Master Totem&quot; has the bitmask 1111b, meaning it can be used instead of all four normal totems.</li>
</ul></td>
</tr>
</tbody>
</table>

## **Content**

&lt;/noinclude&gt;

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>ID</strong></p></td>
<td><p><strong>Name</strong></p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Skinning Knife (OLD)</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Earth Totem</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Air Totem</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Fire Totem</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Water Totem</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Runed Copper Rod</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Runed Silver Rod</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Runed Golden Rod</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>Runed Truesilver Rod</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>Runed Arcanite Rod</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>Mining Pick (OLD)</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>Philosopher's Stone</p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
<td><p>Blacksmith Hammer (OLD)</p></td>
</tr>
<tr class="odd">
<td><p>14</p></td>
<td><p>Arclight Spanner</p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>Gyromatic Micro-Adjustor</p></td>
</tr>
<tr class="odd">
<td><p>21</p></td>
<td><p>Master Totem</p></td>
</tr>
<tr class="even">
<td><p>41</p></td>
<td><p>Runed Fel Iron Rod</p></td>
</tr>
<tr class="odd">
<td><p>62</p></td>
<td><p>Runed Adamantite Rod</p></td>
</tr>
<tr class="even">
<td><p>63</p></td>
<td><p>Runed Eternium Rod</p></td>
</tr>
<tr class="odd">
<td><p>81</p></td>
<td><p>Hollow Quill</p></td>
</tr>
<tr class="even">
<td><p>101</p></td>
<td><p>Runed Azurite Rod</p></td>
</tr>
<tr class="odd">
<td><p>121</p></td>
<td><p>Virtuoso Inking Set</p></td>
</tr>
<tr class="even">
<td><p>141</p></td>
<td><p>Drums</p></td>
</tr>
<tr class="odd">
<td><p>161</p></td>
<td><p>Gnomish Army Knife</p></td>
</tr>
<tr class="even">
<td><p>162</p></td>
<td><p>Blacksmith Hammer</p></td>
</tr>
<tr class="odd">
<td><p>165</p></td>
<td><p>Mining Pick</p></td>
</tr>
<tr class="even">
<td><p>166</p></td>
<td><p>Skinning Knife</p></td>
</tr>
<tr class="odd">
<td><p>167</p></td>
<td><p>Hammer Pick</p></td>
</tr>
<tr class="even">
<td><p>168</p></td>
<td><p>Bladed Pickaxe</p></td>
</tr>
<tr class="odd">
<td><p>169</p></td>
<td><p>Flint and Tinder</p></td>
</tr>
<tr class="even">
<td><p>189</p></td>
<td><p>Runed Cobalt Rod</p></td>
</tr>
<tr class="odd">
<td><p>190</p></td>
<td><p>Runed Titanium Rod</p></td>
</tr>
</tbody>
</table>


