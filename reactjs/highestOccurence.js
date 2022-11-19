const arr=[1,2,4,1,2,3,2,2,6,5,6,4];

const occurence=arr.reduce((acc,ele)=>{
if(acc[ele]){
    acc[ele]++;
}else{
    acc[ele]=1
}
return acc
},{})

const keys=Object.keys(occurence);

const frequencies=keys.map(ele=>{
    return occurence[ele]
})

console.log('highest occurence element',keys[indexOfHighest]);
console.log('no. of time',frequencies[indexOfHighest]);