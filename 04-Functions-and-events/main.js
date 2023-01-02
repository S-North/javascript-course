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

element.addEventListener('click', () => {
    // element.innerHTML === "Miow" ? element.innerHTML = "Woof" : element.innerHTML = "Miow"
    if (element.innerHTML === "Miow") {
        element.innerHTML = "Woof"
    } else element.innerHTML = "Miow"
})