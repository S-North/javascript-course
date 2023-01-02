# Setup

## Create a blank HTML file
1. In your project folder, create a file called index.html
2. In VS CODE you can use the ! symbol to create the basic html boilerplate
3. Change the contents of the title element from "Document" to "01-Setup"

## Create a blank CSS file and link to it in your html file
1. In your project folder, create a file called style.css
2. In your index.html file, add a link element inside the head element e.g. <link>
3. Add the rel property and set it to equal "stylesheet" e.g. <link rel="stylesheet">
3. Add the href property and set it to equal "style.css" e.g. <link rel="stylesheet" href="style.css">

### Test the CSS file is working
1. In the html file, create a div element inside the body element e.g. <div></div>
2. Add a class property to the div and set it equal to "myStyle" e.g. <div class="myStyle"></div>
3. In the style.css file, create a class called .myStyle e.g.
```css
.myStyle {

}
```