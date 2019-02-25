# playercreateinfo\_skills

# playercreateinfo\_skills table

This table holds information on what skills newly created characters should start out with. A character in this table is defined by his/her race and class combination.

## Structure

| Field                                       | Type         | Attributes | Key | Null | Default | Extra | Comment |
|---------------------------------------------|--------------|------------|-----|------|---------|-------|---------|
| [racemask](#playercreateinfo_skills-race)   | int(10)      | unsigned   | PRI | NO   |         |       |         |
| [classmask](#playercreateinfo_skills-class) | int(10)      | unsigned   | PRI | NO   |         |       |         |
| [skill](SkillLine)                          | smallint(5)  | unsigned   | PRI | NO   |         |       |         |
| rank                                        | smallint(5)  | unsigned   |     | NO   | 0       |       |         |
| Comment                                     | varchar(255) | signed     |     | YES  |         |       |         |

 

## Description of the fields

### racemask

One or more character's race. See [ChrRaces](ChrRaces).

### classmask

One or more character's class. See ChrClasses.

### Spell

Skill id. See [Skill.dbc](SkillLine)

### Rank

Rank of the skill.

### Comment

A description of the skill.
