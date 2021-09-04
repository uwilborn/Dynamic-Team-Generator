// The Employee constructor is the PARENT class which is the primary skeleton for a team member
class Employee {
  // Constructor will
  constructor(name,id,email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // Methods
  getName() {

    return this.name
  }
    getId() {

      return this.id
    }
    getEmail(){

      return this.email
    }
    getRole(){

      return "Employee";
    }
  }

 

  

module.exports = Employee;