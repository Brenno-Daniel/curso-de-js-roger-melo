// a palavra chave this
// this é um objeto de contexto, ele representa o contexto em que o código atual está sendo executado
let user = {
    name: 'Joãozinho',
    age: 31,
    email: 'joaozinho@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Coxinha de maçã', '3 receitas de bolo'],
    login() {
        console.log('Usuário logado');
    },
    logout() {
        console.log('Usuário deslogado');
    },
    logBlogPosts() {
        console.log(`${this.name} escreveu os seguintes posts:`);

        this.blogPosts.forEach(post => {
            console.log(post);
        });
    },
};

user.logBlogPosts();
