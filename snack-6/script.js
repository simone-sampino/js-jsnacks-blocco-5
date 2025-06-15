const zucchine = [
  { type: "Napoletana", weight: 10, length: 4 },
  { type: "Trombetta", weight: 13, length: 16 },
  { type: "Napoletana", weight: 4, length: 23 },
  { type: "Trombetta", weight: 11, length: 6 },
  { type: "Napoletana", weight: 2, length: 17 },
  { type: "Romana", weight: 5, length: 10 },
  { type: "Romana", weight: 7, length: 9 },
  { type: "Trombetta", weight: 3, length: 8 },
  { type: "Calabrese", weight: 6, length: 27 },
  { type: "Calabrese", weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// for
console.log("CON for:");

const longest = [];
const shortest = [];

for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];

  if (zucchina.length > 15) {
    longest.push(zucchina);
  } else {
    shortest.push(zucchina);
  }
}

console.log(longest);
console.log(shortest);

// forEach
console.log("CON forEach:");

const longest2 = [];
const shortest2 = [];

zucchine.forEach((zucchina) => {
  if (zucchina.length > 15) {
    longest2.push(zucchina);
  } else {
    shortest2.push(zucchina);
  }
});

console.log(longest2);
console.log(shortest2);

// filter
console.log("CON filter:");

const longest3 = zucchine.filter((zucchina) => zucchina.length > 15);

console.log(longest3);

const shortest3 = zucchine.filter((zucchina) => zucchina.length <= 15);

console.log(shortest3);
