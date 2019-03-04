# AreaTable

`Back-to:DBC`

**AreaTable.dbc**

This dbc contains the zone and subzone lists. For the purposes of this wiki article, the zone IDs, names, mapID and AreaID will be included.

**Version is : 3.3.5a**

## Structure

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Column</strong></p></td>
<td><p><strong>Name</strong></p></td>
<td><p><strong>Type</strong></p></td>
<td><p><strong>Notes</strong></p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>ID</p></td>
<td><p>Int</p></td>
<td><p>Zone Area</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>MapID</p></td>
<td><p>Int</p></td>
<td><p>Map or Continent</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>AreaID</p></td>
<td><p>Int</p></td>
<td><p>SubArea of Map</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Explore Flag</p></td>
<td><p>Int</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>5</p></td>
<td><p><a href="#AreaTable-Flags">Flags</a></p></td>
<td><p>Int</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>SoundAmbienceID</p></td>
<td><p>Int</p></td>
<td><p>Reference to what Ambiance to use during day and night</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>ZoneMusicID</p></td>
<td><p>Int</p></td>
<td><p>Reference to what zone music to play</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>ZoneIntroMusicID</p></td>
<td><p>Int</p></td>
<td><p>Reference to what zone intro music to play when entering area</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>Area Level</p></td>
<td><p>Int</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>12-28</p></td>
<td><p>Area Name</p></td>
<td><p>String</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>29</p></td>
<td><p>FactionGroupID</p></td>
<td><p>Int</p></td>
<td><p>Faction that owns area</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

## Flags

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Value</strong></p></td>
<td><p><strong>Name</strong></p></td>
<td><p><strong>Notes</strong></p></td>
</tr>
<tr class="even">
<td><p>0x00000001</p></td>
<td><p>AREA_FLAG_SNOW</p></td>
<td><p>snow (only Dun Morogh, Naxxramas, Razorfen Downs and Winterspring)</p></td>
</tr>
<tr class="odd">
<td><p>0x00000002</p></td>
<td><p>AREA_FLAG_UNK1</p></td>
<td><p>may be necropolis?</p></td>
</tr>
<tr class="even">
<td><p>0x00000004</p></td>
<td><p>AREA_FLAG_UNK2</p></td>
<td><p>Only used for areas on map 571 (development before)</p></td>
</tr>
<tr class="odd">
<td><p>0x00000008</p></td>
<td><p>AREA_FLAG_SLAVE_CAPITAL</p></td>
<td><p>city and city subsones</p></td>
</tr>
<tr class="even">
<td><p>0x00000010</p></td>
<td><p>AREA_FLAG_UNK3</p></td>
<td><p>can't find common meaning</p></td>
</tr>
<tr class="odd">
<td><p>0x00000020</p></td>
<td><p>AREA_FLAG_SLAVE_CAPITAL2</p></td>
<td><p>slave capital city flag?</p></td>
</tr>
<tr class="even">
<td><p>0x00000040</p></td>
<td><p>AREA_FLAG_ALLOW_DUELS</p></td>
<td><p>allow to duel here</p></td>
</tr>
<tr class="odd">
<td><p>0x00000080</p></td>
<td><p>AREA_FLAG_ARENA</p></td>
<td><p>arena, both instanced and world arenas</p></td>
</tr>
<tr class="even">
<td><p>0x00000100</p></td>
<td><p>AREA_FLAG_CAPITAL</p></td>
<td><p>main capital city flag</p></td>
</tr>
<tr class="odd">
<td><p>0x00000200</p></td>
<td><p>AREA_FLAG_CITY</p></td>
<td><p>only for one zone named &quot;City&quot; (where it located?)</p></td>
</tr>
<tr class="even">
<td><p>0x00000400</p></td>
<td><p>AREA_FLAG_OUTLAND</p></td>
<td><p>expansion zones? (only Eye of the Storm not have this flag, but have 0x00004000 flag)</p></td>
</tr>
<tr class="odd">
<td><p>0x00000800</p></td>
<td><p>AREA_FLAG_SANCTUARY</p></td>
<td><p>sanctuary area (PvP disabled)</p></td>
</tr>
<tr class="even">
<td><p>0x00001000</p></td>
<td><p>AREA_FLAG_NEED_FLY</p></td>
<td><p>only Netherwing Ledge, Socrethar's Seat, Tempest Keep, The Arcatraz, The Botanica, The Mechanar, Sorrow Wing Point, Dragonspine Ridge, Netherwing Mines, Dragonmaw Base Camp, Dragonmaw Skyway</p></td>
</tr>
<tr class="odd">
<td><p>0x00002000</p></td>
<td><p>AREA_FLAG_UNUSED1</p></td>
<td><p>not used now (no area/zones with this flag set in 3.0.3)</p></td>
</tr>
<tr class="even">
<td><p>0x00004000</p></td>
<td><p>AREA_FLAG_OUTLAND2</p></td>
<td><p>expansion zones? (only Circle of Blood Arena not have this flag, but have 0x00000400 flag)</p></td>
</tr>
<tr class="odd">
<td><p>0x00008000</p></td>
<td><p>AREA_FLAG_OUTDOOR_PVP</p></td>
<td><p>pvp objective area? (Death's Door also has this flag although it's no pvp object area)</p></td>
</tr>
<tr class="even">
<td><p>0x00010000</p></td>
<td><p>AREA_FLAG_ARENA_INSTANCE</p></td>
<td><p>used by instanced arenas only</p></td>
</tr>
<tr class="odd">
<td><p>0x00020000</p></td>
<td><p>AREA_FLAG_UNUSED2</p></td>
<td><p>not used now (no area/zones with this flag set in 3.0.3)</p></td>
</tr>
<tr class="even">
<td><p>0x00040000</p></td>
<td><p>AREA_FLAG_CONTESTED_AREA</p></td>
<td><p>On PvP servers these areas are considered contested, even though the zone it is contained in is a Horde/Alliance territory.</p></td>
</tr>
<tr class="odd">
<td><p>0x00080000</p></td>
<td><p>AREA_FLAG_UNK6</p></td>
<td><p>Valgarde and Acherus: The Ebon Hold</p></td>
</tr>
<tr class="even">
<td><p>0x00100000</p></td>
<td><p>AREA_FLAG_LOWLEVEL</p></td>
<td><p>used for some starting areas with area_level &lt;=15</p></td>
</tr>
<tr class="odd">
<td><p>0x00200000</p></td>
<td><p>AREA_FLAG_TOWN</p></td>
<td><p>small towns with Inn</p></td>
</tr>
<tr class="even">
<td><p>0x00400000</p></td>
<td><p>AREA_FLAG_UNK7</p></td>
<td><p>Warsong Hold, Acherus: The Ebon Hold, New Agamand Inn, Vengeance Landing Inn</p></td>
</tr>
<tr class="odd">
<td><p>0x00800000</p></td>
<td><p>AREA_FLAG_UNK8</p></td>
<td><p>Westguard Inn, Acherus: The Ebon Hold, Valgarde</p></td>
</tr>
<tr class="even">
<td><p>0x01000000</p></td>
<td><p>AREA_FLAG_WINTERGRASP</p></td>
<td><p>Wintergrasp and it's subzones</p></td>
</tr>
<tr class="odd">
<td><p>0x02000000</p></td>
<td><p>AREA_FLAG_INSIDE</p></td>
<td><p>used for determinating spell related inside/outside questions in Map::IsOutdoors</p></td>
</tr>
<tr class="even">
<td><p>0x04000000</p></td>
<td><p>AREA_FLAG_OUTSIDE</p></td>
<td><p>used for determinating spell related inside/outside questions in Map::IsOutdoors</p></td>
</tr>
<tr class="odd">
<td><p>0x08000000</p></td>
<td><p>AREA_FLAG_WINTERGRASP_2</p></td>
<td><p>Wintergrasp and it's subzones</p></td>
</tr>
<tr class="even">
<td><p>0x20000000</p></td>
<td><p>AREA_FLAG_CANNOT_FLY</p></td>
<td><p>not allowed to fly, only used in Dalaran areas (zone 4395)</p></td>
</tr>
</tbody>
</table>

**It's complete! 2307 records**

