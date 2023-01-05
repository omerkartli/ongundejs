var msg='test'
function test(){
    console.log(msg)//alttaki var msg olmasa yukardan alır fakat 
    //aşağıdakini var msg olarak başına alıyor fonksiyonun;
    var msg='hello'
    console.log(msg)
}
test()//undefined  hello
console.log(msg)//test

// blok{} 
// var  --> function scope--> global scope
{
    var aiss=15;
}
console.log(aiss)//15


x=10
console.log(x)
var x// sonradan var yapabiliyoruz let ve const ta bu yemez
 

// let  --> block scope // değişir let bloun içindeyse dışardan erişilmez
//{
    let ais=123;
//}
//console.log(ais)// not defined

//xl=10
//console.log(xl)
//let xl;//xl tanımlı önceden diyor var da bunu yiyor 



//// const--> block scope // sabit

//xc=10
//console.log(xc)
//onst xc;//xc tanımlı önceden diyor var da bunu yiyor 

//let değişebilir mutable
let yl=10
yl=11
console.log(yl)
yl=11
//////const değişemez unmutable AMA ARRAY içi ve OBJECT içi değişebilir
//const yc=12
//yc=15;//contant var typeError
//console.log(yc)

const user={
    name:'ömer',
    surname:'kartli'
}
user.name='OMER';
console.log(user) //name:OMER 

for(let k=1; k<=10; k++){
    console.log(k)
}

//console.log("diş taraftaki let ile : "+ k)//k is not defined

for(var j=1; j<=10; j++){
    console.log(j)
}
console.log("diş taraftaki var ile : "+ j)//11

