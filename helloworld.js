// let fs = require('fs');
// let input = fs.readFileSync('./index.txt').toString().split('\n');

// let a = Number(input[0].split(' ')[0]);
// let b = Number(input[0].split(' ')[1]);

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(parseInt(a / b));
// console.log(a % b);

let fs = require('fs');
let input = fs.readFileSync('index.txt').toString().split('\n');

console.log(input)
let a = Number(input[0]);
let b = input[1];

console.log(a*Number(b[2]));
console.log(a * Number(b[1]));
console.log(a * Number(b[0]));
console.log(a * Number(b));
