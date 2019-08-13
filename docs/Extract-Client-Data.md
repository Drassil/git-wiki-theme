# Extracting DBC, Maps, VMaps & MMaps

## Windows

AzerothCore requires certain files obtained from World of Warcraft client.

1. First of all we need to do a small modification in CMake: check **Grouped** and **Advanced** boxes. Then drop down **Ungrouped Entries** and check **TOOLS** box. (like shown in the image below)

![](https://i.ibb.co/9ZFsCtH/azeroth-cmake-tools.png)

Next press Configue and then Generate.

2. Open **AzerothCore.sln** and Build the solution (Ctrl+Shift+B)

### Now that you have the source compiled, you can proceed to the next step.

3. Go to your AzerothCore build directory (E.g. AzerothCore\build\bin\Release) and copy the following files to your World of Warcraft directory (E.g. D:\World of Warcraft 3.3.5a (no install))
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

Now that everything is completed, you need to copy **dbc**, **maps**, **vmaps** and **mmaps** folders to your AzerothCore build directory (E.g. AzerothCore\build\bin\Release).

This guide was written by [mindsear](https://github.com/mindsear).


***


## Linux & Mac

1. To extract the client data we need to build the tools, so change the cmake parameter -DTOOLS=0 into -DTOOLS=1 and launch the build of the core.
Type the following commands (replacing 4 with the number of threads that you want to execute):

**Linux**
```
cmake ../ -DCMAKE_INSTALL_PREFIX=$HOME/azeroth-server/ -DCMAKE_C_COMPILER=/usr/bin/clang -DCMAKE_CXX_COMPILER=/usr/bin/clang++ -DTOOLS=1 -DSCRIPTS=0
make -j 6
make install
```

**Mac**
```
cmake ../ -DCMAKE_INSTALL_PREFIX=$HOME/azeroth-server/ -DTOOLS=1 -DSCRIPTS=0 -DMYSQL_ADD_INCLUDE_PATH=/usr/local/include -DMYSQL_LIBRARY=/usr/local/lib/libmysqlclient_r.dylib -DREADLINE_INCLUDE_DIR=/usr/local/opt/readline/include -DREADLINE_LIBRARY=/usr/local/opt/readline/lib/libreadline.dylib -DOPENSSL_INCLUDE_DIR=/usr/local/opt/openssl/include -DOPENSSL_SSL_LIBRARIES=/usr/local/opt/openssl/lib/libssl.dylib -DOPENSSL_CRYPTO_LIBRARIES=/usr/local/opt/openssl/lib/libcrypto.dylib
make -j 6
make install
```

### Now that you have the source compiled, you can proceed to the next step.
2. Go to your AzerothCore build directory (e.g. $HOME/azeroth-server/bin/) and copy the following files to your World of Warcraft directory (where there is also the Wow.exe file etc.)
* **mapextractor**
* **mmaps_generator**
* **vmap4assembler**
* **vmap4extractor**

3. First, you must extract **dbc** and **maps**, so open the terminal and go to your WoW/ directory and rune the file **mapextractor**. You must wait until this process is completed.
```
./mapextractor
```
4. Next, we need to extract **Buildings** through the **vmap4extractor**, so type in your terminal the follows command. You must wait until this process is completed.
```
./vmap4extractor
```
5. Next, we need to assembly **vmaps** through the **vmap4assembler**, so type in your terminal the follows command. Same thing, you must wait until this process is completed..
```
mkdir vmaps;
./vmap4assembler Buildings vmaps
```

6. Next, we need to extract **mmaps** with the **mmaps_generator**, so run:  
**NOTE: This process will take up to a few hours, depending on your computer specs.**

```
mkdir mmaps;
./mmaps_generator
```

Now that everything is completed, you need to copy **dbc**, **maps**, **vmaps** and **mmaps** folders to your AzerothCore build directory (e.g. *$HOME/azeroth-server/data/*).

This guide was written by [Helias](https://github.com/Helias).
