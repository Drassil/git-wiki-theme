# npc\_text

[<-Back-to:World](database-world.md)

**Table Structure**

This table contains the texts that are used for gossip. More research needs to be done on this table.

<table style="width:100%;">
<colgroup>
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Field</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Attributes</strong></p></td>
<td><p><strong>Key</strong></p></td>
<td><p><strong>Null</strong></p></td>
<td><p><strong>Default</strong></p></td>
</tr>
<tr class="even">
<td><p><a href="#id">ID</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#text0_0">text0_0</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p><a href="#text0_1">text0_1</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="odd">
<td><p><a href="#lang0">lang0</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#probability0">Probability0</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em0_0">em0_0</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em0_1">em0_1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em0_2">em0_2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em0_3">em0_3</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em0_4">em0_4</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em0_5">em0_5</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#text0_0">text1_0</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p><a href="#text0_1">text1_1</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="odd">
<td><p><a href="#lang">lang1</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#probability1">Probability1</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em1_0">em1_0</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em1_1">em1_1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em1_2">em1_2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em1_3">em1_3</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em1_4">em1_4</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em1_5">em1_5</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#text2_0">text2_0</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p><a href="#text2_1">text2_1</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="odd">
<td><p><a href="#lang2">lang2</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#probability2">Probability2</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em2_0">em2_0</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em2_1">em2_1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em2_2">em2_2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em2_3">em2_3</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em2_4">em2_4</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em2_5">em2_5</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#text3_0">text3_0</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p><a href="#text3_1">text3_1</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="odd">
<td><p><a href="#lang3">lang3</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#probability3">Probability3</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em3_0">em3_0</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em3_1">em3_1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em3_2">em3_2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em3_3">em3_3</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em3_4">em3_4</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em3_5">em3_5</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#text4_0">text4_0</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p><a href="#text4_1">text4_1</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="odd">
<td><p><a href="#lang4">lang4</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#probability4">Probability4</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em4_0">em4_0</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em4_1">em4_1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em4_2">em4_2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em4_3">em4_3</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em4_4">em4_4</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em4_5">em4_5</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#text5_0">text5_0</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p><a href="#text5_1">text5_1</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="odd">
<td><p><a href="#lang5">lang5</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#probability5">Probability5</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em5_0">em5_0</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em5_1">em5_1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em5_2">em5_2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em5_3">em5_3</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em5_4">em5_4</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em5_5">em5_5</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#text6_0">text6_0</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p><a href="#text6_1">text6_1</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="odd">
<td><a href="http://collab.kpsn.org#lang5">lang5</a></td>
<td>tinyint(3)</td>
<td>unsigned</td>
<td> </td>
<td>NO</td>
<td>0</td>
</tr>
<tr class="even">
<td><p><a href="#probability6">Probability6</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em6_0">em6_0</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em6_1">em6_1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em6_2">em6_2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em6_3">em6_3</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em6_4">em6_4</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em6_5">em6_5</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#text7_0">text7_0</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="even">
<td><p><a href="#text7_1">text7_1</a></p></td>
<td><p>longtext</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
</tr>
<tr class="odd">
<td><p><a href="#lang7">lang7</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#probability7">Probability7</a></p></td>
<td><p>float</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em7_0">em7_0</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em7_1">em7_1</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em7_2">em7_2</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em7_3">em7_3</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#em7_4">em7_4</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p><a href="#em7_5">em7_5</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p><a href="#verifiedbuild">VerifiedBuild</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>1</p></td>
</tr>
</tbody>
</table>

**Field Descriptions**

### ID

This is the ID of the text entry.

### text0\_0

This is the locale text that is displayed if the NPC is a male.

### text0\_1

This is the locale text that is displayed if the NPC is a female.

### BroadcastTextID0

