// Argumentos, parâmetros e default parameters
const myFunc = function (name = 'Fulano', lastName = 'de Tal') {
    console.log(`Oi, ${name} ${lastName}!`)
}

myFunc()
myFunc('Brenno')
myFunc('Brendom', 'Daniel')