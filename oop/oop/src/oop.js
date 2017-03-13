  class Person{
    constructor(firstname, lastname, age) {
      this.firstName = firstname;
      this.lastName = lastname;
      this.age = age;
  
      this.setAge = (age) => {
      this.age = age;
  };
   
      this.getName = () => {
        return [this.firstName, this.lastName].join(" ");
      }
      this.getAge = () => {
        return this.age;
      }
      this.getData = () => {
    return ["Hi! I'm ", this.firstName,  " ", this.lastName, " and I\'m ", this.age,  " years old."].join("");
 }
}
}


   
/***********************************
*          Inheritance            *
* *********************************/
 class Developer extends Person {
      constructor(firstname, lastname, age, skills, salary) {
        super(firstname, lastname, age);
        this.pay = salary;
        this.skills = skills;
         
}
        shout(){
          return "I am a Developer!";
        }
       getProfile() {
         return ["Hi ! I'm ", this.firstName, " ", this.lastName, ", I'm ", this.age, " year old and I'm a developer with a skill level of ", this.skills, " i earn ", this.pay +"$", "Monthly"].join("");
}
}

