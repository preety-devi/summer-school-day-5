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
 
// console.log(q);
// let q=5;
// It gives ReferenceError because with let ,the variable is hoisted but not initialized



// 3. User Greeting (Conditionals)
let name=prompt("Your Name? ");
let age=prompt("Your age?");
if(age<18){
    alert(`- Hey ${name}, you are a teen!`)
}else if(age >= 18 && age <= 60) {
  alert(`Welcome ${name}, you’re an adult!`);
} else {
  alert(`Hello ${name}, you’re a senior citizen!`);
}






// 4. Looping Numbers

let i = 1;
for (i = 1; i <= 10; ++i) {
    console.log(i);
}

let j = 2;
while (j <= 20) {
    console.log(j);
    j += 2;
}

let l = 10;
do {
    console.log(l);
    l--;
} while (l >= 1);


//  5. Functions


function add(a,b){
    return a+b;
}
console.log(add(3,2));


let sq = function(num){
    return num**2;
    
}
console.log(sq(4));


const greet=(name)=>{
    return `hello , ${name}!`;
}
console.log(greet('parrot'));




// 6. Callback Practice

function processNumber(num,callback){
    return callback(num);
}
const double=(n)=>{
    return n*2;
}
const square=(n)=>{
    return n*n;
}
console.log(processNumber(3,double));
console.log(processNumber(3,square));






