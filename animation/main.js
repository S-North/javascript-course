// get the size of the player area
const CANVAS = document.getElementById('canvas')
const HEIGHT = CANVAS.getBoundingClientRect().height
const WIDTH = CANVAS.getBoundingClientRect().width

// get the root variables
const cssRoot = document.querySelector(':root');
var cssRootStyle = getComputedStyle(cssRoot)
// let playerX = cssRootStyle.getPropertyValue('--playerX')
// let playerY = cssRootStyle.getPropertyValue('--playerY')

let playerX = HEIGHT / 2
let playerY = WIDTH / 2

let playerXpos = HEIGHT / 2
console.log(playerXpos)
cssRoot.style.setProperty('--playerX', (HEIGHT / 2) + "px");
cssRoot.style.setProperty('--playerY', (WIDTH / 2) + "px");

const player = document.getElementById('player')

document.addEventListener('keypress', e => {
    const SPEED = 4
    
    if (e.key === 'w') {
        playerX -= SPEED
        cssRoot.style.setProperty('--playerX', playerX + "px");
    }

    if (e.key === 's') {
        playerX += SPEED
        cssRoot.style.setProperty('--playerX', playerX + "px");
    }

    if (e.key === 'a') {
        playerY -= SPEED
        cssRoot.style.setProperty('--playerY', playerY + "px");
    }

    if (e.key === 'd') {
        playerY += SPEED
        cssRoot.style.setProperty('--playerY', playerY + "px");
    }
})
