console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionandoum item na lista

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

/*if (idadeComprador >= 18) {
    console.log("Comprador maior de idadade");
    listaDeDestinos.splice(1, 1); // removendo item
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); // removendo item
} else {
    console.log("Não é maior de idade e não posso vender");

}/*/

if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada)
console.log("Boa viagem");

else{
console.log("Você não pode embarcar");
} 

console.log(listaDeDestinos);

/*console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);

Utilizamos os operadores lógicos = e >, 
mas existemdiversas possibilidades de configuração:
Quando utilizamos o marcador == estamos marcando uma 
comparação, e quando utilizamos = fazemos atribuição de valor.


Abaixo há afirmações referentes às operações lógicas na
linguagem JavaScript. Quais delas são verdadeiras?

Alternativa correta
O operador lógico AND é representado 
pelos caracteres && e o OR pelo ||.


Correta! AND é representado pelo && e OR pelo ||.

Alternativa correta
Os operadores lógicos devem ter no lado esquerdo e 
direito uma expressão booleana.


Correta, por exemplo:

if (idade > 18 && idade < 65){

}
Repare que temos duas expressões booleanas, 
na esquerda e na direita do operador lógico &&.

O que aprendemos nessa aula:

If e Else

Operadores lógicos

if encadeado

else if

&& e ||  */