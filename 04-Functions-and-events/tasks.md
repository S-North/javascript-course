# Functions & Events

## Functions
In JavaScript we can write blocks of code and put then in a container. Then we can call that block of code whenever we want. These containers are called Functions.
A function looks like this;
```javascript
function myFunctionName (input1, input2) {
    line 1 of code
    line 2 of code
    line 3 of code

    return output
}
```
We can then run this code at any time and any number of times by using its name;
`myFunctionName()`

## create a function
We will write a function that will change the text on the picture when the picture is clicked.
1. Write a function called changeText. Leave the inputs blank.
2. put a console.log in the function so itr outputs a message to console when the function is run
```javascript
function changeText () {
    console.log('changeText ran')
}
```
3. in the html file, add the property onClick to the div and set its value to `changeText()`
4. reload the page and click the div. Do you see the message in the console?
3. Lets add a command to change the inner HTML of the div when it's clicked

```javascript
function changeText () {
    console.log('changeText ran')
    element.innerHTML = "Miow"
}
```
4. If that worked, lets do some logic. If statements look like this
```javascript
if (something is true) {
    do this
} else {
    do this
}
```
5. Create an if statement that checks to see if the element.innerHTML is "Miow". If it is, set the text to "Woof". It it isn't, set the text to "Miow" 

```javascript
function changeText () {
    console.log('changeText ran')
    if (element.innerHTML === "Miow") {
        element.innerHTML = "Woof"
    } else element.innerHTML = "Miow"
}
```