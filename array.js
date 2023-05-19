let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let min = max = arr[0];


for (let i = 0; i < number; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(min, max)

// let data = input[1].split(' ').map(x => Number(x));
// let minValue = data.reduce((a, b) => Math.min(a, b));
// let maxValue = data.reduce((a, b) => Math.max(a, b));
// console.log(minValue + " " + maxValue);


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let string = input[1];
let answer = 0;

for (let x of string) {
    
    answer += Number(x);
}
console.log(answer);

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    let [r,s] = input[i].split(" ");
    let result = "";

    for (let j = 0; j <= s.length; j++) {
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = input[0].split(' ')[0];
let b = input[0].split(' ')[1];
let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];
console.log(Math.max(Number(newA), Number(newB)));