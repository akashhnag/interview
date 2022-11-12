const printFirst=()=>{
    setTimeout(()=>{
        console.log('first');
    },2000)   
}

const printSecond=()=>{
    console.log('second');
}

printFirst();
printSecond();
