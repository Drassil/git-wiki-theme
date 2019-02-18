Before start we suggest you to read [Documentation about modular structure](The-Modular-Structure) to understand the way AzerothCore works.

## **How to create a module**


### Resources

- Module template: [https://github.com/azerothcore/skeleton-module](https://github.com/azerothcore/skeleton-module)
- Script template: https://github.com/azerothcore/azerothcore-boilerplates
- All the hooks in the core are listed in [ScriptMgr.cpp](https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/server/game/Scripting/ScriptMgr.cpp). If you need custom hooks, they can be added to the core.



### **The Basis**

1. Create a folder inside modules/ directory

2. Create a CMakeLists.txt file in the root path of your module
it will be automatically detected by cmake when you [re]configure your project.

3. Now you can develop add anything to the main project, such as some scripts or 
even an entire library

Note: we suggest to use the [directory structure](Directory-Structure) standards of AzerothCore to better organize your modules and be familiar with main project.

### **Add the first script**

1. Before continue, we suggest you to follow our guide on how to create a script for AzerothCore

2. After you’ve created your script you’ve to create a .h file to handle the script loading.

  For example ( Assuming you’ve created an src folder ):

  **src/loader.h**

     `void AddMyCustomScripts();`

  NOTE: AddMyCustomScripts is composed by: 

  Add (Prefix)

  MyCustom (An unique name identifier for your script to avoid function collisions)

  Scripts ( Suffix )

3. Now you’ve to include your loader in your cmake using a simple MACRO ( Assuming that your script is called MyCustom.cpp ):

```
AC_ADD_SCRIPT("${CMAKE_CURRENT_LIST_DIR}/src/MyCustom.cpp")
AC_ADD_SCRIPT_LOADER("MyCustom" "${CMAKE_CURRENT_LIST_DIR}/src/loader.h")
```

First parameter is your module identifier

Second parameter is the path of your loader header. 

Now you can add all scripts you want to your server just creating their instances inside AddMyCustomScripts() function, or using cmake macro above.

### **Create a custom configuration file**

if you need to add a custom configuration file to your module that will be installed with server, the steps are very simple.

Before starting, you should have created the loader files described previously.

1. Create a world script with this basic structure:


```
    #include "Configuration/Config.h"
    #include "ScriptMgr.h"

    class MyWorldScript : public WorldScript

    {
    public:

        MyWorldScript() : WorldScript("MyWorldScript") { }

        void OnBeforeConfigLoad(bool reload) override
        {
            if (!reload) {
                std::string conf_path = _CONF_DIR;
                std::string cfg_file = conf_path + "/my_custom.conf";
                sConfigMgr->LoadMore(cfg_file.c_str());
            }
        }
    };

    void AddMyWorldScripts()
    {
        new MyWorldScript();
    }
```

2. Add your AddMyWorldScripts to your CMakeLists.txt created before

3. Create a cmake file that must be loaded after binary installation and add this to your module CMakeLists.txt:

  ```
  ADD_HOOK(AFTER_WORLDSERVER_CMAKE "${CMAKE_CURRENT_LIST_DIR}/after_ws_install.cmake")
  ```

  of course you can call your file as you want , the AFTER_WORLDSERVER_CMAKE hook will be launched as soon as AzerothCore prepare the worldserver installation.

4. Inside this new cmake file you’ve to put this instructions:

```
install(FILES "${CMAKE_SOURCE_DIR}/your_path/my_custom.conf.dist" DESTINATION ${CONF_DIR})
```

Change "your_path" part with path to your conf file, for example:

/modules/my_module/conf/my_custom.conf.dist

### **Add your db files to db_assembler**

you are able to create base, updates and custom sql that will be automatically loaded in our db_assembler

**work in progress….**
