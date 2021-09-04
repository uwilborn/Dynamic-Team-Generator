const Engineer = require("../lib/Engineer");

test("Initiate Engineer instance",() => {
  const myEngineer = new Engineer;
  expect(typeof(myEngineer)).toBe("object")
})
test("Engineer Name checking",() => {
  const myEngineer = new Engineer("Ursula");
  expect(myEngineer.name).toBe("Ursula")
})
test("ID checking",() => {
  const myEngineer = new Engineer("Ursula",45);
  expect(myEngineer.id).toBe(45)
})
test("Email checking",() => {
  const myEngineer = new Engineer("Ursula",45,"ursula@yahoo.com");
  expect(myEngineer.email).toBe("ursula@yahoo.com")
})
test("Github checking",() => {
  const myEngineer = new Engineer("Ursula",45,"ursula@yahoo.com","github@github.com");
  expect(myEngineer.github).toBe("github@github.com")
})
test("Check Github Function",() => {
  const myEngineer = new Engineer("Ursula",45,"ursula@yahoo.com","github@github.com");
  expect(myEngineer.getGithub()).toBe("github@github.com")
})
test("Check Role Function",() => {
  const myEngineer = new Engineer("Ursula",45,"ursula@yahoo.com","github@github.com");
  expect(myEngineer.getRole()).toBe("Engineer")
})

