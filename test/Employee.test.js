const employee = require("../lib/Employee");

describe("Letter class", () => {
  it("Characters that aren't digits or letters are instantly visible", () => {
    expect(new Letter("?").visible).toBe(true);
  });

  it("toString returns _ for letters", () => {
    expect(new Letter("a").toString()).toBe("_");
  });

  