const arr=[1,2,4,5,4,1,3,6,4,6,7,3,5]

const result=arr.reduce((acc,ele)=>{
if(acc[ele]){
    acc[ele]++
}else{
    acc[ele]=1
}
return acc
},{})

console.log(result);