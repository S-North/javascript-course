const form = document.getElementById('form')
const input = document.getElementById('input')
const result = document.getElementById('result')
const messages = document.getElementById('messages')
let counter = 1

const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.input.value

    // result.innerHTML = e.target.input.value
    input.value = ''
    input.focus()

    // add a new element to the list
    const message = document.createElement('p')
    console.log(message)
    message.innerHTML = "felix: " + value
    console.log(message)
    messages.appendChild(message)
    counter++
}

form.addEventListener('submit', e => handleSubmit(e))

