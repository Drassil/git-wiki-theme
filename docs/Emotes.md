# Emotes

This DBC contains emotes which can be used by NPCs.


## Structure

|            |          |                                                                                                                                                       |
|------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Column** | **Type** | **Comment**                                                                                                                                           |
| 1          | long     | An ID for the emote. Must be unique.                                                                                                                  |
| 2          | str      | A descriptive name for the emote.                                                                                                                     |
| 3          | long     | Refers to an ID in [this DBC file](http://collab.kpsn.org/display/tc/AnimationData). This is the ID of the animation to play.                         |
| 4          | flags    |                                                                                                                                                       |
| 5          | flags    |                                                                                                                                                       |
| 6          | long     |                                                                                                                                                       |
| 7          | long     | Refers to an ID in [this DBC file](http://collab.kpsn.org/display/tc/SoundEntries). This is the ID of the sound to play when the animation is played. |

Information on the structure this DBC file was taken from [here](http://www.pxr.dk/wowdev/wiki/index.php?title=Emotes.dbc). For any information on the columns without a comment, just refer to [that page](http://www.pxr.dk/wowdev/wiki/index.php?title=Emotes.dbc).

## Content

When testing the NPC emotes listed below using the *.npc playemote \#* command, the NPC generally continuously plays the specified emote. When playing the emote through, for example, and SAI script, the NPC may use the emote differently.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>ID</strong></td>
<td><strong>Emote name</strong></td>
<td><strong>Comment</strong></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>ONESHOT_NONE</p></td>
<td>The NPC reverts to its normal standing state.</td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>ONESHOT_TALK(DNR)</p></td>
<td>The NPC plays the talking emote once.</td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>ONESHOT_BOW</p></td>
<td>The NPC plays the bowing emote once.</td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>ONESHOT_WAVE(DNR)</p></td>
<td>The NPC plays the wave emote once.</td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>ONESHOT_CHEER(DNR)</p></td>
<td>The NPC plays the cheering emote once.</td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>ONESHOT_EXCLAMATION(DNR)</p></td>
<td>The NPC plays the exclamation emote once.</td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>ONESHOT_QUESTION</p></td>
<td>The NPC plays the question emote once.</td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>ONESHOT_EAT</p></td>
<td>The NPC plays the eating emote once.</td>
</tr>
<tr class="even">
<td><p>10</p></td>
<td><p>STATE_DANCE</p></td>
<td>The NPC continuously plays the dancing emote.</td>
</tr>
<tr class="odd">
<td><p>11</p></td>
<td><p>ONESHOT_LAUGH</p></td>
<td>The NPC plays the laughing emote once</td>
</tr>
<tr class="even">
<td><p>12</p></td>
<td><p>STATE_SLEEP</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>13</p></td>
<td><p>STATE_SIT</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>14</p></td>
<td><p>ONESHOT_RUDE(DNR)</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>15</p></td>
<td><p>ONESHOT_ROAR(DNR)</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>ONESHOT_KNEEL</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>17</p></td>
<td><p>ONESHOT_KISS</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>18</p></td>
<td><p>ONESHOT_CRY</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>19</p></td>
<td><p>ONESHOT_CHICKEN</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>20</p></td>
<td><p>ONESHOT_BEG</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>21</p></td>
<td><p>ONESHOT_APPLAUD</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>22</p></td>
<td><p>ONESHOT_SHOUT(DNR)</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>23</p></td>
<td><p>ONESHOT_FLEX</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>24</p></td>
<td><p>ONESHOT_SHY(DNR)</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>25</p></td>
<td><p>ONESHOT_POINT(DNR)</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>26</p></td>
<td><p>STATE_STAND</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>27</p></td>
<td><p>STATE_READYUNARMED</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>28</p></td>
<td><p>STATE_WORK_SHEATHED</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>29</p></td>
<td><p>STATE_POINT(DNR)</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>30</p></td>
<td><p>STATE_NONE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>33</p></td>
<td><p>ONESHOT_WOUND</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>34</p></td>
<td><p>ONESHOT_WOUNDCRITICAL</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>35</p></td>
<td><p>ONESHOT_ATTACKUNARMED</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>36</p></td>
<td><p>ONESHOT_ATTACK1H</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>37</p></td>
<td><p>ONESHOT_ATTACK2HTIGHT</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>38</p></td>
<td><p>ONESHOT_ATTACK2H_LOOSE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>39</p></td>
<td><p>ONESHOT_PARRYUNARMED</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>43</p></td>
<td><p>ONESHOT_PARRYSHIELD</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>44</p></td>
<td><p>ONESHOT_READYUNARMED</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>45</p></td>
<td><p>ONESHOT_READY1H</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>48</p></td>
<td><p>ONESHOT_READYBOW</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>50</p></td>
<td><p>ONESHOT_SPELLPRECAST</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>51</p></td>
<td><p>ONESHOT_SPELLCAST</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>53</p></td>
<td><p>ONESHOT_BATTLEROAR</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>54</p></td>
<td><p>ONESHOT_SPECIALATTACK1H</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>60</p></td>
<td><p>ONESHOT_KICK</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>61</p></td>
<td><p>ONESHOT_ATTACKTHROWN</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>64</p></td>
<td><p>STATE_STUN</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>65</p></td>
<td><p>STATE_DEAD</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>66</p></td>
<td><p>ONESHOT_SALUTE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>68</p></td>
<td><p>STATE_KNEEL</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>69</p></td>
<td><p>STATE_USESTANDING</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>70</p></td>
<td><p>ONESHOT_WAVE_NOSHEATHE</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>71</p></td>
<td><p>ONESHOT_CHEER_NOSHEATHE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>92</p></td>
<td><p>ONESHOT_EAT_NOSHEATHE</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>93</p></td>
<td><p>STATE_STUN_NOSHEATHE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>94</p></td>
<td><p>ONESHOT_DANCE</p></td>
<td> </td>
</tr>
<tr class="even">
<td>104</td>
<td>ONESHOT_WHISTLE</td>
<td> </td>
</tr>
<tr class="odd">
<td><p>113</p></td>
<td><p>ONESHOT_SALUTE_NOSHEATH</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>133</p></td>
<td><p>STATE_USESTANDING_NOSHEATHE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>153</p></td>
<td><p>ONESHOT_LAUGH_NOSHEATHE</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>173</p></td>
<td><p>STATE_WORK</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>193</p></td>
<td><p>STATE_SPELLPRECAST</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>213</p></td>
<td><p>ONESHOT_READYRIFLE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>214</p></td>
<td><p>STATE_READYRIFLE</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>233</p></td>
<td><p>STATE_WORK_MINING</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>234</p></td>
<td><p>STATE_WORK_CHOPWOOD</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>253</p></td>
<td><p>STATE_APPLAUD</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>254</p></td>
<td><p>ONESHOT_LIFTOFF</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>273</p></td>
<td><p>ONESHOT_YES(DNR)</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>274</p></td>
<td><p>ONESHOT_NO(DNR)</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>275</p></td>
<td><p>ONESHOT_TRAIN(DNR)</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>293</p></td>
<td><p>ONESHOT_LAND</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>313</p></td>
<td><p>STATE_AT_EASE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>333</p></td>
<td><p>STATE_READY1H</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>353</p></td>
<td><p>STATE_SPELLKNEELSTART</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>373</p></td>
<td><p>STAND_STATE_SUBMERGED</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>374</p></td>
<td><p>ONESHOT_SUBMERGE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>375</p></td>
<td><p>STATE_READY2H</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>376</p></td>
<td><p>STATE_READYBOW</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>377</p></td>
<td><p>ONESHOT_MOUNTSPECIAL</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>378</p></td>
<td><p>STATE_TALK</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>379</p></td>
<td><p>STATE_FISHING</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>380</p></td>
<td><p>ONESHOT_FISHING</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>381</p></td>
<td><p>ONESHOT_LOOT</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>382</p></td>
<td><p>STATE_WHIRLWIND</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>383</p></td>
<td><p>STATE_DROWNED</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>384</p></td>
<td><p>STATE_HOLD_BOW</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>385</p></td>
<td><p>STATE_HOLD_RIFLE</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>386</p></td>
<td><p>STATE_HOLD_THROWN</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>387</p></td>
<td><p>ONESHOT_DROWN</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>388</p></td>
<td><p>ONESHOT_STOMP</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>389</p></td>
<td><p>ONESHOT_ATTACKOFF</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>390</p></td>
<td><p>ONESHOT_ATTACKOFFPIERCE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>391</p></td>
<td><p>STATE_ROAR</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>392</p></td>
<td><p>STATE_LAUGH</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>393</p></td>
<td><p>ONESHOT_CREATURE_SPECIAL</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>394</p></td>
<td><p>ONESHOT_JUMPLANDRUN</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>395</p></td>
<td><p>ONESHOT_JUMPEND</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>396</p></td>
<td><p>ONESHOT_TALK_NOSHEATHE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>397</p></td>
<td><p>ONESHOT_POINT_NOSHEATHE</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>398</p></td>
<td><p>STATE_CANNIBALIZE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>399</p></td>
<td><p>ONESHOT_JUMPSTART</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>400</p></td>
<td><p>STATE_DANCESPECIAL</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>401</p></td>
<td><p>ONESHOT_DANCESPECIAL</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>402</p></td>
<td><p>ONESHOT_CUSTOMSPELL01</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>403</p></td>
<td><p>ONESHOT_CUSTOMSPELL02</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>404</p></td>
<td><p>ONESHOT_CUSTOMSPELL03</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>405</p></td>
<td><p>ONESHOT_CUSTOMSPELL04</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>406</p></td>
<td><p>ONESHOT_CUSTOMSPELL05</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>407</p></td>
<td><p>ONESHOT_CUSTOMSPELL06</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>408</p></td>
<td><p>ONESHOT_CUSTOMSPELL07</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>409</p></td>
<td><p>ONESHOT_CUSTOMSPELL08</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>410</p></td>
<td><p>ONESHOT_CUSTOMSPELL09</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>411</p></td>
<td><p>ONESHOT_CUSTOMSPELL10</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>412</p></td>
<td><p>STATE_EXCLAIM</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>413</p></td>
<td><p>STATE_DANCE_CUSTOM</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>415</p></td>
<td><p>STATE_SIT_CHAIR_MED</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>416</p></td>
<td><p>STATE_CUSTOM_SPELL_01</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>417</p></td>
<td><p>STATE_CUSTOM_SPELL_02</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>418</p></td>
<td><p>STATE_EAT</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>419</p></td>
<td><p>STATE_CUSTOM_SPELL_04</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>420</p></td>
<td><p>STATE_CUSTOM_SPELL_03</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>421</p></td>
<td><p>STATE_CUSTOM_SPELL_05</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>422</p></td>
<td><p>STATE_SPELLEFFECT_HOLD</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>423</p></td>
<td><p>STATE_EAT_NO_SHEATHE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>424</p></td>
<td><p>STATE_MOUNT</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>425</p></td>
<td><p>STATE_READY2HL</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>426</p></td>
<td><p>STATE_SIT_CHAIR_HIGH</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>427</p></td>
<td><p>STATE_FALL</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>428</p></td>
<td><p>STATE_LOOT</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>429</p></td>
<td><p>STATE_SUBMERGED</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>430</p></td>
<td><p>ONESHOT_COWER(DNR)</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>431</p></td>
<td><p>STATE_COWER</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>432</p></td>
<td><p>ONESHOT_USESTANDING</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>433</p></td>
<td><p>STATE_STEALTH_STAND</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>434</p></td>
<td><p>ONESHOT_OMNICAST_GHOUL (W/SOUND</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>435</p></td>
<td><p>ONESHOT_ATTACKBOW</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>436</p></td>
<td><p>ONESHOT_ATTACKRIFLE</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>437</p></td>
<td><p>STATE_SWIM_IDLE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>438</p></td>
<td><p>STATE_ATTACK_UNARMED</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>439</p></td>
<td><p>ONESHOT_SPELLCAST (W/SOUND)</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>440</p></td>
<td><p>ONESHOT_DODGE</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>441</p></td>
<td><p>ONESHOT_PARRY1H</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>442</p></td>
<td><p>ONESHOT_PARRY2H</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>443</p></td>
<td><p>ONESHOT_PARRY2HL</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>444</p></td>
<td><p>STATE_FLYFALL</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>445</p></td>
<td><p>ONESHOT_FLYDEATH</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>446</p></td>
<td><p>STATE_FLY_FALL</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>447</p></td>
<td><p>ONESHOT_FLY_SIT_GROUND_DOWN</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>448</p></td>
<td><p>ONESHOT_FLY_SIT_GROUND_UP</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>449</p></td>
<td><p>ONESHOT_EMERGE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>450</p></td>
<td><p>ONESHOT_DRAGONSPIT</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>451</p></td>
<td><p>STATE_SPECIALUNARMED</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>452</p></td>
<td><p>ONESHOT_FLYGRAB</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>453</p></td>
<td><p>STATE_FLYGRABCLOSED</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>454</p></td>
<td><p>ONESHOT_FLYGRABTHROWN</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>455</p></td>
<td><p>STATE_FLY_SIT_GROUND</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>456</p></td>
<td><p>STATE_WALKBACKWARDS</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>457</p></td>
<td><p>ONESHOT_FLYTALK</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>458</p></td>
<td><p>ONESHOT_FLYATTACK1H</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>459</p></td>
<td><p>STATE_CUSTOMSPELL08</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>460</p></td>
<td><p>ONESHOT_FLY_DRAGONSPIT</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>461</p></td>
<td><p>STATE_SIT_CHAIR_LOW</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>462</p></td>
<td><p>ONE_SHOT_STUN</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>463</p></td>
<td><p>ONESHOT_SPELLCAST_OMNI</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>465</p></td>
<td><p>STATE_READYTHROWN</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>466</p></td>
<td><p>ONESHOT_WORK_CHOPWOOD</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>467</p></td>
<td><p>ONESHOT_WORK_MINING</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>468</p></td>
<td><p>STATE_SPELL_CHANNEL_OMNI</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>469</p></td>
<td><p>STATE_SPELL_CHANNEL_DIRECTED</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>470</p></td>
<td><p>STAND_STATE_NONE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>471</p></td>
<td><p>STATE_READYJOUST</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>473</p></td>
<td><p>STATE_STRANGULATE</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>474</p></td>
<td><p>STATE_READYSPELLOMNI</p></td>
<td> </td>
</tr>
<tr class="even">
<td><p>475</p></td>
<td><p>STATE_HOLD_JOUST</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>476</p></td>
<td><p>ONESHOT_CRY (JAINA PROUDMOORE ONLY)</p></td>
<td> </td>
</tr>
</tbody>
</table>


