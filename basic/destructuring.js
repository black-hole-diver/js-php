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

// 