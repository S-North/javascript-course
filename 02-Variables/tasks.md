# Variables

## Create some variables
In JavaScript, variables are first **declared** and then a value can be **assigned** to them.

Declare a variable by using one of the variable keywords
- var
- let
- const

Then giving the variable a name e.g.
```javascript
var myVariable1
let myVariable2
const myVariable3
```

You can assign a value to a declared variable by typing the variable name, followed by the assignment operator `=` and then the new value for the variable e.g.
```javascript
var myVariable1
myVariable1 = 1
```

You can also assign a value to a variable when you declare it e.g. 
```javascript
var myVariable1 = 1
```

### Logging your variable in the console
We will use the browser dev tools console to see what is happening with our variables

1. Open your html page in the browser and open the dev tools (f12)
2. In your main.js file create a variable called myVariable1 with the `let` keyword and assign the number 1 to it
3. On the folowing line type `console.log(myVariable1)` then save the file
4. In your browser, refresh your page and see if the numer 1 is logged to the console
```javascript
let myVariable1 = 1
console.log(myVariable1)
```

### reassigning a variables value
```javascript
let myVariable1 = 1
console.log(myVariable1)

myVariable1 = 2
console.log(myVariable1)
```
Refresh you page, you should see 1 then 2 logged in the console.