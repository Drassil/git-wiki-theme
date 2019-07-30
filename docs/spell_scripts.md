[Database Structure](Database-Structure) > [World-Database](World-Database) > [spell_scripts](spell_scripts)

# spell\_scripts

### Information

Holds scripts that can be activated by spells with effect SPELL\_EFFECT\_SCRIPT\_EFFECT (77) or SPELL\_EFFECT\_DUMMY(3).

### Structure

| Field                            | Type         | Attributes   | Key | Null | Default |
|----------------------------------|--------------|--------------|-----|------|---------|
| [id](scripts#id)                 | mediumint(8) | unsigned     |     | NO   | 0       |
| [effIndex](scripts#effindex)     | tinyint(3)   | unsigned     |     | NO   | 0       |
| [delay](scripts#delay)           | int(10)      | unsigned     |     | NO   | 0       |
| [command](scripts#command)       | mediumint(8) | unsigned     |     | NO   | 0       |
| [datalong](scripts#otherfields)  | mediumint(8) | unsigned     |     | NO   | 0       |
| [datalong2](scripts#otherfields) | int(10)      | unsigned     |     | NO   | 0       |
| [dataint](scripts#otherfields)   | int(11)      |              |     | NO   | 0       |
| [x](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [y](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [z](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [o](scripts#otherfields)         | float        |              |     | NO   | 0       |

