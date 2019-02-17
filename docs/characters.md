[[Database Structure|Database Structure]] > [[Character-Database|Character-Database]] > [[characters|characters]]

Column | Type | Description
--- | --- | ---
Guid | int(10) unsigned | 
Account | int(10) unsigned | 
Name | varchar(12) | 
Race | tinyint(3) unsigned | 
Class | tinyint(3) unsigned | 
Gender | tinyint(3) unsigned | 
Level | tinyint(3) unsigned | 
Xp | int(10) unsigned | 
Money | int(10) unsigned | 
PlayerBytes | int(10) unsigned | 
PlayerBytes2 | int(10) unsigned | 
PlayerFlags | int(10) unsigned | 
Position_x | float | 
Position_y | float | 
Position_z | float | 
Map | smallint(5) unsigned | 
Instance_id | int(10) unsigned | 
Instance_mode_mask | tinyint(3) unsigned | 
Orientation | float | 
Taximask | text | 
Online | tinyint(3) unsigned | 
Cinematic | tinyint(3) unsigned | 
Totaltime | int(10) unsigned | 
Leveltime | int(10) unsigned | 
Logout_time | int(10) unsigned | 
Is_logout_resting | tinyint(3) unsigned | 
Rest_bonus | float | 
Resettalents_cost | int(10) unsigned | 
Resettalents_time | int(10) unsigned | 
Trans_x | float | 
Trans_y | float | 
Trans_z | float | 
Trans_o | float | 
Transguid | mediumint(8) unsigned | 
Extra_flags | smallint(5) unsigned | 
Stable_slots | tinyint(3) unsigned | 
At_login | smallint(5) unsigned | 
Zone | smallint(5) unsigned | 
Death_expire_time | int(10) unsigned | 
Taxi_path | text | 
ArenaPoints | int(10) unsigned | 
TotalHonorPoints | int(10) unsigned | 
TodayHonorPoints | int(10) unsigned | 
YesterdayHonorPoints | int(10) unsigned | 
TotalKills | int(10) unsigned | 
TodayKills | smallint(5) unsigned | 
YesterdayKills | smallint(5) unsigned | 
ChosenTitle | int(10) unsigned | 
KnownCurrencies | bigint(20) unsigned | 
WatchedFaction | int(10) unsigned | 
Drunk | tinyint(3) unsigned | 
Health | int(10) unsigned | 
Power1 | int(10) unsigned | 
Power2 | int(10) unsigned | 
Power3 | int(10) unsigned | 
Power4 | int(10) unsigned | 
Power5 | int(10) unsigned | 
Power6 | int(10) unsigned | 
Power7 | int(10) unsigned | 
Latency | mediumint(8) unsigned | 
TalentGroupsCount | tinyint(3) unsigned | 
ActiveTalentGroup | tinyint(3) unsigned | 
ExploredZones | longtext | 
EquipmentCache | longtext | 
AmmoId | int(10) unsigned | 
KnownTitles | longtext | 
ActionBars | tinyint(3) unsigned | 
GrantableLevels | tinyint(3) unsigned | 
DeleteInfos_Account | int(10) unsigned | 
DeleteInfos_Name | varchar(12) | 
DeleteDate | int(10) unsigned | 
