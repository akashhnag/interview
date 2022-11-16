function multiply(num1){
    return (num2)=>{
        return num1*num2
    }
}

const result=multiply(2)(3);
console.log(result);