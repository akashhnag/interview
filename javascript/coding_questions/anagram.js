const compareString=(str1,str2)=>{
    if(str1.length!==str1.length){
        return 
    }
    const sortedString1=[...str1].sort().join()
    const sortedString2=[...str2].sort().join()
    if(sortedString1===sortedString2){        
        return true
    }
}
