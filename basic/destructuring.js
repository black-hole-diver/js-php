const note = {
    id: 1,
    title: 'My Note #1',
    date: '20/03/0083'
}

console.log('note id:', note.id);
console.log('note title:', note.title);
console.log('note date:', note.date);

// too long, using object destructuring instead!
const { id:noteID, title, date } = note;
console.log(noteID);
console.log(title);
console.log(date);

// nested object
const book = {
    title: 'Harry Potter',
    year: 1997,
    author:{
        firstName: 'JK',
        lastName: 'Rolling',
    },
}

const {
    title: bookTitle,
    year,
    author,
    author: { firstName, lastName }
} = book

console.log(bookTitle)
console.log(year)
console.log(author) // output object
console.log( `${firstName} ${lastName}`) // using template literals

const { length } = '234324342434234234342asdfasdfadsfasdfasdf'
console.log(length)

// destructing an array
const hun = [ '985', '08', '20' ]
const { yr, month, day } = hun

// listing key-value pairs
for (let [key, value] of Object.entries(book)){
    if (key === 'author'){
        for (let [key, value] of Object.entries(author)){
            console.log(`${key}:${value}`)
        }
    }
    else{
        console.log(`${key}:${value}`)
    }
}