# Remove and add flags from database columns

### Introduction

Just like in C++, SQL also has bitwise operators that can be used to manipulate bitmasks.

If you're not familiar with Bitwise operators I recommend you to go read [this article about bit operations.](https://github.com/azerothcore/wiki/blob/master/docs/Bit-and_bytes-tutorial.md)

### Adding a flag to a bitmask

Lets take ```creature_template.npcflag``` for this example. Our entry 12345 is a vendor and his flag is wrong. For us to fix him we need to
set it to 128. Someone not familiar with bits and bytes would probably change the value of this npc flag
like this:

``` SQL
UPDATE `creature_template` SET `npcflag` = 128 WHERE `entry` = 12345;
```

In reality, the best way to operate these flags would be to take his already existing flag, and add the bit 128 to the bitmask.
We use the bitwise operator 'OR' to get the desired output.

``` SQL
UPDATE `creature_template` SET `npcflag` = `npcflag` | 128 WHERE `entry` = 12345;
```

This way, we garantee we don't lose the value that was set before by replacing it with a new one, we can also track the commit that
made the npc 12345 a vendor and also eliminates the calculations that the developer needs to do to get his final value for the flag.

### Removing a flag from a bitmask

If you read the bit operations, you probably assume that to remove a value, we will use the operator 'AND' and utilize the symbol that
inverts the bitmask '~'.

If you wanted to make a creature not a vendor anymore, one would have to run the following query:

``` SQL
UPDATE `creature_template` SET `npcflag` = `npcflag` & ~(128) WHERE `entry` = 12345;
```

Graphically, this would mean that , if he had a gossip and was also a vendor, he would have flags 1 and 128 which means that it was 129.
In other words, the bit operation would look like the following.

``` C++
     AND OPERATION
129  - 1 0 0 0 0 0 0 1
~128 - 0 1 1 1 1 1 1 1
-----------------------
1    - 0 0 0 0 0 0 0 1
```
