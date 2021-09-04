const Employee = require("../lib/Employee");



test("Initiate employee instance",() => {
  const myEmployee = new Employee;
  expect(typeof(myEmployee)).toBe("object")
})
test("Employee Name checking",() => {
  const myEmployee = new Employee("Ursula");
  expect(myEmployee.name).toBe("Ursula")
})
test("ID checking",() => {
  const myEmployee = new Employee("Ursula",45);
  expect(myEmployee.id).toBe(45)
})
test("Email checking",() => {
  const myEmployee = new Employee("Ursula",45,"ursula@yahoo.com");
  expect(myEmployee.email).toBe("ursula@yahoo.com")
})
test("Check Name Function",() => {
  const myEmployee = new Employee("Ursula",45,"ursula@yahoo.com");
  expect(myEmployee.getName()).toBe("Ursula")
})
test("Check ID Function",() => {
  const myEmployee = new Employee("Ursula",45,"ursula@yahoo.com");
  expect(myEmployee.getId()).toBe(45)
})
test("Check Email Function",() => {
  const myEmployee = new Employee("Ursula",45,"ursula@yahoo.com");
  expect(myEmployee.getEmail()).toBe("ursula@yahoo.com")
})
test("Check Role Function",() => {
  const myEmployee = new Employee("Ursula",45,"ursula@yahoo.com");
  expect(myEmployee.getRole()).toBe("Employee")
})


  