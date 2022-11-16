const str='Hello World. This is Akash.';
console.log([str]); //[ 'Hello World. This is Akash.' ]
console.log([...str]);//[
//     'H', 'e', 'l', 'l', 'o', ' ',
//     'W', 'o', 'r', 'l', 'd', '.',
//     ' ', 'T', 'h', 'i', 's', ' ',
//     'i', 's', ' ', 'A', 'k', 'a',
//     's', 'h', '.'
//   ]

console.log(str.split()); //[ 'Hello World. This is Akash.' ]
console.log(str.split(' ')); //[ 'Hello', 'World.', 'This', 'is', 'Akash.' ]
console.log(str.split(''));
// [
//     'H', 'e', 'l', 'l', 'o', ' ',
//     'W', 'o', 'r', 'l', 'd', '.',
//     ' ', 'T', 'h', 'i', 's', ' ',
//     'i', 's', ' ', 'A', 'k', 'a',
//     's', 'h', '.'
//   ]