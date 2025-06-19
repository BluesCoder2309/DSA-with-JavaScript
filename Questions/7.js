//Q. Shop Discount- 0-5000: 0%;5001-7000: 5%: 7001 - 9000: 10%; more than 9000: 20%

// let total = Number(prompt("Enter the total price"));
// let dis = 0;

// if (total > 0 && total <= 5000) {
//   dis = 0;
// } else if (total > 5000 && total <= 7000) {
//   dis = 5;
// } else if (total > 7000 && total <= 9000) {
//   dis = 10;
// } else if (total > 9000) {
//   dis = 20;
// }
// console.log(total - Math.floor((dis * total) / 100));

//Q. Currency Denominations

let amount = Number(prompt("Enter the total amount"));

if (amount >= 500) {
  console.log("Number of 500 rupee notes: " + Math.floor(amount / 500));
  amount = amount % 500;
}
if (amount >= 200) {
  console.log("Number of 200 rupee notes: " + Math.floor(amount / 200));
  amount = amount % 200;
}
if (amount >= 100) {
  console.log("Number of 100 rupee notes: " + Math.floor(amount / 100));
  amount = amount % 100;
}
if (amount >= 50) {
  console.log("Number of 50 rupee notes: " + Math.floor(amount / 50));
  amount = amount % 50;
}
if (amount >= 20) {
  console.log("Number of 20 rupee notes: " + Math.floor(amount / 20));
  amount = amount % 20;
}
if (amount >= 10) {
  console.log("Number of 10 rupee notes: " + Math.floor(amount / 10));
  amount = amount % 10;
}
if (amount >= 5) {
  console.log("Number of 5 rupee notes: " + Math.floor(amount / 5));
  amount = amount % 5;
}
if (amount >= 2) {
  console.log("Number of 2 rupee notes: " + Math.floor(amount / 2));
  amount = amount % 2;
}
if (amount === 1) {
  console.log("Number of 1 rupee notes: " + amount);
  amount = amount % 1;
}
