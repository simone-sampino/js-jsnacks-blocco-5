const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// for
console.log("CON for:");

const even = [];

for (let i = 0; i < nums.length; i++) {
  const numb = nums[i];

  if (numb % 2 === 0) {
    even.push(numb);
  }
}

console.log(even);

// forEach
console.log("CON forEach:");

const even2 = [];

nums.forEach((numb) => {
  if (numb % 2 === 0) {
    even2.push(numb);
  }
});

console.log(even2);

// filter
console.log("CON filter:");

const even3 = nums.filter((numb) => {
  if (numb % 2 === 0) {
    return true;
  }
});

console.log(even3);

// filter shortcut
console.log("filter CON shortcut:");

const even3_2 = nums.filter((numb) => numb % 2 === 0);

console.log(even3_2);

// find
console.log("CON find:");

const even4 = nums.find((numb) => {
  numb % 2 === 0;
  return numb;
});

console.log(even4);
// ritorna SOLO il primo numero pari che trova, poi si ferma
