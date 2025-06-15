const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// for
console.log("CON for:");

for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i];

  if (thisStudent.id === 2) {
    console.log(thisStudent);
  }
}

// forEach
console.log("CON forEach:");

students.forEach((thisStudent) => {
  if (thisStudent.id === 2) {
    console.log(thisStudent);
  }
});

// filter
console.log("CON filter:");

const newArr = students.filter((thisStudent) => {
  if (thisStudent.id === 2) {
    return true;
  }
});

console.log(newArr);

// find
console.log("CON find:");

const newArr2 = students.find((thisStudent) => {
  if (thisStudent.id === 2) {
    return true;
  }
});

console.log(newArr2);
