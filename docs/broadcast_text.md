# broadcast\_text

**The \`broadcast\_text\` table**

 

This table (ref <https://github.com/TrinityCore/TrinityCore/commit/60e87db>) will have **everything** you need for your scripts' texts, such as: [gossips](gossip_menu_option), [creature texts](creature_text) and [npc\_text](npc_text)s.

Its purpose is (will be) used as a globalized table containing the texts as mentionned above, and things like their sounds, their emotes and the languages in which the texts should be said.

 

All the values are from sniffs (ADBVerified) so, don't add things in it - Kinzcool.

**Structure**

| Field                                    | Type        | Attributes | Key | Null | Default | Extra | Comment |
|------------------------------------------|-------------|------------|-----|------|---------|-------|---------|
| [ID](#broadcast_text-ID)                 | int(10)     | unsigned   | PRI | NO   | 0       |       |         |
| [Language](#broadcast_text-Language)     | int(11)     | unsigned   |     | NO   | 0       |       |         |
| [MaleText](#broadcast_text-MaleText)     | text        | signed     |     | YES  | NULL    |       |         |
| [FemaleText](#broadcast_text-FemaleText) | text        | signed     |     | YES  | NULL    |       |         |
| EmoteID1                                 | int(10)     | unsigned   |     | NO   | 0       |       |         |
| EmoteID2                                 | int(10)     | unsigned   |     | NO   | 0       |       |         |
| EmoteID3                                 | int(10)     | unsigned   |     | NO   | 0       |       |         |
| EmoteDelay1                              | int(10)     | unsigned   |     | NO   | 0       |       |         |
| EmoteDelay2                              | int(10)     | unsigned   |     | NO   | 0       |       |         |
| EmoteDelay3                              | int(10)     | unsigned   |     | NO   | 0       |       |         |
| SoundId                                  | int(10)     | unsigned   |     | NO   | 0       |       |         |
| UnkEmoteID                               | int(10)     | unsigned   |     | NO   | 0       |       |         |
| Type                                     | int(10)     | unsigned   |     | NO   | 0       |       |         |
| WDBVerified                              | smallint(5) | signed     |     | NO   | 0       |       |         |

### Description of the fields

 

### ID

The unique ID value for the text.

### Language

The language in what the text will be broadcasted.

IDs from Languages.dbc

### MaleText

The text that the male creature will broadcast, or male characters can read from gossip menu.

### FemaleText

The text that the female creature will broadcast, or female characters can read from gossip menu.

### EmoteID\[1-3\]

The emotes played when the texts are broadcast.

IDs from Emotes.dbc

### EmoteDelay\[1-3\]

The delays of the broadcast emotes.

### SoundId

The sounds played when the texts are broadcast.

IDs from SoundEntries.dbc

### UnkEmoteID

An emote.

### Type

 

#### WDBVerified

This field was used to determine whether a template has been verified from WDB files (ADB files for this one).

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific [client build](http://archive.trinitycore.info/DB:Auth:realmlist#gamebuild "DB:Auth:realmlist") and manually edited later for some special necessity.

 
