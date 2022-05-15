// obter um elemento através do ID
const title = document.getElementById('title');

console.log(title);

// obter elementos através do nome da classe
const errors = document.getElementsByClassName('error');
/* 
    A const acima recebe um HTMLCollection que é uma lista genérica de elementos.
    HTMLCollection e NodeList são semelhantes mas não idênticos.
*/
console.log(errors);
console.log(errors[1]); // exibe o segundo item do HTMLCollection

/*
    Ao contrário de um NodeList, não podemos usar o forEach() no HTMLCollection.
    No caso o código abaixo irá resultar num erro no console do navegador: "errors.forEach is not a function".
    Isso ocorre por conta de que o HTMLCollection não possui o método forEach() para ser usado nele.
    A quantidade de métodos e propriedades do HTMLCollection é mais limitada quando comparada ao NodeList.
    Para conseguir utilizar o forEach abaixo primeiro precisamos converter esse HTMLCollection em um array (algo que veremos mais a frente).
*/
// errors.forEach(error => {
//     console.log(error);
// });

// obter elementos através do nome da tag
const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);
console.log(paragraphs[0].innerText);

/*
    Dar preferência por utilizar query selector ou query selector all pela flexibilidade deles, pois além de aceitarem seletores CSS e fazerem query de qualquer elemento que precisemos, eles retornam NodeList que são menos limitados do que HTMLCollection.
*/
