We are using the semantic versioning standard:

http://semver.org/spec/v2.0.0.html

For instance, we can have: **1.5.1** that corresponds to: **MAJOR.MINOR.PATCH**

More in depth:

**MAJOR** version when you make incompatible API / DB structure changes

**MINOR** version when you add functionality in a backwards-compatible manner

**PATCH** version when you make backwards-compatible bug fixes.

Additional labels for branches ( such as -rc , -dev etc. ) are available as extensions to the MAJOR.MINOR.PATCH format.

* **PHASE 1: Developing Phase**: During the developing phase, we will use the master branch where we can freely make changes to API, DB and all things that could break compatibility with old revisions. 
At the beginning of each development phase, we will clean the sql/updates folders archiving old SQLs.

  N.B. 
  * Some big jobs, such as rewriting/implementing features, could be not ready for next revision and eventually they will be planned for a future one, so they will be kept in dedicated branches instead of master. 
  * Using master branch you will have immediate access to new awesome features, but you must take care since some commits can break stability in some rare cases.

* **PHASE 2: Content fixes**: At start of this phase we will publish first <stable> release ( x.0.0 ) and we will:

  1) create a branch for it

  2) export base db with updates included, but we will keep files in sql/updates to allow you easily upgrading from a previous release 

  3) create a downloadable github release and a dedicated wiki page for documentation.

  During this phase we will continue to fix mechanics and contents without break compatibility with API, DB etc.


* **PHASE 3: Only Stability and security fixes**: In this phase we will stop to import mechanic / content fix and we will offer support to only security and stability issues. For example: if a function generates a crash for a null pointer, we will fix it.

  We could eventually extends this phase if requested by many people.

* **PHASE 4: End of Life ( EOL )**: We will archive that release keeping documentation and branch ofc. You can continue to use/download it, but we won't offer any official support of any kind

![Versioning](https://docs.google.com/spreadsheets/d/1W0fqLhfbh9N4NIjcKYqpfifdAGHEQatPfy1bxzpHWds/pubchart?oid=379908243&format=image)

