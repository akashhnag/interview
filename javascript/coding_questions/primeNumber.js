const checkPrime=(num)=>{
    let count=0;
    for(let i=2;i<num;i++){
        if((num%i)===0){
            count++;
        }
    }
    if(count>0){
        console.log('not prime');
    }else{
        console.log('prime');
    }
}

checkPrime(6)