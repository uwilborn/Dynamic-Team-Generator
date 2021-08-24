const inquirer = require("inquirer");
const manager = require("./Manager");
const engineer = require("./Engineer");
const intern = require("./Intern");

// The Employee constructor is responsible for keeping score and controlling the flow of the overall game

class Employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
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

      return this.name
    }
    returns Employee;
  }

 

  // Prompts the user for team member information
  askForMember() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "memberid",
          message: "What is the team member's id?",
          // The users input must be a string
          validate: val => /[a-z1-9]/gi.test(val),          
        }
        {
          type: "input",
          name: "membername",
          message: "What is the team member's name?",
          // The users guess must be a number or letter
          validate: val => /[a-z1-9]/gi.test(val),          
        }
        {
          type: "input",
          name: "memberemail",
          message: "What is the team member's email address?",
          // The users guess must be a number or letter
          validate: val => /[a-z1-9]/gi.test(val), 
          
          // if (!name.match(nameregex)) {
          //   alert('Enter Valid Name!!');


          // function validateEmail(elementValue){      
          //   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          //   return emailPattern.test(elementValue); 
          // } 
        }
        }
      ])
      .then(val => {
        // If the user's guess is in the current word, log that they chose correctly
        const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
        if (didGuessCorrectly) {
          console.log(chalk.green("\nCORRECT!!!\n"));

          // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
        } else {
          this.guessesLeft--;
          console.log(chalk.red("\nINCORRECT!!!\n"));
          console.log(this.guessesLeft + " guesses remaining!!!\n");
        }

        console.log(this.currentWord.toString() + "\n");
      });
  }

  // Logs goodbye and exits the node app
  quit() {
    console.log("\nGoodbye!");
    process.exit(0);
  }
}

module.exports = Game;