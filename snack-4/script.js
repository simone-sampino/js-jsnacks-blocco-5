const posts = [
  { author: "Marco", date: "12/3/2021", content: "lorem ipsum..." },
  { author: "Luca", date: "30/6/2021", content: "lorem ipsum..." },
  { author: "Fabrizio", date: "12/9/2020", content: "lorem ipsum..." },
  { author: "Enrico", date: "09/12/2021", content: "lorem ipsum..." },
];

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// for
console.log("CON for:");

const newArr = [];

for (let i = 0; i < posts.length; i++) {
  const thisPost = posts[i];
  newArr.push(thisPost.author);
}

console.log(newArr);

// forEach
console.log("CON forEach:");

const newArr2 = [];

posts.forEach((thisPost) => newArr2.push(thisPost.author));

console.log(newArr2);

// map
console.log("CON map:");

const newArr3 = posts.map((thisPost) => thisPost.author);

console.log(newArr3);
