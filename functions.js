console.log("---------------------Functions-----------------------")
console.log("---------------------Functions-----------------------")
console.log("---------------------Functions-----------------------")
console.log("---------------------Functions-----------------------")
function generator(input){
    var number=input;
    return function(){
        return number*2;
    };
}

var calc=generator(43);
console.log(calc());


function generator1(input){
    console.log (input*2);
}
generator1(43);

(function calc(){
    console.log("Calc");
})();// eğer funksiyonu parantez içine alır sonuna () eklersen 
//fonsiyon excute olur

console.log("--------------------------")

var obj={};
(function calc3(input){
    obj.name='Ömer';
})(obj);

console.log(obj);// obj is global if it not global so you have error.

console.log("--------------------------")

function message2(message){
    console.log(message);
    console.log(arguments);// print all arguments
    console.log(arguments[1]);// print only [1] argument if it is exist=5
    console.log(arguments[2]);//undefined
    console.log(arguments.length)//2
}

message2('Sa',5)
console.log(message2.name)

console.log("--------------------------33")
var msg=function(message){
    console.log(message);
};

console.log(msg.name);//message vermemesi gerkiyordu. verdi?????
console.log("--------------------------34")
function message5(message){
    console.log(this.message);//undefined
};
message5();

console.log("-------functions30gündejsVideoTürkçe-------------")

function saDe(){
    console.log("sa");
};
saDe();

function multiply(num1, num2){
    return num1*num2;
}

let calculation2=multiply(3,6);//return ettiği için bir let'e tanımlayabildim
console.log(calculation2);
console.log("--------------------------35")

function sumArrVal(array) {
    let total = 0
    for(let i=0; i<array.length; i++ ){
        total+=array[i];
    }
    return total;
}
let dizi=[2,4,8,12,17,19,33]
console.log(sumArrVal(dizi));

function sumAllNums() {
    console.log(arguments)
   }
   
sumAllNums(1, 2, 3, 4)

function square(n) {
    return n * n
  }
  
console.log(square(2)) // 4
  
const square2 = n => {
    return n * n
  }
console.log(square2(2))  // -> 4
  
  // if we have only one line in the code block, it can be written as follows, explicit return
const square3 = n => n * n  // -> 4

console.log("Helper function codecademy ")
function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows,columns){
    return monitorCount(rows, columns)*200;
  }
  
  const totalCost=costOfMonitors(5,4)
  
  console.log(totalCost);


console.log("----Concise Body Arrow Functions and Ternary-----")

const plantNeedsWater1 = (day) => {
    return day === 'Wednesday' ? true : false;
  };
  console.log(plantNeedsWater1('Wednesday'))


const plantNeedsWater2 = day => day === 'Wednesday' ? true : false;
console.log(plantNeedsWater2('Wednesday'));


console.log("----Higher Order Function-----")
console.log("----Higher Order Function-----")
console.log("----Higher Order Function-----")
console.log("----Higher Order Function-----")
console.log("----Higher Order Function-----")