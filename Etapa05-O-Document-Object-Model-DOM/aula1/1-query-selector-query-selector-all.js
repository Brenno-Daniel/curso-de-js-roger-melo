// Query selector e query selector all são os métodos mais eficientes de se obter os elementos da páginas.

const h1 = document.querySelector('body > h1:nth-child(1)');
/*
    inspecionando um elemento HTML, como no caso acima o h1, e clicando com botão direito do mouse > copiar > seletor CSS, obtemos um seletor único para esse elemento, no caso acima o seletor: body > h1:nth-child(1)
*/

console.log(h1);

const paragraphs = document.querySelectorAll('p');
/*
    Query selector all retorna NodeList.
    NodeList é lista de nós similar a array mas não é array, então não podemos usar todos os métodos de array em NodeList.
    Podemos usar por exemplo o .forEach().
*/
console.log(paragraphs);

paragraphs.forEach(paragraph => {
    console.log(paragraph);
});

const errors = document.querySelectorAll('.error');

console.log(errors);
