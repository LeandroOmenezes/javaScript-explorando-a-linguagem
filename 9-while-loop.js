

console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);


let contador = 0;
let destinoExiste = false;
while(contador<3)
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador +=1;

    console.log("Destino existe: ", destinoExiste);
    
    if(podeComprar && destinoExiste){
        console.log("Boa Viagem");
    }else{
        console.log("Desculpe tivemos um erro!");
    }

    for(let i = 0 ; i < 3 ; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;   
    }
    
        
}
    
    
    
                  //Break e Debbuger

/*O comando break interrompe o fluxo de execução do 
laço de maneira forçada, sem precisarmos atingir a condição de saída


Exatamente, ao colocarmos um break dentro do laço estamos falando 
para o interpretador que quando ele chegar nessa linha ele deve 
sair do laço independentemente de outras condições.


/*As afirmações abaixo são verdadeiras em relação ao while?

O while sempre precisará de uma expressão condicional que definirá
quando o laço deve ser interrompido.


Correta. Muito bem! Lembre-se, essa expressão condicional precisará ser
informada dentro dos parênteses do while e pode ainda utilizar qualquer 
um dos operadores de comparação e operadores lógicos aprendidos no capítulo 5.

Na expressão condicional do while é possível utilizar qualquer operador de 
comparação (< [menor], > [maior], <= [menor ou igual], 
>= [maior ou igual], == [igual a] e != [diferente de])
e qualquer operador lógico (&& [and], || [ou]).


Correta. Isso aí! Todos os operadores de comparação e lógicos 
são válidos na expressão condicional do while! Use-os com sabedoria!

O que aprendemos nessa aula:

While;

Break;

Usando o Debbuger do VS Code;

Entendendo o fluxo de execução do código;

configurando o debbuger do VSCode;

For Loop; /*/