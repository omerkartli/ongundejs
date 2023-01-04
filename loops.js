for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }

const countries = ['Türkiye','Azerbaijan','Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArrCountries = []
for(let i = 0; i < countries.length; i++){
  newArrCountries.push(countries[i].toLocaleUpperCase('TR'))
}

console.log(newArrCountries)

const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

const numbers2 = [1, 2, 3, 4, 5]

for (const num of numbers2) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers2) {
  console.log(num * num)
}

for(let i = 0; i <= 5; i++){
    if(i == 3){
      console.log(`${i} sayısı bulundu`)
      break
      
    }
    console.log('sayi:'+i)
  }

for(let i = 0; i <= 5; i++){
    if(i == 3){
      console.log(`${i} sayısı atlandı`)   
      continue
    }
    console.log(i)
  }

try{
    tets();
    console.log("try çalıştı")
}catch{
    console.log("kötü oldu");
}finally{
    console.log("Finallly!");
}

for(let i = 0; i <= 5; i++){
    if(i == 3){
      console.log(`${i} sayısı atlandı`)   
      continue
    }
    console.log(i)
  }


