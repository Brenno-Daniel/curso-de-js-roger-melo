const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'outro link maroto');

console.log(link.getAttribute('href'));

link.innerText = 'Algum sitezão maneiro aqui';

const paragraph = document.querySelector('p');

console.log(paragraph.getAttribute('class'));

paragraph.setAttribute('class', 'success');

console.log(paragraph.getAttribute('class'));

paragraph.setAttribute('style', 'color: green;');

console.log(paragraph.getAttribute('style'));
