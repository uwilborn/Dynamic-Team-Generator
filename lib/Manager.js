const Employee = require("./lib/Employee");



class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email, officeNumber);
     

      this.officeNumber = officeNumber
    }
  
    getofficeNumber() {
      return this.officeNumber;
    }

    getRole() {
      return "Manager";
      
    }
  }
module.exports = Manager;

const manager = new Manager('Jesse', 345, 'jesse@gmail.com', '404-303-7787')
console.log(manager)



