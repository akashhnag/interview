const str='Hello World';

// reverse entire string
const result=str.split('').reverse().join('');

console.log(result);

//reverse each word 
const arrOfWords=str.split(' ');
const resultArr=arrOfWords.map(ele=>{
    return reverseAWord(ele)
});
console.log(resultArr.join(' '));

function reverseAWord(str){
    return str.split('').reverse().join('')
}