const Employee = require("./lib/Employee");



class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email, school);
     

      this.school = school
    }
    getSchool() {
           
    }

    getRole() {
      return Intern;
      
    }
  }
module.exports = Intern;

const intern = new Intern('Jesse', 345, 'jesse@gmail.com', 'Davis Elementary')
console.log(intern)