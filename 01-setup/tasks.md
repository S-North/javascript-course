# Setup

## Create the folder
1. Create a folder called 01-Setup.
2. Store all the following files in this lesson in this folder

## Create a blank HTML file
1. In your project folder, create a file called index.html
2. In VS Code you can use the ! symbol to create the basic html boilerplate. Or you can type it out manually if you want practice getting the structure right.
3. Change the contents of the title element from "Document" to "01-Setup"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01-Setup</title>
</head>
<body>
</body>
</html>
```

## Create a blank CSS file and link to it in your html file
1. In your project folder, create a file called style.css
2. In your index.html file, add a link element inside the head element
3. Add the rel property and set it to equal "stylesheet"
3. Add the href property and set it to equal "style.css"
```html
<head>
    ...existing elements
    <link rel="stylesheet" href="style.css">
</head>
```
### Test the CSS file is working
1. In the html file, create a div element inside the body element e.g. <div></div>
2. Add a class property to the div and set it equal to "myStyle" e.g. <div class="myStyle"></div>
3. In the style.css file, create a class called .myStyle e.g.
4. Add the following properties to the class
```css
.myStyle {
    background-color: red;
    height: 10rem;
    width: 10rem;
    margin: auto;
}
```
5. Check that the div is displayed on your web page. You can open the html file directly in your browser by dobleclicking the file. Or you can install the VS Code extension called Live Server.

## Create a JavaScript file
1. In your project folder, create a file called main.js
2. In your index.html file, add a script element inside the head element
3. Add the properties, type="text/javascript" src="main.js"
```html
<head>
    ...existing elements
    <script type="text/javascript" src="main.js"></script>
</head>
```

### Test the Javascript file is working
1. In the main.js file write the following
```javascript
console.log("Its working!")
```
2. Open you html file in the browser again and hit the f12 button. The browser dev tools will open and you should see the console.
3. Refresh the page and you should see `Its working!` print out in the console