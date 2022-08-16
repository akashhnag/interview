var async = require('async')
function A(callback) {
    setTimeout(function () {
        console.log('Task One');
        callback(null, 1);
    }, 200);
}

function B(callback) {
    setTimeout(function () {
        console.log('Task Two');
        callback(null, 2);
    }, 100);
}

async.parallel([A, B], (err, results) => {
    if (err) {
        console.log("Error", err);

    } else {
        console.log('results', results);

    }
})
