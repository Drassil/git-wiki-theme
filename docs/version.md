# version

[<-Back-to:World](database-world.md)

**The \`version\` table**

Includes information on current core and database version.

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
<td><p><a href="#core_version">core_version</a></p></td>
<td><p>varchar(120)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Core revision dumped at startup</p></td>
</tr>
<tr class="odd">
<td><p><a href="#core_revision">core_revision</a></p></td>
<td><p>bigint(20)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Core revision hash</p></td>
</tr>
<tr class="even">
<td><p><a href="#db_version">db_version</a></p></td>
<td><p>varchar(120)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Version of world DB</p></td>
</tr>
<tr class="odd">
<td><p><a href="#script_version">script_version</a></p></td>
<td><p>varchar(120)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p>Version of scripts DB</p></td>
</tr>
<tr class="even">
<td><p><a href="#cache_id">cache_id</a></p></td>
<td><p>int(10)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p>Minor DB version</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### core\_version

Full text description from the core  version your server is currently running on.
Example: TrinityCore rev. 8e48ef7863c5 2015-03-22 01:28:02 +0100 (6.x branch) (Win64, Release)

### core\_revision

Core Revision Hash your server is currently running on, i.e. **Unknown** or **8e48ef7863c5**

### db\_version

Database Version your server is currently running on. Example: **TDB .58**

### script\_version

`Version of scripts DB`

### cache\_id

`Minor DB version. Example: 58`
