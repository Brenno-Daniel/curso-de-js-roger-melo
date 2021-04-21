// hoisting - funciona para a function declaration, mas não funciona para function expression

// Por debaixo dos panos o JS puxa a function declaration para o topo do código

// Function expression
const showFood = function () {
    console.log('pizza')
}

// Invocação das funções
sayHi()

showFood()

// Function declaration
function sayHi () {
    console.log('oi')
}