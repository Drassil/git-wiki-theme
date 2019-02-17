# The Modular Structure

The project of AzerothCore is based on a fully modular structure that is composed by:

- Custom Modules
- Core Modules

**CUSTOM MODULES:**

The main purpose of AzerothCore modules is to add/extend functionalities to your server avoiding as much possible the modification of AzerothCore code ( patching ).

Currently you are able to:

Create scripts that don’t need any patches for CMake / ScriptLoader

Use script hooks that can operate from the very first start of the server ( as soon as the World initialization starts ) In this way you can handle / overwrite the server configurations.

Use cmake special hooks, allowing you to inject your instructions during specific events ( e.g. after/before game library configuration )

Create, Install and load your custom .conf files during the server startup, avoiding worldserver.conf.dist patching.

Install other module dependencies using udw/joiner , a special bash script used by AzerothCore to maintain deps.

Create and use include.sh in your root directory to interact with our bash system ( extend db_assembler, runner, compiler etc )

*NOTE: *Even if core file modification is not suggested by AzerothCore project, developing as much as possible under your module and patching the core with small rows of code could be a good practice. You can eventually provide an install/uninstall script that can automatically patch/unpatch the core using our bash system.


Read guide on [[how to create a module|Create-a-Module]]

**CORE MODULES:**

Core modules instead are composed by following projects: 

- AzerothCore: The platform that includes all shared tools and sources to develop a WoW Server
- World Engine: Our MMO framework on which the AzerothCore is based
- HW-Core: Generic Libraries for c++
- UWD: Generic tools used by our project

You can see a model of the Software Layers here:

![](https://docs.google.com/drawings/d/1shtfCXLg_IRezf3XeUJ0fF5u6cVkMcmjEyA6wURwvME/pub?w=1440&h=1080)

