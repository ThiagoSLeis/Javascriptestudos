let numeroSecreto = 7 // NÚMERO A SER ACERTADO
let numeroTentado = null // NÚMERO QUE VAI SER REATRIBUIDO DENTRO DO LOOP.
let tentativas = 0 // CONTAGEM DO LOOP

do {
    if(tentativas === 0){
        numeroTentado = 2
        console.log("Você errou o número secreto!")
    }else if(tentativas === 1){
        numeroTentado = 3
        console.log("Você errou o número secreto!")
    }else{
        numeroTentado = 7
        console.log("O número secreto era: ",numeroSecreto, "você tentou: ", tentativas, " vezes.")
    }
    tentativas++
} while(numeroSecreto !== numeroTentado)
// Nesse caso com o loop começando do zero (eu tentei 2 vezes e acertei uma.) mas eu poderia mudar a forma de contagem.

const numeroFixo = 7
let tentadoNumero = null

for(let contador = 1; contador <= 3; contador++){
    if (contador ==1){
        tentadoNumero = 2
    }else if (contador == 2){
        tentadoNumero = 3
    }else{
        tentadoNumero = 7
    }
    if (numeroFixo === tentadoNumero){
        console.log("O número era: ", numeroFixo)
        console.log("Acertou!")
    }else{
        console.log("Errou, tente novamente!")
    }
}

// Crie uma variável anoNascimento e anoAtual, use um for para lista a idade da pessoa ano a ano

/* 
Menu com repetição
crie uma variavel opcao
use um do while para exibir repetidamente as opções
1 - Ver saldo
2 - Fazer depósito
3 - Sair

O menu deve continuar sendo exibido até que a opção 3 seja escolhida
Mostre no console a ação correspondente a cada opção
*/

// OBS -> Pra simular a opcao iremos usar uma outra variável

/* 
📌 Recomendações para amanhã (importante)

Quando for refazer:

Leia o enunciado e reescreva em português simples

“O laço repete até X acontecer”

Defina quem controla o laço

Defina quem guarda o resultado

Só depois escreva o código

Se travar:

pare

explique em voz alta

volte para o papel (ou comentário)

Não lute com o teclado.
*/

