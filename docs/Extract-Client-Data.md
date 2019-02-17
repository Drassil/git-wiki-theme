# Windows

## Extracting DBC, Maps, VMaps & MMaps
AzerothCore requires certain files obtained from World of Warcraft client.

1. First of all we need to do a small modification in CMake: check **Grouped** and **Advanced** boxes. Then drop down **Ungrouped Entries** and check **TOOLS** box. (like shown in the image below)

![](https://i.ibb.co/9ZFsCtH/azeroth-cmake-tools.png)

Next press Configue and then Generate.

2. Open **AzerothCore.sln** and Build the solution (Ctrl+Shift+B)

### Now that you have the source compiled, you can proceed to the next step.

3. Go to your AzerothCore build directory (E.g. AzerothCore335\build\bin\Release) and copy the following files to your World of Warcraft directory (E.g. D:\World of Warcraft 3.3.5a (no install))
* **ace.dll**
* **mapextractor.exe**
* **mmaps_generator.exe**
* **vmap4assembler.exe**
* **vmap4extractor.exe**
* **[extract_vmaps.bat](https://pastebin.com/KKMurZ4D)**

4. First, you must extract **dbc** and **maps**. Go ahead and click on **mapextractor.exe**. You must wait until this process is completed.

5. Next, we need to extract **Buildings**. Go ahead and click on **vmap4extractor.exe**. You must wait until this process is completed.

6. Now we need to assembly **vmaps**. Click on **extract_vmaps.bat**. Same thing, you must wait until this process is completed.

7. Next, we need to extract **mmaps**. Go ahead and click on **mmaps_generator.exe**.  
**NOTE: This process will take up to a few hours, depending on your computer specs.**

Now that everything is completed, you need to copy **dbc**, **maps**, **vmaps** and **mmaps** folders to your AzerothCore build directory (E.g. AzerothCore335\build\bin\Release).


***


This guide was written by [mindsear](https://github.com/mindsear).




