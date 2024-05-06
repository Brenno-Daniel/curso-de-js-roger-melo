/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

const titleText = document.querySelector('h1');

titleText.textContent = titleText.textContent.toUpperCase();

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55];

const ulElement = document.querySelector('.numbers');

const insertNumberIntoUlElement = number => {
  ulElement.innerHTML += `<li class="number">${number}</li>`;
};

numbers.forEach(insertNumberIntoUlElement);

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

const lisElements = document.querySelectorAll('.number');

const changeLisElementsColor = li => {
  const isEven = Number(li.textContent) % 2 === 0;

  if (isEven) {
    li.style.color = 'lightblue';
    return;
  }

  li.style.color = 'pink';
};

lisElements.forEach(changeLisElementsColor);

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

const indexHtmlBody = document.querySelector('body');

indexHtmlBody.classList.add('body-background');

/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const indexHtmlLink = document.querySelector('a');

indexHtmlLink.setAttribute('href', 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo');

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

console.log(indexHtmlLink.getAttribute('href'));

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

console.log(titleText.style);

/*
  08

  - Remova a classe "body-background", do elemento body.
*/

setTimeout(() => {
  indexHtmlBody.classList.remove('body-background');
}, 500);

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

indexHtmlLink.classList.toggle('link');
