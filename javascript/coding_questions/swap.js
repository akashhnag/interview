let a=3;
let b=5;

// let tmp=0;
// tmp=a;
// a=b;
// b=tmp;

// console.log('a',a);
// console.log('b',b);

//without third variable
a+=b;
b=a-b;
a=a-b;

console.log('a',a);
console.log('b',b);
