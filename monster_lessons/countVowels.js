const countVowels=(str)=>{
const vowels=['a','e','i','o','u'];
const strArr=str.toLowerCase().split('');
return strArr.reduce((acc,ele)=>{
    if(vowels.includes(ele)){
         acc++;
    }return acc
},0)
}

console.log(countVowels('Hello'));