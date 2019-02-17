[[Database Structure|Database Structure]] > [[World-Database|World-Database]] > [[quest_template|quest_template]]

Column | Type | Description
--- | --- | ---
ID | mediumint(8) unsigned | 
QuestType | tinyint(3) unsigned | 
QuestLevel | smallint(3) | 
MinLevel | tinyint(3) unsigned | 
QuestSortID | smallint(6) | 
QuestInfoID | smallint(5) unsigned | 
SuggestedGroupNum | tinyint(3) unsigned | 
RequiredFactionId1 | smallint(5) unsigned | 
RequiredFactionId2 | smallint(5) unsigned | 
RequiredFactionValue1 | mediumint(8) | 
RequiredFactionValue2 | mediumint(8) | 
RewardNextQuest | mediumint(8) unsigned | 
RewardXPDifficulty | tinyint(3) unsigned | 
RewardMoney | int(11) | 
RewardBonusMoney | int(10) unsigned | 
RewardDisplaySpell | mediumint(8) unsigned | 
RewardSpell | int(11) | 
RewardHonor | int(11) | 
RewardKillHonor | float | 
StartItem | mediumint(8) unsigned | 
Flags | int(10) unsigned | 
RequiredPlayerKills | tinyint(3) unsigned | 
RewardItem1 | mediumint(8) unsigned | 
RewardItem2 | mediumint(8) unsigned | 
RewardItem3 | mediumint(8) unsigned | 
RewardItem4 | mediumint(8) unsigned | 
RewardAmount1 | smallint(5) unsigned | 
RewardAmount2 | smallint(5) unsigned | 
RewardAmount3 | smallint(5) unsigned | 
RewardAmount4 | smallint(5) unsigned | 
ItemDrop1 | mediumint(8) unsigned | 
ItemDropQuantity1 | smallint(5) unsigned | 
ItemDrop2 | mediumint(8) unsigned | 
ItemDropQuantity2 | smallint(5) unsigned | 
ItemDrop3 | mediumint(8) unsigned | 
ItemDropQuantity3 | smallint(5) unsigned | 
ItemDrop4 | mediumint(8) unsigned | 
ItemDropQuantity4 | smallint(5) unsigned | 
RewardChoiceItemID1 | mediumint(8) unsigned | 
RewardChoiceItemID2 | mediumint(8) unsigned | 
RewardChoiceItemID3 | mediumint(8) unsigned | 
RewardChoiceItemID4 | mediumint(8) unsigned | 
RewardChoiceItemID5 | mediumint(8) unsigned | 
RewardChoiceItemID6 | mediumint(8) unsigned | 
RewardChoiceItemQuantity1 | smallint(5) unsigned | 
RewardChoiceItemQuantity2 | smallint(5) unsigned | 
RewardChoiceItemQuantity3 | smallint(5) unsigned | 
RewardChoiceItemQuantity4 | smallint(5) unsigned | 
RewardChoiceItemQuantity5 | smallint(5) unsigned | 
RewardChoiceItemQuantity6 | smallint(5) unsigned | 
POIContinent | smallint(5) unsigned | 
POIx | float | 
POIy | float | 
POIPriority | mediumint(8) unsigned | 
RewardTitle | tinyint(3) unsigned | 
RewardTalents | tinyint(3) unsigned | 
RewardArenaPoints | smallint(5) unsigned | 
RewardFactionID1 | smallint(5) unsigned | 
RewardFactionID2 | smallint(5) unsigned | 
RewardFactionID3 | smallint(5) unsigned | 
RewardFactionID4 | smallint(5) unsigned | 
RewardFactionID5 | smallint(5) unsigned | 
RewardFactionValue1 | mediumint(8) | 
RewardFactionValue2 | mediumint(8) | 
RewardFactionValue3 | mediumint(8) | 
RewardFactionValue4 | mediumint(8) | 
RewardFactionValue5 | mediumint(8) | 
RewardFactionOverride1 | mediumint(8) | 
RewardFactionOverride2 | mediumint(8) | 
RewardFactionOverride3 | mediumint(8) | 
RewardFactionOverride4 | mediumint(8) | 
RewardFactionOverride5 | mediumint(8) | 
TimeAllowed | int(10) unsigned | 
AllowableRaces | smallint(5) unsigned | 
LogTitle | text | 
LogDescription | text | 
QuestDescription | text | 
AreaDescription | text | 
OfferRewardText | text | 
RequestItemsText | text | 
QuestCompletionLog | text | 
RequiredNpcOrGo1 | mediumint(8) | 
RequiredNpcOrGo2 | mediumint(8) | 
RequiredNpcOrGo3 | mediumint(8) | 
RequiredNpcOrGo4 | mediumint(8) | 
RequiredNpcOrGoCount1 | smallint(5) unsigned | 
RequiredNpcOrGoCount2 | smallint(5) unsigned | 
RequiredNpcOrGoCount3 | smallint(5) unsigned | 
RequiredNpcOrGoCount4 | smallint(5) unsigned | 
RequiredItemId1 | mediumint(8) unsigned | 
RequiredItemId2 | mediumint(8) unsigned | 
RequiredItemId3 | mediumint(8) unsigned | 
RequiredItemId4 | mediumint(8) unsigned | 
RequiredItemId5 | mediumint(8) unsigned | 
RequiredItemId6 | mediumint(8) unsigned | 
RequiredItemCount1 | smallint(5) unsigned | 
RequiredItemCount2 | smallint(5) unsigned | 
RequiredItemCount3 | smallint(5) unsigned | 
RequiredItemCount4 | smallint(5) unsigned | 
RequiredItemCount5 | smallint(5) unsigned | 
RequiredItemCount6 | smallint(5) unsigned | 
Unknown0 | tinyint(3) unsigned | 
ObjectiveText1 | text | 
ObjectiveText2 | text | 
ObjectiveText3 | text | 
ObjectiveText4 | text | 
DetailsEmote1 | smallint(5) unsigned | 
DetailsEmote2 | smallint(5) unsigned | 
DetailsEmote3 | smallint(5) unsigned | 
DetailsEmote4 | smallint(5) unsigned | 
DetailsEmoteDelay1 | int(10) unsigned | 
DetailsEmoteDelay2 | int(10) unsigned | 
DetailsEmoteDelay3 | int(10) unsigned | 
DetailsEmoteDelay4 | int(10) unsigned | 
EmoteOnIncomplete | smallint(5) unsigned | 
EmoteOnComplete | smallint(5) unsigned | 
OfferRewardEmote1 | smallint(5) unsigned | 
OfferRewardEmote2 | smallint(5) unsigned | 
OfferRewardEmote3 | smallint(5) unsigned | 
OfferRewardEmote4 | smallint(5) unsigned | 
OfferRewardEmoteDelay1 | int(10) unsigned | 
OfferRewardEmoteDelay2 | int(10) unsigned | 
OfferRewardEmoteDelay3 | int(10) unsigned | 
OfferRewardEmoteDelay4 | int(10) unsigned | 
VerifiedBuild | smallint(6) | 
