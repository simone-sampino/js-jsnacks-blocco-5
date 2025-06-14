const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// for
console.log("CON for:");

for (let i = 0; i < names.length; i++) {
  const thisName = names[i];
  console.log(thisName);
}

// forEach
console.log("CON forEach:");

names.forEach((names) => {
  console.log(names);
});
