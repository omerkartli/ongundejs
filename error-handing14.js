try{
    let fnamee='öer';
    let lnamee='kasla';
    var funame=fnamee+' ' +lnamee;
    //throw "öylesine bir hata ";
    //throw 10;
    //throw true;
    throw new Error('Bir hata var!')
}catch(e){
    console.log('Bir hata var')
    console.log(e)
    console.log(e.name)
    console.table(e.message)
    console.table(e)
    
}
console.log(funame)

/*let age12=prompt("Kaç yaşındasın?");

try{
    if(age12>26)throw new Error('yalan diyor')

}catch(e){
    alert(e.message) 
}*/

/* let aaaa='sas';
let bb='asa';
let fccc=aaaa+bbb
console.log(fccc) *///reference error


//let squaree=2x2;//SyntaxError kod durur
//console.log(squaree)

//console.log(funame.toFixed(2))//TypeError




