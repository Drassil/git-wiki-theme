# Introduction
This table is responsible for storing every bubble chat text whose are either handled by Smart AI or by core scripts.
Any NPC stored in creature_template can use the table creature_text to talk because they are linked through the row _entry_.
Smart AI can link the talk event with the creature text and the core is prepared to control the creature talk because the Talk function from a creature will query the database for his text object and then it will be handled by the core so it will decide either it is a yell, say, whisper or an emote.

# How to use
### Core Scripts
Some code standards should be followed when using this table on a creature script for example:
* Create an enum for the specific texts so you can avoid confusion with other events for the same creature;

``` c++
enum arthas
{
    ARTHAS_RAGE = 0, // APOCALIPSE
    EVENT_SPELL_FROSTSTRIKE = 0 // Will give compiler error because you can't share the same enum value
};
```

* The enum must be typed in caps as if it were a const so you can improve readability;

``` c++
enum arthas_text
{
    ARTHAS_RAGE = 0, // APOCALIPSE
};
```

#### Consider the following script. It has all the standard norms that someone should follow if he/she where to make a creature to say something.

``` c++
enum tyrion_text
{
    EVENT_SAY_FINAL_BLESSING = 0 // Light, grant me one final blessing... Give me the strength to shatter these bonds!
};

(...)
void PlayersDied(int32 param)
{
    if (param == EVENT_SAY_FINAL_BLESSING)
    {
        me->AI()->Talk(EVENT_SAY_1);
    }
}
```
---
### Smart AI

Imagine that our following Lich King creature_text only has 1 Group ID which is 0 and his creature_text contains the following line:  **_Frostmourne Hungers_**

If we want to make him say his line when he enters combat we only need to set his smart AI event type to 4 (when the npc gets aggro), action_type to 1 (action type equivalent to talk event) and action_param1 to 0 (which is our desired group id in creature_text).

For more information about smart_scripts table check this [link](https://github.com/azerothcore/azerothcore-wotlk/wiki/smart_scripts).
``` SQL
# Our Lich King will shout "Frostmourne hungers" on aggro
UPDATE smart_scripts
SET event_type = 4,action_type = 1,action_param1 = 0
WHERE entry = Lich King entry;
```
---

# Table Structure

Name | Primary Key | Data Type | Length/Set | Unsigned| Allow NULL | Default | Comment
--- | --- | --- | --- | --- | --- | --- | ---
entry | Yes | MEDIUMINT| 8 | Yes | No | 0 | None
groupid| Yes | TINYINT | 3 | Yes | No | 0 | None
id| Yes | TINYINT | 3 | Yes | No | 0 | None
text| | LONGTEXT| 4294967295 / 4 GiB| No| Yes| No default | None
type| | TINYINT | 3 | Yes | No | 0 | None
language| | TINYINT | 3 | Yes | No | 0 | None
probability| | FLOAT|  | No | No | 0 | None
emote| | MEDIUMINT| 8 | Yes | No | 0 | None
duration| | MEDIUMINT| 8 | Yes | No | 0 | None
sound| | MEDIUMINT| 8 | Yes | No | 0 | None
BroadcastTextID| | MEDIUMINT| 6 | Yes | No | 0 | None
TextRange|  | TINYINT| 3 | Yes | No | 0 | None
comment|  | VARCHAR| 255 | No | Yes |  | None