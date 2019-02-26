# spell\_group\_stack\_rules

[<-Back-to:World](database-world.md)

**The \`spell\_group\_stack\_rules\` table**

Table defines if auras in one spell\_group can't stack with each other.

Notes: The table doesn't affect persistent area auras stacking or passive auras stacking (they can stack always) or spells belonging to same spell\_rank (they are always subject of SPELL\_GROUP\_STACK\_RULE\_EXCLUSIVE rule)

|                                                    |            |                |         |          |             |           |             |
|----------------------------------------------------|------------|----------------|---------|----------|-------------|-----------|-------------|
| **Field**                                          | **Type**   | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment** |
| [group\_id](#spell_group_stack_rules-group_id)     | int(11)    | unsigned       | PRI     | NO       | 0           |           |             |
| [stack\_rule](#spell_group_stack_rules-stack_rule) | tinyint(3) | signed         |         | NO       | 0           |           |             |

**Description of the fields**

### group\_id

Id of group in [spell\_group](spell_group_2130135.html#spell_group-id) table. The spell\_group may contain another spell\_groups inside, if so stacking rule needs to be defined for these groups separately.

### stack\_rule

Enum SpellGroupStackRule in core:

| Id  | Stack Rule Name                                          | Description                                                              |
|-----|----------------------------------------------------------|--------------------------------------------------------------------------|
| 0   | SPELL\_GROUP\_STACK\_RULE\_DEFAULT                       | No stacking rule defined - placeholder                                   |
| 1   | SPELL\_GROUP\_STACK\_RULE\_EXCLUSIVE                     | Auras from group can't stack with each other                             |
| 2   | SPELL\_GROUP\_STACK\_RULE\_EXCLUSIVE\_FROM\_SAME\_CASTER | Auras from group can't stack with each other when cast by same caster    |
| 3   | SPELL\_GROUP\_STACK\_RULE\_EXCLUSIVE\_SAME\_EFFECT       | Same effects of spells will not stack, yet auras will remain on a target |
| 4   | SPELL\_GROUP\_STACK\_RULE\_EXCLUSIVE\_HIGHEST            | Only Highest effect will remain on target                                |

A spell should be in only 1 group with this stack rule.
