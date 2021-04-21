// operadores lógicos - "OU" || e "E" &&
const password = 'oi33s23456232323'

if (password.length >= 12 && password.includes('1')) {
    console.log('senha muito forte xD')
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
    console.log('senha forte')
} else {
    console.log('a senha deve conter 8 ou mais caracteres')
}