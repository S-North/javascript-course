When a web page is loaded, the browser creates a Document Object Model of the page. This is like a map of all the elements on the page.
We will use the map to find and change these elements.

## update the css 
```css
.mystyle {
    background-color: red;
    
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    height: 70vh;
    width: 70vw;
    margin: auto;
    object-fit: contain;
}
```

## Selecting a DOM element
We can use classes and ids to select an element.
1. Create a div element inside the body of the index.html file
2. Add the property `id` to the div
```html
<body>
    <div class="mystyle" id="box">
    </div>
</body>
``` 
3. in the `main.js` file, write the following code;
```javascript
let element = document.getElementById("box");
console.log(element)
```
4. check the console to see if the element was sucessfully selected. You can expand the element in the console to see all the hidden properties of the element (there are lots! Don't panic, you don't need to know all of these things).

## changing the element
1. We can now use the variable `element` to modify the element we selected
2. Lets add an image to the background using the style property.
```javascript
element.style.backgroundImage = "url(bruno-zoli.jpg)";
element.style.backgroundSize = "cover";
```
3. Check out the div and see if the image has appeared. Look at the element logged in the console. You should see the scc style properties have been added to the element.
4. Lets change some other css properties
```javascript
element.style.textAlign = "center";
element.style.fontWeight = "bold";
element.style.fontSize = "3rem";
element.style.display = "flex"
element.style.justifyContent = "center"
element.style.alignItems = "center"
element.style.boxShadow = "0 0 3px 2px rgba(0, 0, 0, 50%)"
element.style.cursor = 'pointer'
```
5. We can also change the text in the div:
```javascript
element.innerHTML = "Pet Me...";
```