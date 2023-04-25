const board = document.getElementById('board')
const game = document.getElementById('game')
const playingarea = board.getBoundingClientRect()
const scoreboard = document.getElementById('score')
const stateButton = document.getElementById('state')

let score = 0
let items = 0
let speed = 2000

const FPS = 60
let state = 'paused'

stateButton.addEventListener('click', () => {
    if (state === 'paused') {
        stateButton.innerHTML = 'Stop'
        state = 'running'
    } else if (state === 'running') {
        stateButton.innerHTML = 'Start'
        state = 'paused'
    }
})

function mainLoop () {
    const startTime = new Date
    let lastTime = new Date

    const running = setInterval(() => {
        let currentTime = new Date
        let delta = currentTime - lastTime 

        if (state === 'running') update({startTime, currentTime})
        // if (state === 'running') render()
        

        lastTime = new Date

        if (state === 'ended' || items - score > 300) {
            clearInterval(running)
            console.log('end game')

            const trumps = document.getElementsByClassName('mole')
            for (let i = 0; i < trumps.length; i++) {
                trumps[i].removeEventListener('click', addMoleEvent)
            }
        }

    }, 1000/FPS)
}

function update ({startTime, currentTime}) {
    if ((currentTime - startTime) / speed > items) {
        console.log('add new item')
        for (let i = 0; i < randomNumber(1, 4); i++) {
            createMole({ currentTime })
        }
        const selection = ['4000', 'hands', 'luck', 'russia']
        let audio = new Audio(`audio/${selection[randomNumber(0, 3)]}.mp3`)
        audio.loop = false
        audio.play()
        if (speed > 400) speed -= 20
        console.log(speed)
        console.log(items)
        console.log(score)
        console.log(items - score)
    }
}

function render () {
    console.log('render')
}

mainLoop()

function randomNumber (min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function randomLocation () {
    const left = randomNumber(0, playingarea.width - 32)
    const top = randomNumber(0, playingarea.height - 32)

    return {left, top}
}

function addMoleEvent (e) {
    console.log(e.target.id)
    let splat = new Audio('audio/splat.mp3')
    splat.loop = false
    splat.play()

    removeMole(e.target.id)

    score++
    scoreboard.innerHTML = score
}

async function createMole ({ currentTime }) {
    console.log(speed)
    const moleId = items
    const mole = document.createElement('div')
    const location = randomLocation()

    mole.setAttribute('id', items)
    mole.setAttribute('data-created', currentTime)
    mole.className = 'mole'
    mole.style.left = location.left + "px"
    mole.style.top = (location.top) + "px"
    mole.addEventListener('click', function addMoleEvent (e) {
        console.log(e.target.id)
        let splat = new Audio('audio/splat.mp3')
        splat.loop = false
        splat.play()

        removeMole(e.target.id)
        
        score++
        scoreboard.innerHTML = score
    })

    board.appendChild(mole)

    // increment the id for the next mole
    items++
}

async function removeMole (id) {
    const mole = document.getElementById(id)
    console.log(mole)
    board.removeChild(mole)
}