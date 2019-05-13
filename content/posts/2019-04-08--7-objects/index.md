---
title: Objects
subTitle: Objects, Dot notations, Key notations and Object methods
category: "Javascript"
cover: array-methods-thumbs.jpg
---

An object is a collection of related data. We use brackets and key/value pairs in order to store this data.

```javascript
{
    key: value
}
```

Let’s say that we want to have an array of people that signed up to our website. We want to get information about the name, age, and nationality of that person. We would define all this data in an object, where every object represents a different user.

```javascript
// If we just have one user
const user = {
    name: 'Mustafa',
    age: 26,
    nationality: 'Indian'
}

// We can create an array of objects
// that represents all users 
const users = [
    {
        name: 'Mustafa',
        age: 26,
        nationality: 'Indian'
    },
    {
        name: 'Shivam'
        age: 27.
        nationality: 'Indian'
    }
]
```

There are two ways to manipulate the data in an object, or to get access to the stored data: dot notation, and bracket notation.

***

## Dot notation
In order to get access to values in an object, you can use dot notation. If we take the user example, that would look like this:

```javascript
const user = {
    name: 'Mustafa',
    age: 26,
    nationality: 'Indian'
}

user.name // 'Mustafa'
user.age // 26
user.nationality // 'Indian'
```

We can also manipulate the data. Let’s say that this user just turned a year older!

```javascript
user.age = 27
user.age  // 27
```

Or we can add entirely new properties! 

```javascript
user.hobbies = ['coding', 'eating']
// We added a new property to our user object

user
// {
//     name: 'Mustafa',
//     age: 26,
//     nationality: 'Indian',
//     hobbies: ['coding', 'eating']
// }
```

***

## Bracket notation
Another way to access values in an object is by using bracket notation. We pass the stringified key from which we want the value in between the brackets. 

```javascript
const user = {
    name: 'Mustafa',
    age: 26,
    nationality: 'Indian'
}

user['name'] // 'Mustafa'
user['age'] // 26
user['nationality'] // 'Indian'
```

However, there are some differences between bracket notation and dot notation, besides the syntax!

***

## Bracket notation vs. dot notation
In JavaScript, all object keys are strings. Even though we might not type them as a string, they are always converted into strings under the hood. This might lead to issues when using the dot notation, example:

```javascript
const person = {
    age: 20
}

const key = 'age'
person.key // undefined. There is no key called "key" on the person object.
person['key'] // 20. There is a key called "age" on the person object.
```

person.key returned undefined, because JavaScript started looking for a key that was called "key" (a string, because object keys are strings), rather than the value of the variable. We didn’t have a key/value pair with a key called "key", so person.key returned undefined. Dot notation only lets you access the explicit key name of a property.

person[key] returned 20, because JavaScript interprets (or unboxes) statements. It sees the first opening bracket [, and keeps on going until it finds the closing bracket ]. Only then, it will evaluate the statement.

```javascript
const details = {
    props: 'name'
}

const person = {
    name: 'Mustafa',
}

person.details.props 
// Error. details doesn't exist on person
person[details[props]] 
// 'Mustafa'. details[props] evaluates to 'name'. person['name'] has the value 'Mustafa'
```
***

## Object methods
There are many different methods you can use in order to get, manipulate, or delete data from objects. The most common are:

```javascript
const bird = {
    color: 'red',
    size: 'small'
}

// Returns an array of arrays with the keys and values
Object.entries(bird)
// [['color', 'red'], ['size', 'small']]

// Returns an array of all the keys of the object
Object.keys(bird)
// ['color', 'size']

// Returns an array of all the values of the object
Object.values(bird)
// ['red', 'small']

// Deletes a property from the object. Return true
delete bird.color // true
// bird is now { size: 'small' }

// Add a property to the object
Object.assign(bird, { hungry: false })
// { size: 'small', hungry: false }
```