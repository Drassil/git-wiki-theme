This is the tutorial to upgrade any existing server from a version prior to the [2.0.0 release](https://github.com/azerothcore/azerothcore-wotlk/releases/tag/v2.0.0) to the latest `master` version.

**Note**: it is always recommended to backup your database before doing any update.

### Step 1. Upgrade to last 2.0.0 commit

You need first to update your server to [this commit](https://github.com/azerothcore/azerothcore-wotlk/commit/1fc22a74088e235e78fa02decbaf0864899477d7), running:

`git checkout 1fc22a74088e235e78fa02decbaf0864899477d7`

Now update your **database** as [you normally do](Update#3-update-the-database).

### Step 2. Upgrade to latest master

Update to latest master:

`git checkout master; git pull;`

**Note**: if you are using your own fork of AC, as usual, you have to [sync it](Syncing-your-fork)

Now update your **core and database** (again) as [you normally do](Update).
