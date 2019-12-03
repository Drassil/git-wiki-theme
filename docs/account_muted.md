# account\_muted

**The \`account\_muted\` table**


This table contains account IDs whose characters are assigned a ban chat (mute).


GM-Command: **.mute [$playerName] $timeInMinutes [$reason]**.

Disable chat messaging for any character from account of character $playerName (or currently selected) at $timeInMinutes minutes. Player can be offline.

**Structure**

| Field                       | Type         |  Key | Null | Default | Extra | Comment |
|-----------------------------|--------------|------|------|---------|-------|---------|
| [guid](#guid)               | int(10)      |  PRI | NO   | 0       |       |Global Unique Identifier|
| [mutedate](#mutedate)       | int(10)      |  PRI | NO   | 0       |       |         |
| [mutetime](#mutetime)       | int(10)      |      | NO   | 0       |       |         |
| [mutedby](#mutedby)         | varchar(50)  |      | NO   | 0       |       |         |
| [mutereason](#mutereason)   | varchar(255) |      | NO   | 0       |       |         |

### Description of the fields

### guid

ID of muted account, taken from muted character. All characters on this account will be muted for [mutetime](#mutetime).

### mutedate

The date then mute started. Used UNIX timestamp.

### mutetime

Mute duration in minutes.

### mutedby

Nickname of GM/moderator who issued the mute.

#### mutereason

Text field with description of mute's reason.
