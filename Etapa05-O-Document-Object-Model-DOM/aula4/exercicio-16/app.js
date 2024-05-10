/*
  01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/

const div = document.querySelector('div');
const elementsInsideDiv = Array.from(div.children);
let clickedChildDivMessage = '';
let clickedDivMessage = '';

const setClickEventListenerToElementAndTextToH2 = element => {
    element.addEventListener('click', event => setClickedChildDivWithTagNameUppercaseTextToH2(event));
};

const setClickedChildDivWithTagNameUppercaseTextToH2 = event => {
    const tagName = event.target.tagName.toUpperCase();

    h2.innerText = `Clicou no ${tagName}, filho da div.`;
};

elementsInsideDiv.forEach(element => setClickEventListenerToElementAndTextToH2(element));

div.addEventListener('click', event => setClickedDivTextToH2WhenIsPortableTV(event));

const setClickedDivTextToH2WhenIsPortableTV = event => {
    const isPortableTV = event.target.textContent !== 'TV portátil';

    if (isPortableTV) {
        h2.innerText = `${h2.innerText} \n Clicou na div.`;
    }
};

/*
  02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/

/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/

const h2 = document.createElement('h2');
document.querySelector('div').insertAdjacentElement('afterend', h2);

/*
  04

  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/

h2.addEventListener('copy', () => {
    console.log('Texto copiado!');
});

/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/

const eggDiv = document.querySelector('.egg');

const setOffsetXAndYToEggDivContent = event => {
    eggDiv.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`;
};

eggDiv.addEventListener('mousemove', event => setOffsetXAndYToEggDivContent(event));

/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/

const changeEggColorButton = document.querySelector('button');

const setBackgroundColorToEggDiv = () => {
    eggDiv.style.background = 'lightgoldenrodyellow';
};

changeEggColorButton.addEventListener('click', () => setBackgroundColorToEggDiv());

/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/

const people = [
    { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
    { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
    { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
    { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
    { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
    { id: 6, name: "Gustavo D'Aqui", profession: 'Gerente de Marketing' },
    { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
    { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
    { id: 9, name: 'Hamilton Silva', profession: 'Advogado' },
];

const logMessageIfContainSomeFrontendDeveloper = person => {
    const isFrontendDeveloperProfession = person.profession === 'Front-end developer';

    if (isFrontendDeveloperProfession) {
        console.log('O array people contém, no mínimo, um(a) Front-end developer.');
    }
};

people.some(person => logMessageIfContainSomeFrontendDeveloper(person));
