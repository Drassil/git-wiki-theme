
## **How to add a module**


1. Get the Module From this website [http://www.azerothcore.org/modules-catalogue/](http://www.azerothcore.org/modules-catalogue/)
2. Clone it, or download.
3. I'll use this for Exmple: [http://www.azerothcore.org/modules-catalogue/details.html?id=177019524](http://www.azerothcore.org/modules-catalogue/details.html?id=177019524).
4. Once you downloaded it or cloned: ( Extract it, you will have than Folder looks like this :
[[/images/1.png]]


5. Copy this folder you will have to paste it in next steps:
[[images/2.png]]

6. Now go in your AzerothCore folder in my case it's: C:\azerothcore-wotlk-master

7. When you are there, you will see there folder named modules like on this image:
[[images/3.png]]

8. Open that folder modules -> It will look like this :
[[images/4.png]]

9. Paste there your downloaded module ( That we use in step 4., in my case we use : NPC Services Module
And it will look like this when you paste it there :
[[images/5.png]]

10. Than, open Cmake -> Press Configure
[[images/6.png]]

11. Than press Generate :
[[images/7.png]]

12. And you are done. P.S You have also to check in the module folder (SQL folder) if there is any .sql file required to be executed in your database ( Like on this image ) :
[[images/8.png]]

 than World :
[[images/9.png]]

- Yes, this module have SQL which need to be executed in your World Database :
[[images/10.png]]

- Let's do it :
13. Open it with any text editor, or run it directly : ( I'll use Editor )
This is what i have there :

```
DELETE FROM `creature_template` WHERE `entry` = 55003;
Set @NpcName = "Visual Weapon NPC",
	@NpcSubname = "AzerothCore",
	@NpcEntry = 55003,
	@NpcDisplayID = 31833,
	@NpcLevel = 80;

INSERT INTO `creature_template` (`entry`, `modelid1`, `name`, `subname`, `minlevel`, `maxlevel`, `faction`, `npcflag`, `speed_walk`, `speed_run`, `scale`, `rank`, `dmgschool`, `BaseAttackTime`, `RangeAttackTime`, `unit_class`, `unit_flags`, `unit_flags2`, `dynamicflags`, `family`, `trainer_type`, `trainer_spell`, `trainer_class`, `trainer_race`, `type`, `type_flags`, `lootid`, `pickpocketloot`, `skinloot`, `resistance1`, `resistance2`, `resistance3`, `resistance4`, `resistance5`, `resistance6`, `spell1`, `spell2`, `spell3`, `spell4`, `spell5`, `spell6`, `spell7`, `spell8`, `PetSpellDataId`, `VehicleId`, `mingold`, `maxgold`, `AIName`, `MovementType`, `HoverHeight`, `HealthModifier`, `ManaModifier`, `ArmorModifier`, `RacialLeader`, `movementId`, `RegenHealth`, `mechanic_immune_mask`, `flags_extra`, `ScriptName`, `VerifiedBuild`) VALUES 
(@NpcEntry, @NpcDisplayID, @NpcName, @NpcSubname, @NpcLevel, @NpcLevel, 35, 1, 1, 1.14286, 1, 1, 0, 2000, 2000, 2, 0, 2048, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 1, 50, 50, 1, 0, 0, 1, 0, 0, 'npc_visualweapon', 12340);
```

14. So, We have to run this query in the Database, Let's do it.
Open your DB Program ( Example : Navicat, HeidiSQL ) and run our code there, in this way :
[[images/11.png]]

15. We are done now. Go in game and spawn this NPC with command .npc add 55003
@NpcEntry = 55003 <---- This is our NPC ENTRY
