let element = document.getElementById("box");
console.log(element)
  
element.style.backgroundImage = "url(bruno-zoli.jpg)";
element.style.backgroundSize = "cover";

element.style.textAlign = "center";
element.style.fontWeight = "bold";
element.style.fontSize = "3rem";
element.style.display = "flex"
element.style.justifyContent = "center"
element.style.alignItems = "center"
element.style.boxShadow = "0 0 3px 2px rgba(0, 0, 0, 50%)"

element.style.cursor = 'pointer'

element.innerHTML = "Pet Me...";

let image = document.getElementById("image");
image.setAttribute("alt", "wetssapp");
image.setAttribute("src", "https://www.androidpolice.com/wp-content/uploads/2018/09/whatsapp-thumbnail-icon.png");

let multiples = document.getElementsByClassName('multiple')
console.log(multiples)
for (let i = 0; i < multiples.length; i++) {
    multiples.item(i).style.color = 'white';
    multiples.item(i).style.fontSize = '2rem';
    multiples.item(i).style.display = 'flex';
    multiples.item(i).style.justifyContent = 'center';
    multiples.item(i).style.alignItems = 'center';
    multiples.item(i).style.padding = '0.5rem';
    multiples.item(i).innerHTML = 'HELLO';
  }