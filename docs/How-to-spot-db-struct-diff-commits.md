**1)** Clone a [3.3.5 TrinityCore](https://github.com/TrinityCore/TrinityCore/tree/3.3.5) and open it with [Visual Studio Code](https://code.visualstudio.com/) or any other IDE that has **annotate** feature (e.g. IntellIJ and similar).

If using Visual Studio Code, you can install the [Annotator](https://github.com/ryu1kn/vscode-annotator) plugin.

**2)** Start from a diff, that can be any of [those](https://github.com/azerothcore/azerothcore-wotlk/milestone/3)/

For example:

![](https://user-images.githubusercontent.com/75517/50727531-78813180-111c-11e9-8a6b-37f098df8dff.png)

**3)** Select the name of a changed field and copy it, for example `BaseAttackTime` and look for it in Visual Studio Code

**4)** Scroll until you find the file that changes it, for example:

![](https://user-images.githubusercontent.com/75517/50727603-66ec5980-111d-11e9-8aed-fb376874bba8.png)

**5)** Press CTRL+SHIFT+P (or CMD+SHIFT+P if macOS) and type Annotator

![](https://user-images.githubusercontent.com/75517/50727622-af0b7c00-111d-11e9-8423-1c42bc89a297.png)

**6)** Choose "Annotate the current file...", it will open something like this:

![](https://user-images.githubusercontent.com/75517/50727632-c9ddf080-111d-11e9-9bd0-9e3673bcd93b.png)

**7)** Go with the mouse over the line of the change that you want to spot the commit of

![](https://user-images.githubusercontent.com/75517/50727642-0873ab00-111e-11e9-9c5c-aaf166adb972.png)

**8)** Copy the commit hash and paste on:

https://github.com/TrinityCore/TrinityCore/commit/PASTE-THE-COMMIT-HASH-HERE

that will be the commit you were looking for.

**IMPORTANT**: it's also useful to check the file(s) that were modified on the [latest revision](https://github.com/TrinityCore/TrinityCore/tree/3.3.5) because they could have been modified in newer commits.