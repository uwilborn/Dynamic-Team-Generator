const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var myManagerList = [];
var myEngineerList = [];
var myInternList = [];


askForMember()
// Prompts the user for team member information
function askForMember() {
  inquirer.prompt([
    {
      type: "list",
      name: "userchoice",
      choices: ["add manager", "add engineer", "add intern", "exit"],
      message: "Which would you like to add?",
    }
  ]).then(response => {
    switch (response.userchoice) {
      case "add manager":
        addManager();
        break;
      case "add engineer":
        addEngineer();
        break;
      case "add intern":
        addIntern();
        break;
      case "exit":
        generateFile();
        break;

    }
  })
}

function addManager() {
  console.log("Add Manager")
  console.log("------------")
  inquirer
    .prompt([
      {
        type: "input",
        name: "memberid",
        message: "What is the team member's id?",

      },
      {
        type: "input",
        name: "membername",
        message: "What is the team member's name?",

      },
      {
        type: "input",
        name: "memberemail",
        message: "What is the team member's email address?",

      },
      {
        type: "input",
        name: "officenumber",
        message: "What is the team member's office number?",

      },
    ]).then(function (userdata) {
      var myManager = new Manager(userdata.membername, userdata.memberid, userdata.memberemail, userdata.officenumber)
      myManagerList.push(myManager);
      askForMember();
    })

}
function addEngineer() {
  console.log("Add Engineer")
  console.log("------------")
}
function addIntern() {
  console.log("Add Intern")
  console.log("------------")
}
function generateFile() {
  console.log("exit")
  console.log("------------")
}







// }


//           // if (!name.match(nameregex)) {
//           //   alert('Enter Valid Name!!');


//           // function validateEmail(elementValue){      
//           //   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//           //   return emailPattern.test(elementValue); 
//           // } 
//         }
//         }
//       ])
//       .then(val => {
//         // If the user's guess is in the current word, log that they chose correctly
//         const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
//         if (didGuessCorrectly) {
//           console.log(chalk.green("\nCORRECT!!!\n"));

//           // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
//         } else {
//           this.guessesLeft--;
//           console.log(chalk.red("\nINCORRECT!!!\n"));
//           console.log(this.guessesLeft + " guesses remaining!!!\n");
//         }

//         console.log(this.currentWord.toString() + "\n");
//       });
//   }

//   // Logs goodbye and exits the node app
//   quit() {
//     console.log("\nGoodbye!");
//     process.exit(0);
//   }