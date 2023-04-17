// // Functions - https://ed.devmountain.com/materials/f39/lectures/functions/



// // Data Type Conversion
// console.log(' ')
// console.log('Data Type Conversion ---------------')

// let originValue = null
// let boolConv = Boolean(originValue)
// console.log(boolConv)

// const myVar = 5
// const myVarTwo = Boolean(5)
// console.log(myVarTwo)

// const someVar = ''
// const someVarTwo = Boolean(someVar)
// console.log(someVarTwo)

// const bool = true
// const boolTwo = Number(true)
// console.log(boolTwo)

// // We can use a + as shorthand for Number.

// const string = '42ft'
// const withNumber = +(string)
// const withParseInt = parseInt(string)
// console.log(withNumber)
// console.log(withParseInt)

// const evenNumber = 22
// const stringNumber = String(evenNumber)
// console.log(stringNumber)

// const myBool = false
// const phrase = 'That is ' + myBool
// console.log(phrase)

// const oddNumber = 3
// const stringThree = 3 + ''
// console.log(stringThree)

// // String Methods
// console.log(' ')
// console.log('String Methods ---------------')

// const myString = 'devmountain'

// console.log(myString.includes('ou'))
// console.log(myString.startsWith('v'))
// console.log(myString.endsWith('n'))
// console.log(myString.length)




// let lowerString = 'lowercase letters'
// lowerString.toUpperCase()
// console.log(lowerString)

// lowerString = lowerString.toUpperCase()
// console.log(lowerString)

// let upperString = lowerString.toUpperCase()
// console.log(upperString)

// const whitespace = '   code  '
// const newWhitespace = whitespace.trim()
// console.log(newWhitespace)

// const crazyString = 'tHiS is A StrINg'
// const upperCrazy = crazyString.toUpperCase()
// const lowerCrazy =crazyString.toLowerCase()
// console.log(upperCrazy)
// console.log(lowerCrazy)

// const shortStory = 'Once upon a time, there was a dragon. He was awesome. The end.'
// const noFirstE = shortStory.replace('e', 'x')
// console.log(noFirstE)
// const noLetterE = shortStory.replaceAll('e', 'x')
// console.log(noLetterE)

// const statement = 'It is your birthday.'
// const splitStr = statement.split(' ')
// console.log(splitStr)
// const splitOnLetter = statement.split('t')
// console.log(splitOnLetter)

// const reJoin = splitStr.join()
// console.log(reJoin)
// const noComma = reJoin.replaceAll(',', ' ')
// console.log(noComma)

// const jsStatement = 'JS rocks'

// const splitStr2 = jsStatement.split('')
// console.log(splitStr2)

// const arrayOfWords = ['North', 'South', 'East', 'West']
// const joinWithCommas = arrayOfWords.join()
// console.log(joinWithCommas)
// const joinWithNoCommas = arrayOfWords.join('')
// console.log(joinWithNoCommas)
// const joinWithSpaces = arrayOfWords.join(' ')
// console.log(joinWithSpaces)
// const joinWithPlus = arrayOfWords.join(' + ')
// console.log(joinWithPlus)

// // The What & Why of Functions
// console.log(' ')
// console.log('The What & Why of Functions ---------------')

// let hermioneScore = 44
// hermioneScore += 5
// hermioneScore *= 2
// console.log(hermioneScore)

// function calculateScore(studentScore) {
//     studentScore += 5
//     studentScore *= 2
//     return studentScore
//   }
//   let hermioneScore2 = calculateScore(44)
//   let harryScore = calculateScore(41)
//   let malfoyScore = calculateScore(39)
//   let crabbScore = calculateScore(9)
//   console.log(hermioneScore2)
//   console.log(harryScore)
//   console.log(malfoyScore)
//   console.log(crabbScore)

  // Anatomy of a Function
  // console.log(' ')
  // console.log('Anatomy of a Function ---------------')

  // function doSomething() {

  // }

  // function doSomethingElse(withThis) {
  //   console.log(withThis)
  // }

  // function doSomethingElse(withThis) {
  //   console.log(withThis)
  // }


  function quadraticFormulaPlusPart(a, b, c, isPlus){
    let topOfFraction 
    
    if(isPlus){
      topOfFraction = -b + Math.sqrt((b * b) - (4 * a * c))
    }else{
      topOfFraction = -b - Math.sqrt((b * b) - (4 * a * c))
      }
    let bottomOfFraction = 2 * a
let x = topOfFraction / bottomOfFraction
return x
  }

  let answer1a = console.log(quadraticFormulaPlusPart(5, 6, 1, true))
  let answer1b = console.log(quadraticFormulaPlusPart(5, 6, 1, false))


// // Calling a Function
// console.log(' ')
// console.log('Calling a Function ---------------')

// function logMyName(name) {
//     console.log(name)
//   }
  
//   logMyName('Cameron')
//   // How does this work, if console.log was above logMyName('Cameron') and the code reads top to bottom???

//   function sumNumbers(num1, num2) {
//     console.log(num1 + num2)
//   }
  
//   sumNumbers(3, 9)
//   // Same question???

//   function sumNumbers(num1, num2) { // removed 151 and then 153 - 155 didn't print, but removed 150-151 and they did???
//     console.log(num1 + num2)
//   }
//   sumNumbers(3, 9)
//   sumNumbers(12, 33)
//   sumNumbers(-15, 15)

//   function calculateTotal(item1, item2) {
//     console.log(item1 + item2)
//   }  
//   calculateTotal(6.59, 9.99)

//   let purse = 20
// function calculateTotal(item1, item2) {
//   return item1 + item2
// }
// purse -= calculateTotal(6.59, 9.99)   // updates purse to equal 20 - 16.58 (now I'm totally lost???)

// // Scope
// console.log(' ')
// console.log('Scope ---------------')

// let age = 21
// function logDetails() {
//   let name = 'Tyler'
//   console.log(`My name is ${name} and I am ${age}.`)
// }
// // Why didn't this print?

// // let age = 21
// // function logDetails() {
// //   let name = 'Tyler'
// // }
// // console.log(`My name is ${name} and I am ${age}.`)

// // Other Function Syntaxes
// console.log(' ')
// console.log('Other Function Syntaxes ---------------')

// function giveMeFive() {
//     return 5
// }

// const sayHi = function() {
//     return 'Hi!'
// }

// const sayBye = () => {
//     return 'Bye!'
// }

// // Arrow Functions
// console.log(' ')
// console.log('Arrow Functions ---------------')

// const returnParam = item => {
//     return item
// }
// const makeArr = (one, two, three) => {
//     let arr = [one, two, three]
//     return arr
// }                    // what is different???

// // const giveMeFive = () => 5
// // const addFive = num => num + 5
// // dont' need 'return' keyword in one-line arrow functions.

// const makePriceObj = number => ({price: number}) // wrapping the object’s curly braces in parentheses so that they’re not mistaken for the curly braces that hold function blocks.

// const makeLargeObj = (str, num, arr) => (
//     {
//         word: str,
//         integer: num,
//         list: arr
//     }
// )  // You can also wrap implicit returns in parentheses and still have them on a new line.

