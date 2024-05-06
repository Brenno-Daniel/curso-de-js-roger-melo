// const paragraph = document.querySelector('p');

// // ver lista de classes do elemento
// console.log(paragraph.classList);

// // adicionar classe para um elemento html
// paragraph.classList.add('error');

// // remover classe
// paragraph.classList.remove('error');

// paragraph.classList.add('success');

// adicionar classe error onde tem palavra error e classe success onde tem palavra success:
const paragraphs = document.querySelectorAll('p');

// innerText vai receber todo texto visível que o elemento contém
// textContent vai receber todo texto que o elemento contém independente de estar visível ou não
paragraphs.forEach(paragraph => {
  if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error');
  }

  if (paragraph.textContent.includes('success')) {
    paragraph.classList.add('success');
  }
});

const title = document.querySelector('h1');

// método toggle busca a classe, caso não tenha a classe o toggle adiciona, caso já exista a classe então ele remove a classe
title.classList.toggle('test'); // como não existe a classe test, ele adiciona a mesma
title.classList.toggle('test'); // como já existe a classe test, ele remove a mesma
