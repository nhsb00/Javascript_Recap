// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// data = Number(input[0]);

// function check(a) {
//     if (data >= 90 && a <=100) {
//         console.log("A");
//     } else if (data >= 80 && a <= 89 ) {
//         console.log("B");
//     } else if (data >= 70 && a <= 79) {
//         console.log("C");
//     } else if (data >= 60 && a <= 69) {
//         console.log("D");
//     } else {
//         console.log("F");
//     }
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let hour = Number(input[0].split(" ")[0]);
// let minute = Number(input[0].split(" ")[1]);

// if (minute < 45) {
//     hour -= 1;
//     minute += 15;
//     if (hour < 0) hour = 23;
// } else {
//     minute -= 45;
// }
// console.log(hour + " " + minute);

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let[a, b] = input[0].split(' ').map(Number);
// let c = Number(input[1]);

// let totalMinute = a * 60 + b + c;
// totalMinute %= 1440;
// let hour = parseInt(totalMinute / 60);
// let minute = totalMinute % 60;

// console.log(hour + " " + minute);

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
let c = Number(input[0].split(' ')[2]);

if (a == b && b == c) console.log(10000 + a * 1000);
else if (a == b) console.log(1000 + a * 100);
else if (a == c) console.log(1000 + a * 100);
else if (b == c) console.log(1000 + b * 100);
else console.log(Math.max(a, b, c) * 100);