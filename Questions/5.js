// Q1. Calculate area and perimeter of a rectangle
let length = 3
let bredth = 4

console.log("Area of the rectangle is " + length*bredth);
console.log("Perimeter of the rectangle is " + 2*(length+bredth));

//Q2. Find area of triangle by herons formula
let a = 5
let b = 4
let c = 5
let p = (a+b+c)/2;

console.log("Area of the triangle by heron's formula is " + Math.sqrt(p*(p-a)*(p-b)*(p-c)));

//Q3. Find circumference of a circle
let r = 6;

console.log((2*Math.PI*r).toFixed(2));


