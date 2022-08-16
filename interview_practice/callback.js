function A(callback) {
    setTimeout(() => {
        console.log('This is A.');
        callback()
    }, 3000);

}

function B() {
    console.log('This is B.');
}

// //function start() {
// A(B);
// }
A(B);
//start()