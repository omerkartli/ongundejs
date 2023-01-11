/*
promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     //resolve('işlem başarılı')
     reject('işlem başarısız')
    },1500)
   // resolve('işlem başarılı')
   // reject('işlem başarısız')

})

promise.then((data)=>{
    console.log(data)
}).catch(err=>{
    console.warn(err)
})

*/


///Fetch api  promislerler de kullanılar HTTP ye istek atma

const API_URL="https://jsonplaceholder.typicode.com/posts"

console.log(fetch(API_URL))//promise döndürür

fetch(API_URL)//promise söz ver
    .then(res=>res.json())//sözünü yerine getir
    .then(data=> console.log(data))//json döndür
    .catch(err=> console.error(err))



function getPosts(){
    fetch(API_URL).then(res=>res.json()).then(data=>console.log(data))
}
getPosts()//27 ile aynı fonksiyon

async function getPosts2(){// async öncelik
    try{//asynsc await de hata yakalamak için fetchlerde de aynı şekilde
        const reponse= await fetch(API_URL)//bekle bunun olmasını async olmadan await olmaz 
        const data= await reponse.json()//bekle burayı await olmaz async olmadan
        console.log(data)//şimdi yazdır
    }   catch(err){
        console.error(err)
    }
}
getPosts2()




