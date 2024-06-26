/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ulElement = document.querySelector('ul');
const ulChildrenElementsArray = Array.from(ulElement.children);
const insertVideoClassIntoLiElements = li => {
  li += li.classList.add('video');
};

ulChildrenElementsArray.forEach(insertVideoClassIntoLiElements);

console.log(ulElement.children);

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2Element = document.querySelector('h2');
console.log(h2Element.parentElement);

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1Element = document.querySelector('h1');
console.log(h1Element.nextElementSibling);

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log(ulElement.previousElementSibling);

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

const lisElements = document.querySelectorAll('li');

Array.from(lisElements).forEach(li => {
  li.addEventListener('click', () => {
    console.log(li);
  });
});

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [
  {
    name: 'Como o promise all funciona | JavaScript',
    length: '00:01:52',
  },
  {
    name: 'Como refatorar um for loop | JavaScript',
    length: '00:04:18',
  },
  {
    name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
    length: '00:02:55',
  },
];

const button = document.querySelector('button');

button.addEventListener('click', () => {
  videos.forEach(video => {
    const li = document.createElement('li');
    li.textContent = video.name;

    ulElement.append(li);
  });
});

/*
    07
  
    - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
      sejam removidos.
*/

h1Element.addEventListener('click', () => {
  const body = document.querySelector('body');

  Array.from(body.children).forEach(child => {
    child.remove();
  });
});
