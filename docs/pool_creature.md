# pool\_creature

[<-Back-to:World](database-world.md)

**The \`pool\_creature\` table**

This table contains a list of creatures that are tied to a specific pool.

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
<td><p><a href="#guid">guid</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#pool_entry">pool_entry</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="#chance">chance</a></p></td>
<td><p>float</p></td>
<td><p>unsigned</p></td>
<td><p> </p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#description">description</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>signed</p></td>
<td><p> </p></td>
<td><p>YES</p></td>
<td><p>NULL</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### guid

Creature's guid.

### pool\_entry

The pool that this creature is in. Refers to pool\_template entry.

### chance

The explicit percentage chance that this creature will be spawned.

If the pool spawns just one creature (max\_limit = 1 in the respective pool\_template), the core selects the creature to be spawned in a two-step process: First, only the explicitly-chanced (chance &gt; 0) creatures of the pool are rolled. If this roll does not produce any creature, all the creatures without explicit chance (chance = 0) are rolled with equal chance.
If the pool spawns more than one creature, the chance is ignored and all the creatures in the pool are rolled in one step with equal chance.

In case the pool spawns just one creature and all the creatures have a nonzero chance, the sum of the chances for all the creatures must equal to 100, otherwise the pool won't be spawned.

### description

This field usually names the creature corresponding to the guid and mentions which spawn point it is. Example: Snarlflare (14272) - Spawn 1
