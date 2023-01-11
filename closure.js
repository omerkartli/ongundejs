// closure  iç içe istediğimiz kadar fonksiyon yazabiliriz.
// eğer içerdeki fonsiyon üst fonksiyondaki bir varaible a  

function outherFunc(){
    let count=0;
    function innerFunc(){
        count++
        return count
    }
    return innerFunc
}

const innerFunc=outherFunc()

console.log(innerFunc())//1
console.log(innerFunc())//2
console.log(innerFunc())//3

function counter(){
    let count=0;
    function setCount(){
        count++
        return count
    }
return setCount
}

let count=counter()
console.log(count)
console.log(count())//1
console.log(count())//2
console.log(count())//3




function upDown(){
    let count=0;
    function up(){
        count++
        return count;
    }
    function down(){
        count--
        return count;
    }
    return {
        yukari:up,
        asagi:down
    }
}
let count2=upDown()
console.log(count2.yukari())//1
console.log(count2.yukari())//2
console.log(count2.yukari())//3
console.log(count2.asagi())//2