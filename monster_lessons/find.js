const arr=[1,2,4,5,6,7];

const findNumber=(arr,number)=>{
   return arr.some((ele)=>{
   return ele===number
   })
}

console.log(findNumber(arr,9));
