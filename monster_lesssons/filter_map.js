const arr=[
    {
        name:"jack",
        age:23,
        isActive:true,
    },
    {
        name:"jerry",
        age:20,
        isActive:false,
    },
    {
        name:"shawn",
        age:25,
        isActive:true,
    },
]

const sorted=arr.sort((a,b)=>{
    if(a.age<b.age){
        return -1
    }return 1
}).filter(ele=>{
    return ele.isActive
}).map(ele=>ele.name)

console.log(sorted);