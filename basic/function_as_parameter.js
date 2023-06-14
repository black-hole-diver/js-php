function countA(str){
    let count = 0;
    for (const char of str){
        if (char === 'a'){
            count++;
        }
    }
    return count
}

console.log(countA("abba"))
console.log(countA('budapest'))