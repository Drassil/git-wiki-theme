# The Modular Structure

Based on our modular domain-based [directory structure](Directory-Structure) , the AzerothCore project allows you to add and extend game features by adding custom isolated modules, without patching the core directly.

This results in always having a clean core that is easy to maintain and to keep it in sync with the latest AzerothCore updates.

## Hooks

### Script hooks

In order to change game features, modules use **script hooks**, which are a collection of functions [implemented into the core](https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Scripting/ScriptMgr.h) and are able to operate from the very beginning of the server (as soon as the World initialization starts).

The list of the script hooks is available [here](Hooks-Script.md).

Sometimes you need to add new hooks for your custom module, it's absolutely possible to add them to the core. There are just a few steps needed in order to create a new hook, you can see an example [here](https://github.com/azerothcore/azerothcore-wotlk/commit/15b1a99b55bf01cd6975cc4da3994778d36edb35) 

When you add new hooks, don't forget to [create a PR](http://www.azerothcore.org/wiki/How-to-create-a-PR) with them. This way, they will be reviewed by the AzerothCore developers and included in the official repo.

### Cmake hooks

CMake hooks allow modules to execute operations during the AzerothCore compilation phase. This can be used, for example, to install and load custom `*.conf` files during the server startup.

So modules can have their own configuration files and you can **avoid patching** the `worldserver.conf.dist` file.

The list of the CMake hooks is available [here](Hooks-Cmake.md).

### Bash hooks

Bash hooks allow modules to interact with the AzerothCore bash dashboard. With it, you can add automated operations whenever the module is added or removed using the AzerothCore bash console.

This can be used, for example, to automatically execute SQL code that would add extra tables in the DB when installing a module, and removing them when uninstalling it.

To interact with our bash system, create and use `include.sh` in your root directory.

The list of the CMake hooks is available [here](Hooks-Bash.md).

## How to create a module

You can get started with creating your first module by reading [how to create a module](Create-a-Module)

