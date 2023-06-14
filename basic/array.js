const emptyArray = [];
const randomArray = [12, 'apple', true];

console.log(randomArray.length)
console.log(randomArray[0])

randomArray[0] = 'orange';
console.log(randomArray[0])

randomArray[100] = 'hundred';
console.log(randomArray.length)

delete randomArray[100];
console.log(randomArray.length) // size remains the same
console.log(randomArray[100])

/* matrix */

const matrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];
console.log(matrix[1][2])

/* iterative processing */
const fruits = [ 'apple', 'pear', 'plum' ];

for (const fruit of fruits){
    console.log(fruit);
}