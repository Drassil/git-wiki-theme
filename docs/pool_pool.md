# pool\_pool

[<-Back-to:World](database-world.md)

**The \`pool\_pool\` table**

This is the pool of pools table. You can create a pool with a chance of a range of pools in that pool being activated.

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
<td><p><a href="#pool_id">pool_id</a></p></td>
<td><p>mediumint(8)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p>0</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="#mother_pool">mother_pool</a></p></td>
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
<td><p>signed</p></td>
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

### pool\_id

The ID of the pool\_template that you want to include in this "pool of pools" as a child pool.

### mother\_pool

The ID of the pool\_template that defines this "pool of pools".

### chance

The explicit percentage chance that this child pool will be spawned.

If the mother pool spawns just one child pool (max\_limit = 1 in the respective mother pool's pool\_template), the core selects the child pool to be spawned in a two-step process: First, only the explicitly-chanced (chance &gt; 0) child pools of the mother pool are rolled. If this roll does not produce any child pool, all the child pools without explicit chance (chance = 0) are rolled with equal chance.
If the mother pool spawns more than one child pool, the chance is ignored and all the child pools in the mother pool are rolled in one step with equal chance.

In case the mother pool spawns just one child pool and all the child pools have a nonzero chance, the sum of the chances for all the child pools must equal to 100, otherwise the mother pool won't function correctly.

### description

A text field to describe what this pool of pools is for.
