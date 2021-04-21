// conversão de tipos
let score = '100'

score = Number(score)

console.log(score + 1) // resultado = 101
console.log(typeof score)

const crazyConversion = Number('maçã')
const convertedNumber = String(97)

console.log(crazyConversion)
console.log(convertedNumber)

const booleanConversion = Boolean(10)
console.log(booleanConversion)

/* 
    Valores falsy:
        - false
        - 0
        - "", '', ``
        - null
        - undefined
        - NaN

    Valores truthy:
        - Qualquer valor que não é falsy
*/

