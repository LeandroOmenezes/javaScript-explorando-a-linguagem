//let idade; // declarando variável
//idade = 26; // atribuindo valor

let idade;
idade = 26;
idade = idade+1;
console.log(idade);

console.log(`Trabalhando com listas`);
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

//console.log(`Destinos possíveis`);
//console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//Destinos possíveis: 

listaDeDestinos.push(`Curitiba`) //adicionandoum item na lista
console.log('Destinos possíveis')
//['Salvador', 'São Paulo', 'Rio de Janeiro']
console.log(listaDeDestinos);

//Removendo elementos
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

/*Quando usamos listas em nosso programa, como fazemos
 para acessar um elemento especifico dessa lista?

Alternativa correta
Para acessar um elemento especifico podemos chamar
 o nome dessa lista seguido de colchetes com o 
 index desse elemento. ex: lista[2]

Isso mesmo, lembre-se de que listas sempre começam a 
contagem de elementos a partir do 0 então o index 2 mostra o/ 
terceiro elemento da lista./*/

/*O que aprendemos nessa aula:

Criação de Arrays;

Inserção de itens em um array;

Array splice;

Palavras reservadas; exemplo:> new

Indices do array;/*/