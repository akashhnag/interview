let limit=7;
let a=0;
let b=1;
let temp;

for(let i=0;i<=limit;i++){
    console.log(a);
    temp=a+b;
    a=b;
    b=temp
}