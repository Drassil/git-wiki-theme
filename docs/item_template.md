# item\_template

[<-Back-to:World](database-world.md)

**Table Structure**

Holds information on every item that exists in the game. All items are created from their template stored in this table.

(See additional information in the *ItemPrototype.h* file.)

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
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#entry">entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#class">class</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#subclass">subclass</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#soundoverridesubclass">SoundOverrideSubclass</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#name">name</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#displayid">displayid</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#quality">Quality</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#flags">Flags</a></p></td>
<td><p>bigint(20)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#flagsextra">FlagsExtra</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#buycount">BuyCount</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#buyprice">BuyPrice</a></p></td>
<td><p>bigint(20)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#sellprice">SellPrice</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#inventorytype">InventoryType</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#allowableclass">AllowableClass</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#allowablerace">AllowableRace</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#itemlevel">ItemLevel</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#requiredlevel">RequiredLevel</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#requiredskill">RequiredSkill</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#requiredskillrank">RequiredSkillRank</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#requiredspell">requiredspell</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#requiredhonorrank">requiredhonorrank</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#requiredcityrank">RequiredCityRank</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#requiredreputationfaction">RequiredReputationFaction</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#requiredreputationrank">RequiredReputationRank</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#maxcount">maxcount</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stackable">stackable</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#containerslots">ContainerSlots</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#statscount">StatsCount</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type1</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value1</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type2</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value2</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type3</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value3</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type4</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value4</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type5</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value5</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type6</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value6</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type7</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value7</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type8</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value8</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type9</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value9</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#stat_type">stat_type10</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#stat_value">stat_value10</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#scalingstatdistribution">ScalingStatDistribution</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#scalingstatvalue">ScalingStatValue</a></p></td>
<td><p>int(6)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#dmg_min">dmg_min1</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#dmg_max">dmg_max1</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#dmg_type">dmg_type1</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#dmg_min">dmg_min2</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#dmg_max">dmg_max2</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#dmg_type">dmg_type2</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#armor">armor</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#holy_res">holy_res</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#fire_res">fire_res</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#nature_res">nature_res</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#frost_res">frost_res</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#shadow_res">shadow_res</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#arcane_res">arcane_res</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#delay">delay</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>1000</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#ammo_type">ammo_type</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#rangedmodrange">RangedModRange</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellid">spellid_1</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spelltrigger">spelltrigger_1</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcharges">spellcharges_1</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellppmrate">spellppmRate_1</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcooldown">spellcooldown_1</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellcategory">spellcategory_1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcategorycooldown">spellcategorycooldown_1</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellid">spellid_2</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spelltrigger">spelltrigger_2</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellcharges">spellcharges_2</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellppmrate">spellppmRate_2</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellcooldown">spellcooldown_2</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p>
<p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcategory">spellcategory_2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellcategorycooldown">spellcategorycooldown_2</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellid">spellid_3</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spelltrigger">spelltrigger_3</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcharges">spellcharges_3</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellppmrate">spellppmRate_3</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcooldown">spellcooldown_3</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellcategory">spellcategory_3</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcategorycooldown">spellcategorycooldown_3</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellid">spellid_4</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spelltrigger">spelltrigger_4</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellcharges">spellcharges_4</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellppmrate">spellppmRate_4</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellcooldown">spellcooldown_4</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcategory">spellcategory_4</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellcategorycooldown">spellcategorycooldown_4</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellid">spellid_5</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spelltrigger">spelltrigger_5</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcharges">spellcharges_5</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellppmrate">spellppmRate_5</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcooldown">spellcooldown_5</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spellcategory">spellcategory_5</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#spellcategorycooldown">spellcategorycooldown_5</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#bonding">bonding</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#description">description</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#pagetext">PageText</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#languageid">LanguageID</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#pagematerial">PageMaterial</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#startquest">startquest</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#lockid">lockid</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#material">Material</a></p></td>
<td><p>tinyint(4)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#sheath">sheath</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#randomproperty">RandomProperty</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#randomsuffix">RandomSuffix</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#block">block</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#itemset">itemset</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#maxdurability">MaxDurability</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#area">area</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#map">Map</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#bagfamily">BagFamily</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#totemcategory">TotemCategory</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#socketcolor">socketColor_1</a></p></td>
<td><p>tinyint(4)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#socketcontent">socketContent_1</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#socketcolor">socketColor_2</a></p></td>
<td><p>tinyint(4)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#socketcontent">socketContent_2</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#socketcolor">socketColor_3</a></p></td>
<td><p>tinyint(4)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#socketcontent">socketContent_3</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#socketbonus">socketBonus</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#gemproperties">GemProperties</a></p></td>
<td><p>mediumint(9)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#requireddisenchantskill">RequiredDisenchantSkill</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>-1</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#armordamagemodifier">ArmorDamageModifier</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#duration">duration</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p>Duration in seconds</p></td>
</tr>
<tr class="even">
<td><p><a href="#itemlimitcategory">ItemLimitCategory</a></p></td>
<td><p>smallint(6)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#holidayid">HolidayId</a></p></td>
<td><p>int(11)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#scriptname">ScriptName</a></p></td>
<td><p>varchar(64)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#disenchantid">DisenchantID</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#foodtype">FoodType</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#minmoneyloot">minMoneyLoot</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#maxmoneyloot">maxMoneyLoot</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#flagscustom">flagsCustom</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#verifiedbuild">VerifiedBuild (WDBVerified)</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>1</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Field Descriptions**

