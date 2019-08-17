# NOTE: CURRENTLY DISABLED

At AzerothCore, changes are submitted via PRs that are **first tested** and then merged to the `master`branch.

However, some PRs can be hard to test. For example when a PR contains changes that potentially can affect many things. To improve our QA and make sure such modifications don't introduce bugs in the master branch, we created the `staging` branch.

The `staging` branch:

- is updated with the latest master branch
- contains extra changes that will be eventually added to the master branch

if you have a test server where you play just for fun, to try new things or do any kind of experiment, then you can use the staging branch and help the project to find bugs _before_ they even get to master.

If you open an issue report with a bug that you've found in the `staging` branch, remember to mention in the report that you are using `staging` and not `master`.

The staging branch is **not** meant to be used for changes that are straightforward to be tested, even if they are important changes.
