const Manager = require("../lib/Manager");

test("Initiate Manager instance",() => {
  const myManager = new Manager;
  expect(typeof(myManager)).toBe("object")
})
test("Manager Name checking",() => {
  const myManager = new Manager("Ursula");
  expect(myManager.name).toBe("Ursula")
})
test("ID checking",() => {
  const myManager = new Manager("Ursula",45);
  expect(myManager.id).toBe(45)
})
test("Email checking",() => {
  const myManager = new Manager("Ursula",45,"ursula@yahoo.com");
  expect(myManager.email).toBe("ursula@yahoo.com")
})
test("Office Number checking",() => {
  const myManager = new Manager("Ursula",45,"ursula@yahoo.com", 3456);
  expect(myManager.officeNumber).toBe(3456)
})
test("Check Office Number Function",() => {
  const myManager = new Manager("Ursula",45,"ursula@yahoo.com",3456);
  expect(myManager.getofficeNumber()).toBe(3456)
})
test("Check Role Function",() => {
  const myManager = new Manager("Ursula",45,"ursula@yahoo.com",3456);
  expect(myManager.getRole()).toBe("Manager")
})

