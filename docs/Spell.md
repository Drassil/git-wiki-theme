# Spell

`Back-to:DBC`

# **Spell.dbc**

This DBC contains most information on all spells.
These values are used by the core and a few spell\_\* tables.

**Version 3.3.5**

## **Structure**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>ID</strong></p></td>
<td><p><strong>Name</strong></p></td>
<td><p><strong>Type</strong></p></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>Entry</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>Category</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Dispel</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>Mechanic</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>Attributes</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>AttributesEx</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>AttributesEx2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>AttributesEx3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>AttributesEx4</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>AttributesEx5</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>10</p></td>
<td><p>AttributesEx6</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>11</p></td>
<td><p>AttributesEx7</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>12</p></td>
<td><p>Stances</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>13</p></td>
<td><p>unk_320_2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>14</p></td>
<td><p>StancesNot</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>15</p></td>
<td><p>unk_320_3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>Targets</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>17</p></td>
<td><p>TargetCreatureType</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>18</p></td>
<td><p><a href="#Spell-RequiresSpellFocus">requiresSpellFocus</a></p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>19</p></td>
<td><p>FacingCasterFlags</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>20</p></td>
<td><p>CasterAuraState</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>21</p></td>
<td><p>TargetAuraState</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>22</p></td>
<td><p>CasterAuraStateNot</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>23</p></td>
<td><p>TargetAuraStateNot</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>24</p></td>
<td><p>casterAuraSpell</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>25</p></td>
<td><p>targetAuraSpell</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>26</p></td>
<td><p>excludeCasterAuraSpell</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>27</p></td>
<td><p>excludeTargetAuraSpell</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>28</p></td>
<td><p>CastingTimeIndex</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>29</p></td>
<td><p>RecoveryTime</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>30</p></td>
<td><p>CategoryRecoveryTime</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>31</p></td>
<td><p>InterruptFlags</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td><p>AuraInterruptFlags</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>33</p></td>
<td><p>ChannelInterruptFlags</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>34</p></td>
<td><p>procFlags</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>35</p></td>
<td><p>procChance</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>36</p></td>
<td><p>procCharges</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>37</p></td>
<td><p>maxLevel</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>38</p></td>
<td><p>baseLevel</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>39</p></td>
<td><p>spellLevel</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>40</p></td>
<td><p>DurationIndex</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>41</p></td>
<td><p><a href="#Spell-powerType">powerType</a></p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>42</p></td>
<td><p>manaCost</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>43</p></td>
<td><p>manaCostPerlevel</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>44</p></td>
<td><p>manaPerSecond</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>45</p></td>
<td><p>manaPerSecondPerLevel</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>46</p></td>
<td><p>rangeIndex</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>47</p></td>
<td><p>speed</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>48</p></td>
<td><p>modalNextSpell</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>49</p></td>
<td><p>StackAmount</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>50</p></td>
<td><p>Totem1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>51</p></td>
<td><p>Totem2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>52</p></td>
<td><p>Reagent1</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>53</p></td>
<td><p>Reagent2</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>54</p></td>
<td><p>Reagent3</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>55</p></td>
<td><p>Reagent4</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>56</p></td>
<td><p>Reagent5</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>57</p></td>
<td><p>Reagent6</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>58</p></td>
<td><p>Reagent7</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>59</p></td>
<td><p>Reagent8</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>60</p></td>
<td><p>ReagentCount1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>61</p></td>
<td><p>ReagentCount2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>62</p></td>
<td><p>ReagentCount3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>63</p></td>
<td><p>ReagentCount4</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>64</p></td>
<td><p>ReagentCount5</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>65</p></td>
<td><p>ReagentCount6</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>66</p></td>
<td><p>ReagentCount7</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>67</p></td>
<td><p>ReagentCount8</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>68</p></td>
<td><p>EquippedItemClass</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>69</p></td>
<td><p>EquippedItemSubClassMask</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>70</p></td>
<td><p>EquippedItemInventoryTypeMask</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>71</p></td>
<td><p>Effect1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>72</p></td>
<td><p>Effect2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>73</p></td>
<td><p>Effect3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>74</p></td>
<td><p>EffectDieSides1</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>75</p></td>
<td><p>EffectDieSides2</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>76</p></td>
<td><p>EffectDieSides3</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>77</p></td>
<td><p>EffectRealPointsPerLevel1</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>78</p></td>
<td><p>EffectRealPointsPerLevel2</p></td>
<td><p>float</p></td>
</tr>
<tr class="odd">
<td><p>79</p></td>
<td><p>EffectRealPointsPerLevel3</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>80</p></td>
<td><p>EffectBasePoints1</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>81</p></td>
<td><p>EffectBasePoints2</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>82</p></td>
<td><p>EffectBasePoints3</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>83</p></td>
<td><p>EffectMechanic1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>84</p></td>
<td><p>EffectMechanic2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>85</p></td>
<td><p>EffectMechanic3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>86</p></td>
<td><p>EffectImplicitTargetA1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>87</p></td>
<td><p>EffectImplicitTargetA2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>88</p></td>
<td><p>EffectImplicitTargetA3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>89</p></td>
<td><p>EffectImplicitTargetB1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>90</p></td>
<td><p>EffectImplicitTargetB2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>91</p></td>
<td><p>EffectImplicitTargetB3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>92</p></td>
<td><p>EffectRadiusIndex1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>93</p></td>
<td><p>EffectRadiusIndex2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>94</p></td>
<td><p>EffectRadiusIndex3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>95</p></td>
<td><p>EffectApplyAuraName1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>96</p></td>
<td><p>EffectApplyAuraName2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>97</p></td>
<td><p>EffectApplyAuraName3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>98</p></td>
<td><p>EffectAmplitude1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>99</p></td>
<td><p>EffectAmplitude2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>100</p></td>
<td><p>EffectAmplitude3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>101</p></td>
<td><p>EffectValueMultiplier1</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>102</p></td>
<td><p>EffectValueMultiplier2</p></td>
<td><p>float</p></td>
</tr>
<tr class="odd">
<td><p>103</p></td>
<td><p>EffectValueMultiplier3</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>104</p></td>
<td><p>EffectChainTarget1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>105</p></td>
<td><p>EffectChainTarget2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>106</p></td>
<td><p>EffectChainTarget3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>107</p></td>
<td><p>EffectItemType1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>108</p></td>
<td><p>EffectItemType2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>109</p></td>
<td><p>EffectItemType3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>110</p></td>
<td><p>EffectMiscValue1</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>111</p></td>
<td><p>EffectMiscValue2</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>112</p></td>
<td><p>EffectMiscValue3</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>113</p></td>
<td><p>EffectMiscValueB1</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>114</p></td>
<td><p>EffectMiscValueB2</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>115</p></td>
<td><p>EffectMiscValueB3</p></td>
<td><p>int</p></td>
</tr>
<tr class="even">
<td><p>116</p></td>
<td><p>EffectTriggerSpell1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>117</p></td>
<td><p>EffectTriggerSpell2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>118</p></td>
<td><p>EffectTriggerSpell3</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>119</p></td>
<td><p>EffectPointsPerComboPoint1</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>120</p></td>
<td><p>EffectPointsPerComboPoint2</p></td>
<td><p>float</p></td>
</tr>
<tr class="odd">
<td><p>121</p></td>
<td><p>EffectPointsPerComboPoint3</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>122</p></td>
<td><p>EffectSpellClassMask1</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="odd">
<td><p>123</p></td>
<td><p>EffectSpellClassMask2</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="even">
<td><p>124</p></td>
<td><p>EffectSpellClassMask3</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="odd">
<td><p>125</p></td>
<td><p>EffectSpellClassMask4</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="even">
<td><p>126</p></td>
<td><p>EffectSpellClassMask5</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="odd">
<td><p>127</p></td>
<td><p>EffectSpellClassMask6</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="even">
<td><p>128</p></td>
<td><p>EffectSpellClassMask7</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="odd">
<td><p>129</p></td>
<td><p>EffectSpellClassMask8</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="even">
<td><p>130</p></td>
<td><p>EffectSpellClassMask9</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="odd">
<td><p>131</p></td>
<td><p>SpellVisual1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>132</p></td>
<td><p>SpellVisual2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>133</p></td>
<td><p>SpellIconID</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>134</p></td>
<td><p>activeIconID</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>135</p></td>
<td><p>spellPriority</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>136</p></td>
<td><p>SpellName_0</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>137</p></td>
<td><p>SpellName_1</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>138</p></td>
<td><p>SpellName_2</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>139</p></td>
<td><p>SpellName_3</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>140</p></td>
<td><p>SpellName_4</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>141</p></td>
<td><p>SpellName_5</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>142</p></td>
<td><p>SpellName_6</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>143</p></td>
<td><p>SpellName_7</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>144</p></td>
<td><p>SpellName_8</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>145</p></td>
<td><p>SpellName_9</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>146</p></td>
<td><p>SpellName_10</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>147</p></td>
<td><p>SpellName_11</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>148</p></td>
<td><p>SpellName_12</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>149</p></td>
<td><p>SpellName_13</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>150</p></td>
<td><p>SpellName_14</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>151</p></td>
<td><p>SpellName_15</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>152</p></td>
<td><p>SpellNameFlag</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>153</p></td>
<td><p>Rank_0</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>154</p></td>
<td><p>Rank_1</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>155</p></td>
<td><p>Rank_2</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>156</p></td>
<td><p>Rank_3</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>157</p></td>
<td><p>Rank_4</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>158</p></td>
<td><p>Rank_5</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>159</p></td>
<td><p>Rank_6</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>160</p></td>
<td><p>Rank_7</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>161</p></td>
<td><p>Rank_8</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>162</p></td>
<td><p>Rank_9</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>163</p></td>
<td><p>Rank_10</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>164</p></td>
<td><p>Rank_11</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>165</p></td>
<td><p>Rank_12</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>166</p></td>
<td><p>Rank_13</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>167</p></td>
<td><p>Rank_14</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>168</p></td>
<td><p>Rank_15</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>169</p></td>
<td><p>RankFlags</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>170</p></td>
<td><p>Description_0</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>171</p></td>
<td><p>Description_1</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>172</p></td>
<td><p>Description_2</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>173</p></td>
<td><p>Description_3</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>174</p></td>
<td><p>Description_4</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>175</p></td>
<td><p>Description_5</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>176</p></td>
<td><p>Description_6</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>177</p></td>
<td><p>Description_7</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>178</p></td>
<td><p>Description_8</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>179</p></td>
<td><p>Description_9</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>180</p></td>
<td><p>Description_10</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>181</p></td>
<td><p>Description_11</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>182</p></td>
<td><p>Description_12</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>183</p></td>
<td><p>Description_13</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>184</p></td>
<td><p>Description_14</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>185</p></td>
<td><p>Description_15</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>186</p></td>
<td><p>DescriptionFlags</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>187</p></td>
<td><p>ToolTip_0</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>188</p></td>
<td><p>ToolTip_1</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>189</p></td>
<td><p>ToolTip_2</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>190</p></td>
<td><p>ToolTip_3</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>191</p></td>
<td><p>ToolTip_4</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>192</p></td>
<td><p>ToolTip_5</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>193</p></td>
<td><p>ToolTip_6</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>194</p></td>
<td><p>ToolTip_7</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>195</p></td>
<td><p>ToolTip_8</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>196</p></td>
<td><p>ToolTip_9</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>197</p></td>
<td><p>ToolTip_10</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>198</p></td>
<td><p>ToolTip_11</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>199</p></td>
<td><p>ToolTip_12</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>200</p></td>
<td><p>ToolTip_13</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>201</p></td>
<td><p>ToolTip_14</p></td>
<td><p>string</p></td>
</tr>
<tr class="even">
<td><p>202</p></td>
<td><p>ToolTip_15</p></td>
<td><p>string</p></td>
</tr>
<tr class="odd">
<td><p>203</p></td>
<td><p>ToolTipFlags</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>204</p></td>
<td><p>ManaCostPercentage</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>205</p></td>
<td><p>StartRecoveryCategory</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>206</p></td>
<td><p>StartRecoveryTime</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>207</p></td>
<td><p>MaxTargetLevel</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>208</p></td>
<td><p>SpellFamilyName</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>209</p></td>
<td><p>SpellFamilyFlagsLow</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="even">
<td><p>210</p></td>
<td><p>SpellFamilyFlagsHigh</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="odd">
<td><p>211</p></td>
<td><p>SpellFamilyFlags2</p></td>
<td><p>flag96</p></td>
</tr>
<tr class="even">
<td><p>212</p></td>
<td><p>MaxAffectedTargets</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>213</p></td>
<td><p>DmgClass</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>214</p></td>
<td><p>PreventionType</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>215</p></td>
<td><p>StanceBarOrder</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>216</p></td>
<td><p>EffectDamageMultiplier1</p></td>
<td><p>float</p></td>
</tr>
<tr class="odd">
<td><p>217</p></td>
<td><p>EffectDamageMultiplier2</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>218</p></td>
<td><p>EffectDamageMultiplier3</p></td>
<td><p>float</p></td>
</tr>
<tr class="odd">
<td><p>219</p></td>
<td><p>MinFactionId</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>220</p></td>
<td><p>MinReputation</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>221</p></td>
<td><p>RequiredAuraVision</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>222</p></td>
<td><p>TotemCategory1</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>223</p></td>
<td><p>TotemCategory2</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>224</p></td>
<td><p>AreaGroupId</p></td>
<td><p>int</p></td>
</tr>
<tr class="odd">
<td><p>225</p></td>
<td><p>SchoolMask</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>226</p></td>
<td><p>runeCostID</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>227</p></td>
<td><p>spellMissileID</p></td>
<td><p>uint</p></td>
</tr>
<tr class="even">
<td><p>228</p></td>
<td><p>PowerDisplayId</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>229</p></td>
<td><p>EffectBonusMultiplier1</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>230</p></td>
<td><p>EffectBonusMultiplier2</p></td>
<td><p>float</p></td>
</tr>
<tr class="odd">
<td><p>231</p></td>
<td><p>EffectBonusMultiplier3</p></td>
<td><p>float</p></td>
</tr>
<tr class="even">
<td><p>232</p></td>
<td><p>spellDescriptionVariableID</p></td>
<td><p>uint</p></td>
</tr>
<tr class="odd">
<td><p>233</p></td>
<td><p>SpellDifficultyId</p></td>
<td><p>uint</p></td>
</tr>
</tbody>
</table>

## **Category**

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>ID</strong></p></td>
<td><p><strong>Description</strong></p></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>Default</p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>Summon guards</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>Entry</p></td>
</tr>
<tr class="odd">
<td><p>4</p></td>
<td><p>Entry</p></td>
</tr>
</tbody>
</table>

## **powerType**

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>ID</strong></p></td>
<td><p><strong>Description</strong></p></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>Mana</p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>Rage</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>?</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>Energy</p></td>
</tr>
</tbody>
</table>

## **RequiresSpellFocus**

Indicates that this spell needs a GO near (e.g. forges).
Required object has the type GAMEOBJECT\_TYPE\_SPELLFOCUS and data0 matches the RequiresSpellFocus value.
