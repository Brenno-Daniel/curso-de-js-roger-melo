const paragraph = document.querySelector('p');

paragraph.innerText += ' Texto inserido';

console.log({ paragraph });

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph, index) => {
    paragraph.innerText += ` Novo Texto ${index + 1}`;
});

console.log({ paragraphs });

const div = document.querySelector('.content');

div.innerHTML += `<p>Novo H2</p>`;

console.log({ div });

const people = ['Diego', 'Carlos', 'Malaquias'];

people.forEach(person => {
    div.innerHTML += `<p>${person}</p>`;
});

// as propriedades innerText e innerHTML são, tanto getters, quanto setters
// get = obter e set = estabelecer
