# quest\_greeting

**Table: quest\_greeting**

This table add greeting behavior to an NPC or an Gameobject.

<table>
<thead>
<tr class="header">
<th>Field</th>
<th>Type</th>
<th>Attributes</th>
<th>Key</th>
<th>NULL</th>
<th>Default</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="#id">ID</a></td>
<td>mediumint</td>
<td>Unsigned</td>
<td>Yes</td>
<td>NO</td>
<td>0</td>
<td>Unique ID (<a href="https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-entry">creature_template.entry</a> or <a href="https://trinitycore.atlassian.net/wiki/display/tc/gameobject_template#gameobject_template-entry">gameobject_template.entry</a>)</td>
</tr>
<tr class="even">
<td><a href="#type">Type</a></td>
<td>tinyint</td>
<td>Unsigned</td>
<td>Yes</td>
<td>NO</td>
<td>0</td>
<td>0=Creature 1=GameObject</td>
</tr>
<tr class="odd">
<td><a href="#greetemotetype">GreetEmoteType</a></td>
<td>smallint</td>
<td>Unsigned</td>
<td>NO</td>
<td>NO</td>
<td>0</td>
<td>Quest NPC <a href="https://trinitycore.atlassian.net/wiki/display/tc/Emotes">Emote</a></td>
</tr>
<tr class="even">
<td><a href="#greetemotedelay">GreetEmoteDelay</a></td>
<td>int</td>
<td>Unsigned</td>
<td>NO</td>
<td>NO</td>
<td>0</td>
<td>Emote delay in milliseconds</td>
</tr>
<tr class="odd">
<td><a href="#greeting">Greeting</a></td>
<td>text</td>
<td><br />
</td>
<td>NO</td>
<td>YES</td>
<td>NULL</td>
<td>Text to show</td>
</tr>
<tr class="even">
<td><a href="#verifiedbuild">VerifiedBuild</a></td>
<td>smallint</td>
<td>Signed</td>
<td>NO</td>
<td>NO</td>
<td>0</td>
<td>Game client Build number or manually set value</td>
</tr>
</tbody>
</table>

**Description of the fields:**

### ID

Unique ID ([creature\_template.entry](https://trinitycore.atlassian.net/wiki/display/tc/creature_template#creature_template-entry) or [gameobject\_template.entry](https://trinitycore.atlassian.net/wiki/display/tc/gameobject_template#gameobject_template-entry))

### Type

-   0=Creature (The ID is point to creature\_template.entry)
-   1=GameObject (The ID is point to gameobject\_template.entry)

### GreetEmoteType

Quest NPC [Emote](https://trinitycore.atlassian.net/wiki/display/tc/Emotes)

### GreetEmoteDelay

Emote delay in milliseconds

### Greeting

Text to show

### VerifiedBuild

This field is used by the TrinityCore DB Team to determine whether a template has been verified from WDB files.

-   If value is 0, it has not been parsed yet.
-   If value is &gt; 0, it has been parsed with WDB files from that specific [Client Build](https://trinitycore.atlassian.net/wiki/display/tc/realmlist#realmlist-gamebuild).
-   If value is -1, it is just a place holder until proper data are found on WDBs.
-   If value is -[Client Build](https://trinitycore.atlassian.net/wiki/display/tc/realmlist#realmlist-gamebuild), it was parsed with WDB files from that specific [client build](https://trinitycore.atlassian.net/wiki/display/tc/realmlist#realmlist-gamebuild) and manually edited later for some specific necessity.


