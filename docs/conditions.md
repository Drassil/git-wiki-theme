[[Database Structure|Database Structure]] > [[World-Database|World-Database]] > [[conditions|conditions]]

Column | Type | Description
--- | --- | ---
SourceTypeOrReferenceId | mediumint(8) | 
SourceGroup | mediumint(8) unsigned | 
SourceEntry | mediumint(8) | 
SourceId | int(11) | 
ElseGroup | mediumint(8) unsigned | 
ConditionTypeOrReference | mediumint(8) | 
ConditionTarget | tinyint(3) unsigned | 
ConditionValue1 | mediumint(8) unsigned | 
ConditionValue2 | mediumint(8) unsigned | 
ConditionValue3 | mediumint(8) unsigned | 
NegativeCondition | tinyint(3) unsigned | 
ErrorType | mediumint(8) unsigned | 
ErrorTextId | mediumint(8) unsigned | 
ScriptName | char(64) | 
Comment | varchar(255) | 
