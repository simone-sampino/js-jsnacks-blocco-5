const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// for
console.log("CON for:");

const newArr = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  newArr.push(number + 1);
}

console.log(newArr);

// forEach
console.log("CON forEach:");

const newArr2 = [];

numbers.forEach((number) => newArr2.push(number + 1));

console.log(newArr2);

// map
console.log("CON map:");

const newArr3 = numbers.map((number) => number + 1);

console.log(newArr3);
