function countA(str){
    let count = 0;
    for (const char of str){
        if (char === 'a'){
            count++;
        }
    }
    return count
}

//console.log(countA("abba"))
//console.log(countA('budapest'))

function count(str, fn) {
    let count = 0;
    for (const c of str) {
        if (fn(c)) {
            count++;
        }
    }
    return count;
}

console.log(
    count('abba', c => c === 'a')
)

console.log(
    count('apple is a good fruit for sale', c => c === 'l')
)