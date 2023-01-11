console.log("30 days of js")

console.log(['ömer','Kartli','1276'])

console.log(
    user9={
        name:'ömer',
        age:25
    }
)
let age=25;
console.log(" ben ömer %d yaşındayım %d de doğdum",age,1996)

console.log(
    "%c DUR!", 'font-size:50px; font-family:Arial; color:red; text-shadow:0 0 10px rgba(255,255,.25)');



console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:blue; font-size:25px'
    ) // log output green red and yellow text

console.warn("uyarı mesajı");

console.error("Ne yaptın error verdiridin aaw");

let names10=['ömer','ahmet','osman','ilkan']
console.table(names10)

console.time('calc m arr');
console.log(new Array(10e3).fill("abc").map((value,index)=>index));
console.timeEnd('calc m arr');

console.assert(15<6,'nasıl %cbüyük ','color:red; font-size:30px')// durum doğruysa hiç bişey yapma yanşsa mesajı ver

const test11=()=>{
    console.count('test called')//how many times callaed this functionnn
}
test11();
test11();
test11();
test11();
test11();

//console.clear(); clear console