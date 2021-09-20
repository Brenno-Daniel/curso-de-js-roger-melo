// variáveis e escopo de bloco

let age = 31;

if (true) {
    let age = 21;
    let name = 'Brenno';
    console.log(`dentro do 1º bloco de código: ${age} ${name}`);

    if (true) {
        let age = 41;
        console.log(`dentro do 2º bloco de código? ${age}`);
    }
}

console.log(`fora do bloco de código: ${age} ${name}`);
