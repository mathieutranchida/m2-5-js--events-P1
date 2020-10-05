const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  // add more tests here...
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "age"
    )
  ).toStrictEqual([23, 36, 43]);
  expect(
    getValues(
      [
        { name: "oliver", age: 23 },
        { name: "sandra", age: 36 },
        { name: "matt", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["oliver", "sandra", "matt"]);
  expect(
    getValues(
      [
        { name: "Matt", age: 23 },
        { name: "Bea", age: 36 },
        { name: "Antoine", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["Matt", "Bea", "Antoine"]);
});
