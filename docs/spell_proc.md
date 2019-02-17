[[Database Structure|Database Structure]] > [[World-Database|World-Database]] > [[spell_proc|spell_proc]]

Column | Type | Description
--- | --- | ---
SpellId | mediumint(8) | 
SchoolMask | tinyint(4) | 
SpellFamilyName | smallint(5) unsigned | 
SpellFamilyMask0 | int(10) unsigned | 
SpellFamilyMask1 | int(10) unsigned | 
SpellFamilyMask2 | int(10) unsigned | 
TypeMask | int(10) unsigned | 
SpellTypeMask | int(10) unsigned | 
SpellPhaseMask | int(11) | 
HitMask | int(11) | 
AttributesMask | int(10) unsigned | 
RatePerMinute | float | 
Chance | float | 
Cooldown | float unsigned | 
Charges | int(10) unsigned | 
