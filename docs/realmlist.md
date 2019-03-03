# realmlist

[<-Back-to:Auth](database-auth.md)

**The \`realmlist\` table**

This table sets up information on all available realms. Each row controls a different realm.

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
<td><p><a href="#id">id</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p>PRI</p></td>
<td><p>NO</p></td>
<td><p><br />
</p></td>
<td><p>Auto increment</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#name">name</a></p></td>
<td><p>varchar(32)</p></td>
<td><p>signed</p></td>
<td><p>UNI</p></td>
<td><p>NO</p></td>
<td><p>Trinity</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="even">
<td><p><a href="#address">address</a></p></td>
<td><p>varchar(255)</p></td>
<td><p>signed</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>127.0.0.1</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><a href="#localaddress">localAddress</a></td>
<td>varchar(255)</td>
<td>signed</td>
<td><br />
</td>
<td>NO</td>
<td>127.0.0.1</td>
<td><br />
</td>
<td><br />
</td>
</tr>
<tr class="even">
<td><p><a href="#port">port</a></p></td>
<td><p>smallint(5)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>8085</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
<tr class="odd">
<td><p><a href="#icon">icon</a></p></td>
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
<td><p><a href="#flag">flag</a></p></td>
<td><p>tinyint(3)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>2</p></td>
<td><p><br />
</p></td>
<td><p>Updates population status or realm status</p></td>
</tr>
<tr class="odd">
<td><p><a href="#timezone">timezone</a></p></td>
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
<td><p><a href="#allowedsecuritylevel">allowedSecurityLevel</a></p></td>
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
<td><p><a href="#population">population</a></p></td>
<td><p>float</p></td>
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
<td><p><a href="#gamebuild">gamebuild</a></p></td>
<td><p>int(10)</p></td>
<td><p>unsigned</p></td>
<td><p><br />
</p></td>
<td><p>NO</p></td>
<td><p>12340</p></td>
<td><p><br />
</p></td>
<td><p><br />
</p></td>
</tr>
</tbody>
</table>

**Description of the fields**

### id

The realm ID. This number is unique for every realm and it MUST correlate with the RealmID configuration value in worldserver.conf.

### name

The name of the realm. This will appear in the realm selection list as well as in the character selection screen.

### address

The public (WAN) or LAN IP address of the world server. Use 127.0.0.1 in this field if only you is connecting to the server (and it runs on the same machine as your client).

Alternatively you can use a domain name like *example.com.*

### localAddress

Mostly 127.0.0.1

### port

The port that the world server is running on. If all world servers are on the same machine, they will all need to use a different port.

### icon

The icon of the realm.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Icon</p></th>
<th><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0</p></td>
<td><p>Normal</p></td>
</tr>
<tr class="even">
<td><p>1</p></td>
<td><p>PvP</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Normal</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>RP</p></td>
</tr>
<tr class="odd">
<td><p>8</p></td>
<td><p>RP PvP</p></td>
</tr>
</tbody>
</table>

### flag

Realmflag of this realm.

| Flag | Hex value | Description  |
|------|-----------|--------------|
| 0    | 0x0       | None         |
| 1    | 0x1       | Invalid      |
| 2    | 0x2       | Offline      |
| 4    | 0x4       | SpecifyBuild |
| 8    | 0x8       | Medium       |
| 16   | 0xF       | Medium       |
| 32   | 0x10      | New Players  |
| 64   | 0x20      | Recommended  |
| 128  | 0x40      | Full         |

### timezone

The realm timezone, it will be displayed in the tabs of the realmlist

<table>
<thead>
<tr class="header">
<th><p>timezone</p></th>
<th><p>displayed name</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>Development</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>United States</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>Oceanic</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Latin America</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>Tournament</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>Korea</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>Tournament</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>English</p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>German</p></td>
</tr>
<tr class="even">
<td><p>10</p></td>
<td><p>French</p></td>
</tr>
<tr class="odd">
<td><p>11</p></td>
<td><p>Spanish</p></td>
</tr>
<tr class="even">
<td><p>12</p></td>
<td><p>Russian</p></td>
</tr>
<tr class="odd">
<td><p>13</p></td>
<td><p>Tournament</p></td>
</tr>
<tr class="even">
<td><p>14</p></td>
<td><p>Taiwan</p></td>
</tr>
<tr class="odd">
<td><p>15</p></td>
<td><p>Tournament</p></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>China</p></td>
</tr>
<tr class="odd">
<td><p>17</p></td>
<td><p>CN1</p></td>
</tr>
<tr class="even">
<td><p>18</p></td>
<td><p>CN2</p></td>
</tr>
<tr class="odd">
<td><p>19</p></td>
<td><p>CN3</p></td>
</tr>
<tr class="even">
<td><p>20</p></td>
<td><p>CN4</p></td>
</tr>
<tr class="odd">
<td><p>21</p></td>
<td><p>CN5</p></td>
</tr>
<tr class="even">
<td><p>22</p></td>
<td><p>CN6</p></td>
</tr>
<tr class="odd">
<td><p>23</p></td>
<td><p>CN7</p></td>
</tr>
<tr class="even">
<td><p>24</p></td>
<td><p>CN8</p></td>
</tr>
<tr class="odd">
<td><p>25</p></td>
<td><p>Tournament</p></td>
</tr>
<tr class="even">
<td><p>26</p></td>
<td><p>Test Server</p></td>
</tr>
<tr class="odd">
<td><p>27</p></td>
<td><p>Tournament</p></td>
</tr>
<tr class="even">
<td>29</td>
<td>CN9</td>
</tr>
<tr class="odd">
<td>30</td>
<td>Test Server 2</td>
</tr>
<tr class="even">
<td><p>31</p></td>
<td><p>CN10</p></td>
</tr>
<tr class="odd">
<td>32</td>
<td>CTC</td>
</tr>
<tr class="even">
<td><p>33</p></td>
<td><p>CNC</p></td>
</tr>
<tr class="odd">
<td><p>34</p></td>
<td><p>CN1/4</p></td>
</tr>
<tr class="even">
<td>35</td>
<td><p>CN/2/6/9</p></td>
</tr>
<tr class="odd">
<td>36</td>
<td><p>CN3/7</p></td>
</tr>
<tr class="even">
<td><p>37</p></td>
<td><p>Russian Tournament</p></td>
</tr>
<tr class="odd">
<td>38</td>
<td>CN5/8</td>
</tr>
<tr class="even">
<td>39</td>
<td>CN11</td>
</tr>
<tr class="odd">
<td>40</td>
<td>CN12</td>
</tr>
<tr class="even">
<td>41</td>
<td>CN13</td>
</tr>
<tr class="odd">
<td>42</td>
<td>CN14</td>
</tr>
<tr class="even">
<td>43</td>
<td>CN15</td>
</tr>
<tr class="odd">
<td>44</td>
<td>CN16</td>
</tr>
<tr class="even">
<td>45</td>
<td>CN17</td>
</tr>
<tr class="odd">
<td>46</td>
<td>CN18</td>
</tr>
<tr class="even">
<td>47</td>
<td>CN19</td>
</tr>
<tr class="odd">
<td>48</td>
<td>CN20</td>
</tr>
<tr class="even">
<td>49</td>
<td>Brazil</td>
</tr>
<tr class="odd">
<td>50</td>
<td>Italian</td>
</tr>
<tr class="even">
<td>51</td>
<td>Hyrule</td>
</tr>
<tr class="odd">
<td>52</td>
<td>QA2 Test</td>
</tr>
<tr class="even">
<td>53</td>
<td><br />
</td>
</tr>
<tr class="odd">
<td>54</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>55</td>
<td>Recommended Realm</td>
</tr>
<tr class="odd">
<td>56</td>
<td>Test</td>
</tr>
<tr class="even">
<td>57</td>
<td>Recommended Realm</td>
</tr>
<tr class="odd">
<td>58</td>
<td><br />
</td>
</tr>
<tr class="even">
<td>59</td>
<td>Future Test</td>
</tr>
</tbody>
</table>

### allowedSecurityLevel

The minimum account gmlevel required for accounts to log in to this realm. Changing this value will automatically update the visible in-game realm list, but the Worldserver must be restarted for it to truly take effect.

### population

This field is automatically updated at regular intervals and will have the current population. The formula to calculate the value in this field is: playerCount / maxPlayerCount \* 2. In the realm list in-game, the thresholds for low, medium, and high population are 0.5, 1.0, and 2.0 respectively.

### gamebuild

Accepted Client version for the realm.

| Build Version | Client Patch |
|---------------|--------------|
| 5875          | 1.12.1       |
| 6005          | 1.12.2       |
| 8606          | 2.4.3        |
| 9947          | 3.1.3        |
| 10146         | 3.2.0        |
| 10505         | 3.2.2a       |
| 10571         | 3.3.0        |
| 11159         | 3.3.0a       |
| 11403         | 3.3.2        |
| 11623         | 3.3.3        |
| 11723         | 3.3.3a       |
| 12340         | 3.3.5a       |

## Attachments:

![](images/icons/bullet_blue.gif){width="8" height="8"} [1.jpg](attachments/2130016/73202494.jpg) (image/jpeg)

