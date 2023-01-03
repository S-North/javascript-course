const form = document.getElementById('form')
const input = document.getElementById('text')
const result = document.getElementById('result')

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.text.value)
    result.innerHTML = e.target.text.value
    text.value = ''
    text.focus()
}

form.addEventListener('submit', e => handleSubmit(e))

