const board = document.getElementById('board')
const game = document.getElementById('game')
const playingarea = board.getBoundingClientRect()
const scoreboard = document.getElementById('score')

let score = 0
let items = 1
let speed = 2000

function sleep(interval) {
    // 
    return new Promise(resolve => setTimeout(resolve, interval));
}

function randomNumber (min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function randomLocation () {
    const left = randomNumber(0, playingarea.width - 32)
    const top = randomNumber(0, playingarea.height - 32)

    return {left, top}
}

async function createMole () {
    console.log(speed)
    const moleId = items
    const mole = document.createElement('div')
    const location = randomLocation()

    mole.setAttribute('id', items)
    mole.className = 'mole'
    mole.style.left = location.left + "px"
    mole.style.top = (location.top) + "px"
    mole.addEventListener('click', e => {
        console.log(e.target.id)
        removeMole(e.target.id)
        score++
        scoreboard.innerHTML = score
    })

    board.appendChild(mole)

    // increment the id for the next mole
    items++

    // manage the speed of the new moles being created
    await sleep(speed)
    speed -= 50 // speed up the moles

    if (speed > 0) createMole()
    // console.log('start timeout')
    // setTimeout(console.log('finished timeout'), 5000)
    // moleTimeout(moleId)    
}

async function removeMole (id) {
    const mole = document.getElementById(id)
    console.log(mole)
    board.removeChild(mole)
}

async function moleTimeout (moleId) {
    setTimeout(removeMole(moleId), randomNumber(3000, 5000))
}

createMole()