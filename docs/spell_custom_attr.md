# spell\_custom\_attr

[<-Back-to:World](database-world.md)

**The \`spell\_custom\_attr\` table**

Table used for storing custom spell attributes.

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
<td><p><a href="#entry">entry</a></p></td>
<td><p>medium int(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>spell id</p></td>
</tr>
<tr class="odd">
<td><p><a href="#attributes">ttributes</a></p></td>
<td><p>medium int(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>SpellCustomAttributes</p></td>
</tr>
</tbody>
</table>

 

 

**Description of the fields**

### entry

Spell ID. See [Spell.dbc](spell_dbc) .

### attributes

Spell custom attributes from the enumeration SpellCustomAttributes in SpellInfo.h

``` sql
SET @SPELL_ATTR0_CU_ENCHANT_PROC                  = 1,
    @SPELL_ATTR0_CU_CONE_BACK                     = 2,
    @SPELL_ATTR0_CU_CONE_LINE                     = 4,
    @SPELL_ATTR0_CU_SHARE_DAMAGE                  = 8,
    @SPELL_ATTR0_CU_NO_INITIAL_THREAT             = 16,
    @SPELL_ATTR0_CU_AURA_CC                       = 64,
    @SPELL_ATTR0_CU_DIRECT_DAMAGE                 = 256,
    @SPELL_ATTR0_CU_CHARGE                        = 512,
    @SPELL_ATTR0_CU_PICKPOCKET                    = 1024,
    @SPELL_ATTR0_CU_NEGATIVE_EFF0                 = 4096,
    @SPELL_ATTR0_CU_NEGATIVE_EFF1                 = 8192,
    @SPELL_ATTR0_CU_NEGATIVE_EFF2                 = 16384,
    @SPELL_ATTR0_CU_IGNORE_ARMOR                  = 32768,
    @SPELL_ATTR0_CU_REQ_TARGET_FACING_CASTER      = 65536,
    @SPELL_ATTR0_CU_REQ_CASTER_BEHIND_TARGET      = 131072;

DELETE FROM `spell_custom_attr` WHERE `entry`=123;
INSERT INTO `spell_custom_attr` (`entry`, `attributes`) VALUES
(123, @SPELL_ATTR0_CU_FLAG1 | @SPELL_ATTR0_CU_FLAG2);
```