### entry

The unique ID of the item.

### class

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Name</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Consumable</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Container</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Weapon</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Gem</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Armor</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Reagent</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Projectile</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Trade Goods</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Generic(OBSOLETE)</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>Recipe</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>Money(OBSOLETE)</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>Quiver</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>Quest</p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
<td><p>Key</p></td>
</tr>
<tr class="odd">
<td><p>14</p></td>
<td><p>Permanent(OBSOLETE)</p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>Miscellaneous</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>Glyph</p></td>
</tr>
</tbody>
</table>

### subclass

The following table lists all available subclass and class combinations and the subclass name.

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Class ID</p></th>
<th><p>Subclass ID</p></th>
<th><p>Subclass Name</p></th>
<th><p>Comments</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>Consumable</p></td>
<td><p>Usability in combat is decided by the spell assigned.</p></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>Potion</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>0</p></td>
<td><p>2</p></td>
<td><p>Elixir</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>3</p></td>
<td><p>Flask</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>Scroll</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>5</p></td>
<td><p>Food &amp; Drink</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>0</p></td>
<td><p>6</p></td>
<td><p>Item Enhancement</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>Bandage</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>Other</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>Bag</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>Soul Bag</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>2</p></td>
<td><p>Herb Bag</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>3</p></td>
<td><p>Enchanting Bag</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>4</p></td>
<td><p>Engineering Bag</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>5</p></td>
<td><p>Gem Bag</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>6</p></td>
<td><p>Mining Bag</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>7</p></td>
<td><p>Leatherworking Bag</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>8</p></td>
<td><p>Inscription Bag</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>Axe</p></td>
<td><p>One handed</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>1</p></td>
<td><p>Axe</p></td>
<td><p>Two handed</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>Bow</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>3</p></td>
<td><p>Gun</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>Mace</p></td>
<td><p>One handed</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>5</p></td>
<td><p>Mace</p></td>
<td><p>Two handed</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>6</p></td>
<td><p>Polearm</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>7</p></td>
<td><p>Sword</p></td>
<td><p>One handed</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>8</p></td>
<td><p>Sword</p></td>
<td><p>Two handed</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>9</p></td>
<td><p>Obsolete</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>10</p></td>
<td><p>Staff</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>11</p></td>
<td><p>Exotic</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>12</p></td>
<td><p>Exotic</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>13</p></td>
<td><p>Fist Weapon</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>14</p></td>
<td><p>Miscellaneous</p></td>
<td><p>(Blacksmith Hammer, Mining Pick, etc.)</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>15</p></td>
<td><p>Dagger</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>16</p></td>
<td><p>Thrown</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>17</p></td>
<td><p>Spear</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>18</p></td>
<td><p>Crossbow</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>19</p></td>
<td><p>Wand</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>20</p></td>
<td><p>Fishing Pole</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>0</p></td>
<td><p>Red</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>1</p></td>
<td><p>Blue</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>Yellow</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>3</p></td>
<td><p>Purple</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>4</p></td>
<td><p>Green</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>5</p></td>
<td><p>Orange</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>6</p></td>
<td><p>Meta</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>7</p></td>
<td><p>Simple</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>8</p></td>
<td><p>Prismatic</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>Miscellaneous</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>1</p></td>
<td><p>Cloth</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>Leather</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>3</p></td>
<td><p>Mail</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>Plate</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>5</p></td>
<td><p>Buckler(OBSOLETE)</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>6</p></td>
<td><p>Shield</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>7</p></td>
<td><p>Libram</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>8</p></td>
<td><p>Idol</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>9</p></td>
<td><p>Totem</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>10</p></td>
<td><p>Sigil</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>0</p></td>
<td><p>Reagent</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>Wand(OBSOLETE)</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>1</p></td>
<td><p>Bolt(OBSOLETE)</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>2</p></td>
<td><p>Arrow</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>3</p></td>
<td><p>Bullet</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>4</p></td>
<td><p>Thrown(OBSOLETE)</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>Trade Goods</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>1</p></td>
<td><p>Parts</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>2</p></td>
<td><p>Explosives</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>3</p></td>
<td><p>Devices</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>4</p></td>
<td><p>Jewelcrafting</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>5</p></td>
<td><p>Cloth</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>6</p></td>
<td><p>Leather</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>7</p></td>
<td><p>Metal &amp; Stone</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>8</p></td>
<td><p>Meat</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>9</p></td>
<td><p>Herb</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>10</p></td>
<td><p>Elemental</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>11</p></td>
<td><p>Other</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>12</p></td>
<td><p>Enchanting</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>13</p></td>
<td><p>Materials</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>14</p></td>
<td><p>Armor Enchantment</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>15</p></td>
<td><p>Weapon Enchantment</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>Generic(OBSOLETE)</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>Book</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>1</p></td>
<td><p>Leatherworking</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>2</p></td>
<td><p>Tailoring</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>3</p></td>
<td><p>Engineering</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>4</p></td>
<td><p>Blacksmithing</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>5</p></td>
<td><p>Cooking</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>6</p></td>
<td><p>Alchemy</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>7</p></td>
<td><p>First Aid</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>8</p></td>
<td><p>Enchanting</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>9</p></td>
<td><p>Fishing</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>10</p></td>
<td><p>Jewelcrafting</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>10</p></td>
<td><p>0</p></td>
<td><p>Money(OBSOLETE)</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>11</p></td>
<td><p>0</p></td>
<td><p>Quiver(OBSOLETE)</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>1</p></td>
<td><p>Quiver(OBSOLETE)</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>11</p></td>
<td><p>2</p></td>
<td><p>Quiver</p></td>
<td><p>Can hold arrows</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>3</p></td>
<td><p>Ammo Pouch</p></td>
<td><p>Can hold bullets</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>0</p></td>
<td><p>Quest</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
<td><p>0</p></td>
<td><p>Key</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>13</p></td>
<td><p>1</p></td>
<td><p>Lockpick</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>14</p></td>
<td><p>0</p></td>
<td><p>Permanent</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>15</p></td>
<td><p>0</p></td>
<td><p>Junk</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>1</p></td>
<td><p>Reagent</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>15</p></td>
<td><p>2</p></td>
<td><p>Pet</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>3</p></td>
<td><p>Holiday</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>15</p></td>
<td><p>4</p></td>
<td><p>Other</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>5</p></td>
<td><p>Mount</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>1</p></td>
<td><p>Warrior</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>2</p></td>
<td><p>Paladin</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>3</p></td>
<td><p>Hunter</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>4</p></td>
<td><p>Rogue</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>5</p></td>
<td><p>Priest</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>6</p></td>
<td><p>Death Knight</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>7</p></td>
<td><p>Shaman</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>8</p></td>
<td><p>Mage</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>9</p></td>
<td><p>Warlock</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>11</p></td>
<td><p>Druid</p></td>
<td></td>
</tr>
</tbody>
</table>

