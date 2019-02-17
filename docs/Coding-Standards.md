**Under working...**



## Cpp inclusions

### **In PCH files:** 

headers that doesn't have to be modified often

### **Cpp:** 

all needed headers. To improve compilation speed, you can add headers that are often used inside PCH files.

### **In other headers (.h) files:** 

only necessary inclusions that contains references to elements directly used in this header.

For example, if your header is using the class Player as a function parameter, of course you need to #include "Player.h" otherwise it won't compile. But try to avoid inclusions that contains elements only used by the .cpp files if you don't really need it. It is useless and can generate various issues that can't be always solved with [forward-declaration](https://en.wikipedia.org/wiki/Forward_declaration).  


## Cpp Syntax:

We don't have lots of restriction on coding styles ( brackets orders etc. ) , because with a modular structure is quite impossible to control it at 100%. However you MUST follow these rules :

- We DO NOT ACCEPT tabs in code, you must convert tabs in 4 spaces ( you can change your IDE/editor settings, they must have this option, otherwise uninstall it )

- Use CamelCase for classes, UPPER_CASE for defines and pascalCase for properties and functions.


**Under working...**


