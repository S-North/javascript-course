const form = document.getElementById('form')
const input = document.getElementById('input')
const result = document.getElementById('result')
const messages = document.getElementById('messages')

input.focus()

const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.input.value

    // result.innerHTML = e.target.input.value
    input.value = ''
    input.focus()

    // add a new element to the list
    const message = document.createElement('p')
    message.innerHTML = "felix: " + value
    messages.appendChild(message)
}

form.addEventListener('submit', e => handleSubmit(e))

