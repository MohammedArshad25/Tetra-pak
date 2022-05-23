const assert = require("chai").assert;
const { addNumbers } = require("../app");
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require("../app");

//Results
sayHelloResults = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

//to create test
describe("App", function () {
  describe("sayHello()", () => {
    it("app should return hello", () => {
      //let result = app.sayHello();
      assert.equal(sayHelloResults, "hello");
    });
    it("sayHello should return type string", () => {
      // let result = app.sayHello();
      assert.typeOf(sayHelloResults, "string");
    });
  });
  describe("addNumbers()", () => {
    it("addNumbers should be above 5", () => {
      // let result = app.addNumbers(5,5);
      assert.isAbove(addNumbersResult, 5);
    });
    it("addNumbers should return type number", () => {
      // let result = app.addNumbers(5,5);
      assert.typeOf(addNumbersResult, "number");
    });
  });
});