const a=this;

const obj={
    message:'Hello world',
    getThis(){
        const message="this function"
        return this.message;
    },
    getThat:()=>{
        const message="that function"
        return this.message
    }
}

console.log(obj.getThis());
console.log(obj.getThat());