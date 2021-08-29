/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/

const cat = {
    name: 'Fiona',
    age: 5,
    color: 'Preto',
    bestFriends: ['Jureg', 'Alvin'],
    sound: function () {
        return 'MIAUUUU';
    },
};

console.log(cat);

/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

console.log(
    `Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriends[0]}" e "${
        cat.bestFriends[1]
    }", e "sound", que recebeu uma função que retorna "${cat.sound()}"`,
);

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/

cat.age += 2;

console.log(cat.age);

/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/

cat.bestFriends.push('Xico');

console.log(cat.bestFriends);

// -- Código da aula --
const addFriend = friend => {
    cat.bestFriends.push(friend);
};

addFriend('Jimmy');

console.log(cat.bestFriends);

// Outra forma é passando o objeto por parametro
const addFriend2 = (friend, object) => {
    object.bestFriends.push(friend);
};

addFriend2('Arthur', cat);

console.log(cat.bestFriends);

/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/

const changeColor = object => {
    object['color'] += ` e branco`;
};

changeColor(cat);

const colorProperty = 'color';

console.log(cat[colorProperty]);

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/

const isObject = value => typeof value === 'object';

console.log(isObject(cat));

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

const dog = {
    name: 'Marmaduque',
    age: 5,
    color: 'Caramelo',
    bestFriends: ['Duke', 'Bob'],
    sound: function () {
        console.log('AU AUU');
    },
};

const getAgeMessage = (cat, dog) => `A soma das idades de ${cat.name} e ${dog.name} é ${cat.age + dog.age}`;

const ageMessage = getAgeMessage(cat, dog);

console.log(ageMessage);

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

const isAnSUV = car => {
    if (car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35') {
        return true;
    }

    return false;
};

console.log(isAnSUV('Honda Civic'));
console.log(isAnSUV('Ford EcoSport'));

const isAnSUV2 = car => {
    switch (car) {
        case 'Honda HR-V':
        case 'Jeep Renegade':
        case 'Ford EcoSport':
        case 'Hyundai iX35':
            return true;
        default:
            return false;
    }
};

console.log(isAnSUV2('Honda Civic'));
console.log(isAnSUV2('Ford EcoSport'));

// -- Código da aula --
// Uma possibilidade seria usando metodo includes
const cars = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35'];

const isAnSUV3 = car => {
    if (cars.includes(car)) {
        return true;
    }

    return false;
};

console.log(isAnSUV3('Honda Civic'));
console.log(isAnSUV3('Ford EcoSport'));

// Outra forma seria usando código mais conciso porém menos legível
const isAnSUV4 = car => ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35'].includes(car);

console.log(isAnSUV4('Honda Civic'));
console.log(isAnSUV4('Ford EcoSport'));

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recmebe a mensage 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/

const typeOfProperties = type => {
    const types = {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado',
        object: 'Arrays, Datas, Objetos literais, Funções, etc.',
    };

    switch (type) {
        case null:
            return types.null;
        case undefined:
            return types.undefined;
        case Object:
            return types.object;
        default:
            return 'Outro tipo';
    }
};

console.log(typeOfProperties(null));
console.log(typeOfProperties(undefined));
console.log(typeOfProperties(Object));
console.log(typeOfProperties(cat));

// -- Código da aula --
const getTypeDefinition = type => {
    const obj = {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado',
        object: 'Arrays, Datas, Objetos literais, Funções, etc.',
    };

    return obj[type];
};

console.log(getTypeDefinition('null'));
console.log(getTypeDefinition(undefined));
console.log(getTypeDefinition('object'));

// Outra forma de resolver, porém não é a mais recomendada, mas que podemos encontrar por ai...
const getTypeDefinition2 = type => {
    return {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado',
        object: 'Arrays, Datas, Objetos literais, Funções, etc.',
    }[type];
};

console.log(getTypeDefinition('null'));
console.log(getTypeDefinition(undefined));
console.log(getTypeDefinition('object'));
