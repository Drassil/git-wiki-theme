[[Database Structure|Database Structure]] > [[World-Database|World-Database]] > [[quest_template_addon|quest_template_addon]]

Column | Type | Description
--- | --- | ---
ID | mediumint(8) unsigned | 
MaxLevel | tinyint(3) unsigned | 
AllowableClasses | int(10) unsigned | 
SourceSpellID | mediumint(8) unsigned | 
PrevQuestID | mediumint(8) | 
NextQuestID | mediumint(8) | 
ExclusiveGroup | mediumint(8) | 
RewardMailTemplateID | mediumint(8) unsigned | 
RewardMailDelay | int(10) unsigned | 
RequiredSkillID | smallint(5) unsigned | 
RequiredSkillPoints | smallint(5) unsigned | 
RequiredMinRepFaction | smallint(5) unsigned | 
RequiredMaxRepFaction | smallint(5) unsigned | 
RequiredMinRepValue | mediumint(8) | 
RequiredMaxRepValue | mediumint(8) | 
ProvidedItemCount | tinyint(3) unsigned | 
SpecialFlags | tinyint(3) unsigned | 
