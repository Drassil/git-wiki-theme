# characters (table)

[<-Back-to:Characters](database-characters.md)

**The \`characters\` table**

This table holds vital static information for each character. This information loaded and used to create the player objects in-game.

**Structure**

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
<td><p><a href="#guid">guid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p>Unique</p></td>
<td><p>Global Unique Identifier</p></td>
</tr>
<tr class="odd">
<td><p><a href="#account">account</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>Account Identifier</p></td>
</tr>
<tr class="even">
<td><p><a href="#name">name</a></p></td>
<td><p>varchar(12)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#race">race</a></p></td>
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
<td><p><a href="#class">class</a></p></td>
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
<td><p><a href="#gender">gender</a></p></td>
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
<td><p><a href="#level">level</a></p></td>
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
<td><p><a href="#xp">xp</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#money">money</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#playerbytes">playerBytes</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#playerbytes2">playerBytes2</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#playerflags">playerFlags</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#position_x">position_x</a></p></td>
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
<td><p><a href="#position_y">position_y</a></p></td>
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
<tr class="even">
<td><p><a href="#position_z">position_z</a></p></td>
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
<td><p><a href="#map">map</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>Map Identifier</p></td>
</tr>
<tr class="even">
<td><p><a href="#instance_id">instance_id</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#instance_mode_mask">instance_mode_mask</a></p></td>
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
<td><p><a href="#orientation">orientation</a></p></td>
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
<td><p><a href="#taximask">taximask</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#online">online</a></p></td>
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
<td><p><a href="#cinematic">cinematic</a></p></td>
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
<td><p><a href="#totaltime">totaltime</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#leveltime">leveltime</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#logout_time">logout_time</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#is_logout_resting">is_logout_resting</a></p></td>
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
<td><p><a href="#rest_bonus">rest_bonus</a></p></td>
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
<td><p><a href="#resettalents_cost">resettalents_cost</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#resettalents_time">resettalents_time</a></p></td>
<td><p>int(0)</p></td>
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
<td><p><a href="#trans_x">trans_x</a></p></td>
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
<tr class="even">
<td><p><a href="#trans_y">trans_y</a></p></td>
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
<td><p><a href="#trans_z">trans_z</a></p></td>
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
<tr class="even">
<td><p><a href="#trans_o">trans_o</a></p></td>
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
<td><p><a href="#transguid">transguid</a></p></td>
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
<td><p><a href="#extra_flags">extra_flags</a></p></td>
<td><p>smallint(5)</p></td>
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
<td><p><a href="#stable_slots">stable_slots</a></p></td>
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
<td><p><a href="#at_login">at_login</a></p></td>
<td><p>smallint(5)</p></td>
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
<td><p><a href="#zone">zone</a></p></td>
<td><p>smallint(5)</p></td>
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
<td><p><a href="#death_expire_time">death_expire_time</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#taxi_path">taxi_path</a></p></td>
<td><p>text</p></td>
<td><p>signed</p></td>
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
<td><p><a href="#arenapoints">arenaPoints</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#totalhonorpoints">totalHonorPoints</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#todayhonorpoints">todayHonorPoints</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#yesterdayhonorpoints">yesterdayHonorPoints</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#totalkills">totalKills</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#todaykills">todayKills</a></p></td>
<td><p>smallint(5)</p></td>
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
<td><p><a href="#yesterdaykills">yesterdayKills</a></p></td>
<td><p>smallint(5)</p></td>
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
<td><p><a href="#chosentitle">chosenTitle</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#knowncurrencies">knownCurrencies</a></p></td>
<td><p>bigint(20)</p></td>
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
<td><p><a href="#watchedfaction">watchedFaction</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#drunk">drunk</a></p></td>
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
<td><p><a href="#health">health</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#power">power1</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#power">power2</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#power">power3</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#power">power4</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#power">power5</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#power">power6</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#power">power7</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#latency">latency</a></p></td>
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
<td><p><a href="#speccount">speccount</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#url=confluenceTdpec</a></p></td>
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
<td><p><a href="#exploredzones">exploredZones</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#equipmentcache">equipmentCache</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#ammoid">ammoId</a></p></td>
<td><p>int(10)</p></td>
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
<td><p><a href="#knowntitles">knownTitles</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#actionbars">actionBars</a></p></td>
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
<td><p><a href="#grantablelevels">grantableLevels</a></p></td>
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
<td><p><a href="#deleteinfos_account">deleteInfos_Account</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#deleteinfos_name">deleteInfos_Name</a></p></td>
<td><p>varchar(12)</p></td>
<td><p>unsigned</p></td>
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
<td><p><a href="#deletedate">deleteDate</a></p></td>
<td><p>int(10)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

The character global unique identifier. This number must be unique and is the best way to identify separate characters.

### account

The account ID in which this character resides. See [account.id](account_2130004.html#account-id). in the auth database.

### name

The name of the character.

### race

The race of the character. See [ChrRaces.dbc](ChrRaces)

### class

The class of the character: [ChrClasses.dbc](https://trinitycore.atlassian.net/wiki/display/tc/ChrClasses)

### gender

The gender of the character.

|    |             |
| -- | ---         |
| 0  | Male        |
| 1  | Female      |
| 2  | Unknown (?) |


### level

The level of the character.

### xp

The amount of experience this character has earned towards the next level.

### money

The amount of copper this character has.

### playerBytes

contains data about the skincolor,facestyle,hairstyle and haircolor of the character

-   skinColor = playerbytes  % 256
-   faceStyle = (playerbytes &gt;&gt; 8) % 256
-   hairStyle = (playerbytes &gt;&gt; 16) % 256
-   hairColor = (playerbytes &gt;&gt; 24) % 256

### playerBytes2

data about facial hair

-   facialHair = playerBytes2 % 256

### playerFlags

A bitmask that represents what Player flags the player has. Each bit controls a different flag and to combine flags, you can add each flag that you want, in effect activating the respective bits.

| Flag     |            | Name                          | Comment                                                                           |
|----------|------------|-------------------------------|-----------------------------------------------------------------------------------|
| 1        | 0x00000001 | PLAYER_FLAGS_GROUP_LEADER     |                                                                                   |
| 2        | 0x00000002 | PLAYER_FLAGS_AFK              |                                                                                   |
| 4        | 0x00000004 | PLAYER_FLAGS_DND              |                                                                                   |
| 8        | 0x00000008 | PLAYER_FLAGS_GM               |                                                                                   |
| 16       | 0x00000010 | PLAYER_FLAGS_GHOST            |                                                                                   |
| 32       | 0x00000020 | PLAYER_FLAGS_RESTING          |                                                                                   |
| 64       | 0x00000040 | PLAYER_FLAGS_UNK7             |                                                                                   |
| 128      | 0x00000080 | PLAYER_FLAGS_UNK8             | pre-3.0.3 PLAYER_FLAGS_FFA_PVP flag for FFA PVP state                             |
| 256      | 0x00000100 | PLAYER_FLAGS_CONTESTED_PVP    | Player has been involved in a PvP combat and will be attacked by contested guards |
| 512      | 0x00000200 | PLAYER_FLAGS_IN_PVP           |                                                                                   |
| 1024     | 0x00000400 | PLAYER_FLAGS_HIDE_HELM        |                                                                                   |
| 2048     | 0x00000800 | PLAYER_FLAGS_HIDE_CLOAK       |                                                                                   |
| 4096     | 0x00001000 | PLAYER_FLAGS_PLAYED_LONG_TIME | played long time                                                                  |
| 8192     | 0x00002000 | PLAYER_FLAGS_TOO_LONG         | played too long time                                                              |
| 16384    | 0x00004000 | PLAYER_FLAGS_IS_OUT_OF_BOUNDS |                                                                                   |
| 32768    | 0x00008000 | PLAYER_FLAGS_DEVELOPER        | prefix for something?                                                             |
| 65536    | 0x00010000 | PLAYER_FLAGS_UNK17            | pre-3.0.3 PLAYER_FLAGS_SANCTUARY flag for player entered sanctuary                |
| 131072   | 0x00020000 | PLAYER_FLAGS_TAXI_BENCHMARK   | taxi benchmark mode (on/off) (2.0.1)                                              |
| 262144   | 0x00040000 | PLAYER_FLAGS_PVP_TIMER        | 3.0.2, pvp timer active (after you disable pvp manually)                          |
| 524288   | 0x00080000 | PLAYER_FLAGS_UNK20            |                                                                                   |
| 1048576  | 0x00100000 | PLAYER_FLAGS_UNK21            |                                                                                   |
| 2097152  | 0x00200000 | PLAYER_FLAGS_UNK22            |                                                                                   |
| 4194304  | 0x00400000 | PLAYER_FLAGS_COMMENTATOR2     |                                                                                   |
| 8388608  | 0x00800000 | PLAYER_ALLOW_ONLY_ABILITY     | used by bladestorm and killing spree                                              |
| 16777216 | 0x01000000 | PLAYER_FLAGS_UNK25            | disabled all melee ability on tab include autoattack                              |
| 33554432 | 0x02000000 | PLAYER_FLAGS_NO_XP_GAIN       |                                                                                   |

### position\_x

The x position of the character's location.

### position\_y

The y position of the character's location.

### position\_z

The z position of the character's location.

### map

The map ID the character is in.

### instance\_id

The instance ID the character is currently in and bound to

### instance\_mode\_mask

The current dungeon difficulty that the player is in. This field is bitmask. Values are put together, however, only two of four should be used at once. This description may not be 100% correct.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th><p>Comment</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Normal</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Heroic</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>10 man</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td><p>25 man</p></td>
</tr>
</tbody>
</table>

### orientation

The orientation the character is facing. (North = 0.0, South = 3.14159)

### taximask

Known taxi nodes separated with space

### online

Records whether the character is online (1) or offline (0).

### cinematic

Boolean 1 or 0 controlling whether the start cinematic has been shown or not.

### totaltime

The total time that the character has been active in the world, measured in seconds.

### leveltime

The total time the character has spent in the world at the current level, measured in seconds.

### logout\_time

The time when the character last logged out, measured in Unix time.

### is\_logout\_resting

Boolean 1 or 0 controlling if the character is currently in a resting zone or not.

### rest\_bonus

The cumulated bonus of rested rate for gaining experience.

### resettalents\_cost

The cost for the character to reset its talents, measured in copper.

### resettalents\_time

`field-no-description|30`

### trans\_x

The x position of the transport this character was on when they were last saved.

### trans\_y

The y position of the transport this character was on when they were last saved.

### trans\_z

The z position of the transport this character was on when they were last saved.

### trans\_o

The orientation of the transport this character was on when they were last saved.

### transguid

The global unique identifier of the transport this character was on when they were last saved.

### extra\_flags

These flags control certain player specific attributes, mostly GM features

| Flag |            | Name                           | Description                                         |
|------|------------|--------------------------------|-----------------------------------------------------|
| 1    | 0x00000001 | PLAYER_EXTRA_GM_ON             | Defines GM state                                    |
| 2    | 0x00000002 | PLAYER_EXTRA_GM_ACCEPT_TICKETS | NO LONGER USED Defines if tickets are accepted      |
| 4    | 0x00000004 | PLAYER_EXTRA_ACCEPT_WHISPERS   | Defines if whispers are accepted                    |
| 8    | 0x00000008 | PLAYER_EXTRA_TAXICHEAT         | Sets taxicheat                                      |
| 16   | 0x00000010 | PLAYER_EXTRA_GM_INVISIBLE      | Defines GM visibility                               |
| 32   | 0x00000020 | PLAYER_EXTRA_GM_CHAT           | Show GM badge in chat messages                      |
| 64   | 0x00000040 | PLAYER_EXTRA_HAS_310_FLYER     | Marks if player already has 310% speed flying mount |
| 256  | 0x00000100 | PLAYER_EXTRA_PVP_DEATH         | Store PvP death status until corpse creating        |

### stable\_slots

The Stable Slots available (bought) at the Stable Master.

### at\_login

This field is a bitmask controlling different actions taken once a player logs in with the character.

| Flag |      | Name                       | Description                          |
|------|------|----------------------------|--------------------------------------|
| 1    | 0x01 | AT_LOGIN_RENAME            | Force character to change name       |
| 2    | 0x02 | AT_LOGIN_RESET_SPELLS      | Reset spells (professions as well)   |
| 4    | 0x04 | AT_LOGIN_RESET_TALENTS     | Reset talents                        |
| 8    | 0x08 | AT_LOGIN_CUSTOMIZE         | Customize Characters                 |
| 16   | 0x10 | AT_LOGIN_RESET_PET_TALENTS | Reset pet talents                    |
| 32   | 0x20 | AT_LOGIN_FIRST             | Set at and removed after first login |
| 64   | 0x40 | AT_LOGIN_CHANGE_FACTION    | Faction change                       |
| 128  | 0x80 | AT_LOGIN_CHANGE_RACE       | Race change                          |

For multiple actions, add values together.

### zone

The zone ID the character is in.

### death\_expire\_time

Time when a character can be resurrected in case of a server crash or client exit while in ghost form, measured in Unix time.

### taxi\_path

Stores the players current taxi path ([TaxiPath.dbc](TaxiPath)) if logged off while on one.

### arenaPoints

The amount of arena points this character has stored up, and will receive next time arena points are distributed.

### totalHonorPoints

The amount of honor points this character has got

### todayHonorPoints

The amount of honor points this character has gotten today

### yesterdayHonorPoints

The amount of honor points this character got yesterday

### totalKills

The amount of players this character has killed

### todayKills

The amount of players this character has killed today

### yesterdayKills

The amount of players this character killed yesterday

### chosenTitle

Current title, using the bit\_index field (InGameOrder in [CharTitles.dbc](CharTitles))

### knownCurrencies

Known currencies (what to be listed in the Currency tab), bitmask of BitIndexes, see [CurrencyTypes.dbc](CurrencyTypes)

### watchedFaction

Tracked faction at experience bar (using reputation ID, see [Faction.dbc](Faction))

### drunk

Character's drunk state, 0-100

-   0 = Sober
-   1-49 = Tipsy
-   50-89 = Drunk
-   90-100 = Smashed

### health

The characters current health.

### power

Current character powers (snapshot from when the character was saved)

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Field</p></th>
<th><p>Power name</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>power1</p></td>
<td><p>Mana</p></td>
</tr>
<tr class="even">
<td><p>power2</p></td>
<td><p>Rage</p></td>
</tr>
<tr class="odd">
<td><p>power3</p></td>
<td><p>Focus</p></td>
</tr>
<tr class="even">
<td><p>power4</p></td>
<td><p>Energy</p></td>
</tr>
<tr class="odd">
<td><p>power5</p></td>
<td><p>Happiness</p></td>
</tr>
<tr class="even">
<td><p>power6</p></td>
<td><p>Runes</p></td>
</tr>
<tr class="odd">
<td><p>power7</p></td>
<td><p>Runic Power</p></td>
</tr>
</tbody>
</table>

### latency

This characters latency, or ping, in milliseconds, as of the last update.

### speccount

The number of specs this character has access to. Default value is 1. Maximum currently supported value is 2. Should never be 0 (this is a sign of a character created before the dual spec system.)

### activespec

The currently activated spec for this character, spec = 0 is the first spec, spec = 1 is the second spec.

### exploredZones

Bitmasks of explored zones (1 bit for explored, 0 bit for unexplored)

### equipmentCache

`field-no-description|58`

### ammoId

[Template ID](item_template_2130222.html#item_template-entry) of the ammo item

### knownTitles

Contains data about known Titles stored in 6 x 16bit integers. To calculate where a knownTitle is in one of those 6 integers you do the following: We select one of the titles from [CharTitles.dbc](CharTitles), take Archmage title for example:

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>TitleID</p></td>
<td><p>UnkRef?</p></td>
<td><p>MaleTitle</p></td>
<td><p>FemaleTitle</p></td>
<td><p>InGameOrder</p></td>
</tr>
<tr class="even">
<td><p>93</p></td>
<td><p>0</p></td>
<td><p>Archmage %s</p></td>
<td><p>Archmage %s</p></td>
<td><p>61</p></td>
</tr>
</tbody>
</table>

We use the InGameOrder to calculate in which one of the 6 (16bit) integer is the title stored:

InGameOrder / 32 = X
61 / 32 = **1,90625** (1 - Do **NOT** round the value!)

so the 1st integer stores the title. Because counting starts from **0** to 5, it would be "0 **TITLE\_BIT** 0 0 0 0".

Now which bit stores the title? We use modulo to calculate this.

InGameOrder Modulo 32 = X
61 Mod 32 = **29**

so the 29bit stores the title. This would be 2 ^ 29 = 536870912. This bit stores the Archmage title. This would mean if you **only** have the Archmage title, characters.knownTitles would be "0 536870912 0 0 0 0".

### actionBars

A bitmask that contains visible actionbars for the player

| Flag |            | Comment          |
|------|------------|------------------|
| 1    | 0x00000001 | Bottom Left Bar  |
| 2    | 0x00000002 | Bottom Right Bar |
| 4    | 0x00000004 | Rigth Bar        |
| 8    | 0x00000008 | Right Bar 2      |

### grantableLevels



### deleteInfos\_Account

Stores the account id if the character is deleted and CharDelete.Method in worldserver.conf is set to 1.

### deleteInfos\_Name

Stores the name of character if the character is deleted and CharDelete.Method in worldserver.conf is set to 1.

### deleteDate

Stores the date when the character was deleted and CharDelete.Method in worldserver.conf is set to 1. Will be checked by worldserver against CharDelete.KeepDays in worldserver.conf. If this value is lower than deleteDate + CharDelete.KeepDays the character will be purged.

/ptr data-emoticon-name=/tdconfluenceTd/pp
