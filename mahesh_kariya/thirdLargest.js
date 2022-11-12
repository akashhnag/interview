console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
const arr=[3,-5,7,4,2,57,9,0,87,5,4,3,2,14,5,7];

// largest
let first=arr[0];
arr.forEach(ele=>{
    if(ele>first){
        first=ele
    }
})

//2nd largest
let second=Number.MIN_VALUE;
arr.forEach(ele=>{
    if(ele>second && ele<first){
        second=ele
    }
})

//3rd largest
let third=Number.MIN_VALUE;
arr.forEach(ele=>{
    if(ele>third && ele<second){
        third=ele
    }
})

console.log(third);