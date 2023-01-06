console.log("Regular Expressions")
console.log("Regular Expressions")
console.log("Regular Expressions")
console.log("Regular Expressions")
console.log("Regular Expressions")

//Bir kalıp, bir metin veya bir çeşit benzerlik gösteren herhangi bir kalıp 
//olabilir. Örneğin, bir e-postadaki spam kelimesi, bir e-postada aramakla 
//ilgilendiğimiz bir kalıp olabilir veya bir telefon numarası biçimindeki numara,
// aramakla ilgilenebileceğimiz bir şey olabilir.

//g: tüm metinde bir model aramak anlamına gelen global bir bayrak
//i: büyük/küçük harf duyarsız bayrağı (hem küçük hem de büyük harfleri arar)
//m: çok satırlı

// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

let patterno='love';
let flago='gi'
let regExo =new RegExp(patterno,flago)

let pattern1 = 'love'
let flag = 'gi'
let regEx1 = new RegExp(pattern, flag)

let regEx2= new RegExp(pattern,flag);

let regEx3=new RegExp('love','gi')


let regEx4=/love/gi;  //kısa RegExp tanımı



const strreg='I love JS';
let regEx5=/love/gi;
const result5=regEx5.test(strreg)
console.log(result5)

////.test içinde var mı yok mu kontrol eder 
let word =/salak/i
let comment='selam';
//let comment=prompt('yorum yaz')
//console.log(word.test(comment));

if(word.test(comment)){
    console.log("hayir sensin")
}

let str3='I love JS I lOve ekas';

console.log(str3.match(/love/ig))//hem büyük küçük hem de hepsini ver
console.log(str3.search(/love/ig))



const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/gi, 'JavaScript')
console.log(matchReplaced)

const txt3 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt3.replace(/%/g, '')
console.log(matches) 

let str4=' ben Ömer KARTLI 25 yasindayim ve 1996 da doğdum'
console.log(str4.match(/[0-9]/g))
console.log(str4.match(/\d+/g))//sayıları bul + işsreti en az bir veya fazlası
console.log(str4.match(/\D/g))//sayı olamyanalrı bul

let firstnamereg="karlI";

console.log(/^[a-z]+$/i.test(firstnamereg))//harfle başla harfle bitir doğru mu
//^[] olmasın parantez içinde 

const txt5 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern5 = /[Ee]-?mail/g  // ? means optional
matches5 = txt5.match(pattern5)

console.log(matches5)  // ["e-mail", "email", "Email", "E-mail"]

let pattern6 = /^[A-Z][a-z]{3,12}$/;
let name6 = 'Asabeneh';
let result = pattern6.test(name6)

console.log(result) // true

let date8='2020-12-11'

let dateyaz=date8.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
console.log(dateyaz.groups)