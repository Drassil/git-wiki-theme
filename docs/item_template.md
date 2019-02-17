[[Database Structure|Database Structure]] > [[World-Database|World-Database]] > [[item_template|item_template]]

Column | Type | Description
--- | --- | ---
Entry | mediumint(8) unsigned | 
Class | tinyint(3) unsigned | 
Subclass | tinyint(3) unsigned | 
SoundOverrideSubclass | tinyint(3) | 
Name | varchar(255) | 
Displayid | mediumint(8) unsigned | 
Quality | tinyint(3) unsigned | 
Flags | int(10) unsigned | 
FlagsExtra | int(10) unsigned | 
BuyCount | tinyint(3) unsigned | 
BuyPrice | bigint(20) | 
SellPrice | int(10) unsigned | 
InventoryType | tinyint(3) unsigned | 
AllowableClass | int(11) | 
AllowableRace | int(11) | 
ItemLevel | smallint(5) unsigned | 
RequiredLevel | tinyint(3) unsigned | 
RequiredSkill | smallint(5) unsigned | 
RequiredSkillRank | smallint(5) unsigned | 
Requiredspell | mediumint(8) unsigned | 
Requiredhonorrank | mediumint(8) unsigned | 
RequiredCityRank | mediumint(8) unsigned | 
RequiredReputationFaction | smallint(5) unsigned | 
RequiredReputationRank | smallint(5) unsigned | 
Maxcount | int(11) | 
Stackable | int(11) | 
ContainerSlots | tinyint(3) unsigned | 
StatsCount | tinyint(3) unsigned | 
Stat_type1 | tinyint(3) unsigned | 
Stat_value1 | smallint(6) | 
Stat_type2 | tinyint(3) unsigned | 
Stat_value2 | smallint(6) | 
Stat_type3 | tinyint(3) unsigned | 
Stat_value3 | smallint(6) | 
Stat_type4 | tinyint(3) unsigned | 
Stat_value4 | smallint(6) | 
Stat_type5 | tinyint(3) unsigned | 
Stat_value5 | smallint(6) | 
Stat_type6 | tinyint(3) unsigned | 
Stat_value6 | smallint(6) | 
Stat_type7 | tinyint(3) unsigned | 
Stat_value7 | smallint(6) | 
Stat_type8 | tinyint(3) unsigned | 
Stat_value8 | smallint(6) | 
Stat_type9 | tinyint(3) unsigned | 
Stat_value9 | smallint(6) | 
Stat_type10 | tinyint(3) unsigned | 
Stat_value10 | smallint(6) | 
ScalingStatDistribution | smallint(6) | 
ScalingStatValue | int(10) unsigned | 
Dmg_min1 | float | 
Dmg_max1 | float | 
Dmg_type1 | tinyint(3) unsigned | 
Dmg_min2 | float | 
Dmg_max2 | float | 
Dmg_type2 | tinyint(3) unsigned | 
Armor | smallint(5) unsigned | 
Holy_res | tinyint(3) unsigned | 
Fire_res | tinyint(3) unsigned | 
Nature_res | tinyint(3) unsigned | 
Frost_res | tinyint(3) unsigned | 
Shadow_res | tinyint(3) unsigned | 
Arcane_res | tinyint(3) unsigned | 
Delay | smallint(5) unsigned | 
Ammo_type | tinyint(3) unsigned | 
RangedModRange | float | 
Spellid_1 | mediumint(8) | 
Spelltrigger_1 | tinyint(3) unsigned | 
Spellcharges_1 | smallint(6) | 
SpellppmRate_1 | float | 
Spellcooldown_1 | int(11) | 
Spellcategory_1 | smallint(5) unsigned | 
Spellcategorycooldown_1 | int(11) | 
Spellid_2 | mediumint(8) | 
Spelltrigger_2 | tinyint(3) unsigned | 
Spellcharges_2 | smallint(6) | 
SpellppmRate_2 | float | 
Spellcooldown_2 | int(11) | 
Spellcategory_2 | smallint(5) unsigned | 
Spellcategorycooldown_2 | int(11) | 
Spellid_3 | mediumint(8) | 
Spelltrigger_3 | tinyint(3) unsigned | 
Spellcharges_3 | smallint(6) | 
SpellppmRate_3 | float | 
Spellcooldown_3 | int(11) | 
Spellcategory_3 | smallint(5) unsigned | 
Spellcategorycooldown_3 | int(11) | 
Spellid_4 | mediumint(8) | 
Spelltrigger_4 | tinyint(3) unsigned | 
Spellcharges_4 | smallint(6) | 
SpellppmRate_4 | float | 
Spellcooldown_4 | int(11) | 
Spellcategory_4 | smallint(5) unsigned | 
Spellcategorycooldown_4 | int(11) | 
Spellid_5 | mediumint(8) | 
Spelltrigger_5 | tinyint(3) unsigned | 
Spellcharges_5 | smallint(6) | 
SpellppmRate_5 | float | 
Spellcooldown_5 | int(11) | 
Spellcategory_5 | smallint(5) unsigned | 
Spellcategorycooldown_5 | int(11) | 
Bonding | tinyint(3) unsigned | 
Description | varchar(255) | 
PageText | mediumint(8) unsigned | 
LanguageID | tinyint(3) unsigned | 
PageMaterial | tinyint(3) unsigned | 
Startquest | mediumint(8) unsigned | 
Lockid | mediumint(8) unsigned | 
Material | tinyint(4) | 
Sheath | tinyint(3) unsigned | 
RandomProperty | mediumint(8) | 
RandomSuffix | mediumint(8) unsigned | 
Block | mediumint(8) unsigned | 
Itemset | mediumint(8) unsigned | 
MaxDurability | smallint(5) unsigned | 
Area | mediumint(8) unsigned | 
Map | smallint(6) | 
BagFamily | mediumint(8) | 
TotemCategory | mediumint(8) | 
SocketColor_1 | tinyint(4) | 
SocketContent_1 | mediumint(8) | 
SocketColor_2 | tinyint(4) | 
SocketContent_2 | mediumint(8) | 
SocketColor_3 | tinyint(4) | 
SocketContent_3 | mediumint(8) | 
SocketBonus | mediumint(8) | 
GemProperties | mediumint(8) | 
RequiredDisenchantSkill | smallint(6) | 
ArmorDamageModifier | float | 
Duration | int(10) unsigned | 
ItemLimitCategory | smallint(6) | 
HolidayId | int(11) unsigned | 
ScriptName | varchar(64) | 
DisenchantID | mediumint(8) unsigned | 
FoodType | tinyint(3) unsigned | 
MinMoneyLoot | int(10) unsigned | 
MaxMoneyLoot | int(10) unsigned | 
FlagsCustom | int(10) unsigned | 
VerifiedBuild | smallint(6) | 
