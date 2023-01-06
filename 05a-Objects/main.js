const userForm = document.getElementById('usernameForm')
const usernameLabel = document.getElementById('displayUser')
const form = document.getElementById('form')
const input = document.getElementById('input')
const result = document.getElementById('result')
const messages = document.getElementById('messages')
const joined = document.getElementById('joined')
const reversed = document.getElementById('reversed')
const totalWords = document.getElementById('totalWords')
const totalLetters = document.getElementById('totalLetters')

input.focus()
userForm.addEventListener('submit', e => handleUserForm(e))
form.addEventListener('submit', e => handleSubmit(e))

const messageArray = []

function handleUserForm (e) {
    e.preventDefault()

    const userValue = e.target.user.value
    if (!userValue) return
    console.log(userValue)

    usernameLabel.innerHTML = userValue
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.input.value) return

    const inputValue = {
        username: usernameLabel.innerHTML || 'anonymous',
        text: e.target.input.value,
        date: new Date
    }
    console.log(inputValue)

    // string methods
    stringMethods(inputValue)
    
    {
        // add a new element to the list
        const container = document.createElement('div')
        container.className = 'message'

        const firstLine = document.createElement('div')
        firstLine.style.display = "flex"
        firstLine.style.gap = "1rem"
        // profile.style.maxWidth = "5rem"

        const username = document.createElement('p')
        username.innerHTML = inputValue.username
        username.style.fontWeight = "bold"
        username.style.minWidth = "7rem"
        firstLine.appendChild(username)

        const text = document.createElement('p')
        text.innerHTML = inputValue.text
        firstLine.appendChild(text)

        container.appendChild(firstLine)

        const date = document.createElement('em')
        date.innerHTML = inputValue.date
        date.style.fontSize = "small"
        date.style.color = 'grey'
        container.appendChild(date)

        messages.appendChild(container)
    }

    // add the object to the array + array.length
    messageArray.push(inputValue)
    console.log(messageArray)
    console.log(messageArray.length)
    
    // update the yoda text
    reversed.innerHTML = reverseWords(messageArray[messageArray.length -1].text)
    
    // join elements of arrays together
    // joined.innerHTML = messageArray.join('. ')

    // as a loop
    let newString = ''
    for (let i = 0; i < messageArray.length; i++) {
        newString = newString.concat(messageArray[i].text + '. ')
    }
    joined.innerHTML = newString

    // high level methods
    // joined.innerHTML = messageArray.map(message => message.text).join('. ')

    // update the word count
    totalWords.innerHTML = "Total Words: " + wordCount(messageArray)
    totalLetters.innerHTML = "Total Letters: " + letterCount(messageArray)
    
    // reset the input box and focus it
    input.value = ''
    input.focus()
}

function reverseWords( string ) {
    // guard clause
    // if the array is empty, return an empty string
    if ( !string || typeof string !== 'string') return ""

    // split the string into an array and reverse it
    let reversedArray = string.split(' ').reverse()

    // join the array back into a string
    let reversedString = reversedArray.join(' ')

    // return the reversed string
    return reversedString
    
    // return string.split(' ').reverse().join(' ')
}

function wordCount ( array ) {
    // guard clause
    if (!array || array.length < 0) return 0

    let wordCount = 0
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        wordCount += array[i].text.split(' ').length
    }

    return wordCount
}

function letterCount ( array ) {
    // guard clause
    if (!array || array.length < 0) return 0

    let letterCount = 0
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        letterCount += array[i].text.length
    }

    return letterCount
}

function stringMethods ( inputString ) {
    // guard clause
    if (!inputString || typeof inputString !== 'object') return 

    console.log(inputString)
    console.log(inputString.text.length) // returns the number of characters
    console.log(inputString.text.slice(0, 3)) // returns the first 3 characters
    
    // replace using regex !!
    console.log(inputString.text.replace(/the/g, 'banana')) // returns the first 3 characters
    

    console.log(inputString.text.toUpperCase())
    console.log(inputString.text.toLowerCase())    

}

function updateText () {
    // get the number of elements in an array
    let arrayLength = messageArray.length

    // access an array element using its index
    let firstElement = messageArray[0]
    let secondElement = messageArray[1]
    let thirdElement = messageArray[2]

    // you can also do this with strings (because strings are actually arrays of characters!)
    let myString = 'hello world'
    myString[0] // this equals 'h'
    myString[6] // this equals 'w'
    myString[-1] // this equals 'd'
}