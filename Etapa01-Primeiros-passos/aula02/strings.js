// strings
const email = 'brennn@gmail.com'

console.log(email)

// concatenação de strings
const firstName = 'Brenno'
const lastName = 'Souza'
const fullName = firstName + ' ' + lastName

console.log(fullName)

// acessando caracteres
console.log(fullName[0])
console.log(fullName[1])
console.log(fullName[2])

// comprimento de uma string
console.log(fullName.length)

// métodos de string
console.log(fullName.toUpperCase())

const result = fullName.toLowerCase()

console.log(result)

const index = email.indexOf('@') // vai buscar a posição do caractere '@' dentro da string
// O que está dentro dos parenteses do método é na verdade um argumento e não parâmetro

console.log(index)