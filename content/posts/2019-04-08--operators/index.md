---
title: Operators
subTitle: Operators in JavaScript
category: "Javascript"
cover: operators-thumb.jpg
---

JavaScript operators are used to assign values, compare values, perform arithmetic operations, and so on.

***

## Assignment operators
An assignment operator assigns a value to its left operand based on the value of its right operand. You might be familiar with notation such as “x = x + y”, however as lazy as developers are, we of course have a shorter way of writing such operations. 

```javascript
//x = x + y
x += y

//x = x - y
x -= y

//x = x * y
x *= y

//x = x / y
x /= y

//x = x ** y
x **= y

```

***

## Comparison operator
Compares its operands and returns a boolean based on whether the comparison is true or false.

```javascript
const num = 3

// Equal
num == 2 //false

// Not Equal
num != 2 //true

// Strict Equal
num === 2 //false

// Strict Not Equal
num !== 2 //false

// Greater than
num > 2  //true

// Smaller than
num < 2  //false

// Greater than or equal
num >= 2  //true

// Smaller than or equal
num <= 2  //false

```

Often, if the two operands are not of the same type, (for example 2 + ‘1’, where one is a number and the other is a string) JavaScript attempts to convert one or both operands to an appropriate type in order to compare the two. This is the difference between using equal and strict equal. 

```javascript
const num = 0

num == false //true
num == '0' //true
```

JavaScript converts the string and the boolean to a number in order to be able to make the comparison, without you really knowing.  If you use strict equal, it makes sure that it only returns true if the type of the value equal the type of the value in the comparison.

```javascript
const num = 0

num === false //false
num === '0' //false
```

In order to prevent unexpected behavior, it’s best to always use strict equal. 

***

## Arithmetic operators
Takes numerical values as their operands and returns a single numerical value. 
Unary operation: an operation with only one operator.
Binary operator: an operation that operates on two operands and manipulates them to return a result.

<!-- ![](operator7.png) -->
```javascript
// Remainder. Binary operator
// Returns the remainder of diving the two operands
// 5 entirey fits twice in 12(5*2 = 10)
// and leaves a remainder of 2
12 % 5 == 2 //true

// Increment. Unary Operator.
let x = 2
x++ // Returns 2, then sets x equals to 3
++x // Sets x to 3, then returns 3

// Decrement. Unary Operator.
let x = 2
x-- // Returns 2, then sets x equals to 1
--x // Sets x to 1, then returns 1

// Unary plus (Returns the positive values)
// JavaScripts tries to convert the operand into a number!
+1 //1
+true //1
+'3' //3

// Unary negation. Same as unary plus, but negative.
-1 //-1
-true //-1
-'3' //-3

```

***

## Logical operators

Logical operators return a boolean value. Besides true and false, there are truthy and falsy values:

Falsy values don’t necessarily have the value false, they simply evaluate to false. There are 6 falsy values:

```javascript
undefined, null, NaN, 0, "", false
```