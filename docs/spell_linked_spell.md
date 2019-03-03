# spell\_linked\_spell

[<-Back-to:World](database-world.md)

**The \`spell\_linked\_spell\` table**

This table provides data for spell linking system, telling it which spells trigger what, and under which conditions.

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
<td><p><a href="#spell_trigger">spell_trigger</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#spell_effect">spell_effect</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#type">type</a></p></td>
<td><p>smallint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#comment">comment</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### spell\_trigger

The spell, which when cast, will trigger the spell listed in [spell\_effect](#spell_linked_spell-spell_effect)

### spell\_ effect

The spell that you want to be triggered. How this spell acts is determined by the [type](#spell_linked_spell-type) field.

### type

Three values are possible (0,1,2). See below.

### comment

Optional comment to explain the link.

# **Description of the linking effects**

### type h1. 0 (CAST)

**Trigger mode**

\***spell\_trigger &gt; 0:** "When *spell\_trigger* is cast..."
\***spell\_trigger &lt; 0:** "When the aura due to *spell\_trigger* is removed..."

**Effect**

\***spell\_effect &gt; 0:** *spell\_effect* is also cast (with triggered flag) on the same targets, on the caster if spell\_trigger has no target.
\***spell\_effect &lt; 0:** Auras due to *spell\_effect* are removed.

### type 1 (HIT)

**Trigger mode**

For this mode *spell\_trigger* must be positive. Effect is executed when *spell\_trigger* hits a target. I suppose that if the *spell\_trigger* hits more than one target, the effect is executed for each target hit.

**Effect**

\***spell\_effect &gt; 0:** *spell\_effect* is cast (with triggered flag) on the same target.
\***spell\_effect &lt; 0:** Auras due to *spell\_effect* are removed.

### type == 2 (AURA)

**Trigger mode**

For this mode *spell\_trigger* must be positive. Effect is executed when the aura *spell\_trigger* is applied **AND** when it is removed from a target.

**Effect**

\***spell\_effect &gt; 0 (ADD/REMOVE AURA)**

-   ON APPLY: Adds aura *spell\_effect* on the same target.

<!-- -->

-   ON REMOVE: Removes aura *spell\_effect*on the same target.

    \***spell\_effect &lt; 0 (IMMUNITY)**

-   ON APPLY: Makes the target immune to *spell\_effect*.

<!-- -->

-   ON REMOVE: Clears target immunity to *spell\_effect*.

