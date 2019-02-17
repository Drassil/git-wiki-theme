Syncing your fork is always a good idea when you create a Pull Request.

# How to sync your AzerothCore fork

Open your terminal and move to the local clone of your AzerothCore fork.

Switch to your _master_ branch (or whatever branch you need to sync):

`git checkout master`

Then type:

`git remote add upstream https://github.com/azerothcore/azerothcore-wotlk.git`

`git fetch upstream`

`git merge upstream/master`

Then when you are ready to push the changes (e.g. after resolving merge conflicts, if any):

`git push`