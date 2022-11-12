const str='Hello World!'

const reverseEachString=(str)=>{
    return str.split(" ").reverse().join(" ")
}

const reverseByWords=(str)=>{
    const strArr=str.split(' ');
    let result=''
    strArr.forEach(ele=>{
        result+=reverseByCharacter(ele)+' '
    })
    return result
}

const reverseByCharacter=(str)=>{
    return str.split('').reverse().join('')
}

console.log(reverseByWords(str));