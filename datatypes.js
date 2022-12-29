let numOne=5
let numTwo=3

console.log(numOne==numTwo)

let js="javaScript"
let py="Python"
console.log(js==py)// primetivlerde true

let nums=[1, "Ömer", 2, 3]// arraylar non primitive 
// bu yüzden diziler fonksyonlar ve objeler karşılaştırılamaz
// referans türlerine göre değişiklik olur
console.log(nums)
nums[2]=5
console.log(nums)

let list1=[1,2,3]
let list2=[1,2,3]
console.log(list1==list2) 

let user1={
    name:"Omer",
    surName:"Kartlı",
    age:25
};

let user2={
    name:"Omer",
    surName:"Kartlı",
    age:25
};
console.log(user1==user2) 



const PI=Math.PI

console.log(PI)

console.log(Math.round(PI))// en aykına nearest
console.log(Math.ceil(PI))//yukarı
console.log(Math.floor(PI))//aşağı
console.log(Math.min(PI,35,1))
console.log(Math.max(PI,8,3))

const randNum=Math.random()//[0-1) sayı üret

console.log(randNum)

let name="Ömer"
let surName="Kartli"
let a=50,b=10.5;
let fullName=name+" "+surName
console.log(fullName)
let fullName2=`${name} ${surName}
test 
falan 
a+b=${a+b}
` //concat modern yöntem
console.log(fullName2)

console.log("----------------Strings----------------")

let string="Ömer Kartlı"

console.log(string.toLocaleUpperCase,string.length)


//string.startsWith(substring)

let string2 = "Omer kartlı 25 yaşında"

console.log(string2.startsWith("Om"))//T
console.log(string2.startsWith("om"))//F

console.log(string2.endsWith("da"))//T

console.log(string2.match("kartlı"))
console.log(string2.match(/kartl/))
console.log(string2.match(/kartl/g))
console.log(string2.match(/kartl/gi))
console.log(string2.search("kartlı"))

console.log(string2.search("/Kart/gi"))

console.log("--------------veri tipi dönüşümleri------------")

//string to INT parseInt(), Number(), Plus sign(+)

let num2='10'

let numInt= parseInt(num2) //parseFloat ondaklıklı için
console.log(typeof numInt, numInt)
let num3 = '10'
let numInt2 = +num3

console.log(numInt2) // 10

///String to Float parseFloat() Number(), Plus sign(+)
let num = '9.81'
let numFloat = parseFloat(num)

console.log(typeof numFloat, numFloat) // 9.81

let num4 = '9.81'
let numFloat4 = Number(num4)

console.log(numFloat4) // 9.81

let num5 = '9.81'
let numFloat5 = +num5

console.log(numFloat5) // 9.81
///Float to Int
let num6 = 9.81
let numInt6 = parseInt(num6)

console.log(numInt6) // 9

console.log("----------------------3.Day------------------///")

let firstName
console.log(firstName) //not defined, not assigned value

let empty = null
console.log(empty) // -> null , means no value

let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(remainder, powerOf) // 7,1,12,1.33,1, 64
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false

//// alert gibi window komutları
let number7 = prompt('Enter number', 'number goes here')
console.log(number7)
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be 
//true or false based on what you click on the dialog box

////--------------------------Date-----------------------/////
const now = new Date()
console.log(now)

const now1 = new Date()
console.log(now1.getFullYear()) 

const now2 = new Date()
console.log(now2.getDate()) // 4,
// because the day of the month is 4th,  day(1-31)

const now3 = new Date() //
console.log(now3.getTime()) // , this is the number 
//of seconds passed from 

const now4 = new Date()
const year = now4.getFullYear() // return year
const month = now4.getMonth() + 1 // return month(0 - 11)
const date = now4.getDate() // return date (1 - 31)
const hours = now4.getHours() // return number (0 - 23)
const minutes = now4.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)


//---------------------Koşullar  4.GÜn DAY 4----------------------//
let a1 = prompt("sayı gir:"," sayıya bakalım")
if (a1 > 0) {
  console.log(`${a1} is a positive number`)
} else if (a1 < 0) {
  console.log(`${a1} is a negative number`)
} else if (a1 == 0) {
  console.log(`${a1} is zero`)
} else {
  console.log(`${a1} is not a number`)
}

let num9 = prompt('Enter number');
switch (true) {
  case num9 > 0:
    console.log('Number is positive');
    break;
  case num9 == 0:
    console.log('Numbers is zero');
    break;
  case num9 < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')