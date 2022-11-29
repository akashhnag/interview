const input = 'aaabcccccccc';

// ['c', 'a', 'b'];
function arrange(str){
    const splittedArr=[...str];
const mappedObj=splittedArr.reduce((acc,ele)=>{
  if(acc[ele]){
     acc[ele]++;
  }else{
    acc[ele]=1;
  }
    return acc
},{})

const sorted=Object.keys(mappedObj).sort((a,b)=>{
    return mappedObj[b]-mappedObj[a]
})
return sorted

}

const result=arrange(input)
console.log(result);

