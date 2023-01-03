let element = document.getElementById("box");
console.log(element)
element.innerHTML = "Pet Me...";

function changeText () {
    console.log('changeText ran')
    // element.innerHTML = "Miow"
    if (element.innerHTML === "Miow") {
        element.innerHTML = "Woof"
    } else element.innerHTML = "Miow"
}

// element.addEventListener('click', () => changeText())