[Database Structure](Database-Structure) > [World-Database](World-Database) > [event_scripts](event_scripts)

# event\_scripts

### Information

Holds scripts activated whenever an event is activated, be it by an object or as the spell effect SPELL\_EFFECT\_SEND\_EVENT (61).

### Structure

| Field                            | Type         | Attributes   | Key | Null | Default |
|----------------------------------|--------------|--------------|-----|------|---------|
| [id](scripts#id)                 | mediumint(8) | unsigned     |     | NO   | 0       |
| [delay](scripts#delay)           | int(10)      | unsigned     |     | NO   | 0       |
| [command](scripts#command)       | mediumint(8) | unsigned     |     | NO   | 0       |
| [datalong](scripts#otherfields)  | mediumint(8) | unsigned     |     | NO   | 0       |
| [datalong2](scripts#otherfields) | int(10)      | unsigned     |     | NO   | 0       |
| [dataint](scripts#otherfields)   | int(11)      |              |     | NO   | 0       |
| [x](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [y](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [z](scripts#otherfields)         | float        |              |     | NO   | 0       |
| [o](scripts#otherfields)         | float        |              |     | NO   | 0       |

