//Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']

heroes[2] = 'Spider-Man'

console.log(heroes)

const ages = [31, 25, 39, 40, 25]

console.log(ages[2])

const randomArray = ['Parker', 'Diana', 19, 18]

console.log(randomArray)

// Métodos de arrays

console.log(heroes.length)

const joinHeroes = heroes.join() // retorna nova string com os itens do array concatenados e separados por vírgula
console.log(joinHeroes)

const joinHeroes2 = heroes.join(' | ') // join também pode receber argumento opcional, que é o separador
console.log(joinHeroes2)

const indexOf25 = ages.indexOf(25)
console.log(indexOf25)

const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
console.log(moreHeroes)

// Métodos que alteram o array original

const pushToHeroes = heroes.push('Cyclops', 'Hulk') // adiciona informações ao array e retorna o tamanho do array
console.log(pushToHeroes)
console.log(heroes)

const popHeroes = heroes.pop()
console.log(popHeroes) // retorna o valor que foi removido do array
console.log(heroes)