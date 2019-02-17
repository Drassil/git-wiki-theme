Sometimes we need to import something from TrinityCore, for example we see an extra line or file in the code, and we want to better know the context of that addition (i.e. the commit that introduced it).

How to do that:

**1)** Clone a [3.3.5 TrinityCore](https://github.com/TrinityCore/TrinityCore/tree/3.3.5) and open it with [Visual Studio Code](https://code.visualstudio.com/) or any other IDE that has **annotate** feature.

- If using Visual Studio Code, you can install the [Annotator](https://github.com/ryu1kn/vscode-annotator) plugin.

- If using CLion (or other IntelliJ-based IDE) the annotator feature is there by default.

- If using another IDE, google your IDE name + "annotate".

**2)** Go to the target file or line

**3)** Use the Annotator

#### Under CLion or other IntelliJ-based

Right click on the line number and select "Annotate".

#### Under Visual Studio Code

Press CTRL+SHIFT+P (or CMD+SHIFT+P if macOS) and type Annotator

![](https://user-images.githubusercontent.com/75517/50727622-af0b7c00-111d-11e9-8423-1c42bc89a297.png)

Choose "Annotate the current file...", it will open something like this:

![](https://user-images.githubusercontent.com/75517/50727632-c9ddf080-111d-11e9-9bd0-9e3673bcd93b.png)

 Go with the mouse over the line of the change that you want to spot the commit of

![](https://user-images.githubusercontent.com/75517/50727642-0873ab00-111e-11e9-9c5c-aaf166adb972.png)

**4)** Copy the commit hash and paste on:

https://github.com/TrinityCore/TrinityCore/commit/PASTE-THE-COMMIT-HASH-HERE

that will be the commit you were looking for.

**IMPORTANT**: it's also useful to check the file(s) that were modified on the [latest revision](https://github.com/TrinityCore/TrinityCore/tree/3.3.5) because they could have been modified in newer commits.

**IMPORTANT 2**: check also for comments of the commit or PR, usually if there are issues they were addressed as GitHub comments