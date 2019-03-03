# loot\_template

[<-Back-to:World](database-world.md)

# Tables**: \***\_loot\_template

## General

Well, according to vocabulary the meaning of the word "loot" is good for corpse loot and may be for some gameobjects like chests but quite unfit for fishing "loot". Nevermind. We will use term "loot" here as "a set of items generated on an event for a player" and "loot definition" as "a set of rules for loot generation". And forget about vocabulary for a while.

This table format is used for 12 different tables to generate different loot items for different things. The 12 tables are creature\_loot\_template, disenchant\_loot\_template, fishing\_loot\_template, gameobject\_loot\_template, item\_loot\_template, pickpocketing\_loot\_template, prospecting\_loot\_template, skinning\_loot\_template, quest\_mail\_loot\_template, reference\_loot\_template, milling\_loot\_template, spell\_loot\_template. The general description here is valid for all 12 because the loot system is the same for all eleven.

Loot templates define only items in the loot. See comments about money drop in corpse, pickpocketing and luggage loot in [creature\_template](creature_template) and [item\_template](item_template).

## Structure

|                                              |                    |          |         |             |           |
|----------------------------------------------|--------------------|----------|---------|-------------|-----------|
| **Field**                                    | **Type**           | **Null** | **Key** | **Default** | **Extra** |
| [Entry](#loot_template-Entry)                | mediumint unsigned | NO       | PRI     | 0           |           |
| [Item](#loot_template-Item)                  | mediumint unsigned | NO       | PRI     | 0           |           |
| Reference                                    | mediumint unsigned | NO       |         | 0           |           |
| [Chance](#loot_template-ChanceOrQuestChance) | float              | NO       |         | 100         |           |
| QuestRequired                                | bool               | NO       |         | 0           |           |
| [LootMode](#loot_template-LootMode)          | smallint           | NO       |         | 1           |           |
| [GroupId](#loot_template-GroupId)            | tinyint            | NO       |         | 0           |           |
| [MinCount](#loot_template-MinCountOrRef)     | mediumint          | NO       |         | 1           |           |
| [MaxCount](#loot_template-MaxCount)          | tinyint unsigned   | NO       |         | 1           |           |
| Comment                                      | varchar            |          |         |             |           |

 

## Relations

The 11 tables have different relations with other DB tables.

| Loot table                    | Field                         | Relation                                                                    | Related table                                                                 | Field                                                                                                        | Comment                                                                                                                                                  |
|-------------------------------|-------------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| fishing\_loot\_template       | no relation                   | [entry](#loot_template-entry) is linked with ID of the fishing zone or area |                                                                               |                                                                                                              |                                                                                                                                                          |
| creature\_loot\_template      | [entry](#loot_template-entry) | many &lt;- many                                                             | [creature\_template](creature_template)     | [lootid](creature_template#creature_template-lootid)                       |                                                                                                                                                          |
| gameobject\_loot\_template    | [entry](#loot_template-entry) | many &lt;- many                                                             | [gameobject\_template](gameobject_template) | [data1](gameobject_template#gameobject_template-data0-23)                  | Only gameobject type 3 (GAMEOBJECT\_TYPE\_CHEST) or 25 (GAMEOBJECT\_TYPE\_FISHINGHOLE) use data1 as loot ID, for other types data1 is used in other ways |
| item\_loot\_template          | [entry](#loot_template-entry) | many &lt;- one                                                              | [item\_template](item_template)             | [entry](item_template#item_template-entry)                                 |                                                                                                                                                          |
| disenchant\_loot\_template    | [entry](#loot_template-entry) | many &lt;- many                                                             | [item\_template](item_template)             | [DisenchantID](item_template#item_template-DisenchantID)                   |                                                                                                                                                          |
| prospecting\_loot\_template   | [entry](#loot_template-entry) | many &lt;- one                                                              | [item\_template](item_template)             | [entry](item_template#item_template-entry)                                 |                                                                                                                                                          |
| milling\_loot\_template       | [entry](#loot_template-entry) | many &lt;- one                                                              | [item\_template](item_template)             | [entry](item_template#item_template-entry)                                 |                                                                                                                                                          |
| pickpocketing\_loot\_template | [entry](#loot_template-entry) | many &lt;- many                                                             | [creature\_template](creature_template)     | [pickpocketloot](creature_template#creature_template-pickpocketloot)       |                                                                                                                                                          |
| skinning\_loot\_template      | [entry](#loot_template-entry) | many &lt;- many                                                             | [creature\_template](creature_template)     | [skinloot](creature_template#creature_template-skinloot)                   | Can also store minable/herbable items gathered from creatures                                                                                            |
| quest\_mail\_loot\_template   | [entry](#loot_template-entry) |                                                                             | [quest\_template](quest_template)           | [RewardMailTemplateId](quest_template#quest_template-RewardMailTemplateId) |                                                                                                                                                          |
| reference\_loot\_template     | [entry](#loot_template-entry) | many &lt;- many                                                             | -   \_loot\_template                                                          | [-mincountOrRef](#loot_template-mincountOrRef)                                                               | In case of negative mincountOrRef                                                                                                                        |
| spell\_loot\_template         | [entry](#loot_template-entry) | many &lt;- many                                                             | [Spell](Spell) (DBC)                                                          | SpellId                                                                                                      |                                                                                                                                                          |

## Description of the fields

### Entry

The ID of the loot definition (loot template). The rows with the same ID defines a single loot.

It is often the same ID as the loot source (item, creature, etc) but when the [link](#loot_template-Relations) is made not on **Entry** field of the Related table then ID can be different. For example, when several loot sources should provide the same loot, single loot definition can be used. In this case the loot sources have the same value in the link field.

It is possible also to set up **artificial loot templates** which are not used directly at all as they have ID which are not referenced from the related source. Such "support templates" can be [referenced](#loot_template-Template_reference) from "normal" loot templates.

When a common or artificial loot template is used a problem arises: what ID to use for that template? Depending on the loot table, different rules can be agreed on to simplify maintenance for the table. Moreover, such rules would be very handy but it seems at the moment there are very few rules explicitly defined.

Agreements on **Entry** field values are described [there](#loot_template-Agreements).

### Item

Template ID of the item which can be included into the loot.

NOTE: For [reference entries](#loot_template-mincountOrRef) this field has no meaning and not used by the core in any way. Yet because of the PRIMARY KEY on the entry + item combination, this field will nonetheless need to be a unique number for each reference entry so that no indexing conflicts arise.

### Reference

Template reference asks core to process another loot template and to include all items dropped for that template into current loot. Simple idea.

Value of M[axCount](#loot_template-maxcount) field is used as a repetition factor for references - the reference will be processed not just once but exactly **MaxCount** times. So if the referenced template can produce 3 to 10 items (depending on luck) and value of **MaxCount** is '5' then after processing of that reference 15 to 50 items will be added to the loot. An awful example, isn't it? Actually no good example for whole template reference repetition is known, but it is quite useful for [group references](#loot_template-Group_reference) sometimes.

Be careful. Self references (loot template includes reference to itself) and loop references (loot template A includes reference to entire template B, loot template B includes reference to entire template A) are *completely* different from [internal references](#loot_template-Group_reference). If you make a self-reference like

``` cpp
INSERT INTO `reference_loot_template` (`Entry`,`Item`,`Reference`) VALUES (21215, 0, 21215); 
```

then the core will crash due to stack overflow at first attempt of loot 21215 processing. That is why **self references and loop references are strictly forbidden**.

### ChanceOrQuestChance

Item drop chance (plain entry or quest entry). Not sure how this functions for loot reference items.

### Plain entry

**Chance** &gt; 0

Absolute value of **Chance** signifies the percent chance that the item has to drop. Any floating point number is allowed but indeed any value larger that 100 will make the same result as 100.

### Quest drop

**Chance** &gt; 0

Absolute value of **Chance** signifies the percent chance that the item has to drop. Any floating point number is allowed but indeed any value larger that 100 will make the same result as 100.

Just as for [plain entries](#loot_template-Plain_entry) absolute value of **Chance **signifies the percent chance that the item has to drop. But in addition negative **Chance**

### Chanced references

For **Reference*** *entries **Chance** signifies the percent chance that the reference has to be used. So it is very similar to [plain entries](#loot_template-Plain_entry) meaning, just note that entire reference is skipped if the chance is missed.

Negative and zero values of **Chance** make no sense for that case and should not be used.

### Common remarks

Zero value of **Chance** is allowed for [grouped entries](#loot_template-groupid) only.

(Non-zero) values of **Chance** in loot definition are multiplied by RATE\_DROP\_ITEMS (mangos config setting) during loot generation for references and non-reference entries, but not for grouped entries.

### QuestRequired

 Informs the core that the item should be shown only to characters having appropriate quest. This means that even if item is dropped, in order to see it in the loot the player must have at least one [quest](quest_template) that has the [item ID](#loot_template-item) in its [RequiredItemId](quest_template#quest_template-RequiredItemId) fields or in its [RequiredSourceItemId](quest_template#quest_template-RequiredSourceItemId) fields. The player must also have less copies of the item than [RequiredItemCount](quest_template#quest_template-RequiredItemCount) or [RequiredSourceItemCount](quest_template#quest_template-RequiredSourceItemCount).

### LootMode

A special parameter used for separating conditional loot, such as Hard Mode loot. A lootmode of 0 will effectively disable a loot entry (its roll will always fail). This column is a bitmask, so you shouldn't duplicate loot across lootmodes. The active lootmode(s) can be changed at any time by the core. This column should only be used if required, in most cases it should be left as 1. Valid lootmodes include: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 16384, 32768.

### GroupId

A group is a set of loot definitions processed in such a way that at any given looting event the loot generated can receive only 1 (or none) [item](#loot_template-item) from the items declared in the loot definitions of the group. Groups are formed by loot definitions having the same values of [entry](#loot_template-entry) and **GroupId** fields.

A group may consists of **explicitly-chanced** (having non-zero [Chance](#loot_template-ChanceOrQuestChance)) and **equal-chanced** ([Chance](#loot_template-ChanceOrQuestChance) = 0) entries. Every *equal-chanced* entry of a group is considered having such a chance that:

-   all equal-chanced entries have the same chance

    \***group chance** (sum of chances of all entries) is 100%

Of course group may consist of

-   only explicitly-chanced entries or
-   only equal-chanced entries or
-   entries of both type.

The easiest way to understand what are groups is to understand how core processes grouped entries:

At loading time:

**groups are formed - all grouped entries with the same values of\*GroupId** and **Entry** fields are gathered into two sets - one for explicitly-chanced entries and one for equal-chanced. Note that order of entries in the sets can not be defined by DB - you should assume that the entries are in an unknown order. But indeed every time core processes a group the entries are in some order, constant during processing.

During loot generation:

-   core rolls for explicitly-chanced entries (if any):
-   **a random number\*R **is rolled in range 0 to 100 (floating point value).
    -   chance to drop is checked for every (explicitly-chanced) entry in the group:
    -   **if\*R** is less than absolute value of [Chance](#loot_template-ChanceOrQuestChance) of the entry then the entry 'wins': the [Item](#loot_template-item) is included in the loot. Group processing stops, the rest of group entries are just skipped.
    -   **otherwise the entry 'looses': the [Item](#loot_template-item) misses its chance to get into the loot.\*R** is decreased by the absolute value of [Chance](#loot_template-ChanceOrQuestChance) and next explicitly-chanced entry is checked.
-   if none of explicitly-chanced entries got its chance then equal-chanced part (if any) is processed:
    -   a random entry is selected from the set of equal-chanced entries and corresponding [Item](#loot_template-item) is included in the loot.
-   If nothing selected yet (this never happens if the group has some equal-chanced entries) - no item from the group is included into the loot.

Let us use term **group chance** as the sum of [Chance](#loot_template-ChanceOrQuestChance) (absolute) values for the group. Please note that even one equal-chanced entry makes group chance to be 100% (provided that sum of explicit chances does not exceed 100%).

If you understand the process you can understand the results:

-   Not more than one item from a group may drop at any given time.

    **If\*group chance** is at least 100 then one item will be dropped for sure.

-   If *group chance* does not exceed 100 then every item defined in group entries has *exactly* that chance to drop as set in [Chance](#loot_template-ChanceOrQuestChance).

    **If *group chance* is greater than 100 then some entries will lost a part of their chance (or even not be checked at all - that will be the case for all equal-chanced entries) whatever value takes the roll\*R**. So for some items chance to drop will be less than their [Chance](#loot_template-ChanceOrQuestChance). That is *very* bad and that is why having *group chance* &gt; 100 is strictly prohibited.

-   Processing of *equal-chanced* part takes much less time then of *explicitly-chanced* one. So usage of equal-chanced groups is recommended when possible.

So now basic applications of the groups are clear:

**Groups with *group chance* of 100% generate\*exactly one** [item](#loot_template-item) every time. This is needed quite often, for example such behavior is needed to define a loot template for tier item drop from a boss.
**Groups with *group chance* &lt; 100 generate\*one or zero** [items](#loot_template-item) every time keeping [chances](#loot_template-ChanceOrRef) of every item unchanged. Such behavior is useful to limit maximum number of items in the loot.

-   A single group may be defined for a set of items common for several loot sources. This could be very useful for decreasing DB size without any loss of data. See [References](#loot_template-Group_reference) for more details.

There is no way to have a [reference](#loot_template-mincountOrRef) as a part of a group.

Note: A group may contain definitions of non-quest drop, quest drop or both, but mixing non-quest and quest drop in a single group is not recommended.

Note: The core has a limitation - only 16 non-quest items (money and items added into the loot for quests are not counted for this "16") may come into the loot. And this is not a caprice of core devs - the client has some constraints. As most of loots have much more than 16 possible items (sometimes several hundreds) so without groups there is a (little) chance that more than 16 items will be rolled for a given loot but player will be able to see (and take) only first 16 of them. With groups you can ensure that more than 16 items will *never* drop. If DB pretends to be a quality software it must have loot template definitions which ensure that not more than 16 plain entries and groups are defined for any loot template. This is just a note - such declaration is not issued by TDB developers yet.

Note: The core has no limitation for number of groups (except 255 by DB field size), but according to the previous note there is no need to use values greater than 16.

 

Groupid for dummies as people have a hard time understanding it;

-   Lets say you have 10 different items in groupid 1 with the same chance, everytime the creature dies, it will randomly pick one of those items to drop.
-   If you have 10 different items in groupid 1 and 10 different items in groupid 2 with the same chance, then everytime the creature dies, it will randomly pick one of those 10 items in groupid 1 to drop, and one of the 10 items in groupid 2 to drop, meaning two items will drop. This is how boss loot works, this is how you make two random gear items drop everytime the boss dies.

 

For reference entries: If GroupId &gt; 0 only the referenced items with said GroupId will drop.

### MinCountOrRef

The minimum number of copies of the item that can drop in a single loot

-   Zero value makes no sense and should not be used.

### MaxCount

For non-reference entries - the maximum number of copies of the item that can drop in a single loot.

For [references](#loot_template-Template_reference) value of **MaxCount** field is used as a repetition factor for references - the reference will be processed not just once but exactly **MaxCount** times. This is designed to serve a single purpose: to make definition of tier token drops a bit simplier (tokens of a tier are defined as a 100%-chance group of an artificial template and bosses' loot templates include 100%-chanced reference to that group with repetition factor of 2 or 3 depending on the case). Using non-1 repetition factor for other things (references to a group with *group chance* less than 100% or [chanced references](#loot_template-Chanced_references) with chance less than 100%) must be agreed with TDB devs first (and described here).

Note: core rolls chance for any loot definition entry just one time - so if a references looses its chance it is skipped for the current loot completely whatever is **MaxCount** value.

## Agreements

These agreements are different for different loot tables. Mainly agreements defines rules for loot template IDs ([entry](#loot_template-entry)) and groups

## Fishing haul

For fishing\_loot\_template, ID is the zone or area ID from AreaTable.dbc (Note: Area IDs are not included in the link)

Also an extra note on fishing\_loot\_template: if just one area ID is defined for a zone, then that whole zone ID is skipped and therefore all areas in that zone need to have entries in the table. Only when there doesn't exist any area entries for a zone does the core use the zone ID directly. Zone = Wetlands, Elwynn, etc; Area = Northshire, Lakeshire, etc.

When several zones uses the same loot definition then

-   the loot template of the zone with minimal ID (minID) should be defined without references
-   the other zone with the same loot should have loot definition as a single [reference](#loot_template-mincountOrRef) to the minID loot definition

Note: To be confirmed by TDB developers

As successful fishing should give exactly 1 fish (with an exception for quest fishes) so non-quest part of every loot template should be

-   or single [plain entry](#loot_template-Plain_entry) with 100% drop chance
-   or a single group with [*group chance*](#loot_template-groupid) equal to 100%
-   or a reference to a template made according to previous two variants. It is recommended to use [group references](#loot_template-Group_reference).

When a fish is catched for a quest it becoms the *second* fish on the hook. Many people rolled on floor laughing but this is blizzlike and fortunately easy to implement. Just add necessary [quest drop](#loot_template-Quest_drop) definition(s).

## Corpse loot

For creature\_loot\_template basic approach is to use creature\_template.lootid equal to creature\_template.entry. But this results in great overhead in the loot table as

-   many creatures use the same loot definition (well, stats on sites are *similar* due to the nature of random roll)
-   even more creatures use same parts of loot definition
    That is why it is recommended to use [grouping](#loot_template-groupid), [group references](#loot_template-Group_reference) and [template references](#loot_template-Template_reference).

## Disenchant outcome

Agreements for disenchant loot templates numbering is **item.ItemLevel\*100 + item.quality** where **Item** is disenchanting target.

As disenchanting should give exactly 1 type of shard/essence/dust/etc so every loot template should be

-   or single [plain entry](#loot_template-Plain_entry) with 100% drop chance
-   or a single group with [*group chance*](#loot_template-groupid) equal to 100%

There is no use for references here as the reference is done with the relation field. No quest drop at all.

## Gameobject harvest

***TBD***

## Luggage contents

***TBD***

## Pocket pick-ups

Agreements for pickpocketing loot templates numbering is not known.

***TBD***

## Prospecting outcome

Agreements for prospecting loot templates numbering is not known.

***TBD***

## Skinning pulls

Agreements for skinning loot templates numbering is not known. It's a real pity as many creatures should use the same templates. In most cases mobs with the same family and level have *very* similar skinning statistics.

As skinning should give exactly 1 type of skin/hide/etc so every loot template should be

-   or single [plain entry](#loot_template-Plain_entry) with 100% drop chance
-   or single group with [*group chance*](#loot_template-groupid) equal to 100%

There is no use for references here as the reference is done with the relation field.

When a skin is pulled for a quest it becoms the *second* skin from the mob. Yes, funny. This is blizzlike and fortunately easy to implement. Just add necessary [quest drop](#loot_template-Quest_drop) definition(s).

## Reference Template Numbering

Agreements for Reference Templates are as followed:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Range</strong></p></td>
<td><p><strong>Used for</strong></p></td>
</tr>
<tr class="even">
<td><p>00000-00999</p></td>
<td><p>Skinning Reference Templates</p></td>
</tr>
<tr class="odd">
<td><p>01000-09999</p></td>
<td><p>KEEP FREE: TDB-DEV-References</p></td>
</tr>
<tr class="even">
<td><p>10000-10999</p></td>
<td><p>Item Reference Templates</p></td>
</tr>
<tr class="odd">
<td><p>11000-11799</p></td>
<td><p>Fishing Reference Templates</p></td>
</tr>
<tr class="even">
<td><p>11800-11999</p></td>
<td><p>Milling Reference Templates</p></td>
</tr>
<tr class="odd">
<td><p>12000-12899</p></td>
<td><p>Raid: Gameobject Reference Templates</p></td>
</tr>
<tr class="even">
<td><p>12900-12999</p></td>
<td><p>Mining Reference Templates</p></td>
</tr>
<tr class="odd">
<td><p>13000-13999</p></td>
<td><p>Prospecting Reference Templates</p></td>
</tr>
<tr class="even">
<td><p>14000-29000</p></td>
<td><p>World Reference Templates</p></td>
</tr>
<tr class="odd">
<td><p>34000-34999</p></td>
<td><p>Raid: Creature Reference Templates</p></td>
</tr>
<tr class="even">
<td><p>35000-35999</p></td>
<td><p>Dungeon Reference Templates</p></td>
</tr>
</tbody>
</table>

# Examples

### Gameobject dropping a single non-quest item

``` sql
-- Add a single non-quest item to an object
DELETE `gameobject_loot_template` WHERE `Entry`=1419;
INSERT INTO `gameobject_loot_template`
   (`Entry`,`Item`,`Chance`,`LootMode`,`GroupId`,`MinCount`,`MaxCount`)
VALUES
(1419,2453,100,0,0,1,3);  -- 100% chance to drop a 1 to 3 Bruiseweed
```

### Creature having in the pocket single quest item

``` cpp
-- creature_template: entry=6846, name='Defias Dockmaster', pickpocketloot=6846
-- Note: link with pickpocketing_loot_template is on `pickpocketloot` field (which is equal to `entry` field in this case)
DELETE `pickpocketing_loot_template` WHERE `Entry`=6846;
INSERT INTO `pickpocketing_loot_template`
   (`Entry`,`Item`,`Chance`,`LootMode`,`GroupId`,`MinCount`,`MaxCount`)
VALUES
(6846,7675,100,0,0,1,1);
```
