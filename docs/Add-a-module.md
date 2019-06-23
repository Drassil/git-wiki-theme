
## **How to add a module**


1. Get the module from this website [http://www.azerothcore.org/modules-catalogue/](http://www.azerothcore.org/modules-catalogue/)
2. Clone it using git (recommended) or just download it
3. I'll use this for Exmple: [http://www.azerothcore.org/modules-catalogue/details.html?id=177019524](http://www.azerothcore.org/modules-catalogue/details.html?id=177019524).
4. Once you downloaded it or cloned: ( Extract it, you will have than Folder looks like this :
![Image](<https://user-images.githubusercontent.com/41213210/56865195-84df1200-69cb-11e9-8faa-7519fb3a8384.png>)


5. Copy this folder you will have to paste it in next steps:
![Image](<https://user-images.githubusercontent.com/41213210/56865210-ac35df00-69cb-11e9-87dc-6fc803cdf685.png>)

6. Now go in your AzerothCore folder (for example C:\azerothcore-wotlk-master)

7. When you are there, you will see there folder named modules like on this image:
![Image](<https://user-images.githubusercontent.com/41213210/56865235-f74ff200-69cb-11e9-81a5-39e1edcea742.png>)

8. Open that folder modules -> It will look like this :
![Image](<https://user-images.githubusercontent.com/41213210/56865263-3f6f1480-69cc-11e9-86c4-a766d7ae29ac.png>)

9. Paste there your downloaded module ( That we use in step 4., in my case we use : NPC Services Module
And it will look like this when you paste it there :
![Image](<https://user-images.githubusercontent.com/41213210/56865270-6594b480-69cc-11e9-9be1-d1437f0e7380.png>)

10. Than, open Cmake -> Press Configure
![Image](<https://user-images.githubusercontent.com/41213210/56865297-d045f000-69cc-11e9-8e16-ca84dbeda0dd.png>)

11. Than press Generate :
![Image](<https://user-images.githubusercontent.com/41213210/56865301-da67ee80-69cc-11e9-989f-36e31ddb497e.png>)

12. And you are done. P.S You have also to check in the module folder (SQL folder) if there is any .sql file required to be executed in your database ( Like on this image ) :
![Image](<https://user-images.githubusercontent.com/41213210/56865330-25820180-69cd-11e9-94f9-0741e59325a0.png>)

 then World :
![Image](<https://user-images.githubusercontent.com/41213210/56865337-3599e100-69cd-11e9-84a3-b6b7165efe5f.png>)

- this module has an SQL file which needs to be executed in your World Database :
![Image](<https://user-images.githubusercontent.com/41213210/56865346-5104ec00-69cd-11e9-8bdf-813b402a466d.png>)

- Let's do it :
13. Open it with any text editor and copy all content from the file, or run it directly : ( I'll use Editor )
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

14. So, We have to run (paste) this query in the Database, Let's do it.
Open your DB Program ( Example : Navicat, HeidiSQL ) and run our code there, in this way :
![Image](<https://user-images.githubusercontent.com/41213210/56865444-1ea7be80-69ce-11e9-9e69-384736c62351.png>)

15. We are done now. Go in game and spawn this NPC with command .npc add 55003
@NpcEntry = 55003 <---- This is our NPC ENTRY
