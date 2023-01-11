


console.log(localStorage.name)
console.log(localStorage.getItem('name'))
console.log(localStorage.key(0))
/*localStorage.setItem('name','ömer')

console.log(localStorage)*/

const Names=['ömerws','osmanvs','yasbu','ilkanvs']
const User={
    name:'ök',
    surname:'kartli'
}

localStorage.setItem('user', JSON.stringify(User))//obje oalrk geri almak kolay
localStorage.setItem('names',JSON.stringify(Names))

console.log(localStorage)

localStorage.removeItem("keyi yaz sil")



let basket=JSON.parse(localStorage.getItem('basket')) || []
const products =[
    {
        id:1,
        title:'Bilgisyar lenova',
        price:1500
    },
    {
        id:2,
        title:'mause lenova',
        price:150
    },
    {
        id:3,
        title:'klavye lenova',
        price:100
    },
]

function saveToStorage(){
    localStorage.setItem('basket',JSON.stringify(basket))
}

function addBasket(productId){
    basket.push(productId)
    saveToStorage()
    //local de dururu
}

/*addBasket(2)
addBasket(3)
addBasket(5)*/

function removeBasket(productId){
    basket=basket.filter(id => id !== productId)
    saveToStorage()

}

function totalPrice(){
    return basket.reduce((prev, productId) => {
        const product = products.find (p => p.id == productId)
        return prev += products.price
    }, 0)//ilk değer 0 
}

//removeBasket(3)
console.log(basket)
console.log(totalPrice())