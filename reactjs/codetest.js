console.log(this);

const obj={
    thiValue:function(){
        console.log(this);
    },
    thisValueInArrow:()=>{
        console.log(this);
    }
}

obj.thiValue();
obj.thisValueInArrow();

function checkThis(){
    console.log(this);
}

checkThis();

