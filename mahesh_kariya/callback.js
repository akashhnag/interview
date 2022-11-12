const sum=(a,b,callback)=>{
    setTimeout(()=>{
        const result= a+b;
        callback(result)
    },3000)   
}

const displayResult=(result)=>{
    console.log(result);
}

sum(2,3,displayResult)


