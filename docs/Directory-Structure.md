AzerothCore and our modules is following  directory structure standard from hw-core:

<a href="https://github.com/HW-Core/directory-structure/blob/master/README.md" target="_blank">Standard Directory Structure</a>

This structure is conformed to our [[modular architecture|The-Modular-Structure]]

##  AzerothCore Wotlk directory structure:

- **bin**  
  contains binaries/scripts for this project   

- **conf**  
  Project configuration files  
  
 
- **data** 
    All data such as sql, documents etc.

- **modules** 
    - **acore** 
        - **game-framework**  
          Package that contains the framework to implement a wow server  
 
        - **extractors**  
          Collection of ClientData extractors tools  
  
 
        - **[other-modules]** 

    - **worldengine** 
        - **deps**  
          package that contains required legacy 3rd party deps for worldengine. In future will will use dedicated modules  
  
 
        - **nucleus**  
          [Re]sources required by entire worldengine system  

        - **[other-modules]**  
          All other modules from worldengine, such as lib-collision etc. We will use only them required by azerothcore project.  

    - **uwd**  
      mostly tools and other useful modules  
  
 
    - **hw-core**  
      generic cross-language and cross-platform libraries  

- **src**  
  All sources strictly related to this application/project and wotlk server version 