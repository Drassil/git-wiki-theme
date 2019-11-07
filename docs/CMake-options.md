## PERFORMANCE

If you want to disable performance improvement, add this flag `-DENABLE_EXTRAS=0`

## EXTRA LOGS

If you want to enable extra logs, add this flag: `-DENABLE_EXTRAS=1 -DENABLE_EXTRA_LOGS=1`

## PCH

Totally disable PCH:

`-DNOPCH=1`

Or one by one:
```
-DUSE_COREPCH=0
-DUSE_SCRIPTPCH=0
```

## OTHER OPTIONS

Other options are available here:

* https://github.com/azerothcore/azerothcore-wotlk/blob/master/conf/config.cmake.dist
* https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/cmake/showoptions.cmake
