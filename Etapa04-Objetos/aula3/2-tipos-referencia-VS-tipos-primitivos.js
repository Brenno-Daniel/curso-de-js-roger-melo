// valores primitivos
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

scoreOne = 100;

// valor de scoreTwo não será modificado pois o valor de scoreTwo aponta para uma posição diferente no Stack
console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

// valores de referência
let userOne = { name: 'Brenno', age: 23 };
let userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 24;

// valor de age dentro de userTwo será modificado pois o valor de userOne e userTwo apontam para o mesmo objeto no Heap
console.log(userOne, userTwo);
