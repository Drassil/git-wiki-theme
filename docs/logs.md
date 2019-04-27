# logs

[<-Back-to:Auth](database-auth.md)

**The \`logs\` table**

This table stores all logs from authserver if database logging in config is enabled.

**Structure**

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
<td><p><a href="#time">time</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#realm">realm</a></p></td>
<td><p>realm(10)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#type">type</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#level">level</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#string">string</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p> </p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### time

A unixtime timestamp indicating when this string was logged.

### realm

The [RealmID](realmlist_2130016.html#realmlist-id) of the realm this log string came from. 0 if realmd.

### type

The type of log this is:

| Values                 | Description                 |
|------------------------|-----------------------------|
| LOG_TYPE_STRING   = 0  | a normal informative string |
| LOG_TYPE_ERROR    = 1  | some sort of error          |
| LOG_TYPE_BASIC    = 2  | basic information           |
| LOG_TYPE_DETAIL   = 3  | detailed information        |
| LOG_TYPE_DEBUG    = 4  | debugging information       |
| LOG_TYPE_CHAR     = 5  | character-related           |
| LOG_TYPE_WORLD    = 6  | world packet dump           |
| LOG_TYPE_RA       = 7  | remote access logs          |
| LOG_TYPE_GM       = 8  | gm command logs             |
| LOG_TYPE_CRASH    = 9  | crash alarm logs            |
| LOG_TYPE_CHAT     = 10 | chat/message logs           |

### level

Depends on LogLevel in authserver.conf

-   1 - (Trace)
-   2 - (Debug)
-   3 - (Info)
-   4 - (Warn)
-   5 - (Error)
-   6 - (Fatal)

### string

The actual string that has been logged.
