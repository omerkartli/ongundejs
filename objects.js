age=27;
var person ={
    'dict-val':'dictvalout',
    name:"Ömer Kartli",
    age:25,
    details:{
        hobbies:['Sports','Running',"Traccing",06 ],
        location:"Germany"
    },
    greet:function(){
        console.log("Hello, I am "+ this.name +" and I am " 
        +age+ " years old");///function or method sor ????
    }
};

console.log(person)
console.log(person.age)
var field = 'name';
console.log(person[field])
console.log(person.details.hobbies)
person.greet()
console.log(typeof person)
console.log(typeof person.name)//string
console.log(typeof person.details)//obj
console.log(typeof person.greet)//func
//console.log(person.dict-val)//NaN
console.log(person['dict-val'])//dictvalout

person.name='osman';
console.log(person.name)
console.log(person)
person.greet()



var pers={
    name:'Anna',
    age:29
}
var anotherPerson= new Object();// another way for create object

anotherPerson.name='Anna';//other for create object
anotherPerson.age=29;
console.log(anotherPerson)
console.log(anotherPerson==pers)//because of referenceType are diff unprimetive


var anotherPerson1=Object.create(pers);
anotherPerson1.name="Anna";
console.log(anotherPerson1.age);

console.log(pers.prototype);
console.log(pers.__proto__);
console.log(pers.toString.apply());




Object.prototype.greet1=function(){
    console.log("Hello proto "+this.name)
};





pers.greet1();//Object.protype=pers gibi oldu 

var Omer=Object.create(pers);
var kartli=Object.create(pers);
kartli.name="yeniad";

Omer.greet1();
kartli.greet1();
console.log(Omer.name);

console.log(kartli.__proto__==pers);
console.log(kartli.__proto__.__proto__==pers.__proto__);
console.log(kartli.__proto__.__proto__==Object.prototype);


console.log(Object.getPrototypeOf(kartli)==pers);






console.log("-----------------Functions---------------")


function Person2(){
    this.name='Ömer funcPerson2';
    this.greet=function(){
        console.log("Hello I am "+this.name);//ikinic güçlü
    }
}

Person2.prototype.greet=function(){
    console.log("Hello function");
};

var person2=new Person2;
//person2.name="Ömerfunct";

person2.greet();

console.log(person2)

console.log(person2.__proto__==Person2.prototype);

Person2.prototype.name='Ömer prot att';//ezemedi
console.log(person2.name);

person2.name="functioni ezer"//en güçlü
Person2.prototype.name='ezmez hiç birini';//en güçsüz
person2.greet();


function Person3(name,age){
    this.name=name;
    this.age=age;
}

var omer=new Person3("Ömer",25);
var emine=new Person3("Emine",23);

console.log(omer);

console.log(emine);

console.log("-----------------4 different way for create object---------------")
//4 different way for create object
///1
var object1={
    name:'Omer',
    age:26
};

console.log(object1);
console.log(object1 instanceof Object);
////2
var object2=Object.create(null);
object2.name='omer2';
object2.age=262;
console.log(object2)
console.log(object2 instanceof Object);

///3
function Object3(){
    this.name="omer3";
    this.age=263;
}
var object3=new Object3();
console.log(object3)
console.log(object3 instanceof Object);



//-------------------Obj fn-----------------------

function fn(){
    console.log(this);
}

var obj= {
    obfn:fn
};

var person4={
    name:'Alex',
    age:288
}

obj.obfn.bind(person4,"hello")();


function fn1(message){
    console.log(message+this)
}

var obj={
    obfn1:fn1
};

var person11={
    name:"person11name"
};

obj.obfn1.call(person11, "hello");// no need extra () like bind
//it is for instantly
obj.obfn1.apply(person11, ["hello"]);

console.log("-------------define property-----------------")

var account ={
    cash:12000,
    withdraw: function(amount){
        this.cash -=amount;
        console.log("Withdrew "+ amount +", new cash reserve is: "+this.cash);

    }
};

Object.defineProperty(account, "deposit",{
    value:function(amount){
        this.cash +=amount;
    }
});

account.deposit(3000);
account.withdraw(1000);

Object.defineProperty(account, "name",{
    value:'ID000-1',
    writable:true// bu olamadan ID000-3 ü 1 olarak yazıyor
});
console.log(account.name);
account.name="ID000-3";
console.log(account.name);///??????




var person12={
    name:'Ömer12',
    age:2612,
    greet: function(){
        console.log("Hello for")
    }
};

for ( var field in person12){
    console.log(field);
    console.log(person12[field]);
}





let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew){
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
}


const robot = {
    _model: '1E78V2',
    _energyLevel:100,//'asasasa' yo get else .....
    get energyLevel() {
      if( typeof this._energyLevel === 'number') {
        return 'My current energy level is' + this._energyLevel
      }else {
        return "System malfunction: cannot retrieve energy level"
      }   
    } 
  };
  console.log(robot.energyLevel);
  



const robot1 = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot1);

// Declare robotEntries below this line:

const robotEntries = Object.entries(robot1)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot1);

console.log(newRobot);