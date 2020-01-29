# conditions

[<-Back-to:World](database-world.md)

**The \`conditions\` table**

This table allows you to define conditions for various systems - Gossip, loot etc.

**Structure**

<table>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
<td><p><strong>Extra</strong></p></td>
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#sourcetypeorreferenceid">SourceTypeOrReferenceId</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#sourcegroup">SourceGroup</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#sourceentry">SourceEntry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#condition_source_type_smart_event=22">SourceId</a></p></td>
<td><p>int(11)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><a href="http://www.azerothcore.org/wiki/smart_scripts#source_type">smart_scripts.source_type</a> <strong>||</strong> 0 for everything else</p></td>
</tr>
<tr class="even">
<td><p><a href="#elsegroup">ElseGroup</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#conditiontypeorreference">ConditionTypeOrReference</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#conditiontarget">ConditionTarget</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#conditionvalue1">ConditionValue1</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#conditionvalue2">ConditionValue2</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#conditionvalue3">ConditionValue3</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#negativecondition">NegativeCondition</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>Boolean 0 or 1 (if <a href="#negativecondition">NegativeCondition</a></p></td>
</tr>
<tr class="odd">
<td><p><a href="#errortype">ErrorType</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#errortextid">ErrorTextId</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#scriptname">ScriptName</a></p></td>
<td><p>char(64)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>' '</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#comment">Comment</a></p></td>
<td><p>varchar(255)</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### SourceTypeOrReferenceId

if negative, then it is a reference template.

<table>
<thead>
<tr class="header">
<th><h3 id="conditions-SourceTypeOrReferenceId.1">SourceTypeOrReferenceId</h3></th>
<th>ID</th>
<th>SourceGroup</th>
<th>SourceEntry</th>
<th><a href="http://www.azerothcore.org/wiki/conditions#condition_source_type_smart_event=22">SourceId</a></th>
<th>ConditionTarget</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_NONE</td>
<td>0</td>
<td><strong><a href="#referencetemplates">See REFERENCE TEMPLATES</a></strong></td>
<td>(REFERENCE TEMPLATES)</td>
<td>Always 0</td>
<td>(See below)</td>
<td><strong>Only used in <a href="#referencetemplates">Reference Templates! See below.</a></strong></td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_CREATURE_LOOT_TEMPLATE</td>
<td>1</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">creature_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_DISENCHANT_LOOT_TEMPLATE</td>
<td>2</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">disenchant_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_FISHING_LOOT_TEMPLATE</td>
<td>3</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">fishing_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_GAMEOBJECT_LOOT_TEMPLATE</td>
<td>4</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">gameobject_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_ITEM_LOOT_TEMPLATE</td>
<td>5</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">item_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_MAIL_LOOT_TEMPLATE</td>
<td>6</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">mail_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_MILLING_LOOT_TEMPLATE</td>
<td>7</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">milling_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_PICKPOCKETING_LOOT_TEMPLATE</td>
<td>8</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">pickpocketing_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_PROSPECTING_LOOT_TEMPLATE</td>
<td>9</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">prospecting_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_REFERENCE_LOOT_TEMPLATE</td>
<td>10</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_SKINNING_LOOT_TEMPLATE</td>
<td>11</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">skinning_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_SPELL_LOOT_TEMPLATE</td>
<td>12</td>
<td><a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Entry">spell_loot_template.Entry or reference_loot_template.Entry</a></td>
<td>item id (<a href="http://www.azerothcore.org/wiki/loot_template#loot_template-Item">_loot_template.Item or reference_loot_template.Item)</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><br />
CONDITION_SOURCE_TYPE_SPELL_IMPLICIT_TARGET</td>
<td><br />
13</td>
<td>Mask of effects to be affected by condition:<br />
1 = EFFECT_0, 2 = EFFECT_1, 4 = EFFECT_2</td>
<td>Spell Id from  <a href="Spell">Spell.dbc</a></td>
<td>Always 0</td>
<td><p>0 : Potential spell Target<br />
1 : spell Caster</p></td>
<td>Don't use wowhead to get number of effects, data from wowhead sometimes doesn't match real effect number.</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_GOSSIP_MENU</td>
<td>14</td>
<td><a href="http://www.azerothcore.org/wiki/gossip_menu#MenuID">gossip_menu.MenuID</a></td>
<td><a href="http://www.azerothcore.org/wiki/gossip_menu#TextID">gossip_menu.TextID</a> (points to npc_text.ID)</td>
<td>Always 0</td>
<td><p>0 = Player<br />
1 = WorldObject</p></td>
<td><br />
</td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_GOSSIP_MENU_OPTION</td>
<td>15</td>
<td><a href="http://www.azerothcore.org/wiki/gossip_menu_option#MenuID">gossip_menu_option.MenuID</a></td>
<td><a href="http://www.azerothcore.org/wiki/gossip_menu_option#OptionID">gossip_menu_option.OptionID</a></td>
<td>Always 0</td>
<td><p>0 = Player<br />
1 = WorldObject</p></td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_CREATURE_TEMPLATE_VEHICLE</td>
<td>16</td>
<td>Always 0</td>
<td>creature entry (<a href="http://www.azerothcore.org/wiki/creature_template#creature_template-entry">creature_template.entry</a>)</td>
<td>Always 0</td>
<td><p>0 = Player riding vehicle<br />
1 = Vehicle creature</p></td>
<td><br />
</td>
</tr>
<tr class="even">
<td><br />
<br />
<br />
<br />
<br />
CONDITION_SOURCE_TYPE_SPELL</td>
<td><br />
<br />
<br />
<br />
<br />
17</td>
<td>Always 0</td>
<td><br />
<br />
<br />
<br />
<br />
Spell ID from <a href="http://www.azerothcore.org/wiki/Spell">Spell.dbc</a></td>
<td>Always 0</td>
<td><br />
<br />
<br />
0 = spell Caster<br />
1 =  Explicit Target of the spell (only for spells which take the object selected by caster into account)</td>
<td><ul>
<li>This source type allows you to define caster/explicit target requirements for spell to be cast.</li>
<li>Explicit target of the spell is the target which is selected by player during cast, not all spells take that target into account. non-explicit targets of the spell (the ones which are selected by spell like area or nearby targets for example) are not affected by this condition source type, if you want to affect those use CONDITION_SOURCE_TYPE_SPELL_IMPLICIT_TARGET instead.</li>
<li>If you are looking for old CONDITION_SOURCE_TYPE_ITEM_REQUIRED_TARGET, use this condition source type instead (ConditionTarget = 1 allows you to set requirements for a given spell, so to use this condition type you need spellid of the spell cast on item use).</li>
<li>Remember that conditions with the same ElseGroup value will be used to make logical AND check, so to allow different targets for the same spell effect you have to set ElseGroup respectively.</li>
</ul></td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_SPELL_CLICK_EVENT</td>
<td>18</td>
<td>creature entry (<a href="http://www.azerothcore.org/wiki/npc_spellclick_spells#npc_entry">npc_spellclick_spells.npc_entry</a>)</td>
<td>Spell (<a href="http://www.azerothcore.org/wiki/npc_spellclick_spells#spell_id">npc_spellclick_spells.spell_id</a>)</td>
<td>Always 0</td>
<td>0 = Clicker<br />
1 =  Spellclick target (clickee)</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_QUEST_ACCEPT</td>
<td>19</td>
<td>Always 0</td>
<td><a href="http://www.azerothcore.org/wiki/quest_template#id">Quest ID</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td>Condition must be met for quest to be available to player.</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_QUEST_SHOW_MARK</td>
<td>20</td>
<td>Always 0</td>
<td><a href="http://www.azerothcore.org/wiki/quest_template#id">Quest ID</a></td>
<td>Always 0</td>
<td>Always 0</td>
<td>Condition must be met for the quest mark to show.</td>
</tr>
<tr class="even">
<td><br />
CONDITION_SOURCE_TYPE_VEHICLE_SPELL</td>
<td><br />
21</td>
<td>creature entry (<a href="http://www.azerothcore.org/wiki/creature_template#creature_template-entry">creature_template.entry</a>)</td>
<td><br />
Spell ID from <a href="http://www.azerothcore.org/wiki/Spell">Spell.dbc</a></td>
<td>Always 0</td>
<td>0 = Player for whom spell bar is shown1 =  Vehicle creature</td>
<td><br />
This will show or hide spells in vehicle spell bar.</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_SMART_EVENT</td>
<td>22</td>
<td>ID (<a href="http://www.azerothcore.org/wiki/smart_scripts#id">smart_scripts.id</a>) + 1</td>
<td>EntryOrGuid (<a href="http://www.azerothcore.org/wiki/smart_scripts#entryorguid">smart_scripts.entryorguid</a>)</td>
<td>SourceType (<a href="http://www.azerothcore.org/wiki/smart_scripts#source_type">smart_scripts.source_type</a>)</td>
<td>0 = Invoker<br />
1 = Object</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_NPC_VENDOR</td>
<td>23</td>
<td>vendor entry (<a href="http://www.azerothcore.org/wiki/npc_vendor#entry">npc_vendor.entry</a>)</td>
<td>item entry (<a href="http://www.azerothcore.org/wiki/npc_vendor#item">npc_vendor.item</a>)</td>
<td>Always 0</td>
<td>Always 0</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>CONDITION_SOURCE_TYPE_SPELL_PROC</td>
<td>24</td>
<td>Always 0</td>
<td>Spell ID of aura which triggers the proc</td>
<td>Always 0</td>
<td>0 = Actor<br />
1 = ActionTarget</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>CONDITION_SOURCE_TYPE_MAX</td>
<td>27</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
<td>(Placeholder)</td>
</tr>
</tbody>
</table>

### SourceGroup

See above.

### SourceEntry

See above.

### ElseGroup

Allows building grouped conditions - all entries belonging to the same condition (same [SourceType](#conditions-SourceTypeOrReferenceId), [SourceGroup](#conditions-SourceGroup) and [SourceEntry](#conditions-SourceEntry)) that share the same number in ElseGroup, define one group. The **entire condition** is met when **any of its groups** is met (logical OR). The **group** is met when **all of its entries are met** (logical AND).

Example:

Two conditions with the same SourceType, SourceGroup and SourceEntry but with a different Condition, the first one has ElseGroup = 1 and the second has ElseGroup = 2, this creates a Logical OR.

Two conditions with the same SourceType, SourceGroup and SourceEntry but with a different Condition, both has ElseGroup = 1, this creates a Logical AND.

### ConditionTypeOrReference
 

<table>
<thead>
<tr class="header">
<th>ConditionTypeOrReference (name)</th>
<th>Value</th>
<th>ConditionValue1</th>
<th>ConditionValue2</th>
<th>ConditionValue3</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>CONDITION_NONE</td>
<td>0</td>
<td>(Never used)</td>
<td>(Never used)</td>
<td>(Never used)</td>
</tr>
<tr class="even">
<td>CONDITION_AURA</td>
<td>1</td>
<td>Spell ID from <a href="http://www.azerothcore.org/wiki/Spell">Spell.dbc</a></td>
<td>Effect index (0-2)</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_ITEM</td>
<td>2</td>
<td>item entry (<a href="http://www.azerothcore.org/wiki/item_template#entry">item_template.entry</a>)</td>
<td>item count</td>
<td>0 = not in bank, 1 = in bank</td>
</tr>
<tr class="even">
<td>CONDITION_ITEM_EQUIPPED</td>
<td>3</td>
<td>item entry (<a href="http://www.azerothcore.org/wiki/item_template#entry">item_template.entry</a>)</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_ZONEID</td>
<td>4</td>
<td>Zone ID where this condition will be true.</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td><br />
<br />
<br />
<br />
<br />
CONDITION_REPUTATION_RANK</td>
<td><br />
<br />
<br />
<br />
<br />
5</td>
<td><p><br />
<br />
<br />
<br />
<br />
Faction template ID from <a href="http://www.azerothcore.org/wiki/Faction">Faction.dbc</a></p></td>
<td><pre><code>rank:
  1 = Hated
  2 = Hostile
  4 = Unfriendly
  8 = Neutral
 16 = Friendly
 32 = Honored
 64 = Revered
128 = Exalted</code></pre>
<p>Add the target ranks together for the condition to be true for all those ranks.</p></td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_TEAM</td>
<td>6</td>
<td>Team id :Alliance = 469 / Horde = 67</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_SKILL</td>
<td>7</td>
<td>Required skill. See <a href="http://www.azerothcore.org/wiki/SkillLine">SkillLine.dbc</a> .</td>
<td>Skill rank value (e.g. from 1 to 450 for the 3.3.5 branch)</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_QUESTREWARDED</td>
<td>8</td>
<td>Quest ID - see <a href="http://www.azerothcore.org/wiki/quest_template#id">quest_template.id</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_QUESTTAKEN</td>
<td>9</td>
<td>Quest ID - see <a href="http://www.azerothcore.org/wiki/quest_template#id">quest_template.id</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_DRUNKENSTATE</td>
<td>10</td>
<td>Sober=0; Tipsy=1, Drunk=2, Smashed=3</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_WORLD_STATE</td>
<td>11</td>
<td>World state index</td>
<td>World state value</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_ACTIVE_EVENT</td>
<td>12</td>
<td>Event entry (<a href="http://www.azerothcore.org/wiki/game_event#evententry">game_event.eventEntry</a>)</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td><br />
CONDITION_INSTANCE_INFO</td>
<td><br />
13</td>
<td><strong><br />
entry</strong> (see corresponding source script files for info)</td>
<td><strong><br />
data</strong> (see corresponding script source files for more info)</td>
<td><p>0=INSTANCE_INFO_DATA</p>
<p>1=INSTANCE_INFO_GUID_DATA</p>
<p>2=INSTANCE_INFO_BOSS_STATE</p>
<p>3=INSTANCE_INFO_DATA64</p></td>
</tr>
<tr class="odd">
<td>CONDITION_QUEST_NONE</td>
<td>14</td>
<td>Quest ID - see <a href="http://www.azerothcore.org/wiki/quest_template#id">quest_template.id</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td><br />
CONDITION_CLASS</td>
<td><br />
15</td>
<td>Class mask from <a href="http://www.azerothcore.org/wiki/ChrClasses">ChrClasses.dbc</a><br />
Add flags together for all classes where condition is true.</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_RACE</td>
<td>16</td>
<td>Player must be this race. See <a href="http://www.azerothcore.org/wiki/ChrRaces">ChrRaces.dbc</a> .<br />
Add flags together for all races where condition is true.</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_ACHIEVEMENT</td>
<td>17</td>
<td>Achievement ID from <a href="http://www.azerothcore.org/wiki/Achievement">Achievement.dbc</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_TITLE</td>
<td>18</td>
<td>Title ID from <a href="http://www.azerothcore.org/wiki/CharTitles">CharTitles.dbc</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_SPAWNMASK</td>
<td>19</td>
<td>spawnMask from<br />
<a href="http://www.azerothcore.org/wiki/creature#spawnmask">Creature.spawnMask</a> / <a href="http://www.azerothcore.org/wiki/gameobject#spawnmask">Gameobject.spawnMask</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_GENDER</td>
<td>20</td>
<td>0 = Male, 1 = Female, 2 = None</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_UNIT_STATE</td>
<td>21</td>
<td>UnitState (<a href="https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Entities/Unit/Unit.h#L498">enum from Unit.h</a>)</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_MAPID</td>
<td>22</td>
<td><p>Map entry from Map.dbc</p>
<p>(0=Eastern Kingdoms, 1=Kalimdor, - and so on.)</p></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_AREAID</td>
<td>23</td>
<td>Area ID from AreaTable.dbc</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_CREATURE_TYPE</td>
<td>24</td>
<td><p>Creature type from <a href="http://www.azerothcore.org/wiki/creature_template#creature_template-type">creature_template.type</a></p>
<p>True if creature_template.type == ConditionValue1</p></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_SPELL</td>
<td>25</td>
<td>Spell ID from <a href="http://www.azerothcore.org/wiki/Spell">Spell.dbc</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_PHASEMASK</td>
<td>26</td>
<td>phasemask value</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td><br />
CONDITION_LEVEL</td>
<td><br />
27</td>
<td><br />
Player level (1-80 in 3.3.5)</td>
<td>Optional: 0 = Level must be equal, 1 = Level must be higher, 2 = Level must be lower,<br />
3 = Level must be higher or equal, 4 = Level must be lower or equal.</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_QUEST_COMPLETE</td>
<td>28</td>
<td>Quest ID - see <a href="http://www.azerothcore.org/wiki/quest_template#id">quest_template.id</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_NEAR_CREATURE</td>
<td>29</td>
<td>Creature entry from <a href="http://www.azerothcore.org/wiki/creature_template#creature_template-entry">creature_template.entry</a></td>
<td>Distance in yards</td>
<td>Alive=0 / Dead=1</td>
</tr>
<tr class="odd">
<td>CONDITION_NEAR_GAMEOBJECT</td>
<td>30</td>
<td>Gameobject entry from <a href="http://www.azerothcore.org/wiki/gameobject_template#entry">gameobject_template.entry</a></td>
<td>Distance in yards</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td><br />
<br />
CONDITION_OBJECT_ENTRY_GUID</td>
<td><br />
<br />
31</td>
<td><p>TypeID. Available object types:<br />
3 : TYPEID_UNIT<br />
4 : TYPEID_PLAYER<br />
5 : TYPEID_GAMEOBJECT<br />
7 : TYPEID_CORPSE (player corpse, after spirit release)</p></td>
<td><p><br />
0 = Any object of given TypeID<br />
if TypeID = TYPEID_UNIT =&gt; Creature entry from <a href="http://www.azerothcore.org/wiki/creature_template#creature_template-entry">creature_template.entry<br />
if TypeID = TYPEID_GAMEOBJECT =&gt; Gameobject entry from </a><a href="http://www.azerothcore.org/wiki/gameobject_template#entry">gameobject_template.entry</a></p></td>
<td><p><br />
0 = Any object of given type</p>
<p>1 - 500k : creature / gameobject GUID</p></td>
</tr>
<tr class="odd">
<td><br />
<br />
CONDITION_TYPE_MASK</td>
<td><br />
<br />
32</td>
<td><p>TypeMask - a bitmask of following object types:<br />
0x0008 - TYPEMASK_UNIT (8)<br />
0x0010 - TYPEMASK_PLAYER (16)<br />
0x0020 - TYPEMASK_GAMEOBJECT (32)<br />
0x0080 - TYPEMASK_CORPSE (player corpse after spirit release) (128)</p></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td><br />
<br />
<br />
CONDITION_RELATION_TO</td>
<td><br />
<br />
<br />
33</td>
<td><p><br />
<br />
<br />
Target to which relation is checked.<br />
- one of the ConditionTargets available in current <a href="#sourcetypeorreferenceid">SourceType</a></p></td>
<td><p>RelationType - defines relation of current ConditionTarget to target specified in ConditionValue1.<br />
0 - RELATION_SELF<br />
1 - RELATION_IN_PARTY<br />
2 - RELATION_IN_RAID_OR_PARTY<br />
3 - RELATION_OWNED_BY (ConditionTarget is owned by ConditionValue1)<br />
4 - RELATION_PASSENGER_OF (ConditionTarget is passenger of ConditionValue1)<br />
5 - RELATION_CREATED_BY (ConditionTarget is summoned by ConditionValue1)</p></td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td><br />
<br />
<br />
<br />
<br />
CONDITION_REACTION_TO</td>
<td><br />
<br />
<br />
<br />
<br />
34</td>
<td><p><br />
<br />
<br />
<br />
<br />
Target to which reaction is checked.<br />
- one of the ConditionTargets available in current <a href="#sourcetypeorreferenceid">SourceType</a></p></td>
<td><pre><code>rankMask: This bitmask defines the reaction(s) of the current ConditionTarget
to the target specified in ConditionValue1 (which are allowed).
Flags for the reactions are:
  1 = Hated
  2 = Hostile
  4 = Unfriendly
  8 = Neutral
 16 = Friendly
 32 = Honored
 64 = Revered
128 = Exalted</code></pre></td>
<td>Always 0</td>
</tr>
<tr class="even">
<td><br />
<br />
<br />
<br />
CONDITION_DISTANCE_TO</td>
<td><br />
<br />
<br />
<br />
35</td>
<td><p><br />
<br />
<br />
Target to which distance is checked<br />
- one of ConditionTargets available in current <a href="#sourcetypeorreferenceid">SourceType</a></p></td>
<td><br />
<br />
<br />
Distance.<br />
Defines distance between current ConditionTarget and target specified in ConditionValue1</td>
<td><p>ComparisionType:<br />
0 = distance must be equal to ConditionValue2<br />
1 = distance must be higher than ConditionValue2<br />
2 = distance must be lower than ConditionValue2<br />
3 = distance must be equal to or higher than ConditionValue2<br />
4 = distance must be equal to or lower than ConditionValue2</p></td>
</tr>
<tr class="odd">
<td><br />
<br />
<br />
CONDITION_ALIVE</td>
<td><br />
<br />
<br />
36</td>
<td>Always 0 - Use NegativeCondition and the following settings:
<p>NegativeCondition = 0 if target needs to be ALIVE.<br />
NegativeCondition = 1 if target needs to be DEAD.<br />
NOTE: A creature corpse and a creature that_looks_dead<br />
are two different things. One is actually dead<br />
and the other is just using an emote to appear dead. </p></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td><br />
<br />
<br />
CONDITION_HP_VAL</td>
<td><br />
<br />
<br />
37</td>
<td><br />
<br />
<br />
HP value</td>
<td>ComparisionType:
<ul>
<li>0 = HP must be equal</li>
<li>1 = HP must be higher</li>
<li>2 = HP must be lesser</li>
<li>3 = HP must be equal or higher</li>
<li>4 = HP must be equal or lower</li>
</ul></td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td><br />
<br />
<br />
CONDITION_HP_PCT</td>
<td><br />
<br />
<br />
38</td>
<td>Percentage of max HP</td>
<td>ComparisionType:
<ul>
<li>0 = Percentage of max HP must be equal</li>
<li>1 = Percentage of max HP must be higher</li>
<li>2 = Percentage of max HP must be lower</li>
<li>3 = Percentage of max HP must be equal or higher</li>
<li>4 = Percentage of max HP must be equal or lower</li>
</ul></td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_REALM_ACHIEVEMENT</td>
<td>39</td>
<td>Achievement ID from <a href="http://www.azerothcore.org/wiki/Achievement">Achievement.dbc</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td><br />
CONDITION_IN_WATER</td>
<td><br />
40</td>
<td>Always 0 - Use NegativeCondition and the following settings:NegativeCondition = 0 If target needs to be on landNegativeCondition = 1 If target needs to be in water</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td><p><br />
CONDITION_STAND_STATE</p></td>
<td><br />
42</td>
<td>stateType (exact or any): 0 = <strong>Exact</strong> state used in ConditionValue2 1 = <strong>Any</strong> type of state in ConditionValue2</td>
<td>Exact stand state, or generic state (stand / sit), depending on value 10 = Standing 1 = Sitting</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_DAILY_QUEST_DONE</td>
<td>43</td>
<td>Quest ID - see <a href="http://www.azerothcore.org/wiki/quest_template#id">quest_template.id</a></td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_CHARMED</td>
<td>44</td>
<td>Always 0</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_PET_TYPE</td>
<td>45</td>
<td>mask</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_TAXI</td>
<td>46</td>
<td>Always 0</td>
<td>Always 0</td>
<td>Always 0</td>
</tr>
<tr class="even">
<td>CONDITION_QUESTSTATE</td>
<td>47</td>
<td>Quest ID - see <a href="http://www.azerothcore.org/wiki/quest_template#id">quest_template.id</a></td>
<td>state_mask</td>
<td>Always 0</td>
</tr>
<tr class="odd">
<td>CONDITION_QUEST_OBJECTIVE_PROGRESS</td>
<td>48</td>
<td>Quest ID - see <a href="http://www.azerothcore.org/wiki/quest_template#id">quest_template.id</a></td>
<td>Quest Objective ID - see <a href="http://www.azerothcore.org/wiki/quest_template#requirednpcorgo">quest_template.RequiredNpcOrGo</a></td>
<td>Quest Objective Count</td>
</tr>
<tr class="even">
<td><p>CONDITION_MAX</p></td>
<td>49</td>
<td><br />
</td>
<td><br />
</td>
<td><br />
</td>
</tr>
</tbody>
</table>

### ConditionTarget

Allows selecting an object for which conditions will be checked. Available objects are dependant on SourceTypeOrReferenceId, for details see respective source type reference.

### ConditionValue1

See below

### ConditionValue2

See below

### ConditionValue3

See below

### NegativeCondition

If set to 1, the condition will be "inverted"

Example: CONDITION\_AURA with NegativeCondition will be true when the player does NOT have the aura.

### ErrorType

Id from [/src/server/game/Miscellaneous/SharedDefines.h#L830](https://github.com/azerothcore/azerothcore-wotlk/blob/97e65bd4479272106bba87364d35233d2e4bd2ef/src/server/game/Miscellaneous/SharedDefines.h#L830). Will be displayed only for the below condition [source type](#conditions-SourceTypeOrReferenceId):

CONDITION\_SOURCE\_TYPE\_SPELL = 17

### ErrorTextId

Id from [/src/server/game/Miscellaneous/SharedDefines.h#L1024](https://github.com/azerothcore/azerothcore-wotlk/blob/97e65bd4479272106bba87364d35233d2e4bd2ef/src/server/game/Miscellaneous/SharedDefines.h#L1024). Will be displayed only for the below condition [source type](#conditions-SourceTypeOrReferenceId):

CONDITION\_SOURCE\_TYPE\_SPELL = 17

(ErrorType must be SPELL\_FAILED\_CUSTOM\_ERROR (209) otherwise 0)

### ScriptName

The ScriptName this condition uses, if any.

### Comment

Explanation of this condition or reference

### Explanation of condition types

The content of the [SourceGroup](#conditions-SourceGroup) and [SourceEntry](#conditions-SourceEntry) fields depends on the [SourceTypeOrReferenceId](#conditions-SourceTypeOrReferenceId)

\***CONDITION\_SOURCE\_TYPE\_NONE = 0**

**Only used in Reference Templates! See below.**

\***CONDITION\_SOURCE\_TYPE\_ \* \_LOOT\_TEMPLATE = 1 - 12**
\***SourceGroup: loot entry (**\_loot\_template.Entry or Reference\_loot\_template.Entry)
\***SourceEntry: item id (**\_loot\_template.Item or Reference\_loot\_template.Item)

-   -   ConditionTarget: always 0

*example: if you use type 1 (creature\_loot\_template) then use the entry and item fields from that table*

\***CONDITION\_SOURCE\_TYPE\_SPELL\_IMPLICIT\_TARGET = 13**

-   -   SourceGroup: mask of effects to be affected by condition (1 - EFFECT\_0, 2 - EFFECT\_1, 4 - EFFECT\_2 - don't use wowhead to get number of effects, data from wowhead sometimes doesn't match real effect number)
    -   SourceEntry: spell (Spell Id from  [Spell.dbc](Spell).)
    -   ConditionTarget:
        -   0 - Potential target of the spell
        -   1 - Caster of the spell

Notes:

-   this condition source type allows to define a filter for possible spell effect targets, so only targets matching condition will be selected as implicit targets of the spell. Only target types: *AREA*, *NEARBY* and *CONE* are allowed to be filtered. This source type affects only targets selected by spell, it doesn't affect spell target selected by player on cast, to affect that target use CONDITION\_SOURCE\_TYPE\_SPELL.
-   to restrict targets to player's only use CONDITION\_TYPEMASK with TYPEMASK\_PLAYER + TYPEMASK\_CORPSE to allow targeting dead players.
-   remember that conditions with the same value ElseGroup will be used to make logical AND check, so to allow different targets for the same spell effect you have to set ElseGroup respectively.
-   if you're looking for old CONDITION\_SOURCE\_TYPE\_SPELL\_SCRIPT\_TARGET - use this condition source type instead

\***CONDITION\_SOURCE\_TYPE\_GOSSIP\_MENU = 14**

-   -   SourceGroup: gossip menu entry ([gossip\_menu.MenuID](http://www.azerothcore.org/wiki/gossip_menu#MenuID))
    -   SourceEntry: gossip menu text id ([gossip\_menu.TextID](http://www.azerothcore.org/wiki/gossip_menu#TextID))
    -   ConditionTarget:
        -   0 - Player for which gossip text is shown
        -   1 - WorldObject providing gossip

\***CONDITION\_SOURCE\_TYPE\_GOSSIP\_MENU\_OPTION = 15**

-   -   SourceGroup: gossip menu entry ([gossip\_menu\_option.MenuID](http://www.azerothcore.org/wiki/gossip_menu_option#MenuID))
    -   SourceEntry: gossip menu option id ([gossip\_menu\_option.OptionID](http://www.azerothcore.org/wiki/gossip_menu_option#OptionID))
    -   ConditionTarget:
        -   0 - Player for which gossip text is shown
        -   1 - WorldObject providing gossip

\***CONDITION\_SOURCE\_TYPE\_CREATURE\_TEMPLATE\_VEHICLE = 16**

-   -   SourceGroup: always 0
    -   SourceEntry: creature entry ([creature\_template.entry](http://www.azerothcore.org/wiki/creature_template#creature_template-entry))
    -   ConditionTarget:
        -   0 - Player riding a vehicle
        -   1 - Vehicle creature

Note: creature entry must be a vehicle. Example: If this is used with CONDITION\_AREA, the player will be dismounted from the vehicle if the mounted player leaves that area.

\***CONDITION\_SOURCE\_TYPE\_SPELL = 17**

-   -   SourceGroup: always 0
    -   SourceEntry: spell (Spell Id from [Spell.dbc](Spell))
    -   ConditionTarget:
        -   0 - Caster of the spell
        -   1 - Explicit target of the spell (only for spells which take object selected by caster into account)

Notes:

-   this source type allows you to define caster/explicit target requirements for spell to be cast.
-   explicit target of the spell is the target which is selected by player during cast, not all spells take that target into account. non-explicit targets of the spell (the ones which are selected by spell like area or nearby targets for example) are not affected by this condition source type, if you want to affect those use CONDITION\_SOURCE\_TYPE\_SPELL\_IMPLICIT\_TARGET instead.
-   if you're looking for old CONDITION\_SOURCE\_TYPE\_ITEM\_REQUIRED\_TARGET - use this condition source type instead (ConditionTarget = 1 allows you to set requirements for a given spell, so to use this condition type you need spellid of the spell cast on item use)
-   remember that conditions with the same value ElseGroup will be used to make logical AND check, so to allow different targets for the same spell effect you have to set ElseGroup respectively.

\***CONDITION\_SOURCE\_TYPE\_SPELL\_CLICK\_EVENT = 18**

-   -   SourceGroup: creature entry ([npc\_spellclick\_spells.npc\_entry](http://www.azerothcore.org/wiki/npc_spellclick_spells#npc_entry))
    -   SourceEntry: spell ([npc\_spellclick\_spells.spell\_id](http://www.azerothcore.org/wiki/npc_spellclick_spells#spell_id))
    -   ConditionTarget:
        -   0 - Clicker
        -   1 - Spellclick target (clickee)

\***CONDITION\_SOURCE\_TYPE\_QUEST\_ACCEPT = 19**

-   -   SourceGroup: ?
    -   SourceEntry: Quest [id](http://www.azerothcore.org/wiki/quest_template#id))
    -   ConditionTarget: always 0

\***CONDITION\_SOURCE\_TYPE\_QUEST\_SHOW\_MARK = 20**

-   -   SourceGroup: ?
    -   SourceEntry: Quest [id](http://www.azerothcore.org/wiki/quest_template#id))
    -   ConditionTarget: always 0

\***CONDITION\_SOURCE\_TYPE\_VEHICLE\_SPELL = 21**

-   -   SourceGroup: creature entry ([creature\_template.entry](http://www.azerothcore.org/wiki/creature_template#creature_template-entry))
    -   SourceEntry: spell (Spell Id from [Spell.dbc](Spell))
    -   ConditionTarget:
        -   0 - Player for which spell bar is shown
        -   1 - Vehicle creature

Note: it will show or hide spells in vehicle spell bar.

\***CONDITION\_SOURCE\_TYPE\_SMART\_EVENT = 22**

-   -   SourceGroup: Id ([smart\_scripts.id](http://www.azerothcore.org/wiki/smart_scripts#id)) + 1
    -   SourceEntry: EntryOrGuid ([smart\_scripts.entryorguid](http://www.azerothcore.org/wiki/smart_scripts#entryorguid))
    -   SourceId: SourceType ([smart\_scripts.source\_type](http://www.azerothcore.org/wiki/smart_scripts#source_type))
    -   ConditionTarget:
        -   0 - Invoker
        -   1 - Object

\***CONDITION\_SOURCE\_TYPE\_NPC\_VENDOR = 23**

-   -   SourceGroup: vendor entry ([npc\_vendor.entry](http://www.azerothcore.org/wiki/npc_vendor#entry))
    -   SourceEntry: item entry ([npc\_vendor.item](http://www.azerothcore.org/wiki/npc_vendor#item))
    -   SourceId: always 0

\***CONDITION\_SOURCE\_TYPE\_SPELL\_PROC = 24**

-   -   SourceGroup: always 0
    -   SourceEntry: spell id of aura which triggers the proc
    -   ConditionTarget:
        -   0 - Actor
        -   1 - ActionTarget

### Explanation of ConditionValueX fields

\***CONDITION\_NONE = 0**

**Never used**

\***CONDITION\_AURA = 1**

-   -   ConditionValue1: spell (Spell Id from [Spell.dbc](Spell))
    -   ConditionValue2: effect index (0-2)
    -   ConditionValue3: always 0

\***CONDITION\_ITEM = 2**

-   -   ConditionValue1: item entry ([item\_template.entry](http://www.azerothcore.org/wiki/item_template#entry))
    -   ConditionValue2: item count
    -   ConditionValue3: in bank? (true=1)

\***CONDITION\_ITEM\_EQUIPPED = 3**

-   -   ConditionValue1: item entry ([item\_template.entry](http://www.azerothcore.org/wiki/item_template#entry))
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_ZONEID = 4**

-   -   ConditionValue1: zone ID where this condition will be true
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_REPUTATION\_RANK = 5**

-   -   ConditionValue1: faction template ID (from [Faction.dbc](Faction))
    -   ConditionValue2: rank (Hated - 1, Hostile - 2, Unfriendly - 4, Neutral - 8, Friendly - 16, Honored - 32, Revered - 64, Exalted - 128) Flags can be added together for all ranks the condition should be true in.
    -   ConditionValue3: always 0

\***CONDITION\_TEAM = 6**

-   -   ConditionValue1: team id (469 - Alliance, 67 - Horde)
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_SKILL = 7**

-   -   ConditionValue1: skill required, see [SkillLine.dbc](SkillLine)
    -   ConditionValue2: skill value
    -   ConditionValue3: always 0

\***CONDITION\_QUESTREWARDED = 8**

-   -   ConditionValue1: ([quest\_template.id](http://www.azerothcore.org/wiki/quest_template#id))
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_QUESTTAKEN = 9**

-   -   ConditionValue1: ([quest\_template.id](http://www.azerothcore.org/wiki/quest_template#id))
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_DRUNKENSTATE = 10**

-   -   ConditionValue1: drunken state: 0 - sober; 1 - tipsy, 2 - drunk, 3 - smashed
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0
    -   (Formerly AD\_COMMISSION\_AURA)

\***CONDITION\_WORLD\_STATE = 11**

-   -   ConditionValue1: world state index
    -   ConditionValue2: world state value
    -   ConditionValue3: always 0

\***CONDITION\_ACTIVE\_EVENT= 12**

-   -   ConditionValue1: event entry ([game\_event.eventEntry](http://www.azerothcore.org/wiki/game_event#evententry))
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_INSTANCE\_INFO = 13**

-   -   ConditionValue1: entry //see corresponding script source files for more info
    -   ConditionValue2: data //see corresponding script source files for more info
    -   ConditionValue3: type:
        -   0 - INSTANCE\_INFO\_DATA
        -   1 - INSTANCE\_INFO\_GUID\_DATA
        -   2 - INSTANCE\_INFO\_BOSS\_STATE
        -   3 - INSTANCE\_INFO\_DATA64

\***CONDITION\_QUEST\_NONE = 14**

-   -   ConditionValue1: ([quest\_template.id](http://www.azerothcore.org/wiki/quest_template#id))
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_CLASS = 15**

-   -   ConditionValue1: class mask. Add flags together for all classes condition should be true for. See [ChrClasses.dbc](ChrClasses)
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_RACE = 16**

-   -   ConditionValue1: race the player must be. Add flags together for all races condition should be true for. See [ChrRaces.dbc](ChrRaces)
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_ACHIEVEMENT = 17**

-   -   ConditionValue1: achievement ID from [Achievement.dbc](Achievement)
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_TITLE = 18**

-   -   ConditionValue1: title ID from [CharTitles.dbc](CharTitles)
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_SPAWNMASK = 19**

-   -   ConditionValue1: spawnMask (see [Gameobject.spawnMask](http://www.azerothcore.org/wiki/gameobject#spawnmask)/[Creature.spawnMask](http://www.azerothcore.org/wiki/creature#spawnmask))
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_GENDER = 20**

-   -   ConditionValue1: 0 = Male, 1 = Female, 2 = None
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_UNIT\_STATE = 21**

-   -   ConditionValue1: UnitState ([enum](https://github.com/azerothcore/azerothcore-wotlk/blob/97e65bd4479272106bba87364d35233d2e4bd2ef/src/server/game/Entities/Unit/Unit.h#L451)) 
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_MAPID = 22**

-   -   ConditionValue1: Map entry
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_AREAID = 23**

-   -   ConditionValue1: Area ID
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_CREATURE\_TYPE = 24**

-   -   ConditionValue1: Creature type ([creature\_template.type](http://www.azerothcore.org/wiki/creature_template#creature_template-entry)). Condition is true if creature\_template.type == ConditionValue1
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_SPELL = 25**

-   -   ConditionValue1: spell (Spell Id from [Spell.dbc](Spell))
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_PHASEMASK = 26**

-   -   ConditionValue1: phasemask value
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_LEVEL = 27**

-   -   ConditionValue1: Player level
    -   ConditionValue2: Optional
        -   0 = Level must be equal
        -   1 = Level must be higher
        -   2 = Level must be lesser
        -   3 = Level must be equal or higher
        -   4 = Level must be equal or lower
    -   ConditionValue3: always 0

\***CONDITION\_QUEST\_COMPLETE = 28**

-   -   ConditionValue1: Quest [id](http://www.azerothcore.org/wiki/quest_template#id)
    -   ConditionValue2: Always 0
    -   ConditionValue3: always 0

*Only if player has all quest objectives complete, but not yet rewarded.*

\***CONDITION\_NEAR\_CREATURE = 29**

-   -   ConditionValue1: Creature [entry](http://www.azerothcore.org/wiki/creature_template#creature_template-entry)
    -   ConditionValue2: Distance (yd)
    -   ConditionValue3: 0 = Alive , 1 = Dead

\***CONDITION\_NEAR\_GAMEOBJECT = 30**

-   -   ConditionValue1: Gameobject [entry](http://www.azerothcore.org/wiki/gameobject_template#entry)
    -   ConditionValue2: Distance (yd)
    -   ConditionValue3: always 0

\***CONDITION\_OBJECT\_ENTRY\_GUID= 31**

-   -   ConditionValue1: TypeID - available object types:
        -   3 - TYPEID\_UNIT
        -   4 - TYPEID\_PLAYER
        -   5 - TYPEID\_GAMEOBJECT
        -   7 - TYPEID\_CORPSE (player corpse, after released spirit)
    -   ConditionValue2: Entry
        -   0 for any object of given type
        -   [Gameobject entry](http://www.azerothcore.org/wiki/gameobject_template#entry) for TypeID = TYPEID\_GAMEOBJECT
        -   [Creature entry](http://www.azerothcore.org/wiki/creature_template#creature_template-entry) for TypeID = TYPEID\_UNIT
    -   ConditionValue3 0 for any object of given type, any other value to match that guid

\***CONDITION\_TYPE\_MASK= 32**

-   -   ConditionValue1: TypeMask - a bitmask of following object types:
        -   0x0008 - TYPEMASK\_UNIT
        -   0x0010 - TYPEMASK\_PLAYER
        -   0x0020 - TYPEMASK\_GAMEOBJECT
        -   0x0080 - TYPEMASK\_CORPSE (player corpse, after released spirit)
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_RELATION\_TO= 33**

-   -   ConditionValue1: target to which relation is checked - one of ConditionTargets available in current SourceType.
    -   ConditionValue2: RelationType - defines relation of current ConditionTarget to target specified in ConditionValue1.
        -   0 - RELATION\_SELF
        -   1 - RELATION\_IN\_PARTY
        -   2 - RELATION\_IN\_RAID\_OR\_PARTY
        -   3 - RELATION\_OWNED\_BY (ConditionTarget is owned by ConditionValue1)
        -   4 - RELATION\_PASSENGER\_OF (ConditionTarget is passenger of ConditionValue1)
        -   5 - RELATION\_CREATED\_BY (ConditionTarget is summoned by ConditionValue1)
    -   ConditionValue3: always 0

\***CONDITION\_REACTION\_TO= 34**

-   -   ConditionValue1: target to which reaction is checked - one of ConditionTargets available in current SourceType.
    -   ConditionValue2: rankMask- defines reactions of current ConditionTarget to target specified in ConditionValue1 which are allowed. This is a bitmask, flags for reactions are:
        -   1 - Hated
        -   2 - Hostile
        -   4 - Unfriendly
        -   8 - Neutral
        -   16 - Friendly
        -   32 - Honored
        -   64 - Revered
        -   128 - Exalted
    -   ConditionValue3: always 0

\***CONDITION\_DISTANCE\_TO= 35**

-   -   ConditionValue1: target to which distance is checked - one of ConditionTargets available in current SourceType.
    -   ConditionValue2: distance - defines distance between current ConditionTarget and target specified in ConditionValue1.
    -   ConditionValue3: ComparisionType:
        -   0 = distance must be equal to ConditionValue2
        -   1 = distance must be higher than ConditionValue2
        -   2 = distance must be lesser than ConditionValue2
        -   3 = distance must be equal or higher than ConditionValue2
        -   4 = distance must be equal or lower than ConditionValue2

\***CONDITION\_ALIVE= 36**

-   -   ConditionValue1: always 0
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0
    -   NegativeCondition:
        -   0 (If target needs to be ALIVE)
        -   1 (If target needs to be DEAD)
            *NOTE: A creature corpse and a creature that\_looks\_dead are two different things. One is actually dead and the other is just using an emote to appear dead.*

\***CONDITION\_HP\_VAL = 37**

-   -   ConditionValue1: HP
    -   ConditionValue2: ComparisionType:
        -   0 = HP must be equal
        -   1 = HP must be higher
        -   2 = HP must be lesser
        -   3 = HP must be equal or higher
        -   4 = HP must be equal or lower
    -   ConditionValue3: always 0

\***CONDITION\_HP\_PCT = 38**

-   
    -   ConditionValue1: Percentage of max HP
    -   ConditionValue2: ComparisionType:
        -   0 = Percentage of max HP must be equal
        -   1 = Percentage of max HP must be higher
        -   2 = Percentage of max HP must be lesser
        -   3 = Percentage of max HP must be equal or higher
        -   4 = Percentage of max HP must be equal or lower
    -   ConditionValue3: always 0

\***CONDITION\_REALM\_ACHIEVEMENT = 39**

-   -   ConditionValue1: achievement ID from [Achievement.dbc](Achievement)
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0

\***CONDITION\_IN\_WATER = 40**

-   -   ConditionValue1: always 0
    -   ConditionValue2: always 0
    -   ConditionValue3: always 0
    -   NegativeCondition:
        -   0 (If target needs to be on land)
        -   1 (If target needs to be in water)

**\*CONDITION\_STAND\_STATE **= 42****

-   -   ConditionValue1: stateType (exact or any)
        -   0 = Exact state used in ConditionValue2
        -   1 = Any type of state in ConditionValue2
    -   ConditionValue2: Exact stand state, or generic state (stand / sit), or  depending on value 1
        -   0 = Standing
        -   1 = Sitting
    -   ConditionValue3: always 0

### \***REFERENCE TEMPLATES**

-   -   SourceTypeOrReferenceId : used as negative, for reference ID
    -   SourceGroup  : always 0
    -   SourceEntry  : always 0
    -   ElseGroup  : OR modifier
    -   ConditionTypeOrReference: [ConditionTypeOrReference](#conditions-ConditionTypeOrReference)
    -   ConditionValue1  : see above
    -   ConditionValue2  : see above
    -   ConditionValue3  : see above
    -   ErrorType  : see above
    -   ErrorTextId  : see above
    -   Comment  : see above

<!-- -->

-   0 (If target needs to be on land)

