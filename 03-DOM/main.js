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