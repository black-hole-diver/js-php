function factorial(n){
    let f = 1;
    for (let i = 2; i <= n; i++){
        f *= i;
    }
    return f
}

const factorial_five = factorial(5);
console.log("5! = ", factorial_five)