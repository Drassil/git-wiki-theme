# spell\_dbc

[<-Back-to:World](database-world.md)

**The \`spell\_dbc\` table**

This table contains data regarding serverside spells which are not to be found in Client DBC files.

**Note: **Not longer used since Warlords of Draenor Expansion (see [Hotfixes](https://trinitycore.atlassian.net/wiki/display/tc/Hotfixes))

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
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#dispel">Dispel</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#mechanic">Mechanic</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#attributes">Attributes</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#attributesex">AttributesEx</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#attributesex">AttributesEx2</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#attributesex">AttributesEx3</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#attributesex">AttributesEx4</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#attributesex">AttributesEx5</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#stances">Stances</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#stancesnot">StancesNot</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#targets">Targets</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#castingtimeindex">CastingTimeIndex</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#aurainterruptflags">AuraInterruptFlags</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#procflags">ProcFlags</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#procchance">ProcChance</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#proccharges">ProcCharges</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#maxlevel">MaxLevel</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#baselevel">BaseLevel</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#spelllevel">SpellLevel</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#durationindex">DurationIndex</a></p></td>
<td><p>smallint(5)</p></td>
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
<td><p><a href="#rangeindex">RangeIndex</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#stackamount">StackAmount</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#equippeditemclass">EquippedItemClass</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><div class="content-wrapper">
<div class="preformatted panel" style="border-width: 1px;">
<div class="preformattedContent panelContent">
<pre><code>-1</code></pre>
</div>
</div>
</div></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#equippeditemsubclassmask">EquippedItemSubClassMask</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#equippediteminventorytypemask">EquippedItemInventoryTypeMask</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effect">Effect1</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#effect">Effect2</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#effect">Effect3</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#effectdiesides">EffectDieSides1</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectdiesides">EffectDieSides2</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effectdiesides">EffectDieSides3</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectrealpointsperlevel">EffectRealPointsPerLevel1</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effectrealpointsperlevel">EffectRealPointsPerLevel2</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectrealpointsperlevel">EffectRealPointsPerLevel3</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effectbasepoints">EffectBasePoints1</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectbasepoints">EffectBasePoints2</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effectbasepoints">EffectBasePoints3</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectmechanic">EffectMechanic1</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#effectmechanic">EffectMechanic2</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#effectmechanic">EffectMechanic3</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#effectimplicittargeta">EffectImplicitTargetA1</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#effectimplicittargeta">EffectImplicitTargetA2</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#effectimplicittargeta">EffectImplicitTargetA3</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#effectimplicittargetb">EffectImplicitTargetB1</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#effectimplicittargetb">EffectImplicitTargetB2</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#effectimplicittargetb">EffectImplicitTargetB3</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#effectradiusindex">EffectRadiusIndex1</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#effectradiusindex">EffectRadiusIndex2</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#effectradiusindex">EffectRadiusIndex3</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#effectapplyauraname">EffectApplyAuraName1</a></p></td>
<td><p>smallint(5)</p></td>
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
<td><p><a href="#effectapplyauraname">EffectApplyAuraName2</a></p></td>
<td><p>smallint(5)</p></td>
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
<tr class="even">
<td><p><a href="#effectapplyauraname">EffectApplyAuraName3</a></p></td>
<td><p>smallint(5)</p></td>
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
<td><p><a href="#effectamplitude">EffectAmplitude1</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectamplitude">EffectAmplitude2</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effectamplitude">EffectAmplitude3</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectmultiplevalue">EffectMultipleValue1</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effectmultiplevalue">EffectMultipleValue2</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectmultiplevalue">EffectMultipleValue3</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effectmiscvalue">EffectMiscValue1</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectmiscvalue">EffectMiscValue2</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effectmiscvalue">EffectMiscValue3</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectmiscvalueb">EffectMiscValueB1</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effectmiscvalueb">EffectMiscValueB2</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#effectmiscvalueb">EffectMiscValueB3</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#effecttriggerspell">EffectTriggerSpell1</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#effecttriggerspell">EffectTriggerSpell2</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#effecttriggerspell">EffectTriggerSpell3</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#effectspellclassmaska">EffectSpellClassMaskA1</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#effectspellclassmaska">EffectSpellClassMaskA2</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#effectspellclassmaska">EffectSpellClassMaskA3</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#effectspellclassmaskb">EffectSpellClassMaskB1</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#effectspellclassmaskb">EffectSpellClassMaskB2</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#effectspellclassmaskb">EffectSpellClassMaskB3</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#effectspellclassmaskc">EffectSpellClassMaskC1</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#effectspellclassmaskc">EffectSpellClassMaskC2</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#effectspellclassmaskc">EffectSpellClassMaskC3</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#maxtargetlevel">MaxTargetLevel</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#spellfamilyname">SpellFamilyName</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#spellfamilyflags">SpellFamilyFlags1</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#spellfamilyflags">SpellFamilyFlags2</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#spellfamilyflags">SpellFamilyFlags3</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#maxaffectedtargets">MaxAffectedTargets</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#dmgclass">DmgClass</a></p></td>
<td><p>tinyint(3)</p></td>
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
<tr class="even">
<td><p><a href="#preventiontype">PreventionType</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#dmgmultiplier">DmgMultiplier1</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#dmgmultiplier">DmgMultiplier2</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#dmgmultiplier">DmgMultiplier3</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#areagroupid">AreaGroupId</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#schoolmask">SchoolMask</a></p></td>
<td><p>int(10)</p></td>
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
<tr class="even">
<td><p><a href="#comment">Comment</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### Id

The id of the Spell.

### Dispel

`field-no-description|2`

### Mechanic

`field-no-description|3`

### Attributes

`field-no-description|4`

### AttributesEx

`field-no-description|5`

### Stances

`field-no-description|6`

### StancesNot

`field-no-description|7`

### Targets

`field-no-description|8`

### CastingTimeIndex

`field-no-description|9`

### AuraInterruptFlags

`field-no-description|10`

### ProcFlags

`field-no-description|11`

### ProcChance

`field-no-description|12`

### ProcCharges

`field-no-description|13`

### MaxLevel

`field-no-description|14`

### BaseLevel

`field-no-description|15`

### SpellLevel

`field-no-description|16`

### DurationIndex

`field-no-description|17`

### RangeIndex

`field-no-description|18`

### StackAmount

`field-no-description|19`

### EquippedItemClass

`field-no-description|20`

### EquippedItemSubClassMask

`field-no-description|21`

### EquippedItemInventoryTypeMask

`field-no-description|22`

### Effect

Effect1, Effect2 and Effect3. Effect\_ID of the Spell\_Effect. A Spell can only have up to three Spell\_Effects.

### EffectDieSides

`field-no-description|24`

### EffectRealPointsPerLevel

`field-no-description|25`

### EffectBasePoints

`field-no-description|26`

### EffectMechanic

`field-no-description|27`

### EffectImplicitTargetA

`field-no-description|28`

### EffectImplicitTargetB

`field-no-description|29`

### EffectRadiusIndex

`field-no-description|30`

### EffectApplyAuraName

`field-no-description|31`

### EffectAmplitude

`field-no-description|32`

### EffectMultipleValue

`field-no-description|33`

### EffectMiscValue

`field-no-description|34`

### EffectMiscValueB

`field-no-description|35`

### EffectTriggerSpell

`field-no-description|36`

### EffectSpellClassMaskA

`field-no-description|37`

### EffectSpellClassMaskB

`field-no-description|38`

### EffectSpellClassMaskC

`field-no-description|39`

### MaxTargetLevel

`field-no-description|40`

### SpellFamilyName

`field-no-description|41`

### SpellFamilyFlags

`field-no-description|42`

### MaxAffectedTarget

`field-no-description|43`

### DmgClass

`field-no-description|44`

### PreventionType

`field-no-description|45`

### DmgMultiplier

`field-no-description|46`

### AreaGroupId

`field-no-description|47`

### SchoolMask

`field-no-description|48`

### Comment

`field-no-description|49`

**SPELL\_EFFECT\_ID**

Effect\_IDs of [Effect1, Effect2 and/or Effect3](#spell_dbc-Effect).

| Effect_ID | Spell_Effect                   | Description                                                                                                                             |
|-----------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| 0         | EffectNULL                     | NULL                                                                                                                                    |
| 1         | EffectInstaKill                | SPELL_EFFECT_INSTAKILL                                                                                                                  |
| 2         | EffectSchoolDMG                | SPELL_EFFECT_SCHOOL_DAMAGE                                                                                                              |
| 3         | EffectDummy                    | SPELL_EFFECT_DUMMY                                                                                                                      |
| 4         | EffectUnused                   | SPELL_EFFECT_PORTAL_TELEPORT unused                                                                                                     |
| 5         | EffectTeleportUnits            | SPELL_EFFECT_TELEPORT_UNITS                                                                                                             |
| 6         | EffectApplyAura                | SPELL_EFFECT_APPLY_AURA                                                                                                                 |
| 7         | EffectEnvirinmentalDMG         | SPELL_EFFECT_ENVIRONMENTAL_DAMAGE                                                                                                       |
| 8         | EffectPowerDrain               | SPELL_EFFECT_POWER_DRAIN                                                                                                                |
| 9         | EffectHealthLeech              | SPELL_EFFECT_HEALTH_LEECH                                                                                                               |
| 10        | EffectHeal                     | SPELL_EFFECT_HEAL                                                                                                                       |
| 11        | EffectBind                     | SPELL_EFFECT_BIND                                                                                                                       |
| 12        | EffectNULL                     | SPELL_EFFECT_PORTAL                                                                                                                     |
| 13        | EffectUnused                   | SPELL_EFFECT_RITUAL_BASE unused                                                                                                         |
| 14        | EffectUnused                   | SPELL_EFFECT_RITUAL_SPECIALIZE unused                                                                                                   |
| 15        | EffectUnused                   | SPELL_EFFECT_RITUAL_ACTIVATE_PORTAL unused                                                                                              |
| 16        | EffectQuestComplete            | SPELL_EFFECT_QUEST_COMPLETE                                                                                                             |
| 17        | EffectWeaponDmg                | SPELL_EFFECT_WEAPON_DAMAGE_NOSCHOOL                                                                                                     |
| 18        | EffectResurrect                | SPELL_EFFECT_RESURRECT                                                                                                                  |
| 19        | EffectAddExtraAttacks          | SPELL_EFFECT_ADD_EXTRA_ATTACKS                                                                                                          |
| 20        | EffectUnused                   | SPELL_EFFECT_DODGE one spell: Dodge                                                                                                     |
| 21        | EffectUnused                   | SPELL_EFFECT_EVADE one spell: Evade (DND)                                                                                               |
| 22        | EffectParry                    | SPELL_EFFECT_PARRY                                                                                                                      |
| 23        | EffectBlock                    | SPELL_EFFECT_BLOCK one spell: Block                                                                                                     |
| 24        | EffectCreateItem               | SPELL_EFFECT_CREATE_ITEM                                                                                                                |
| 25        | EffectUnused                   | SPELL_EFFECT_WEAPON                                                                                                                     |
| 26        | EffectUnused                   | SPELL_EFFECT_DEFENSE one spell: Defense                                                                                                 |
| 27        | EffectPersistentAA             | SPELL_EFFECT_PERSISTENT_AREA_AURA                                                                                                       |
| 28        | EffectSummonType               | SPELL_EFFECT_SUMMON                                                                                                                     |
| 29        | EffectLeap                     | SPELL_EFFECT_LEAP                                                                                                                       |
| 30        | EffectEnergize                 | SPELL_EFFECT_ENERGIZE                                                                                                                   |
| 31        | EffectWeaponDmg                | SPELL_EFFECT_WEAPON_PERCENT_DAMAGE                                                                                                      |
| 32        | EffectTriggerMissileSpell      | SPELL_EFFECT_TRIGGER_MISSILE                                                                                                            |
| 33        | EffectOpenLock                 | SPELL_EFFECT_OPEN_LOCK                                                                                                                  |
| 34        | EffectSummonChangeItem         | SPELL_EFFECT_SUMMON_CHANGE_ITEM                                                                                                         |
| 35        | EffectApplyAreaAura            | SPELL_EFFECT_APPLY_AREA_AURA_PARTY                                                                                                      |
| 36        | EffectLearnSpell               | SPELL_EFFECT_LEARN_SPELL                                                                                                                |
| 37        | EffectUnused                   | SPELL_EFFECT_SPELL_DEFENSE one spell: SPELLDEFENSE (DND)                                                                                |
| 38        | EffectDispel                   | SPELL_EFFECT_DISPEL                                                                                                                     |
| 39        | EffectUnused                   | SPELL_EFFECT_LANGUAGE                                                                                                                   |
| 40        | EffectDualWield                | SPELL_EFFECT_DUAL_WIELD                                                                                                                 |
| 41        | EffectJump                     | SPELL_EFFECT_JUMP                                                                                                                       |
| 42        | EffectJumpDest                 | SPELL_EFFECT_JUMP_DEST                                                                                                                  |
| 43        | EffectTeleUnitsFaceCaster      | SPELL_EFFECT_TELEPORT_UNITS_FACE_CASTER                                                                                                 |
| 44        | EffectLearnSkill               | SPELL_EFFECT_SKILL_STEP                                                                                                                 |
| 45        | EffectAddHonor                 | SPELL_EFFECT_ADD_HONOR                                                                                                                  |
| 46        | EffectUnused                   | SPELL_EFFECT_SPAWN clientside, unit appears as if it was just spawned                                                                   |
| 47        | EffectTradeSkill               | SPELL_EFFECT_TRADE_SKILL                                                                                                                |
| 48        | EffectUnused                   | SPELL_EFFECT_STEALTH one spell: Base Stealth                                                                                            |
| 49        | EffectUnused                   | SPELL_EFFECT_DETECT one spell: Detect                                                                                                   |
| 50        | EffectTransmitted              | SPELL_EFFECT_TRANS_DOOR                                                                                                                 |
| 51        | EffectUnused                   | SPELL_EFFECT_FORCE_CRITICAL_HIT unused                                                                                                  |
| 52        | EffectUnused                   | SPELL_EFFECT_GUARANTEE_HIT one spell: zzOLDCritical Shot                                                                                |
| 53        | EffectEnchantItemPerm          | SPELL_EFFECT_ENCHANT_ITEM                                                                                                               |
| 54        | EffectEnchantItemTmp           | SPELL_EFFECT_ENCHANT_ITEM_TEMPORARY                                                                                                     |
| 55        | EffectTameCreature             | SPELL_EFFECT_TAMECREATURE                                                                                                               |
| 56        | EffectSummonPet                | SPELL_EFFECT_SUMMON_PET                                                                                                                 |
| 57        | EffectLearnPetSpell            | SPELL_EFFECT_LEARN_PET_SPELL                                                                                                            |
| 58        | EffectWeaponDmg                | SPELL_EFFECT_WEAPON_DAMAGE                                                                                                              |
| 59        | EffectCreateRandomItem         | SPELL_EFFECT_CREATE_RANDOM_ITEM create item base at spell specific loot                                                                 |
| 60        | EffectProficiency              | SPELL_EFFECT_PROFICIENCY                                                                                                                |
| 61        | EffectSendEvent                | SPELL_EFFECT_SEND_EVENT                                                                                                                 |
| 62        | EffectPowerBurn                | SPELL_EFFECT_POWER_BURN                                                                                                                 |
| 63        | EffectThreat                   | SPELL_EFFECT_THREAT                                                                                                                     |
| 64        | EffectTriggerSpell             | SPELL_EFFECT_TRIGGER_SPELL                                                                                                              |
| 65        | EffectApplyAreaAura            | SPELL_EFFECT_APPLY_AREA_AURA_RAID                                                                                                       |
| 66        | EffectRechargeManaGem          | SPELL_EFFECT_CREATE_MANA_GEM (possibly recharge it, misc - is item ID)                                                                  |
| 67        | EffectHealMaxHealth            | SPELL_EFFECT_HEAL_MAX_HEALTH                                                                                                            |
| 68        | EffectInterruptCast            | SPELL_EFFECT_INTERRUPT_CAST                                                                                                             |
| 69        | EffectDistract                 | SPELL_EFFECT_DISTRACT                                                                                                                   |
| 70        | EffectPull                     | SPELL_EFFECT_PULL one spell: Distract Move                                                                                              |
| 71        | EffectPickPocket               | SPELL_EFFECT_PICKPOCKET                                                                                                                 |
| 72        | EffectAddFarsight              | SPELL_EFFECT_ADD_FARSIGHT                                                                                                               |
| 73        | EffectUntrainTalents           | SPELL_EFFECT_UNTRAIN_TALENTS                                                                                                            |
| 74        | EffectApplyGlyph               | SPELL_EFFECT_APPLY_GLYPH                                                                                                                |
| 75        | EffectHealMechanical           | SPELL_EFFECT_HEAL_MECHANICAL one spell: Mechanical Patch Kit                                                                            |
| 76        | EffectSummonObjectWild         | SPELL_EFFECT_SUMMON_OBJECT_WILD                                                                                                         |
| 77        | EffectScriptEffect             | SPELL_EFFECT_SCRIPT_EFFECT                                                                                                              |
| 78        | EffectUnused                   | SPELL_EFFECT_ATTACK                                                                                                                     |
| 79        | EffectSanctuary                | SPELL_EFFECT_SANCTUARY                                                                                                                  |
| 80        | EffectAddComboPoints           | SPELL_EFFECT_ADD_COMBO_POINTS                                                                                                           |
| 81        | EffectUnused                   | SPELL_EFFECT_CREATE_HOUSE one spell: Create House (TEST)                                                                                |
| 82        | EffectNULL                     | SPELL_EFFECT_BIND_SIGHT                                                                                                                 |
| 83        | EffectDuel                     | SPELL_EFFECT_DUEL                                                                                                                       |
| 84        | EffectStuck                    | SPELL_EFFECT_STUCK                                                                                                                      |
| 85        | EffectSummonPlayer             | SPELL_EFFECT_SUMMON_PLAYER                                                                                                              |
| 86        | EffectActivateObject           | SPELL_EFFECT_ACTIVATE_OBJECT                                                                                                            |
| 87        | EffectWMODamage                | SPELL_EFFECT_WMO_DAMAGE                                                                                                                 |
| 88        | EffectWMORepair                | SPELL_EFFECT_WMO_REPAIR                                                                                                                 |
| 89        | EffectWMOChange                | SPELL_EFFECT_WMO_CHANGE // 0 intact // 1 damaged // 2 destroyed // 3 rebuilding                                                         |
| 90        | EffectKillCreditPersonal       | SPELL_EFFECT_KILL_CREDIT Kill credit but only for single person                                                                         |
| 91        | EffectUnused                   | SPELL_EFFECT_THREAT_ALL one spell: zzOLDBrainwash                                                                                       |
| 92        | EffectEnchantHeldItem          | SPELL_EFFECT_ENCHANT_HELD_ITEM                                                                                                          |
| 93        | EffectForceDeselect            | SPELL_EFFECT_FORCE_DESELECT                                                                                                             |
| 94        | EffectSelfResurrect            | SPELL_EFFECT_SELF_RESURRECT                                                                                                             |
| 95        | EffectSkinning                 | SPELL_EFFECT_SKINNING                                                                                                                   |
| 96        | EffectCharge                   | SPELL_EFFECT_CHARGE                                                                                                                     |
| 97        | EffectCastButtons              | SPELL_EFFECT_CAST_BUTTON (totem bar since 3.2.2a)                                                                                       |
| 98        | EffectKnockBack                | SPELL_EFFECT_KNOCK_BACK                                                                                                                 |
| 99        | EffectDisEnchant               | SPELL_EFFECT_DISENCHANT                                                                                                                 |
| 100       | EffectInebriate                | SPELL_EFFECT_INEBRIATE                                                                                                                  |
| 101       | EffectFeedPet                  | SPELL_EFFECT_FEED_PET                                                                                                                   |
| 102       | EffectDismissPet               | SPELL_EFFECT_DISMISS_PET                                                                                                                |
| 103       | EffectReputation               | SPELL_EFFECT_REPUTATION                                                                                                                 |
| 104       | EffectSummonObject             | SPELL_EFFECT_SUMMON_OBJECT_SLOT1                                                                                                        |
| 105       | EffectSummonObject             | SPELL_EFFECT_SUMMON_OBJECT_SLOT2                                                                                                        |
| 106       | EffectSummonObject             | SPELL_EFFECT_SUMMON_OBJECT_SLOT3                                                                                                        |
| 107       | EffectSummonObject             | SPELL_EFFECT_SUMMON_OBJECT_SLOT4                                                                                                        |
| 108       | EffectDispelMechanic           | SPELL_EFFECT_DISPEL_MECHANIC                                                                                                            |
| 109       | EffectSummonDeadPet            | SPELL_EFFECT_SUMMON_DEAD_PET                                                                                                            |
| 110       | EffectDestroyAllTotems         | SPELL_EFFECT_DESTROY_ALL_TOTEMS                                                                                                         |
| 111       | EffectDurabilityDamage         | SPELL_EFFECT_DURABILITY_DAMAGE                                                                                                          |
| 112       | EffectUnused                   | SPELL_EFFECT_112                                                                                                                        |
| 113       | EffectResurrectNew             | SPELL_EFFECT_RESURRECT_NEW                                                                                                              |
| 114       | EffectTaunt                    | SPELL_EFFECT_ATTACK_ME                                                                                                                  |
| 115       | EffectDurabilityDamagePCT      | SPELL_EFFECT_DURABILITY_DAMAGE_PCT                                                                                                      |
| 116       | EffectSkinPlayerCorpse         | SPELL_EFFECT_SKIN_PLAYER_CORPSE one spell: Remove Insignia, bg usage, required special corpse flags...                                  |
| 117       | EffectSpiritHeal               | SPELL_EFFECT_SPIRIT_HEAL one spell: Spirit Heal                                                                                         |
| 118       | EffectSkill                    | SPELL_EFFECT_SKILL professions and more                                                                                                 |
| 119       | EffectApplyAreaAura            | SPELL_EFFECT_APPLY_AREA_AURA_PET                                                                                                        |
| 120       | EffectUnused                   | SPELL_EFFECT_TELEPORT_GRAVEYARD one spell: Graveyard Teleport Test                                                                      |
| 121       | EffectWeaponDmg                | SPELL_EFFECT_NORMALIZED_WEAPON_DMG                                                                                                      |
| 122       | EffectUnused                   | SPELL_EFFECT_122 unused                                                                                                                 |
| 123       | EffectSendTaxi                 | SPELL_EFFECT_SEND_TAXI taxi/flight related (misc value is taxi path id)                                                                 |
| 124       | EffectPullTowards              | SPELL_EFFECT_PULL_TOWARDS                                                                                                               |
| 125       | EffectModifyThreatPercent      | SPELL_EFFECT_MODIFY_THREAT_PERCENT                                                                                                      |
| 126       | EffectStealBeneficialBuff      | SPELL_EFFECT_STEAL_BENEFICIAL_BUFF spell steal effect?                                                                                  |
| 127       | EffectProspecting              | SPELL_EFFECT_PROSPECTING Prospecting spell                                                                                              |
| 128       | EffectApplyAreaAura            | SPELL_EFFECT_APPLY_AREA_AURA_FRIEND                                                                                                     |
| 129       | EffectApplyAreaAura            | SPELL_EFFECT_APPLY_AREA_AURA_ENEMY                                                                                                      |
| 130       | EffectRedirectThreat           | SPELL_EFFECT_REDIRECT_THREAT                                                                                                            |
| 131       | EffectPlayerNotification       | SPELL_EFFECT_PLAYER_NOTIFICATION                                                                                                        |
| 132       | EffectPlayMusic                | SPELL_EFFECT_PLAY_MUSIC sound id in misc value (SoundEntries.dbc)                                                                       |
| 133       | EffectUnlearnSpecialization    | SPELL_EFFECT_UNLEARN_SPECIALIZATION unlearn profession specialization                                                                   |
| 134       | EffectKillCredit               | SPELL_EFFECT_KILL_CREDIT misc value is creature entry                                                                                   |
| 135       | EffectNULL                     | SPELL_EFFECT_CALL_PET                                                                                                                   |
| 136       | EffectHealPct                  | SPELL_EFFECT_HEAL_PCT                                                                                                                   |
| 137       | EffectEnergizePct              | SPELL_EFFECT_ENERGIZE_PCT                                                                                                               |
| 138       | EffectLeapBack                 | SPELL_EFFECT_LEAP_BACK Leap back                                                                                                        |
| 139       | EffectQuestClear               | SPELL_EFFECT_CLEAR_QUEST Reset quest status (miscValue - quest ID)                                                                      |
| 140       | EffectForceCast                | SPELL_EFFECT_FORCE_CAST                                                                                                                 |
| 141       | EffectForceCastWithValue       | SPELL_EFFECT_FORCE_CAST_WITH_VALUE                                                                                                      |
| 142       | EffectTriggerSpellWithValue    | SPELL_EFFECT_TRIGGER_SPELL_WITH_VALUE                                                                                                   |
| 143       | EffectApplyAreaAura            | SPELL_EFFECT_APPLY_AREA_AURA_OWNER                                                                                                      |
| 144       | EffectKnockBack                | SPELL_EFFECT_KNOCK_BACK_DEST                                                                                                            |
| 145       | EffectPullTowards              | SPELL_EFFECT_PULL_TOWARDS_DEST Black Hole Effect                                                                                        |
| 146       | EffectActivateRune             | SPELL_EFFECT_ACTIVATE_RUNE                                                                                                              |
| 147       | EffectQuestFail                | SPELL_EFFECT_QUEST_FAIL quest fail                                                                                                      |
| 148       | EffectUnused                   | SPELL_EFFECT_148 1 spell - 43509                                                                                                        |
| 149       | EffectChargeDest               | SPELL_EFFECT_CHARGE_DEST                                                                                                                |
| 150       | EffectQuestStart               | SPELL_EFFECT_QUEST_START                                                                                                                |
| 151       | EffectTriggerRitualOfSummoning | SPELL_EFFECT_TRIGGER_SPELL_2                                                                                                            |
| 152       | EffectNULL                     | SPELL_EFFECT_152 summon Refer-a-Friend                                                                                                  |
| 153       | EffectCreateTamedPet           | SPELL_EFFECT_CREATE_TAMED_PET misc value is creature entry                                                                              |
| 154       | EffectDiscoverTaxi             | SPELL_EFFECT_DISCOVER_TAXI                                                                                                              |
| 155       | EffectTitanGrip                | SPELL_EFFECT_TITAN_GRIP Allows you to equip two-handed axes, maces and swords in one hand, but you attack $49152s1% slower than normal. |
| 156       | EffectEnchantItemPrismatic     | SPELL_EFFECT_ENCHANT_ITEM_PRISMATIC                                                                                                     |
| 157       | EffectCreateItem2              | SPELL_EFFECT_CREATE_ITEM_2 create item or create item template and replace by some randon spell loot item                               |
| 158       | EffectMilling                  | SPELL_EFFECT_MILLING milling                                                                                                            |
| 159       | EffectRenamePet                | SPELL_EFFECT_ALLOW_RENAME_PET allow rename pet once again                                                                               |
| 160       | EffectNULL                     | SPELL_EFFECT_160 1 spell - 45534                                                                                                        |
| 161       | EffectSpecCount                | SPELL_EFFECT_TALENT_SPEC_COUNT second talent spec (learn/revert)                                                                        |
| 162       | EffectActivateSpec             | SPELL_EFFECT_TALENT_SPEC_SELECT activate primary/secondary spec                                                                         |
| 163       | EffectNULL                     | unused                                                                                                                                  |
| 164       | EffectRemoveAura               | SPELL_EFFECT_REMOVE_AURA                                                                                                                |
  

/td-EffectSkinPlayerCorpseconfluenceTdtrp
