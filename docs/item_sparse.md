# item\_sparse

**`Back-to:Hotfixes`**

**The \`item\_appearance\` table**

This table holds information on every applied item hotfix and can overwrite existing items within the game. Together with item, item\_modified\_appearance and item\_modified\_appearance they present the means to hotfix an item.

 

**Structure**

|                                                                           |             |                |         |          |             |           |                          |
|---------------------------------------------------------------------------|-------------|----------------|---------|----------|-------------|-----------|--------------------------|
| **Field**                                                                 | **Type**    | **Attributes** | **Key** | **Null** | **Default** | **Extra** | **Comment**              |
| [ID](#item_sparse-ID)                                                     | int(10)     | unsigned       | PRI     | NO       | 0           |           |                          |
| [Quality](#item_sparse-Quality)                                           | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [Flags](#item_sparse-Flags)                                               | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [Unk1](#item_sparse-Unk1)                                                 | float       | signed         |         | NO       | 0           |           |                          |
| [Unk2](#item_sparse-Unk2)                                                 | float       | signed         |         | NO       | 0           |           |                          |
| [BuyCount](#item_sparse-BuyCount)                                         | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [BuyPrice](#item_sparse-BuyPrice)                                         | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [SellPrice](#item_sparse-SellPrice)                                       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [InventoryType](#item_sparse-InventoryType)                               | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [AllowableClass](#item_sparse-AllowableClass)                             | int(11)     | signed         |         | NO       | 0           |           |                          |
| [AllowableRace](#item_sparse-AllowableRace)                               | int(11)     | signed         |         | NO       | 0           |           |                          |
| [ItemLevel](#item_sparse-ItemLevel)                                       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RequiredLevel](#item_sparse-RequiredLevel)                               | int(10)     | signed         |         | NO       | 0           |           |                          |
| [RequiredSkill](#item_sparse-RequiredSkill)                               | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RequiredSkillRank](#item_sparse-RequiredSkillRank)                       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RequiredSpell](#item_sparse-RequiredSpell)                               | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RequiredHonorRank](#item_sparse-RequiredHonorRank)                       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RequiredCityRank](#item_sparse-RequiredCityRank)                         | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RequiredReputationFaction](#item_sparse-RequiredReputationFaction)       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RequiredReputationRank](#item_sparse-RequiredReputationRank)             | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [MaxCount](#item_sparse-MaxCount)                                         | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [Stackable](#item_sparse-Stackable)                                       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [ContainerSlots](#item_sparse-ContainerSlots)                             | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [ItemStatType](#item_sparse-ItemStatType)                                 | int(11)     | signed         |         | NO       | 0           |           |                          |
| [ItemStatValue](#item_sparse-ItemStatValue)                               | int(11)     | signed         |         | NO       | 0           |           |                          |
| [ItemStatAllocation](#item_sparse-ItemStatAllocation)                     | int(11)     | signed         |         | NO       | 0           |           |                          |
| [ItemStatSocketCostMultiplier](#item_sparse-ItemStatSocketCostMultiplier) | float       | signed         |         | NO       | 0           |           |                          |
| [ScalingStatDistribution](#item_sparse-ScalingStatDistribution)           | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [DamageType](#item_sparse-DamageType)                                     | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [Delay](#item_sparse-Delay)                                               | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RangedModRange](#item_sparse-RangedModRange)                             | float       | signed         |         | NO       | 0           |           |                          |
| [Bonding](#item_sparse-Bonding)                                           | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [Name](#item_sparse-Name)                                                 | TEXT        |                |         | YES      |             |           |                          |
| [Description](#item_sparse-Description)                                   | TEXT        |                |         | YES      |             |           |                          |
| [PageText](#item_sparse-PageText)                                         | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [LanguageID](#item_sparse-LanguageID)                                     | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [PageMaterial](#item_sparse-PageMaterial)                                 | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [StartQuest](#item_sparse-StartQuest)                                     | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [LockID](#item_sparse-LockID)                                             | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [Material](#item_sparse-Material)                                         | int(11)     | signed         |         | NO       | 0           |           |                          |
| [Sheath](#item_sparse-Sheath)                                             | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RandomProperty](#item_sparse-RandomProperty)                             | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [RandomSuffix](#item_sparse-RandomSuffix)                                 | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [ItemSet](#item_sparse-ItemSet)                                           | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [Area](#item_sparse-Area)                                                 | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [Map](#item_sparse-Map)                                                   | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [BagFamily](#item_sparse-BagFamily)                                       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [TotemCategory](#item_sparse-TotemCategory)                               | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [SocketColor](item_sparse)                                                | int(10)     | unsigned       |         | NO       | 0           |           | SocketColor1 can be NULL |
| [SocketBonus](#item_sparse-SocketBonus)                                   | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [GemProperties](#item_sparse-GemProperties)                               | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [ArmorDamageModifier](#item_sparse-ArmorDamageModifier)                   | float       | signed         |         | NO       | 0           |           |                          |
| [Duration](#item_sparse-Duration)                                         | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [ItemLimitCategory](#item_sparse-ItemLimitCategory)                       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [HolidayID](#item_sparse-HolidayID)                                       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [StatScalingFactor](#item_sparse-StatScalingFactor)                       | float       | signed         |         | NO       | 0           |           |                          |
| [CurrencySubstitutionID](#item_sparse-CurrencySubstitutionID)             | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [CurrencySubstitutionCount](#item_sparse-CurrencySubstitutionCount)       | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [ItemNameDescriptionID](#item_sparse-ItemNameDescriptionID)               | int(10)     | unsigned       |         | NO       | 0           |           |                          |
| [VerifiedBuild](#item_sparse-VerifiedBuild)                               | smallint(6) | signed         |         | NO       | 0           |           |                          |

**Description of the fields**

### ID

The unique ID of the item.Choosing an existing item ID will overwrite that item ID with the hotfix changes.

### Quality

The quality of the item. To use the Bind to Battle.net account quality, the item must have its flags set to 134221824.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Color</p></th>
<th><p>Quality</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Grey</p></td>
<td><p>Poor</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>White</p></td>
<td><p>Common</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Green</p></td>
<td><p>Uncommon</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Blue</p></td>
<td><p>Rare</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Purple</p></td>
<td><p>Epic</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Orange</p></td>
<td><p>Legendary</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Red</p></td>
<td><p>Artifact</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Gold</p></td>
<td><p>Heirloom / Bind to Battle.net account</p></td>
</tr>
<tr class="odd">
<td>8</td>
<td>Aqua</td>
<td>WoW Token</td>
</tr>
</tbody>
</table>

### Flags

Flags1 to Flags3 are bitmask fields that contains flags that the item has on it. As all other such fields, just add the flags together to combine them. Possible flags are listed below.

 **Note:** The item system for 6xx  gives more than one flag bitmask field and each of these can be populated individually.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th> </th>
<th><p>Comments</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td>0x01</td>
<td><p>UNK1</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td>0x02</td>
<td><p>Conjured item</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td>0x04</td>
<td><p>Openable (can be opened by right-click)</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td>0x08</td>
<td><p>Makes green &quot;Heroic&quot; text appear on item</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td>0x010</td>
<td><p>Deprecated Item</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td>0x020</td>
<td><p>Item can not be destroyed, except by using spell (item can be reagent for spell)</p></td>
</tr>
<tr class="odd">
<td><p>64</p></td>
<td>0x040</td>
<td><p>UNK2</p></td>
</tr>
<tr class="even">
<td>128</td>
<td>0x080</td>
<td>No default 30 seconds cooldown when equipped</td>
</tr>
<tr class="odd">
<td>256</td>
<td>0x0100</td>
<td>UNK3</td>
</tr>
<tr class="even">
<td><p>512</p></td>
<td>0x0200</td>
<td><p>Wrapper : Item can wrap other items</p></td>
</tr>
<tr class="odd">
<td><p>1024</p></td>
<td>0x0400</td>
<td><p>UNK4</p></td>
</tr>
<tr class="even">
<td><p>2048</p></td>
<td>0x0800</td>
<td><p>Item is party loot and can be looted by all</p></td>
</tr>
<tr class="odd">
<td><p>4096</p></td>
<td>0x01000</td>
<td><p>Item is refundable</p></td>
</tr>
<tr class="even">
<td><p>8192</p></td>
<td>0x02000</td>
<td><p>Charter (Arena or Guild)</p></td>
</tr>
<tr class="odd">
<td>16384</td>
<td>0x04000</td>
<td>UNK5 // comment in code : Only readable items have this (but not all)</td>
</tr>
<tr class="even">
<td><p>32768</p></td>
<td>0x08000</td>
<td><p>UNK6</p></td>
</tr>
<tr class="odd">
<td>65536</td>
<td>0x010000</td>
<td>UNK7</td>
</tr>
<tr class="even">
<td>131072</td>
<td>0x020000</td>
<td>UNK8</td>
</tr>
<tr class="odd">
<td>262144</td>
<td>0x040000</td>
<td><p>Item can be prospected</p></td>
</tr>
<tr class="even">
<td><p>524288</p></td>
<td>0x080000</td>
<td><p>Unique equipped (player can only have one equipped at the same time)</p></td>
</tr>
<tr class="odd">
<td>1048576</td>
<td>0x0100000</td>
<td>UNK9</td>
</tr>
<tr class="even">
<td>2097152</td>
<td>0x0200000</td>
<td>Item can be used during arena match</td>
</tr>
<tr class="odd">
<td><p>4194304</p></td>
<td>0x0400000</td>
<td><p>Throwable (for tooltip ingame)</p></td>
</tr>
<tr class="even">
<td><p>8388608</p></td>
<td>0x0800000</td>
<td><p>Item can be used in shapeshift forms</p></td>
</tr>
<tr class="odd">
<td>16777216</td>
<td>0x01000000</td>
<td> UNK10</td>
</tr>
<tr class="even">
<td>54432</td>
<td>0x02000000</td>
<td> Profession recipes: can only be looted if you meet requirements and don't already know it</td>
</tr>
<tr class="odd">
<td>67108864</td>
<td>0x04000000</td>
<td> Item cannot be used in arena</td>
</tr>
<tr class="even">
<td><p>134217728</p></td>
<td>0x08000000</td>
<td><p>Bind to Account (Also needs Quality = 7 set)</p></td>
</tr>
<tr class="odd">
<td><p>268435456</p></td>
<td>0x010000000</td>
<td><p>Spell is cast with triggered flag</p></td>
</tr>
<tr class="even">
<td><p>536870912</p></td>
<td>0x020000000</td>
<td><p>Millable</p></td>
</tr>
<tr class="odd">
<td>1073741824</td>
<td>0x040000000</td>
<td> UNK11</td>
</tr>
<tr class="even">
<td><p>2147483648</p></td>
<td>0x080000000</td>
<td><p>Bind on Pickup tradeable8192</p></td>
</tr>
</tbody>
</table>

### Unk1

`field-no-description|6`

### Unk2

`field-no-description|7`

### BuyCount

The size of the item stack when sold by vendors. Also if a vendor has limited copies of this item available, everytime the vendor list is refreshed (See [npc\_vendor.incrtime](npc_vendor_2130245.html#npc_vendor-incrtime)), the number of copies increases by this number.

### BuyPrice

The price required to pay to buy this item from a vendor, in copper.

### SellPrice

The price that the vendor will pay you for the item when you sell it and if it is possible to be sold, in copper. Put in 0 if the item cannot be sold to a vendor.

### InventoryType

In what slot the item can be equipped.

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Slot Name</p></th>
<th><p>ID</p></th>
<th><p>Slot Name</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Non equipable</p></td>
<td><p>15</p></td>
<td><p>Ranged (Bows)</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Head</p></td>
<td><p>16</p></td>
<td><p>Back</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Neck</p></td>
<td><p>17</p></td>
<td><p>Two-Hand</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Shoulder</p></td>
<td><p>18</p></td>
<td><p>Bag</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Shirt</p></td>
<td><p>19</p></td>
<td><p>Tabard</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Chest</p></td>
<td><p>20</p></td>
<td><p>Robe</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Waist</p></td>
<td><p>21</p></td>
<td><p>Main hand</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Legs</p></td>
<td><p>22</p></td>
<td><p>Off hand</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Feet</p></td>
<td><p>23</p></td>
<td><p>Holdable (Tome)</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>Wrists</p></td>
<td><p>24</p></td>
<td><p>Ammo</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>Hands</p></td>
<td><p>25</p></td>
<td><p>Thrown</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>Finger</p></td>
<td><p>26</p></td>
<td><p>Ranged right (Wands, Guns)</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>Trinket</p></td>
<td><p>27</p></td>
<td><p>Quiver</p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
<td><p>Weapon</p></td>
<td><p>28</p></td>
<td><p>Relic</p></td>
</tr>
<tr class="odd">
<td><p>14</p></td>
<td><p>Shield</p></td>
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

### AllowableClass

Bitmask controlling which classes can use this item. Add ids together to combine class possibilities. Use -1 if all classes can use it.

See the ChrClasses DBC file for the IDs of the classes.

### AllowableRace

Bitmask controlling which races can use this item. Add ids together to combine race possibilities. Use -1 for all races.

See the ChrRaces DBC file for the IDs of the races.

### ItemLevel

Base item level.

### RequiredLevel

The level that a player must be to equip the item.

### RequiredSkill

The skill required to use this item. See the [SkillLine DBC file](SkillLine6x) for IDs which can be used here.

### RequiredSkillRank

The required skill rank the player needs to have to use this item.

### RequiredSpell

The required spell that the player needs to have to use this item.

### RequiredHonorRank

The honor rank the player needs to have to use this item.

### RequiredCityRank

`field-no-description|20`

### RequiredReputationFaction

The faction template ID  of the faction that the player has to have a certain ranking with. If this value is 0, the faction of the seller of the item is used.

See the [Faction DBC file](Faction6x) for the IDs of all of the factions.

### RequiredReputationRank

The rank the player has to have with the faction from [RequiredReputationFaction](#item_sparse-RequiredReputationFaction).

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Rank</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Hated</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Hostile</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Unfriendly</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Neutral</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Friendly</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Honored</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Revered</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Exalted</p></td>
</tr>
</tbody>
</table>

### MaxCount

Maximum number of copies of this item a player can have. Use 0 for infinite.

### Stackable

The number of copies of this item that can be stacked in the same slot.

### ContainerSlots

If the item is a bag, this field controls the number of slots the bag has.

### ItemStatType

The type of stat to modify. A maximum of 10 stats can be set as seen by the column count.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Stat Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>ITEM_MOD_MANA</td>
</tr>
<tr class="even">
<td>1</td>
<td>ITEM_MOD_HEALTH</td>
</tr>
<tr class="odd">
<td>3</td>
<td>ITEM_MOD_AGILITY</td>
</tr>
<tr class="even">
<td>4</td>
<td>ITEM_MOD_STRENGTH</td>
</tr>
<tr class="odd">
<td>5</td>
<td>ITEM_MOD_INTELLECT</td>
</tr>
<tr class="even">
<td>6</td>
<td>ITEM_MOD_SPIRIT</td>
</tr>
<tr class="odd">
<td>7</td>
<td>ITEM_MOD_STAMINA</td>
</tr>
<tr class="even">
<td>12</td>
<td>ITEM_MOD_DEFENSE_SKILL_RATING</td>
</tr>
<tr class="odd">
<td>13</td>
<td>ITEM_MOD_DODGE_RATING</td>
</tr>
<tr class="even">
<td>14</td>
<td>ITEM_MOD_PARRY_RATING</td>
</tr>
<tr class="odd">
<td>15</td>
<td>ITEM_MOD_BLOCK_RATING</td>
</tr>
<tr class="even">
<td>16</td>
<td>ITEM_MOD_HIT_MELEE_RATING</td>
</tr>
<tr class="odd">
<td>17</td>
<td>ITEM_MOD_HIT_RANGED_RATING</td>
</tr>
<tr class="even">
<td>18</td>
<td>ITEM_MOD_HIT_SPELL_RATING</td>
</tr>
<tr class="odd">
<td>19</td>
<td>ITEM_MOD_CRIT_MELEE_RATING</td>
</tr>
<tr class="even">
<td>20</td>
<td>ITEM_MOD_CRIT_RANGED_RATING</td>
</tr>
<tr class="odd">
<td>21</td>
<td>ITEM_MOD_CRIT_SPELL_RATING</td>
</tr>
<tr class="even">
<td>22</td>
<td>ITEM_MOD_HIT_TAKEN_MELEE_RATING</td>
</tr>
<tr class="odd">
<td>23</td>
<td>ITEM_MOD_HIT_TAKEN_RANGED_RATING</td>
</tr>
<tr class="even">
<td>24</td>
<td>ITEM_MOD_HIT_TAKEN_SPELL_RATING</td>
</tr>
<tr class="odd">
<td>25</td>
<td>ITEM_MOD_CRIT_TAKEN_MELEE_RATING</td>
</tr>
<tr class="even">
<td>26</td>
<td>ITEM_MOD_CRIT_TAKEN_RANGED_RATING</td>
</tr>
<tr class="odd">
<td>27</td>
<td>ITEM_MOD_CRIT_TAKEN_SPELL_RATING</td>
</tr>
<tr class="even">
<td>28</td>
<td>ITEM_MOD_HASTE_MELEE_RATING</td>
</tr>
<tr class="odd">
<td>29</td>
<td>ITEM_MOD_HASTE_RANGED_RATING</td>
</tr>
<tr class="even">
<td>30</td>
<td>ITEM_MOD_HASTE_SPELL_RATING</td>
</tr>
<tr class="odd">
<td>31</td>
<td>ITEM_MOD_HIT_RATING</td>
</tr>
<tr class="even">
<td>32</td>
<td>ITEM_MOD_CRIT_RATING</td>
</tr>
<tr class="odd">
<td>33</td>
<td>ITEM_MOD_HIT_TAKEN_RATING</td>
</tr>
<tr class="even">
<td>34</td>
<td>ITEM_MOD_CRIT_TAKEN_RATING</td>
</tr>
<tr class="odd">
<td>35</td>
<td>ITEM_MOD_RESILIENCE_RATING</td>
</tr>
<tr class="even">
<td>36</td>
<td>ITEM_MOD_HASTE_RATING</td>
</tr>
<tr class="odd">
<td>37</td>
<td>ITEM_MOD_EXPERTISE_RATING</td>
</tr>
<tr class="even">
<td>38</td>
<td>ITEM_MOD_ATTACK_POWER</td>
</tr>
<tr class="odd">
<td>39</td>
<td>ITEM_MOD_RANGED_ATTACK_POWER</td>
</tr>
<tr class="even">
<td>40</td>
<td>ITEM_MOD_VERSATILITY</td>
</tr>
<tr class="odd">
<td>41</td>
<td>ITEM_MOD_SPELL_HEALING_DONE</td>
</tr>
<tr class="even">
<td>42</td>
<td>ITEM_MOD_SPELL_DAMAGE_DONE</td>
</tr>
<tr class="odd">
<td>43</td>
<td>ITEM_MOD_MANA_REGENERATION</td>
</tr>
<tr class="even">
<td>44</td>
<td>ITEM_MOD_ARMOR_PENETRATION_RATING</td>
</tr>
<tr class="odd">
<td>45</td>
<td>ITEM_MOD_SPELL_POWER</td>
</tr>
<tr class="even">
<td>46</td>
<td>ITEM_MOD_HEALTH_REGEN</td>
</tr>
<tr class="odd">
<td>47</td>
<td>ITEM_MOD_SPELL_PENETRATION</td>
</tr>
<tr class="even">
<td>48</td>
<td>ITEM_MOD_BLOCK_VALUE</td>
</tr>
<tr class="odd">
<td>49</td>
<td>ITEM_MOD_MASTERY_RATING</td>
</tr>
<tr class="even">
<td>50</td>
<td>ITEM_MOD_EXTRA_ARMOR</td>
</tr>
<tr class="odd">
<td>51</td>
<td>ITEM_MOD_FIRE_RESISTANCE</td>
</tr>
<tr class="even">
<td>52</td>
<td>ITEM_MOD_FROST_RESISTANCE</td>
</tr>
<tr class="odd">
<td>53</td>
<td>ITEM_MOD_HOLY_RESISTANCE</td>
</tr>
<tr class="even">
<td>54</td>
<td>ITEM_MOD_SHADOW_RESISTANCE</td>
</tr>
<tr class="odd">
<td>55</td>
<td>ITEM_MOD_NATURE_RESISTANCE</td>
</tr>
<tr class="even">
<td>56</td>
<td>ITEM_MOD_ARCANE_RESISTANCE</td>
</tr>
<tr class="odd">
<td>57</td>
<td>ITEM_MOD_PVP_POWER</td>
</tr>
<tr class="even">
<td>58</td>
<td>ITEM_MOD_CR_AMPLIFY</td>
</tr>
<tr class="odd">
<td>59</td>
<td>ITEM_MOD_CR_MULTISTRIKE</td>
</tr>
<tr class="even">
<td>60</td>
<td>ITEM_MOD_CR_READINESS</td>
</tr>
<tr class="odd">
<td>61</td>
<td>ITEM_MOD_CR_SPEED</td>
</tr>
<tr class="even">
<td>62</td>
<td>ITEM_MOD_CR_LIFESTEAL</td>
</tr>
<tr class="odd">
<td>63</td>
<td>ITEM_MOD_CR_AVOIDANCE</td>
</tr>
<tr class="even">
<td>64</td>
<td>ITEM_MOD_CR_STURDINESS</td>
</tr>
<tr class="odd">
<td>65</td>
<td>ITEM_MOD_CR_UNUSED_7</td>
</tr>
<tr class="even">
<td>66</td>
<td>ITEM_MOD_CR_CLEAVE</td>
</tr>
<tr class="odd">
<td>67</td>
<td>ITEM_MOD_CR_UNUSED_9</td>
</tr>
<tr class="even">
<td>68</td>
<td>ITEM_MOD_CR_UNUSED_10</td>
</tr>
<tr class="odd">
<td>69</td>
<td>ITEM_MOD_CR_UNUSED_11</td>
</tr>
<tr class="even">
<td>70</td>
<td>ITEM_MOD_CR_UNUSED_12</td>
</tr>
<tr class="odd">
<td>71</td>
<td>ITEM_MOD_AGI_STR_INT</td>
</tr>
<tr class="even">
<td>72</td>
<td>ITEM_MOD_AGI_STR</td>
</tr>
<tr class="odd">
<td>73</td>
<td>ITEM_MOD_AGI_INT</td>
</tr>
<tr class="even">
<td>74</td>
<td>ITEM_MOD_STR_INT</td>
</tr>
</tbody>
</table>

### ItemStatValue

The value to change the stat type to. A maximum of 10 stats can be set as seen by the column count.

### ItemStatAllocation

Determines the amount of stats. A maximum of 10 stats can be set as seen by the column count.

### ItemStatSocketCostMultiplier

`field-no-description|56 -> 65`

### ScalingStatDistribution

Similar to Static Stats whom are the Stats that grow along with the users level (mainly heirloom leveling gear).
Use this like the static stats.

### DamageType

The damage type that the item uses.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>ID</strong></td>
<td><strong>Damage Type</strong></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>Physical</p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>Holy</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Fire</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>Nature</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Frost</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>Shadow</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>Arcane</p></td>
</tr>
</tbody>
</table>

### Delay

The time in milliseconds between successive hits.

### RangedModRange

Range Modifier for bows/guns/crossbows: Default range is somewhere between 0.3 and 0.4 yards,

Note: All blizzard ranged weapons have RangedModRange of 100.

### Bonding

The bonding for the item.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>ID</strong></td>
<td><strong>Bonding Type</strong></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>No bounds</p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>Binds when picked up</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Binds when equipped</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>Binds when used</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Quest item</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>Quest Item1</p></td>
</tr>
</tbody>
</table>

### Name

The name of the item.

Note: Name2, Name3 and Name4 are kept empty.

### Description

The description that appears in orange letters at the bottom of the item tooltip.

### PageText

The ID referring to the text that the item will show (if it is a book or a letter, etc). The item will have a magnifying glass cursor in the game and will show the text when right-clicked. See [page\_text.entry](page_text#page_text-entry)

### LanguageID

The language that the item text is written in.

See the [Languages DBC file](Languages) for the IDs of all of the languages.

### PageMaterial

The background texture that appears in the page text window.

See the [PageTextMaterial DBC file](PageTextMaterial) for the IDs of all of the material types.

### StartQuest

The ID of the quest that this item will start if right-clicked. See [quest\_template.id](quest_template#quest_template-entry)

### LockID

The lock entry ID that this item (which serves as a key) is tied to. This field is used in key-door mechanics.

See the [Lock DBC file](Lock).

### Material

The material that the item is made of. The value here affects the sound that the item makes when moved. Use -1 for consumable items like food, reagents, etc.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>ID</strong></td>
<td><strong>Material</strong></td>
<td><strong>Comment</strong></td>
</tr>
<tr class="even">
<td><p>-1</p></td>
<td><p>Consumables</p></td>
<td>Food, reagents, etc...</td>
</tr>
<tr class="odd">
<td><p>0</p></td>
<td><p>Not Defined</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Metal</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Wood</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Liquid</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Jewelry</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Chain</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Plate</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Cloth</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Leather</p></td>
<td> </td>
</tr>
</tbody>
</table>

### Sheath

Controls how the item is put away on the character. Press the 'Z' hotkey to sheath and unsheathe your weapons.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>ID</strong></td>
<td><strong>Type</strong></td>
<td><strong>Position</strong></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Two Handed Weapon</p></td>
<td><p>Diagonally across the back pointing downwards.</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Staff</p></td>
<td><p>Diagonally across the back pointing upwards.</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>One Handed</p></td>
<td><p>On the left-hand side of the character's waist.</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Shield</p></td>
<td><p>On the middle of the character's back.</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Enchanter's Rod</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Off hand</p></td>
<td><p>On the right-hand side of the character's waist.</p></td>
</tr>
</tbody>
</table>

### RandomProperty

The number in this field points to [item\_enchantment\_template.entry](item_enchantment_template#item_enchantment_template-entry) and ties in an item's chance at having a random property attached to it when it shows up for the first time. This field and the [RandomSuffix](item_template#item_template-RandomSuffix) field CANNOT both have non-zero values. Either one is filled, or the other. Also, the primary source for the number in this field are WDBs.

### RandomSuffix

The number in this field points to [item\_enchantment\_template.entry](item_enchantment_template#item_enchantment_template-entry) and ties in an item's chance at having a random suffix attached to it when it shows up for the first time. This field and the [RandomProperty](item_template#item_template-RandomProperty) field CANNOT both have non-zero values. Either one is filled, or the other. Also, the primary source for the number in this field are WDBs.

### ItemSet

The ID of the item set that this item belongs to. To save you some time, you CAN NOT make up new item sets. Item sets are defined in the ItemSet DBC file.

### Area

The ID of the zone in which this item can be used.

### Map

The ID of the map in which this item can be used.

### BagFamily

If the item is a bag, this field is a bitmask controlling what types of items can be put in this bag. You can combine different types by adding up the bit numbers.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>ID</strong></td>
<td><strong>Bag Family Mask</strong></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>None</p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>Arrows</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Bullets</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Soul Shards</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>Leatherworking Supplies</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>Inscription Supplies</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td><p>Herbs</p></td>
</tr>
<tr class="odd">
<td><p>64</p></td>
<td><p>Enchanting Supplies</p></td>
</tr>
<tr class="even">
<td><p>128</p></td>
<td><p>Engineering Supplies</p></td>
</tr>
<tr class="odd">
<td><p>256</p></td>
<td><p>Keys</p></td>
</tr>
<tr class="even">
<td><p>512</p></td>
<td><p>Gems</p></td>
</tr>
<tr class="odd">
<td><p>1024</p></td>
<td><p>Mining Supplies</p></td>
</tr>
<tr class="even">
<td><p>2048</p></td>
<td><p>Soulbound Equipment</p></td>
</tr>
<tr class="odd">
<td><p>4096</p></td>
<td><p>Vanity Pets</p></td>
</tr>
<tr class="even">
<td><p>8192</p></td>
<td><p>Currency Tokens</p></td>
</tr>
<tr class="odd">
<td><p>16384</p></td>
<td><p>Quest Items</p></td>
</tr>
</tbody>
</table>

### TotemCategory

Corresponds to the ID in the TotemCategory DBC file.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>ID</strong></p></td>
<td><p><strong>Name</strong></p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Skinning Knife (OLD)</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Earth Totem</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Air Totem</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Fire Totem</p></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p>Water Totem</p></td>
</tr>
<tr class="odd">
<td><p>6</p></td>
<td><p>Runed Copper Rod</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Runed Silver Rod</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Runed Golden Rod</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>Runed Truesilver Rod</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>Runed Arcanite Rod</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>Mining Pick (OLD)</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>Philosopher's Stone</p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
<td><p>Blacksmith Hammer (OLD)</p></td>
</tr>
<tr class="odd">
<td><p>14</p></td>
<td><p>Arclight Spanner</p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>Gyromatic Micro-Adjustor</p></td>
</tr>
<tr class="odd">
<td><p>21</p></td>
<td><p>Master Totem</p></td>
</tr>
<tr class="even">
<td><p>41</p></td>
<td><p>Runed Fel Iron Rod</p></td>
</tr>
<tr class="odd">
<td><p>62</p></td>
<td><p>Runed Adamantite Rod</p></td>
</tr>
<tr class="even">
<td><p>63</p></td>
<td><p>Runed Eternium Rod</p></td>
</tr>
<tr class="odd">
<td><p>81</p></td>
<td><p>Hollow Quill</p></td>
</tr>
<tr class="even">
<td><p>101</p></td>
<td><p>Runed Azurite Rod</p></td>
</tr>
<tr class="odd">
<td><p>121</p></td>
<td><p>Virtuoso Inking Set</p></td>
</tr>
<tr class="even">
<td><p>141</p></td>
<td><p>Drums</p></td>
</tr>
<tr class="odd">
<td><p>161</p></td>
<td><p>Gnomish Army Knife</p></td>
</tr>
<tr class="even">
<td><p>162</p></td>
<td><p>Blacksmith Hammer</p></td>
</tr>
<tr class="odd">
<td><p>165</p></td>
<td><p>Mining Pick</p></td>
</tr>
<tr class="even">
<td><p>166</p></td>
<td><p>Skinning Knife</p></td>
</tr>
<tr class="odd">
<td><p>167</p></td>
<td><p>Hammer Pick</p></td>
</tr>
<tr class="even">
<td><p>168</p></td>
<td><p>Bladed Pickaxe</p></td>
</tr>
<tr class="odd">
<td><p>169</p></td>
<td><p>Flint and Tinder</p></td>
</tr>
<tr class="even">
<td><p>189</p></td>
<td><p>Runed Cobalt Rod</p></td>
</tr>
<tr class="odd">
<td><p>190</p></td>
<td><p>Runed Titanium Rod</p></td>
</tr>
</tbody>
</table>

### SocketColor

The color of the socket that can be placed in this item. A maximum of 3 socket colors can be set as seen by the column count.

**ID**
**Color**
1

Meta

2

Red

4

Yellow

8

Blue

### SocketBonus

Commonly used socket bonus IDs

**ID**
**Effect**
3312

+8 Strength

3313

+8 Agility

3305

+12 Stamina

3

+8 Intellect

2872

+9 Healing

3753

+9 Spell Power

3877

+16 Attack Power

### GemProperties

The value here corresponds to the ID in GemProperties.dbc.

### ArmorDamageModifier

field-no-description|95

### Duration

The duration of the item in seconds ingame time.Set ITEM\_FLAGS\_CU\_DURATION\_REAL\_TIME in flags2 for real time. In that case the item duration will tick even if player is offline.

### ItemLimitCategory

field-no-description|97

### HolidayID

See the [Holidays DBC file](Holidays) for the IDs of all of the holidays.

### StatScalingFactor

The factor that is used during the scaling of stats.

### CurrencySubstitutionID

field-no-description|100

### CurrencySubstitutionCount

field-no-description|101

### ItemNameDescriptionID

field-no-description|102

### VerifiedBuild

This field was used to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.


