const form = document.querySelector('.signup-form');
const usernameInput = document.querySelector('#username');

form.addEventListener('submit', event => {
    event.preventDefault();

    console.log(usernameInput.value);
    console.log(event.target.username.value);
});

const username = 'brenno';
const pattern = /^[a-z]{6,}$/;
// const isAMatch = pattern.test(username);

// if (isAMatch) {
//     console.log('o teste da regex passou');
// } else {
//     console.log('teste moio');
// }

const result = username.search(pattern);

console.log(result);
