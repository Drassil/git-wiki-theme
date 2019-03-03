# SkillLine

&lt;noinclude&gt;|
`Back-to:DBC`

&lt;big&gt;**SkillLine.dbc**&lt;/big&gt;

This DBC contains all skills.

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
<th>Notes</th>
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
<td>2</td>
<td><pre><code>iRefID_SkillLineCategory</code></pre></td>
<td><pre><code>Integer</code></pre></td>
<td> </td>
</tr>
<tr class="odd">
<td>3</td>
<td><pre><code>skillCostID</code></pre></td>
<td><pre><code>Integer</code></pre></td>
<td> </td>
</tr>
<tr class="even">
<td>4</td>
<td><pre><code>sRefName</code></pre></td>
<td><pre><code>String + Loc</code></pre></td>
<td> </td>
</tr>
<tr class="odd">
<td>5</td>
<td><pre><code>description</code></pre></td>
<td><pre><code>String + Loc</code></pre></td>
<td> </td>
</tr>
<tr class="even">
<td>6</td>
<td><pre><code>iRefID_SpellIcon</code></pre></td>
<td><pre><code>Integer</code></pre></td>
<td> </td>
</tr>
<tr class="odd">
<td>7</td>
<td><pre><code>verb</code></pre></td>
<td><pre><code>String + Loc</code></pre></td>
<td> </td>
</tr>
<tr class="even">
<td>8</td>
<td><pre><code>canLink</code></pre></td>
<td><pre><code>Integer</code></pre></td>
<td><pre><code>prof. with recipes</code></pre></td>
</tr>
</tbody>
</table>

## **Content**

&lt;/noinclude&gt;

