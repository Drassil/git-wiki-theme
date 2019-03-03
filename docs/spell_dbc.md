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
\\ border="1"

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Effect_ID</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>Spell_Effect</strong></p></td>
</tr>
<tr class="odd">
<td><p><strong>Description</strong></p></td>
</tr>
<tr class="even">
<td><p>-</p></td>
</tr>
<tr class="odd">
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>EffectNULL</p></td>
</tr>
<tr class="odd">
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p>-</p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>EffectInstaKill</p></td>
</tr>
<tr class="odd">
<td><p>SPELL_EFFECT_INSTAKILL</p></td>
</tr>
<tr class="even">
<td><p>-</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
</tr>
<tr class="even">
<td><p>EffectSchoolDMG</p></td>
</tr>
<tr class="odd">
<td><p>SPELL_EFFECT_SCHOOL_DAMAGE</p></td>
</tr>
<tr class="even">
<td><p>-</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>EffectDummy</p></td>
</tr>
<tr class="odd">
<td><p>SPELL_EFFECT_DUMMY</p></td>
</tr>
<tr class="even">
<td><p>-</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
</tr>
<tr class="even">
<td><p>EffectUnused</p></td>
</tr>
<tr class="odd">
<td><p>SPELL_EFFECT_PORTAL_TELEPORT unused</p></td>
</tr>
<tr class="even">
<td><p>-</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
</tr>
<tr class="even">
<td><p>EffectTeleportUnits</p></td>
</tr>
<tr class="odd">
<td><p>SPELL_EFFECT_TELEPORT_UNITS</p></td>
</tr>
<tr class="even">
<td><p>-</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
</tr>
<tr class="even">
<td><p>EffectApplyAura</p></td>
</tr>
<tr class="odd">
<td><p>SPELL_EFFECT_APPLY_AURA</p></td>
</tr>
<tr class="even">
<td><p>-</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
</tr>
<tr class="even">
<td><p>EffectEnvirinmentalDMG</p></td>
</tr>
<tr class="odd">
<td><p>SPELL_EFFECT_ENVIRONMENTAL_DAMAGE</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
</tr>
<tr class="odd">
<td><p>EffectPowerDrain</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_POWER_DRAIN</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
</tr>
<tr class="odd">
<td><p>EffectHealthLeech</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_HEALTH_LEECH</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>EffectHeal</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_HEAL</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>EffectBind</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_BIND</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>EffectNULL</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PORTAL</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_RITUAL_BASE unused</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_RITUAL_SPECIALIZE unused</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_RITUAL_ACTIVATE_PORTAL unused</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>EffectQuestComplete</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_QUEST_COMPLETE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>EffectWeaponDmg</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_WEAPON_DAMAGE_NOSCHOOL</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>18</p></td>
</tr>
<tr class="odd">
<td><p>EffectResurrect</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_RESURRECT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>19</p></td>
</tr>
<tr class="odd">
<td><p>EffectAddExtraAttacks</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ADD_EXTRA_ATTACKS</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>20</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DODGE one spell: Dodge</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>21</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_EVADE one spell: Evade (DND)</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>22</p></td>
</tr>
<tr class="odd">
<td><p>EffectParry</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PARRY</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>23</p></td>
</tr>
<tr class="odd">
<td><p>EffectBlock</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_BLOCK one spell: Block</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>24</p></td>
</tr>
<tr class="odd">
<td><p>EffectCreateItem</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CREATE_ITEM</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>25</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_WEAPON</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>26</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DEFENSE one spell: Defense</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>27</p></td>
</tr>
<tr class="odd">
<td><p>EffectPersistentAA</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PERSISTENT_AREA_AURA</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>28</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonType</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>29</p></td>
</tr>
<tr class="odd">
<td><p>EffectLeap</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_LEAP</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>30</p></td>
</tr>
<tr class="odd">
<td><p>EffectEnergize</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ENERGIZE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>EffectWeaponDmg</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_WEAPON_PERCENT_DAMAGE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
</tr>
<tr class="odd">
<td><p>EffectTriggerMissileSpell</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TRIGGER_MISSILE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>EffectOpenLock</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_OPEN_LOCK</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>34</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonChangeItem</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON_CHANGE_ITEM</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>35</p></td>
</tr>
<tr class="odd">
<td><p>EffectApplyAreaAura</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_APPLY_AREA_AURA_PARTY</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>EffectLearnSpell</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_LEARN_SPELL</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>37</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SPELL_DEFENSE one spell: SPELLDEFENSE (DND)</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>EffectDispel</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DISPEL</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>39</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_LANGUAGE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>EffectDualWield</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DUAL_WIELD</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>41</p></td>
</tr>
<tr class="odd">
<td><p>EffectJump</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_JUMP</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>42</p></td>
</tr>
<tr class="odd">
<td><p>EffectJumpDest</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_JUMP_DEST</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>43</p></td>
</tr>
<tr class="odd">
<td><p>EffectTeleUnitsFaceCaster</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TELEPORT_UNITS_FACE_CASTER</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>44</p></td>
</tr>
<tr class="odd">
<td><p>EffectLearnSkill</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SKILL_STEP</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>EffectAddHonor</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ADD_HONOR</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>46</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SPAWN clientside, unit appears as if it was just spawned</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>EffectTradeSkill</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TRADE_SKILL</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>48</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_STEALTH one spell: Base Stealth</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>49</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DETECT one spell: Detect</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>50</p></td>
</tr>
<tr class="odd">
<td><p>EffectTransmitted</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TRANS_DOOR</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>51</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_FORCE_CRITICAL_HIT unused</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>52</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_GUARANTEE_HIT one spell: zzOLDCritical Shot</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>53</p></td>
</tr>
<tr class="odd">
<td><p>EffectEnchantItemPerm</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ENCHANT_ITEM</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>54</p></td>
</tr>
<tr class="odd">
<td><p>EffectEnchantItemTmp</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ENCHANT_ITEM_TEMPORARY</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>55</p></td>
</tr>
<tr class="odd">
<td><p>EffectTameCreature</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TAMECREATURE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>56</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonPet</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON_PET</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>57</p></td>
</tr>
<tr class="odd">
<td><p>EffectLearnPetSpell</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_LEARN_PET_SPELL</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>58</p></td>
</tr>
<tr class="odd">
<td><p>EffectWeaponDmg</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_WEAPON_DAMAGE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>59</p></td>
</tr>
<tr class="odd">
<td><p>EffectCreateRandomItem</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CREATE_RANDOM_ITEM create item base at spell specific loot</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>60</p></td>
</tr>
<tr class="odd">
<td><p>EffectProficiency</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PROFICIENCY</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>61</p></td>
</tr>
<tr class="odd">
<td><p>EffectSendEvent</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SEND_EVENT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>62</p></td>
</tr>
<tr class="odd">
<td><p>EffectPowerBurn</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_POWER_BURN</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>63</p></td>
</tr>
<tr class="odd">
<td><p>EffectThreat</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_THREAT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>64</p></td>
</tr>
<tr class="odd">
<td><p>EffectTriggerSpell</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TRIGGER_SPELL</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>EffectApplyAreaAura</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_APPLY_AREA_AURA_RAID</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>EffectRechargeManaGem</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CREATE_MANA_GEM (possibly recharge it, misc - is item ID)</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>EffectHealMaxHealth</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_HEAL_MAX_HEALTH</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>68</p></td>
</tr>
<tr class="odd">
<td><p>EffectInterruptCast</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_INTERRUPT_CAST</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>69</p></td>
</tr>
<tr class="odd">
<td><p>EffectDistract</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DISTRACT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>70</p></td>
</tr>
<tr class="odd">
<td><p>EffectPull</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PULL one spell: Distract Move</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>71</p></td>
</tr>
<tr class="odd">
<td><p>EffectPickPocket</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PICKPOCKET</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>72</p></td>
</tr>
<tr class="odd">
<td><p>EffectAddFarsight</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ADD_FARSIGHT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>73</p></td>
</tr>
<tr class="odd">
<td><p>EffectUntrainTalents</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_UNTRAIN_TALENTS</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>74</p></td>
</tr>
<tr class="odd">
<td><p>EffectApplyGlyph</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_APPLY_GLYPH</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>75</p></td>
</tr>
<tr class="odd">
<td><p>EffectHealMechanical</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_HEAL_MECHANICAL one spell: Mechanical Patch Kit</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>76</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonObjectWild</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON_OBJECT_WILD</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>77</p></td>
</tr>
<tr class="odd">
<td><p>EffectScriptEffect</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SCRIPT_EFFECT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>78</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ATTACK</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>79</p></td>
</tr>
<tr class="odd">
<td><p>EffectSanctuary</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SANCTUARY</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>80</p></td>
</tr>
<tr class="odd">
<td><p>EffectAddComboPoints</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ADD_COMBO_POINTS</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>81</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CREATE_HOUSE one spell: Create House (TEST)</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>82</p></td>
</tr>
<tr class="odd">
<td><p>EffectNULL</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_BIND_SIGHT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>83</p></td>
</tr>
<tr class="odd">
<td><p>EffectDuel</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DUEL</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>84</p></td>
</tr>
<tr class="odd">
<td><p>EffectStuck</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_STUCK</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonPlayer</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON_PLAYER</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>86</p></td>
</tr>
<tr class="odd">
<td><p>EffectActivateObject</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ACTIVATE_OBJECT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>87</p></td>
</tr>
<tr class="odd">
<td><p>EffectWMODamage</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_WMO_DAMAGE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>88</p></td>
</tr>
<tr class="odd">
<td><p>EffectWMORepair</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_WMO_REPAIR</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>89</p></td>
</tr>
<tr class="odd">
<td><p>EffectWMOChange</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_WMO_CHANGE // 0 intact // 1 damaged // 2 destroyed // 3 rebuilding</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>90</p></td>
</tr>
<tr class="odd">
<td><p>EffectKillCreditPersonal</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_KILL_CREDIT Kill credit but only for single person</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>91</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_THREAT_ALL one spell: zzOLDBrainwash</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>92</p></td>
</tr>
<tr class="odd">
<td><p>EffectEnchantHeldItem</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ENCHANT_HELD_ITEM</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>93</p></td>
</tr>
<tr class="odd">
<td><p>EffectForceDeselect</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_FORCE_DESELECT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>94</p></td>
</tr>
<tr class="odd">
<td><p>EffectSelfResurrect</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SELF_RESURRECT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>95</p></td>
</tr>
<tr class="odd">
<td><p>EffectSkinning</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SKINNING</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>96</p></td>
</tr>
<tr class="odd">
<td><p>EffectCharge</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CHARGE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>97</p></td>
</tr>
<tr class="odd">
<td><p>EffectCastButtons</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CAST_BUTTON (totem bar since 3.2.2a)</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>98</p></td>
</tr>
<tr class="odd">
<td><p>EffectKnockBack</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_KNOCK_BACK</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>99</p></td>
</tr>
<tr class="odd">
<td><p>EffectDisEnchant</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DISENCHANT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>100</p></td>
</tr>
<tr class="odd">
<td><p>EffectInebriate</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_INEBRIATE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>101</p></td>
</tr>
<tr class="odd">
<td><p>EffectFeedPet</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_FEED_PET</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>102</p></td>
</tr>
<tr class="odd">
<td><p>EffectDismissPet</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DISMISS_PET</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>103</p></td>
</tr>
<tr class="odd">
<td><p>EffectReputation</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_REPUTATION</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>104</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonObject</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON_OBJECT_SLOT1</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>105</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonObject</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON_OBJECT_SLOT2</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>106</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonObject</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON_OBJECT_SLOT3</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>107</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonObject</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON_OBJECT_SLOT4</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>108</p></td>
</tr>
<tr class="odd">
<td><p>EffectDispelMechanic</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DISPEL_MECHANIC</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>109</p></td>
</tr>
<tr class="odd">
<td><p>EffectSummonDeadPet</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SUMMON_DEAD_PET</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>110</p></td>
</tr>
<tr class="odd">
<td><p>EffectDestroyAllTotems</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DESTROY_ALL_TOTEMS</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>111</p></td>
</tr>
<tr class="odd">
<td><p>EffectDurabilityDamage</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DURABILITY_DAMAGE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>112</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_112</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>113</p></td>
</tr>
<tr class="odd">
<td><p>EffectResurrectNew</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_RESURRECT_NEW</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>114</p></td>
</tr>
<tr class="odd">
<td><p>EffectTaunt</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ATTACK_ME</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>115</p></td>
</tr>
<tr class="odd">
<td><p>EffectDurabilityDamagePCT</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DURABILITY_DAMAGE_PCT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>116</p></td>
</tr>
<tr class="odd">
<td><p>EffectSkinPlayerCorpse</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SKIN_PLAYER_CORPSE one spell: Remove Insignia, bg usage, required special corpse flags...</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>117</p></td>
</tr>
<tr class="odd">
<td><p>EffectSpiritHeal</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SPIRIT_HEAL one spell: Spirit Heal</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>118</p></td>
</tr>
<tr class="odd">
<td><p>EffectSkill</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SKILL professions and more</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>119</p></td>
</tr>
<tr class="odd">
<td><p>EffectApplyAreaAura</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_APPLY_AREA_AURA_PET</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>120</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TELEPORT_GRAVEYARD one spell: Graveyard Teleport Test</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>121</p></td>
</tr>
<tr class="odd">
<td><p>EffectWeaponDmg</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_NORMALIZED_WEAPON_DMG</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>122</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_122 unused</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>123</p></td>
</tr>
<tr class="odd">
<td><p>EffectSendTaxi</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_SEND_TAXI taxi/flight related (misc value is taxi path id)</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>124</p></td>
</tr>
<tr class="odd">
<td><p>EffectPullTowards</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PULL_TOWARDS</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>125</p></td>
</tr>
<tr class="odd">
<td><p>EffectModifyThreatPercent</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_MODIFY_THREAT_PERCENT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>126</p></td>
</tr>
<tr class="odd">
<td><p>EffectStealBeneficialBuff</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_STEAL_BENEFICIAL_BUFF spell steal effect?</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>127</p></td>
</tr>
<tr class="odd">
<td><p>EffectProspecting</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PROSPECTING Prospecting spell</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>128</p></td>
</tr>
<tr class="odd">
<td><p>EffectApplyAreaAura</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_APPLY_AREA_AURA_FRIEND</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>129</p></td>
</tr>
<tr class="odd">
<td><p>EffectApplyAreaAura</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_APPLY_AREA_AURA_ENEMY</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>EffectRedirectThreat</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_REDIRECT_THREAT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>131</p></td>
</tr>
<tr class="odd">
<td><p>EffectPlayerNotification</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PLAYER_NOTIFICATION</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>132</p></td>
</tr>
<tr class="odd">
<td><p>EffectPlayMusic</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PLAY_MUSIC sound id in misc value (SoundEntries.dbc)</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>133</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnlearnSpecialization</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_UNLEARN_SPECIALIZATION unlearn profession specialization</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>134</p></td>
</tr>
<tr class="odd">
<td><p>EffectKillCredit</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_KILL_CREDIT misc value is creature entry</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>135</p></td>
</tr>
<tr class="odd">
<td><p>EffectNULL</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CALL_PET</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>136</p></td>
</tr>
<tr class="odd">
<td><p>EffectHealPct</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_HEAL_PCT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>137</p></td>
</tr>
<tr class="odd">
<td><p>EffectEnergizePct</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ENERGIZE_PCT</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>138</p></td>
</tr>
<tr class="odd">
<td><p>EffectLeapBack</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_LEAP_BACK Leap back</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>EffectQuestClear</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CLEAR_QUEST Reset quest status (miscValue - quest ID)</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>140</p></td>
</tr>
<tr class="odd">
<td><p>EffectForceCast</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_FORCE_CAST</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>EffectForceCastWithValue</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_FORCE_CAST_WITH_VALUE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>142</p></td>
</tr>
<tr class="odd">
<td><p>EffectTriggerSpellWithValue</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TRIGGER_SPELL_WITH_VALUE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>143</p></td>
</tr>
<tr class="odd">
<td><p>EffectApplyAreaAura</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_APPLY_AREA_AURA_OWNER</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>144</p></td>
</tr>
<tr class="odd">
<td><p>EffectKnockBack</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_KNOCK_BACK_DEST</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>145</p></td>
</tr>
<tr class="odd">
<td><p>EffectPullTowards</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_PULL_TOWARDS_DEST Black Hole Effect</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>146</p></td>
</tr>
<tr class="odd">
<td><p>EffectActivateRune</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ACTIVATE_RUNE</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>147</p></td>
</tr>
<tr class="odd">
<td><p>EffectQuestFail</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_QUEST_FAIL quest fail</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>EffectUnused</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_148 1 spell - 43509</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>149</p></td>
</tr>
<tr class="odd">
<td><p>EffectChargeDest</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CHARGE_DEST</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>150</p></td>
</tr>
<tr class="odd">
<td><p>EffectQuestStart</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_QUEST_START</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>151</p></td>
</tr>
<tr class="odd">
<td><p>EffectTriggerRitualOfSummoning</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TRIGGER_SPELL_2</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>152</p></td>
</tr>
<tr class="odd">
<td><p>EffectNULL</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_152 summon Refer-a-Friend</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>153</p></td>
</tr>
<tr class="odd">
<td><p>EffectCreateTamedPet</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CREATE_TAMED_PET misc value is creature entry</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>154</p></td>
</tr>
<tr class="odd">
<td><p>EffectDiscoverTaxi</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_DISCOVER_TAXI</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>155</p></td>
</tr>
<tr class="odd">
<td><p>EffectTitanGrip</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TITAN_GRIP Allows you to equip two-handed axes, maces and swords in one hand, but you attack $49152s1% slower than normal.</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>156</p></td>
</tr>
<tr class="odd">
<td><p>EffectEnchantItemPrismatic</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ENCHANT_ITEM_PRISMATIC</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>157</p></td>
</tr>
<tr class="odd">
<td><p>EffectCreateItem2</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_CREATE_ITEM_2 create item or create item template and replace by some randon spell loot item</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>158</p></td>
</tr>
<tr class="odd">
<td><p>EffectMilling</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_MILLING milling</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>159</p></td>
</tr>
<tr class="odd">
<td><p>EffectRenamePet</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_ALLOW_RENAME_PET allow rename pet once again</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>160</p></td>
</tr>
<tr class="odd">
<td><p>EffectNULL</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_160 1 spell - 45534</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>161</p></td>
</tr>
<tr class="odd">
<td><p>EffectSpecCount</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TALENT_SPEC_COUNT second talent spec (learn/revert)</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>162</p></td>
</tr>
<tr class="odd">
<td><p>EffectActivateSpec</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_TALENT_SPEC_SELECT activate primary/secondary spec</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>163</p></td>
</tr>
<tr class="odd">
<td><p>EffectNULL</p></td>
</tr>
<tr class="even">
<td><p>unused</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
<tr class="even">
<td><p>164</p></td>
</tr>
<tr class="odd">
<td><p>EffectRemoveAura</p></td>
</tr>
<tr class="even">
<td><p>SPELL_EFFECT_REMOVE_AURA</p></td>
</tr>
<tr class="odd">
<td><p>-</p></td>
</tr>
</tbody>
</table>

/td-EffectSkinPlayerCorpseconfluenceTdtrp
