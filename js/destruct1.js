// array destruct assignment

var a, b, rest;
[a, b, rest = 1] = [10, 20];

console.log('a :',a);
// expected output: 10

console.log('b :',b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]

function multiply(a, b = 1) {
    return a*b;
}

console.log(multiply(5, 3)); // 5
