const names=new Set([1,2,3,4,'Ömer'])

for (let sayi of names){
    console.log('say',sayi)
}
console.log("---For each---")
names.forEach(name=>console.log(name))

names.add('Kartli',5,6)
names.add(5)
names.add(6)
console.log(names)
console.log(names.size)//length of sets


const dizi1=[1,2,3,4,5,6,45,'kartli']
const diziSet1=new Set();

for (let diz of dizi1){// buraya dizi yazınca diziyi otomatik kendi oluşturdu ya da bi yerdeb aldı
    diziSet1.add(diz)
}

console.log(diziSet1.has(45))
diziSet1.delete(45)
console.log(diziSet1.has(45))
console.log(diziSet1);
//diziSet1.clear()
//console.log(diziSet1);

diziSet1.add(1);
diziSet1.add('Ömer');
diziSet1.add(2);
diziSet1.add('kartli')
diziSet1.add('Kartli')//büyük küçük harf algılar case sensitivity
diziSet1.add(10);
diziSet1.add('1');


const languages = [
    'English',
    'Türkçe',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
const langSet = new Set(languages)//or
   ////or const langSet=new Set(['English',
    //'Türkçe',
    //'English',
   // 'French',
   // 'Spanish',
    //'English',
   // 'French',])
  console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  
const counts = []
  
for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ 
        lang: l, 
        count: filteredLang.length //kaç tane
    })
  }
  console.log(counts)

console.log("Union of sets")
let a=[1,2,3,4,5]
let b=[3,4,5,6]
let c=[...a,...b]

let C= new Set(c);
console.log(C)

console.log("Intersection of sets")
let ai=[1,2,3,4,5]
let bi=[3,4,5,6]

let Ai=new Set(ai)
let Bi=new Set(bi)
const ci=a.filter(num=>Bi.has(num))

const Ci=new Set(ci)
console.log(Ci)

console.log("Difference of sets")

let ad=[1,2,3,4,5]
let bd=[3,4,5,6]

let Ad= new Set(ad)
let Bd= new Set(bd)
const cd=ad.filter(num=>!Bd.has(num))// Adiff B a-b
const dd=bd.filter(num=>!Ad.has(num))//B dif A

const Cd=new Set(cd)//to set 
const Dd=new Set(dd)
console.log(Cd);
console.log(Dd);

console.log(typeof ad)
 
console.log("----Map----Map---Map---")

const map= new Map();

map.set(1,'num1')
map.set('sa','str1')
map.set('1','str2')
map.set(true,'bool1')
map.set(false,'bool2')
console.log(map)

console.log(map.get(1)+" "+map.get('1'))


