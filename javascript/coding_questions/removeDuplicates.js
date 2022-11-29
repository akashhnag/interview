const arr=[2,4,8,4,7,8,6,2];
const newArr=[...new Set(arr)]
console.log(newArr);

//without using Set
const result=arr.filter((ele,ind)=>{
    return arr.indexOf(ele)===ind
})

console.log(result);