const helloWorldFunction = require("../src/helloWorld.js");

const processNumbers = require ("../src/processNumbers.js")

describe("GIVEN we coded the helloWorld function", () => {
  describe("WHEN invoking the function", () => {
    it("THEN it should return a person with age=24", () => {
      const person = helloWorldFunction();
      expect(person.age).toBe(24);
    });
  });

  describe("processNumbers", () => {
    it("it is working", () => {
      const data = JSON.stringify ({
        _numbers_: [3,5,6,7,9]
      })
      const result = processNumbers (data)
      expect (result).toEqual ({
        // ":" all cases exept when "="
        maxNumber: 9, 
        sum: 30
      })
    });
  });
});