The \`broadcast\_text\`.\`ID\` field value for the \`MaleText\` in the \`broadcast\_text\` table.

### lang0

The language of the text in game. Refer to [this page](Languages) for the available language IDs.

### Probability0

The percent-chance (probability) that the NPC will say either text0\_0 or text0\_1 depending on the NPCs gender.

### em0\_0

The ID of the emote that the NPC should do upon greeting the player.

### em0\_1

The use of this field is unknown.

### em0\_2

The use of this field is unknown.

### em0\_3

The use of this field is unknown.

### em0\_4

The use of this field is unknown.

### em0\_5

The use of this field is unknown.

### text1\_0

This is the locale text that is displayed if the NPC is a male.

### text1\_1

This is the locale text that is displayed if the NPC is a female.

### BroadcastTextID1

The \`broadcast\_text\`.\`ID\` field value for the \`FemaleText\` in the \`broadcast\_text\` table.

### lang1

The language of the text in game. Refer to [this page](Languages) for the available language IDs.

### Probability1

The percent-chance (probability) that the NPC will say either text1\_0 or text1\_1 depending on the NPCs gender.

### em1\_0

The ID of the emote that the NPC should do upon greeting the player.

### em1\_1

The use of this field is unknown.

### em1\_2

The use of this field is unknown.

### em1\_3

The use of this field is unknown.

### em1\_4

The use of this field is unknown.

### em1\_5

The use of this field is unknown.

### text2\_0

This is the locale text that is displayed if the NPC is a male.

### text2\_1

This is the locale text that is displayed if the NPC is a female.

### BroadcastTextID2

The use of this field is unknown.

### lang2

The language of the text in game. Refer to [this page](Languages) for the available language IDs.

### Probability2

The percent-chance (probability) that the NPC will say either text2\_0 or text2\_1 depending on the NPCs gender.

### em2\_0

The ID of the emote that the NPC should do upon greeting the player.

### em2\_1

The use of this field is unknown.

### em2\_2

The use of this field is unknown.

### em2\_3

The use of this field is unknown.

### em2\_4

The use of this field is unknown.

### em2\_5

The use of this field is unknown.

### text3\_0

This is the locale text that is displayed if the NPC is a male.

### text3\_1

This is the locale text that is displayed if the NPC is a female.

### BroadcastTextID3

The use of this field is unknown.

### lang3

The language of the text in game. Refer to [this page](Languages) for the available language IDs.

### Probability3

The percent-chance (probability) that the NPC will say either text3\_0 or text3\_1 depending on the NPCs gender.

### em3\_0

The ID of the emote that the NPC should do upon greeting the player.

### em3\_1

The use of this field is unknown.

### em3\_2

The use of this field is unknown.

### em3\_3

The use of this field is unknown.

### em3\_4

The use of this field is unknown.

### em3\_5

The use of this field is unknown.

### text4\_0

This is the locale text that is displayed if the NPC is a male.

### text4\_1

This is the locale text that is displayed if the NPC is a female.

### BroadcastTextID4

The use of this field is unknown.

### lang4

The language of the text in game. Refer to [this page](Languages) for the available language IDs.

### Probability4

The percent-chance (probability) that the NPC will say either text4\_0 or text4\_1 depending on the NPCs gender.

### em4\_0

The ID of the emote that the NPC should do upon greeting the player.

### em4\_1

The use of this field is unknown.

### em4\_2

The use of this field is unknown.

### em4\_3

The use of this field is unknown.

### em4\_4

The use of this field is unknown.

### em4\_5

The use of this field is unknown.

### text5\_0

This is the locale text that is displayed if the NPC is a male.

### text5\_1

This is the locale text that is displayed if the NPC is a female.

### BroadcastTextID5

The use of this field is unknown.

### lang5

The language of the text in game. Refer to [this page](Languages) for the available language IDs.

### Probability5

The percent-chance (probability) that the NPC will say either text5\_0 or text5\_1 depending on the NPCs gender.

### em5\_0

The ID of the emote that the NPC should do upon greeting the player.

### em5\_1

The use of this field is unknown.

### em5\_2

The use of this field is unknown.

### em5\_3

The use of this field is unknown.

### em5\_4

The use of this field is unknown.

### em5\_5

The use of this field is unknown.

### text6\_0

This is the locale text that is displayed if the NPC is a male.

### text6\_1

This is the locale text that is displayed if the NPC is a female.

### BroadcastTextID6

The use of this field is unknown.

### lang6

The language of the text in game. Refer to [this page](Languages) for the available language IDs.

### Probability6

The percent-chance (probability) that the NPC will say either text6\_0 or text6\_1 depending on the NPCs gender.

### em6\_0

The ID of the emote that the NPC should do upon greeting the player.

### em6\_1

The use of this field is unknown.

### em6\_2

The use of this field is unknown.

### em6\_3

The use of this field is unknown.

### em6\_4

The use of this field is unknown.

### em6\_5

The use of this field is unknown.

### text7\_0

This is the locale text that is displayed if the NPC is a male.

### text7\_1

This is the locale text that is displayed if the NPC is a female.

### BroadcastTextID7

The use of this field is unknown.

### lang7

The language of the text in game. Refer to [this page](Languages) for the available language IDs.

### Probability7

The percent-chance (probability) that the NPC will say either text7\_0 or text7\_1 depending on the NPCs gender.

### em7\_0

The ID of the emote that the NPC should do upon greeting the player.

### em7\_1

The use of this field is unknown.

### em7\_2

The use of this field is unknown.

### em7\_3

The use of this field is unknown.

### em7\_4

The use of this field is unknown.

### em7\_5

The use of this field is unknown.

### VerifiedBuild

This field was used to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.
