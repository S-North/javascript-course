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

// add an event listener to the element
element.addEventListener('mouseenter', () => {
    console.log('the mouse pointer is hovering over this element')
})
```