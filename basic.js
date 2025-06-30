// 1. Variable and Data Types
let Name="Manisha";
const num=42;
var hasID=false;
let x;
var y= null;

console.log(typeof Name);
console.log(typeof num);
console.log(typeof hasID);
console.log(typeof x);
console.log(typeof y);


//2. Hoisting Demo

console.log(p);
var p=4;
// It prints undefined because when we use var, the variable declaration are moved to the top during the compilation phase, but its initialization stays in place.
 
console.log(q);
let q=5;
// It gives ReferenceError because with let ,the variable is hoisted but not initialized
