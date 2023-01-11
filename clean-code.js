//boşluk bırak her şeyden sonra alt alta yaz

let firstName = 'Ömer'// tektırnak tercihen
let lastName = 'KARTLI'// virgüller kullnma 
let country = 'Türkiye'// sonlardaki noktalı virgül artık
let city = 'Ankara'


const PI = Math.PI
const GRAVITY = 9.81// asebenah küçük yazmış ama büyük güzel

// arrays boşluklar ve İSİMDE ÇOĞUL kullan
const names32 = ['Osman', 'İlkan', 'Yasin', 'Osman']
const numbers32 = [0, 3.14, 9.81, 37, 98.6, 100]
const languages32 = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills32 = ['HTML', 'CSS', 'JavaScript', 'React', 'angular', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

// function  ok arrow fonksiyon kullan olabildiğince
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// function which calculates a square of a number
const square32 = (n) => n * n

console.log(square32(85))//  7225

// a function which generate random hexa colors
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

console.log(hexaColor())//  #e19283

// a function which shows date and time
const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}
console.log(showDateTime())// 1/11/2023, 5:22:28 PM

console.log(
    new Date().toLocaleDateString()//  1/11/2023
)
console.log(
    new Date().toLocaleString()//  1/11/2023, 5:23:28 PM
)

//loops
for (let i = 0; i < 5; i++){
    console.log()
}

const names33 = ['Ömer', 'Osman', 'İlkan', 'Yasin']

// iterating an array using for of
for( const name of names33) {
    console.log(name.toUpperCase())
}

// iterating array using forEach 
names33.forEach((name) => name.toUpperCase())


const person33 = {

  skills: ['Olması gerekenler','HTML','CSS','JavaScript','React','Angular','MongoDB','Python','D3.js'],
  isMarried: false
}
for(const key in person33) {
    console.log(key)
}


// objelerde çoğul değil küçük harfle başla
const person34 = {
    firstName: 'Ömer',
    lastName: 'kartlı',
    age: 25,
    country: 'SUUD',
    city: 'Mekke',
    skills: ['HTML','CSS','JavaScript'],
    isMarried: false
  }


  // syntax koşullularda
let condition=true
if (condition) {
    // this part of code run for truthy condition
   } else {
    // this part of code run for false condition
   }
let num = 3
if (num > 0) {
 console.log(`${num} is a positive number`)
} else {
 console.log(`${num} is a negative number`)
}


// if else if else if else

let z = 0
if (z > 0) {
 console.log(`${z} is a positive number`)
} else if (z < 0) {
 console.log(`${a} is a negative number`)
} else if (z == 0) {
 console.log(`${z} is zero`)
} else {
 console.log(`${z} is not a number`)
}


// ternary koşul teksatırlarda

let isRaining = true
isRaining
 ? console.log('You need a rain coat.')
 : console.log('No need for a rain coat.')


// Classlarda ilk harf büyük UpperCamelCase yani
class Person55 {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  