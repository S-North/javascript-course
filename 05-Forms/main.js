const form = document.getElementById('form')
const input = document.getElementById('input')
const result = document.getElementById('result')
const messages = document.getElementById('messages')
const joined = document.getElementById('joined')
const reversed = document.getElementById('reversed')
const totalWords = document.getElementById('totalWords')

input.focus()

const messageArray = []

const handleSubmit = (e) => {
    e.preventDefault()

    const inputValue = e.target.input.value
    console.log(inputValue.length) // length method
    
    // add a new element to the list
    const message = document.createElement('p')
    message.innerHTML = "felix: " + inputValue
    messages.appendChild(message)
    
    // add the string to the array + array.length
    messageArray.push(inputValue)
    console.log(messageArray)
    console.log(messageArray.length)
    
    // update the yoda text
    reversed.innerHTML = reverseWords(messageArray[messageArray.length -1])
    
    // join elements of arrays together
    joined.innerHTML = messageArray.join('. ')

    // update the word count
    totalWords.innerHTML = "Total Words: " + wordCount(messageArray)
    
    // reset the input box and focus it
    input.value = ''
    input.focus()
}

form.addEventListener('submit', e => handleSubmit(e))

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
        console.log(array[i])
        wordCount += array[i].split(' ').length
    }

    return wordCount
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