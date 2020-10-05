const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  expect(combineArrays(["crisp", "apps"], ["zuchini", "apple"])).toStrictEqual([
    "apple",
    "apps",
    "crisp",
    "zuchini",
  ]);
  expect(combineArrays(["logo", "zoo"], ["grill", "apple"])).toStrictEqual([
    "apple",
    "grill",
    "logo",
    "zoo",
  ]);
  expect(combineArrays(["send", "zoo"], ["grill", "apple"])).toStrictEqual([
    "apple",
    "grill",
    "send",
    "zoo",
  ]);
});