<table style="width:100%;">
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
<td><p><strong>ID</strong></p></td>
<td><ul>
<li><a href="#SkillLine-CategoryId">CategoryId</a>*</li>
</ul></td>
<td><p><strong>SkillCostId</strong></p></td>
<td><p><strong>Name</strong></p></td>
<td><p><strong>SpellIcon</strong></p></td>
<td><p><strong>AltVerb</strong></p></td>
<td><p><strong>CanLink</strong></p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Frost</p></td>
<td><p>188</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Fire</p></td>
<td><p>183</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>26</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Arms</p></td>
<td><p>514</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>38</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Combat</p></td>
<td><p>243</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>39</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Subtlety</p></td>
<td><p>250</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>43</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Swords</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>44</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Axes</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>45</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Bows</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>46</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Guns</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>50</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Beast Mastery</p></td>
<td><p>255</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>51</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Survival</p></td>
<td><p>257</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>54</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Maces</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>55</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Two-Handed Swords</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>56</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Holy</p></td>
<td><p>70</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>78</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Shadow Magic</p></td>
<td><p>234</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>95</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Defense</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>98</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Common</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>101</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Dwarven Racial</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>109</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Orcish</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>111</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Dwarven</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>113</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Darnassian</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>115</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Taurahe</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>118</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Dual Wield</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>124</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Tauren Racial</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>125</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Orc Racial</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>126</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Night Elf Racial</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>129</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>First Aid</p></td>
<td><p>504</p></td>
<td><p> </p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>134</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Feral Combat</p></td>
<td><p>107</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>136</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Staves</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>137</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Thalassian</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>138</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Draconic</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>139</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Demon Tongue</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>140</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Titan</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>141</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Old Tongue</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>142</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Survival</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>148</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Horse Riding</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>149</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Wolf Riding</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>150</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Tiger Riding</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>152</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Ram Riding</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>155</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Swimming</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>160</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Two-Handed Maces</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>162</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Unarmed</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>163</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Marksmanship</p></td>
<td><p>126</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>164</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Blacksmithing</p></td>
<td><p>335</p></td>
<td><p>Modify</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>165</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Leatherworking</p></td>
<td><p>346</p></td>
<td><p>Emboss</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>171</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Alchemy</p></td>
<td><p>339</p></td>
<td><p>Refill</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>172</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Two-Handed Axes</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>173</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Daggers</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>176</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Thrown</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>182</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Herbalism</p></td>
<td><p>345</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>183</p></td>
<td><p>12</p></td>
<td><p>0</p></td>
<td><p>GENERIC (DND)</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>184</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Retribution</p></td>
<td><p>555</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>185</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Cooking</p></td>
<td><p>1467</p></td>
<td><p> </p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>186</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Mining</p></td>
<td><p>2418</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>188</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Imp</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>189</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Felhunter</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>197</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Tailoring</p></td>
<td><p>341</p></td>
<td><p>Embroider</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>202</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Engineering</p></td>
<td><p>333</p></td>
<td><p>Tinker</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>203</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Spider</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>204</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Voidwalker</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>205</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Succubus</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>206</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Infernal</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>207</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Doomguard</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>208</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Wolf</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>209</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Cat</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>210</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Bear</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>211</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Boar</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>212</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Crocolisk</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>213</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Carrion Bird</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>214</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Crab</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>215</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Gorilla</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>217</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Raptor</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>218</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Tallstrider</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>220</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Racial - Undead</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>226</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Crossbows</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>228</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Wands</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>229</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Polearms</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>236</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Scorpid</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>237</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Arcane</p></td>
<td><p>125</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>251</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Turtle</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>253</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Assassination</p></td>
<td><p>514</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>256</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Fury</p></td>
<td><p>561</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>257</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Protection</p></td>
<td><p>276</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>267</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Protection</p></td>
<td><p>291</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>270</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Generic Hunter</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>293</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>Plate Mail</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>313</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Gnomish</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>315</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Troll</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>333</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Enchanting</p></td>
<td><p>578</p></td>
<td><p>Enchant</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>354</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Demonology</p></td>
<td><p>90</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>355</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Affliction</p></td>
<td><p>88</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>356</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Fishing</p></td>
<td><p>580</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>373</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Enhancement</p></td>
<td><p>19</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>374</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Restoration</p></td>
<td><p>13</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>375</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Elemental Combat</p></td>
<td><p>62</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>393</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Skinning</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>413</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>Mail</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>414</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>Leather</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>415</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>Cloth</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>433</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>Shield</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>473</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Fist Weapons</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>533</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Raptor Riding</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>553</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Mechanostrider Piloting</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>554</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Undead Horsemanship</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>573</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Restoration</p></td>
<td><p>962</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>574</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Balance</p></td>
<td><p>225</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>593</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Destruction</p></td>
<td><p>547</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>594</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Holy</p></td>
<td><p>70</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>613</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Discipline</p></td>
<td><p>685</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>633</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Lockpicking</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>653</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Bat</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>654</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Hyena</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>655</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Bird of Prey</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>656</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Wind Serpent</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>673</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Gutterspeak</p></td>
<td><p>1</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>713</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Kodo Riding</p></td>
<td><p>317</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>733</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Racial - Troll</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>753</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Racial - Gnome</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>754</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Racial - Human</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>755</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Jewelcrafting</p></td>
<td><p>1768</p></td>
<td><p>Modify</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>756</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Blood Elf Racial</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>758</p></td>
<td><p>-1</p></td>
<td><p>0</p></td>
<td><p>Pet - Event - Remote Control</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>759</p></td>
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Language: Draenei</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>760</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Draenei Racial</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>761</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Felguard</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>762</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Riding</p></td>
<td><p>255</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>763</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Dragonhawk</p></td>
<td><p>1530</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>764</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Nether Ray</p></td>
<td><p>1577</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>765</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Sporebat</p></td>
<td><p>2033</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>766</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Warp Stalker</p></td>
<td><p>1952</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>767</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Ravager</p></td>
<td><p>1585</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>768</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Serpent</p></td>
<td><p>2167</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>769</p></td>
<td><p>7</p></td>
<td><p>22</p></td>
<td><p>Internal</p></td>
<td><p>1775</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>770</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Blood</p></td>
<td><p>2636</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>771</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Frost</p></td>
<td><p>2632</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>772</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Unholy</p></td>
<td><p>2633</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>773</p></td>
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Inscription</p></td>
<td><p>3267</p></td>
<td><p>Inscribe</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>775</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Moth</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>776</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Runeforging</p></td>
<td><p>2727</p></td>
<td><p>Engrave</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>777</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Mounts</p></td>
<td><p>2224</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>778</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Companions</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>780</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Exotic Chimaera</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>781</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Exotic Devlisaur</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>782</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Ghoul</p></td>
<td><p>221</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>783</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Exotic Silithid</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>784</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Exotic Worm</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>785</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet- Wasp</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>786</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Exotic Rhino</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>787</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Pet - Exotic Core Hound</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>788</p></td>
<td><p>5</p></td>
<td><p>0</p></td>
<td><p>Pet - Exotic Spirit Beast</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>0</p></td>
</tr>
</tbody>
</table>

&lt;noinclude&gt;

------------------------------------------------------------------------

## CategoryId

This field is from SkillLineCategory.dbc

This in the content of this small dbc

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Category Id</strong></p></td>
<td><p><strong>Name</strong></p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Attributes</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Weapon Skills</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Class Skills</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Armor Proficiencies</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>Secondary Skills</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>Languages</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>Professions</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>Not Displayed</p></td>
</tr>
</tbody>
</table>


