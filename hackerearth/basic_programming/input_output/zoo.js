// Problem
// You are required to enter a word that consists of 'x' and 'y' that denote the number of Zs and Os respectively. The input word is considered similar to word zoo if .

// Determine if the entered word is similar to word 'zoo'.

// For example, words such as 'zzoooo' and 'zzzoooooo' are similar to word zoo but not the words such as 'zzooo' and 'zzzooooo'.

// Input format:

// First line: A word that starts with several Zs and continues by several Os.
// Note: The maximum length of this word must be .

// Output format:

// Print Yes if the input word can be considered as the string zoo otherwise, print No.

// Sample Input
// zzzoooooo
// Sample Output
// Yes

// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    const result=solve(input);
    process.stdout.write(result);       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
function solve(input){
const z=[...input].filter(ele=>{
    if(ele==='z') return ele
});

const o=[...input].filter(ele=>{
    if(ele==='o') return ele
});

if(o.length===2*z.length){
    return 'Yes';
}
return 'No';
}
