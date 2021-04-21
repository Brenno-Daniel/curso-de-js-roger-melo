// métodos comuns de strings
const emailB = 'brenno@email.com.br'

const lastIndexOfA = emailB.lastIndexOf('a') // última posição do caractere informado
console.log(lastIndexOfA)

const emailSlice = emailB.slice(0, 6) // pega uma fatia, parte de uma string
console.log(emailSlice, emailB)

const emailReplace = emailB.replace('brenno', 'brenin') // substituir o caractere de uma string por outro
console.log(emailReplace, emailB)