//Q1, Valid Voter
let age = Number(prompt("Enter your age!"));

//if the user inputs a non number value, Number converts it returning NaN, hence the first if check
if (isNaN(age)) {
  console.log("Wrong Input!");
} else if (age >= 18) {
  console.log("Eligible to vote.");
} else {
  console.log("Not eligible to vote.");
}
