AzerothCore is able to read on multiple .conf file for both authserver and worldserver

In fact our modules are capable of create their own [[configuration files|Create-a-Module#create-a-custom-configuration-file]].

## Why worldserver and authserver needs .conf.dist files to be present in installation path?

It's because AzerothCore use them as a "fallback" for configurations that you don't have on copied .conf file ( for example if we updated the dist or you've removed a conf )

## How configuration files are composed

All configuration files load their properties under 2 macro groups ( you must have one of them on your configuration file header) :

[authserver] -> for authserver configurations

[worldserver] -> for worldserver configurations

A property is composed by a name and a value that will be loaded inside an object at server startup / config reloading.

## How does the multiple .conf file loading works?

At server startup we read first the .dist files and load all propoerties under sConfig object. The .conf file will be loaded Right after: all new properties will be added to the sConfig object , instead properties with the same name overwrite old one from .dist 

This allow you to create tiny .conf file that DOES NOT REQUIRE to have all .conf.dist properties inside since they have been already loaded before.

For example, if you want to keep all default conf but you've to change just the database properties, you can create a worldserver.conf file with just:

```
[worldserver]
LoginDatabaseInfo     = "127.0.0.1;3306;root;root;azerothcore_test_auth"
WorldDatabaseInfo     = "127.0.0.1;3306;root;root;azerothcore_test_world"
CharacterDatabaseInfo = "127.0.0.1;3306;root;root;azerothcore_test_chars"
```

### Modules case

After normal .conf and .conf.dist files has been loaded, you're able to load infinite other configuration files using scripts/modules API. They will have the same behaviour of .conf described above. However, we do not recommend you to overwrite server configuration properties since you can have concurrency issues with other modules that use them too, **create new namespaced properties instead**.

For example, if you want to improve in your module the "disable water breath" functionality of the core. Instead of add this property in your conf file:

`DisableWaterBreath = x`

You can use something like:

`MyModuleName.DisableWaterBreath = x`

and work with it


## Conclusion

To summarize this article, we can say that the configuration files will be loaded following this flow:


```
loading all new properties from worldserver.dist.conf
loading all new properties from worldserver.conf ( and overwrite properties with same name loaded before )
loading all new properties from modules .conf files ( and overwrite properties with same name loaded before )
```
