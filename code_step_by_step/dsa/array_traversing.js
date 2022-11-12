const arr=[3,5,6,3,2,4,7,8,5,8,0];

const submit=()=>{
    const input=document.querySelector('input').value;
    const index=parseInt(input);
    if(!index){
        console.error('Please enter valid input.');
    }else if(index<0){
        console.error('Please enter a +ve number.')
    }
    else if(index>arr.length){
        console.error(`Value of index should be between 0 and ${arr.length-1}`);
    }else{
        console.log(`Element in ${input}th position is`,arr[input]);
    }
    
}
