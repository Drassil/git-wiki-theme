# Holidays

## holidays.dbc

## Structure

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th>Column</th>
<th>Field</th>
<th>Type</th>
<th>Notes</th>
<th>Extra info</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>eventID</td>
<td>Integer</td>
<td>Holiday event ID</td>
<td> </td>
</tr>
<tr class="even">
<td>1</td>
<td>eventStage1Duration</td>
<td>Integer</td>
<td>Stage1 event length (for stage1, either as preparation or main event. See eventSchedulerType for more info)</td>
<td> </td>
</tr>
<tr class="odd">
<td>2</td>
<td>eventStage2Duration</td>
<td>Integer</td>
<td>Stage2 event length (for stage2, either as main event or cooldown. See eventSchedulerType for more info)</td>
<td> </td>
</tr>
<tr class="even">
<td>11</td>
<td>eventDate</td>
<td>Integer</td>
<td>Packed blizzdate - Epochdate=01.01.2000-00:00 - Year is discarded if column12 is 0</td>
<td> </td>
</tr>
<tr class="odd">
<td>37</td>
<td>Region</td>
<td>integer</td>
<td> ??? (needs more research)</td>
<td> </td>
</tr>
<tr class="even">
<td>38</td>
<td>Looping</td>
<td>integer</td>
<td> ??? (needs more research - used only on Call To Arms events)</td>
<td><pre><code> 283 - Call to Arms: Alterac Valley
 284 - Call to Arms: Warsong Gulch
 285 - Call to Arms: Arathi Basin
 353 - Call to Arms: Eye of the Storm
 400 - Call to Arms: Strand of the Ancient
 420 - Call to Arms: Isle of Conquest</code></pre></td>
</tr>
<tr class="odd">
<td>39</td>
<td>calendarFlags</td>
<td>integer</td>
<td> ??? (needs more research)</td>
<td> </td>
</tr>
<tr class="even">
<td>49</td>
<td>eventCalendarName</td>
<td>iRefID</td>
<td>Ref to <a href="Localization_lang">Loc</a> in HolidayNames.dbc</td>
<td> </td>
</tr>
<tr class="odd">
<td>50</td>
<td>eventCalendarDescription</td>
<td>iRefID</td>
<td>Ref to <a href="Localization_lang">Loc</a> in HolidayDescriptions.dbc</td>
<td> </td>
</tr>
<tr class="even">
<td>51</td>
<td>eventCalendarOverlay</td>
<td>String</td>
<td>Overlay texture used for ingame calendar event-decorations</td>
<td> </td>
</tr>
<tr class="odd">
<td>52</td>
<td>priority</td>
<td>Integer</td>
<td> ??? (needs more research)</td>
<td> </td>
</tr>
<tr class="even">
<td>53</td>
<td>eventSchedulerType</td>
<td>Integer</td>
<td>Definition of which timer is used, see eventSchedulerType below</td>
<td><pre><code> -1: repeat, yearly
  0: repeat, weekly
  1: repeat, use defined dates
  2: repeat, hourly</code></pre></td>
</tr>
<tr class="odd">
<td>54</td>
<td>eventFlags</td>
<td>Integer</td>
<td> ??? (needs more research)</td>
<td> </td>
</tr>
</tbody>
</table>

## eventSchedulerType

    eventSchedulerType defines what kind of timer is used for when the event is to stop, start etc. - and if it uses different stages during it's "buildup"-phase (2 stages available)
     -1: event repeats every year based on column11, column12 etc dates - length and possible event stages is taken from the information given in column1 and column2
         (adjusted in DBC to keep it in line with **yearly** changes) - if column12=0, use DATE only from field11
      0: event repeats every 7 days, with a duration of <eventStage1Duration> hours (hardcoded startdate serverside depending on eventID)
      1: event repeats based on column11, column12 etc values (see -1) - if <eventStage2Duration> exists, use <eventStage1Duration> as event prestage length
      2: event repeats every X hours (with <eventStage2Duration> being the eventPause/eventWait timer)

 
