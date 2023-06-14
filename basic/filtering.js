const numbers = [0, 1, 2, 3, 4, 5];

const evens = numbers.filter(e => e % 2 === 0);
console.log(evens)

// root
function filter(x, fn){
    const out = [];
    for (const e of x){
        if (fn(e)){
            out.push(e);
        }
    }
    return out
}