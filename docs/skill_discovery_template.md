# skill\_discovery\_template

[<-Back-to:World](database-world.md)

**The \`skill\_discovery\_template\` table**

This table controls the so called "discovery" system of learning spells. This system is solely ![(question)](images/icons/emoticons/help_16.png){.emoticon .emoticon-question} used by the alchemy profession and controls the chance for a player to "discover" another recipe while creating items with other recipes.

**Structure**

<table>
<colgroup>
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
</colgroup>
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
<td><p><a href="#spellid">spellId</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>SpellId of the discoverable spell</p></td>
</tr>
<tr class="odd">
<td><p><a href="#reqspell">reqSpell</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>spell requirement</p></td>
</tr>
<tr class="even">
<td><p><a href="#reqskillvalue">reqSkillValue</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>skill points requirement</p></td>
</tr>
<tr class="odd">
<td><p><a href="#chance">chance</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>chance to discover</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### spellId

The recipe spell ID that has a chance to be automatically discovered. See Spell.dbc

### reqSpell

If nonzero, this field controls what spell must be specifically used to trigger the discovery (eg, spell 41458 will only be discovered while using spell 28575). If it is zero, then any recipe use can trigger the discovery. See Spell.dbc

### reqSkillValue

`field-no-description|3`

### chance

The chance, in percent, that a recipe has of being automatically "discovered", whether by any recipe use or by the specific recipe use defined in [reqSpell](#skill_discovery_template-reqSpell)
