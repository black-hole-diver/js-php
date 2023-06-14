const x = []
x.push(10)

// copy reference
const x1 = [ 1, 2, 3 ]
const x2 = x1
x2[1] = 20
console.log(x1)

// shallow copy
const x3 = [1, 2, 3]
const x4 = x3.slice(0,3) // or x3.concat()

x4[1] = 20
console.log(x3) // --> [ 1, 2, 3 ]
console.log(x4) // --> [ 1, 20, 3 ]