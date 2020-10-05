// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => {
  // Insert missing solution please
  let days;
  switch (month) {
    default:
      days = "error";
      break;
    case "January":
      days = 31;
      break;
    case "March":
      days = 31;
      break;
    case "May":
      days = 31;
      break;
    case "July":
      days = 31;
      break;
    case "August":
      days = 31;
      break;
    case "October":
      days = 31;
      break;
    case "December":
      days = 31;
      break;
    case "February":
      days = 28;
      break;
    case "April":
      days = 30;
      break;
    case "June":
      days = 30;
      break;
    case "September":
      days = 30;
      break;
    case "November":
      days = 30;
      break;
  }
  return days;
};

// 2. Do a console.log to verify your function.
console.log(getDaysInMonth("April"));
// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
