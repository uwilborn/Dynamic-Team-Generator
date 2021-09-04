const Intern = require("../lib/Intern");

test("Initiate intern instance",() => {
  const myIntern = new Intern;
  expect(typeof(myIntern)).toBe("object")
})
test("Intern Name checking",() => {
  const myIntern = new Intern("Ursula");
  expect(myIntern.name).toBe("Ursula")
})
test("ID checking",() => {
  const myIntern = new Intern("Ursula",45);
  expect(myIntern.id).toBe(45)
})
test("Email checking",() => {
  const myIntern = new Intern("Ursula",45,"ursula@yahoo.com");
  expect(myIntern.email).toBe("ursula@yahoo.com")
})
test("School checking",() => {
  const myIntern = new Intern("Ursula",45,"ursula@yahoo.com","Georgia University");
  expect(myIntern.school).toBe("Georgia University")
})
test("Check School Function",() => {
  const myIntern = new Intern("Ursula",45,"ursula@yahoo.com","Georgia University");
  expect(myIntern.getSchool()).toBe("Georgia University")
})
test("Check Role Function",() => {
  const myIntern = new Intern("Ursula",45,"ursula@yahoo.com","Georgia University");
  expect(myIntern.getRole()).toBe("Intern")
})
