const title = document.querySelector('h1');

console.log(title.style);

title.style.margin = '50px';
title.style.color = 'pink';
title.style.fontSize = '50px';

// quando quer manipular estilos de forma pontual em um elemento é preferível usar style invés de setAttribute, porém é ainda mais eficiente adicionar classes CSS em arquivos separados e manipular com JS
