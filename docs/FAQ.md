## COMMON QUESTIONS

#### 1 - How can I contribute? I am not a developer, I know nothing useful.

- You can help us by testing our [Pull Requests](Contribute#how-to-test-a-pull-request), and participating on the github issues' discussions. You can also provide support when you can in our discord, on the popular [stackoverflow](https://stackoverflow.com/questions/tagged/azerothcore) and on other emulation forums (ac-web.org for example). You can also help us with documentation (this wiki, or the readme), we need help with that too!
- If you're a developer, check out this page: Contribute

#### 2 - Why is AzerothCore using more ram than TrinityCore?

AzerothCore is based on SunwellCore (a fork from TC). SunwellCore was a public server with 4000 players online and they made sure their core could handle that amount of player easily. Reading data from the ram is much faster than reading from the hard disk (there are entire systems based on this principle). That's one of the reason there is a bigger ram usage.

#### 3 - I want this fixed or this feature or this module. How can I proceed?

You can open a bounty and if developers are interested by the job, they might do it. Read this: [Bountysource](Bountysource.md)

#### 4 - I have an issue, where can I get help?

Read this carefully: [How to ask help](How-to-ask-for-help.md)


## COMMON ERRORS

#### 1 - Mysql has gone away

Change the max packet size in your mysql configuration (and report on our github which SQL file is to be incriminated). Check this https://stackoverflow.com/search?q=2006+-+MySQL+server+has+gone+away
