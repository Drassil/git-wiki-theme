AzerothCore and our modules is following  directory structure standard from hw-core:

<a href="https://github.com/HW-Core/directory-structure/blob/master/README.md" target="_blank">Standard Directory Structure</a>

This structure is conformed to our [modular architecture](The-Modular-Structure).

##  AzerothCore Wotlk directory structure in detail:

- **apps**
  Utilities and applications with an higher level of awareness compared to modules. They can act in the lifecycle operations of the project such as the CI, the installation of modules, database migration etc.
  
  An example of app is our db_assembler that is able to create and upgrade your database installation.

- **bin**  
  Contains binaries/scripts for this project. This folder can be placed inside the PATH env variable of your OS allowing you to integrate the project CLI scripts with your shell.
  
  An example is the azerothcore dashboard script, that allows you to directly run the installer app, the db_assembler and the other tools that come with the azerothcore repo.

- **conf**  
  The configuration files needed by the apps/ and other tools included in our repo. It's not the folder where the worldserver and authserver conf files are stored because the conf/ folder is used only for the repository and it's not compiled.
  
  An example of configuration file is the conf.sh.dist. It's an all-in-one conf used by our apps such as the dashboard, the compiler, the db_assembler etc.

- **data** 
  All static data not compiled with the sources.
  
  An example of data are the sql files, the assets etc. 
    
- **deps**
  This is a domain-oriented folder structure. Therefore, all folders define a specific business domain . In this case each folder represent a standalone component that is needed by the project to work. All components are stored with a [monorepo strategy](https://en.wikipedia.org/wiki/Monorepo). All code that is generic and not related to the logic of Wotlk should be moved under a separated component of the deps layer and handled by a proper VCS.
  The deps layer of AzerothCore can be used and configured to build other server applications.

  An example of deps are the 3rd party library such as acelib and the g3dlite lib, but also libraries created by the azerothcore organization for a generic purpose.

- **modules**
  This is a domain-oriented folder structure. In fact, the principal benefit of this structure is its modularity. Each folder represent a standalone [module](The-Modular-Structure)/plugin that is optional and can be used to extend core functionalities. All modules are stored with a multi-repo strategy and they are git-ignored by default.
  
  An example of module are the transmog, the autobalance, the crossbattlegrounds etc.
    
- **env**
  This folder is used for the default distribution environment. By default the compiler will generate binaries, configuration files and everything is needed by the server application inside the /env/dist folder. However, as explained in the directory-structure standard, this folder can be used to create any kind of nested encapsulated environments.

- **src**  
  All sources strictly related to this application/project and wotlk server version. It follows a role-oriented folder structure. This is a classic directory structure seen in many frameworks. The files are organized by their roles (game, scripts, tools etc.). Its main benefit is to quickly get the picture of all files for specific roles.
  
- **var**  
  This is a folder in which the content is ignored by git. Var folder contains volatile data such as temporary build files. Note: var folder is not used to store worldserver/authserver logs, even though they are volatile data, because those data are not related to the repository lifecycle and reside inside the **application environment** (/env/dist).
  
  
![AC Layers](https://docs.google.com/drawings/d/e/2PACX-1vQDBXPZMAq2HSszx8BGxloxQ5cqDULLC2tCgCmO2uyAF6HH3s9RkDFZxbQVsmFY8xM8Y18rIQJg1mBU/pub?w=1413&h=945)

  
