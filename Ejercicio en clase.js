
// JS
// var numbers = [1, 2, 3, 4];
// var doubled = numbers.map(function (n) { return n * 2; });
// console.log(doubled);

// Estructural ts

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(n => n*2);

// console.log(doubled)
//Como convertir un archivo ts a js
//tsc nombre.ts
//Como instalarla en node 
//npm install -g typescript



var numbers = [1, 2, 3, 4];
var doubled = [];

for (let index = 0; index < numbers.length; index++) {
    doubled.push(numbers[index]*2);
}
console.log(doubled);