const arr=[1,1,2];

// const getUnique=(arr)=>{
//     return [...new Set(arr)];
// }

// const getUnique=(arr)=>{
//     let result=[];
//     arr.forEach(ele=>{
//         if(!result.includes(ele)){
//             result.push(ele)
//         }
//     })
//     return result
// }

const getUnique=(arr)=>{
    return arr.reduce((acc,ele)=>{
        if(!acc.includes(ele)){
            return [...acc,ele]
        }return acc
    },[])
}

console.log(getUnique(arr));