// Template strings
const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação
const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments + ' comentários.'

console.log(postMessage)

// outro exemplo
console.log('Você manja do filme \'As Branquelas\'?') // a "\" antes da ' diz ao JS que é uma string

// usando template strings
const postMessageWithTemplateString = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`

console.log(postMessageWithTemplateString)

// criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>Autor: ${postAuthor}</p>
    <span>Este post tem ${postComments} comentários.</span>
`

console.log(html)