## Content

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Field Nb</strong></p></td>
<td><p><strong>Name</strong></p></td>
<td><p><strong>MapID</strong></p></td>
<td><p><strong>AreaID</strong></p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>Dun Morogh</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>Longshore</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>Badlands</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Blasted Lands</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>7</p></td>
<td><p>Blackwater Cove</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>Swamp of Sorrows</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>9</p></td>
<td><p>Northshire Valley</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>10</p></td>
<td><p>Duskwood</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>11</p></td>
<td><p>Wetlands</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>12</p></td>
<td><p>Elwynn Forest</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>13</p></td>
<td><p>The World Tree</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>14</p></td>
<td><p>Durotar</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>Dustwallow Marsh</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>Azshara</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>17</p></td>
<td><p>The Barrens</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>18</p></td>
<td><p>Crystal Lake</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>19</p></td>
<td><p>Zul'Gurub</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>20</p></td>
<td><p>Moonbrook</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>21</p></td>
<td><p>Kul Tiras</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>22</p></td>
<td><p>Programmer Isle</p></td>
<td><p>451</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>23</p></td>
<td><p>Northshire River</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>24</p></td>
<td><p>Northshire Abbey</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>25</p></td>
<td><p>Blackrock Mountain</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>26</p></td>
<td><p>Lighthouse</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>28</p></td>
<td><p>Western Plaguelands</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>30</p></td>
<td><p>Nine</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td><p>The Cemetary</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>33</p></td>
<td><p>Stranglethorn Vale</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>34</p></td>
<td><p>Echo Ridge Mine</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>35</p></td>
<td><p>Booty Bay</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>36</p></td>
<td><p>Alterac Mountains</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>37</p></td>
<td><p>Lake Nazferiti</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>38</p></td>
<td><p>Loch Modan</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>40</p></td>
<td><p>Westfall</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>41</p></td>
<td><p>Deadwind Pass</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>42</p></td>
<td><p>Darkshire</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>43</p></td>
<td><p>Wild Shore</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>44</p></td>
<td><p>Redridge Mountains</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>45</p></td>
<td><p>Arathi Highlands</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>46</p></td>
<td><p>Burning Steppes</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>47</p></td>
<td><p>The Hinterlands</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>49</p></td>
<td><p>Dead Man's Hole</p></td>
<td><p>451</p></td>
<td><p>22</p></td>
</tr>
<tr class="even">
<td><p>51</p></td>
<td><p>Searing Gorge</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>53</p></td>
<td><p>Thieves Camp</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>54</p></td>
<td><p>Jasperlode Mine</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>55</p></td>
<td><p>Valley of Heroes UNUSED</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>56</p></td>
<td><p>Heroes' Vigil</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>57</p></td>
<td><p>Fargodeep Mine</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>59</p></td>
<td><p>Northshire Vineyards</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>60</p></td>
<td><p>Forest's Edge</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>61</p></td>
<td><p>Thunder Falls</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>62</p></td>
<td><p>Brackwell Pumpkin Patch</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>63</p></td>
<td><p>The Stonefield Farm</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>64</p></td>
<td><p>The Maclure Vineyards</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>65</p></td>
<td><p>Dragonblight</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>66</p></td>
<td><p>Zul'Drak</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>67</p></td>
<td><p>The Storm Peaks</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>68</p></td>
<td><p>Lake Everstill</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="even">
<td><p>69</p></td>
<td><p>Lakeshire</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="odd">
<td><p>70</p></td>
<td><p>Stonewatch</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="even">
<td><p>71</p></td>
<td><p>Stonewatch Falls</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="odd">
<td><p>72</p></td>
<td><p>The Dark Portal</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
</tr>
<tr class="even">
<td><p>73</p></td>
<td><p>The Tainted Scar</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
</tr>
<tr class="odd">
<td><p>74</p></td>
<td><p>Pool of Tears</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="even">
<td><p>75</p></td>
<td><p>Stonard</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="odd">
<td><p>76</p></td>
<td><p>Fallow Sanctuary</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="even">
<td><p>77</p></td>
<td><p>Anvilmar</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>80</p></td>
<td><p>Stormwind Mountains</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>81</p></td>
<td><p>Jeff NE Quadrant Changed</p></td>
<td><p>451</p></td>
<td><p>22</p></td>
</tr>
<tr class="odd">
<td><p>82</p></td>
<td><p>Jeff NW Quadrant</p></td>
<td><p>451</p></td>
<td><p>22</p></td>
</tr>
<tr class="even">
<td><p>83</p></td>
<td><p>Jeff SE Quadrant</p></td>
<td><p>451</p></td>
<td><p>22</p></td>
</tr>
<tr class="odd">
<td><p>84</p></td>
<td><p>Jeff SW Quadrant</p></td>
<td><p>451</p></td>
<td><p>22</p></td>
</tr>
<tr class="even">
<td><p>85</p></td>
<td><p>Tirisfal Glades</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>86</p></td>
<td><p>Stone Cairn Lake</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>87</p></td>
<td><p>Goldshire</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>88</p></td>
<td><p>Eastvale Logging Camp</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>89</p></td>
<td><p>Mirror Lake Orchard</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>91</p></td>
<td><p>Tower of Azora</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>92</p></td>
<td><p>Mirror Lake</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>93</p></td>
<td><p>Vul'Gol Ogre Mound</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>94</p></td>
<td><p>Raven Hill</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>95</p></td>
<td><p>Redridge Canyons</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="even">
<td><p>96</p></td>
<td><p>Tower of Ilgalar</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="odd">
<td><p>97</p></td>
<td><p>Alther's Mill</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="even">
<td><p>98</p></td>
<td><p>Rethban Caverns</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="odd">
<td><p>99</p></td>
<td><p>Rebel Camp</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>100</p></td>
<td><p>Nesingwary's Expedition</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>101</p></td>
<td><p>Kurzen's Compound</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>102</p></td>
<td><p>Ruins of Zul'Kunda</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>103</p></td>
<td><p>Ruins of Zul'Mamwe</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>104</p></td>
<td><p>The Vile Reef</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>105</p></td>
<td><p>Mosh'Ogg Ogre Mound</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>106</p></td>
<td><p>The Stockpile</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>107</p></td>
<td><p>Saldean's Farm</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>108</p></td>
<td><p>Sentinel Hill</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>109</p></td>
<td><p>Furlbrow's Pumpkin Farm</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>111</p></td>
<td><p>Jangolode Mine</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>113</p></td>
<td><p>Gold Coast Quarry</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>115</p></td>
<td><p>Westfall Lighthouse</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>116</p></td>
<td><p>Misty Valley</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="even">
<td><p>117</p></td>
<td><p>Grom'gol Base Camp</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>118</p></td>
<td><p>Whelgar's Excavation Site</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>120</p></td>
<td><p>Westbrook Garrison</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>121</p></td>
<td><p>Tranquil Gardens Cemetery</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>122</p></td>
<td><p>Zuuldaia Ruins</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>123</p></td>
<td><p>Bal'lal Ruins</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>125</p></td>
<td><p>Kal'ai Ruins</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>126</p></td>
<td><p>Tkashi Ruins</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>127</p></td>
<td><p>Balia'mah Ruins</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>128</p></td>
<td><p>Ziata'jai Ruins</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>129</p></td>
<td><p>Mizjah Ruins</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>130</p></td>
<td><p>Silverpine Forest</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>131</p></td>
<td><p>Kharanos</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>132</p></td>
<td><p>Coldridge Valley</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>133</p></td>
<td><p>Gnomeregan</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>134</p></td>
<td><p>Gol'Bolar Quarry</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>135</p></td>
<td><p>Frostmane Hold</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>136</p></td>
<td><p>The Grizzled Den</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>137</p></td>
<td><p>Brewnall Village</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>138</p></td>
<td><p>Misty Pine Refuge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>139</p></td>
<td><p>Eastern Plaguelands</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>141</p></td>
<td><p>Teldrassil</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>142</p></td>
<td><p>Ironband's Excavation Site</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>143</p></td>
<td><p>Mo'grosh Stronghold</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="even">
<td><p>144</p></td>
<td><p>Thelsamar</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>145</p></td>
<td><p>Algaz Gate</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="even">
<td><p>146</p></td>
<td><p>Stonewrought Dam</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>147</p></td>
<td><p>The Farstrider Lodge</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="even">
<td><p>148</p></td>
<td><p>Darkshore</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>149</p></td>
<td><p>Silver Stream Mine</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="even">
<td><p>150</p></td>
<td><p>Menethil Harbor</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>151</p></td>
<td><p>Designer Island</p></td>
<td><p>451</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>152</p></td>
<td><p>The Bulwark</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>153</p></td>
<td><p>Ruins of Lordaeron</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>154</p></td>
<td><p>Deathknell</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>155</p></td>
<td><p>Night Web's Hollow</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>156</p></td>
<td><p>Solliden Farmstead</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>157</p></td>
<td><p>Agamand Mills</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>158</p></td>
<td><p>Agamand Family Crypt</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>159</p></td>
<td><p>Brill</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>160</p></td>
<td><p>Whispering Gardens</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>161</p></td>
<td><p>Terrace of Repose</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>162</p></td>
<td><p>Brightwater Lake</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>163</p></td>
<td><p>Gunther's Retreat</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>164</p></td>
<td><p>Garren's Haunt</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>165</p></td>
<td><p>Balnir Farmstead</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>166</p></td>
<td><p>Cold Hearth Manor</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>167</p></td>
<td><p>Crusader Outpost</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>168</p></td>
<td><p>The North Coast</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>169</p></td>
<td><p>Whispering Shore</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>170</p></td>
<td><p>Lordamere Lake</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>172</p></td>
<td><p>Fenris Isle</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>173</p></td>
<td><p>Faol's Rest</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>186</p></td>
<td><p>Dolanaar</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>187</p></td>
<td><p>Darnassus UNUSED</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>188</p></td>
<td><p>Shadowglen</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>189</p></td>
<td><p>Steelgrill's Depot</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>190</p></td>
<td><p>Hearthglen</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="even">
<td><p>192</p></td>
<td><p>Northridge Lumber Camp</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="odd">
<td><p>193</p></td>
<td><p>Ruins of Andorhal</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="even">
<td><p>195</p></td>
<td><p>School of Necromancy</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="odd">
<td><p>196</p></td>
<td><p>Uther's Tomb</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="even">
<td><p>197</p></td>
<td><p>Sorrow Hill</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="odd">
<td><p>198</p></td>
<td><p>The Weeping Cave</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="even">
<td><p>199</p></td>
<td><p>Felstone Field</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="odd">
<td><p>200</p></td>
<td><p>Dalson's Tears</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="even">
<td><p>201</p></td>
<td><p>Gahrron's Withering</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="odd">
<td><p>202</p></td>
<td><p>The Writhing Haunt</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="even">
<td><p>203</p></td>
<td><p>Mardenholde Keep</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="odd">
<td><p>204</p></td>
<td><p>Pyrewood Village</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>205</p></td>
<td><p>Dun Modr</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>206</p></td>
<td><p>Utgarde Keep</p></td>
<td><p>574</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>207</p></td>
<td><p>The Great Sea</p></td>
<td><p>36</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>208</p></td>
<td><p>Unused Ironcladcove</p></td>
<td><p>36</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>209</p></td>
<td><p>Shadowfang Keep</p></td>
<td><p>33</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>210</p></td>
<td><p>Icecrown</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>211</p></td>
<td><p>Iceflow Lake</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>212</p></td>
<td><p>Helm's Bed Lake</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>213</p></td>
<td><p>Deep Elem Mine</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>214</p></td>
<td><p>The Great Sea</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>215</p></td>
<td><p>Mulgore</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>219</p></td>
<td><p>Alexston Farmstead</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>220</p></td>
<td><p>Red Cloud Mesa</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>221</p></td>
<td><p>Camp Narache</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>222</p></td>
<td><p>Bloodhoof Village</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>223</p></td>
<td><p>Stonebull Lake</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>224</p></td>
<td><p>Ravaged Caravan</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>225</p></td>
<td><p>Red Rocks</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>226</p></td>
<td><p>The Skittering Dark</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>227</p></td>
<td><p>Valgan's Field</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>228</p></td>
<td><p>The Sepulcher</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>229</p></td>
<td><p>Olsen's Farthing</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>230</p></td>
<td><p>The Greymane Wall</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>231</p></td>
<td><p>Beren's Peril</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>232</p></td>
<td><p>The Dawning Isles</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>233</p></td>
<td><p>Ambermill</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>235</p></td>
<td><p>Fenris Keep</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>236</p></td>
<td><p>Shadowfang Keep</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>237</p></td>
<td><p>The Decrepit Ferry</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>238</p></td>
<td><p>Malden's Orchard</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>239</p></td>
<td><p>The Ivar Patch</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>240</p></td>
<td><p>The Dead Field</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>241</p></td>
<td><p>The Rotting Orchard</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>242</p></td>
<td><p>Brightwood Grove</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>243</p></td>
<td><p>Forlorn Rowe</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>244</p></td>
<td><p>The Whipple Estate</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>245</p></td>
<td><p>The Yorgen Farmstead</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>246</p></td>
<td><p>The Cauldron</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="even">
<td><p>247</p></td>
<td><p>Grimesilt Dig Site</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="odd">
<td><p>249</p></td>
<td><p>Dreadmaul Rock</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="even">
<td><p>250</p></td>
<td><p>Ruins of Thaurissan</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="odd">
<td><p>251</p></td>
<td><p>Flame Crest</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="even">
<td><p>252</p></td>
<td><p>Blackrock Stronghold</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="odd">
<td><p>253</p></td>
<td><p>The Pillar of Ash</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="even">
<td><p>254</p></td>
<td><p>Blackrock Mountain</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="odd">
<td><p>255</p></td>
<td><p>Altar of Storms</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="even">
<td><p>256</p></td>
<td><p>Aldrassil</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>257</p></td>
<td><p>Shadowthread Cave</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>258</p></td>
<td><p>Fel Rock</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>259</p></td>
<td><p>Lake Al'Ameth</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>260</p></td>
<td><p>Starbreeze Village</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>261</p></td>
<td><p>Gnarlpine Hold</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>262</p></td>
<td><p>Ban'ethil Barrow Den</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>263</p></td>
<td><p>The Cleft</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>264</p></td>
<td><p>The Oracle Glade</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>265</p></td>
<td><p>Wellspring River</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>266</p></td>
<td><p>Wellspring Lake</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>267</p></td>
<td><p>Hillsbrad Foothills</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>268</p></td>
<td><p>Azshara Crater</p></td>
<td><p>37</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>269</p></td>
<td><p>Dun Algaz</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>271</p></td>
<td><p>Southshore</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="odd">
<td><p>272</p></td>
<td><p>Tarren Mill</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="even">
<td><p>275</p></td>
<td><p>Durnholde Keep</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="odd">
<td><p>276</p></td>
<td><p>UNUSED Stonewrought Pass</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>277</p></td>
<td><p>The Foothill Caverns</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>278</p></td>
<td><p>Lordamere Internment Camp</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>279</p></td>
<td><p>Dalaran Crater</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>280</p></td>
<td><p>Strahnbrad</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>281</p></td>
<td><p>Ruins of Alterac</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>282</p></td>
<td><p>Crushridge Hold</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>283</p></td>
<td><p>Slaughter Hollow</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>284</p></td>
<td><p>The Uplands</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>285</p></td>
<td><p>Southpoint Tower</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="odd">
<td><p>286</p></td>
<td><p>Hillsbrad Fields</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="even">
<td><p>287</p></td>
<td><p>Hillsbrad</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="odd">
<td><p>288</p></td>
<td><p>Azurelode Mine</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="even">
<td><p>289</p></td>
<td><p>Nethander Stead</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="odd">
<td><p>290</p></td>
<td><p>Dun Garok</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="even">
<td><p>293</p></td>
<td><p>Thoradin's Wall</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>294</p></td>
<td><p>Eastern Strand</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="even">
<td><p>295</p></td>
<td><p>Western Strand</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="odd">
<td><p>296</p></td>
<td><p>South Seas UNUSED</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>297</p></td>
<td><p>Jaguero Isle</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>298</p></td>
<td><p>Baradin Bay</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>299</p></td>
<td><p>Menethil Bay</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>300</p></td>
<td><p>Misty Reed Strand</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="even">
<td><p>301</p></td>
<td><p>The Savage Coast</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>302</p></td>
<td><p>The Crystal Shore</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>303</p></td>
<td><p>Shell Beach</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>305</p></td>
<td><p>North Tide's Run</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>306</p></td>
<td><p>South Tide's Run</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>307</p></td>
<td><p>The Overlook Cliffs</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>308</p></td>
<td><p>The Forbidding Sea</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>309</p></td>
<td><p>Ironbeard's Tomb</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>310</p></td>
<td><p>Crystalvein Mine</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>311</p></td>
<td><p>Ruins of Aboraz</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>312</p></td>
<td><p>Janeiro's Point</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>313</p></td>
<td><p>Northfold Manor</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>314</p></td>
<td><p>Go'Shek Farm</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>315</p></td>
<td><p>Dabyrie's Farmstead</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>316</p></td>
<td><p>Boulderfist Hall</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>317</p></td>
<td><p>Witherbark Village</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>318</p></td>
<td><p>Drywhisker Gorge</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>320</p></td>
<td><p>Refuge Pointe</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>321</p></td>
<td><p>Hammerfall</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>322</p></td>
<td><p>Blackwater Shipwrecks</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>323</p></td>
<td><p>O'Breen's Camp</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>324</p></td>
<td><p>Stromgarde Keep</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>325</p></td>
<td><p>The Tower of Arathor</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>326</p></td>
<td><p>The Sanctum</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>327</p></td>
<td><p>Faldir's Cove</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>328</p></td>
<td><p>The Drowned Reef</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>330</p></td>
<td><p>Thandol Span</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>331</p></td>
<td><p>Ashenvale</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>332</p></td>
<td><p>The Great Sea</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>333</p></td>
<td><p>Circle of East Binding</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>334</p></td>
<td><p>Circle of West Binding</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>335</p></td>
<td><p>Circle of Inner Binding</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>336</p></td>
<td><p>Circle of Outer Binding</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>337</p></td>
<td><p>Apocryphan's Rest</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>338</p></td>
<td><p>Angor Fortress</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="odd">
<td><p>339</p></td>
<td><p>Lethlor Ravine</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>340</p></td>
<td><p>Kargath</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="odd">
<td><p>341</p></td>
<td><p>Camp Kosh</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>342</p></td>
<td><p>Camp Boff</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="odd">
<td><p>343</p></td>
<td><p>Camp Wurg</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>344</p></td>
<td><p>Camp Cagg</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="odd">
<td><p>345</p></td>
<td><p>Agmond's End</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>346</p></td>
<td><p>Hammertoe's Digsite</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="odd">
<td><p>347</p></td>
<td><p>Dustbelch Grotto</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>348</p></td>
<td><p>Aerie Peak</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>349</p></td>
<td><p>Wildhammer Keep</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>350</p></td>
<td><p>Quel'Danil Lodge</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>351</p></td>
<td><p>Skulk Rock</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>352</p></td>
<td><p>Zun'watha</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>353</p></td>
<td><p>Shadra'Alor</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>354</p></td>
<td><p>Jintha'Alor</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>355</p></td>
<td><p>The Altar of Zul</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>356</p></td>
<td><p>Seradane</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>357</p></td>
<td><p>Feralas</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>358</p></td>
<td><p>Brambleblade Ravine</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>359</p></td>
<td><p>Bael Modan</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>360</p></td>
<td><p>The Venture Co. Mine</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>361</p></td>
<td><p>Felwood</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>362</p></td>
<td><p>Razor Hill</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>363</p></td>
<td><p>Valley of Trials</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>364</p></td>
<td><p>The Den</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>365</p></td>
<td><p>Burning Blade Coven</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>366</p></td>
<td><p>Kolkar Crag</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>367</p></td>
<td><p>Sen'jin Village</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>368</p></td>
<td><p>Echo Isles</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>369</p></td>
<td><p>Thunder Ridge</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>370</p></td>
<td><p>Drygulch Ravine</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>371</p></td>
<td><p>Dustwind Cave</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>372</p></td>
<td><p>Tiragarde Keep</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>373</p></td>
<td><p>Scuttle Coast</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>374</p></td>
<td><p>Bladefist Bay</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>375</p></td>
<td><p>Deadeye Shore</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>377</p></td>
<td><p>Southfury River</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>378</p></td>
<td><p>Camp Taurajo</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>379</p></td>
<td><p>Far Watch Post</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>380</p></td>
<td><p>The Crossroads</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>381</p></td>
<td><p>Boulder Lode Mine</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>382</p></td>
<td><p>The Sludge Fen</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>383</p></td>
<td><p>The Dry Hills</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>384</p></td>
<td><p>Dreadmist Peak</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>385</p></td>
<td><p>Northwatch Hold</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>386</p></td>
<td><p>The Forgotten Pools</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>387</p></td>
<td><p>Lushwater Oasis</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>388</p></td>
<td><p>The Stagnant Oasis</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>390</p></td>
<td><p>Field of Giants</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>391</p></td>
<td><p>The Merchant Coast</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>392</p></td>
<td><p>Ratchet</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>393</p></td>
<td><p>Darkspear Strand</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>394</p></td>
<td><p>Grizzly Hills</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>395</p></td>
<td><p>Grizzlemaw</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>396</p></td>
<td><p>Winterhoof Water Well</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>397</p></td>
<td><p>Thunderhorn Water Well</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>398</p></td>
<td><p>Wildmane Water Well</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>399</p></td>
<td><p>Skyline Ridge</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>400</p></td>
<td><p>Thousand Needles</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>401</p></td>
<td><p>The Tidus Stair</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>403</p></td>
<td><p>Shady Rest Inn</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>404</p></td>
<td><p>Bael'dun Digsite</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>405</p></td>
<td><p>Desolace</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>406</p></td>
<td><p>Stonetalon Mountains</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>407</p></td>
<td><p>Orgrimmar UNUSED</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>408</p></td>
<td><p>Gillijim's Isle</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>409</p></td>
<td><p>Island of Doctor Lapidis</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>410</p></td>
<td><p>Razorwind Canyon</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>411</p></td>
<td><p>Bathran's Haunt</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>412</p></td>
<td><p>The Ruins of Ordil'Aran</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>413</p></td>
<td><p>Maestra's Post</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>414</p></td>
<td><p>The Zoram Strand</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>415</p></td>
<td><p>Astranaar</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>416</p></td>
<td><p>The Shrine of Aessina</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>417</p></td>
<td><p>Fire Scar Shrine</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>418</p></td>
<td><p>The Ruins of Stardust</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>419</p></td>
<td><p>The Howling Vale</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>420</p></td>
<td><p>Silverwind Refuge</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>421</p></td>
<td><p>Mystral Lake</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>422</p></td>
<td><p>Fallen Sky Lake</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>424</p></td>
<td><p>Iris Lake</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>425</p></td>
<td><p>Moonwell</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>426</p></td>
<td><p>Raynewood Retreat</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>427</p></td>
<td><p>The Shady Nook</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>428</p></td>
<td><p>Night Run</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>429</p></td>
<td><p>Xavian</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>430</p></td>
<td><p>Satyrnaar</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>431</p></td>
<td><p>Splintertree Post</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>432</p></td>
<td><p>The Dor'Danil Barrow Den</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>433</p></td>
<td><p>Falfarren River</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>434</p></td>
<td><p>Felfire Hill</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>435</p></td>
<td><p>Demon Fall Canyon</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>436</p></td>
<td><p>Demon Fall Ridge</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>437</p></td>
<td><p>Warsong Lumber Camp</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>438</p></td>
<td><p>Bough Shadow</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>439</p></td>
<td><p>The Shimmering Flats</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>440</p></td>
<td><p>Tanaris</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>441</p></td>
<td><p>Lake Falathim</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>442</p></td>
<td><p>Auberdine</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>443</p></td>
<td><p>Ruins of Mathystra</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>444</p></td>
<td><p>Tower of Althalaxx</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>445</p></td>
<td><p>Cliffspring Falls</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>446</p></td>
<td><p>Bashal'Aran</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>447</p></td>
<td><p>Ameth'Aran</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>448</p></td>
<td><p>Grove of the Ancients</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>449</p></td>
<td><p>The Master's Glaive</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>450</p></td>
<td><p>Remtravel's Excavation</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>452</p></td>
<td><p>Mist's Edge</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>453</p></td>
<td><p>The Long Wash</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>454</p></td>
<td><p>Wildbend River</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>455</p></td>
<td><p>Blackwood Den</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>456</p></td>
<td><p>Cliffspring River</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>457</p></td>
<td><p>The Veiled Sea</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>458</p></td>
<td><p>Gold Road</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>459</p></td>
<td><p>Scarlet Watch Post</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>460</p></td>
<td><p>Sun Rock Retreat</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="even">
<td><p>461</p></td>
<td><p>Windshear Crag</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>463</p></td>
<td><p>Cragpool Lake</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="even">
<td><p>464</p></td>
<td><p>Mirkfallon Lake</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>465</p></td>
<td><p>The Charred Vale</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="even">
<td><p>466</p></td>
<td><p>Valley of the Bloodfuries</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>467</p></td>
<td><p>Stonetalon Peak</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="even">
<td><p>468</p></td>
<td><p>The Talon Den</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>469</p></td>
<td><p>Greatwood Vale</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="even">
<td><p>470</p></td>
<td><p>Thunder Bluff UNUSED</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>471</p></td>
<td><p>Brave Wind Mesa</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>472</p></td>
<td><p>Fire Stone Mesa</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>473</p></td>
<td><p>Mantle Rock</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>474</p></td>
<td><p>Hunter Rise UNUSED</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>475</p></td>
<td><p>Spirit RiseUNUSED</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>476</p></td>
<td><p>Elder RiseUNUSED</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>477</p></td>
<td><p>Ruins of Jubuwal</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>478</p></td>
<td><p>Pools of Arlithrien</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>479</p></td>
<td><p>The Rustmaul Dig Site</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>480</p></td>
<td><p>Camp E'thok</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>481</p></td>
<td><p>Splithoof Crag</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>482</p></td>
<td><p>Highperch</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>483</p></td>
<td><p>The Screeching Canyon</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>484</p></td>
<td><p>Freewind Post</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>485</p></td>
<td><p>The Great Lift</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>486</p></td>
<td><p>Galak Hold</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>487</p></td>
<td><p>Roguefeather Den</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>488</p></td>
<td><p>The Weathered Nook</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>489</p></td>
<td><p>Thalanaar</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>490</p></td>
<td><p>Un'Goro Crater</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>491</p></td>
<td><p>Razorfen Kraul</p></td>
<td><p>47</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>492</p></td>
<td><p>Raven Hill Cemetery</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>493</p></td>
<td><p>Moonglade</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>495</p></td>
<td><p>Howling Fjord</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>496</p></td>
<td><p>Brackenwall Village</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>497</p></td>
<td><p>Swamplight Manor</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>498</p></td>
<td><p>Bloodfen Burrow</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>499</p></td>
<td><p>Darkmist Cavern</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>500</p></td>
<td><p>Moggle Point</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>501</p></td>
<td><p>Beezil's Wreck</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>502</p></td>
<td><p>Witch Hill</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>503</p></td>
<td><p>Sentry Point</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>504</p></td>
<td><p>North Point Tower</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>505</p></td>
<td><p>West Point Tower</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>506</p></td>
<td><p>Lost Point</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>507</p></td>
<td><p>Bluefen</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>508</p></td>
<td><p>Stonemaul Ruins</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>509</p></td>
<td><p>The Den of Flame</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>510</p></td>
<td><p>The Dragonmurk</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>511</p></td>
<td><p>Wyrmbog</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>512</p></td>
<td><p>Blackhoof Village</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>513</p></td>
<td><p>Theramore Isle</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>514</p></td>
<td><p>Foothold Citadel</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>515</p></td>
<td><p>Ironclad Prison</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>516</p></td>
<td><p>Dustwallow Bay</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>517</p></td>
<td><p>Tidefury Cove</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>518</p></td>
<td><p>Dreadmurk Shore</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>536</p></td>
<td><p>Addle's Stead</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>537</p></td>
<td><p>Fire Plume Ridge</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="even">
<td><p>538</p></td>
<td><p>Lakkari Tar Pits</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="odd">
<td><p>539</p></td>
<td><p>Terror Run</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="even">
<td><p>540</p></td>
<td><p>The Slithering Scar</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="odd">
<td><p>541</p></td>
<td><p>Marshal's Refuge</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="even">
<td><p>542</p></td>
<td><p>Fungal Rock</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="odd">
<td><p>543</p></td>
<td><p>Golakka Hot Springs</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="even">
<td><p>556</p></td>
<td><p>The Loch</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>576</p></td>
<td><p>Beggar's Haunt</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>596</p></td>
<td><p>Kodo Graveyard</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>597</p></td>
<td><p>Ghost Walker Post</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="even">
<td><p>598</p></td>
<td><p>Sar'theris Strand</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>599</p></td>
<td><p>Thunder Axe Fortress</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="even">
<td><p>600</p></td>
<td><p>Bolgan's Hole</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>602</p></td>
<td><p>Mannoroc Coven</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="even">
<td><p>603</p></td>
<td><p>Sargeron</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>604</p></td>
<td><p>Magram Village</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="even">
<td><p>606</p></td>
<td><p>Gelkis Village</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>607</p></td>
<td><p>Valley of Spears</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="even">
<td><p>608</p></td>
<td><p>Nijel's Point</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>609</p></td>
<td><p>Kolkar Village</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="even">
<td><p>616</p></td>
<td><p>Hyjal</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>618</p></td>
<td><p>Winterspring</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>636</p></td>
<td><p>Blackwolf River</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>637</p></td>
<td><p>Kodo Rock</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>638</p></td>
<td><p>Hidden Path</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>639</p></td>
<td><p>Spirit Rock</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>640</p></td>
<td><p>Shrine of the Dormant Flame</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>656</p></td>
<td><p>Lake Elune'ara</p></td>
<td><p>1</p></td>
<td><p>493</p></td>
</tr>
<tr class="even">
<td><p>657</p></td>
<td><p>The Harborage</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="odd">
<td><p>676</p></td>
<td><p>Outland</p></td>
<td><p>150</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>696</p></td>
<td><p>Craftsmen's Terrace UNUSED</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>697</p></td>
<td><p>Tradesmen's Terrace UNUSED</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>698</p></td>
<td><p>The Temple Gardens UNUSED</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>699</p></td>
<td><p>Temple of Elune UNUSED</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>700</p></td>
<td><p>Cenarion Enclave UNUSED</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>701</p></td>
<td><p>Warrior's Terrace UNUSED</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="even">
<td><p>702</p></td>
<td><p>Rut'theran Village</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>716</p></td>
<td><p>Ironband's Compound</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>717</p></td>
<td><p>The Stockade</p></td>
<td><p>34</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>718</p></td>
<td><p>Wailing Caverns</p></td>
<td><p>43</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>719</p></td>
<td><p>Blackfathom Deeps</p></td>
<td><p>48</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>720</p></td>
<td><p>Fray Island</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>721</p></td>
<td><p>Gnomeregan</p></td>
<td><p>90</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>722</p></td>
<td><p>Razorfen Downs</p></td>
<td><p>129</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>736</p></td>
<td><p>Ban'ethil Hollow</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>796</p></td>
<td><p>Scarlet Monastery</p></td>
<td><p>189</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>797</p></td>
<td><p>Jerod's Landing</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="odd">
<td><p>798</p></td>
<td><p>Ridgepoint Tower</p></td>
<td><p>0</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>799</p></td>
<td><p>The Darkened Bank</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>800</p></td>
<td><p>Coldridge Pass</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>801</p></td>
<td><p>Chill Breeze Valley</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>802</p></td>
<td><p>Shimmer Ridge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>803</p></td>
<td><p>Amberstill Ranch</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>804</p></td>
<td><p>The Tundrid Hills</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>805</p></td>
<td><p>South Gate Pass</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>806</p></td>
<td><p>South Gate Outpost</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>807</p></td>
<td><p>North Gate Pass</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>808</p></td>
<td><p>North Gate Outpost</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>809</p></td>
<td><p>Gates of Ironforge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>810</p></td>
<td><p>Stillwater Pond</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>811</p></td>
<td><p>Nightmare Vale</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>812</p></td>
<td><p>Venomweb Vale</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>813</p></td>
<td><p>The Bulwark</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="odd">
<td><p>814</p></td>
<td><p>Southfury River</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>815</p></td>
<td><p>Southfury River</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>816</p></td>
<td><p>Razormane Grounds</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>817</p></td>
<td><p>Skull Rock</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>818</p></td>
<td><p>Palemane Rock</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>819</p></td>
<td><p>Windfury Ridge</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>820</p></td>
<td><p>The Golden Plains</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>821</p></td>
<td><p>The Rolling Plains</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="odd">
<td><p>836</p></td>
<td><p>Dun Algaz</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>837</p></td>
<td><p>Dun Algaz</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>838</p></td>
<td><p>North Gate Pass</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="even">
<td><p>839</p></td>
<td><p>South Gate Pass</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>856</p></td>
<td><p>Twilight Grove</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>876</p></td>
<td><p>GM Island</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>877</p></td>
<td><p>Delete ME</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>878</p></td>
<td><p>Southfury River</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>879</p></td>
<td><p>Southfury River</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>880</p></td>
<td><p>Thandol Span</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>881</p></td>
<td><p>Thandol Span</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>896</p></td>
<td><p>Purgation Isle</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="odd">
<td><p>916</p></td>
<td><p>The Jansen Stead</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>917</p></td>
<td><p>The Dead Acre</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>918</p></td>
<td><p>The Molsen Farm</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>919</p></td>
<td><p>Stendel's Pond</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>920</p></td>
<td><p>The Dagger Hills</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>921</p></td>
<td><p>Demont's Place</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>922</p></td>
<td><p>The Dust Plains</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>923</p></td>
<td><p>Stonesplinter Valley</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>924</p></td>
<td><p>Valley of Kings</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="even">
<td><p>925</p></td>
<td><p>Algaz Station</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>926</p></td>
<td><p>Bucklebree Farm</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>927</p></td>
<td><p>The Shining Strand</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>928</p></td>
<td><p>North Tide's Hollow</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="even">
<td><p>936</p></td>
<td><p>Grizzlepaw Ridge</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>956</p></td>
<td><p>The Verdant Fields</p></td>
<td><p>169</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>976</p></td>
<td><p>Gadgetzan</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>977</p></td>
<td><p>Steamwheedle Port</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>978</p></td>
<td><p>Zul'Farrak</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>979</p></td>
<td><p>Sandsorrow Watch</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>980</p></td>
<td><p>Thistleshrub Valley</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>981</p></td>
<td><p>The Gaping Chasm</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>982</p></td>
<td><p>The Noxious Lair</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>983</p></td>
<td><p>Dunemaul Compound</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>984</p></td>
<td><p>Eastmoon Ruins</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>985</p></td>
<td><p>Waterspring Field</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>986</p></td>
<td><p>Zalashji's Den</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>987</p></td>
<td><p>Land's End Beach</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>988</p></td>
<td><p>Wavestrider Beach</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>989</p></td>
<td><p>Uldum</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>990</p></td>
<td><p>Valley of the Watchers</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>991</p></td>
<td><p>Gunstan's Post</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>992</p></td>
<td><p>Southmoon Ruins</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>996</p></td>
<td><p>Render's Camp</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="even">
<td><p>997</p></td>
<td><p>Render's Valley</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="odd">
<td><p>998</p></td>
<td><p>Render's Rock</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="even">
<td><p>999</p></td>
<td><p>Stonewatch Tower</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="odd">
<td><p>1000</p></td>
<td><p>Galardell Valley</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="even">
<td><p>1001</p></td>
<td><p>Lakeridge Highway</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="odd">
<td><p>1002</p></td>
<td><p>Three Corners</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="even">
<td><p>1016</p></td>
<td><p>Direforge Hill</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>1017</p></td>
<td><p>Raptor Ridge</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>1018</p></td>
<td><p>Black Channel Marsh</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>1019</p></td>
<td><p>The Green Belt</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>1020</p></td>
<td><p>Mosshide Fen</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>1021</p></td>
<td><p>Thelgen Rock</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>1022</p></td>
<td><p>Bluegill Marsh</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>1023</p></td>
<td><p>Saltspray Glen</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>1024</p></td>
<td><p>Sundown Marsh</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>1025</p></td>
<td><p>The Green Belt</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>1036</p></td>
<td><p>Angerfang Encampment</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>1037</p></td>
<td><p>Grim Batol</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>1038</p></td>
<td><p>Dragonmaw Gates</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>1039</p></td>
<td><p>The Lost Fleet</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>1056</p></td>
<td><p>Darrow Hill</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="odd">
<td><p>1057</p></td>
<td><p>Thoradin's Wall</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="even">
<td><p>1076</p></td>
<td><p>Webwinder Path</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>1097</p></td>
<td><p>The Hushed Bank</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>1098</p></td>
<td><p>Manor Mistmantle</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>1099</p></td>
<td><p>Camp Mojache</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1100</p></td>
<td><p>Grimtotem Compound</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1101</p></td>
<td><p>The Writhing Deep</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1102</p></td>
<td><p>Wildwind Lake</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1103</p></td>
<td><p>Gordunni Outpost</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1104</p></td>
<td><p>Mok'Gordun</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1105</p></td>
<td><p>Feral Scar Vale</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1106</p></td>
<td><p>Frayfeather Highlands</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1107</p></td>
<td><p>Idlewind Lake</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1108</p></td>
<td><p>The Forgotten Coast</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1109</p></td>
<td><p>East Pillar</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1110</p></td>
<td><p>West Pillar</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1111</p></td>
<td><p>Dream Bough</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1112</p></td>
<td><p>Jademir Lake</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1113</p></td>
<td><p>Oneiros</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1114</p></td>
<td><p>Ruins of Ravenwind</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1115</p></td>
<td><p>Rage Scar Hold</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1116</p></td>
<td><p>Feathermoon Stronghold</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1117</p></td>
<td><p>Ruins of Solarsal</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1118</p></td>
<td><p>Lower Wilds UNUSED</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1119</p></td>
<td><p>The Twin Colossals</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1120</p></td>
<td><p>Sardor Isle</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1121</p></td>
<td><p>Isle of Dread</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1136</p></td>
<td><p>High Wilderness</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>1137</p></td>
<td><p>Lower Wilds</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>1156</p></td>
<td><p>Southern Barrens</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1157</p></td>
<td><p>Southern Gold Road</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1176</p></td>
<td><p>Zul'Farrak</p></td>
<td><p>209</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1196</p></td>
<td><p>Utgarde Pinnacle</p></td>
<td><p>575</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>1216</p></td>
<td><p>Timbermaw Hold</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1217</p></td>
<td><p>Vanndir Encampment</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1218</p></td>
<td><p>TESTAzshara</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1219</p></td>
<td><p>Legash Encampment</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1220</p></td>
<td><p>Thalassian Base Camp</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1221</p></td>
<td><p>Ruins of Eldarath</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1222</p></td>
<td><p>Hetaera's Clutch</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1223</p></td>
<td><p>Temple of Zin-Malor</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1224</p></td>
<td><p>Bear's Head</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1225</p></td>
<td><p>Ursolan</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1226</p></td>
<td><p>Temple of Arkkoran</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1227</p></td>
<td><p>Bay of Storms</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1228</p></td>
<td><p>The Shattered Strand</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1229</p></td>
<td><p>Tower of Eldara</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1230</p></td>
<td><p>Jagged Reef</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1231</p></td>
<td><p>Southridge Beach</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1232</p></td>
<td><p>Ravencrest Monument</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1233</p></td>
<td><p>Forlorn Ridge</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1234</p></td>
<td><p>Lake Mennar</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1235</p></td>
<td><p>Shadowsong Shrine</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1236</p></td>
<td><p>Haldarr Encampment</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1237</p></td>
<td><p>Valormok</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>1256</p></td>
<td><p>The Ruined Reaches</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>1276</p></td>
<td><p>The Talondeep Path</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>1277</p></td>
<td><p>The Talondeep Path</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>1296</p></td>
<td><p>Rocktusk Farm</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>1297</p></td>
<td><p>Jaggedswine Farm</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>1316</p></td>
<td><p>Razorfen Downs</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1336</p></td>
<td><p>Lost Rigger Cove</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>1337</p></td>
<td><p>Uldaman</p></td>
<td><p>70</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>1338</p></td>
<td><p>Lordamere Lake</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>1339</p></td>
<td><p>Lordamere Lake</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>1357</p></td>
<td><p>Gallows' Corner</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>1377</p></td>
<td><p>Silithus</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>1397</p></td>
<td><p>Emerald Forest</p></td>
<td><p>169</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1417</p></td>
<td><p>Sunken Temple</p></td>
<td><p>109</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>1437</p></td>
<td><p>Dreadmaul Hold</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
</tr>
<tr class="odd">
<td><p>1438</p></td>
<td><p>Nethergarde Keep</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
</tr>
<tr class="even">
<td><p>1439</p></td>
<td><p>Dreadmaul Post</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
</tr>
<tr class="odd">
<td><p>1440</p></td>
<td><p>Serpent's Coil</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
</tr>
<tr class="even">
<td><p>1441</p></td>
<td><p>Altar of Storms</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
</tr>
<tr class="odd">
<td><p>1442</p></td>
<td><p>Firewatch Ridge</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="even">
<td><p>1443</p></td>
<td><p>The Slag Pit</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="odd">
<td><p>1444</p></td>
<td><p>The Sea of Cinders</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="even">
<td><p>1445</p></td>
<td><p>Blackrock Mountain</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="odd">
<td><p>1446</p></td>
<td><p>Thorium Point</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="even">
<td><p>1457</p></td>
<td><p>Garrison Armory</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
</tr>
<tr class="odd">
<td><p>1477</p></td>
<td><p>The Temple of Atal'Hakkar</p></td>
<td><p>109</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>1497</p></td>
<td><p>Undercity</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1517</p></td>
<td><p>Uldaman</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>1518</p></td>
<td><p>Not Used Deadmines</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>1519</p></td>
<td><p>Stormwind City</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>1537</p></td>
<td><p>Ironforge</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1557</p></td>
<td><p>Splithoof Hold</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>1577</p></td>
<td><p>The Cape of Stranglethorn</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>1578</p></td>
<td><p>Southern Savage Coast</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>1579</p></td>
<td><p>Unused The Deadmines 002</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1580</p></td>
<td><p>Unused Ironclad Cove 003</p></td>
<td><p>0</p></td>
<td><p>1579</p></td>
</tr>
<tr class="even">
<td><p>1581</p></td>
<td><p>The Deadmines</p></td>
<td><p>36</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1582</p></td>
<td><p>Ironclad Cove</p></td>
<td><p>36</p></td>
<td><p>1581</p></td>
</tr>
<tr class="even">
<td><p>1583</p></td>
<td><p>Blackrock Spire</p></td>
<td><p>229</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1584</p></td>
<td><p>Blackrock Depths</p></td>
<td><p>230</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>1597</p></td>
<td><p>Raptor Grounds UNUSED</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1598</p></td>
<td><p>Grol'dom Farm UNUSED</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1599</p></td>
<td><p>Mor'shan Base Camp</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1600</p></td>
<td><p>Honor's Stand UNUSED</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1601</p></td>
<td><p>Blackthorn Ridge UNUSED</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1602</p></td>
<td><p>Bramblescar UNUSED</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1603</p></td>
<td><p>Agama'gor UNUSED</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1617</p></td>
<td><p>Valley of Heroes</p></td>
<td><p>0</p></td>
<td><p>1519</p></td>
</tr>
<tr class="even">
<td><p>1637</p></td>
<td><p>Orgrimmar</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1638</p></td>
<td><p>Thunder Bluff</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>1639</p></td>
<td><p>Elder Rise</p></td>
<td><p>1</p></td>
<td><p>1638</p></td>
</tr>
<tr class="odd">
<td><p>1640</p></td>
<td><p>Spirit Rise</p></td>
<td><p>1</p></td>
<td><p>1638</p></td>
</tr>
<tr class="even">
<td><p>1641</p></td>
<td><p>Hunter Rise</p></td>
<td><p>1</p></td>
<td><p>1638</p></td>
</tr>
<tr class="odd">
<td><p>1657</p></td>
<td><p>Darnassus</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>1658</p></td>
<td><p>Cenarion Enclave</p></td>
<td><p>1</p></td>
<td><p>1657</p></td>
</tr>
<tr class="odd">
<td><p>1659</p></td>
<td><p>Craftsmen's Terrace</p></td>
<td><p>1</p></td>
<td><p>1657</p></td>
</tr>
<tr class="even">
<td><p>1660</p></td>
<td><p>Warrior's Terrace</p></td>
<td><p>1</p></td>
<td><p>1657</p></td>
</tr>
<tr class="odd">
<td><p>1661</p></td>
<td><p>The Temple Gardens</p></td>
<td><p>1</p></td>
<td><p>1657</p></td>
</tr>
<tr class="even">
<td><p>1662</p></td>
<td><p>Tradesmen's Terrace</p></td>
<td><p>1</p></td>
<td><p>1657</p></td>
</tr>
<tr class="odd">
<td><p>1677</p></td>
<td><p>Gavin's Naze</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>1678</p></td>
<td><p>Sofera's Naze</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>1679</p></td>
<td><p>Corrahn's Dagger</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>1680</p></td>
<td><p>The Headland</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>1681</p></td>
<td><p>Misty Shore</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>1682</p></td>
<td><p>Dandred's Fold</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>1683</p></td>
<td><p>Growless Cave</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>1684</p></td>
<td><p>Chillwind Point</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>1697</p></td>
<td><p>Raptor Grounds</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1698</p></td>
<td><p>Bramblescar</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1699</p></td>
<td><p>Thorn Hill</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1700</p></td>
<td><p>Agama'gor</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1701</p></td>
<td><p>Blackthorn Ridge</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1702</p></td>
<td><p>Honor's Stand</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1703</p></td>
<td><p>The Mor'shan Rampart</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1704</p></td>
<td><p>Grol'dom Farm</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1717</p></td>
<td><p>Razorfen Kraul</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>1718</p></td>
<td><p>The Great Lift</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>1737</p></td>
<td><p>Mistvale Valley</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>1738</p></td>
<td><p>Nek'mani Wellspring</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>1739</p></td>
<td><p>Bloodsail Compound</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>1740</p></td>
<td><p>Venture Co. Base Camp</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>1741</p></td>
<td><p>Gurubashi Arena</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>1742</p></td>
<td><p>Spirit Den</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>1757</p></td>
<td><p>The Crimson Veil</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>1758</p></td>
<td><p>The Riptide</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>1759</p></td>
<td><p>The Damsel's Luck</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>1760</p></td>
<td><p>Venture Co. Operations Center</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>1761</p></td>
<td><p>Deadwood Village</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>1762</p></td>
<td><p>Felpaw Village</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="odd">
<td><p>1763</p></td>
<td><p>Jaedenar</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>1764</p></td>
<td><p>Bloodvenom River</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="odd">
<td><p>1765</p></td>
<td><p>Bloodvenom Falls</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>1766</p></td>
<td><p>Shatter Scar Vale</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="odd">
<td><p>1767</p></td>
<td><p>Irontree Woods</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>1768</p></td>
<td><p>Irontree Cavern</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="odd">
<td><p>1769</p></td>
<td><p>Timbermaw Hold</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>1770</p></td>
<td><p>Shadow Hold</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="odd">
<td><p>1771</p></td>
<td><p>Shrine of the Deceiver</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>1777</p></td>
<td><p>Itharius's Cave</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="odd">
<td><p>1778</p></td>
<td><p>Sorrowmurk</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="even">
<td><p>1779</p></td>
<td><p>Draenil'dur Village</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="odd">
<td><p>1780</p></td>
<td><p>Splinterspear Junction</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="even">
<td><p>1797</p></td>
<td><p>Stagalbog</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="odd">
<td><p>1798</p></td>
<td><p>The Shifting Mire</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="even">
<td><p>1817</p></td>
<td><p>Stagalbog Cave</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="odd">
<td><p>1837</p></td>
<td><p>Witherbark Caverns</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>1857</p></td>
<td><p>Thoradin's Wall</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>1858</p></td>
<td><p>Boulder'gor</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>1877</p></td>
<td><p>Valley of Fangs</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="odd">
<td><p>1878</p></td>
<td><p>The Dustbowl</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>1879</p></td>
<td><p>Mirage Flats</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="odd">
<td><p>1880</p></td>
<td><p>Featherbeard's Hovel</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>1881</p></td>
<td><p>Shindigger's Camp</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>1882</p></td>
<td><p>Plaguemist Ravine</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>1883</p></td>
<td><p>Valorwind Lake</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>1884</p></td>
<td><p>Agol'watha</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>1885</p></td>
<td><p>Hiri'watha</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>1886</p></td>
<td><p>The Creeping Ruin</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>1887</p></td>
<td><p>Bogen's Ledge</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>1897</p></td>
<td><p>The Maker's Terrace</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="even">
<td><p>1898</p></td>
<td><p>Dustwind Gulch</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
</tr>
<tr class="odd">
<td><p>1917</p></td>
<td><p>Shaol'watha</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>1937</p></td>
<td><p>Noonshade Ruins</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>1938</p></td>
<td><p>Broken Pillar</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>1939</p></td>
<td><p>Abyssal Sands</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="odd">
<td><p>1940</p></td>
<td><p>Southbreak Shore</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>1941</p></td>
<td><p>Caverns of Time</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1942</p></td>
<td><p>The Marshlands</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="even">
<td><p>1943</p></td>
<td><p>Ironstone Plateau</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="odd">
<td><p>1957</p></td>
<td><p>Blackchar Cave</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="even">
<td><p>1958</p></td>
<td><p>Tanner Camp</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="odd">
<td><p>1959</p></td>
<td><p>Dustfire Valley</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="even">
<td><p>1977</p></td>
<td><p>Zul'Gurub</p></td>
<td><p>309</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>1978</p></td>
<td><p>Misty Reed Post</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="even">
<td><p>1997</p></td>
<td><p>Bloodvenom Post</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="odd">
<td><p>1998</p></td>
<td><p>Talonbranch Glade</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>2017</p></td>
<td><p>Stratholme</p></td>
<td><p>329</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>2037</p></td>
<td><p>Quel'thalas</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2057</p></td>
<td><p>Scholomance</p></td>
<td><p>289</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>2077</p></td>
<td><p>Twilight Vale</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>2078</p></td>
<td><p>Twilight Shore</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>2079</p></td>
<td><p>Alcaz Island</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>2097</p></td>
<td><p>Darkcloud Pinnacle</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>2098</p></td>
<td><p>Dawning Wood Catacombs</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>2099</p></td>
<td><p>Stonewatch Keep</p></td>
<td><p>0</p></td>
<td><p>44</p></td>
</tr>
<tr class="odd">
<td><p>2100</p></td>
<td><p>Maraudon</p></td>
<td><p>349</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2101</p></td>
<td><p>Stoutlager Inn</p></td>
<td><p>0</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>2102</p></td>
<td><p>Thunderbrew Distillery</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
</tr>
<tr class="even">
<td><p>2103</p></td>
<td><p>Menethil Keep</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>2104</p></td>
<td><p>Deepwater Tavern</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="even">
<td><p>2117</p></td>
<td><p>Shadow Grave</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>2118</p></td>
<td><p>Brill Town Hall</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>2119</p></td>
<td><p>Gallows' End Tavern</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="odd">
<td><p>2137</p></td>
<td><p>The Pools of VisionUNUSED</p></td>
<td><p>1</p></td>
<td><p>215</p></td>
</tr>
<tr class="even">
<td><p>2138</p></td>
<td><p>Dreadmist Den</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>2157</p></td>
<td><p>Bael'dun Keep</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>2158</p></td>
<td><p>Emberstrife's Den</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>2159</p></td>
<td><p>Onyxia's Lair</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2160</p></td>
<td><p>Windshear Mine</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>2161</p></td>
<td><p>Roland's Doom</p></td>
<td><p>0</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>2177</p></td>
<td><p>Battle Ring</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>2197</p></td>
<td><p>The Pools of Vision</p></td>
<td><p>1</p></td>
<td><p>1638</p></td>
</tr>
<tr class="even">
<td><p>2198</p></td>
<td><p>Shadowbreak Ravine</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>2217</p></td>
<td><p>Broken Spear Village</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="even">
<td><p>2237</p></td>
<td><p>Whitereach Post</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>2238</p></td>
<td><p>Gornia</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>2239</p></td>
<td><p>Zane's Eye Crater</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>2240</p></td>
<td><p>Mirage Raceway</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>2241</p></td>
<td><p>Frostsaber Rock</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="odd">
<td><p>2242</p></td>
<td><p>The Hidden Grove</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="even">
<td><p>2243</p></td>
<td><p>Timbermaw Post</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="odd">
<td><p>2244</p></td>
<td><p>Winterfall Village</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="even">
<td><p>2245</p></td>
<td><p>Mazthoril</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="odd">
<td><p>2246</p></td>
<td><p>Frostfire Hot Springs</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="even">
<td><p>2247</p></td>
<td><p>Ice Thistle Hills</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="odd">
<td><p>2248</p></td>
<td><p>Dun Mandarr</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="even">
<td><p>2249</p></td>
<td><p>Frostwhisper Gorge</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="odd">
<td><p>2250</p></td>
<td><p>Owl Wing Thicket</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="even">
<td><p>2251</p></td>
<td><p>Lake Kel'Theril</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="odd">
<td><p>2252</p></td>
<td><p>The Ruins of Kel'Theril</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="even">
<td><p>2253</p></td>
<td><p>Starfall Village</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="odd">
<td><p>2254</p></td>
<td><p>Ban'Thallow Barrow Den</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="even">
<td><p>2255</p></td>
<td><p>Everlook</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="odd">
<td><p>2256</p></td>
<td><p>Darkwhisper Gorge</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="even">
<td><p>2257</p></td>
<td><p>Deeprun Tram</p></td>
<td><p>369</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>2258</p></td>
<td><p>The Fungal Vale</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2259</p></td>
<td><p>UNUSEDThe Marris Stead</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2260</p></td>
<td><p>The Marris Stead</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2261</p></td>
<td><p>The Undercroft</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2262</p></td>
<td><p>Darrowshire</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2263</p></td>
<td><p>Crown Guard Tower</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2264</p></td>
<td><p>Corin's Crossing</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2265</p></td>
<td><p>Scarlet Base Camp</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2266</p></td>
<td><p>Tyr's Hand</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2267</p></td>
<td><p>The Scarlet Basilica</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2268</p></td>
<td><p>Light's Hope Chapel</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2269</p></td>
<td><p>Browman Mill</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2270</p></td>
<td><p>The Noxious Glade</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2271</p></td>
<td><p>Eastwall Tower</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2272</p></td>
<td><p>Northdale</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2273</p></td>
<td><p>Zul'Mashar</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2274</p></td>
<td><p>Mazra'Alor</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2275</p></td>
<td><p>Northpass Tower</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2276</p></td>
<td><p>Quel'Lithien Lodge</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2277</p></td>
<td><p>Plaguewood</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2278</p></td>
<td><p>Scourgehold</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2279</p></td>
<td><p>Stratholme</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2280</p></td>
<td><p>DO NOT USE</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2297</p></td>
<td><p>Darrowmere Lake</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="odd">
<td><p>2298</p></td>
<td><p>Caer Darrow</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="even">
<td><p>2299</p></td>
<td><p>Darrowmere Lake</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2300</p></td>
<td><p>Caverns of Time</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>2301</p></td>
<td><p>Thistlefur Village</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>2302</p></td>
<td><p>The Quagmire</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>2303</p></td>
<td><p>Windbreak Canyon</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>2317</p></td>
<td><p>South Seas</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>2318</p></td>
<td><p>The Great Sea</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>2319</p></td>
<td><p>The Great Sea</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="even">
<td><p>2320</p></td>
<td><p>The Great Sea</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>2321</p></td>
<td><p>The Great Sea</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>2322</p></td>
<td><p>The Veiled Sea</p></td>
<td><p>1</p></td>
<td><p>141</p></td>
</tr>
<tr class="odd">
<td><p>2323</p></td>
<td><p>The Veiled Sea</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>2324</p></td>
<td><p>The Veiled Sea</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>2325</p></td>
<td><p>The Veiled Sea</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>2326</p></td>
<td><p>The Veiled Sea</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>2337</p></td>
<td><p>Razor Hill Barracks</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>2338</p></td>
<td><p>South Seas</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>2339</p></td>
<td><p>The Great Sea</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>2357</p></td>
<td><p>Bloodtooth Camp</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>2358</p></td>
<td><p>Forest Song</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>2359</p></td>
<td><p>Greenpaw Village</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>2360</p></td>
<td><p>Silverwing Outpost</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>2361</p></td>
<td><p>Nighthaven</p></td>
<td><p>1</p></td>
<td><p>493</p></td>
</tr>
<tr class="odd">
<td><p>2362</p></td>
<td><p>Shrine of Remulos</p></td>
<td><p>1</p></td>
<td><p>493</p></td>
</tr>
<tr class="even">
<td><p>2363</p></td>
<td><p>Stormrage Barrow Dens</p></td>
<td><p>1</p></td>
<td><p>493</p></td>
</tr>
<tr class="odd">
<td><p>2364</p></td>
<td><p>The Great Sea</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>2365</p></td>
<td><p>The Great Sea</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>2366</p></td>
<td><p>The Black Morass</p></td>
<td><p>269</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2367</p></td>
<td><p>Old Hillsbrad Foothills</p></td>
<td><p>560</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>2368</p></td>
<td><p>Tarren Mill</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="even">
<td><p>2369</p></td>
<td><p>Southshore</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="odd">
<td><p>2370</p></td>
<td><p>Durnholde Keep</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="even">
<td><p>2371</p></td>
<td><p>Dun Garok</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="odd">
<td><p>2372</p></td>
<td><p>Hillsbrad Fields</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="even">
<td><p>2373</p></td>
<td><p>Eastern Strand</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="odd">
<td><p>2374</p></td>
<td><p>Nethander Stead</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="even">
<td><p>2375</p></td>
<td><p>Darrow Hill</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="odd">
<td><p>2376</p></td>
<td><p>Southpoint Tower</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="even">
<td><p>2377</p></td>
<td><p>Thoradin's Wall</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="odd">
<td><p>2378</p></td>
<td><p>Western Strand</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="even">
<td><p>2379</p></td>
<td><p>Azurelode Mine</p></td>
<td><p>560</p></td>
<td><p>2367</p></td>
</tr>
<tr class="odd">
<td><p>2397</p></td>
<td><p>The Great Sea</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="even">
<td><p>2398</p></td>
<td><p>The Great Sea</p></td>
<td><p>0</p></td>
<td><p>130</p></td>
</tr>
<tr class="odd">
<td><p>2399</p></td>
<td><p>The Great Sea</p></td>
<td><p>0</p></td>
<td><p>85</p></td>
</tr>
<tr class="even">
<td><p>2400</p></td>
<td><p>The Forbidding Sea</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>2401</p></td>
<td><p>The Forbidding Sea</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
</tr>
<tr class="even">
<td><p>2402</p></td>
<td><p>The Forbidding Sea</p></td>
<td><p>0</p></td>
<td><p>11</p></td>
</tr>
<tr class="odd">
<td><p>2403</p></td>
<td><p>The Forbidding Sea</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
</tr>
<tr class="even">
<td><p>2404</p></td>
<td><p>Tethris Aran</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>2405</p></td>
<td><p>Ethel Rethor</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="even">
<td><p>2406</p></td>
<td><p>Ranazjar Isle</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>2407</p></td>
<td><p>Kormek's Hut</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="even">
<td><p>2408</p></td>
<td><p>Shadowprey Village</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>2417</p></td>
<td><p>Blackrock Pass</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="even">
<td><p>2418</p></td>
<td><p>Morgan's Vigil</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="odd">
<td><p>2419</p></td>
<td><p>Slither Rock</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="even">
<td><p>2420</p></td>
<td><p>Terror Wing Path</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="odd">
<td><p>2421</p></td>
<td><p>Draco'dar</p></td>
<td><p>0</p></td>
<td><p>46</p></td>
</tr>
<tr class="even">
<td><p>2437</p></td>
<td><p>Ragefire Chasm</p></td>
<td><p>389</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>2457</p></td>
<td><p>Nightsong Woods</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>2477</p></td>
<td><p>The Veiled Sea</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>2478</p></td>
<td><p>Morlos'Aran</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>2479</p></td>
<td><p>Emerald Sanctuary</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="odd">
<td><p>2480</p></td>
<td><p>Jadefire Glen</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>2481</p></td>
<td><p>Ruins of Constellas</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="odd">
<td><p>2497</p></td>
<td><p>Bitter Reaches</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>2517</p></td>
<td><p>Rise of the Defiler</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
</tr>
<tr class="odd">
<td><p>2518</p></td>
<td><p>Lariss Pavilion</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>2519</p></td>
<td><p>Woodpaw Hills</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>2520</p></td>
<td><p>Woodpaw Den</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>2521</p></td>
<td><p>Verdantis River</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>2522</p></td>
<td><p>Ruins of Isildien</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="even">
<td><p>2537</p></td>
<td><p>Grimtotem Post</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>2538</p></td>
<td><p>Camp Aparaje</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="even">
<td><p>2539</p></td>
<td><p>Malaka'jin</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>2540</p></td>
<td><p>Boulderslide Ravine</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="even">
<td><p>2541</p></td>
<td><p>Sishir Canyon</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="odd">
<td><p>2557</p></td>
<td><p>Dire Maul</p></td>
<td><p>429</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2558</p></td>
<td><p>Deadwind Ravine</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="odd">
<td><p>2559</p></td>
<td><p>Diamondhead River</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="even">
<td><p>2560</p></td>
<td><p>Ariden's Camp</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="odd">
<td><p>2561</p></td>
<td><p>The Vice</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="even">
<td><p>2562</p></td>
<td><p>Karazhan</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="odd">
<td><p>2563</p></td>
<td><p>Morgan's Plot</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="even">
<td><p>2577</p></td>
<td><p>Dire Maul</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>2597</p></td>
<td><p>Alterac Valley</p></td>
<td><p>30</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2617</p></td>
<td><p>Scrabblescrew's Camp</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>2618</p></td>
<td><p>Jadefire Run</p></td>
<td><p>1</p></td>
<td><p>361</p></td>
</tr>
<tr class="even">
<td><p>2619</p></td>
<td><p>Thondroril River</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2620</p></td>
<td><p>Thondroril River</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="even">
<td><p>2621</p></td>
<td><p>Lake Mereldar</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2622</p></td>
<td><p>Pestilent Scar</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2623</p></td>
<td><p>The Infectis Scar</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2624</p></td>
<td><p>Blackwood Lake</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2625</p></td>
<td><p>Eastwall Gate</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2626</p></td>
<td><p>Terrorweb Tunnel</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>2627</p></td>
<td><p>Terrordale</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>2637</p></td>
<td><p>Kargathia Keep</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>2657</p></td>
<td><p>Valley of Bones</p></td>
<td><p>1</p></td>
<td><p>405</p></td>
</tr>
<tr class="odd">
<td><p>2677</p></td>
<td><p>Blackwing Lair</p></td>
<td><p>469</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2697</p></td>
<td><p>Deadman's Crossing</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="odd">
<td><p>2717</p></td>
<td><p>Molten Core</p></td>
<td><p>409</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2737</p></td>
<td><p>The Scarab Wall</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>2738</p></td>
<td><p>Southwind Village</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>2739</p></td>
<td><p>Twilight Base Camp</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>2740</p></td>
<td><p>The Crystal Vale</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>2741</p></td>
<td><p>The Scarab Dais</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>2742</p></td>
<td><p>Hive'Ashi</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>2743</p></td>
<td><p>Hive'Zora</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>2744</p></td>
<td><p>Hive'Regal</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>2757</p></td>
<td><p>Shrine of the Fallen Warrior</p></td>
<td><p>1</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>2777</p></td>
<td><p>UNUSED Alterac Valley</p></td>
<td><p>0</p></td>
<td><p>267</p></td>
</tr>
<tr class="even">
<td><p>2797</p></td>
<td><p>Blackfathom Deeps</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>2817</p></td>
<td><p>Crystalsong Forest</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2837</p></td>
<td><p>The Master's Cellar</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="odd">
<td><p>2838</p></td>
<td><p>Stonewrought Pass</p></td>
<td><p>0</p></td>
<td><p>51</p></td>
</tr>
<tr class="even">
<td><p>2839</p></td>
<td><p>Alterac Valley</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>2857</p></td>
<td><p>The Rumble Cage</p></td>
<td><p>1</p></td>
<td><p>440</p></td>
</tr>
<tr class="even">
<td><p>2877</p></td>
<td><p>Chunk Test</p></td>
<td><p>451</p></td>
<td><p>22</p></td>
</tr>
<tr class="odd">
<td><p>2897</p></td>
<td><p>Zoram'gar Outpost</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="even">
<td><p>2917</p></td>
<td><p>Hall of Legends</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>2918</p></td>
<td><p>Champions' Hall</p></td>
<td><p>449</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>2937</p></td>
<td><p>Grosh'gok Compound</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="odd">
<td><p>2938</p></td>
<td><p>Sleeping Gorge</p></td>
<td><p>0</p></td>
<td><p>41</p></td>
</tr>
<tr class="even">
<td><p>2957</p></td>
<td><p>Irondeep Mine</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>2958</p></td>
<td><p>Stonehearth Outpost</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>2959</p></td>
<td><p>Dun Baldar</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>2960</p></td>
<td><p>Icewing Pass</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>2961</p></td>
<td><p>Frostwolf Village</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>2962</p></td>
<td><p>Tower Point</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>2963</p></td>
<td><p>Coldtooth Mine</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>2964</p></td>
<td><p>Winterax Hold</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>2977</p></td>
<td><p>Iceblood Garrison</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>2978</p></td>
<td><p>Frostwolf Keep</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>2979</p></td>
<td><p>Tor'kren Farm</p></td>
<td><p>1</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>3017</p></td>
<td><p>Frost Dagger Pass</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>3037</p></td>
<td><p>Ironstone Camp</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>3038</p></td>
<td><p>Weazel's Crater</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="even">
<td><p>3039</p></td>
<td><p>Tahonda Ruins</p></td>
<td><p>1</p></td>
<td><p>400</p></td>
</tr>
<tr class="odd">
<td><p>3057</p></td>
<td><p>Field of Strife</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>3058</p></td>
<td><p>Icewing Cavern</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>3077</p></td>
<td><p>Valor's Rest</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>3097</p></td>
<td><p>The Swarming Pillar</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>3098</p></td>
<td><p>Twilight Post</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>3099</p></td>
<td><p>Twilight Outpost</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>3100</p></td>
<td><p>Ravaged Twilight Camp</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>3117</p></td>
<td><p>Shalzaru's Lair</p></td>
<td><p>1</p></td>
<td><p>357</p></td>
</tr>
<tr class="odd">
<td><p>3137</p></td>
<td><p>Talrendis Point</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>3138</p></td>
<td><p>Rethress Sanctum</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>3139</p></td>
<td><p>Moon Horror Den</p></td>
<td><p>1</p></td>
<td><p>618</p></td>
</tr>
<tr class="even">
<td><p>3140</p></td>
<td><p>Scalebeard's Cave</p></td>
<td><p>1</p></td>
<td><p>16</p></td>
</tr>
<tr class="odd">
<td><p>3157</p></td>
<td><p>Boulderslide Cavern</p></td>
<td><p>1</p></td>
<td><p>406</p></td>
</tr>
<tr class="even">
<td><p>3177</p></td>
<td><p>Warsong Labor Camp</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>3197</p></td>
<td><p>Chillwind Camp</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
</tr>
<tr class="even">
<td><p>3217</p></td>
<td><p>The Maul</p></td>
<td><p>429</p></td>
<td><p>2557</p></td>
</tr>
<tr class="odd">
<td><p>3237</p></td>
<td><p>The Maul UNUSED</p></td>
<td><p>429</p></td>
<td><p>2557</p></td>
</tr>
<tr class="even">
<td><p>3257</p></td>
<td><p>Bones of Grakkarond</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>3277</p></td>
<td><p>Warsong Gulch</p></td>
<td><p>489</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3297</p></td>
<td><p>Frostwolf Graveyard</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>3298</p></td>
<td><p>Frostwolf Pass</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>3299</p></td>
<td><p>Dun Baldar Pass</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>3300</p></td>
<td><p>Iceblood Graveyard</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>3301</p></td>
<td><p>Snowfall Graveyard</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>3302</p></td>
<td><p>Stonehearth Graveyard</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>3303</p></td>
<td><p>Stormpike Graveyard</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>3304</p></td>
<td><p>Icewing Bunker</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>3305</p></td>
<td><p>Stonehearth Bunker</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>3306</p></td>
<td><p>Wildpaw Ridge</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>3317</p></td>
<td><p>Revantusk Village</p></td>
<td><p>0</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>3318</p></td>
<td><p>Rock of Durotan</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>3319</p></td>
<td><p>Silverwing Grove</p></td>
<td><p>1</p></td>
<td><p>331</p></td>
</tr>
<tr class="odd">
<td><p>3320</p></td>
<td><p>Warsong Lumber Mill</p></td>
<td><p>489</p></td>
<td><p>3277</p></td>
</tr>
<tr class="even">
<td><p>3321</p></td>
<td><p>Silverwing Hold</p></td>
<td><p>489</p></td>
<td><p>3277</p></td>
</tr>
<tr class="odd">
<td><p>3337</p></td>
<td><p>Wildpaw Cavern</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>3338</p></td>
<td><p>The Veiled Cleft</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>3357</p></td>
<td><p>Yojamba Isle</p></td>
<td><p>0</p></td>
<td><p>33</p></td>
</tr>
<tr class="even">
<td><p>3358</p></td>
<td><p>Arathi Basin</p></td>
<td><p>529</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3377</p></td>
<td><p>The Coil</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="even">
<td><p>3378</p></td>
<td><p>Altar of Hir'eek</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="odd">
<td><p>3379</p></td>
<td><p>Shadra'zaar</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="even">
<td><p>3380</p></td>
<td><p>Hakkari Grounds</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="odd">
<td><p>3381</p></td>
<td><p>Naze of Shirvallah</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="even">
<td><p>3382</p></td>
<td><p>Temple of Bethekk</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="odd">
<td><p>3383</p></td>
<td><p>The Bloodfire Pit</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="even">
<td><p>3384</p></td>
<td><p>Altar of the Blood God</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="odd">
<td><p>3397</p></td>
<td><p>Zanza's Rise</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="even">
<td><p>3398</p></td>
<td><p>Edge of Madness</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="odd">
<td><p>3417</p></td>
<td><p>Trollbane Hall</p></td>
<td><p>529</p></td>
<td><p>3358</p></td>
</tr>
<tr class="even">
<td><p>3418</p></td>
<td><p>Defiler's Den</p></td>
<td><p>529</p></td>
<td><p>3358</p></td>
</tr>
<tr class="odd">
<td><p>3419</p></td>
<td><p>Pagle's Pointe</p></td>
<td><p>309</p></td>
<td><p>1977</p></td>
</tr>
<tr class="even">
<td><p>3420</p></td>
<td><p>Farm</p></td>
<td><p>529</p></td>
<td><p>3358</p></td>
</tr>
<tr class="odd">
<td><p>3421</p></td>
<td><p>Blacksmith</p></td>
<td><p>529</p></td>
<td><p>3358</p></td>
</tr>
<tr class="even">
<td><p>3422</p></td>
<td><p>Lumber Mill</p></td>
<td><p>529</p></td>
<td><p>3358</p></td>
</tr>
<tr class="odd">
<td><p>3423</p></td>
<td><p>Gold Mine</p></td>
<td><p>529</p></td>
<td><p>3358</p></td>
</tr>
<tr class="even">
<td><p>3424</p></td>
<td><p>Stables</p></td>
<td><p>529</p></td>
<td><p>3358</p></td>
</tr>
<tr class="odd">
<td><p>3425</p></td>
<td><p>Cenarion Hold</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>3426</p></td>
<td><p>Staghelm Point</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>3427</p></td>
<td><p>Bronzebeard Encampment</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>3428</p></td>
<td><p>Ahn'Qiraj</p></td>
<td><p>531</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3429</p></td>
<td><p>Ruins of Ahn'Qiraj</p></td>
<td><p>509</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3430</p></td>
<td><p>Eversong Woods</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3431</p></td>
<td><p>Sunstrider Isle</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3432</p></td>
<td><p>Shrine of Dath'Remar</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3433</p></td>
<td><p>Ghostlands</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3434</p></td>
<td><p>Scarab Terrace</p></td>
<td><p>531</p></td>
<td><p>3428</p></td>
</tr>
<tr class="odd">
<td><p>3435</p></td>
<td><p>General's Terrace</p></td>
<td><p>531</p></td>
<td><p>3428</p></td>
</tr>
<tr class="even">
<td><p>3436</p></td>
<td><p>The Reservoir</p></td>
<td><p>531</p></td>
<td><p>3428</p></td>
</tr>
<tr class="odd">
<td><p>3437</p></td>
<td><p>The Hatchery</p></td>
<td><p>531</p></td>
<td><p>3428</p></td>
</tr>
<tr class="even">
<td><p>3438</p></td>
<td><p>The Comb</p></td>
<td><p>531</p></td>
<td><p>3428</p></td>
</tr>
<tr class="odd">
<td><p>3439</p></td>
<td><p>Watchers' Terrace</p></td>
<td><p>531</p></td>
<td><p>3428</p></td>
</tr>
<tr class="even">
<td><p>3440</p></td>
<td><p>Scarab Terrace</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="odd">
<td><p>3441</p></td>
<td><p>General's Terrace</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="even">
<td><p>3442</p></td>
<td><p>The Reservoir</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="odd">
<td><p>3443</p></td>
<td><p>The Hatchery</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="even">
<td><p>3444</p></td>
<td><p>The Comb</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="odd">
<td><p>3445</p></td>
<td><p>Watchers' Terrace</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="even">
<td><p>3446</p></td>
<td><p>Twilight's Run</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>3447</p></td>
<td><p>Ortell's Hideout</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="even">
<td><p>3448</p></td>
<td><p>Scarab Terrace</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="odd">
<td><p>3449</p></td>
<td><p>General's Terrace</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="even">
<td><p>3450</p></td>
<td><p>The Reservoir</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="odd">
<td><p>3451</p></td>
<td><p>The Hatchery</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="even">
<td><p>3452</p></td>
<td><p>The Comb</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="odd">
<td><p>3453</p></td>
<td><p>Watchers' Terrace</p></td>
<td><p>509</p></td>
<td><p>3429</p></td>
</tr>
<tr class="even">
<td><p>3454</p></td>
<td><p>Ruins of Ahn'Qiraj</p></td>
<td><p>1</p></td>
<td><p>1377</p></td>
</tr>
<tr class="odd">
<td><p>3455</p></td>
<td><p>The North Sea</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3456</p></td>
<td><p>Naxxramas</p></td>
<td><p>533</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3457</p></td>
<td><p>Karazhan</p></td>
<td><p>532</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3459</p></td>
<td><p>City</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3460</p></td>
<td><p>Golden Strand</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3461</p></td>
<td><p>Sunsail Anchorage</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3462</p></td>
<td><p>Fairbreeze Village</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3463</p></td>
<td><p>Magisters Gate</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3464</p></td>
<td><p>Farstrider Retreat</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3465</p></td>
<td><p>North Sanctum</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3466</p></td>
<td><p>West Sanctum</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3467</p></td>
<td><p>East Sanctum</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3468</p></td>
<td><p>Saltheril's Haven</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3469</p></td>
<td><p>Thuron's Livery</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3470</p></td>
<td><p>Stillwhisper Pond</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3471</p></td>
<td><p>The Living Wood</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3472</p></td>
<td><p>Azurebreeze Coast</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3473</p></td>
<td><p>Lake Elrendar</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3474</p></td>
<td><p>The Scorched Grove</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3475</p></td>
<td><p>Zeb'Watha</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3476</p></td>
<td><p>Tor'Watha</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3477</p></td>
<td><p>Azjol-Nerub</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3478</p></td>
<td><p>Gates of Ahn'Qiraj</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3479</p></td>
<td><p>The Veiled Sea</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3480</p></td>
<td><p>Duskwither Grounds</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3481</p></td>
<td><p>Duskwither Spire</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3482</p></td>
<td><p>The Dead Scar</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3483</p></td>
<td><p>Hellfire Peninsula</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3484</p></td>
<td><p>The Sunspire</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3485</p></td>
<td><p>Falthrien Academy</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3486</p></td>
<td><p>Ravenholdt Manor</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>3487</p></td>
<td><p>Silvermoon City</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3488</p></td>
<td><p>Tranquillien</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3489</p></td>
<td><p>Suncrown Village</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3490</p></td>
<td><p>Goldenmist Village</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3491</p></td>
<td><p>Windrunner Village</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3492</p></td>
<td><p>Windrunner Spire</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3493</p></td>
<td><p>Sanctum of the Sun</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3494</p></td>
<td><p>Sanctum of the Moon</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3495</p></td>
<td><p>Dawnstar Spire</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3496</p></td>
<td><p>Farstrider Enclave</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3497</p></td>
<td><p>An'daroth</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3498</p></td>
<td><p>An'telas</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3499</p></td>
<td><p>An'owyn</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3500</p></td>
<td><p>Deatholme</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3501</p></td>
<td><p>Bleeding Ziggurat</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3502</p></td>
<td><p>Howling Ziggurat</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3503</p></td>
<td><p>Shalandis Isle</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3504</p></td>
<td><p>Toryl Estate</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3505</p></td>
<td><p>Underlight Mines</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3506</p></td>
<td><p>Andilien Estate</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3507</p></td>
<td><p>Hatchet Hills</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3508</p></td>
<td><p>Amani Pass</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3509</p></td>
<td><p>Sungraze Peak</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3510</p></td>
<td><p>Amani Catacombs</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3511</p></td>
<td><p>Tower of the Damned</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3512</p></td>
<td><p>Zeb'Sora</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3513</p></td>
<td><p>Lake Elrendar</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3514</p></td>
<td><p>The Dead Scar</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3515</p></td>
<td><p>Elrendar River</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3516</p></td>
<td><p>Zeb'Tela</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3517</p></td>
<td><p>Zeb'Nowa</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3518</p></td>
<td><p>Nagrand</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3519</p></td>
<td><p>Terokkar Forest</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3520</p></td>
<td><p>Shadowmoon Valley</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3521</p></td>
<td><p>Zangarmarsh</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3522</p></td>
<td><p>Blade's Edge Mountains</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3523</p></td>
<td><p>Netherstorm</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3524</p></td>
<td><p>Azuremyst Isle</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3525</p></td>
<td><p>Bloodmyst Isle</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3526</p></td>
<td><p>Ammen Vale</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3527</p></td>
<td><p>Crash Site</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3528</p></td>
<td><p>Silverline Lake</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3529</p></td>
<td><p>Nestlewood Thicket</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3530</p></td>
<td><p>Shadow Ridge</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3531</p></td>
<td><p>Skulking Row</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3532</p></td>
<td><p>Dawning Lane</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3533</p></td>
<td><p>Ruins of Silvermoon</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3534</p></td>
<td><p>Feth's Way</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3535</p></td>
<td><p>Hellfire Citadel</p></td>
<td><p>540</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3536</p></td>
<td><p>Thrallmar</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3537</p></td>
<td><p>Borean Tundra</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3538</p></td>
<td><p>Honor Hold</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3539</p></td>
<td><p>The Stair of Destiny</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3540</p></td>
<td><p>Twisting Nether</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3541</p></td>
<td><p>Forge Camp: Mageddon</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3542</p></td>
<td><p>The Path of Glory</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3543</p></td>
<td><p>The Great Fissure</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3544</p></td>
<td><p>Plain of Shards</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3545</p></td>
<td><p>Hellfire Citadel</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3546</p></td>
<td><p>Expedition Armory</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3547</p></td>
<td><p>Throne of Kil'jaeden</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3548</p></td>
<td><p>Forge Camp: Rage</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3549</p></td>
<td><p>Invasion Point: Annihilator</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3550</p></td>
<td><p>Borune Ruins</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3551</p></td>
<td><p>Ruins of Sha'naar</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3552</p></td>
<td><p>Temple of Telhamat</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3553</p></td>
<td><p>Pools of Aggonar</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3554</p></td>
<td><p>Falcon Watch</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3555</p></td>
<td><p>Mag'har Post</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3556</p></td>
<td><p>Den of Haal'esh</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3557</p></td>
<td><p>The Exodar</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3558</p></td>
<td><p>Elrendar Falls</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3559</p></td>
<td><p>Nestlewood Hills</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3560</p></td>
<td><p>Ammen Fields</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3561</p></td>
<td><p>The Sacred Grove</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3562</p></td>
<td><p>Hellfire Ramparts</p></td>
<td><p>543</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3563</p></td>
<td><p>Hellfire Citadel</p></td>
<td><p>543</p></td>
<td><p>3562</p></td>
</tr>
<tr class="odd">
<td><p>3564</p></td>
<td><p>Emberglade</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3565</p></td>
<td><p>Cenarion Refuge</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3566</p></td>
<td><p>Moonwing Den</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3567</p></td>
<td><p>Pod Cluster</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3568</p></td>
<td><p>Pod Wreckage</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3569</p></td>
<td><p>Tides' Hollow</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3570</p></td>
<td><p>Wrathscale Point</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3571</p></td>
<td><p>Bristlelimb Village</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3572</p></td>
<td><p>Stillpine Hold</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3573</p></td>
<td><p>Odesyus' Landing</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3574</p></td>
<td><p>Valaar's Berth</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3575</p></td>
<td><p>Silting Shore</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3576</p></td>
<td><p>Azure Watch</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3577</p></td>
<td><p>Geezle's Camp</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3578</p></td>
<td><p>Menagerie Wreckage</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3579</p></td>
<td><p>Traitor's Cove</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3580</p></td>
<td><p>Wildwind Peak</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3581</p></td>
<td><p>Wildwind Path</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3582</p></td>
<td><p>Zeth'Gor</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3583</p></td>
<td><p>Beryl Coast</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3584</p></td>
<td><p>Blood Watch</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3585</p></td>
<td><p>Bladewood</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3586</p></td>
<td><p>The Vector Coil</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3587</p></td>
<td><p>The Warp Piston</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3588</p></td>
<td><p>The Cryo-Core</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3589</p></td>
<td><p>The Crimson Reach</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3590</p></td>
<td><p>Wrathscale Lair</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3591</p></td>
<td><p>Ruins of Loreth'Aran</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3592</p></td>
<td><p>Nazzivian</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3593</p></td>
<td><p>Axxarien</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3594</p></td>
<td><p>Blacksilt Shore</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3595</p></td>
<td><p>The Foul Pool</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3596</p></td>
<td><p>The Hidden Reef</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3597</p></td>
<td><p>Amberweb Pass</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3598</p></td>
<td><p>Wyrmscar Island</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3599</p></td>
<td><p>Talon Stand</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3600</p></td>
<td><p>Bristlelimb Enclave</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3601</p></td>
<td><p>Ragefeather Ridge</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3602</p></td>
<td><p>Kessel's Crossing</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3603</p></td>
<td><p>Tel'athion's Camp</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3604</p></td>
<td><p>The Bloodcursed Reef</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3605</p></td>
<td><p>Hyjal Past</p></td>
<td><p>560</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3606</p></td>
<td><p>Hyjal Summit</p></td>
<td><p>534</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3607</p></td>
<td><p>Serpentshrine Cavern</p></td>
<td><p>548</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3608</p></td>
<td><p>Vindicator's Rest</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3609</p></td>
<td><p>Unused3</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3610</p></td>
<td><p>Burning Blade Ruins</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3611</p></td>
<td><p>Clan Watch</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3612</p></td>
<td><p>Bloodcurse Isle</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3613</p></td>
<td><p>Garadar</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3614</p></td>
<td><p>Skysong Lake</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3615</p></td>
<td><p>Throne of the Elements</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3616</p></td>
<td><p>Laughing Skull Ruins</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3617</p></td>
<td><p>Warmaul Hill</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3618</p></td>
<td><p>Gruul's Lair</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3619</p></td>
<td><p>Auren Ridge</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3620</p></td>
<td><p>Auren Falls</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3621</p></td>
<td><p>Lake Sunspring</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3622</p></td>
<td><p>Sunspring Post</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3623</p></td>
<td><p>Aeris Landing</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3624</p></td>
<td><p>Forge Camp: Fear</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3625</p></td>
<td><p>Forge Camp: Hate</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3626</p></td>
<td><p>Telaar</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3627</p></td>
<td><p>Northwind Cleft</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3628</p></td>
<td><p>Halaa</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3629</p></td>
<td><p>Southwind Cleft</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3630</p></td>
<td><p>Oshu'gun</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3631</p></td>
<td><p>Spirit Fields</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3632</p></td>
<td><p>Shamanar</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3633</p></td>
<td><p>Ancestral Grounds</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3634</p></td>
<td><p>Windyreed Village</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3635</p></td>
<td><p>Unused2</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3636</p></td>
<td><p>Elemental Plateau</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3637</p></td>
<td><p>Kil'sorrow Fortress</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3638</p></td>
<td><p>The Ring of Trials</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3639</p></td>
<td><p>Silvermyst Isle</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3640</p></td>
<td><p>Daggerfen Village</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3641</p></td>
<td><p>Umbrafen Village</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3642</p></td>
<td><p>Feralfen Village</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3643</p></td>
<td><p>Bloodscale Enclave</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3644</p></td>
<td><p>Telredor</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3645</p></td>
<td><p>Zabra'jin</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3646</p></td>
<td><p>Quagg Ridge</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3647</p></td>
<td><p>The Spawning Glen</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3648</p></td>
<td><p>The Dead Mire</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3649</p></td>
<td><p>Sporeggar</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3650</p></td>
<td><p>Ango'rosh Grounds</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3651</p></td>
<td><p>Ango'rosh Stronghold</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3652</p></td>
<td><p>Funggor Cavern</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3653</p></td>
<td><p>Serpent Lake</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3654</p></td>
<td><p>The Drain</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3655</p></td>
<td><p>Umbrafen Lake</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3656</p></td>
<td><p>Marshlight Lake</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3657</p></td>
<td><p>Portal Clearing</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3658</p></td>
<td><p>Sporewind Lake</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3659</p></td>
<td><p>The Lagoon</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3660</p></td>
<td><p>Blades' Run</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3661</p></td>
<td><p>Blade Tooth Canyon</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3662</p></td>
<td><p>Commons Hall</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3663</p></td>
<td><p>Derelict Manor</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3664</p></td>
<td><p>Huntress of the Sun</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3665</p></td>
<td><p>Falconwing Square</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3666</p></td>
<td><p>Halaani Basin</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3667</p></td>
<td><p>Hewn Bog</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3668</p></td>
<td><p>Boha'mu Ruins</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3669</p></td>
<td><p>The Stadium</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3670</p></td>
<td><p>The Overlook</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3671</p></td>
<td><p>Broken Hill</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3672</p></td>
<td><p>Mag'hari Procession</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3673</p></td>
<td><p>Nesingwary Safari</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3674</p></td>
<td><p>Cenarion Thicket</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3675</p></td>
<td><p>Tuurem</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3676</p></td>
<td><p>Veil Shienor</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3677</p></td>
<td><p>Veil Skith</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3678</p></td>
<td><p>Veil Shalas</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3679</p></td>
<td><p>Skettis</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3680</p></td>
<td><p>Blackwind Valley</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3681</p></td>
<td><p>Firewing Point</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3682</p></td>
<td><p>Grangol'var Village</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3683</p></td>
<td><p>Stonebreaker Hold</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3684</p></td>
<td><p>Allerian Stronghold</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3685</p></td>
<td><p>Bonechewer Ruins</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3686</p></td>
<td><p>Veil Lithic</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3687</p></td>
<td><p>Olembas</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3688</p></td>
<td><p>Auchindoun</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3689</p></td>
<td><p>Veil Reskk</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3690</p></td>
<td><p>Blackwind Lake</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3691</p></td>
<td><p>Lake Ere'Noru</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3692</p></td>
<td><p>Lake Jorune</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3693</p></td>
<td><p>Skethyl Mountains</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3694</p></td>
<td><p>Misty Ridge</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3695</p></td>
<td><p>The Broken Hills</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3696</p></td>
<td><p>The Barrier Hills</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3697</p></td>
<td><p>The Bone Wastes</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3698</p></td>
<td><p>Nagrand Arena</p></td>
<td><p>559</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3699</p></td>
<td><p>Laughing Skull Courtyard</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3700</p></td>
<td><p>The Ring of Blood</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3701</p></td>
<td><p>Arena Floor</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3702</p></td>
<td><p>Blade's Edge Arena</p></td>
<td><p>562</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3703</p></td>
<td><p>Shattrath City</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3704</p></td>
<td><p>The Shepherd's Gate</p></td>
<td><p>530</p></td>
<td><p>3487</p></td>
</tr>
<tr class="even">
<td><p>3705</p></td>
<td><p>Telaari Basin</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3706</p></td>
<td><p>The Dark Portal</p></td>
<td><p>269</p></td>
<td><p>2366</p></td>
</tr>
<tr class="even">
<td><p>3707</p></td>
<td><p>Alliance Base</p></td>
<td><p>534</p></td>
<td><p>3606</p></td>
</tr>
<tr class="odd">
<td><p>3708</p></td>
<td><p>Horde Encampment</p></td>
<td><p>534</p></td>
<td><p>3606</p></td>
</tr>
<tr class="even">
<td><p>3709</p></td>
<td><p>Night Elf Village</p></td>
<td><p>534</p></td>
<td><p>3606</p></td>
</tr>
<tr class="odd">
<td><p>3710</p></td>
<td><p>Nordrassil</p></td>
<td><p>534</p></td>
<td><p>3606</p></td>
</tr>
<tr class="even">
<td><p>3711</p></td>
<td><p>Sholazar Basin</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3712</p></td>
<td><p>Area 52</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3713</p></td>
<td><p>The Blood Furnace</p></td>
<td><p>542</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3714</p></td>
<td><p>The Shattered Halls</p></td>
<td><p>540</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3715</p></td>
<td><p>The Steamvault</p></td>
<td><p>545</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3716</p></td>
<td><p>The Underbog</p></td>
<td><p>546</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3717</p></td>
<td><p>The Slave Pens</p></td>
<td><p>547</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3718</p></td>
<td><p>Swamprat Post</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3719</p></td>
<td><p>Bleeding Hollow Ruins</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3720</p></td>
<td><p>Twin Spire Ruins</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3721</p></td>
<td><p>The Crumbling Waste</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3722</p></td>
<td><p>Manaforge Ara</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3723</p></td>
<td><p>Arklon Ruins</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3724</p></td>
<td><p>Cosmowrench</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3725</p></td>
<td><p>Ruins of Enkaat</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3726</p></td>
<td><p>Manaforge B'naar</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3727</p></td>
<td><p>The Scrap Field</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3728</p></td>
<td><p>The Vortex Fields</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3729</p></td>
<td><p>The Heap</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3730</p></td>
<td><p>Manaforge Coruu</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3731</p></td>
<td><p>The Tempest Rift</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3732</p></td>
<td><p>Kirin'Var Village</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3733</p></td>
<td><p>The Violet Tower</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3734</p></td>
<td><p>Manaforge Duro</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3735</p></td>
<td><p>Voidwind Plateau</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3736</p></td>
<td><p>Manaforge Ultris</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3737</p></td>
<td><p>Celestial Ridge</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3738</p></td>
<td><p>The Stormspire</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3739</p></td>
<td><p>Forge Base: Oblivion</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3740</p></td>
<td><p>Forge Base: Gehenna</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3741</p></td>
<td><p>Ruins of Farahlon</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3742</p></td>
<td><p>Socrethar's Seat</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3743</p></td>
<td><p>Legion Hold</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3744</p></td>
<td><p>Shadowmoon Village</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3745</p></td>
<td><p>Wildhammer Stronghold</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3746</p></td>
<td><p>The Hand of Gul'dan</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3747</p></td>
<td><p>The Fel Pits</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3748</p></td>
<td><p>The Deathforge</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3749</p></td>
<td><p>Coilskar Cistern</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3750</p></td>
<td><p>Coilskar Point</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3751</p></td>
<td><p>Sunfire Point</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3752</p></td>
<td><p>Illidari Point</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3753</p></td>
<td><p>Ruins of Baa'ri</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3754</p></td>
<td><p>Altar of Sha'tar</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3755</p></td>
<td><p>The Stair of Doom</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3756</p></td>
<td><p>Ruins of Karabor</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3757</p></td>
<td><p>Ata'mal Terrace</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3758</p></td>
<td><p>Netherwing Fields</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3759</p></td>
<td><p>Netherwing Ledge</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3760</p></td>
<td><p>The Barrier Hills</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3761</p></td>
<td><p>The High Path</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3762</p></td>
<td><p>Windyreed Pass</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3763</p></td>
<td><p>Zangar Ridge</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3764</p></td>
<td><p>The Twilight Ridge</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3765</p></td>
<td><p>Razorthorn Trail</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3766</p></td>
<td><p>Orebor Harborage</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3767</p></td>
<td><p>Blades' Run</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3768</p></td>
<td><p>Jagged Ridge</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3769</p></td>
<td><p>Thunderlord Stronghold</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3770</p></td>
<td><p>Blade Tooth Canyon</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3771</p></td>
<td><p>The Living Grove</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3772</p></td>
<td><p>Sylvanaar</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3773</p></td>
<td><p>Bladespire Hold</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3774</p></td>
<td><p>Gruul's Lair</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3775</p></td>
<td><p>Circle of Blood</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3776</p></td>
<td><p>Bloodmaul Outpost</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3777</p></td>
<td><p>Bloodmaul Camp</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3778</p></td>
<td><p>Draenethyst Mine</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3779</p></td>
<td><p>Trogma's Claim</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3780</p></td>
<td><p>Blackwing Coven</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3781</p></td>
<td><p>Grishnath</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3782</p></td>
<td><p>Veil Lashh</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3783</p></td>
<td><p>Veil Vekh</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3784</p></td>
<td><p>Forge Camp: Terror</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3785</p></td>
<td><p>Forge Camp: Wrath</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3786</p></td>
<td><p>Ogri'la</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3787</p></td>
<td><p>Forge Camp: Anger</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3788</p></td>
<td><p>The Low Path</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="even">
<td><p>3789</p></td>
<td><p>Shadow Labyrinth</p></td>
<td><p>555</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3790</p></td>
<td><p>Auchenai Crypts</p></td>
<td><p>558</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3791</p></td>
<td><p>Sethekk Halls</p></td>
<td><p>556</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3792</p></td>
<td><p>Mana-Tombs</p></td>
<td><p>557</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3793</p></td>
<td><p>Felspark Ravine</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3794</p></td>
<td><p>Valley of Bones</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3795</p></td>
<td><p>Sha'naari Wastes</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3796</p></td>
<td><p>The Warp Fields</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3797</p></td>
<td><p>Fallen Sky Ridge</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3798</p></td>
<td><p>Haal'eshi Gorge</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3799</p></td>
<td><p>Stonewall Canyon</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3800</p></td>
<td><p>Thornfang Hill</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3801</p></td>
<td><p>Mag'har Grounds</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3802</p></td>
<td><p>Void Ridge</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3803</p></td>
<td><p>The Abyssal Shelf</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3804</p></td>
<td><p>The Legion Front</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3805</p></td>
<td><p>Zul'Aman</p></td>
<td><p>568</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3806</p></td>
<td><p>Supply Caravan</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3807</p></td>
<td><p>Reaver's Fall</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3808</p></td>
<td><p>Cenarion Post</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3809</p></td>
<td><p>Southern Rampart</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3810</p></td>
<td><p>Northern Rampart</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3811</p></td>
<td><p>Gor'gaz Outpost</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3812</p></td>
<td><p>Spinebreaker Post</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3813</p></td>
<td><p>The Path of Anguish</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3814</p></td>
<td><p>East Supply Caravan</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3815</p></td>
<td><p>Expedition Point</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3816</p></td>
<td><p>Zeppelin Crash</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3817</p></td>
<td><p>Testing</p></td>
<td><p>13</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3818</p></td>
<td><p>Bloodscale Grounds</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="even">
<td><p>3819</p></td>
<td><p>Darkcrest Enclave</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3820</p></td>
<td><p>Eye of the Storm</p></td>
<td><p>566</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3821</p></td>
<td><p>Warden's Cage</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3822</p></td>
<td><p>Eclipse Point</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3823</p></td>
<td><p>Isle of Tribulations</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3824</p></td>
<td><p>Bloodmaul Ravine</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3825</p></td>
<td><p>Dragons' End</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3826</p></td>
<td><p>Daggermaw Canyon</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3827</p></td>
<td><p>Vekhaar Stand</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3828</p></td>
<td><p>Ruuan Weald</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3829</p></td>
<td><p>Veil Ruuan</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3830</p></td>
<td><p>Raven's Wood</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3831</p></td>
<td><p>Death's Door</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3832</p></td>
<td><p>Vortex Pinnacle</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3833</p></td>
<td><p>Razor Ridge</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3834</p></td>
<td><p>Ridge of Madness</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3835</p></td>
<td><p>Dustquill Ravine</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3836</p></td>
<td><p>Magtheridon's Lair</p></td>
<td><p>544</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3837</p></td>
<td><p>Sunfury Hold</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3838</p></td>
<td><p>Spinebreaker Mountains</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3839</p></td>
<td><p>Abandoned Armory</p></td>
<td><p>530</p></td>
<td><p>3518</p></td>
</tr>
<tr class="odd">
<td><p>3840</p></td>
<td><p>The Black Temple</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3841</p></td>
<td><p>Darkcrest Shore</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3842</p></td>
<td><p>Tempest Keep</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3844</p></td>
<td><p>Mok'Nathal Village</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3845</p></td>
<td><p>Tempest Keep</p></td>
<td><p>550</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3846</p></td>
<td><p>The Arcatraz</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3847</p></td>
<td><p>The Botanica</p></td>
<td><p>553</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3848</p></td>
<td><p>The Arcatraz</p></td>
<td><p>552</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3849</p></td>
<td><p>The Mechanar</p></td>
<td><p>554</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3850</p></td>
<td><p>Netherstone</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3851</p></td>
<td><p>Midrealm Post</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3852</p></td>
<td><p>Tuluman's Landing</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3854</p></td>
<td><p>Protectorate Watch Post</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3855</p></td>
<td><p>Circle of Blood Arena</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3856</p></td>
<td><p>Elrendar Crossing</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="even">
<td><p>3857</p></td>
<td><p>Ammen Ford</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3858</p></td>
<td><p>Razorthorn Shelf</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3859</p></td>
<td><p>Silmyr Lake</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3860</p></td>
<td><p>Raastok Glade</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3861</p></td>
<td><p>Thalassian Pass</p></td>
<td><p>530</p></td>
<td><p>3433</p></td>
</tr>
<tr class="odd">
<td><p>3862</p></td>
<td><p>Churning Gulch</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3863</p></td>
<td><p>Broken Wilds</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3864</p></td>
<td><p>Bash'ir Landing</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3865</p></td>
<td><p>Crystal Spine</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3866</p></td>
<td><p>Skald</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3867</p></td>
<td><p>Bladed Gulch</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3868</p></td>
<td><p>Gyro-Plank Bridge</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3869</p></td>
<td><p>Mage Tower</p></td>
<td><p>566</p></td>
<td><p>3820</p></td>
</tr>
<tr class="odd">
<td><p>3870</p></td>
<td><p>Blood Elf Tower</p></td>
<td><p>566</p></td>
<td><p>3820</p></td>
</tr>
<tr class="even">
<td><p>3871</p></td>
<td><p>Draenei Ruins</p></td>
<td><p>566</p></td>
<td><p>3820</p></td>
</tr>
<tr class="odd">
<td><p>3872</p></td>
<td><p>Fel Reaver Ruins</p></td>
<td><p>566</p></td>
<td><p>3820</p></td>
</tr>
<tr class="even">
<td><p>3873</p></td>
<td><p>The Proving Grounds</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3874</p></td>
<td><p>Eco-Dome Farfield</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3875</p></td>
<td><p>Eco-Dome Skyperch</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3876</p></td>
<td><p>Eco-Dome Sutheron</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3877</p></td>
<td><p>Eco-Dome Midrealm</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3878</p></td>
<td><p>Ethereum Staging Grounds</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3879</p></td>
<td><p>Chapel Yard</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3880</p></td>
<td><p>Access Shaft Zeon</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3881</p></td>
<td><p>Trelleum Mine</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3882</p></td>
<td><p>Invasion Point: Destroyer</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3883</p></td>
<td><p>Camp of Boom</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3884</p></td>
<td><p>Spinebreaker Pass</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3885</p></td>
<td><p>Netherweb Ridge</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3886</p></td>
<td><p>Derelict Caravan</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3887</p></td>
<td><p>Refugee Caravan</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3888</p></td>
<td><p>Shadow Tomb</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3889</p></td>
<td><p>Veil Rhaze</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3890</p></td>
<td><p>Tomb of Lights</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3891</p></td>
<td><p>Carrion Hill</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3892</p></td>
<td><p>Writhing Mound</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3893</p></td>
<td><p>Ring of Observance</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3894</p></td>
<td><p>Auchenai Grounds</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3895</p></td>
<td><p>Cenarion Watchpost</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3896</p></td>
<td><p>Aldor Rise</p></td>
<td><p>530</p></td>
<td><p>3703</p></td>
</tr>
<tr class="even">
<td><p>3897</p></td>
<td><p>Terrace of Light</p></td>
<td><p>530</p></td>
<td><p>3703</p></td>
</tr>
<tr class="odd">
<td><p>3898</p></td>
<td><p>Scryer's Tier</p></td>
<td><p>530</p></td>
<td><p>3703</p></td>
</tr>
<tr class="even">
<td><p>3899</p></td>
<td><p>Lower City</p></td>
<td><p>530</p></td>
<td><p>3703</p></td>
</tr>
<tr class="odd">
<td><p>3900</p></td>
<td><p>Invasion Point: Overlord</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3901</p></td>
<td><p>Allerian Post</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3902</p></td>
<td><p>Stonebreaker Camp</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3903</p></td>
<td><p>Boulder'mok</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3904</p></td>
<td><p>Cursed Hollow</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3905</p></td>
<td><p>Coilfang Reservoir</p></td>
<td><p>530</p></td>
<td><p>3521</p></td>
</tr>
<tr class="odd">
<td><p>3906</p></td>
<td><p>The Bloodwash</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3907</p></td>
<td><p>Veridian Point</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3908</p></td>
<td><p>Middenvale</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3909</p></td>
<td><p>The Lost Fold</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="odd">
<td><p>3910</p></td>
<td><p>Mystwood</p></td>
<td><p>530</p></td>
<td><p>3525</p></td>
</tr>
<tr class="even">
<td><p>3911</p></td>
<td><p>Tranquil Shore</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3912</p></td>
<td><p>Goldenbough Pass</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3913</p></td>
<td><p>Runestone Falithas</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="odd">
<td><p>3914</p></td>
<td><p>Runestone Shan'dor</p></td>
<td><p>530</p></td>
<td><p>3430</p></td>
</tr>
<tr class="even">
<td><p>3915</p></td>
<td><p>Fairbridge Strand</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="odd">
<td><p>3916</p></td>
<td><p>Moongraze Woods</p></td>
<td><p>530</p></td>
<td><p>3524</p></td>
</tr>
<tr class="even">
<td><p>3917</p></td>
<td><p>Auchindoun</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3918</p></td>
<td><p>Toshley's Station</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3919</p></td>
<td><p>Singing Ridge</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3920</p></td>
<td><p>Shatter Point</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="even">
<td><p>3921</p></td>
<td><p>Arklonis Ridge</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3922</p></td>
<td><p>Bladespire Outpost</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3923</p></td>
<td><p>Gruul's Lair</p></td>
<td><p>565</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3924</p></td>
<td><p>Northmaul Tower</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3925</p></td>
<td><p>Southmaul Tower</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3926</p></td>
<td><p>Shattered Plains</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3927</p></td>
<td><p>Oronok's Farm</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3928</p></td>
<td><p>The Altar of Damnation</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3929</p></td>
<td><p>The Path of Conquest</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3930</p></td>
<td><p>Eclipsion Fields</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3931</p></td>
<td><p>Bladespire Grounds</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3932</p></td>
<td><p>Sketh'lon Base Camp</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3933</p></td>
<td><p>Sketh'lon Wreckage</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3934</p></td>
<td><p>Town Square</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="even">
<td><p>3935</p></td>
<td><p>Wizard Row</p></td>
<td><p>530</p></td>
<td><p>3523</p></td>
</tr>
<tr class="odd">
<td><p>3936</p></td>
<td><p>Deathforge Tower</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3937</p></td>
<td><p>Slag Watch</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3938</p></td>
<td><p>Sanctum of the Stars</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3939</p></td>
<td><p>Dragonmaw Fortress</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3940</p></td>
<td><p>The Fetid Pool</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3941</p></td>
<td><p>Test</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3942</p></td>
<td><p>Razaan's Landing</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3943</p></td>
<td><p>Invasion Point: Cataclysm</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3944</p></td>
<td><p>The Altar of Shadows</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3945</p></td>
<td><p>Netherwing Pass</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3946</p></td>
<td><p>Wayne's Refuge</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3947</p></td>
<td><p>The Scalding Pools</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3948</p></td>
<td><p>Brian and Pat Test</p></td>
<td><p>451</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3949</p></td>
<td><p>Magma Fields</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3950</p></td>
<td><p>Crimson Watch</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3951</p></td>
<td><p>Evergrove</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3952</p></td>
<td><p>Wyrmskull Bridge</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3953</p></td>
<td><p>Scalewing Shelf</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3954</p></td>
<td><p>Wyrmskull Tunnel</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3955</p></td>
<td><p>Hellfire Basin</p></td>
<td><p>530</p></td>
<td><p>3483</p></td>
</tr>
<tr class="odd">
<td><p>3956</p></td>
<td><p>The Shadow Stair</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3957</p></td>
<td><p>Sha'tari Outpost</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3958</p></td>
<td><p>Sha'tari Base Camp</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3959</p></td>
<td><p>Black Temple</p></td>
<td><p>564</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3960</p></td>
<td><p>Soulgrinder's Barrow</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3961</p></td>
<td><p>Sorrow Wing Point</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3962</p></td>
<td><p>Vim'gol's Circle</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3963</p></td>
<td><p>Dragonspine Ridge</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3964</p></td>
<td><p>Skyguard Outpost</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3965</p></td>
<td><p>Netherwing Mines</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3966</p></td>
<td><p>Dragonmaw Base Camp</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="even">
<td><p>3967</p></td>
<td><p>Dragonmaw Skyway</p></td>
<td><p>530</p></td>
<td><p>3520</p></td>
</tr>
<tr class="odd">
<td><p>3968</p></td>
<td><p>Ruins of Lordaeron</p></td>
<td><p>572</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>3969</p></td>
<td><p>Rivendark's Perch</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3970</p></td>
<td><p>Obsidia's Perch</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3971</p></td>
<td><p>Insidion's Perch</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="odd">
<td><p>3972</p></td>
<td><p>Furywing's Perch</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>3973</p></td>
<td><p>Blackwind Landing</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3974</p></td>
<td><p>Veil Harr'ik</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3975</p></td>
<td><p>Terokk's Rest</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3976</p></td>
<td><p>Veil Ala'rak</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3977</p></td>
<td><p>Upper Veil Shil'ak</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>3978</p></td>
<td><p>Lower Veil Shil'ak</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="even">
<td><p>3979</p></td>
<td><p>The Frozen Sea</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>3980</p></td>
<td><p>Daggercap Bay</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3981</p></td>
<td><p>Valgarde</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>3982</p></td>
<td><p>Wyrmskull Village</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3983</p></td>
<td><p>Utgarde Keep</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>3984</p></td>
<td><p>Nifflevar</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3985</p></td>
<td><p>Falls of Ymiron</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>3986</p></td>
<td><p>Echo Reach</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3987</p></td>
<td><p>The Isle of Spears</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>3988</p></td>
<td><p>Kamagua</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3989</p></td>
<td><p>Garvan's Reef</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>3990</p></td>
<td><p>Scalawag Point</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3991</p></td>
<td><p>New Agamand</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>3992</p></td>
<td><p>The Ancient Lift</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3993</p></td>
<td><p>Westguard Turret</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>3994</p></td>
<td><p>Halgrind</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3995</p></td>
<td><p>The Laughing Stand</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>3996</p></td>
<td><p>Baelgun's Excavation Site</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3997</p></td>
<td><p>Explorers' League Outpost</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>3998</p></td>
<td><p>Westguard Keep</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>3999</p></td>
<td><p>Steel Gate</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4000</p></td>
<td><p>Vengeance Landing</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4001</p></td>
<td><p>Baleheim</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4002</p></td>
<td><p>Skorn</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4003</p></td>
<td><p>Fort Wildervar</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4004</p></td>
<td><p>Vileprey Village</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4005</p></td>
<td><p>Ivald's Ruin</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4006</p></td>
<td><p>Gjalerbron</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4007</p></td>
<td><p>Tomb of the Lost Kings</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4008</p></td>
<td><p>Shartuul's Transporter</p></td>
<td><p>530</p></td>
<td><p>3522</p></td>
</tr>
<tr class="even">
<td><p>4009</p></td>
<td><p>Illidari Training Grounds</p></td>
<td><p>564</p></td>
<td><p>3959</p></td>
</tr>
<tr class="odd">
<td><p>4010</p></td>
<td><p>Mudsprocket</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>4018</p></td>
<td><p>Camp Winterhoof</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4019</p></td>
<td><p>Development Land</p></td>
<td><p>451</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4020</p></td>
<td><p>Mightstone Quarry</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4021</p></td>
<td><p>Bloodspore Plains</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4022</p></td>
<td><p>Gammoth</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4023</p></td>
<td><p>Amber Ledge</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4024</p></td>
<td><p>Coldarra</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4025</p></td>
<td><p>The Westrift</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4026</p></td>
<td><p>The Transitus Stair</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4027</p></td>
<td><p>Coast of Echoes</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4028</p></td>
<td><p>Riplash Strand</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4029</p></td>
<td><p>Riplash Ruins</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4030</p></td>
<td><p>Coast of Idols</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4031</p></td>
<td><p>Pal'ea</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4032</p></td>
<td><p>Valiance Keep</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4033</p></td>
<td><p>Winterfin Village</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4034</p></td>
<td><p>The Borean Wall</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4035</p></td>
<td><p>The Geyser Fields</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4036</p></td>
<td><p>Fizzcrank Pumping Station</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4037</p></td>
<td><p>Taunka'le Village</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4038</p></td>
<td><p>Magnamoth Caverns</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4039</p></td>
<td><p>Coldrock Quarry</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4040</p></td>
<td><p>Njord's Breath Bay</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4041</p></td>
<td><p>Kaskala</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4042</p></td>
<td><p>Transborea</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4043</p></td>
<td><p>The Flood Plains</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4046</p></td>
<td><p>Direhorn Post</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>4047</p></td>
<td><p>Nat's Landing</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>4048</p></td>
<td><p>Ember Clutch</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4049</p></td>
<td><p>Tabetha's Farm</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>4050</p></td>
<td><p>Derelict Strand</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4051</p></td>
<td><p>The Frozen Glade</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4052</p></td>
<td><p>The Vibrant Glade</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4053</p></td>
<td><p>The Twisted Glade</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4054</p></td>
<td><p>Rivenwood</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4055</p></td>
<td><p>Caldemere Lake</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4056</p></td>
<td><p>Utgarde Catacombs</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4057</p></td>
<td><p>Shield Hill</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4058</p></td>
<td><p>Lake Cauldros</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4059</p></td>
<td><p>Cauldros Isle</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4060</p></td>
<td><p>Bleeding Vale</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4061</p></td>
<td><p>Giants' Run</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4062</p></td>
<td><p>Apothecary Camp</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4063</p></td>
<td><p>Ember Spear Tower</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4064</p></td>
<td><p>Shattered Straits</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4065</p></td>
<td><p>Gjalerhorn</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4066</p></td>
<td><p>Frostblade Peak</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4067</p></td>
<td><p>Plaguewood Tower</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>4068</p></td>
<td><p>West Spear Tower</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4069</p></td>
<td><p>North Spear Tower</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4070</p></td>
<td><p>Chillmere Coast</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4071</p></td>
<td><p>Whisper Gulch</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4072</p></td>
<td><p>Sub zone</p></td>
<td><p>451</p></td>
<td><p>151</p></td>
</tr>
<tr class="odd">
<td><p>4073</p></td>
<td><p>Winter's Terrace</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4074</p></td>
<td><p>The Waking Halls</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4075</p></td>
<td><p>Sunwell Plateau</p></td>
<td><p>580</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4076</p></td>
<td><p>Reuse Me 7</p></td>
<td><p>598</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4077</p></td>
<td><p>Sorlof's Strand</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4078</p></td>
<td><p>Razorthorn Rise</p></td>
<td><p>530</p></td>
<td><p>3519</p></td>
</tr>
<tr class="odd">
<td><p>4079</p></td>
<td><p>Frostblade Pass</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4080</p></td>
<td><p>Isle of Quel'Danas</p></td>
<td><p>530</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4081</p></td>
<td><p>The Dawnchaser</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="even">
<td><p>4082</p></td>
<td><p>The Sin'loren</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="odd">
<td><p>4083</p></td>
<td><p>Silvermoon's Pride</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="even">
<td><p>4084</p></td>
<td><p>The Bloodoath</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="odd">
<td><p>4085</p></td>
<td><p>Shattered Sun Staging Area</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="even">
<td><p>4086</p></td>
<td><p>Sun's Reach Sanctum</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="odd">
<td><p>4087</p></td>
<td><p>Sun's Reach Harbor</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="even">
<td><p>4088</p></td>
<td><p>Sun's Reach Armory</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="odd">
<td><p>4089</p></td>
<td><p>Dawnstar Village</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="even">
<td><p>4090</p></td>
<td><p>The Dawning Square</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="odd">
<td><p>4091</p></td>
<td><p>Greengill Coast</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="even">
<td><p>4092</p></td>
<td><p>The Dead Scar</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="odd">
<td><p>4093</p></td>
<td><p>The Sun Forge</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="even">
<td><p>4094</p></td>
<td><p>Sunwell Plateau</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="odd">
<td><p>4095</p></td>
<td><p>Magisters' Terrace</p></td>
<td><p>530</p></td>
<td><p>4080</p></td>
</tr>
<tr class="even">
<td><p>4096</p></td>
<td><p>Clayt?Ân's WoWEdit Land</p></td>
<td><p>451</p></td>
<td><p>4019</p></td>
</tr>
<tr class="odd">
<td><p>4097</p></td>
<td><p>Winterfin Caverns</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4098</p></td>
<td><p>Glimmer Bay</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4099</p></td>
<td><p>Winterfin Retreat</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4100</p></td>
<td><p>The Culling of Stratholme</p></td>
<td><p>595</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4101</p></td>
<td><p>Sands of Nasam</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4102</p></td>
<td><p>Krom's Landing</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4103</p></td>
<td><p>Nasam's Talon</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4104</p></td>
<td><p>Echo Cove</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4105</p></td>
<td><p>Beryl Point</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4106</p></td>
<td><p>Garrosh's Landing</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4107</p></td>
<td><p>Warsong Jetty</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4108</p></td>
<td><p>Fizzcrank Airstrip</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4109</p></td>
<td><p>Lake Kum'uya</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4110</p></td>
<td><p>Farshire Fields</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4111</p></td>
<td><p>Farshire</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4112</p></td>
<td><p>Farshire Lighthouse</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4113</p></td>
<td><p>Unu'pe</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4114</p></td>
<td><p>Death's Stand</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4115</p></td>
<td><p>The Abandoned Reach</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4116</p></td>
<td><p>Scalding Pools</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4117</p></td>
<td><p>Steam Springs</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4118</p></td>
<td><p>Talramas</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4119</p></td>
<td><p>Festering Pools</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4120</p></td>
<td><p>The Nexus</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4121</p></td>
<td><p>Transitus Shield</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4122</p></td>
<td><p>Bor'gorok Outpost</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4123</p></td>
<td><p>Magmoth</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4124</p></td>
<td><p>The Dens of Dying</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4125</p></td>
<td><p>Temple City of En'kilah</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4126</p></td>
<td><p>The Wailing Ziggurat</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4127</p></td>
<td><p>Steeljaw's Caravan</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4128</p></td>
<td><p>Naxxanar</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4129</p></td>
<td><p>Warsong Hold</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4130</p></td>
<td><p>Plains of Nasam</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4131</p></td>
<td><p>Magisters' Terrace</p></td>
<td><p>585</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4132</p></td>
<td><p>Ruins of Eldra'nath</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4133</p></td>
<td><p>Charred Rise</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4134</p></td>
<td><p>Blistering Pool</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4135</p></td>
<td><p>Spire of Blood</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4136</p></td>
<td><p>Spire of Decay</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4137</p></td>
<td><p>Spire of Pain</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4138</p></td>
<td><p>Frozen Reach</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4139</p></td>
<td><p>Parhelion Plaza</p></td>
<td><p>580</p></td>
<td><p>4075</p></td>
</tr>
<tr class="even">
<td><p>4140</p></td>
<td><p>The Dead Scar</p></td>
<td><p>580</p></td>
<td><p>4075</p></td>
</tr>
<tr class="odd">
<td><p>4141</p></td>
<td><p>Torp's Farm</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4142</p></td>
<td><p>Warsong Granary</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4143</p></td>
<td><p>Warsong Slaughterhouse</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4144</p></td>
<td><p>Warsong Farms Outpost</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4145</p></td>
<td><p>West Point Station</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4146</p></td>
<td><p>North Point Station</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4147</p></td>
<td><p>Mid Point Station</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4148</p></td>
<td><p>South Point Station</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4149</p></td>
<td><p>D.E.H.T.A. Encampment</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4150</p></td>
<td><p>Kaw's Roost</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4151</p></td>
<td><p>Westwind Refugee Camp</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4152</p></td>
<td><p>Moa'ki Harbor</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4153</p></td>
<td><p>Indu'le Village</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4154</p></td>
<td><p>Snowfall Glade</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4155</p></td>
<td><p>The Half Shell</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4156</p></td>
<td><p>Surge Needle</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4157</p></td>
<td><p>Moonrest Gardens</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4158</p></td>
<td><p>Stars' Rest</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4159</p></td>
<td><p>Westfall Brigade Encampment</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4160</p></td>
<td><p>Lothalor Woodlands</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4161</p></td>
<td><p>Wyrmrest Temple</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4162</p></td>
<td><p>Icemist Falls</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4163</p></td>
<td><p>Icemist Village</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4164</p></td>
<td><p>The Pit of Narjun</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4165</p></td>
<td><p>Agmar's Hammer</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4166</p></td>
<td><p>Lake Indu'le</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4167</p></td>
<td><p>Obsidian Dragonshrine</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4168</p></td>
<td><p>Ruby Dragonshrine</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4169</p></td>
<td><p>Fordragon Hold</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4170</p></td>
<td><p>Kor'kron Vanguard</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4171</p></td>
<td><p>The Court of Skulls</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4172</p></td>
<td><p>Angrathar the Wrathgate</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4173</p></td>
<td><p>Galakrond's Rest</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4174</p></td>
<td><p>The Wicked Coil</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4175</p></td>
<td><p>Bronze Dragonshrine</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4176</p></td>
<td><p>The Mirror of Dawn</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4177</p></td>
<td><p>Wintergarde Keep</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4178</p></td>
<td><p>Wintergarde Mine</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4179</p></td>
<td><p>Emerald Dragonshrine</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4180</p></td>
<td><p>New Hearthglen</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4181</p></td>
<td><p>Crusader's Landing</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4182</p></td>
<td><p>Sinner's Folly</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4183</p></td>
<td><p>Azure Dragonshrine</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4184</p></td>
<td><p>Path of the Titans</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4185</p></td>
<td><p>The Forgotten Shore</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4186</p></td>
<td><p>Venomspite</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4187</p></td>
<td><p>The Crystal Vice</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4188</p></td>
<td><p>The Carrion Fields</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4189</p></td>
<td><p>Onslaught Base Camp</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4190</p></td>
<td><p>Thorson's Post</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4191</p></td>
<td><p>Light's Trust</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4192</p></td>
<td><p>Frostmourne Cavern</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4193</p></td>
<td><p>Scarlet Point</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4194</p></td>
<td><p>Jintha'kalar</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4195</p></td>
<td><p>Ice Heart Cavern</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4196</p></td>
<td><p>Drak'Tharon Keep</p></td>
<td><p>600</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4197</p></td>
<td><p>Wintergrasp</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4198</p></td>
<td><p>Kili'ua's Atoll</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4199</p></td>
<td><p>Silverbrook</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4200</p></td>
<td><p>Vordrassil's Heart</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4201</p></td>
<td><p>Vordrassil's Tears</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4202</p></td>
<td><p>Vordrassil's Tears</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4203</p></td>
<td><p>Vordrassil's Limb</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4204</p></td>
<td><p>Amberpine Lodge</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4205</p></td>
<td><p>Solstice Village</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4206</p></td>
<td><p>Conquest Hold</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4207</p></td>
<td><p>Voldrune</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4208</p></td>
<td><p>Granite Springs</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4209</p></td>
<td><p>Zeb'Halak</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4210</p></td>
<td><p>Drak'Tharon Keep</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4211</p></td>
<td><p>Camp Oneqwah</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4212</p></td>
<td><p>Eastwind Shore</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4213</p></td>
<td><p>The Broken Bluffs</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4214</p></td>
<td><p>Boulder Hills</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4215</p></td>
<td><p>Rage Fang Shrine</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4216</p></td>
<td><p>Drakil'jin Ruins</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4217</p></td>
<td><p>Blackriver Logging Camp</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4218</p></td>
<td><p>Heart's Blood Shrine</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4219</p></td>
<td><p>Hollowstone Mine</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4220</p></td>
<td><p>Dun Argol</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4221</p></td>
<td><p>Thor Modan</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4222</p></td>
<td><p>Blue Sky Logging Grounds</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4223</p></td>
<td><p>Maw of Neltharion</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4224</p></td>
<td><p>The Briny Pinnacle</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4225</p></td>
<td><p>Glittering Strand</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4226</p></td>
<td><p>Iskaal</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4227</p></td>
<td><p>Dragon's Fall</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4228</p></td>
<td><p>The Oculus</p></td>
<td><p>578</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4229</p></td>
<td><p>Prospector's Point</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4230</p></td>
<td><p>Coldwind Heights</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4231</p></td>
<td><p>Redwood Trading Post</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4232</p></td>
<td><p>Vengeance Pass</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4233</p></td>
<td><p>Dawn's Reach</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4234</p></td>
<td><p>Naxxramas</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4235</p></td>
<td><p>Heartwood Trading Post</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4236</p></td>
<td><p>Evergreen Trading Post</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4237</p></td>
<td><p>Spruce Point Post</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4238</p></td>
<td><p>White Pine Trading Post</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4239</p></td>
<td><p>Aspen Grove Post</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4240</p></td>
<td><p>Forest's Edge Post</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4241</p></td>
<td><p>Eldritch Heights</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4242</p></td>
<td><p>Venture Bay</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4243</p></td>
<td><p>Wintergarde Crypt</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4244</p></td>
<td><p>Bloodmoon Isle</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4245</p></td>
<td><p>Shadowfang Tower</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4246</p></td>
<td><p>Wintergarde Mausoleum</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4247</p></td>
<td><p>Duskhowl Den</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4248</p></td>
<td><p>The Conquest Pit</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4249</p></td>
<td><p>The Path of Iron</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4250</p></td>
<td><p>Ruins of Tethys</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4251</p></td>
<td><p>Silverbrook Hills</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4252</p></td>
<td><p>The Broken Bluffs</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4253</p></td>
<td><p>7th Legion Front</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4254</p></td>
<td><p>The Dragon Wastes</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4255</p></td>
<td><p>Ruins of Drak'Zin</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4256</p></td>
<td><p>Drak'Mar Lake</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4257</p></td>
<td><p>Dragonspine Tributary</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="even">
<td><p>4258</p></td>
<td><p>The North Sea</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4259</p></td>
<td><p>Drak'ural</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4260</p></td>
<td><p>Thorvald's Camp</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4261</p></td>
<td><p>Ghostblade Post</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4262</p></td>
<td><p>Ashwood Post</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4263</p></td>
<td><p>Lydell's Ambush</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4264</p></td>
<td><p>Halls of Stone</p></td>
<td><p>599</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4265</p></td>
<td><p>The Nexus</p></td>
<td><p>576</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4266</p></td>
<td><p>Harkor's Camp</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4267</p></td>
<td><p>Vordrassil Pass</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4268</p></td>
<td><p>Ruuna's Camp</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4269</p></td>
<td><p>Shrine of Scales</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4270</p></td>
<td><p>Drak'atal Passage</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4271</p></td>
<td><p>Utgarde Pinnacle</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4272</p></td>
<td><p>Halls of Lightning</p></td>
<td><p>602</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4273</p></td>
<td><p>Ulduar</p></td>
<td><p>603</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4275</p></td>
<td><p>The Argent Stand</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4276</p></td>
<td><p>Altar of Sseratus</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4277</p></td>
<td><p>Azjol-Nerub</p></td>
<td><p>601</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4278</p></td>
<td><p>Drak'Sotra Fields</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4279</p></td>
<td><p>Drak'Sotra</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4280</p></td>
<td><p>Drak'Agal</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4281</p></td>
<td><p>Acherus: The Ebon Hold</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>4282</p></td>
<td><p>The Avalanche</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4283</p></td>
<td><p>The Lost Lands</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4284</p></td>
<td><p>Nesingwary Base Camp</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4285</p></td>
<td><p>The Seabreach Flow</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4286</p></td>
<td><p>The Bones of Nozronn</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4287</p></td>
<td><p>Kartak's Hold</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4288</p></td>
<td><p>Sparktouched Haven</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4289</p></td>
<td><p>The Path of the Lifewarden</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4290</p></td>
<td><p>River's Heart</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4291</p></td>
<td><p>Rainspeaker Canopy</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4292</p></td>
<td><p>Frenzyheart Hill</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4293</p></td>
<td><p>Wildgrowth Mangal</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4294</p></td>
<td><p>Heb'Valok</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4295</p></td>
<td><p>The Sundered Shard</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4296</p></td>
<td><p>The Lifeblood Pillar</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4297</p></td>
<td><p>Mosswalker Village</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4298</p></td>
<td><p>Plaguelands: The Scarlet Enclave</p></td>
<td><p>609</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4299</p></td>
<td><p>Kolramas</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4300</p></td>
<td><p>Waygate</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4302</p></td>
<td><p>The Skyreach Pillar</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4303</p></td>
<td><p>Hardknuckle Clearing</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4304</p></td>
<td><p>Sapphire Hive</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4306</p></td>
<td><p>Mistwhisper Refuge</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4307</p></td>
<td><p>The Glimmering Pillar</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4308</p></td>
<td><p>Spearborn Encampment</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4309</p></td>
<td><p>Drak'Tharon Keep</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4310</p></td>
<td><p>Zeramas</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4311</p></td>
<td><p>Reliquary of Agony</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4312</p></td>
<td><p>Ebon Watch</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4313</p></td>
<td><p>Thrym's End</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4314</p></td>
<td><p>Voltarus</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4315</p></td>
<td><p>Reliquary of Pain</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4316</p></td>
<td><p>Rageclaw Den</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4317</p></td>
<td><p>Light's Breach</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4318</p></td>
<td><p>Pools of Zha'Jin</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4319</p></td>
<td><p>Zim'Abwa</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4320</p></td>
<td><p>Amphitheater of Anguish</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4321</p></td>
<td><p>Altar of Rhunok</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4322</p></td>
<td><p>Altar of Har'koa</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4323</p></td>
<td><p>Zim'Torga</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4324</p></td>
<td><p>Pools of Jin'Alai</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4325</p></td>
<td><p>Altar of Quetz'lun</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4326</p></td>
<td><p>Heb'Drakkar</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4327</p></td>
<td><p>Drak'Mabwa</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4328</p></td>
<td><p>Zim'Rhuk</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4329</p></td>
<td><p>Altar of Mam'toth</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4342</p></td>
<td><p>Acherus: The Ebon Hold</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4343</p></td>
<td><p>New Avalon</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4344</p></td>
<td><p>New Avalon Fields</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4345</p></td>
<td><p>New Avalon Orchard</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4346</p></td>
<td><p>New Avalon Town Hall</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4347</p></td>
<td><p>Havenshire</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4348</p></td>
<td><p>Havenshire Farms</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4349</p></td>
<td><p>Havenshire Lumber Mill</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4350</p></td>
<td><p>Havenshire Stables</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4351</p></td>
<td><p>Scarlet Hold</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4352</p></td>
<td><p>Chapel of the Crimson Flame</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4353</p></td>
<td><p>Light's Point Tower</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4354</p></td>
<td><p>Light's Point</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4355</p></td>
<td><p>Crypt of Remembrance</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4356</p></td>
<td><p>Death's Breach</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4357</p></td>
<td><p>The Noxious Glade</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4358</p></td>
<td><p>Tyr's Hand</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4359</p></td>
<td><p>King's Harbor</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4360</p></td>
<td><p>Scarlet Overlook</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4361</p></td>
<td><p>Light's Hope Chapel</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4362</p></td>
<td><p>Sinner's Folly</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4363</p></td>
<td><p>Pestilent Scar</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4364</p></td>
<td><p>Browman Mill</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4365</p></td>
<td><p>Havenshire Mine</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4366</p></td>
<td><p>Ursoc's Den</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4367</p></td>
<td><p>The Blight Line</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4368</p></td>
<td><p>The Bonefields</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4369</p></td>
<td><p>Dorian's Outpost</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4371</p></td>
<td><p>Mam'toth Crater</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4372</p></td>
<td><p>Zol'Maz Stronghold</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4373</p></td>
<td><p>Zol'Heb</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4374</p></td>
<td><p>Rageclaw Lake</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4375</p></td>
<td><p>Gundrak</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4376</p></td>
<td><p>The Savage Thicket</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4377</p></td>
<td><p>New Avalon Forge</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4378</p></td>
<td><p>Dalaran Arena</p></td>
<td><p>617</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4379</p></td>
<td><p>Valgarde</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4380</p></td>
<td><p>Westguard Inn</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4381</p></td>
<td><p>Waygate</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="even">
<td><p>4382</p></td>
<td><p>The Shaper's Terrace</p></td>
<td><p>1</p></td>
<td><p>490</p></td>
</tr>
<tr class="odd">
<td><p>4383</p></td>
<td><p>Lakeside Landing</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4384</p></td>
<td><p>Strand of the Ancients</p></td>
<td><p>607</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4385</p></td>
<td><p>Bittertide Lake</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4386</p></td>
<td><p>Rainspeaker Rapids</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4387</p></td>
<td><p>Frenzyheart River</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4388</p></td>
<td><p>Wintergrasp River</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4389</p></td>
<td><p>The Suntouched Pillar</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4390</p></td>
<td><p>Frigid Breach</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4391</p></td>
<td><p>Swindlegrin's Dig</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4392</p></td>
<td><p>The Stormwright's Shelf</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4393</p></td>
<td><p>Death's Hand Encampment</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4394</p></td>
<td><p>Scarlet Tavern</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="odd">
<td><p>4395</p></td>
<td><p>Dalaran</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4396</p></td>
<td><p>Nozzlerust Post</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4399</p></td>
<td><p>Farshire Mine</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4400</p></td>
<td><p>The Mosslight Pillar</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4401</p></td>
<td><p>Saragosa's Landing</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4402</p></td>
<td><p>Vengeance Lift</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4403</p></td>
<td><p>Balejar Watch</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4404</p></td>
<td><p>New Agamand Inn</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4405</p></td>
<td><p>Passage of Lost Fiends</p></td>
<td><p>601</p></td>
<td><p>4277</p></td>
</tr>
<tr class="even">
<td><p>4406</p></td>
<td><p>The Ring of Valor</p></td>
<td><p>618</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4407</p></td>
<td><p>Hall of the Frostwolf</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="even">
<td><p>4408</p></td>
<td><p>Hall of the Stormpike</p></td>
<td><p>30</p></td>
<td><p>2597</p></td>
</tr>
<tr class="odd">
<td><p>4411</p></td>
<td><p>Stormwind Harbor</p></td>
<td><p>0</p></td>
<td><p>1519</p></td>
</tr>
<tr class="even">
<td><p>4412</p></td>
<td><p>The Makers' Overlook</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="odd">
<td><p>4413</p></td>
<td><p>The Makers' Perch</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4414</p></td>
<td><p>Scarlet Tower</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4415</p></td>
<td><p>The Violet Hold</p></td>
<td><p>608</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4416</p></td>
<td><p>Gundrak</p></td>
<td><p>604</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4417</p></td>
<td><p>Onslaught Harbor</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4418</p></td>
<td><p>K3</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4419</p></td>
<td><p>Snowblind Hills</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4420</p></td>
<td><p>Snowblind Terrace</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4421</p></td>
<td><p>Garm</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4422</p></td>
<td><p>Brunnhildar Village</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4423</p></td>
<td><p>Sifreldar Village</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4424</p></td>
<td><p>Valkyrion</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4425</p></td>
<td><p>The Forlorn Mine</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4426</p></td>
<td><p>Bor's Breath River</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4427</p></td>
<td><p>Argent Vanguard</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4428</p></td>
<td><p>Frosthold</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4429</p></td>
<td><p>Grom'arsh Crash-Site</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4430</p></td>
<td><p>Temple of Storms</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4431</p></td>
<td><p>Engine of the Makers</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4432</p></td>
<td><p>The Foot Steppes</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4433</p></td>
<td><p>Dragonspine Peaks</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4434</p></td>
<td><p>Nidavelir</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4435</p></td>
<td><p>Narvir's Cradle</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4436</p></td>
<td><p>Snowdrift Plains</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4437</p></td>
<td><p>Valley of Ancient Winters</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4438</p></td>
<td><p>Dun Niffelem</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4439</p></td>
<td><p>Frostfield Lake</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4440</p></td>
<td><p>Thunderfall</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4441</p></td>
<td><p>Camp Tunka'lo</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4442</p></td>
<td><p>Brann's Base-Camp</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4443</p></td>
<td><p>Gate of Echoes</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4444</p></td>
<td><p>Plain of Echoes</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4445</p></td>
<td><p>Ulduar</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4446</p></td>
<td><p>Terrace of the Makers</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4447</p></td>
<td><p>Gate of Lightning</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4448</p></td>
<td><p>Path of the Titans</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4449</p></td>
<td><p>Uldis</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4450</p></td>
<td><p>Loken's Bargain</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4451</p></td>
<td><p>Bor's Fall</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4452</p></td>
<td><p>Bor's Breath</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4453</p></td>
<td><p>Rohemdal Pass</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4454</p></td>
<td><p>The Storm Foundry</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4455</p></td>
<td><p>Hibernal Cavern</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4456</p></td>
<td><p>Voldrune Dwelling</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4457</p></td>
<td><p>Torseg's Rest</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4458</p></td>
<td><p>Sparksocket Minefield</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4459</p></td>
<td><p>Ricket's Folly</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4460</p></td>
<td><p>Garm's Bane</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4461</p></td>
<td><p>Garm's Rise</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4462</p></td>
<td><p>Crystalweb Cavern</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4463</p></td>
<td><p>Temple of Life</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4464</p></td>
<td><p>Temple of Order</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4465</p></td>
<td><p>Temple of Winter</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4466</p></td>
<td><p>Temple of Invention</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4467</p></td>
<td><p>Death's Rise</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4468</p></td>
<td><p>The Dead Fields</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4469</p></td>
<td><p>Dargath's Demise</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4470</p></td>
<td><p>The Hidden Hollow</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4471</p></td>
<td><p>Bernau's Happy Fun Land</p></td>
<td><p>451</p></td>
<td><p>4019</p></td>
</tr>
<tr class="even">
<td><p>4472</p></td>
<td><p>Frostgrip's Hollow</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4473</p></td>
<td><p>The Frigid Tomb</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4474</p></td>
<td><p>Twin Shores</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4475</p></td>
<td><p>Zim'bo's Hideout</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4476</p></td>
<td><p>Abandoned Camp</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4477</p></td>
<td><p>The Shadow Vault</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4478</p></td>
<td><p>Coldwind Pass</p></td>
<td><p>571</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>4479</p></td>
<td><p>Winter's Breath Lake</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="even">
<td><p>4480</p></td>
<td><p>The Forgotten Overlook</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4481</p></td>
<td><p>Jintha'kalar Passage</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4482</p></td>
<td><p>Arriga Footbridge</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4483</p></td>
<td><p>The Lost Passage</p></td>
<td><p>571</p></td>
<td><p>3711</p></td>
</tr>
<tr class="even">
<td><p>4484</p></td>
<td><p>Bouldercrag's Refuge</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4485</p></td>
<td><p>The Inventor's Library</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4486</p></td>
<td><p>The Frozen Mine</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4487</p></td>
<td><p>Frostfloe Deep</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4488</p></td>
<td><p>The Howling Hollow</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4489</p></td>
<td><p>Crusader Forward Camp</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>4490</p></td>
<td><p>Stormcrest</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4491</p></td>
<td><p>Bonesnap's Camp</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="even">
<td><p>4492</p></td>
<td><p>Ufrang's Hall</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4493</p></td>
<td><p>The Obsidian Sanctum</p></td>
<td><p>615</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4494</p></td>
<td><p>Ahn'kahet: The Old Kingdom</p></td>
<td><p>619</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4495</p></td>
<td><p>Fjorn's Anvil</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4496</p></td>
<td><p>Jotunheim</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4497</p></td>
<td><p>Savage Ledge</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4498</p></td>
<td><p>Halls of the Ancestors</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4499</p></td>
<td><p>The Blighted Pool</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4500</p></td>
<td><p>The Eye of Eternity</p></td>
<td><p>616</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4501</p></td>
<td><p>The Argent Vanguard</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4502</p></td>
<td><p>Mimir's Workshop</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4503</p></td>
<td><p>Ironwall Dam</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4504</p></td>
<td><p>Valley of Echoes</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4505</p></td>
<td><p>The Breach</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4506</p></td>
<td><p>Scourgeholme</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4507</p></td>
<td><p>The Broken Front</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4508</p></td>
<td><p>Mord'rethar: The Death Gate</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4509</p></td>
<td><p>The Bombardment</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4510</p></td>
<td><p>Aldur'thar: The Desolation Gate</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4511</p></td>
<td><p>The Skybreaker</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4512</p></td>
<td><p>Orgrim's Hammer</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4513</p></td>
<td><p>Ymirheim</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4514</p></td>
<td><p>Saronite Mines</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4515</p></td>
<td><p>The Conflagration</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4516</p></td>
<td><p>Ironwall Rampart</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4517</p></td>
<td><p>Weeping Quarry</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4518</p></td>
<td><p>Corp'rethar: The Horror Gate</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4519</p></td>
<td><p>The Court of Bones</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4520</p></td>
<td><p>Malykriss: The Vile Hold</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4521</p></td>
<td><p>Cathedral of Darkness</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4522</p></td>
<td><p>Icecrown Citadel</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4523</p></td>
<td><p>Icecrown Glacier</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4524</p></td>
<td><p>Valhalas</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4525</p></td>
<td><p>The Underhalls</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4526</p></td>
<td><p>Njorndar Village</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4527</p></td>
<td><p>Balargarde Fortress</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4528</p></td>
<td><p>Kul'galar Keep</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4529</p></td>
<td><p>The Crimson Cathedral</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4530</p></td>
<td><p>Sanctum of Reanimation</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4531</p></td>
<td><p>The Fleshwerks</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4532</p></td>
<td><p>Vengeance Landing Inn</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4533</p></td>
<td><p>Sindragosa's Fall</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4534</p></td>
<td><p>Wildervar Mine</p></td>
<td><p>571</p></td>
<td><p>495</p></td>
</tr>
<tr class="odd">
<td><p>4535</p></td>
<td><p>The Pit of the Fang</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4536</p></td>
<td><p>Frosthowl Cavern</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4537</p></td>
<td><p>The Valley of Lost Hope</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4538</p></td>
<td><p>The Sunken Ring</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="odd">
<td><p>4539</p></td>
<td><p>The Broken Temple</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="even">
<td><p>4540</p></td>
<td><p>The Valley of Fallen Heroes</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4541</p></td>
<td><p>Vanguard Infirmary</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4542</p></td>
<td><p>Hall of the Shaper</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4543</p></td>
<td><p>Temple of Wisdom</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4544</p></td>
<td><p>Death's Breach</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>4545</p></td>
<td><p>Abandoned Mine</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="even">
<td><p>4546</p></td>
<td><p>Ruins of the Scarlet Enclave</p></td>
<td><p>0</p></td>
<td><p>139</p></td>
</tr>
<tr class="odd">
<td><p>4547</p></td>
<td><p>Halls of Stone</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4548</p></td>
<td><p>Halls of Lightning</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="odd">
<td><p>4549</p></td>
<td><p>The Great Tree</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="even">
<td><p>4550</p></td>
<td><p>The Mirror of Twilight</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="odd">
<td><p>4551</p></td>
<td><p>The Twilight Rivulet</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="even">
<td><p>4552</p></td>
<td><p>The Decrepit Flow</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="odd">
<td><p>4553</p></td>
<td><p>Forlorn Woods</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="even">
<td><p>4554</p></td>
<td><p>Ruins of Shandaral</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="odd">
<td><p>4555</p></td>
<td><p>The Azure Front</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="even">
<td><p>4556</p></td>
<td><p>Violet Stand</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="odd">
<td><p>4557</p></td>
<td><p>The Unbound Thicket</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="even">
<td><p>4558</p></td>
<td><p>Sunreaver's Command</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="odd">
<td><p>4559</p></td>
<td><p>Windrunner's Overlook</p></td>
<td><p>571</p></td>
<td><p>2817</p></td>
</tr>
<tr class="even">
<td><p>4560</p></td>
<td><p>The Underbelly</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4564</p></td>
<td><p>Krasus' Landing</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="even">
<td><p>4567</p></td>
<td><p>The Violet Hold</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4568</p></td>
<td><p>The Eventide</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="even">
<td><p>4569</p></td>
<td><p>Sewer Exit Pipe</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4570</p></td>
<td><p>Circle of Wills</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="even">
<td><p>4571</p></td>
<td><p>Silverwing Flag Room</p></td>
<td><p>489</p></td>
<td><p>3277</p></td>
</tr>
<tr class="odd">
<td><p>4572</p></td>
<td><p>Warsong Flag Room</p></td>
<td><p>489</p></td>
<td><p>3277</p></td>
</tr>
<tr class="even">
<td><p>4575</p></td>
<td><p>Wintergrasp Fortress</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="odd">
<td><p>4576</p></td>
<td><p>Central Bridge</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="even">
<td><p>4577</p></td>
<td><p>Eastern Bridge</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="odd">
<td><p>4578</p></td>
<td><p>Western Bridge</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="even">
<td><p>4579</p></td>
<td><p>Dubra'Jin</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4580</p></td>
<td><p>Crusaders' Pinnacle</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4581</p></td>
<td><p>Flamewatch Tower</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="odd">
<td><p>4582</p></td>
<td><p>Winter's Edge Tower</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="even">
<td><p>4583</p></td>
<td><p>Shadowsight Tower</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="odd">
<td><p>4584</p></td>
<td><p>The Cauldron of Flames</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="even">
<td><p>4585</p></td>
<td><p>Glacial Falls</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="odd">
<td><p>4586</p></td>
<td><p>Windy Bluffs</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="even">
<td><p>4587</p></td>
<td><p>The Forest of Shadows</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="odd">
<td><p>4588</p></td>
<td><p>Blackwatch</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4589</p></td>
<td><p>The Chilled Quagmire</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="odd">
<td><p>4590</p></td>
<td><p>The Steppe of Life</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="even">
<td><p>4591</p></td>
<td><p>Silent Vigil</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4592</p></td>
<td><p>Gimorak's Den</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4593</p></td>
<td><p>The Pit of Fiends</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4594</p></td>
<td><p>Battlescar Spire</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4595</p></td>
<td><p>Hall of Horrors</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4596</p></td>
<td><p>The Circle of Suffering</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4597</p></td>
<td><p>Rise of Suffering</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4598</p></td>
<td><p>Krasus' Landing</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="even">
<td><p>4599</p></td>
<td><p>Sewer Exit Pipe</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4601</p></td>
<td><p>Dalaran Island</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="even">
<td><p>4602</p></td>
<td><p>Force Interior</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4603</p></td>
<td><p>Vault of Archavon</p></td>
<td><p>624</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4604</p></td>
<td><p>Gate of the Red Sun</p></td>
<td><p>607</p></td>
<td><p>4384</p></td>
</tr>
<tr class="odd">
<td><p>4605</p></td>
<td><p>Gate of the Blue Sapphire</p></td>
<td><p>607</p></td>
<td><p>4384</p></td>
</tr>
<tr class="even">
<td><p>4606</p></td>
<td><p>Gate of the Green Emerald</p></td>
<td><p>607</p></td>
<td><p>4384</p></td>
</tr>
<tr class="odd">
<td><p>4607</p></td>
<td><p>Gate of the Purple Amethyst</p></td>
<td><p>607</p></td>
<td><p>4384</p></td>
</tr>
<tr class="even">
<td><p>4608</p></td>
<td><p>Gate of the Yellow Moon</p></td>
<td><p>607</p></td>
<td><p>4384</p></td>
</tr>
<tr class="odd">
<td><p>4609</p></td>
<td><p>Courtyard of the Ancients</p></td>
<td><p>607</p></td>
<td><p>4384</p></td>
</tr>
<tr class="even">
<td><p>4610</p></td>
<td><p>Landing Beach</p></td>
<td><p>607</p></td>
<td><p>4384</p></td>
</tr>
<tr class="odd">
<td><p>4611</p></td>
<td><p>Westspark Workshop</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="even">
<td><p>4612</p></td>
<td><p>Eastspark Workshop</p></td>
<td><p>571</p></td>
<td><p>4197</p></td>
</tr>
<tr class="odd">
<td><p>4613</p></td>
<td><p>Dalaran City</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="even">
<td><p>4614</p></td>
<td><p>The Violet Citadel Spire</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4615</p></td>
<td><p>Naz'anak: The Forgotten Depths</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4616</p></td>
<td><p>Sunreaver's Sanctuary</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4617</p></td>
<td><p>Elevator</p></td>
<td><p>0</p></td>
<td><p>1497</p></td>
</tr>
<tr class="even">
<td><p>4618</p></td>
<td><p>Antonidas Memorial</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4619</p></td>
<td><p>The Violet Citadel</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="even">
<td><p>4620</p></td>
<td><p>Magus Commerce Exchange</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4621</p></td>
<td><p>UNUSED</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4622</p></td>
<td><p>First Legion Forward Camp</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4623</p></td>
<td><p>Hall of the Conquered Kings</p></td>
<td><p>619</p></td>
<td><p>4494</p></td>
</tr>
<tr class="even">
<td><p>4624</p></td>
<td><p>Befouled Terrace</p></td>
<td><p>619</p></td>
<td><p>4494</p></td>
</tr>
<tr class="odd">
<td><p>4625</p></td>
<td><p>The Desecrated Altar</p></td>
<td><p>619</p></td>
<td><p>4494</p></td>
</tr>
<tr class="even">
<td><p>4626</p></td>
<td><p>Shimmering Bog</p></td>
<td><p>619</p></td>
<td><p>4494</p></td>
</tr>
<tr class="odd">
<td><p>4627</p></td>
<td><p>Fallen Temple of Ahn'kahet</p></td>
<td><p>619</p></td>
<td><p>4494</p></td>
</tr>
<tr class="even">
<td><p>4628</p></td>
<td><p>Halls of Binding</p></td>
<td><p>229</p></td>
<td><p>1583</p></td>
</tr>
<tr class="odd">
<td><p>4629</p></td>
<td><p>Winter's Heart</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4630</p></td>
<td><p>The North Sea</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4631</p></td>
<td><p>The Broodmother's Nest</p></td>
<td><p>571</p></td>
<td><p>67</p></td>
</tr>
<tr class="even">
<td><p>4632</p></td>
<td><p>Dalaran Floating Rocks</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4633</p></td>
<td><p>Raptor Pens</p></td>
<td><p>600</p></td>
<td><p>4196</p></td>
</tr>
<tr class="even">
<td><p>4635</p></td>
<td><p>Drak'Tharon Keep</p></td>
<td><p>571</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>4636</p></td>
<td><p>The Noxious Pass</p></td>
<td><p>609</p></td>
<td><p>4298</p></td>
</tr>
<tr class="even">
<td><p>4637</p></td>
<td><p>Vargoth's Retreat</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4638</p></td>
<td><p>Violet Citadel Balcony</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="even">
<td><p>4639</p></td>
<td><p>Band of Variance</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4640</p></td>
<td><p>Band of Acceleration</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4641</p></td>
<td><p>Band of Transmutation</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="odd">
<td><p>4642</p></td>
<td><p>Band of Alignment</p></td>
<td><p>571</p></td>
<td><p>3537</p></td>
</tr>
<tr class="even">
<td><p>4646</p></td>
<td><p>Ashwood Lake</p></td>
<td><p>571</p></td>
<td><p>394</p></td>
</tr>
<tr class="odd">
<td><p>4650</p></td>
<td><p>Iron Concourse</p></td>
<td><p>603</p></td>
<td><p>4273</p></td>
</tr>
<tr class="even">
<td><p>4652</p></td>
<td><p>Formation Grounds</p></td>
<td><p>603</p></td>
<td><p>4273</p></td>
</tr>
<tr class="odd">
<td><p>4653</p></td>
<td><p>Razorscale's Aerie</p></td>
<td><p>603</p></td>
<td><p>4273</p></td>
</tr>
<tr class="even">
<td><p>4654</p></td>
<td><p>The Colossal Forge</p></td>
<td><p>603</p></td>
<td><p>4273</p></td>
</tr>
<tr class="odd">
<td><p>4655</p></td>
<td><p>The Scrapyard</p></td>
<td><p>603</p></td>
<td><p>4273</p></td>
</tr>
<tr class="even">
<td><p>4656</p></td>
<td><p>The Conservatory of Life</p></td>
<td><p>603</p></td>
<td><p>4273</p></td>
</tr>
<tr class="odd">
<td><p>4657</p></td>
<td><p>The Archivum</p></td>
<td><p>603</p></td>
<td><p>4273</p></td>
</tr>
<tr class="even">
<td><p>4658</p></td>
<td><p>Argent Tournament Grounds</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4665</p></td>
<td><p>Expedition Base Camp</p></td>
<td><p>603</p></td>
<td><p>4273</p></td>
</tr>
<tr class="even">
<td><p>4666</p></td>
<td><p>Sunreaver Pavilion</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4667</p></td>
<td><p>Silver Covenant Pavilion</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4668</p></td>
<td><p>The Cooper Residence</p></td>
<td><p>0</p></td>
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>4669</p></td>
<td><p>The Ring of Champions</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4670</p></td>
<td><p>The Aspirants' Ring</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4671</p></td>
<td><p>The Argent Valiants' Ring</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4672</p></td>
<td><p>The Alliance Valiants' Ring</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4673</p></td>
<td><p>The Horde Valiants' Ring</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4674</p></td>
<td><p>Argent Pavilion</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4676</p></td>
<td><p>Sunreaver Pavilion</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4677</p></td>
<td><p>Silver Covenant Pavilion</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4679</p></td>
<td><p>The Forlorn Cavern</p></td>
<td><p>0</p></td>
<td><p>1537</p></td>
</tr>
<tr class="even">
<td><p>4688</p></td>
<td><p>claytonio test area</p></td>
<td><p>451</p></td>
<td><p>151</p></td>
</tr>
<tr class="odd">
<td><p>4692</p></td>
<td><p>Quel'Delar's Rest</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4710</p></td>
<td><p>Isle of Conquest</p></td>
<td><p>628</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4722</p></td>
<td><p>Trial of the Crusader</p></td>
<td><p>649</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4723</p></td>
<td><p>Trial of the Champion</p></td>
<td><p>650</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4739</p></td>
<td><p>Runeweaver Square</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="even">
<td><p>4740</p></td>
<td><p>The Silver Enclave</p></td>
<td><p>571</p></td>
<td><p>4395</p></td>
</tr>
<tr class="odd">
<td><p>4741</p></td>
<td><p>Isle of Conquest No Man's Land</p></td>
<td><p>628</p></td>
<td><p>4710</p></td>
</tr>
<tr class="even">
<td><p>4742</p></td>
<td><p>Hrothgar's Landing</p></td>
<td><p>571</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4743</p></td>
<td><p>Deathspeaker's Watch</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="even">
<td><p>4747</p></td>
<td><p>Workshop</p></td>
<td><p>628</p></td>
<td><p>4710</p></td>
</tr>
<tr class="odd">
<td><p>4748</p></td>
<td><p>Quarry</p></td>
<td><p>628</p></td>
<td><p>4710</p></td>
</tr>
<tr class="even">
<td><p>4749</p></td>
<td><p>Docks</p></td>
<td><p>628</p></td>
<td><p>4710</p></td>
</tr>
<tr class="odd">
<td><p>4750</p></td>
<td><p>Hangar</p></td>
<td><p>628</p></td>
<td><p>4710</p></td>
</tr>
<tr class="even">
<td><p>4751</p></td>
<td><p>Refinery</p></td>
<td><p>628</p></td>
<td><p>4710</p></td>
</tr>
<tr class="odd">
<td><p>4752</p></td>
<td><p>Horde Keep</p></td>
<td><p>628</p></td>
<td><p>4710</p></td>
</tr>
<tr class="even">
<td><p>4753</p></td>
<td><p>Alliance Keep</p></td>
<td><p>628</p></td>
<td><p>4710</p></td>
</tr>
<tr class="odd">
<td><p>4760</p></td>
<td><p>The Sea Reaver's Run</p></td>
<td><p>571</p></td>
<td><p>4742</p></td>
</tr>
<tr class="even">
<td><p>4763</p></td>
<td><p>Transport: Alliance Gunship</p></td>
<td><p>641</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4764</p></td>
<td><p>Transport: Horde Gunship</p></td>
<td><p>642</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4769</p></td>
<td><p>Hrothgar's Landing</p></td>
<td><p>571</p></td>
<td><p>4742</p></td>
</tr>
<tr class="odd">
<td><p>4809</p></td>
<td><p>The Forge of Souls</p></td>
<td><p>632</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4812</p></td>
<td><p>Icecrown Citadel</p></td>
<td><p>631</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4813</p></td>
<td><p>Pit of Saron</p></td>
<td><p>658</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4820</p></td>
<td><p>Halls of Reflection</p></td>
<td><p>668</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4832</p></td>
<td><p>Transport: Alliance Gunship (IGB)</p></td>
<td><p>672</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4833</p></td>
<td><p>Transport: Horde Gunship (IGB)</p></td>
<td><p>673</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4859</p></td>
<td><p>The Frozen Throne</p></td>
<td><p>631</p></td>
<td><p>4812</p></td>
</tr>
<tr class="even">
<td><p>4862</p></td>
<td><p>The Frozen Halls</p></td>
<td><p>571</p></td>
<td><p>210</p></td>
</tr>
<tr class="odd">
<td><p>4889</p></td>
<td><p>The Frost Queen's Lair</p></td>
<td><p>631</p></td>
<td><p>4812</p></td>
</tr>
<tr class="even">
<td><p>4890</p></td>
<td><p>Putricide's Laboratory of Alchemical Horrors and Fun</p></td>
<td><p>631</p></td>
<td><p>4812</p></td>
</tr>
<tr class="odd">
<td><p>4891</p></td>
<td><p>The Sanctum of Blood</p></td>
<td><p>631</p></td>
<td><p>4812</p></td>
</tr>
<tr class="even">
<td><p>4892</p></td>
<td><p>The Crimson Hall</p></td>
<td><p>631</p></td>
<td><p>4812</p></td>
</tr>
<tr class="odd">
<td><p>4893</p></td>
<td><p>The Frost Queen's Lair</p></td>
<td><p>631</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4894</p></td>
<td><p>Putricide's Laboratory of Alchemical Horrors and Fun</p></td>
<td><p>631</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4895</p></td>
<td><p>The Crimson Hall</p></td>
<td><p>631</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4896</p></td>
<td><p>The Frozen Throne</p></td>
<td><p>631</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>4897</p></td>
<td><p>The Sanctum of Blood</p></td>
<td><p>631</p></td>
<td><p>0</p></td>
</tr>
<tr class="even">
<td><p>4898</p></td>
<td><p>Frostmourne</p></td>
<td><p>631</p></td>
<td><p>4896</p></td>
</tr>
<tr class="odd">
<td><p>4904</p></td>
<td><p>The Dark Approach</p></td>
<td><p>658</p></td>
<td><p>4813</p></td>
</tr>
<tr class="even">
<td><p>4905</p></td>
<td><p>Scourgelord's Command</p></td>
<td><p>658</p></td>
<td><p>4813</p></td>
</tr>
<tr class="odd">
<td><p>4906</p></td>
<td><p>The Shadow Throne</p></td>
<td><p>668</p></td>
<td><p>4820</p></td>
</tr>
<tr class="even">
<td><p>4908</p></td>
<td><p>The Hidden Passage</p></td>
<td><p>668</p></td>
<td><p>4820</p></td>
</tr>
<tr class="odd">
<td><p>4910</p></td>
<td><p>Frostmourne</p></td>
<td><p>631</p></td>
<td><p>4812</p></td>
</tr>
<tr class="even">
<td><p>4987</p></td>
<td><p>The Ruby Sanctum</p></td>
<td><p>724</p></td>
<td><p>0</p></td>
</tr>
</tbody>
</table>


