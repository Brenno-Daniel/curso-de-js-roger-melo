const user = {
    name: 'Brenno',
    age: 31,
    email: 'brenno@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
};

console.log(user.name);

user.age = 32;

console.log(user.age);

console.log(user['name']);

user['name'] = 'José';

console.log(user['name']);

const key = 'email';

console.log(user[key]);

console.log(typeof user);
