# creature\_text

# Table: creature\_text

**Short Description:**

This table holds all the speech text (whisper, say, yell, emote text in speech bubbles and in the chat window) used within [SMART\_SCRIPTS](http://www.azerothcore.org/wiki/smart_scripts) table and core scripts.

**Detailed Description:**

Have you ever wondered how a boss like ***Sindragosa*** (→ [wowhead](http://www.wowhead.com/npc=36853/sindragosa)) is scripted? There is no need to wonder, you can see it for yourself! (→ [Sindragosa Script File](https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/scripts/Northrend/IcecrownCitadel/boss_sindragosa.cpp))

I know, I know - this looks incredibly complex, over 1600 lines of code! However there is no need to understand everything at one time. Let's focus on something simple, but still very important, shall we? 

If you look at the beginning of the code you can find *enum* named Texts which is composed of 12 elements (numbers from 0 to 11), let's look closer at the first element of this *enum*:

**boss\_sindragosa.cpp**  Expand source

``` cpp
 enum Texts
 {
     SAY_AGGRO = 0, // You are fools to have come to this place! The icy winds of Northrend will consume your souls!
     ...
 };
```

You can verify in game for yourself that ***Sindragosa*** will yell this when you start a fight versus her.
Did you notice something interesting? Actual text is placed after a // which means that this information is comment
and our compiler will ignore it. On the other hand we clearly see that she is yelling that text, how is it possible?

## Where is this information stored? How can I find it?

You may say - well this is over 1600 lines long, for sure there must be something, we just didn't find it yet.
I can assure you, you won't find anything, if you don't believe, use CTRL+F shortcut and have some fun with searching!

There is nothing? That's a shame, but maybe, maybe you had a chance to discover something?

**boss\_sindragosa.cpp**  Expand source

``` cpp
 void EnterCombat(Unit* victim) override
 {
     ...
     Talk(SAY_AGGRO); // interesting!
 }
```

Do you see the last line of this function? They are using something which shouldn't work!
We can conclude that this function will be called when ***Sindragosa*** is entering combat (look at function name!), so
now we see why she is yelling at start.

There is still one fundamental question - where is information about this text stored? Answer is
simpler than you might thought. It is stored in **CREATURE\_TEXT** table!

*to be continued...*

## Structure

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
<td><p><a href="#creatureid">CreatureID</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><a href="http://www.azerothcore.org/wiki/creature_template#creature_template-entry">creature_template entry</a></p></td>
</tr>
<tr class="odd">
<td><p><a href="#groupid">GroupID</a></p></td>
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
<tr class="even">
<td><p><a href="#id">ID</a></p></td>
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
<td><p><a href="#text">Text</a></p></td>
<td><p>longtext</p></td>
<td><p>utf8_general_ci</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#type">Type</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#language">Language</a></p></td>
<td><p>tinyint(3)</p></td>
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
<td><p><a href="#probability">Probability</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#emote">Emote</a></p></td>
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
<td><p><a href="#duration">Duration</a></p></td>
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
<td><p><a href="#sound">Sound</a></p></td>
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
<td><a href="#broadcasttextid">BroadcastTextId</a></td>
<td>mediumint(6)</td>
<td>signed</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td><a href="#textrange">TextRange</a></td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td><br />
</td>
<td>NO</td>
<td>0</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#comment">comment</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>utf8_general_ci</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p>' '</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

## Description of the fields

### CreatureID

This is the [creature\_template.entry](http://www.azerothcore.org/wiki/creature_template#creature_template-entry) to which the script is linked to.

### GroupID

If there is more than one of the same entry (more than one text the creature says), this column is used to choose if it is a random say or an ordered list. If a creature has got more than one say text to be shown in a given order, it must be incremented for each new matching entry (ex. 0, 1, 2, 3...). If there is only one entry or only one group, this value should be 0. If there are multiple groups of texts, this value stays the same within the group while the id increments within the same group.

Example from Stormwind City Guard, creature 68:

| CreatureID | GroupID | ID  | Text                                                                                                                       |
|------------|---------|-----|----------------------------------------------------------------------------------------------------------------------------|
| 68         | 0       | 0   | Taste blade, mongrel!                                                                                                      |
| 68         | 0       | 1   | Please tell me that you didn't just do what I think you just did. Please tell me that I'm not going to have to hurt you... |
| 68         | 0       | 2   | As if we don't have enough problems, you go and create more!                                                               |
| 68         | 2       | 0   | %s throws a rotten apple at $n.                                                                                            |
| 68         | 3       | 0   | %s throws rotten banana on $n.                                                                                             |
| 68         | 4       | 0   | %s spits on $n.                                                                                                            |
| 68         | 5       | 0   | Monster!                                                                                                                   |
| 68         | 5       | 1   | Murderer!                                                                                                                  |
| 68         | 5       | 2   | GET A ROPE!                                                                                                                |
| 68         | 5       | 3   | How dare you set foot in our city!                                                                                         |
| 68         | 5       | 4   | You disgust me.                                                                                                            |
| 68         | 5       | 5   | Looks like we're going to have ourselves an execution.                                                                     |
| 68         | 5       | 6   | Traitorous dog.                                                                                                            |
| 68         | 5       | 7   | My family was wiped out by the Scourge! MONSTER!                                                                           |

### ID

Entry for each group of texts. This is the unique identifier when entry (creature) is the same and groupid is unchanged, it must be incremented (ex. 0, 1, 2, 3...). A creature say will be randomly selected from this list based on the groupid it belongs to.

### Text

The text the creature will say.

### Type

| Value | Old value | Localization | Picture Example                               |
|-------|-----------|--------------|-----------------------------------------------|
| 12    | 0         | Say          | ![Say](assets/images/Say.png)                 |
| 14    | 1         | Yell         | ![Yell](assets/images/Yell.png)               |
| 16    | 2         | Emote        | ![Emote](assets/images/Emote.png)             |
| 41    | 3         | Boss Emote   | ![BossEmote](assets/images/BossEmote.png)     |
| 15    | 4         | Whisper      | ![Whisper](assets/images/Whisper.png)         |
| 42    | 5         | Boss Whisper | ![BossWhisper](assets/images/BossWhisper.png) |

### Language

Value from [Languages.dbc](Languages) (+ the wiki table from the dbc file). When set to 0, the current default language will be used.

### Probability

A value from 1-100 that represents the percentage chance that this text will be executed.

### Emote

The emote that the creature plays when the text is executed. Value to use in this field can be obtained from the [emote.dbc](Emotes)

### Duration

Time in ms to see text.
0 is default and calculated by core.

### Sound

The sound entry this creature will play at the same time the text is executed. Sounds are found in SoundEntries.dbc.

### BroadcastTextId

Id of the equivalent text found in [broadcast\_text](broadcast_text)

### TextRange

| Value | Range          |
|-------|----------------|
| 0     | Normal/Default |
| 1     | Area           |
| 2     | Zone           |
| 3     | Map            |
| 4     | World          |

### comment

This field allows you to label a text entry.

