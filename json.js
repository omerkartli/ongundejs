//JSON type a uygun yazılım
let sampleJSON=`[
    {
        "firstName":"Ömer",
        "lastName":"Kartlı",
        "age":24,
        "email":"amk@gmail..com"
      },
      {
        "firstName":"osman",
        "lastName":"bağcı",
        "age":29,
        "email":"osm@gmail.com"
      },
      {
      "firstName":"Yasbu",
      "lastName":"buzgu",
      "age":22,
      "email":"yasbu@gmail.com"
      }
]`


///JSON to js
try{
    let users=JSON.parse(sampleJSON, (key,value)=>{
        return key=='name' ? value.toUpperCase(): value
    })
    console.log(typeof sampleJSON)
    console.log(typeof users)
    console.log(users)
}catch(e){
    console.log(e)
    console.log(e.name)
    console.log(e.message)
}

// js obje tipinde veri

let categories=[
    {
        name:'CSS',
        count:5,
        date:new Date()

    },
    {
        neme:'JS',
        count:3,
        date: new Date()
    }
]
console.log(categories)

///js to JSON
let jsCategories=JSON.stringify(categories,['count','name'],4) //istediklerini 4 boşluk bırak
console.log(jsCategories)



