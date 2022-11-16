const str='Hello world';

const frequency=(str)=>{
    const strArr=str.toLowerCase().split('');
    return strArr.reduce((acc,ele)=>{
        if(acc[ele]){
            acc[ele]++ ;            
        }
        else{
            acc[ele]=1;
        } 
        return acc
    },{})
}

console.log(frequency(str));