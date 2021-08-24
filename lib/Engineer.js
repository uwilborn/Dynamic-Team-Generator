const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
      super(name, id, email);
     
    }
  
    getGithub(username) {
      console.log(username);
    }
  
    getRole() {
      return Engineer;
      
    }
  }
module.exports = Engineer;

const engineer = new Engineer('Jesse', 345, 'jesse@gmail.com')
console.log(engineer)
