async function asyncFuntion(){
    if(false){
        return "true"
    }else{
        return "false"
    }
}

asyncFuntion().then((result) => {
    console.log('then block',result);
}).catch((err) => {
    console.log('catch block',err);
});