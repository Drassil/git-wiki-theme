# Spell system

### How do spells work?

Behavior of each spell is defined in 3 places: database, spell scripts, and spell system code interpreting that database. Mortals should care mostly about first two which are discussed in this article.

### Database

The database part includes data extracted from client loaded from dbc files: 

[Spell](Spell).dbc, ...

As this data is extracted from client. It doesn't contain spells needed only serverside, those need to be added inside supplementary db tables in core which are emulating dbcs and have the same structure: 

[spell\_dbc](spell_dbc) ****Note: ****Not longer used since Warlords of Draenor Expansion (see [Hotfixes](https://trinitycore.atlassian.net/wiki/display/tc/Hotfixes), at least spell, spell\_misc & spell\_effect) 

[spelldifficulty\_dbc](spelldifficulty_dbc)

Data stored in dbcs is extracted from client, ergo it may not be interpreted by TC properly, so it's meaning is a subject of changes and fixing, as dbcs contain most of the data needed by spell system to work.

Data not needed by client for all spells is stored in following tables of world db:

[conditions](conditions) 

-CONDITION\_SOURCE\_TYPE\_SPELL\_IMPLICIT\_TARGET - allows you to define requirements for implicit area targets of the spell, only matching targets will be added to spell target list

-CONDITION\_SOURCE\_TYPE\_SPELL - allows you to define requirements for caster/explicit target of the spell, if not met cast will fail

-CONDITION\_SOURCE\_TYPE\_SPELL\_PROC - allows you to define requirements for actor and actionTarget, if not met proc will fail

-CONDITION\_SOURCE\_TYPE\_SPELL\_CLICK\_EVENT

-CONDITION\_SOURCE\_TYPE\_SPELL\_LOOT\_TEMPLATE

-CONDITION\_SOURCE\_TYPE\_VEHICLE\_SPELL

[spell\_area](spell_area) - defines if aura should be applied to an object in given area

[spell\_enchant\_proc\_data](spell_enchant_proc_data) - defines behavior of item enchant procs

[spell\_group\_stack\_rules](spell_group_stack_rules) - defines stacking rules for each group

[spell\_group](spell_group) - allows grouping spells for convenient handling

[spell\_learn\_spell](spell_learn_spell) - defines that learning a given spell should learn you other spell, if not provided in dbcs

[spell\_linked\_spell](spell_linked_spell) - allows simple triggering spell casts on certain spell events

[spell\_pet\_auras](spell_pet_auras) - defines if a certain aura on pet owner should be linked to other aura on pet

spell\_proc\_event - defines a requirement which needs to be passed for proc event to occur

[spell\_proc](spell_proc) - same as spell\_proc\_event, table in development

[spell\_required](spell_required) - defines requirements for learning a spell

[spell\_ranks](spell_ranks) - implements a concept of spell rank ingame

[spell\_script\_names](spell_script_names) - binds spells to their spell scripts

[spell\_target\_position](spell_target_position) - allows setting target location for certain spells

[spell\_threat](spell_threat) - contains threat data for spells

Developers are expected to fill those tables correctly to make spells work correctly. Please follow links for more details about each table.

### Spell scripts

Spell scripts are a way to provide a means of implementing more complicated behavior, which couldn't be placed in db.

#### Generic structure

``` cpp
// naming scheme: spell_[of who]_[spell name], for example spell_warl_banish, spell_deathwhisper_mana_barrier
class spell_class_your_name_here : public SpellScriptLoader
{
    public:
        //                                                  should be the same as class name - name in "" is the one used by db in SpellScriptNames table
        spell_class_your_name_here () : SpellScriptLoader("spell_class_your_name_here ") { }
 
        // SpellScript object - alters behavior of Spell object ingame
        class spell_class_your_name_here_SpellScript : public SpellScript
        {
            PrepareSpellScript(spell_class_your_name_here_SpellScript);
            // bool Load() {return true;} - optional - allows loading script only in specific circumstances - see Optional loading below
           // bool Validate(SpellInfo const* /*spellInfo*/) - optional - allows checking data integrity - see Validation tests below
            /* hooks here - described below*/

            void Register() {/*hook registration here*/}
        };
        // function creating script object - must be exactly like this one, but with your class name
        SpellScript* GetSpellScript() const
        {
            return new spell_class_your_name_here_SpellScript();
        }
 
        // AuraScript object - alters behavior of Aura object ingame
        class spell_class_your_name_here_AuraScript : public AuraScript
        {
            PrepareAuraScript(spell_class_your_name_here_AuraScript);

            // bool Load() {return true;} - optional - allows loading script only in specific circumstances - see Optional loading below
           // bool Validate(SpellInfo const* /*spellInfo*/) - optional - allows checking data integrity - see Validation tests below
            /* hooks here - described below*/
            void Register() {/*hook registration here*/}
        };
        // function creating script object - must be exactly like this one, but with your class name
        AuraScript* GetAuraScript() const
        {
            return new spell_class_your_name_here_AuraScript();
        }
};
// this function call creates script loader object for us - seek that function at the end of the script file you're adding to
// if there's no such function see How-to_CustomScript
void AddSC_class_spell_scripts()
{
    // an entry for our spell script loader, there may be other entries aswell
    /* ... */
    new spell_class_your_name_here();
}
```

As you see, there are 2 kinds of scripts: SpellScript and AuraScript. You may define both or just one of them in a single script.

#### Binding your script to a spell/spells

To make sure your script is executed you have to do two things (these are c++ requirements, I wish this was simpler).

-   create [spell\_script\_names](spell_script_names) entry - As you've seen above each SpellScript/AuraScript is put inside of SpellScriptLoader class. Constructor of that class contains single parameter, that parameter is the value of ScriptName column inside spell\_script\_names table. The table consists of pairs (spellIdToWhichYouBindTheScript, "spell\_script\_you\_re\_binding"). You can bind one script to many spells or many scripts to one spell. The latter is needed for example when you want to logically separate scripts of a spell when spell is affected by different talents.
-   properly override AuraScript\* GetAuraScript() const or SpellScript\* GetSpellScript() const to create objects of your script
-   make sure SpellScriptLoader of your script is created - add a call in AddSC\_XXXXX function. For more details on that, see [CustomScript](CustomScript)

``` cpp
class spell_warl_unstable_affliction : public SpellScriptLoader
{
    public:
        spell_warl_unstable_affliction() : SpellScriptLoader("spell_warl_unstable_affliction") { }
 
        class spell_warl_unstable_affliction_AuraScript : public AuraScript
        {
            // required PrepareAuraScript macro
            PrepareAuraScript(spell_warl_unstable_affliction_AuraScript);
            /*...*/
        };
        AuraScript* GetAuraScript() const
        {
            return new spell_warl_unstable_affliction_AuraScript();
        }
        /*...*/
};
/*...*/
void AddSC_warlock_spell_scripts()
{
    new spell_warl_unstable_affliction();
/*...*/
}
```

#### Validation tests

Overriding validate function allows you to check if data you're using in your script is present on core load. It's often used to check if spell used in script is still in database, as spells are often removed from client database when client version changes.

When this function will return false, a "Spell \`%u\` did not pass Validate() function of script \`%s\` - script will be not added to the spell" error will appear in log.

You don't need to check for presence of effects you bind hooks to - it's checked automatically and reported on startup by core for your convenience.

##### Example - checks for existence of spells the script is using later:

``` cpp
         bool Validate(SpellInfo const* /*spellInfo*/)
            {
                if (!sSpellMgr->GetSpellInfo(SPELL_WARLOCK_IMPROVED_HEALTHSTONE_R1) || !sSpellMgr->GetSpellInfo(SPELL_WARLOCK_IMPROVED_HEALTHSTONE_R2))
                    return false;
                return true;
            }   
```

#### Optional loading

Sometimes you may decide that you want your script only be present in some cases, bool Load() provides you a way to do so. When the function returns false your script will not be loaded to the object (Aura or Spell) - it will have no effect

##### Example - we want to script only player casts:

``` cpp
            bool Load()
            {
                return GetCaster() && GetCaster()->GetTypeId() == TYPEID_PLAYER;
            }
```

#### AuraScript hooks

TODO![(smile)](images/icons/emoticons/smile.png "(smile)"){.emoticon .emoticon-smile}

#### SpellScript hooks

TODO![(smile)](images/icons/emoticons/smile.png "(smile)"){.emoticon .emoticon-smile}

#### Good practices:

-always use Validate(SpellInfo const\*) function to check all data you use in script for presence

-check for runtime errors, they often signal bad script behaviors

-put full spell name in comment before the script - this helps finding the script by spell name

``` cpp
// 781 - Disengage
class spell_hun_disengage : public SpellScriptLoader
```

#### Practical example on spell scripts

``` cpp
// 781 - Disengage
class spell_hun_disengage : public SpellScriptLoader
{
    public:
        spell_hun_disengage() : SpellScriptLoader("spell_hun_disengage") { }
        class spell_hun_disengage_SpellScript : public SpellScript
        {
            PrepareSpellScript(spell_hun_disengage_SpellScript);
            SpellCastResult CheckCast()
            {
                Unit* caster = GetCaster();
                if (caster->GetTypeId() == TYPEID_PLAYER && !caster->isInCombat())
                    return SPELL_FAILED_CANT_DO_THAT_RIGHT_NOW;
                return SPELL_CAST_OK;
            }
            void Register()
            {
                OnCheckCast += SpellCheckCastFn(spell_hun_disengage_SpellScript::CheckCast);
            }
        };
        SpellScript* GetSpellScript() const
        {
            return new spell_hun_disengage_SpellScript();
        }
};
```

Going through line to line:

TODO![(smile)](images/icons/emoticons/smile.png "(smile)"){.emoticon .emoticon-smile}

-   [How do spells work?](#Spellsystem-Howdospellswork?)
-   [Database](#Spellsystem-Database)
-   [Spell scripts](#Spellsystem-Spellscripts)
    -   [Generic structure](#Spellsystem-Genericstructure)
    -   [Binding your script to a spell/spells](#Spellsystem-Bindingyourscripttoaspell/spells)
    -   [Validation tests](#Spellsystem-Validationtests)
        -   [Example - checks for existence of spells the script is using later:](#Spellsystem-Example-checksforexistenceofspellsthescriptisusinglater:)
    -   [Optional loading](#Spellsystem-Optionalloading)
        -   [Example - we want to script only player casts:](#Spellsystem-Example-wewanttoscriptonlyplayercasts:)
    -   [AuraScript hooks](#Spellsystem-AuraScripthooks)
    -   [SpellScript hooks](#Spellsystem-SpellScripthooks)
    -   [Good practices:](#Spellsystem-Goodpractices:)
    -   [Practical example on spell scripts](#Spellsystem-Practicalexampleonspellscripts)


