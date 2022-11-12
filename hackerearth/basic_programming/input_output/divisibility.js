
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
   
    divisibility(input)
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here

function divisibility(arr){
     console.log('arr',arr);
    for(let i=0;i<arr.length;i++){
        const lastDigit=arr[i]%10;
        console.log(lastDigit);
    }
}
