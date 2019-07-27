# FactionTemplate

**FactionTemplate.dbc**

This DBC contains information on all of the individual factions. A faction entry from this DBC contains all of the needed data to calculate hostility, friendliness, or neutrality to any other faction in this DBC.

**IMPORTANT: These values are only used for the [creature\_template](creature_template) and [gameobject\_template](gameobject\_template) tables.**

## **Structure**

|              |                                                                                                     |                  |
|--------------|-----------------------------------------------------------------------------------------------------|------------------|
| **Field Nb** | **Name**                                                                                            | **Type**         |
| 1            | ID                                                                                                  | Int              |
| 2            | Name (Ref to [Faction.dbc](Faction.dbc)) | Int              |
| 4            | ourMask                                                                                             | Bitmask (4 bits) |
| 5            | friendlyMask                                                                                        | Bitmask (4 bits) |
| 6            | hostileMask                                                                                         | Bitmask (4 bits) |
| 7-10         | enemyFactions                                                                                       | Int              |
| 11-14        | friendFactions                                                                                      | Int              |

# **Explanations & Calculations**

Each different entry has different relations towards any other faction.

The easiest calculation when calculating hostility or friendliness is to look at the Friend factions and Enemy factions columns in the table below. If our faction has the other faction's ID in the Enemy factions list, then it is hostile to that faction (at least). The same thing applies for a friendliness check on the Friend factions column.

If our faction doesn't have the other faction's ID in the enemy or friend faction list, then we'll have to get more complicated in calculating hostility or friendliness.

First, let's define the four faction groups:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>ID</p></th>
<th><p>Bit</p></th>
<th><p>Name</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>All players (and pets)</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>2</p></td>
<td><p>Alliance players (and their pets)</p></td>
</tr>
<tr class="odd">
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>Horde players (and their pets)</p></td>
</tr>
<tr class="even">
<td><p>3</p></td>
<td><p>8</p></td>
<td><p>Monster (Not a player nor a pet)</p></td>
</tr>
</tbody>
</table>

The first mask (ourMask) defines what type of faction we are dealing with. Eg, faction 1 (PLAYER, Human) has 3 as ourMask; that means that it has the first two bits set so it classifies as both 'All players' and 'Alliance players'.

The second mask (friendlyMask) defines what faction groups this faction is friendly with. That means that if this field contains the bit for a faction group, then it is friendly with that faction. Eg, faction 5 (PLAYER, Undead) has 4 as friendlyMask; that means that it has the third bit set so it is friendly with 'Horde players'.

The third mask (hostileMask) defines what faction groups this faction is hostile with. This faction will be hostile to any faction group whose bit is set in this field. For example, let's examine the first two Stormwind factions. The first one (faction 11) has hostileMask 12. The binary representation of this is 1100, with the third and fourth bits set. The second Stormwind faction (faction 12) has hostileMask 4. The binary representation of this is 0100, with the third bit set. Applying the formulas to these two values, we can see that faction 11 is hostile to Horde players and also anything that is not a player while faction 12 is only hostile to Horde players. Faction 12 will not aggro any creature that is part of the monster faction group.

For the mathematically inclined, the basic formula to test for friendliness is

``` cpp
(friendlyMask & other.ourMask) != 0 
```

...where other is another faction. The same thing applies for hostility:

``` cpp
(hostileMask & other.ourMask) != 0
```

For the not so mathematically inclined, we'll have to compare two binary numbers. 
First, you will need to convert all of the masks to binary form with four digits; so 1 becomes 0001, 2 becomes 0010, 3 becomes 0011, etc.

Second, line up the friendlyMask or hostileMask value with the ourMask value. For example:

``` cpp
     1100 //hostileMask of faction 11
     1000 //ourMask of faction 14
```

Next, perform a logical 'AND' on the two numbers, the bottom one with the one on top and follow these rules:

-   1 and 1 is 1
-   1 and 0 is 0
-   0 and 1 is 0
-   0 and 0 is 0
    So, continuing our example:

    ``` cpp
         1100
         1000
         ----
         1000
    ```

Finally, check the result that you get with the value 0. Only 0000 will equal 0, anything else will not equal 0. If the result **'does not**' equal 0, then the faction is hostile/friendly to the other faction. In our example, it is obvious that we do not have 0 (we have 8 in fact if you convert to base 10 again), so faction 11 is hostile to faction 14 and will aggro it.

From all of the above calculations, we notice that if ourMask for a faction is 0 (that means 0000), it will be neutral to everything (not necessarily friendly). If the friendlyMask for a faction is 0, then it will never be friendly to anything or anyone (unless it has other faction IDs in the Friend factions column in the table below). Finally, if the hostileMask for a faction is 0, it will never be hostile to anything or anyone (again there may be exceptions in the Enemy factions column in the table below).

To summarize, you should follow these steps to calculate if faction A is hostile to faction B:

1.  Look for faction B in the Enemy faction list of faction A in the table below
    -   If found, then faction A is hostile to faction B and you can stop
    -   If not found, then continue with the next steps
2.  Look up hostileMask for faction A in table below
3.  Look up ourMask for faction B in table below
4.  Do the and (&) operation on the two values
    -   If the result is 0, then faction A is not hostile to faction B (but not necessarily friendly either)
    -   If the result is not 0, then faction A IS hostile to faction B

And these steps to calculate if faction A is friendly to faction B:

1.  Look for faction B in the Friend faction list of faction A in the table below
    -   If found, then faction A is friendly to faction B and you can stop
    -   If not found, then continue with the next steps
2.  Look up friendlyMask for faction A in table below
3.  Look up ourMask for faction B in table below
4.  Do the and (&) operation on the two values
    -   If the result is 0, then faction A is not friendly to faction B (but not necessarily hostile either)
    -   If the result is not 0, then faction A IS friendly to faction B

# **Content**

**Version is : 3.3.5a**

