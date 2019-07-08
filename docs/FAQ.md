## COMMON QUESTIONS

#### 1 - How can I contribute? I am not a developer, I know nothing useful.

- You can help us by testing our [Pull Requests](Contribute#how-to-test-a-pull-request), and participating on the github issues' discussions. You can also provide support when you can in our discord, on the popular [stackoverflow](https://stackoverflow.com/questions/tagged/azerothcore) and on other emulation forums (ac-web.org for example). You can also help us with documentation (this wiki, or the readme), we need help with that too!
- You can put bounties (money) on issues and suggestions by using bountysource. Read this: [Bountysource](Bountysource.md)
- If you're a developer, check out this page: Contribute

#### 2 - Why is AzerothCore using more ram than TrinityCore?

AzerothCore is based on SunwellCore (a fork from TC). SunwellCore was a public server with 4000 players online and they made sure their core could handle that amount of player easily. Reading data from the ram is much faster than reading from the hard disk (there are entire systems based on this principle). That's one of the reason there is a bigger ram usage.

#### 3 - I want this fixed or this feature or this module. How can I proceed?

You can open a bounty and if developers are interested by the job, they might do it. Read this: [Bountysource](Bountysource.md)

#### 4 - I have an issue, where can I get help?

Read this carefully: [How to ask help](How-to-ask-for-help.md)

#### 5 - Why is it better to ask on Stackoverflow for support questions?

- because your question (and its solutions) **stays there** and you or other users **can find it later**, even using **google**

- because your question can easily **get lost in the chat**, and asking in the chat can only get answers by the users who are **currently online**

- because it's **super easy** (you can log in Stackoverflow using your **Google** or **Facebook** account - **NO NEED TO CREATE A NEW ACCOUNT**)

- because by posting questions or answers you can earn **points** (a profile with many points Stackoverflow can help A LOT when you want to find a job as a developer)

- because you can add common **tags** to your questions (like `c++`, `sql`, `docker`, `lua`, etc...) and have the chance to  **get helped by many more users** than you would find in the AC discord chat

- because gives extra **visibility** to our project

- because it helps to **avoid duplicate questions**



## COMMON ERRORS

#### 1 - Mysql has gone away

Change the max packet size in your mysql configuration (and report on our github which SQL file is to be incriminated). Check this https://stackoverflow.com/search?q=2006+-+MySQL+server+has+gone+away
