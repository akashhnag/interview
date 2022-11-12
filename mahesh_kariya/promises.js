const myPromise=new Promise((resolve,reject)=>{
    if(false){
        resolve("true")
    }else{
        reject("false")
    }
})

myPromise.then((result)=>console.log('result part',result),(err)=>console.log('err part',err))
//.catch((err)=>console.log('err part',err))