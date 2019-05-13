---
title: Conditionals
subTitle: if-esle, Conditional and switch
category: "Javascript"
cover: conditionals.jpg
---

In your code, you sometimes have to make decisions. Based on whether a certain condition is true or not, we can control whether certain blocks of code get executed. There are several ways of making such decisions. 

---

## If-else statements

The syntax of an if-else statements consists of at least two parts: if the condition between the parentheses returns true, the code after the “if” statement will be executed. However, if it returned false, the code in the “else” statement will be executed. 

```javascript
const number = 20
if(number === 20) {
    return 'The number is 20'
} else {
    return 'The number is not 20'
}
```

If you want more conditions to be taken into consideration, you can also add many “else if”s.

```javascript
const number = 20

if(number < 10) {
    return 'The number is smaller than 10'
} else if(number >=10 && number < 20 ) {
    return 'The number is greater than or equal to 10 but smaller than 20'
} else if( number >=20 && number < 50 ) {
    return 'The number is greater than or equal to 20 but smaller than 50'
} else {
    return 'I give up. All I know is that it\'s not smaller than 50'
}
```

In our case, JavaScript first checks if **number < 10** returns **true**. This is not the case, and it goes to the next one **number >= 10 && number < 20**. This also returns **false**, as **number < 20** returns **false**, and with the && operator both values need to be truthy. It goes to the next one, which is **number >= 20 && number < 50** which returns **true**! The code block gets run, and we will get “The number is greater than or equal to 20 but smaller than 50” returned.

---

## Conditional operator
There are shorter ways to write similar logic to an if-else statements, namely with conditional operators. 

```javascript
const age = 20
const status = (age < 18) ? 'child' : 'adult'
```

We can check whether a person is a child or an adult based on their age. If they’re younger than 18 years old, they’re a child. Else, they’re an adult. If the condition **age < 18** returns **true**, the first option will get returned, which in this case is **‘child’**. Else, if the condition returns **false**, the second option will get returned, which is **‘adult’**. In this case, **age < 18** returns false as 20 is bigger than 18, so the variable **status** will get the value of **‘adult’**.

---

## Switch statements
It can be that you would get many “else” statements, which can be quite ugly. In that case, you can use switch statements instead! The syntax of a switch statement is quite different:

A switch statement receives an expression as argument. Different blocks of code can get returned, based on the value of that expression. 

```javascript
const age = 20

switch(age) {
    case 20: 
        return 'You are twenty!'
        break;
    case 21:
        return 'You are not twenty!'
        break;
    default:
        return 'Neither 20 nor 21'
}
```

In case the variable age is equal to 20, ‘You are twenty’ gets returned. If age is equal to 21, ‘You are not twenty’ will be returned. If it’s neither 20 nor 21, the default code block gets executed. There are a couple of things to keep in mind here:
* Parentheses after break are necessary!
* There is no break at the default code block
* Don’t use switch cases if you need comparisons!

The last point is quite important. This example shows the **WRONG** usage:

```javascript
// THIS IS WRONG
switch(age) {
    case (age < 18):
        return 'child'
        break;
    case (age >= 18):
        return 'adult'
        break;
}
```