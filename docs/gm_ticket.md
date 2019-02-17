[[Database Structure|Database Structure]] > [[Character-Database|Character-Database]] > [[gm_ticket|gm_ticket]]

Column | Type | Description
--- | --- | ---
Id | int(10) unsigned | 
Type | tinyint(3) unsigned | 
PlayerGuid | int(10) unsigned | 
Name | varchar(12) | 
Description | text | 
CreateTime | int(10) unsigned | 
MapId | smallint(5) unsigned | 
PosX | float | 
PosY | float | 
PosZ | float | 
LastModifiedTime | int(10) unsigned | 
ClosedBy | int(10) unsigned | 
AssignedTo | int(10) unsigned | 
Comment | text | 
Response | text | 
Completed | tinyint(3) unsigned | 
Escalated | tinyint(3) unsigned | 
Viewed | tinyint(3) unsigned | 
NeedMoreHelp | tinyint(3) unsigned | 
ResolvedBy | int(10) unsigned | 
