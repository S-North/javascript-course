const board = document.getElementById('board')
const playingarea = board.getBoundingClientRect()

console.log(board.getBoundingClientRect())

let score = 0
let items = 1

function randomNumber (min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function randomLocation () {
    const left = randomNumber(playingarea.left, playingarea.right)
    const top = randomNumber(playingarea.top, playingarea.bottom)

    return {left, top}
}

function createMole () {
    console.log('create mole')
    const mole = document.createElement('div')
    const location = randomLocation()
    console.log(location)

    mole.setAttribute('id', items)
    mole.className = 'mole'
    mole.style.left = location.left + "px"
    mole.style.top = location.top + "px"
    board.appendChild(mole)
}

createMole()