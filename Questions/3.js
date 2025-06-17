let i = 11;

i = i++ + ++i;   // i++ takes the value as 11, but is then incresed due to ++, which when used by ++i acts as ++12 i.e. 13 ... So it logs 24 as answer.

console.log(i);
//================================================================================================================
let a = 11, b = 22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log("a is:"+a);
console.log("b is:"+b);
console.log("c is:"+c);
//====================================================================================================================
let d = true;
d++;
console.log(d);
//====================================================================================================================
// let e = 11++;
// console.log(e);   //error as cannot add ++ operator to a constant which means, you can use ++ with e, but not 11 which is a constant value
//===================================================================================================================

