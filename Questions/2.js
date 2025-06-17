// swap 2 variables using 3 methods

// =======================================> 1.With extra variable<================================================
// let a = 10;
// let b = 20;
// let c;
// console.log(a, b);
// c = a;
// a = b;
// b = c;
// console.log(a, b);

//=======================================> 2.Without extra variable<================================================
// let a = 10;
// let b = 20;
// console.log(a, b);
// a = a + b; //a=30
// b = a - b; //b = 30-20=1011
// a = a - b;
// console.log(a, b);

// ==================================> 3. Destructuring assignment in JS <=========================================
let a = 10;
let b = 20;
console.log(a, b);

[a,b] = [b,a];
console.log(a, b);