<table>
<thead>
<tr class="header">
<th><p><strong>ID</strong></p></th>
<th><p><strong>Name</strong></p></th>
<th><p><strong>ourMask</strong></p></th>
<th><p><strong>friendlyMask</strong></p></th>
<th><p><strong>hostileMask</strong></p></th>
<th><p><strong>Enemy Factions</strong></p></th>
<th><p><strong>Friend Factions</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>PLAYER, Human</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>PLAYER, Orc</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>PLAYER, Dwarf</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>PLAYER, Night Elf</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>PLAYER, Undead</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>PLAYER, Tauren</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>Creature</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>10</p></td>
<td><p>Escortee</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>11</p></td>
<td><p>Stormwind</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>12</p></td>
<td><p>Stormwind</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>72</p></td>
</tr>
<tr class="odd">
<td><p>14</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>15</p></td>
<td><p>Creature</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>7</p></td>
</tr>
<tr class="odd">
<td><p>16</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>17</p></td>
<td><p>Defias Brotherhood</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>18</p></td>
<td><p>Murloc</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>19</p></td>
</tr>
<tr class="even">
<td><p>19</p></td>
<td><p>Gnoll - Redridge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>17</p></td>
</tr>
<tr class="odd">
<td><p>20</p></td>
<td><p>Gnoll - Riverpaw</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>16</p></td>
</tr>
<tr class="even">
<td><p>21</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>22</p></td>
<td><p>Beast - Spider</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>22</p></td>
</tr>
<tr class="even">
<td><p>23</p></td>
<td><p>Gnomeregan Exiles</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>24</p></td>
<td><p>Worgen</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>24</p></td>
</tr>
<tr class="even">
<td><p>25</p></td>
<td><p>Kobold</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>25</p></td>
</tr>
<tr class="odd">
<td><p>26</p></td>
<td><p>Kobold</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>25</p></td>
</tr>
<tr class="even">
<td><p>27</p></td>
<td><p>Defias Brotherhood</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>28</p></td>
<td><p>Troll, Bloodscalp</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>26</p></td>
</tr>
<tr class="even">
<td><p>29</p></td>
<td><p>Orgrimmar</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>30</p></td>
<td><p>Troll, Skullsplitter</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>27</p></td>
</tr>
<tr class="even">
<td><p>31</p></td>
<td><p>Prey</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>973</p></td>
<td><p>148 28</p></td>
</tr>
<tr class="odd">
<td><p>32</p></td>
<td><p>Beast - Wolf</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>28</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>33</p></td>
<td><p>Escortee</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>34</p></td>
<td><p>Defias Brotherhood</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>35</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>36</p></td>
<td><p>Trogg</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>32</p></td>
</tr>
<tr class="even">
<td><p>37</p></td>
<td><p>Troll, Frostmane</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>33</p></td>
</tr>
<tr class="odd">
<td><p>38</p></td>
<td><p>Beast - Wolf</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>28</p></td>
<td><p>29</p></td>
</tr>
<tr class="even">
<td><p>39</p></td>
<td><p>Gnoll - Shadowhide</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>18</p></td>
</tr>
<tr class="odd">
<td><p>40</p></td>
<td><p>Orc, Blackrock</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>34</p></td>
</tr>
<tr class="even">
<td><p>41</p></td>
<td><p>Villian</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>36</p></td>
<td><p>35</p></td>
</tr>
<tr class="odd">
<td><p>42</p></td>
<td><p>Victim</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>43</p></td>
<td><p>Villian</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>36</p></td>
<td><p>35</p></td>
</tr>
<tr class="odd">
<td><p>44</p></td>
<td><p>Beast - Bear</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>37</p></td>
</tr>
<tr class="even">
<td><p>45</p></td>
<td><p>Ogre</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>46</p></td>
<td><p>Kurzen's Mercenaries</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>39</p></td>
</tr>
<tr class="even">
<td><p>47</p></td>
<td><p>Venture Company</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>41</p></td>
</tr>
<tr class="odd">
<td><p>48</p></td>
<td><p>Beast - Raptor</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>42</p></td>
</tr>
<tr class="even">
<td><p>49</p></td>
<td><p>Basilisk</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>43</p></td>
</tr>
<tr class="odd">
<td><p>50</p></td>
<td><p>Dragonflight, Green</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>44</p></td>
</tr>
<tr class="even">
<td><p>51</p></td>
<td><p>Lost Ones</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>46 40</p></td>
<td><p>45</p></td>
</tr>
<tr class="odd">
<td><p>52</p></td>
<td><p>Gizlock's Dummy</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>770</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>53</p></td>
<td><p>Human, Night Watch</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p>49</p></td>
</tr>
<tr class="odd">
<td><p>54</p></td>
<td><p>Dark Iron Dwarves</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>48</p></td>
</tr>
<tr class="even">
<td><p>55</p></td>
<td><p>Ironforge</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>47</p></td>
</tr>
<tr class="odd">
<td><p>56</p></td>
<td><p>Human, Night Watch</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p>49</p></td>
</tr>
<tr class="even">
<td><p>57</p></td>
<td><p>Ironforge</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>58</p></td>
<td><p>Creature</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>59</p></td>
<td><p>Trogg</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>32</p></td>
</tr>
<tr class="odd">
<td><p>60</p></td>
<td><p>Dragonflight, Red</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>50</p></td>
</tr>
<tr class="even">
<td><p>61</p></td>
<td><p>Gnoll - Mosshide</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>51</p></td>
</tr>
<tr class="odd">
<td><p>62</p></td>
<td><p>Orc, Dragonmaw</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1015 932 934</p></td>
<td><p>52</p></td>
</tr>
<tr class="even">
<td><p>63</p></td>
<td><p>Gnome - Leper</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>53</p></td>
</tr>
<tr class="odd">
<td><p>64</p></td>
<td><p>Gnomeregan Exiles</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>65</p></td>
<td><p>Orgrimmar</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>45</p></td>
<td><p>76</p></td>
</tr>
<tr class="odd">
<td><p>66</p></td>
<td><p>Leopard</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>28</p></td>
<td><p>55</p></td>
</tr>
<tr class="even">
<td><p>67</p></td>
<td><p>Scarlet Crusade</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>56</p></td>
</tr>
<tr class="odd">
<td><p>68</p></td>
<td><p>Undercity</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>69</p></td>
<td><p>Ratchet</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>470</p></td>
</tr>
<tr class="odd">
<td><p>70</p></td>
<td><p>Gnoll - Rothide</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>57</p></td>
</tr>
<tr class="even">
<td><p>71</p></td>
<td><p>Undercity</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>72</p></td>
<td><p>Beast - Gorilla</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>58</p></td>
</tr>
<tr class="even">
<td><p>73</p></td>
<td><p>Beast - Carrion Bird</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>669</p></td>
</tr>
<tr class="odd">
<td><p>74</p></td>
<td><p>Naga</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>289</p></td>
<td><p>60</p></td>
</tr>
<tr class="even">
<td><p>76</p></td>
<td><p>Dalaran</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>61</p></td>
</tr>
<tr class="odd">
<td><p>77</p></td>
<td><p>Forlorn Spirit</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>78</p></td>
<td><p>Darkhowl</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>79</p></td>
<td><p>Darnassus</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>80</p></td>
<td><p>Darnassus</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>69</p></td>
</tr>
<tr class="odd">
<td><p>81</p></td>
<td><p>Grell</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>64</p></td>
</tr>
<tr class="even">
<td><p>82</p></td>
<td><p>Furbolg</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>65</p></td>
</tr>
<tr class="odd">
<td><p>83</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>84</p></td>
<td><p>Alliance Generic</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>85</p></td>
<td><p>Orgrimmar</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>86</p></td>
<td><p>Gizlock's Charm</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>769</p></td>
<td><p>771</p></td>
</tr>
<tr class="odd">
<td><p>87</p></td>
<td><p>Syndicate</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>70</p></td>
</tr>
<tr class="even">
<td><p>88</p></td>
<td><p>Hillsbrad Militia</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>71</p></td>
</tr>
<tr class="odd">
<td><p>89</p></td>
<td><p>Scarlet Crusade</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>20</p></td>
<td><p>56</p></td>
</tr>
<tr class="even">
<td><p>90</p></td>
<td><p>Demon</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>73</p></td>
</tr>
<tr class="odd">
<td><p>91</p></td>
<td><p>Elemental</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>74</p></td>
</tr>
<tr class="even">
<td><p>92</p></td>
<td><p>Spirit</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>93</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>94</p></td>
<td><p>Treasure</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>95</p></td>
<td><p>Gnoll - Mudsnout</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>78</p></td>
</tr>
<tr class="even">
<td><p>96</p></td>
<td><p>HIllsbrad, Southshore Mayor</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>97</p></td>
<td><p>Syndicate</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>79</p></td>
<td><p>70</p></td>
</tr>
<tr class="even">
<td><p>98</p></td>
<td><p>Undercity</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>99</p></td>
<td><p>Victim</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>100</p></td>
<td><p>Treasure</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>9</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>101</p></td>
<td><p>Treasure</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>102</p></td>
<td><p>Treasure</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>103</p></td>
<td><p>Dragonflight, Black</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>689</p></td>
<td><p>80</p></td>
</tr>
<tr class="even">
<td><p>104</p></td>
<td><p>Thunder Bluff</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>105</p></td>
<td><p>Thunder Bluff</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>106</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>107</p></td>
<td><p>Troll, Frostmane</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>108</p></td>
<td><p>Syndicate</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>79</p></td>
<td><p>70</p></td>
</tr>
<tr class="odd">
<td><p>109</p></td>
<td><p>Quilboar, Razormane 2</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>110 111</p></td>
</tr>
<tr class="even">
<td><p>110</p></td>
<td><p>Quilboar, Razormane 2</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>85</p></td>
<td><p>110</p></td>
</tr>
<tr class="odd">
<td><p>111</p></td>
<td><p>Quilboar, Bristleback</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>85 111</p></td>
</tr>
<tr class="even">
<td><p>112</p></td>
<td><p>Quilboar, Bristleback</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>110</p></td>
<td><p>85 111</p></td>
</tr>
<tr class="odd">
<td><p>113</p></td>
<td><p>Escortee</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>114</p></td>
<td><p>Treasure</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>115</p></td>
<td><p>PLAYER, Gnome</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>116</p></td>
<td><p>PLAYER, Troll</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>118</p></td>
<td><p>Undercity</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>119</p></td>
<td><p>Bloodsail Buccaneers</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>87</p></td>
</tr>
<tr class="odd">
<td><p>120</p></td>
<td><p>Booty Bay</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>21</p></td>
</tr>
<tr class="even">
<td><p>121</p></td>
<td><p>Booty Bay</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>21</p></td>
</tr>
<tr class="odd">
<td><p>122</p></td>
<td><p>Ironforge</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>123</p></td>
<td><p>Stormwind</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>124</p></td>
<td><p>Darnassus</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>125</p></td>
<td><p>Orgrimmar</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>126</p></td>
<td><p>Darkspear Trolls</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>127</p></td>
<td><p>Villian</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>128</p></td>
<td><p>Blackfathom</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>88</p></td>
</tr>
<tr class="even">
<td><p>129</p></td>
<td><p>Makrura</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>89</p></td>
</tr>
<tr class="odd">
<td><p>130</p></td>
<td><p>Centaur, Kolkar</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>90</p></td>
</tr>
<tr class="even">
<td><p>131</p></td>
<td><p>Centaur, Galak</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>91</p></td>
</tr>
<tr class="odd">
<td><p>132</p></td>
<td><p>Gelkis Clan Centaur</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>92</p></td>
</tr>
<tr class="even">
<td><p>133</p></td>
<td><p>Magram Clan Centaur</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>93</p></td>
</tr>
<tr class="odd">
<td><p>134</p></td>
<td><p>Maraudine</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>94</p></td>
</tr>
<tr class="even">
<td><p>148</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>149</p></td>
<td><p>Theramore</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>150</p></td>
<td><p>Theramore</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>151</p></td>
<td><p>Theramore</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>152</p></td>
<td><p>Quilboar, Razorfen</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>109 111</p></td>
</tr>
<tr class="odd">
<td><p>153</p></td>
<td><p>Quilboar, Razorfen</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>109 111</p></td>
</tr>
<tr class="even">
<td><p>154</p></td>
<td><p>Quilboar, Deathshead</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>109 85 111 110</p></td>
</tr>
<tr class="odd">
<td><p>168</p></td>
<td><p>Enemy</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>188</p></td>
<td><p>Ambient</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>148 28</p></td>
</tr>
<tr class="odd">
<td><p>189</p></td>
<td><p>Creature</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>190</p></td>
<td><p>Ambient</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>208</p></td>
<td><p>Nethergarde Caravan</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>168</p></td>
</tr>
<tr class="even">
<td><p>209</p></td>
<td><p>Nethergarde Caravan</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>168</p></td>
</tr>
<tr class="odd">
<td><p>210</p></td>
<td><p>Alliance Generic</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p>189</p></td>
</tr>
<tr class="even">
<td><p>230</p></td>
<td><p>Southsea Freebooters</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>573</p></td>
</tr>
<tr class="odd">
<td><p>231</p></td>
<td><p>Escortee</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>232</p></td>
<td><p>Escortee</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>233</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>68</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>250</p></td>
<td><p>Escortee</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>270</p></td>
<td><p>Wailing Caverns</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>229</p></td>
</tr>
<tr class="even">
<td><p>290</p></td>
<td><p>Escortee</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>310</p></td>
<td><p>Silithid</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>249</p></td>
</tr>
<tr class="even">
<td><p>311</p></td>
<td><p>Silithid</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>249</p></td>
</tr>
<tr class="odd">
<td><p>312</p></td>
<td><p>Beast - Spider</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>22</p></td>
</tr>
<tr class="even">
<td><p>330</p></td>
<td><p>Wailing Caverns</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>229</p></td>
</tr>
<tr class="odd">
<td><p>350</p></td>
<td><p>Blackfathom</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>88</p></td>
</tr>
<tr class="even">
<td><p>370</p></td>
<td><p>Armies of C'Thun</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>912</p></td>
<td><p>915</p></td>
</tr>
<tr class="odd">
<td><p>371</p></td>
<td><p>Silvermoon Remnant</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>269</p></td>
</tr>
<tr class="even">
<td><p>390</p></td>
<td><p>Booty Bay</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>60</p></td>
<td><p>21</p></td>
</tr>
<tr class="odd">
<td><p>410</p></td>
<td><p>Basilisk</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>43</p></td>
</tr>
<tr class="even">
<td><p>411</p></td>
<td><p>Beast - Bat</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>310</p></td>
</tr>
<tr class="odd">
<td><p>412</p></td>
<td><p>The Defilers</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>509</p></td>
<td><p>510</p></td>
</tr>
<tr class="even">
<td><p>413</p></td>
<td><p>Scorpid</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>309</p></td>
</tr>
<tr class="odd">
<td><p>414</p></td>
<td><p>Timbermaw Hold</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>65</p></td>
<td><p>576</p></td>
</tr>
<tr class="even">
<td><p>415</p></td>
<td><p>Titan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>311</p></td>
</tr>
<tr class="odd">
<td><p>416</p></td>
<td><p>Titan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>430</p></td>
<td><p>Taskmaster Fizzule</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>450</p></td>
<td><p>Wailing Caverns</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>40</p></td>
<td><p>229</p></td>
</tr>
<tr class="even">
<td><p>470</p></td>
<td><p>Titan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>471</p></td>
<td><p>Ravenholdt</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>349</p></td>
</tr>
<tr class="even">
<td><p>472</p></td>
<td><p>Syndicate</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>349</p></td>
<td><p>70</p></td>
</tr>
<tr class="odd">
<td><p>473</p></td>
<td><p>Ravenholdt</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>70</p></td>
<td><p>349</p></td>
</tr>
<tr class="even">
<td><p>474</p></td>
<td><p>Gadgetzan</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>369</p></td>
</tr>
<tr class="odd">
<td><p>475</p></td>
<td><p>Gadgetzan</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>369</p></td>
</tr>
<tr class="even">
<td><p>494</p></td>
<td><p>Gnomeregan Bug</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>53</p></td>
<td><p>389</p></td>
</tr>
<tr class="odd">
<td><p>495</p></td>
<td><p>Escortee</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>40</p></td>
</tr>
<tr class="even">
<td><p>514</p></td>
<td><p>Harpy</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>409</p></td>
</tr>
<tr class="odd">
<td><p>534</p></td>
<td><p>Alliance Generic</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>554</p></td>
<td><p>Burning Blade</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p><br />
</p></td>
<td><p>429</p></td>
</tr>
<tr class="odd">
<td><p>574</p></td>
<td><p>Shadowsilk Poacher</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>450</p></td>
<td><p>449</p></td>
</tr>
<tr class="even">
<td><p>575</p></td>
<td><p>Searing Spider</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>450</p></td>
</tr>
<tr class="odd">
<td><p>594</p></td>
<td><p>Trogg</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>614</p></td>
<td><p>Victim</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>634</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>635</p></td>
<td><p>Cenarion Circle</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>609</p></td>
</tr>
<tr class="odd">
<td><p>636</p></td>
<td><p>Timbermaw Hold</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>65</p></td>
<td><p>576</p></td>
</tr>
<tr class="even">
<td><p>637</p></td>
<td><p>Ratchet</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>470</p></td>
</tr>
<tr class="odd">
<td><p>654</p></td>
<td><p>Troll, Witherbark</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>82</p></td>
</tr>
<tr class="even">
<td><p>655</p></td>
<td><p>Centaur, Kolkar</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>5</p></td>
<td><p><br />
</p></td>
<td><p>90</p></td>
</tr>
<tr class="odd">
<td><p>674</p></td>
<td><p>Dark Iron Dwarves</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>48</p></td>
</tr>
<tr class="even">
<td><p>694</p></td>
<td><p>Alliance Generic</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>189</p></td>
</tr>
<tr class="odd">
<td><p>695</p></td>
<td><p>Hydraxian Waterlords</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>749</p></td>
</tr>
<tr class="even">
<td><p>714</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>734</p></td>
<td><p>Dark Iron Dwarves</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>48</p></td>
</tr>
<tr class="even">
<td><p>735</p></td>
<td><p>Goblin, Dark Iron Bar Patron</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>489</p></td>
</tr>
<tr class="odd">
<td><p>736</p></td>
<td><p>Goblin, Dark Iron Bar Patron</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>489</p></td>
</tr>
<tr class="even">
<td><p>754</p></td>
<td><p>Dark Iron Dwarves</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>34</p></td>
<td><p>48</p></td>
</tr>
<tr class="odd">
<td><p>774</p></td>
<td><p>Escortee</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>775</p></td>
<td><p>Escortee</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>776</p></td>
<td><p>Brood of Nozdormu</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>249 80</p></td>
<td><p>910 531</p></td>
</tr>
<tr class="even">
<td><p>777</p></td>
<td><p>Might of Kalimdor</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>915</p></td>
<td><p>912</p></td>
</tr>
<tr class="odd">
<td><p>778</p></td>
<td><p>Giant</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>511</p></td>
</tr>
<tr class="even">
<td><p>794</p></td>
<td><p>Argent Dawn</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>529</p></td>
</tr>
<tr class="odd">
<td><p>795</p></td>
<td><p>Troll, Vilebranch</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>572</p></td>
</tr>
<tr class="even">
<td><p>814</p></td>
<td><p>Argent Dawn</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>529</p></td>
</tr>
<tr class="odd">
<td><p>834</p></td>
<td><p>Elemental</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>74</p></td>
</tr>
<tr class="even">
<td><p>854</p></td>
<td><p>Everlook</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>577</p></td>
</tr>
<tr class="odd">
<td><p>855</p></td>
<td><p>Everlook</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>577</p></td>
</tr>
<tr class="even">
<td><p>874</p></td>
<td><p>Wintersaber Trainers</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>875</p></td>
<td><p>Gnomeregan Exiles</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>876</p></td>
<td><p>Darkspear Trolls</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>877</p></td>
<td><p>Darkspear Trolls</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>894</p></td>
<td><p>Theramore</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>108</p></td>
</tr>
<tr class="odd">
<td><p>914</p></td>
<td><p>Training Dummy</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>934</p></td>
<td><p>Furbolg, Uncorrupted</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>575</p></td>
</tr>
<tr class="odd">
<td><p>954</p></td>
<td><p>Demon</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>73</p></td>
</tr>
<tr class="even">
<td><p>974</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>994</p></td>
<td><p>Cenarion Circle</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>609</p></td>
</tr>
<tr class="even">
<td><p>995</p></td>
<td><p>Thunder Bluff</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>996</p></td>
<td><p>Cenarion Circle</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>249</p></td>
<td><p>609</p></td>
</tr>
<tr class="even">
<td><p>1014</p></td>
<td><p>Shatterspear Trolls</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>629</p></td>
</tr>
<tr class="odd">
<td><p>1015</p></td>
<td><p>Shatterspear Trolls</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>629</p></td>
</tr>
<tr class="even">
<td><p>1034</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1054</p></td>
<td><p>Alliance Generic</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p>189</p></td>
</tr>
<tr class="even">
<td><p>1055</p></td>
<td><p>Alliance Generic</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>189</p></td>
</tr>
<tr class="odd">
<td><p>1074</p></td>
<td><p>Orgrimmar</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1075</p></td>
<td><p>Theramore</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>108</p></td>
</tr>
<tr class="odd">
<td><p>1076</p></td>
<td><p>Darnassus</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>69</p></td>
</tr>
<tr class="even">
<td><p>1077</p></td>
<td><p>Theramore</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>108</p></td>
</tr>
<tr class="odd">
<td><p>1078</p></td>
<td><p>Stormwind</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>72</p></td>
</tr>
<tr class="even">
<td><p>1080</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>74</p></td>
<td><p>31 649</p></td>
</tr>
<tr class="odd">
<td><p>1081</p></td>
<td><p>Elemental</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>649</p></td>
<td><p>74</p></td>
</tr>
<tr class="even">
<td><p>1094</p></td>
<td><p>Beast - Boar</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1095</p></td>
<td><p>Training Dummy</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1096</p></td>
<td><p>Theramore</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p>679</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1097</p></td>
<td><p>Darnassus</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1114</p></td>
<td><p>Dragonflight, Black - Bait</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>80</p></td>
<td><p>689</p></td>
</tr>
<tr class="odd">
<td><p>1134</p></td>
<td><p>Undercity</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p>679</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1154</p></td>
<td><p>Undercity</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p>679</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1174</p></td>
<td><p>Orgrimmar</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1194</p></td>
<td><p>Battleground Neutral</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1214</p></td>
<td><p>Frostwolf Clan</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p>730</p></td>
<td><p>729</p></td>
</tr>
<tr class="even">
<td><p>1215</p></td>
<td><p>Frostwolf Clan</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>730</p></td>
<td><p>729</p></td>
</tr>
<tr class="odd">
<td><p>1216</p></td>
<td><p>Stormpike Guard</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p>729</p></td>
<td><p>730</p></td>
</tr>
<tr class="even">
<td><p>1217</p></td>
<td><p>Stormpike Guard</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>729</p></td>
<td><p>730</p></td>
</tr>
<tr class="odd">
<td><p>1234</p></td>
<td><p>Sulfuron Firelords</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>749</p></td>
<td><p>750</p></td>
</tr>
<tr class="even">
<td><p>1235</p></td>
<td><p>Sulfuron Firelords</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>749</p></td>
<td><p>750</p></td>
</tr>
<tr class="odd">
<td><p>1236</p></td>
<td><p>Sulfuron Firelords</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>749</p></td>
<td><p>750</p></td>
</tr>
<tr class="even">
<td><p>1254</p></td>
<td><p>Cenarion Circle</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>609</p></td>
</tr>
<tr class="odd">
<td><p>1274</p></td>
<td><p>Creature</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1275</p></td>
<td><p>Creature</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1294</p></td>
<td><p>Gizlock</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>770</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1314</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1315</p></td>
<td><p>Alliance Generic</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1334</p></td>
<td><p>Stormpike Guard</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>729</p></td>
<td><p>730</p></td>
</tr>
<tr class="odd">
<td><p>1335</p></td>
<td><p>Frostwolf Clan</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>730</p></td>
<td><p>729</p></td>
</tr>
<tr class="even">
<td><p>1354</p></td>
<td><p>Shen'dralar</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>809</p></td>
</tr>
<tr class="odd">
<td><p>1355</p></td>
<td><p>Shen'dralar</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>809</p></td>
</tr>
<tr class="even">
<td><p>1374</p></td>
<td><p>Ogre (Captain Kromcrush)</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>38</p></td>
</tr>
<tr class="odd">
<td><p>1375</p></td>
<td><p>Treasure</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>9</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1394</p></td>
<td><p>Dragonflight, Black</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>689 47</p></td>
<td><p>80</p></td>
</tr>
<tr class="odd">
<td><p>1395</p></td>
<td><p>Silithid Attackers</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>916</p></td>
</tr>
<tr class="even">
<td><p>1414</p></td>
<td><p>Spirit Guide - Alliance</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1415</p></td>
<td><p>Spirit Guide - Horde</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1434</p></td>
<td><p>Jaedenar</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>869</p></td>
</tr>
<tr class="odd">
<td><p>1454</p></td>
<td><p>Victim</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>35</p></td>
<td><p>36</p></td>
</tr>
<tr class="even">
<td><p>1474</p></td>
<td><p>Thorium Brotherhood</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>59</p></td>
</tr>
<tr class="odd">
<td><p>1475</p></td>
<td><p>Thorium Brotherhood</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>59</p></td>
</tr>
<tr class="even">
<td><p>1494</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>1495</p></td>
<td><p>Horde Generic</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p>66</p></td>
</tr>
<tr class="even">
<td><p>1496</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>66</p></td>
</tr>
<tr class="odd">
<td><p>1514</p></td>
<td><p>Silverwing Sentinels</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1515</p></td>
<td><p>Warsong Outriders</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1534</p></td>
<td><p>Stormpike Guard</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>729</p></td>
<td><p>730</p></td>
</tr>
<tr class="even">
<td><p>1554</p></td>
<td><p>Frostwolf Clan</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1555</p></td>
<td><p>Darkmoon Faire</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>909</p></td>
</tr>
<tr class="even">
<td><p>1574</p></td>
<td><p>Zandalar Tribe</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>270</p></td>
</tr>
<tr class="odd">
<td><p>1575</p></td>
<td><p>Stormwind</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1576</p></td>
<td><p>Silvermoon Remnant</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>269</p></td>
</tr>
<tr class="odd">
<td><p>1577</p></td>
<td><p>The League of Arathor</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>510</p></td>
<td><p>509</p></td>
</tr>
<tr class="even">
<td><p>1594</p></td>
<td><p>Darnassus</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1595</p></td>
<td><p>Orgrimmar</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1596</p></td>
<td><p>Stormpike Guard</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p>729</p></td>
<td><p>730</p></td>
</tr>
<tr class="odd">
<td><p>1597</p></td>
<td><p>Frostwolf Clan</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p>730</p></td>
<td><p>729</p></td>
</tr>
<tr class="even">
<td><p>1598</p></td>
<td><p>The Defilers</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>509</p></td>
<td><p>510</p></td>
</tr>
<tr class="odd">
<td><p>1599</p></td>
<td><p>The League of Arathor</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>510</p></td>
<td><p>509</p></td>
</tr>
<tr class="even">
<td><p>1600</p></td>
<td><p>Darnassus</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1601</p></td>
<td><p>Brood of Nozdormu</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>249 80</p></td>
<td><p>910 531</p></td>
</tr>
<tr class="even">
<td><p>1602</p></td>
<td><p>Silvermoon City</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1603</p></td>
<td><p>Silvermoon City</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1604</p></td>
<td><p>Silvermoon City</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1605</p></td>
<td><p>Dragonflight, Bronze</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>531</p></td>
</tr>
<tr class="even">
<td><p>1606</p></td>
<td><p>Creature</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>7</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1607</p></td>
<td><p>Creature</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>7</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1608</p></td>
<td><p>Cenarion Circle</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>249</p></td>
<td><p>609</p></td>
</tr>
<tr class="odd">
<td><p>1610</p></td>
<td><p>PLAYER, Blood Elf</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1611</p></td>
<td><p>Ironforge</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>916</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1612</p></td>
<td><p>Orgrimmar</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>916</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1613</p></td>
<td><p>Might of Kalimdor</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>915</p></td>
<td><p>912</p></td>
</tr>
<tr class="odd">
<td><p>1614</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>1615</p></td>
<td><p>Steamwheedle Cartel</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>21 577 369</p></td>
</tr>
<tr class="odd">
<td><p>1616</p></td>
<td><p>RC Objects</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>0</p></td>
<td><p>918</p></td>
<td><p>919</p></td>
</tr>
<tr class="even">
<td><p>1617</p></td>
<td><p>RC Enemies</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>919</p></td>
<td><p>918</p></td>
</tr>
<tr class="odd">
<td><p>1618</p></td>
<td><p>Ironforge</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1619</p></td>
<td><p>Orgrimmar</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1620</p></td>
<td><p>Enemy</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1621</p></td>
<td><p>Blue</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>920</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1622</p></td>
<td><p>Red</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>921</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1623</p></td>
<td><p>Tranquillien</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1624</p></td>
<td><p>Argent Dawn</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>529</p></td>
</tr>
<tr class="even">
<td><p>1625</p></td>
<td><p>Argent Dawn</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>529</p></td>
</tr>
<tr class="odd">
<td><p>1626</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>679</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>1627</p></td>
<td><p>Farstriders</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1628</p></td>
<td><p>Tranquillien</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1629</p></td>
<td><p>PLAYER, Draenei</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1630</p></td>
<td><p>Scourge Invaders</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>14 148</p></td>
<td><p>928 20</p></td>
</tr>
<tr class="even">
<td><p>1634</p></td>
<td><p>Scourge Invaders</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>68 72</p></td>
<td><p>928 20</p></td>
</tr>
<tr class="odd">
<td><p>1635</p></td>
<td><p>Steamwheedle Cartel</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>891</p></td>
<td><p>169 892</p></td>
</tr>
<tr class="even">
<td><p>1636</p></td>
<td><p>Farstriders</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1637</p></td>
<td><p>Farstriders</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1638</p></td>
<td><p>Exodar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1639</p></td>
<td><p>Exodar</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1640</p></td>
<td><p>Exodar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1641</p></td>
<td><p>Warsong Outriders</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1642</p></td>
<td><p>Silverwing Sentinels</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1643</p></td>
<td><p>Troll, Forest</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>937</p></td>
</tr>
<tr class="even">
<td><p>1644</p></td>
<td><p>The Sons of Lothar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1645</p></td>
<td><p>The Sons of Lothar</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1646</p></td>
<td><p>Exodar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1647</p></td>
<td><p>Exodar</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1648</p></td>
<td><p>The Sons of Lothar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>72</p></td>
</tr>
<tr class="odd">
<td><p>1649</p></td>
<td><p>The Sons of Lothar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>72</p></td>
</tr>
<tr class="even">
<td><p>1650</p></td>
<td><p>The Mag'har</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1651</p></td>
<td><p>The Mag'har</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>28</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1652</p></td>
<td><p>The Mag'har</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1653</p></td>
<td><p>The Mag'har</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1654</p></td>
<td><p>Exodar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>69</p></td>
</tr>
<tr class="odd">
<td><p>1655</p></td>
<td><p>Exodar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>69</p></td>
</tr>
<tr class="even">
<td><p>1656</p></td>
<td><p>Silvermoon City</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1657</p></td>
<td><p>Silvermoon City</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1658</p></td>
<td><p>Silvermoon City</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1659</p></td>
<td><p>Cenarion Expedition</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>60</p></td>
<td><p>942</p></td>
</tr>
<tr class="even">
<td><p>1660</p></td>
<td><p>Cenarion Expedition</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>942</p></td>
</tr>
<tr class="odd">
<td><p>1661</p></td>
<td><p>Cenarion Expedition</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>942</p></td>
</tr>
<tr class="even">
<td><p>1662</p></td>
<td><p>Fel Orc</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>943</p></td>
</tr>
<tr class="odd">
<td><p>1663</p></td>
<td><p>Fel Orc Ghost</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>945</p></td>
<td><p>944</p></td>
</tr>
<tr class="even">
<td><p>1664</p></td>
<td><p>Sons of Lothar Ghosts</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>944</p></td>
<td><p>945</p></td>
</tr>
<tr class="odd">
<td><p>1665</p></td>
<td><p>None</p></td>
<td><p>1</p></td>
<td><p>7</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1666</p></td>
<td><p>Honor Hold</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1667</p></td>
<td><p>Honor Hold</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>72</p></td>
</tr>
<tr class="even">
<td><p>1668</p></td>
<td><p>Thrallmar</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1669</p></td>
<td><p>Thrallmar</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1670</p></td>
<td><p>Thrallmar</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1671</p></td>
<td><p>Honor Hold</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1672</p></td>
<td><p>Test Faction 1</p></td>
<td><p>1</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>952</p></td>
<td><p>949</p></td>
</tr>
<tr class="odd">
<td><p>1673</p></td>
<td><p>ToWoW - Flag</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>951</p></td>
<td><p>950</p></td>
</tr>
<tr class="even">
<td><p>1674</p></td>
<td><p>Test Faction 4</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>0</p></td>
<td><p>951</p></td>
<td><p>950 953</p></td>
</tr>
<tr class="odd">
<td><p>1675</p></td>
<td><p>Test Faction 3</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>0</p></td>
<td><p>949</p></td>
<td><p>952</p></td>
</tr>
<tr class="even">
<td><p>1676</p></td>
<td><p>ToWoW - Flag Trigger Horde (DND)</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>954</p></td>
</tr>
<tr class="odd">
<td><p>1677</p></td>
<td><p>ToWoW - Flag Trigger Alliance (DND)</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>954</p></td>
</tr>
<tr class="even">
<td><p>1678</p></td>
<td><p>Ethereum</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>956</p></td>
</tr>
<tr class="odd">
<td><p>1679</p></td>
<td><p>Broken</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>40</p></td>
<td><p>955</p></td>
</tr>
<tr class="even">
<td><p>1680</p></td>
<td><p>Elemental</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>957</p></td>
<td><p>74</p></td>
</tr>
<tr class="odd">
<td><p>1681</p></td>
<td><p>Earth Elemental</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>74</p></td>
<td><p>74</p></td>
</tr>
<tr class="even">
<td><p>1682</p></td>
<td><p>Fighting Robots</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>958</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1683</p></td>
<td><p>Actor Good</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>960</p></td>
<td><p>959</p></td>
</tr>
<tr class="even">
<td><p>1684</p></td>
<td><p>Actor Evil</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>959</p></td>
<td><p>960</p></td>
</tr>
<tr class="odd">
<td><p>1685</p></td>
<td><p>Stillpine Furbolg</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>961</p></td>
</tr>
<tr class="even">
<td><p>1686</p></td>
<td><p>Stillpine Furbolg</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>962</p></td>
<td><p>961</p></td>
</tr>
<tr class="odd">
<td><p>1687</p></td>
<td><p>Crazed Owlkin</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>961</p></td>
<td><p>962</p></td>
</tr>
<tr class="even">
<td><p>1688</p></td>
<td><p>Chess Alliance</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>964</p></td>
<td><p>963</p></td>
</tr>
<tr class="odd">
<td><p>1689</p></td>
<td><p>Chess Horde</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>963</p></td>
<td><p>964</p></td>
</tr>
<tr class="even">
<td><p>1690</p></td>
<td><p>Chess Alliance</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>964</p></td>
<td><p>963</p></td>
</tr>
<tr class="odd">
<td><p>1691</p></td>
<td><p>Chess Horde</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>963</p></td>
<td><p>964</p></td>
</tr>
<tr class="even">
<td><p>1692</p></td>
<td><p>Monster Spar</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>966</p></td>
<td><p>965</p></td>
</tr>
<tr class="odd">
<td><p>1693</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>965</p></td>
<td><p>966</p></td>
</tr>
<tr class="even">
<td><p>1694</p></td>
<td><p>Exodar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1695</p></td>
<td><p>Silvermoon City</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1696</p></td>
<td><p>The Violet Eye</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>967</p></td>
</tr>
<tr class="odd">
<td><p>1697</p></td>
<td><p>Fel Orc</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>946 947</p></td>
<td><p>943</p></td>
</tr>
<tr class="even">
<td><p>1698</p></td>
<td><p>Exodar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>968</p></td>
<td><p>930</p></td>
</tr>
<tr class="odd">
<td><p>1699</p></td>
<td><p>Exodar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>968</p></td>
<td><p>930</p></td>
</tr>
<tr class="even">
<td><p>1700</p></td>
<td><p>Exodar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>968</p></td>
<td><p>930</p></td>
</tr>
<tr class="odd">
<td><p>1701</p></td>
<td><p>Sunhawks</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>930</p></td>
<td><p>968</p></td>
</tr>
<tr class="even">
<td><p>1702</p></td>
<td><p>Sunhawks</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>930</p></td>
<td><p>968</p></td>
</tr>
<tr class="odd">
<td><p>1703</p></td>
<td><p>Training Dummy</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1704</p></td>
<td><p>Fel Orc</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>679</p></td>
<td><p>943</p></td>
</tr>
<tr class="odd">
<td><p>1705</p></td>
<td><p>Fel Orc</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>943 679</p></td>
</tr>
<tr class="even">
<td><p>1706</p></td>
<td><p>Fungal Giant</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>970</p></td>
<td><p>971</p></td>
</tr>
<tr class="odd">
<td><p>1707</p></td>
<td><p>Sporeggar</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>970</p></td>
</tr>
<tr class="even">
<td><p>1708</p></td>
<td><p>Sporeggar</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>970</p></td>
</tr>
<tr class="odd">
<td><p>1709</p></td>
<td><p>Sporeggar</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>971</p></td>
<td><p>970</p></td>
</tr>
<tr class="even">
<td><p>1710</p></td>
<td><p>Cenarion Expedition</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>942</p></td>
</tr>
<tr class="odd">
<td><p>1711</p></td>
<td><p>Monster, Predator</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>974</p></td>
<td><p>973</p></td>
</tr>
<tr class="even">
<td><p>1712</p></td>
<td><p>Monster, Prey</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>974</p></td>
</tr>
<tr class="odd">
<td><p>1713</p></td>
<td><p>Monster, Prey</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>974</p></td>
</tr>
<tr class="even">
<td><p>1714</p></td>
<td><p>Sunhawks</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>930 975</p></td>
<td><p>968</p></td>
</tr>
<tr class="odd">
<td><p>1715</p></td>
<td><p>Void Anomaly</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>975</p></td>
</tr>
<tr class="even">
<td><p>1716</p></td>
<td><p>Hyjal Defenders</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>976</p></td>
</tr>
<tr class="odd">
<td><p>1717</p></td>
<td><p>Hyjal Defenders</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>976</p></td>
</tr>
<tr class="even">
<td><p>1718</p></td>
<td><p>Hyjal Defenders</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>977</p></td>
<td><p>976</p></td>
</tr>
<tr class="odd">
<td><p>1719</p></td>
<td><p>Hyjal Defenders</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>976</p></td>
</tr>
<tr class="even">
<td><p>1720</p></td>
<td><p>Hyjal Invaders</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>976</p></td>
<td><p>977</p></td>
</tr>
<tr class="odd">
<td><p>1721</p></td>
<td><p>Kurenai</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p>978</p></td>
</tr>
<tr class="even">
<td><p>1722</p></td>
<td><p>Kurenai</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>978</p></td>
</tr>
<tr class="odd">
<td><p>1723</p></td>
<td><p>Kurenai</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>978</p></td>
</tr>
<tr class="even">
<td><p>1724</p></td>
<td><p>Kurenai</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>978</p></td>
</tr>
<tr class="odd">
<td><p>1725</p></td>
<td><p>Earthen Ring</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>469 67</p></td>
</tr>
<tr class="even">
<td><p>1726</p></td>
<td><p>Earthen Ring</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>469 67</p></td>
</tr>
<tr class="odd">
<td><p>1727</p></td>
<td><p>Earthen Ring</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>469 67</p></td>
</tr>
<tr class="even">
<td><p>1728</p></td>
<td><p>Cenarion Expedition</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>14</p></td>
<td><p>942</p></td>
</tr>
<tr class="odd">
<td><p>1729</p></td>
<td><p>Thrallmar</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1730</p></td>
<td><p>The Consortium</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>933</p></td>
</tr>
<tr class="odd">
<td><p>1731</p></td>
<td><p>The Consortium</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>933</p></td>
</tr>
<tr class="even">
<td><p>1732</p></td>
<td><p>Alliance Generic</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1733</p></td>
<td><p>Alliance Generic</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1734</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1735</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1736</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>965</p></td>
<td><p>966</p></td>
</tr>
<tr class="odd">
<td><p>1737</p></td>
<td><p>Honor Hold</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>72</p></td>
</tr>
<tr class="even">
<td><p>1738</p></td>
<td><p>Arakkoa</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>981</p></td>
</tr>
<tr class="odd">
<td><p>1739</p></td>
<td><p>Zangarmarsh Banner (Alliance)</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>982</p></td>
</tr>
<tr class="even">
<td><p>1740</p></td>
<td><p>Zangarmarsh Banner (Horde)</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>982</p></td>
</tr>
<tr class="odd">
<td><p>1741</p></td>
<td><p>The Sha'tar</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>935</p></td>
</tr>
<tr class="even">
<td><p>1742</p></td>
<td><p>Zangarmarsh Banner (Neutral)</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>984</p></td>
</tr>
<tr class="odd">
<td><p>1743</p></td>
<td><p>The Aldor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>932</p></td>
</tr>
<tr class="even">
<td><p>1744</p></td>
<td><p>The Scryers</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>934</p></td>
</tr>
<tr class="odd">
<td><p>1745</p></td>
<td><p>Silvermoon City</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>679</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1746</p></td>
<td><p>The Scryers</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>934</p></td>
</tr>
<tr class="odd">
<td><p>1747</p></td>
<td><p>Caverns of Time - Thrall</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>986 987</p></td>
<td><p>985</p></td>
</tr>
<tr class="even">
<td><p>1748</p></td>
<td><p>Caverns of Time - Durnholde</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>985</p></td>
<td><p>986</p></td>
</tr>
<tr class="odd">
<td><p>1749</p></td>
<td><p>Caverns of Time - Southshore Guards</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>985</p></td>
<td><p>987</p></td>
</tr>
<tr class="even">
<td><p>1750</p></td>
<td><p>Shadow Council Covert</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>1751</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>932 935</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1752</p></td>
<td><p>Dark Portal Attacker, Legion</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>991 992 943 529</p></td>
<td><p>993</p></td>
</tr>
<tr class="odd">
<td><p>1753</p></td>
<td><p>Dark Portal Attacker, Legion</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>991 992 943 529</p></td>
<td><p>993</p></td>
</tr>
<tr class="even">
<td><p>1754</p></td>
<td><p>Dark Portal Attacker, Legion</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>991 992 943 529</p></td>
<td><p>993</p></td>
</tr>
<tr class="odd">
<td><p>1755</p></td>
<td><p>Dark Portal Defender, Alliance</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>993</p></td>
<td><p>991 992</p></td>
</tr>
<tr class="even">
<td><p>1756</p></td>
<td><p>Dark Portal Defender, Alliance</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>993</p></td>
<td><p>991 992</p></td>
</tr>
<tr class="odd">
<td><p>1757</p></td>
<td><p>Dark Portal Defender, Alliance</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>993</p></td>
<td><p>991 992</p></td>
</tr>
<tr class="even">
<td><p>1758</p></td>
<td><p>Dark Portal Defender, Horde</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>993</p></td>
<td><p>992 991</p></td>
</tr>
<tr class="odd">
<td><p>1759</p></td>
<td><p>Dark Portal Defender, Horde</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>993</p></td>
<td><p>992 991</p></td>
</tr>
<tr class="even">
<td><p>1760</p></td>
<td><p>Dark Portal Defender, Horde</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>993</p></td>
<td><p>992 991</p></td>
</tr>
<tr class="odd">
<td><p>1761</p></td>
<td><p>Inciter Trigger</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>994</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1762</p></td>
<td><p>Inciter Trigger 2</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>996 997 998 994</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1763</p></td>
<td><p>Inciter Trigger 3</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>997 998 994 995</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1764</p></td>
<td><p>Inciter Trigger 4</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>998 994 995 996</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1765</p></td>
<td><p>Inciter Trigger 5</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>994 995 996 997</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1766</p></td>
<td><p>Argent Dawn</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>993</p></td>
<td><p>529</p></td>
</tr>
<tr class="odd">
<td><p>1767</p></td>
<td><p>Argent Dawn</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>993</p></td>
<td><p>529</p></td>
</tr>
<tr class="even">
<td><p>1768</p></td>
<td><p>Demon</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>14 529</p></td>
<td><p>73</p></td>
</tr>
<tr class="odd">
<td><p>1769</p></td>
<td><p>Demon</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>14 529</p></td>
<td><p>73</p></td>
</tr>
<tr class="even">
<td><p>1770</p></td>
<td><p>Actor Good</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>960</p></td>
<td><p>959</p></td>
</tr>
<tr class="odd">
<td><p>1771</p></td>
<td><p>Actor Evil</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>959</p></td>
<td><p>960</p></td>
</tr>
<tr class="even">
<td><p>1772</p></td>
<td><p>Mana Creature</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>968</p></td>
<td><p>999</p></td>
</tr>
<tr class="odd">
<td><p>1773</p></td>
<td><p>Khadgar's Servant</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1000</p></td>
</tr>
<tr class="even">
<td><p>1774</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1000</p></td>
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>1775</p></td>
<td><p>The Sha'tar</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>935</p></td>
</tr>
<tr class="even">
<td><p>1776</p></td>
<td><p>The Aldor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1010</p></td>
<td><p>932</p></td>
</tr>
<tr class="odd">
<td><p>1777</p></td>
<td><p>The Aldor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>932</p></td>
</tr>
<tr class="even">
<td><p>1778</p></td>
<td><p>The Scale of the Sands</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>990</p></td>
</tr>
<tr class="odd">
<td><p>1779</p></td>
<td><p>Keepers of Time</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>989</p></td>
</tr>
<tr class="even">
<td><p>1780</p></td>
<td><p>Bladespire Clan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>929</p></td>
<td><p>1001</p></td>
</tr>
<tr class="odd">
<td><p>1781</p></td>
<td><p>Bloodmaul Clan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1001</p></td>
<td><p>929</p></td>
</tr>
<tr class="even">
<td><p>1782</p></td>
<td><p>Bladespire Clan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>929</p></td>
<td><p>1001</p></td>
</tr>
<tr class="odd">
<td><p>1783</p></td>
<td><p>Bloodmaul Clan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1001</p></td>
<td><p>929</p></td>
</tr>
<tr class="even">
<td><p>1784</p></td>
<td><p>Bladespire Clan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>929</p></td>
<td><p>1001</p></td>
</tr>
<tr class="odd">
<td><p>1785</p></td>
<td><p>Bloodmaul Clan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1001</p></td>
<td><p>929</p></td>
</tr>
<tr class="even">
<td><p>1786</p></td>
<td><p>Demon</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>73</p></td>
</tr>
<tr class="odd">
<td><p>1787</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>994</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>1788</p></td>
<td><p>The Consortium</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>968</p></td>
<td><p>933</p></td>
</tr>
<tr class="odd">
<td><p>1789</p></td>
<td><p>Sunhawks</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>933</p></td>
<td><p>968</p></td>
</tr>
<tr class="even">
<td><p>1790</p></td>
<td><p>Bladespire Clan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>929</p></td>
<td><p>1001</p></td>
</tr>
<tr class="odd">
<td><p>1791</p></td>
<td><p>Bloodmaul Clan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1001</p></td>
<td><p>929</p></td>
</tr>
<tr class="even">
<td><p>1792</p></td>
<td><p>Fel Orc</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>943</p></td>
</tr>
<tr class="odd">
<td><p>1793</p></td>
<td><p>Sunhawks</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>930</p></td>
<td><p>968</p></td>
</tr>
<tr class="even">
<td><p>1794</p></td>
<td><p>Protectorate</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1003</p></td>
</tr>
<tr class="odd">
<td><p>1795</p></td>
<td><p>Protectorate</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>956</p></td>
<td><p>1003</p></td>
</tr>
<tr class="even">
<td><p>1796</p></td>
<td><p>Ethereum</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1003</p></td>
<td><p>956</p></td>
</tr>
<tr class="odd">
<td><p>1797</p></td>
<td><p>Protectorate</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1003</p></td>
</tr>
<tr class="even">
<td><p>1798</p></td>
<td><p>Arcane Annihilator (DNR)</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>968 1004</p></td>
</tr>
<tr class="odd">
<td><p>1799</p></td>
<td><p>Ethereum Sparbuddy</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>956</p></td>
<td><p>1002</p></td>
</tr>
<tr class="even">
<td><p>1800</p></td>
<td><p>Ethereum</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1002</p></td>
<td><p>956</p></td>
</tr>
<tr class="odd">
<td><p>1801</p></td>
<td><p>Horde</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1802</p></td>
<td><p>Alliance</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1803</p></td>
<td><p>Ambient</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1804</p></td>
<td><p>Ambient</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1805</p></td>
<td><p>The Aldor</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>932</p></td>
</tr>
<tr class="even">
<td><p>1806</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>1807</p></td>
<td><p>Protectorate</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>1003</p></td>
</tr>
<tr class="even">
<td><p>1808</p></td>
<td><p>Kirin'Var - Belmara</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1007</p></td>
</tr>
<tr class="odd">
<td><p>1809</p></td>
<td><p>Kirin'Var - Cohlien</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1009</p></td>
</tr>
<tr class="even">
<td><p>1810</p></td>
<td><p>Kirin'Var - Dathric</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1006</p></td>
</tr>
<tr class="odd">
<td><p>1811</p></td>
<td><p>Kirin'Var - Luminrath</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1008</p></td>
</tr>
<tr class="even">
<td><p>1812</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>1813</p></td>
<td><p>Servant of Illidan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1023</p></td>
<td><p>1010</p></td>
</tr>
<tr class="even">
<td><p>1814</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>965</p></td>
<td><p>966</p></td>
</tr>
<tr class="odd">
<td><p>1815</p></td>
<td><p>Beast - Wolf</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>28</p></td>
<td><p>29</p></td>
</tr>
<tr class="even">
<td><p>1816</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>1818</p></td>
<td><p>Lower City</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1011</p></td>
</tr>
<tr class="even">
<td><p>1819</p></td>
<td><p>Alliance Generic</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p>73</p></td>
<td><p>471</p></td>
</tr>
<tr class="odd">
<td><p>1820</p></td>
<td><p>Ashtongue Deathsworn</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1012</p></td>
</tr>
<tr class="even">
<td><p>1821</p></td>
<td><p>Spirits of Shadowmoon 1</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1013</p></td>
</tr>
<tr class="odd">
<td><p>1822</p></td>
<td><p>Spirits of Shadowmoon 2</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1013</p></td>
</tr>
<tr class="even">
<td><p>1823</p></td>
<td><p>Ethereum</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>956</p></td>
</tr>
<tr class="odd">
<td><p>1824</p></td>
<td><p>Netherwing</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1015</p></td>
</tr>
<tr class="even">
<td><p>1825</p></td>
<td><p>Demon</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>14 529</p></td>
<td><p>73</p></td>
</tr>
<tr class="odd">
<td><p>1826</p></td>
<td><p>Servant of Illidan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>73 1023</p></td>
<td><p>1010</p></td>
</tr>
<tr class="even">
<td><p>1827</p></td>
<td><p>Wyrmcult</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1016</p></td>
</tr>
<tr class="odd">
<td><p>1828</p></td>
<td><p>Treant</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1016</p></td>
<td><p>1017</p></td>
</tr>
<tr class="even">
<td><p>1829</p></td>
<td><p>Leotheras Demon I</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1018 14</p></td>
</tr>
<tr class="odd">
<td><p>1830</p></td>
<td><p>Leotheras Demon II</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1019 14</p></td>
</tr>
<tr class="even">
<td><p>1831</p></td>
<td><p>Leotheras Demon III</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1020 14</p></td>
</tr>
<tr class="odd">
<td><p>1832</p></td>
<td><p>Leotheras Demon IV</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1021 14</p></td>
</tr>
<tr class="even">
<td><p>1833</p></td>
<td><p>Leotheras Demon V</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1022 14</p></td>
</tr>
<tr class="odd">
<td><p>1834</p></td>
<td><p>Azaloth</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>14 1010</p></td>
<td><p>1023</p></td>
</tr>
<tr class="even">
<td><p>1835</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p>73</p></td>
<td><p>471</p></td>
</tr>
<tr class="odd">
<td><p>1836</p></td>
<td><p>The Consortium</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>933</p></td>
</tr>
<tr class="even">
<td><p>1837</p></td>
<td><p>Sporeggar</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>971</p></td>
<td><p>970</p></td>
</tr>
<tr class="odd">
<td><p>1838</p></td>
<td><p>The Scryers</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1010</p></td>
<td><p>934</p></td>
</tr>
<tr class="even">
<td><p>1839</p></td>
<td><p>Rock Flayer</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1025</p></td>
<td><p>1024</p></td>
</tr>
<tr class="odd">
<td><p>1840</p></td>
<td><p>Flayer Hunter</p></td>
<td><p>1</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p>1024</p></td>
<td><p>1025</p></td>
</tr>
<tr class="even">
<td><p>1841</p></td>
<td><p>Shadowmoon Shade</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1026</p></td>
</tr>
<tr class="odd">
<td><p>1842</p></td>
<td><p>Legion Communicator</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1843</p></td>
<td><p>Servant of Illidan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>932 934 1033 1012</p></td>
<td><p>1010</p></td>
</tr>
<tr class="odd">
<td><p>1844</p></td>
<td><p>The Aldor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1010</p></td>
<td><p>932</p></td>
</tr>
<tr class="even">
<td><p>1845</p></td>
<td><p>The Scryers</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1010</p></td>
<td><p>934</p></td>
</tr>
<tr class="odd">
<td><p>1846</p></td>
<td><p>Ravenswood Ancients</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1028</p></td>
</tr>
<tr class="even">
<td><p>1847</p></td>
<td><p>Monster Spar</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>966</p></td>
<td><p>965</p></td>
</tr>
<tr class="odd">
<td><p>1848</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>965</p></td>
<td><p>966</p></td>
</tr>
<tr class="even">
<td><p>1849</p></td>
<td><p>Servant of Illidan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1023</p></td>
<td><p>1010</p></td>
</tr>
<tr class="odd">
<td><p>1850</p></td>
<td><p>Netherwing</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>52</p></td>
<td><p>1015</p></td>
</tr>
<tr class="even">
<td><p>1851</p></td>
<td><p>Lower City</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>1011</p></td>
</tr>
<tr class="odd">
<td><p>1852</p></td>
<td><p>Chess, Friendly to All Chess</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>963 964 1029</p></td>
</tr>
<tr class="even">
<td><p>1853</p></td>
<td><p>Servant of Illidan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>932 934</p></td>
<td><p>1010</p></td>
</tr>
<tr class="odd">
<td><p>1854</p></td>
<td><p>The Aldor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1030</p></td>
<td><p>932 934</p></td>
</tr>
<tr class="even">
<td><p>1855</p></td>
<td><p>The Scryers</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1030</p></td>
<td><p>934 932</p></td>
</tr>
<tr class="odd">
<td><p>1856</p></td>
<td><p>Sha'tari Skyguard</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1031</p></td>
</tr>
<tr class="even">
<td><p>1857</p></td>
<td><p>Friendly</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>1032</p></td>
</tr>
<tr class="odd">
<td><p>1858</p></td>
<td><p>Ashtongue Deathsworn</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1030</p></td>
<td><p>932 934 1012 1033</p></td>
</tr>
<tr class="even">
<td><p>1859</p></td>
<td><p>Maiev</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1030</p></td>
<td><p>932 934 1012 1033</p></td>
</tr>
<tr class="odd">
<td><p>1860</p></td>
<td><p>Skettis Shadowy Arakkoa</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1034</p></td>
</tr>
<tr class="even">
<td><p>1862</p></td>
<td><p>Skettis Arakkoa</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1035</p></td>
</tr>
<tr class="odd">
<td><p>1863</p></td>
<td><p>Orc, Dragonmaw</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1015 1036 932 934</p></td>
<td><p>52</p></td>
</tr>
<tr class="even">
<td><p>1864</p></td>
<td><p>Dragonmaw Enemy</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>52</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>1865</p></td>
<td><p>Orc, Dragonmaw</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>52</p></td>
</tr>
<tr class="even">
<td><p>1866</p></td>
<td><p>Ashtongue Deathsworn</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1010</p></td>
<td><p>1012</p></td>
</tr>
<tr class="odd">
<td><p>1867</p></td>
<td><p>Maiev</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1010</p></td>
<td><p>932 934 1012 1033</p></td>
</tr>
<tr class="even">
<td><p>1868</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>965</p></td>
<td><p>966</p></td>
</tr>
<tr class="odd">
<td><p>1869</p></td>
<td><p>Arakkoa</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1035</p></td>
</tr>
<tr class="even">
<td><p>1870</p></td>
<td><p>Sha'tari Skyguard</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1031</p></td>
</tr>
<tr class="odd">
<td><p>1871</p></td>
<td><p>Skettis Arakkoa</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1035</p></td>
</tr>
<tr class="even">
<td><p>1872</p></td>
<td><p>Ogri'la</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1038</p></td>
</tr>
<tr class="odd">
<td><p>1873</p></td>
<td><p>Rock Flayer</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1024</p></td>
</tr>
<tr class="even">
<td><p>1874</p></td>
<td><p>Ogri'la</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1038</p></td>
</tr>
<tr class="odd">
<td><p>1875</p></td>
<td><p>The Aldor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>52</p></td>
<td><p>932</p></td>
</tr>
<tr class="even">
<td><p>1876</p></td>
<td><p>The Scryers</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>52</p></td>
<td><p>934</p></td>
</tr>
<tr class="odd">
<td><p>1877</p></td>
<td><p>Orc, Dragonmaw</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1015 932 934</p></td>
<td><p>52</p></td>
</tr>
<tr class="even">
<td><p>1878</p></td>
<td><p>Frenzy</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1041</p></td>
</tr>
<tr class="odd">
<td><p>1879</p></td>
<td><p>Skyguard Enemy</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1031</p></td>
<td><p>1042</p></td>
</tr>
<tr class="even">
<td><p>1880</p></td>
<td><p>Orc, Dragonmaw</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>52</p></td>
</tr>
<tr class="odd">
<td><p>1881</p></td>
<td><p>Skettis Arakkoa</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1035</p></td>
</tr>
<tr class="even">
<td><p>1882</p></td>
<td><p>Servant of Illidan</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1023</p></td>
<td><p>1010</p></td>
</tr>
<tr class="odd">
<td><p>1883</p></td>
<td><p>Theramore Deserter</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p><br />
</p></td>
<td><p>1044</p></td>
</tr>
<tr class="even">
<td><p>1884</p></td>
<td><p>Tuskarr</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1885</p></td>
<td><p>Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1045</p></td>
</tr>
<tr class="even">
<td><p>1886</p></td>
<td><p>Creature</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>7</p></td>
</tr>
<tr class="odd">
<td><p>1887</p></td>
<td><p>Creature</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>7 7</p></td>
</tr>
<tr class="even">
<td><p>1888</p></td>
<td><p>Northsea Pirates</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1046</p></td>
</tr>
<tr class="odd">
<td><p>1889</p></td>
<td><p>UNUSED</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1048</p></td>
</tr>
<tr class="even">
<td><p>1890</p></td>
<td><p>Troll, Amani</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1049</p></td>
</tr>
<tr class="odd">
<td><p>1891</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>1050</p></td>
</tr>
<tr class="even">
<td><p>1892</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>1050</p></td>
</tr>
<tr class="odd">
<td><p>1893</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>1045</p></td>
<td><p>1050</p></td>
</tr>
<tr class="even">
<td><p>1894</p></td>
<td><p>Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1045</p></td>
</tr>
<tr class="odd">
<td><p>1895</p></td>
<td><p>Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1050</p></td>
<td><p>1045</p></td>
</tr>
<tr class="even">
<td><p>1896</p></td>
<td><p>Darkmoon Faire</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>909</p></td>
</tr>
<tr class="odd">
<td><p>1897</p></td>
<td><p>The Hand of Vengeance</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>1045 1050</p></td>
<td><p>1052 1067</p></td>
</tr>
<tr class="even">
<td><p>1898</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>1067</p></td>
<td><p>1050</p></td>
</tr>
<tr class="odd">
<td><p>1899</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>1067</p></td>
<td><p>1050</p></td>
</tr>
<tr class="even">
<td><p>1900</p></td>
<td><p>The Hand of Vengeance</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>1053</p></td>
<td><p>1052 1067</p></td>
</tr>
<tr class="odd">
<td><p>1901</p></td>
<td><p>Horde Expedition</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1052</p></td>
</tr>
<tr class="even">
<td><p>1902</p></td>
<td><p>Actor Evil</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1904</p></td>
<td><p>Actor Evil</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1905</p></td>
<td><p>Tamed Plaguehound</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1054</p></td>
<td><p>1055</p></td>
</tr>
<tr class="odd">
<td><p>1906</p></td>
<td><p>Spotted Gryphon</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1055</p></td>
<td><p>1054</p></td>
</tr>
<tr class="even">
<td><p>1907</p></td>
<td><p>Test Faction 1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>949</p></td>
<td><p>948</p></td>
</tr>
<tr class="odd">
<td><p>1908</p></td>
<td><p>Test Faction 1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>949</p></td>
<td><p>948</p></td>
</tr>
<tr class="even">
<td><p>1909</p></td>
<td><p>Beast - Raptor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>9</p></td>
<td><p>14</p></td>
<td><p>42</p></td>
</tr>
<tr class="odd">
<td><p>1910</p></td>
<td><p>Vrykul (Ancient Spirit 1)</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1056</p></td>
</tr>
<tr class="even">
<td><p>1911</p></td>
<td><p>Vrykul (Ancient Siprit 2)</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1057</p></td>
</tr>
<tr class="odd">
<td><p>1912</p></td>
<td><p>Vrykul (Ancient Siprit 3)</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1058</p></td>
</tr>
<tr class="even">
<td><p>1913</p></td>
<td><p>CTF - Flag - Alliance</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1059</p></td>
</tr>
<tr class="odd">
<td><p>1914</p></td>
<td><p>Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1067 1085</p></td>
<td><p>1045</p></td>
</tr>
<tr class="even">
<td><p>1915</p></td>
<td><p>Test</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1060</p></td>
</tr>
<tr class="odd">
<td><p>1916</p></td>
<td><p>Maiev</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1010</p></td>
<td><p>932 934 1012 1033</p></td>
</tr>
<tr class="even">
<td><p>1917</p></td>
<td><p>Creature</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>7</p></td>
</tr>
<tr class="odd">
<td><p>1918</p></td>
<td><p>Horde Expedition</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>679</p></td>
<td><p>1052</p></td>
</tr>
<tr class="even">
<td><p>1919</p></td>
<td><p>Vrykul Gladiator</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1063</p></td>
<td><p>1062</p></td>
</tr>
<tr class="odd">
<td><p>1920</p></td>
<td><p>Valgarde Combatant</p></td>
<td><p>3</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>1062</p></td>
<td><p>1063</p></td>
</tr>
<tr class="even">
<td><p>1921</p></td>
<td><p>The Taunka</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1064</p></td>
</tr>
<tr class="odd">
<td><p>1922</p></td>
<td><p>The Taunka</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1064</p></td>
</tr>
<tr class="even">
<td><p>1923</p></td>
<td><p>The Taunka</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1064</p></td>
</tr>
<tr class="odd">
<td><p>1924</p></td>
<td><p>Monster, Zone Force Reaction 1</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1065</p></td>
</tr>
<tr class="even">
<td><p>1925</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>9</p></td>
<td><p>14</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1926</p></td>
<td><p>Explorers' League</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>1068</p></td>
</tr>
<tr class="even">
<td><p>1927</p></td>
<td><p>Explorers' League</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>1068</p></td>
</tr>
<tr class="odd">
<td><p>1928</p></td>
<td><p>The Hand of Vengeance</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1067 1052</p></td>
</tr>
<tr class="even">
<td><p>1929</p></td>
<td><p>The Hand of Vengeance</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1067 1052</p></td>
</tr>
<tr class="odd">
<td><p>1930</p></td>
<td><p>Ram Racing Powerup DND</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1069</p></td>
</tr>
<tr class="even">
<td><p>1931</p></td>
<td><p>Ram Racing Trap DND</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1070</p></td>
</tr>
<tr class="odd">
<td><p>1932</p></td>
<td><p>Elemental</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>14</p></td>
<td><p>74</p></td>
</tr>
<tr class="even">
<td><p>1933</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>1934</p></td>
<td><p>Actor Good</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>960</p></td>
<td><p>959</p></td>
</tr>
<tr class="even">
<td><p>1935</p></td>
<td><p>Actor Good</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>960</p></td>
<td><p>959</p></td>
</tr>
<tr class="odd">
<td><p>1936</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1937</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1938</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1939</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1940</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1941</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1942</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>960</p></td>
</tr>
<tr class="even">
<td><p>1943</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1944</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1945</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>15</p></td>
<td><p>15</p></td>
<td><p>15</p></td>
<td><p><br />
</p></td>
<td><p>1071 551 189</p></td>
</tr>
<tr class="odd">
<td><p>1947</p></td>
<td><p>Craig's Squirrels</p></td>
<td><p>15</p></td>
<td><p>15</p></td>
<td><p>15</p></td>
<td><p><br />
</p></td>
<td><p>1071 551 189</p></td>
</tr>
<tr class="even">
<td><p>1948</p></td>
<td><p>Blue</p></td>
<td><p>1</p></td>
<td><p>2</p></td>
<td><p>1</p></td>
<td><p>469</p></td>
<td><p>921</p></td>
</tr>
<tr class="odd">
<td><p>1949</p></td>
<td><p>The Kalu'ak</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1046</p></td>
<td><p>1073</p></td>
</tr>
<tr class="even">
<td><p>1950</p></td>
<td><p>The Kalu'ak</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1073</p></td>
</tr>
<tr class="odd">
<td><p>1951</p></td>
<td><p>Darnassus</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p>22 29</p></td>
<td><p>69</p></td>
</tr>
<tr class="even">
<td><p>1952</p></td>
<td><p>Holiday - Water Barrel</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1074</p></td>
</tr>
<tr class="odd">
<td><p>1953</p></td>
<td><p>Monster, Predator</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>974</p></td>
<td><p>973</p></td>
</tr>
<tr class="even">
<td><p>1954</p></td>
<td><p>Iron Dwarves</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1076</p></td>
</tr>
<tr class="odd">
<td><p>1955</p></td>
<td><p>Iron Dwarves</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1076</p></td>
</tr>
<tr class="even">
<td><p>1956</p></td>
<td><p>Shattered Sun Offensive</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1077</p></td>
</tr>
<tr class="odd">
<td><p>1957</p></td>
<td><p>Shattered Sun Offensive</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1077</p></td>
</tr>
<tr class="even">
<td><p>1958</p></td>
<td><p>Actor Evil</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>959</p></td>
<td><p>960</p></td>
</tr>
<tr class="odd">
<td><p>1959</p></td>
<td><p>Actor Evil</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>959</p></td>
<td><p>960</p></td>
</tr>
<tr class="even">
<td><p>1960</p></td>
<td><p>Shattered Sun Offensive</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1077</p></td>
</tr>
<tr class="odd">
<td><p>1961</p></td>
<td><p>Fighting Vanity Pet</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p>0</p></td>
<td><p>1078</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1962</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>73</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>1963</p></td>
<td><p>Demon</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>20</p></td>
<td><p>73</p></td>
</tr>
<tr class="even">
<td><p>1964</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>73</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>1965</p></td>
<td><p>Monster Spar</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>966</p></td>
<td><p>965</p></td>
</tr>
<tr class="even">
<td><p>1966</p></td>
<td><p>Murloc</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>60</p></td>
<td><p>19</p></td>
</tr>
<tr class="odd">
<td><p>1967</p></td>
<td><p>Shattered Sun Offensive</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1077</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1968</p></td>
<td><p>Murloc, Winterfin</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>19</p></td>
<td><p>1079</p></td>
</tr>
<tr class="odd">
<td><p>1969</p></td>
<td><p>Murloc</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1079</p></td>
<td><p>19</p></td>
</tr>
<tr class="even">
<td><p>1970</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1079</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>1971</p></td>
<td><p>Friendly, Force Reaction</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1080</p></td>
</tr>
<tr class="even">
<td><p>1972</p></td>
<td><p>Object, Force Reaction</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1973</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>1050</p></td>
</tr>
<tr class="even">
<td><p>1974</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>1084 20</p></td>
<td><p>1050</p></td>
</tr>
<tr class="odd">
<td><p>1975</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1050</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>1976</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>679</p></td>
<td><p>1050</p></td>
</tr>
<tr class="odd">
<td><p>1977</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>1050</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>1978</p></td>
<td><p>Warsong Offensive</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1085</p></td>
</tr>
<tr class="odd">
<td><p>1979</p></td>
<td><p>Warsong Offensive</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1085</p></td>
</tr>
<tr class="even">
<td><p>1980</p></td>
<td><p>Warsong Offensive</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p>20</p></td>
<td><p>1085</p></td>
</tr>
<tr class="odd">
<td><p>1981</p></td>
<td><p>Warsong Offensive</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1085</p></td>
</tr>
<tr class="even">
<td><p>1982</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1085</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>1983</p></td>
<td><p>Monster Spar</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>966</p></td>
<td><p>965</p></td>
</tr>
<tr class="even">
<td><p>1984</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>965</p></td>
<td><p>966</p></td>
</tr>
<tr class="odd">
<td><p>1985</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>20</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>1986</p></td>
<td><p>Escortee</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p>1057 1058 1056</p></td>
<td><p>40</p></td>
</tr>
<tr class="odd">
<td><p>1987</p></td>
<td><p>Cenarion Expedition</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1086</p></td>
<td><p>942 148</p></td>
</tr>
<tr class="even">
<td><p>1988</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1050</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>1989</p></td>
<td><p>Poacher</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>148 942</p></td>
<td><p>1086</p></td>
</tr>
<tr class="even">
<td><p>1990</p></td>
<td><p>Ambient</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>148 942</p></td>
</tr>
<tr class="odd">
<td><p>1991</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>14 148</p></td>
<td><p>928 20</p></td>
</tr>
<tr class="even">
<td><p>1992</p></td>
<td><p>Monster</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>9</p></td>
<td><p>14</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>1993</p></td>
<td><p>Monster Spar</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>966</p></td>
<td><p>965</p></td>
</tr>
<tr class="even">
<td><p>1994</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>965</p></td>
<td><p>966</p></td>
</tr>
<tr class="odd">
<td><p>1995</p></td>
<td><p>CTF - Flag - Alliance</p></td>
<td><p>0</p></td>
<td><p>5</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1059</p></td>
</tr>
<tr class="even">
<td><p>1997</p></td>
<td><p>CTF - Flag - Alliance</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>1059</p></td>
</tr>
<tr class="odd">
<td><p>1998</p></td>
<td><p>Holiday Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1087</p></td>
</tr>
<tr class="even">
<td><p>1999</p></td>
<td><p>Monster, Prey</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>974</p></td>
</tr>
<tr class="odd">
<td><p>2000</p></td>
<td><p>Monster, Prey</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>974</p></td>
</tr>
<tr class="even">
<td><p>2001</p></td>
<td><p>Furbolg, Redfang</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>1089</p></td>
<td><p>1088</p></td>
</tr>
<tr class="odd">
<td><p>2003</p></td>
<td><p>Furbolg, Frostpaw</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>1088</p></td>
<td><p>1089</p></td>
</tr>
<tr class="even">
<td><p>2004</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>20</p></td>
<td><p>1050</p></td>
</tr>
<tr class="odd">
<td><p>2005</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1050</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>2006</p></td>
<td><p>Kirin Tor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1090</p></td>
</tr>
<tr class="odd">
<td><p>2007</p></td>
<td><p>Kirin Tor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1090</p></td>
</tr>
<tr class="even">
<td><p>2008</p></td>
<td><p>Kirin Tor</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1090</p></td>
</tr>
<tr class="odd">
<td><p>2009</p></td>
<td><p>Kirin Tor</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1090</p></td>
</tr>
<tr class="even">
<td><p>2010</p></td>
<td><p>The Wyrmrest Accord</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1091</p></td>
</tr>
<tr class="odd">
<td><p>2011</p></td>
<td><p>The Wyrmrest Accord</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1091</p></td>
</tr>
<tr class="even">
<td><p>2012</p></td>
<td><p>The Wyrmrest Accord</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1091</p></td>
</tr>
<tr class="odd">
<td><p>2013</p></td>
<td><p>The Wyrmrest Accord</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1091</p></td>
</tr>
<tr class="even">
<td><p>2014</p></td>
<td><p>Azjol-Nerub</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1092</p></td>
</tr>
<tr class="odd">
<td><p>2016</p></td>
<td><p>Azjol-Nerub</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>1092</p></td>
</tr>
<tr class="even">
<td><p>2017</p></td>
<td><p>Azjol-Nerub</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1092</p></td>
</tr>
<tr class="odd">
<td><p>2018</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1092</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>2019</p></td>
<td><p>The Taunka</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>20</p></td>
<td><p>1064</p></td>
</tr>
<tr class="odd">
<td><p>2020</p></td>
<td><p>Warsong Offensive</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1085</p></td>
</tr>
<tr class="even">
<td><p>2021</p></td>
<td><p>REUSE</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>1082</p></td>
</tr>
<tr class="odd">
<td><p>2022</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>2023</p></td>
<td><p>Scourge Invaders</p></td>
<td><p>9</p></td>
<td><p>0</p></td>
<td><p>6</p></td>
<td><p>14 148</p></td>
<td><p>928 20</p></td>
</tr>
<tr class="odd">
<td><p>2024</p></td>
<td><p>The Hand of Vengeance</p></td>
<td><p>5</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1067</p></td>
</tr>
<tr class="even">
<td><p>2025</p></td>
<td><p>The Silver Covenant</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>67</p></td>
<td><p>1094</p></td>
</tr>
<tr class="odd">
<td><p>2026</p></td>
<td><p>The Silver Covenant</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>67</p></td>
<td><p>1094</p></td>
</tr>
<tr class="even">
<td><p>2027</p></td>
<td><p>The Silver Covenant</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>67</p></td>
<td><p>1094</p></td>
</tr>
<tr class="odd">
<td><p>2028</p></td>
<td><p>Ambient</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>2029</p></td>
<td><p>Monster, Predator</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>974 28</p></td>
<td><p>973</p></td>
</tr>
<tr class="odd">
<td><p>2030</p></td>
<td><p>Monster, Predator</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>974 28</p></td>
<td><p>973</p></td>
</tr>
<tr class="even">
<td><p>2031</p></td>
<td><p>Horde Generic</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>2032</p></td>
<td><p>Grizzly Hills Trapper</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>1095</p></td>
</tr>
<tr class="even">
<td><p>2033</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>56</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>2034</p></td>
<td><p>Warsong Offensive</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>2</p></td>
<td><p>1095</p></td>
<td><p>1085</p></td>
</tr>
<tr class="even">
<td><p>2035</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>31</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>2036</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p>20</p></td>
<td><p>31</p></td>
</tr>
<tr class="even">
<td><p>2037</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>148</p></td>
<td><p>1050</p></td>
</tr>
<tr class="odd">
<td><p>2038</p></td>
<td><p>Ambient</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1050</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>2039</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1050</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>2040</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>14</p></td>
<td><p>1050</p></td>
</tr>
<tr class="even">
<td><p>2041</p></td>
<td><p>The Wyrmrest Accord</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>1091</p></td>
</tr>
<tr class="odd">
<td><p>2042</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1091</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>2043</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1050 1085</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>2044</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>1</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>20</p></td>
<td><p>1050</p></td>
</tr>
<tr class="even">
<td><p>2045</p></td>
<td><p>Warsong Offensive</p></td>
<td><p>0</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>20</p></td>
<td><p>1085</p></td>
</tr>
<tr class="odd">
<td><p>2046</p></td>
<td><p>Escortee</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>2047</p></td>
<td><p>The Kalu'ak</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>965</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>2048</p></td>
<td><p>Scourge Invaders</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>928 20</p></td>
</tr>
<tr class="even">
<td><p>2049</p></td>
<td><p>Scourge Invaders</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>928 20</p></td>
</tr>
<tr class="odd">
<td><p>2050</p></td>
<td><p>Knights of the Ebon Blade</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1098</p></td>
</tr>
<tr class="even">
<td><p>2051</p></td>
<td><p>Knights of the Ebon Blade</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1098</p></td>
</tr>
<tr class="odd">
<td><p>2052</p></td>
<td><p>Wrathgate Scourge</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1050 1085 1101 1100</p></td>
<td><p>1099</p></td>
</tr>
<tr class="even">
<td><p>2053</p></td>
<td><p>Wrathgate Alliance</p></td>
<td><p>1</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>20 1099</p></td>
<td><p>1100</p></td>
</tr>
<tr class="odd">
<td><p>2054</p></td>
<td><p>Wrathgate Horde</p></td>
<td><p>0</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>20 1099</p></td>
<td><p>1101</p></td>
</tr>
<tr class="even">
<td><p>2055</p></td>
<td><p>Monster Spar</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>966</p></td>
<td><p>965</p></td>
</tr>
<tr class="odd">
<td><p>2056</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>965</p></td>
<td><p>966</p></td>
</tr>
<tr class="even">
<td><p>2057</p></td>
<td><p>Monster, Zone Force Reaction 2</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1066</p></td>
</tr>
<tr class="odd">
<td><p>2058</p></td>
<td><p>CTF - Flag - Horde</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1102</p></td>
</tr>
<tr class="even">
<td><p>2059</p></td>
<td><p>CTF - Flag - Neutral</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1103</p></td>
</tr>
<tr class="odd">
<td><p>2060</p></td>
<td><p>Frenzyheart Tribe</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1104</p></td>
</tr>
<tr class="even">
<td><p>2061</p></td>
<td><p>Frenzyheart Tribe</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1105</p></td>
<td><p>1104</p></td>
</tr>
<tr class="odd">
<td><p>2062</p></td>
<td><p>Frenzyheart Tribe</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1105</p></td>
<td><p>1104</p></td>
</tr>
<tr class="even">
<td><p>2063</p></td>
<td><p>The Oracles</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1105</p></td>
</tr>
<tr class="odd">
<td><p>2064</p></td>
<td><p>The Oracles</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1104</p></td>
<td><p>1105</p></td>
</tr>
<tr class="even">
<td><p>2065</p></td>
<td><p>The Oracles</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>14</p></td>
<td><p>1105</p></td>
</tr>
<tr class="odd">
<td><p>2066</p></td>
<td><p>The Oracles</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1104</p></td>
<td><p>1105</p></td>
</tr>
<tr class="even">
<td><p>2067</p></td>
<td><p>The Wyrmrest Accord</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>8</p></td>
<td><p>14</p></td>
<td><p>1091</p></td>
</tr>
<tr class="odd">
<td><p>2068</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1107 1106 959</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>2069</p></td>
<td><p>Troll, Drakkari</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1106 20</p></td>
<td><p>1107</p></td>
</tr>
<tr class="odd">
<td><p>2070</p></td>
<td><p>Argent Crusade</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1106</p></td>
</tr>
<tr class="even">
<td><p>2071</p></td>
<td><p>Argent Crusade</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1106</p></td>
</tr>
<tr class="odd">
<td><p>2072</p></td>
<td><p>Argent Crusade</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1106</p></td>
</tr>
<tr class="even">
<td><p>2073</p></td>
<td><p>Argent Crusade</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1107 20</p></td>
<td><p>1106</p></td>
</tr>
<tr class="odd">
<td><p>2074</p></td>
<td><p>Caverns of Time - Durnholde</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>986 987</p></td>
</tr>
<tr class="even">
<td><p>2075</p></td>
<td><p>CoT Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1108</p></td>
<td><p>1110</p></td>
</tr>
<tr class="odd">
<td><p>2076</p></td>
<td><p>CoT Arthas</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1110 1109</p></td>
<td><p>1108</p></td>
</tr>
<tr class="even">
<td><p>2077</p></td>
<td><p>CoT Arthas</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1110 1109</p></td>
<td><p>1108</p></td>
</tr>
<tr class="odd">
<td><p>2078</p></td>
<td><p>CoT Stratholme Citizen</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1109</p></td>
</tr>
<tr class="even">
<td><p>2079</p></td>
<td><p>CoT Arthas</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1110 1109</p></td>
<td><p>1108</p></td>
</tr>
<tr class="odd">
<td><p>2080</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1111</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>2081</p></td>
<td><p>Freya</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>1111</p></td>
</tr>
<tr class="odd">
<td><p>2082</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>2083</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>2084</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>529 56</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>2085</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>529 56</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>2086</p></td>
<td><p>Argent Dawn</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>529</p></td>
</tr>
<tr class="even">
<td><p>2087</p></td>
<td><p>Argent Dawn</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>529</p></td>
</tr>
<tr class="odd">
<td><p>2088</p></td>
<td><p>Actor Evil</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>20 56</p></td>
<td><p>960</p></td>
</tr>
<tr class="even">
<td><p>2089</p></td>
<td><p>Scarlet Crusade</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>20 529</p></td>
<td><p>56</p></td>
</tr>
<tr class="odd">
<td><p>2090</p></td>
<td><p>Mount - Taxi - Alliance</p></td>
<td><p>2</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1112</p></td>
</tr>
<tr class="even">
<td><p>2091</p></td>
<td><p>Mount - Taxi - Horde</p></td>
<td><p>4</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1113</p></td>
</tr>
<tr class="odd">
<td><p>2092</p></td>
<td><p>Mount - Taxi - Neutral</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1114</p></td>
</tr>
<tr class="even">
<td><p>2093</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>959</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>2094</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>2095</p></td>
<td><p>Scarlet Crusade</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>20 529</p></td>
<td><p>56</p></td>
</tr>
<tr class="odd">
<td><p>2096</p></td>
<td><p>Scarlet Crusade</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>20 529</p></td>
<td><p>56</p></td>
</tr>
<tr class="even">
<td><p>2097</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>2098</p></td>
<td><p>Elemental, Air</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1115</p></td>
<td><p>1116</p></td>
</tr>
<tr class="even">
<td><p>2099</p></td>
<td><p>Elemental, Water</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1116</p></td>
<td><p>1115</p></td>
</tr>
<tr class="odd">
<td><p>2100</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p>529 56</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>2101</p></td>
<td><p>Actor Evil</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>959</p></td>
<td><p>960</p></td>
</tr>
<tr class="odd">
<td><p>2102</p></td>
<td><p>Actor Evil</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>959</p></td>
<td><p>960</p></td>
</tr>
<tr class="even">
<td><p>2103</p></td>
<td><p>Scarlet Crusade</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>20 529</p></td>
<td><p>56</p></td>
</tr>
<tr class="odd">
<td><p>2104</p></td>
<td><p>Monster Spar</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>966</p></td>
<td><p>965</p></td>
</tr>
<tr class="even">
<td><p>2105</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>1</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>965</p></td>
<td><p>966</p></td>
</tr>
<tr class="odd">
<td><p>2106</p></td>
<td><p>Ambient</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>28</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>2107</p></td>
<td><p>The Sons of Hodir</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1120 1121</p></td>
<td><p>1119</p></td>
</tr>
<tr class="odd">
<td><p>2108</p></td>
<td><p>Iron Giants</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1119</p></td>
<td><p>1120</p></td>
</tr>
<tr class="even">
<td><p>2109</p></td>
<td><p>Frost Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1121</p></td>
</tr>
<tr class="odd">
<td><p>2110</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>31</p></td>
</tr>
<tr class="even">
<td><p>2111</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>31</p></td>
<td><p>14</p></td>
</tr>
<tr class="odd">
<td><p>2112</p></td>
<td><p>The Sons of Hodir</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1121</p></td>
<td><p>1119</p></td>
</tr>
<tr class="even">
<td><p>2113</p></td>
<td><p>Frost Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1119</p></td>
<td><p>1121</p></td>
</tr>
<tr class="odd">
<td><p>2114</p></td>
<td><p>Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1045 20</p></td>
</tr>
<tr class="even">
<td><p>2115</p></td>
<td><p>Actor Good</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p>1107 20</p></td>
<td><p>959</p></td>
</tr>
<tr class="odd">
<td><p>2116</p></td>
<td><p>Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>1045</p></td>
</tr>
<tr class="even">
<td><p>2117</p></td>
<td><p>Actor Good</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p>1107 20</p></td>
<td><p>959</p></td>
</tr>
<tr class="odd">
<td><p>2118</p></td>
<td><p>Earthen</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1120</p></td>
<td><p>1122</p></td>
</tr>
<tr class="even">
<td><p>2119</p></td>
<td><p>Monster Referee</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>965 966 1123</p></td>
</tr>
<tr class="odd">
<td><p>2120</p></td>
<td><p>Monster Referee</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p><br />
</p></td>
<td><p>965 966 1123</p></td>
</tr>
<tr class="even">
<td><p>2121</p></td>
<td><p>The Sunreavers</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1124</p></td>
</tr>
<tr class="odd">
<td><p>2122</p></td>
<td><p>The Sunreavers</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1124</p></td>
</tr>
<tr class="even">
<td><p>2123</p></td>
<td><p>The Sunreavers</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1124</p></td>
</tr>
<tr class="odd">
<td><p>2124</p></td>
<td><p>Monster</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1119</p></td>
<td><p>14</p></td>
</tr>
<tr class="even">
<td><p>2125</p></td>
<td><p>Frost Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
<td><p>1121</p></td>
</tr>
<tr class="odd">
<td><p>2126</p></td>
<td><p>Frost Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>148</p></td>
<td><p>1121</p></td>
</tr>
<tr class="even">
<td><p>2127</p></td>
<td><p>Ambient</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1121</p></td>
<td><p>148</p></td>
</tr>
<tr class="odd">
<td><p>2128</p></td>
<td><p>Hyldsmeet</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>1125</p></td>
<td><p>1125</p></td>
</tr>
<tr class="even">
<td><p>2129</p></td>
<td><p>The Sunreavers</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>10</p></td>
<td><p><br />
</p></td>
<td><p>1124</p></td>
</tr>
<tr class="odd">
<td><p>2130</p></td>
<td><p>The Silver Covenant</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p>67</p></td>
<td><p>1094</p></td>
</tr>
<tr class="even">
<td><p>2131</p></td>
<td><p>Argent Crusade</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1107 20</p></td>
<td><p>1106</p></td>
</tr>
<tr class="odd">
<td><p>2132</p></td>
<td><p>Warsong Offensive</p></td>
<td><p>5</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>1085</p></td>
</tr>
<tr class="even">
<td><p>2133</p></td>
<td><p>Frost Vrykul</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>1119</p></td>
<td><p>1121</p></td>
</tr>
<tr class="odd">
<td><p>2134</p></td>
<td><p>Argent Crusade</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>1106</p></td>
</tr>
<tr class="even">
<td><p>2135</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>2136</p></td>
<td><p>Ambient</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>148</p></td>
</tr>
<tr class="even">
<td><p>2137</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>148</p></td>
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>2138</p></td>
<td><p>Argent Crusade</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1107 20</p></td>
<td><p>1106</p></td>
</tr>
<tr class="even">
<td><p>2139</p></td>
<td><p>Scourge Invaders</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>68 72</p></td>
<td><p>928 20</p></td>
</tr>
<tr class="odd">
<td><p>2140</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>31</p></td>
</tr>
<tr class="even">
<td><p>2141</p></td>
<td><p>Friendly</p></td>
<td><p>0</p></td>
<td><p>1</p></td>
<td><p>8</p></td>
<td><p><br />
</p></td>
<td><p>31</p></td>
</tr>
<tr class="odd">
<td><p>2142</p></td>
<td><p>Alliance</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>12</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>2143</p></td>
<td><p>Valiance Expedition</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>1085</p></td>
<td><p>1050</p></td>
</tr>
<tr class="odd">
<td><p>2144</p></td>
<td><p>Knights of the Ebon Blade</p></td>
<td><p>1</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>1098</p></td>
</tr>
<tr class="even">
<td><p>2145</p></td>
<td><p>Scourge Invaders</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>14 148</p></td>
<td><p>928 20</p></td>
</tr>
<tr class="odd">
<td><p>2148</p></td>
<td><p>The Kalu'ak</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1073</p></td>
</tr>
<tr class="even">
<td><p>2150</p></td>
<td><p>Monster Spar Buddy</p></td>
<td><p>8</p></td>
<td><p>8</p></td>
<td><p>1</p></td>
<td><p>965</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>2155</p></td>
<td><p>Ironforge</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p>47</p></td>
</tr>
<tr class="even">
<td><p>2156</p></td>
<td><p>Monster, Predator</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>973</p></td>
</tr>
<tr class="odd">
<td><p>2176</p></td>
<td><p>Actor Good</p></td>
<td><p>4</p></td>
<td><p>4</p></td>
<td><p>2</p></td>
<td><p>960</p></td>
<td><p>959</p></td>
</tr>
<tr class="even">
<td><p>2178</p></td>
<td><p>Actor Good</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>4</p></td>
<td><p>960</p></td>
<td><p>959</p></td>
</tr>
<tr class="odd">
<td><p>2189</p></td>
<td><p>Hates Everything</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p><br />
</p></td>
<td><p>1145</p></td>
</tr>
<tr class="even">
<td><p>2190</p></td>
<td><p>Hates Everything</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p><br />
</p></td>
<td><p>1145</p></td>
</tr>
<tr class="odd">
<td><p>2191</p></td>
<td><p>Hates Everything</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>15</p></td>
<td><p><br />
</p></td>
<td><p>1145</p></td>
</tr>
<tr class="even">
<td><p>2209</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1098 1106</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>2210</p></td>
<td><p>Silvermoon City</p></td>
<td><p>4</p></td>
<td><p>7</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p>2212</p></td>
<td><p>Undead, Scourge</p></td>
<td><p>8</p></td>
<td><p>0</p></td>
<td><p>7</p></td>
<td><p>1098 1106</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>2214</p></td>
<td><p>Knights of the Ebon Blade</p></td>
<td><p>1</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>1098 529</p></td>
</tr>
<tr class="even">
<td><p>2216</p></td>
<td><p>The Ashen Verdict</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1106 1156 1098</p></td>
</tr>
<tr class="odd">
<td><p>2217</p></td>
<td><p>The Ashen Verdict</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p><br />
</p></td>
<td><p>1106 1156 1098</p></td>
</tr>
<tr class="even">
<td><p>2218</p></td>
<td><p>The Ashen Verdict</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>1106 1156 1098</p></td>
</tr>
<tr class="odd">
<td><p>2219</p></td>
<td><p>The Ashen Verdict</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>1106 1156 1098</p></td>
</tr>
<tr class="even">
<td><p>2226</p></td>
<td><p>Knights of the Ebon Blade</p></td>
<td><p>1</p></td>
<td><p>6</p></td>
<td><p>0</p></td>
<td><p>20</p></td>
<td><p>1098 529</p></td>
</tr>
<tr class="odd">
<td><p>2230</p></td>
<td><p>Argent Crusade</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>0</p></td>
<td><p>1107 20</p></td>
<td><p>1106</p></td>
</tr>
<tr class="even">
<td><p>2235</p></td>
<td><p>CTF - Flag - Horde 2</p></td>
<td><p>0</p></td>
<td><p>5</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p>2236</p></td>
<td><p>CTF - Flag - Alliance 2</p></td>
<td><p>0</p></td>
<td><p>3</p></td>
<td><p>4</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>


