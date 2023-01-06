# Cheat Sheet

## Variables

- `let` value can be reassigned
- `const` value cannot be reassigned
- `var` don't use

```javascript
// declare and assign a string variable
let myString = ""
myString = "hello world"

// declare and assign a number variable
let myNumber = 1
myNumber = 2

// declare and assign an array variable
let myArray = []
myArray = [1, 2, 3, 4, 5]
myArray[0] = 43

// declare and assign an object variable
let myObject = {}
myObject = {
    name: "bob",
    age: 14,
    classes: ["maths", "english", "computer science"]
}
myObject.age = 15
```

## DOM manipulation
```javascript
// select an html element and store it in a variable
let element = document.getElementById("box")

// use the variable to manipulate the element
element.innerHTML = "Pet Me..." // change the inner html (between the opening and closing tags)

// change the inline css style
element.style.fontWeight = "bold";
element.style.fontSize = "3rem";

// set an elements attributes
let image = document.getElementById("image");
image.setAttribute("alt", "wetssapp");
image.setAttribute("src", "https://www.androidpolice.com/wp-content/uploads/2018/09/whatsapp-thumbnail-icon.png");

// set a collection's attributes
let multiples = document.getElementsByClassName('multiple')
for (let i = 0; i < multiples.length; i++) {
    multiples.item(i).innerHTML = 'HELLO';
  }
```

## functions
```javascript
function myFunction (input1, input2) {
    // do stuff here
    return output
}

// arrow function
const myFunction = (input1, input2) => {
    // do stuff here
    return output
}

// call your function
myFunction()

// anonymous function
() => {
    console.log('hello)
}

// add an event listener to the element
element.addEventListener('mouseenter', () => {
    console.log('the mouse pointer is hovering over this element')
})
```

## Arrays
```javascript
// create an array
// items in an array are indexed staring at 0
const myArray = [1, 2, 3, 4, 5]

myArray.length // returns the number of items in the array
myArray[0] // access the item at an arrays nth index e.g. [0] first item, [3] forth item

myArray[myArray.length -1] // the last item of an array

myArray.push('new item') // add an item to the end of an array
myArray.pop() // remove the last item of an array

myArray.unshift('new item') // add an item to the start of an array
myArray.shift() // remove the first item of an array

myArray.join(', ') // returns a string with all the items of an array concatinated. the first argument is the delimitter e.g. "1, 2, 3, 4, 5"
```

## Objects
[Objects on W3Schools](https://www.w3schools.com/js/js_objects.asp)
```javascript
// create an object
const myObject = {
    username: "Felix",
    message: "Hello world",
    date: "11/01/2023"
}

// accessing and updating object properties
myObject.username // "Felix"
myObject.username = "Stuart" // detting the username property to "Stuart"
myObject.sendTo = "Jake" // add and set a new property on an object. the property doesn't need to exist before you add it

// object methods. You create these yourself
// the 'this' keyword refers to the object itself, so you can access properties of the object
myObject.messageLength = () => return this.message.length
const circle = {
    radius: 40,
    circumference: () => return (this.radius * 2) * Math.PI
}
```