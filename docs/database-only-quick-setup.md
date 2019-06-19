# AC Database-only quick setup

This tutorial explains how to quickly setup an instance of the AC Database.


### Introduction

Sometimes you need an AzerothCore DB up and running without having to setup the whole server,
for example to use applications like [Keira3](https://github.com/azerothcore/Keira3) or similar.

With this setup, you do **not** have to install MySQL server in your system.

### Requirements

The only requirements are git and Docker (including `docker-compose`).
You can find the links to setup Docker for your operating system in the "Software requirements" category of 
[this page](http://www.azerothcore.org/wiki/Install-with-Docker#setup).

### Clone the AC sources

You need to clone the AC sources somewhere in your machine and cd into it:

```
git clone https://github.com/azerothcore/azerothcore-wotlk.git;
cd azerothcore-wotlk;
```

### How to quickly spin up an AzerothCore Database instance

You can easily create an instance of MySQL server containing the AC database using:

```
docker-compose up ac-database
```

Alternatively, you can pass the `-d` parameter to run this command in detach mode:

```
docker-compose up -d ac-database
```

The default password will be `password` and the default port will be `3306`.

If you want to chance those values, run the following instead:

```
DB_EXTERNAL_PORT=9000 DB_ROOT_PASSWORD=root docker-compose up ac-database
```

### Destroy the docker instance of the AC Database

You can destroy the containers created with docker-compose using:

```
docker-compose down
```

