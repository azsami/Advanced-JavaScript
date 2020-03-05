const students = [
    { id: 21, name : "Mehedi"},
    { id: 32, name : "Ibrahim"},
    { id: 41, name : "Abir"},
    { id: 65, name : "Siam"}
];


const names = students.map(s => s.name);
const ids = students.filter(s => s.id > 40);
console.log(ids);