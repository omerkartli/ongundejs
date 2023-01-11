class Person{
    constructor(firstname,lastname,age,country='OsmanlıC',city){
        console.log(this) 
        this.firstname=firstname
        this.lastname=lastname
        this.age = age
        this.country = 'TÜRKİYE'
        this.city = city
        this.score=0
        this.skills=[]
    }
    getFullName(){
        return this.firstname+' '+this.lastname;
    }
    get getScore() {
        return this.score
      }
    get getSkills() {
        return this.skills
      }
    set setScore(score) {
        this.score += score
      }
    set setSkill(skill) {
        this.skills.push(skill)
      }
    getPersonInfo(){
        let fulName =this.getFullName()
        return `Benim adım ${fulName} ve ${this.age} yaşındayım. memleketim ${this.city} ve uyruğum ${this.country}'ye bağlı` 
    }
    static getTimeStamp(){
        return +(new Date())
    }
} 

    


const personn= new Person()
const person21=new Person('Ömer', 'KARTLI',25,'','Ankara')
const person22=new Person('Osman','Bağcı',24,'Osmanlı','Konya')


console.log(person21)
console.log(person22)
console.log(person21.getFullName())
console.log(person21.score)
console.log(person22.skills)
person21.setScore = 1
person21.setSkill = 'HTML'
person21.setSkill = 'CSS'
person21.setSkill = 'JavaScript'
console.log(person21.score)
console.log(person21.skills)
console.log(person21.getPersonInfo())
console.log(Person.getTimeStamp())



class Teacher extends Person{
    constructor(firstname,lastname,age,country,city,gender){
        super(firstname,lastname,age,country='OsmanlıC',city)//Bunu yukardan aldı bi daha yazmamak için        
        this.gender=gender
    }
    teach(){
        return 'Fizik dersi öğretiyor'
    }
    get getGender(){
        return this.gender===1 ? 'Erkek': 'Kadın'
    }
}
const teacher1= new Teacher('ömerteacher','KartliTe',29,'','AnkaraTeac',1)
console.log(teacher1)
console.log(teacher1.teach())
console.log(teacher1.getGender)
class Student extends Person {
    learn(){
        return 'Ders dinliyor'
    }
  }
  
  const s1 = new Student('Omerst', 'kartlıst', 33,'', 'Ordu')
  console.log(s1)
  console.log(s1.learn())