### SoundOverrideSubclass

Weapons have special sounds on impact. This column is used to override these sounds by specifying another subclass.

For example an item with misc subclass can sound like a stave on impact by overriding the subclass here.

### name

The name of the item.

### displayid

The model ID of the item. Each model has its own icon assigned so this field controls both the model appearance and the icon.

### Quality

The quality of the item. To use the Bind to Account quality, the item must have its flags set to 134221824.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Color</p></th>
<th><p>Quality</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Grey</p></td>
<td><p>Poor</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>White</p></td>
<td><p>Common</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Green</p></td>
<td><p>Uncommon</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Blue</p></td>
<td><p>Rare</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Purple</p></td>
<td><p>Epic</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Orange</p></td>
<td><p>Legendary</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Red</p></td>
<td><p>Artifact</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Gold</p></td>
<td><p>Bind to Account</p></td>
</tr>
</tbody>
</table>

### Flags

Bitmask field that contains flags that the item has on it. As all other such fields, just add the flags together to combine them. Possible flags are listed below.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th> </th>
<th><p>Comments</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td>0x01</td>
<td><p>UNK1</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td>0x02</td>
<td><p>Conjured item</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td>0x04</td>
<td><p>Openable (can be opened by right-click)</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td>0x08</td>
<td><p>Makes green &quot;Heroic&quot; text appear on item</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td>0x010</td>
<td><p>Deprecated Item</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td>0x020</td>
<td><p>Item can not be destroyed, except by using spell (item can be reagent for spell)</p></td>
</tr>
<tr class="odd">
<td><p>64</p></td>
<td>0x040</td>
<td><p>UNK2</p></td>
</tr>
<tr class="even">
<td>128</td>
<td>0x080</td>
<td>No default 30 seconds cooldown when equipped (for "On use" items)</td>
</tr>
<tr class="odd">
<td>256</td>
<td>0x0100</td>
<td>UNK3</td>
</tr>
<tr class="even">
<td><p>512</p></td>
<td>0x0200</td>
<td><p>Wrapper : Item can wrap other items</p></td>
</tr>
<tr class="odd">
<td><p>1024</p></td>
<td>0x0400</td>
<td><p>UNK4</p></td>
</tr>
<tr class="even">
<td><p>2048</p></td>
<td>0x0800</td>
<td><p>Item is party loot and can be looted by all</p></td>
</tr>
<tr class="odd">
<td><p>4096</p></td>
<td>0x01000</td>
<td><p>Item is refundable</p></td>
</tr>
<tr class="even">
<td><p>8192</p></td>
<td>0x02000</td>
<td><p>Charter (Arena or Guild)</p></td>
</tr>
<tr class="odd">
<td>16384</td>
<td>0x04000</td>
<td>UNK5 // comment in code : Only readable items have this (but not all)</td>
</tr>
<tr class="even">
<td><p>32768</p></td>
<td>0x08000</td>
<td><p>UNK6</p></td>
</tr>
<tr class="odd">
<td>65536</td>
<td>0x010000</td>
<td>UNK7</td>
</tr>
<tr class="even">
<td>131072</td>
<td>0x020000</td>
<td>UNK8</td>
</tr>
<tr class="odd">
<td>262144</td>
<td>0x040000</td>
<td><p>Item can be prospected</p></td>
</tr>
<tr class="even">
<td><p>524288</p></td>
<td>0x080000</td>
<td><p>Unique equipped (player can only have one equipped at the same time but as many as he wants in his bags, if maxcount = 1, it will still display Unique-Equipped)</p></td>
</tr>
<tr class="odd">
<td>1048576</td>
<td>0x0100000</td>
<td>UNK9</td>
</tr>
<tr class="even">
<td>2097152</td>
<td>0x0200000</td>
<td>Item can be used during arena match</td>
</tr>
<tr class="odd">
<td><p>4194304</p></td>
<td>0x0400000</td>
<td><p>Throwable (for tooltip ingame)</p></td>
</tr>
<tr class="even">
<td><p>8388608</p></td>
<td>0x0800000</td>
<td><p>Item can be used in shapeshift forms</p></td>
</tr>
<tr class="odd">
<td>16777216</td>
<td>0x01000000</td>
<td>UNK10</td>
</tr>
<tr class="even">
<td>33554432</td>
<td>0x02000000</td>
<td>Profession recipes: can only be looted if you meet requirements and don't already know it</td>
</tr>
<tr class="odd">
<td>67108864</td>
<td>0x04000000</td>
<td>Item cannot be used in arena</td>
</tr>
<tr class="even">
<td><p>134217728</p></td>
<td>0x08000000</td>
<td><p>Bind to Account (Set Quality = 7 for the corresponding color. Might require to set Bonding = 1)</p></td>
</tr>
<tr class="odd">
<td><p>268435456</p></td>
<td>0x010000000</td>
<td><p>Spell is cast with triggered flag</p></td>
</tr>
<tr class="even">
<td><p>536870912</p></td>
<td>0x020000000</td>
<td><p>Millable</p></td>
</tr>
<tr class="odd">
<td>1073741824</td>
<td>0x040000000</td>
<td>UNK11</td>
</tr>
<tr class="even">
<td><p>2147483648</p></td>
<td>0x080000000</td>
<td><p>Bind on Pickup tradeable (only few quest items have this flag and it doesn't seem to bind at all)</p></td>
</tr>
</tbody>
</table>

### FlagsExtra

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th> </th>
<th><p>Comments</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td>0x01</td>
<td><p>Horde Only</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td>0x02</td>
<td><p>Alliance Only</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td>0x04</td>
<td><p>When item uses ExtendedCost in npc_vendor, gold is also required</p></td>
</tr>
<tr class="even">
<td>256
<p> </p></td>
<td>0x0100</td>
<td>Makes need roll for this item disabled</td>
</tr>
<tr class="odd">
<td><p>512</p></td>
<td>0x0200</td>
<td><p>NEED_ROLL_DISABLED</p></td>
</tr>
<tr class="even">
<td>16384</td>
<td>0x04000</td>
<td>HAS_NORMAL_PRICE</td>
</tr>
<tr class="odd">
<td>131072</td>
<td>0x020000</td>
<td>BNET_ACCOUNT_BOUND (seems useless on 3.3.5a)</td>
</tr>
<tr class="even">
<td>2097152</td>
<td>0x0200000</td>
<td>CANNOT_BE_TRANSMOG</td>
</tr>
<tr class="odd">
<td>4194304</td>
<td>0x0400000</td>
<td>CANNOT_TRANSMOG</td>
</tr>
<tr class="even">
<td>8388608</td>
<td>0x0800000</td>
<td>CAN_TRANSMOG</td>
</tr>
</tbody>
</table>

### BuyCount

The size of the item stack when sold by vendors. Also if a vendor has limited copies of this item available, everytime the vendor list is refreshed (See [npc\_vendor.incrtime](http://www.azerothcore.org/wiki/npc_vendor#incrtime)), the number of copies increases by this number.

### BuyPrice

The price required to pay to buy this item from a vendor, in copper.

### SellPrice

The price that the vendor will pay you for the item when you sell it and if it is possible to be sold, in copper. Put in 0 if the item cannot be sold to a vendor.

### InventoryType

In what slot the item can be equipped.

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Slot Name</p></th>
<th><p>ID</p></th>
<th><p>Slot Name</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Non equipable</p></td>
<td><p>15</p></td>
<td><p>Ranged (Bows) (see also Ranged right = 26)</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Head</p></td>
<td><p>16</p></td>
<td><p>Back</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Neck</p></td>
<td><p>17</p></td>
<td><p>Two-Hand</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Shoulder</p></td>
<td><p>18</p></td>
<td><p>Bag</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Shirt</p></td>
<td><p>19</p></td>
<td><p>Tabard</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Chest (see also Robe = 20)</p></td>
<td><p>20</p></td>
<td><p>Robe (see also Chest = 5)</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Waist</p></td>
<td><p>21</p></td>
<td><p>Main hand</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Legs</p></td>
<td><p>22</p></td>
<td><p>Off Hand weapons (see also One-Hand = 13)</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Feet</p></td>
<td><p>23</p></td>
<td><p>Held in Off-Hand (tome, cane, flowers, torches, orbs etc... See also Off-Hand = 22)</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>Wrists</p></td>
<td><p>24</p></td>
<td><p>Ammo</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>Hands</p></td>
<td><p>25</p></td>
<td><p>Thrown</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>Finger</p></td>
<td><p>26</p></td>
<td><p>Ranged right (Wands, Guns) (see also Ranged = 15)</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>Trinket</p></td>
<td><p>27</p></td>
<td><p>Quiver</p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
<td><p>One-Hand (not to confuse with Off-Hand = 22)</p></td>
<td><p>28</p></td>
<td><p>Relic</p></td>
</tr>
<tr class="odd">
<td><p>14</p></td>
<td><p>Shield</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

### AllowableClass

Bitmask controlling which classes can use this item. Add ids together to combine class possibilities. Use -1 if all classes can use it.

See the [ChrClasses DBC file](ChrClasses) for the IDs of the classes.

### AllowableRace

Bitmask controlling which races can use this item. Add ids together to combine race possibilities. Use -1 for all races.

See the [ChrRaces DBC file](ChrRaces) for the IDs of the races.

### ItemLevel

Base item level.

### RequiredLevel

The level that a player must be to equip the item.

### RequiredSkill

The skill required to use this item. See the [SkillLine DBC file](SkillLine) for IDs which can be used here.

### RequiredSkillRank

The required skill rank the player needs to have to use this item.

### requiredspell

The required spell that the player needs to have to use this item.

### requiredhonorrank

The honor rank the player needs to have to use this item.

### RequiredCityRank

Its use is unknown. All items have 0.

### RequiredReputationFaction

The faction template ID  of the faction that the player has to have a certain ranking with. If this value is 0, the faction of the seller of the item is used.

See the [Faction DBC file](Faction) for the IDs of all of the factions.

### RequiredReputationRank

The rank the player has to have with the faction from [RequiredReputationFaction](#item_template-RequiredReputationFaction).

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Rank</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Hated</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Hostile</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Unfriendly</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Neutral</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Friendly</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Honored</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Revered</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Exalted</p></td>
</tr>
</tbody>
</table>

### maxcount

Maximum number of copies of this item which a player can have. Use 0 for infinite.

### stackable

The number of copies of this item that can be stacked in the same slot.

### ContainerSlots

If the item is a bag, this field controls the number of slots the bag has.

### StatsCount

When an item has entries in [stat\_type](#item_template-stat_type), this must be updated to display those entries
(Unknown how this works)

### stat\_type

The type of stat to modify.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Stat Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>ITEM_MOD_MANA</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>ITEM_MOD_HEALTH</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>ITEM_MOD_AGILITY</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>ITEM_MOD_STRENGTH</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>ITEM_MOD_INTELLECT</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>ITEM_MOD_SPIRIT</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>ITEM_MOD_STAMINA</p></td>
</tr>
<tr class="even">
<td><p>12</p></td>
<td><p>ITEM_MOD_DEFENSE_SKILL_RATING</p></td>
</tr>
<tr class="odd">
<td><p>13</p></td>
<td><p>ITEM_MOD_DODGE_RATING</p></td>
</tr>
<tr class="even">
<td><p>14</p></td>
<td><p>ITEM_MOD_PARRY_RATING</p></td>
</tr>
<tr class="odd">
<td><p>15</p></td>
<td><p>ITEM_MOD_BLOCK_RATING</p></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>ITEM_MOD_HIT_MELEE_RATING</p></td>
</tr>
<tr class="odd">
<td><p>17</p></td>
<td><p>ITEM_MOD_HIT_RANGED_RATING</p></td>
</tr>
<tr class="even">
<td><p>18</p></td>
<td><p>ITEM_MOD_HIT_SPELL_RATING</p></td>
</tr>
<tr class="odd">
<td><p>19</p></td>
<td><p>ITEM_MOD_CRIT_MELEE_RATING</p></td>
</tr>
<tr class="even">
<td><p>20</p></td>
<td><p>ITEM_MOD_CRIT_RANGED_RATING</p></td>
</tr>
<tr class="odd">
<td><p>21</p></td>
<td><p>ITEM_MOD_CRIT_SPELL_RATING</p></td>
</tr>
<tr class="even">
<td><p>22</p></td>
<td><p>ITEM_MOD_HIT_TAKEN_MELEE_RATING</p></td>
</tr>
<tr class="odd">
<td><p>23</p></td>
<td><p>ITEM_MOD_HIT_TAKEN_RANGED_RATING</p></td>
</tr>
<tr class="even">
<td><p>24</p></td>
<td><p>ITEM_MOD_HIT_TAKEN_SPELL_RATING</p></td>
</tr>
<tr class="odd">
<td><p>25</p></td>
<td><p>ITEM_MOD_CRIT_TAKEN_MELEE_RATING</p></td>
</tr>
<tr class="even">
<td><p>26</p></td>
<td><p>ITEM_MOD_CRIT_TAKEN_RANGED_RATING</p></td>
</tr>
<tr class="odd">
<td><p>27</p></td>
<td><p>ITEM_MOD_CRIT_TAKEN_SPELL_RATING</p></td>
</tr>
<tr class="even">
<td><p>28</p></td>
<td><p>ITEM_MOD_HASTE_MELEE_RATING</p></td>
</tr>
<tr class="odd">
<td><p>29</p></td>
<td><p>ITEM_MOD_HASTE_RANGED_RATING</p></td>
</tr>
<tr class="even">
<td><p>30</p></td>
<td><p>ITEM_MOD_HASTE_SPELL_RATING</p></td>
</tr>
<tr class="odd">
<td><p>31</p></td>
<td><p>ITEM_MOD_HIT_RATING</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td><p>ITEM_MOD_CRIT_RATING</p></td>
</tr>
<tr class="odd">
<td><p>33</p></td>
<td><p>ITEM_MOD_HIT_TAKEN_RATING</p></td>
</tr>
<tr class="even">
<td><p>34</p></td>
<td><p>ITEM_MOD_CRIT_TAKEN_RATING</p></td>
</tr>
<tr class="odd">
<td><p>35</p></td>
<td><p>ITEM_MOD_RESILIENCE_RATING</p></td>
</tr>
<tr class="even">
<td><p>36</p></td>
<td><p>ITEM_MOD_HASTE_RATING</p></td>
</tr>
<tr class="odd">
<td><p>37</p></td>
<td><p>ITEM_MOD_EXPERTISE_RATING</p></td>
</tr>
<tr class="even">
<td><p>38</p></td>
<td><p>ITEM_MOD_ATTACK_POWER</p></td>
</tr>
<tr class="odd">
<td><p>39</p></td>
<td><p>ITEM_MOD_RANGED_ATTACK_POWER</p></td>
</tr>
<tr class="even">
<td><p>40</p></td>
<td><p>ITEM_MOD_FERAL_ATTACK_POWER (not used as of 3.3)</p></td>
</tr>
<tr class="odd">
<td><p>41</p></td>
<td><p>ITEM_MOD_SPELL_HEALING_DONE</p></td>
</tr>
<tr class="even">
<td><p>42</p></td>
<td><p>ITEM_MOD_SPELL_DAMAGE_DONE</p></td>
</tr>
<tr class="odd">
<td><p>43</p></td>
<td><p>ITEM_MOD_MANA_REGENERATION</p></td>
</tr>
<tr class="even">
<td><p>44</p></td>
<td><p>ITEM_MOD_ARMOR_PENETRATION_RATING</p></td>
</tr>
<tr class="odd">
<td><p>45</p></td>
<td><p>ITEM_MOD_SPELL_POWER</p></td>
</tr>
<tr class="even">
<td><p>46</p></td>
<td><p>ITEM_MOD_ HEALTH_REGEN</p></td>
</tr>
<tr class="odd">
<td><p>47</p></td>
<td><p>ITEM_MOD_SPELL_PENETRATION</p></td>
</tr>
<tr class="even">
<td><p>48</p></td>
<td><p>ITEM_MOD_BLOCK_VALUE</p></td>
</tr>
</tbody>
</table>

### stat\_value

The value to change the stat type to.

### ScalingStatDistribution

Similar to Static Stats these are the Stats that grow along with the users level (mainly heirloom leveling gear)
use like static stats

### ScalingStatValue

Final (level 80) value of the scaling-stat

### dmg\_min

The minimum damage of the item.

### dmg\_max

The maximum damage of the item.

### dmg\_type

The damage type that the item uses.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Damage Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Physical</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Holy</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Fire</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Nature</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Frost</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Shadow</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Arcane</p></td>
</tr>
</tbody>
</table>

### armor

The armor value of the item.

### holy\_res

Holy resistance.

### fire\_res

Fire resistance.

### nature\_res

Nature resistance.

### frost\_res

Frost resistance.

### shadow\_res

Shadow resistance.

### arcane\_res

Arcane resistance.

### delay

The time in milliseconds between successive hits.

### ammo\_type

The type of ammunition the item uses. Arrows = 2; Bullets = 3

### RangedModRange

Range Modifier for bows/guns/crossbows:

Default range is somewhere between 0.3 and 0.4 yards,

all blizzard ranged weapons have RangedModRange100

### spellid

The spell ID of the spell that the item can cast or trigger.

### spelltrigger

The type of trigger for the spell.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Trigger Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Use</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>On Equip</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Chance on Hit</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Soulstone</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>Use with no delay</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>Learn Spell ID</p></td>
</tr>
</tbody>
</table>

### spellcharges

The number of times that the item can cast the spell. If 0, then infinite charges are possible. If negative, then after the number of charges is depleted, the item is deleted as well. If positive, then the item is not deleted after all the charges are spent.

### spellppmRate

The proc per minute rate controlling how often the spell is triggered (if [\#spelltrigger](#item_template-spelltrigger) == 2).

### spellcooldown

The cooldown in milliseconds for the specific spell controlling how often the spell can be used. Use -1 to use the default spell cooldown. Note: this is not the "internal cooldown" of procs commonly found on items such as trinkets with "Chance on hit" effects.

### spellcategory

The category that the spell is in.

### spellcategorycooldown

The cooldown time in milliseconds that is applied to all other spells in the category that the triggered spell is also in. Use -1 to use the default spell cooldown.

### bonding

The bonding for the item.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Bonding Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>No bounds</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Binds when picked up</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Binds when equipped</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Binds when used</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Quest item</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Quest Item1</p></td>
</tr>
</tbody>
</table>

### description

The description that appears in orange letters at the bottom of the item tooltip.

### PageText

The ID referring to the text that the item will show (if it is a book or a letter, etc). The item will have a magnifying glass cursor in the game and will show the text when right-clicked. See [page\_text.entry](http://www.azerothcore.org/wiki/page_text#entry)

### LanguageID

The language that the item text is written in.

See the [Languages DBC file](Languages) for the IDs of all of the languages.

### PageMaterial

The background texture that appears in the page text window.

See the [PageTextMaterial DBC file](PageTextMaterial) for the IDs of all of the material types.

### startquest

The ID of the quest that this item will start if right-clicked. See [quest\_template.id](http://www.azerothcore.org/wiki/quest_template#id)

### lockid

The lock entry ID that this item (which serves as a key) is tied to. This field is used in key-door mechanics.

See the [Lock DBC file](Lock).

### Material

The material that the item is made of. The value here affects the sound that the item makes when moved. Use -1 for consumable items like food, reagents, etc.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Material</p></th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>-1</p></td>
<td><p>Consumables</p></td>
<td>Food, reagents, etc...</td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>Not Defined</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>Metal</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Wood</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>Liquid</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Jewelry</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>Chain</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>Plate</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>Cloth</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>Leather</p></td>
<td> </td>
</tr>
</tbody>
</table>

### sheath

Controls how the item is put away on the character. Press the 'Z' hotkey to sheath and unsheathe your weapons.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Type</p></th>
<th><p>Position</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>Two Handed Weapon</p></td>
<td><p>Diagonally across the back pointing downwards.</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Staff</p></td>
<td><p>Diagonally across the back pointing upwards.</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>One Handed</p></td>
<td><p>On the left-hand side of the character's waist.</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Shield</p></td>
<td><p>On the middle of the character's back.</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>Enchanter's Rod</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>Off hand</p></td>
<td><p>On the right-hand side of the character's waist.</p></td>
</tr>
</tbody>
</table>

### RandomProperty

The number in this field points to [item\_enchantment\_template.entry](http://www.azerothcore.org/wiki/item_enchantment_template#entry) and ties in an item's chance at having a random property attached to it when it shows up for the first time. This field and the [RandomSuffix](#item_template-RandomSuffix) field CANNOT both have non-zero values. Either one is filled, or the other. Also, the primary source for the number in this field are WDBs.

### RandomSuffix

The number in this field points to [item\_enchantment\_template.entry](http://www.azerothcore.org/wiki/item_enchantment_template#entry) and ties in an item's chance at having a random suffix attached to it when it shows up for the first time. This field and the [RandomProperty](#item_template-RandomProperty) field CANNOT both have non-zero values. Either one is filled, or the other. Also, the primary source for the number in this field are WDBs.

### block

If the item is a shield, the block chance of the shield.

### itemset

The ID of the item set that this item belongs to. To save you some time, you CAN NOT make up new item sets. Item sets are defined in the ItemSet DBC file.

### MaxDurability

The maximum durability of this item.

### area

The ID of the zone in which this item can be used.

### Map

The ID of the map in which this item can be used.

### BagFamily

If the item is a bag, this field is a bitmask controlling what types of items can be put in this bag. You can combine different types by adding up the bit numbers.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Bag Family Mask</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>None</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Arrows</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Bullets</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Soul Shards</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Leatherworking Supplies</p></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>Inscription Supplies</p></td>
</tr>
<tr class="odd">
<td><p>32</p></td>
<td><p>Herbs</p></td>
</tr>
<tr class="even">
<td><p>64</p></td>
<td><p>Enchanting Supplies</p></td>
</tr>
<tr class="odd">
<td><p>128</p></td>
<td><p>Engineering Supplies</p></td>
</tr>
<tr class="even">
<td><p>256</p></td>
<td><p>Keys</p></td>
</tr>
<tr class="odd">
<td><p>512</p></td>
<td><p>Gems</p></td>
</tr>
<tr class="even">
<td><p>1024</p></td>
<td><p>Mining Supplies</p></td>
</tr>
<tr class="odd">
<td><p>2048</p></td>
<td><p>Soulbound Equipment</p></td>
</tr>
<tr class="even">
<td><p>4096</p></td>
<td><p>Vanity Pets</p></td>
</tr>
<tr class="odd">
<td><p>8192</p></td>
<td><p>Currency Tokens</p></td>
</tr>
<tr class="even">
<td><p>16384</p></td>
<td><p>Quest Items</p></td>
</tr>
</tbody>
</table>

### TotemCategory

Corresponds to the ID in the [TotemCategory DBC file](TotemCategory).

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

### socketColor

The color of the socket that can be placed in this item.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Color</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>Meta</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Red</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Yellow</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>Blue</p></td>
</tr>
</tbody>
</table>

### socketContent

Amount of Gems of SocketColor1

### socketBonus

commonly used socket bonus IDs

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Effect</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>3312</p></td>
<td><p>+8 Strength</p></td>
</tr>
<tr class="even">
<td><p>3313</p></td>
<td><p>+8 Agility</p></td>
</tr>
<tr class="odd">
<td><p>3305</p></td>
<td><p>+12 Stamina</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>+8 Intellect</p></td>
</tr>
<tr class="odd">
<td><p>2872</p></td>
<td><p>+9 Healing</p></td>
</tr>
<tr class="even">
<td><p>3753</p></td>
<td><p>+9 Spell Power</p></td>
</tr>
<tr class="odd">
<td><p>3877</p></td>
<td><p>+16 Attack Power</p></td>
</tr>
</tbody>
</table>

### GemProperties

The value here corresponds to the ID in GemProperties.dbc.

### RequiredDisenchantSkill

The required proficiency in disenchanting that the player needs to have to be able to disenchant this item.

### ArmorDamageModifier

`field-no-description|76`

### duration

The duration of the item in seconds ingame time.
Set ITEM\_FLAGS\_CU\_DURATION\_REAL\_TIME in *flagsCustom* for real time. In that case the item duration will tick even if player is offline.

### ItemLimitCategory

`field-no-description|78`

### HolidayId

See the [Holidays DBC file](Holidays) for the IDs of all of the holidays.

### ScriptName

The name of the script that the item should use. There is no 'internalitemhandler' or 'internalitemhanler' script so trinity will ignore any such values in this field.

### DisenchantID

The disenchant loot template ID. See [disenchant\_loot\_template.entry](http://www.azerothcore.org/wiki/loot_template#loot_template-Entry)

### FoodType

If this item is a food type item, this field defines what type of food it is for hunters who want to feed their pets. It controls in what diet this food item falls in.

NOTE: Raw meat and fish is not the same as regular meat and fish. It seems that the last two types of diets include grey "poor" types of food that players have no use for but some pets seem to be able to eat. Also, those food types appeared in TBC so most likely only TBC pets will have those types of diets.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>Meat</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Fish</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>Cheese</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Bread</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>Fungus</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>Fruit</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>Raw Meat</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>Raw Fish</p></td>
</tr>
</tbody>
</table>

### minMoneyLoot

If the item is a container that can contain money, then this field defines the minimum coinage held in this container, in copper.

### maxMoneyLoot

If the item is a container that can contain money, then this field defines the maximum coinage held in this container, in copper.

### flagsCustom

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th><p>Name</p></th>
<th><p>Comment</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>ITEM_FLAGS_CU_DURATION_REAL_TIME</p></td>
<td><p>Item duration will tick even if player is offline</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>ITEM_FLAGS_CU_IGNORE_QUEST_STATUS</p></td>
<td><p>No quest status will be checked when this item drops</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>ITEM_FLAGS_CU_FOLLOW_LOOT_RULES</p></td>
<td><p>Item will always follow group/master/need before greed looting rules</p></td>
</tr>
</tbody>
</table>

### VerifiedBuild

`(WDBVerified)` Set by TrinityCore developers.
