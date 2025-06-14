const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// for
console.log("CON for:");

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(person.name);
}

// forEach
console.log("CON forEach:");

people.forEach((person) => {
  console.log(person.name);
});
