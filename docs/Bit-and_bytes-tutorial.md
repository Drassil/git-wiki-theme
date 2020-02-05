# Bits and bytes

## Intro

In computing, numbers are internally represented in binary. This means, when you use an integer type for a variable, this will internally be represented as a summation or concatenation of zeros and ones.

![Byte](http://schoolcoders.com/w/images/0/07/Byte.png)

You could also view it like this:

![Hobbyte](https://ih0.redbubble.net/image.474456834.0620/ap,550x550,12x12,1,transparent,t.u1.png)

This is also true for booleans! If you had a bit that equaled to 1 or a boolean that was equal to true, there would be no difference in the value of both variables.

While this is true for the value output, a boolean does take up an entire byte.
Thats because you can't simply borrow just 1 bit, so in order to define a bool, you take up 1 byte or 8 bits.

As you might know, a single bit represents one 0 or one 1. A concatenation of eight of those bits represent a Byte. The maximum value of a byte is 255 which is the summation of all the bits. Each bit has a "value" and the summation of all the bits is what we call mask. For example the, the first bit value is 1, the 2nd bit value is 2 * the value of the bit to his right.




``` c++
// This is the same as saying that 2^N = x, for example
2^0=1
2^1=2
2^2=4
2^3=8
2^4=16
2^5=32
2^6=64
2^7=128

/*
 * You can represent a byte as a sequence of zeros and ones accordingly.
 * Reading like this, the order of the bits is read
 * from right to left 
 * <-----
*/
1   = 0 0 0 0 0 0 0 1
2   = 0 0 0 0 0 0 1 0
4   = 0 0 0 0 0 1 0 0
8   = 0 0 0 0 1 0 0 0
16  = 0 0 0 1 0 0 0 0
32  = 0 0 1 0 0 0 0 0
64  = 0 1 0 0 0 0 0 0
128 = 1 0 0 0 0 0 0 0
```

When a number is 4 Bytes long, this means that your number actually uses 32 bits of the internal storage:

00000000 00000000 00000000 00000000

The 32-bit integer data type can hold integer values in the range of −2,147,483,648 to 2,147,483,647. You may also refer to this data type as signed int or unsigned. Unsigned int means that the 32-bit unsigned int data type can hold integer values in the range of 0 to 4,294,967,295.
The reason why the unsigned int will always store more positive values vs a signed is because we use the negative values of the signed int as positives and this duplicates the ammout of positive values you can store in a variable.

## What is their usage for?

Now imagine you want to create a program that holds a state, which is based on multiple values:

``` c++
// Store the current state of this program
bool firstValue = true;
bool secondValue = false;

```

Or instead use a single integer variable and use each bit of its internal 8 bits to represent the different true and falses.

``` c++
// 00000101
int maskValue = 5;
```

Above, the the first bit is true, which represents the first variable. The 2nd is false, which represents the 2nd variable. The third true. And so on...

This is a very compact way of storing data and has many usages.

This is where bit masking comes in. It sounds complex but actually it's very simple.

Bitmasking allows the user to:
1. Editing particular bits in a byte(s)
2. Checking if particular bit values are present or not.
3. Apply a mask to a value, where in our case the value is our state 00000101 and the mask is again a binary number, which indicates the bits of interest. In this case our mask is the number 5.

## Binary operations

### Bitwise AND "&"
Operating with bits is pretty similar to setting up conditions between two variables. Lets say we have, for example:

``` C++
if (1 && !0)
  printf('This condition is true');
```

Any value that is not 0 will always be the same as true. This means that:

- 1 is true
- !0 is the same as saying not false, which means that !0 is true
- true and true confirms the condition

This way we can compare 2 bits values and if they are both true, we can keep the bit's value and get an end result likewise:

``` C++
255 &= 1

// This will result in 255 becoming 1 due to 
// F - False and T - True to compare the bits from 255 and 1
(255) -> 1 1 1 1 1 1 1 1
(1)   -> 0 0 0 0 0 0 0 1
(1)   -> F F F F F F F T
         0 0 0 0 0 0 0 1
         
// Another example:
Value:  00000101
Mask:   00000100
---- AND ---------
Result: 00000100

// In this case we have the value 5
int MyState = 5;

// And we want to remove 1 state from that value
MyState &= 4;

/* This will turn our 00000101 (5)
 * into a 00000100 (4)
 */
```

The examples above are indeed bad examples of how to use bit calculations and might have left you wondering. Why not simply subtract the values from numbers?

5-1 = 4

is easier to understand than going around comparing bytes or bits and more natural for the human language.

The point in using & in bit operations is often acompanied by another bit operation character which is the '~'.

What ~ allows you to do is to invert the bitmask, for example:

``` C++
255 &= ~1; // This will make 255 turn into 254 because:
(255) -> 1 1 1 1 1 1 1 1
(1)   -> 0 0 0 0 0 0 0 1 // First bit is true
(~1)  -> 1 1 1 1 1 1 1 0 // Inverts the bits in 1 -> 254
(254) -> 1 1 1 1 1 1 1 0
```

imagine a bitmask like this one:
1 0 0 0 0 0 0 0 (128)

if this was an integer operation then 128 - 64 = 64

However, if you tried to remove 64 from 128:

```
1 0 0 0 0 0 0 0 &= ~64

(128) 1 0 0 0 0 0 0 0
(64)  0 1 0 0 0 0 0 0
(~64) 1 0 1 1 1 1 1 1
---------------------
(128) 1 0 0 0 0 0 0 0
```

So 128 wouldn't change because 64 is already off.

This is why often in files you will see variables adding new flags and removing others.

--- 

### Bitwise OR "|"

Adding a new flag to a bitmask is easier than removing them.

This concept is applied just like the OR in a condition:

``` C++

if (true || false)
  printf("This condition is true");
else if (true || true)
  printf("This condition is true");
else if (false || true)
  printf("This condition is true");
else if (false || false)
  printf("This condition is false");
```

Just like two conditions, you can compare 2 bits and get a new bitmask because, if one of either bits is true, this bit value will become true. In other words, if you have 1 or 0 the new bitmask value will be 1, for example:

``` C++
// Here we initialize MyState with 5 aka 00000101 if we talk in bit language
int MyState = 5;

// Then we can add a mask to it with the following syntax
MyState |= 128;

// Our end result will turn 5 into 133 because of this logic:
5   -   0 0 0 0 0 1 0 1
128 -   1 0 0 0 0 0 0 0
------- Result --------
133 -   1 0 0 0 0 1 0 1
```

### Bitwise XOR "^"

This bit operator character works in a different than expected way and can be difficult to find a way to use it.

Imagine having the following bitmasks:

| Bitmask | Value |
| --- | --- |
| ```0 1 0 0 1 1 1 0``` | 78
| ```0 0 1 1 0 1 0 0``` | 52
| ```F T T T T F T F``` | XOR Results |
| ```0 1 1 1 1 0 1 0``` | 122

You might be confused with what just happened.

Well, we just compared bit from first mask and bit from second mask and compared them. If they are diferent then the final value is true. This is how it would look like programmatically:

``` C++
// Compare the values from mask 1 and 2
// If they are different then the XOR condition is true
for (int i = 0; i < 8; ++i)
{
  if (bitmask_1[i] != bitmask_2[i])
    printf("This condition is true")
}
```

### Bitwise left shit "<<"

This bit operation will shift all the binary values N times as specified. Lets look deeper:

If we have the following value in binary X:

```0 0 0 0 0 0 0 1``` (which is 1) 

and we do x << 1, then x will become

```0 0 0 0 0 0 1 0``` 

So by this rule, It moves all bits to left by one and adds a 0 to the right.
x << 2 would move all bits by 2 so x would become

```0 0 0 0 0 1 0 0``` 

``` C++
// Shift the value "1", "8-1" times to the left
1<<(8-1)

// (8-1) is the same as 7
1<<(7)

// Which moves 000000001 the 1 in that value 7 places to the left.
// so the result is 128 or
10000000
```
---
## Conclusion

[Cheat sheet taken from this link](https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/)

Character | Operation | Description
-- | -- | --
& | AND | Takes two numbers as operands and does AND on every bit of two numbers. The result of AND is 1 only if both bits are 
\| | OR | Takes two numbers as operands and does OR on every bit of two numbers. The result of OR is 1 any of the two bits is 
^ | XOR | Takes two numbers as operands and does XOR on every bit of two numbers. The result of XOR is 1 if the two bits are different.
\<\< | left shift | Takes two numbers, left shifts the bits of the first operand, the second operand decides the number of places to shift.
\>\> | right shift | Takes two numbers, right shifts the bits of the first operand, the second operand decides the number of places to shift.
~ | NOT | Takes one number and inverts all bits of it

# Credits

Documentation built with these articles in consideration:

https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/

https://stackoverflow.com/questions/31575691/what-is-a-bitmask-and-a-mask
