// adicionando métodos
// métodos são funções criadas dentro de objetos
// funções criadas fora de objetos são funções e funções criadas dentro de objetos são métodos (que são em essência a mesma coisa)
let user = {
    name: 'Joãozinho',
    age: 31,
    email: 'joaozinho@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Coxinha de maçã', '3 receitas de bolo'],
    login: function () {
        console.log('Usuário logado');
    },
    logout: function () {
        console.log('Usuário deslogado');
    },
};

user.login();

user.logout();
