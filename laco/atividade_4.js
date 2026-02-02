// Contador de 1 a 10

for(let contador = 1; contador <= 10; ++contador){
    console.log(contador)
}

// Some todos os números de 1 a 100. Mostre o resutado final com uma mensagem explicativa

let soma = 0
let numeroSomado = 0

while(soma < 100){
    soma ++
    numeroSomado += soma
}
console.log("A soma de todos os números de 1 a 100 é igual a: ", numeroSomado)
// Poderia fazer usando um for também
let totalSoma = 0
for( let somaFor = 1; somaFor <= 100; ++somaFor){
    totalSoma += somaFor
}
console.log("A soma de todos os números de 1 a 100 é igual a: ", totalSoma)

// peça um número e mostra a tabuada desse número de um a 10 usando for
// tive dificuldade em implementar esse exemplo

let tabuadaInputEscolhido = 7

for (tabuadaNumero = 1; tabuadaNumero <= 10; tabuadaNumero++){
    console.log(tabuadaNumero, "x", tabuadaInputEscolhido, 
    "é Igual a: ",tabuadaInputEscolhido * tabuadaNumero)
}

// Use while pra contar de 10 até 0 no console, mostre uma mensagem no fim : "contagem finalizada"

let contagemDez = 10

while (contagemDez >= 0){
    // imprimi o console antes pra mostrar o 10
    console.log(contagemDez)
    contagemDez --
}
console.log("Contagem finalizada!")

// Receber números até digitar 0
// Use um do while para repetir a execução até que o valor seja 0
// conte quantos números diferentes de zero foram digitados e mostre no console ao final
// Não consegui fazer só, olhei a resposta do professor e anotei isso pra poder fazer o meu sozinho.

let numeroDigitado; // Não defini mas existe?
let quantidade = 0 // contagem de laços totais enquanto o número for diferente de 0
let repeticoes = 0 // calcula repetição pra poder verificar se o número é igual a 0

    do{
        if (repeticoes === 0){
            numeroDigitado = 5
        } else if(repeticoes === 1){
            numeroDigitado = 10
        } else{
            numeroDigitado = 0
            console.log("O número digitado foi: ",numeroDigitado)
        }
        if (numeroDigitado !== 0){
            quantidade++
            console.log("quero verificar a quantidade de vezes enquanto o número é diferente")
        }
        repeticoes ++
        console.log(repeticoes, "Quero verificar o laço total")
    } while(numeroDigitado !== 0){
        console.log("O total de número digitados foi: ",quantidade)
        console.log("O total de laços foi: ", repeticoes)
    }

/*
JOGO DO NÚMERO SECRETO
- Crie uma variável com valor fixo
- Simule até 3 tentativas usando um for
- Em cada tentativa, compare o valor tentando com o número secreto e mostre no console
*/

let varFixa = 5
let numeroSecreto;

for(tentativa = 1;tentativa <= 3; tentativa++){
    
    if (tentativa === 1){
        numeroSecreto = 2
    }else if(tentativa === 2){
        numeroSecreto = 3
    }else{
        numeroSecreto = 5
    }
    if(numeroSecreto === varFixa){
        console.log("O número era: ", varFixa)
        console.log("Acertou!")
    }else{
        console.log("tente novamente")
    }
}

// Crie uma variável anoNascimento e anoAtual, use um for para lista a idade da pessoa ano a ano

let anoAtual = 2025
let anoNascimento = 2000

for (let ano = anoNascimento; ano <= anoAtual; ano++){
    console.log("Em " + ano + " Você tinha " + (ano - anoNascimento))
}

// Mostre todos os números pares de 1 a 50 usando for

for (pares = 0; pares <= 50; pares++){
    if(pares % 2 === 0){
        console.log(pares)
    }
}

// contar multiplos de 3 entre 1 e 100

let multiplosdeTres = 0

for (let i = 1; i<=100;i++){
    if(i % 3 === 0){
        multiplosdeTres++
    }
}
console.log(multiplosdeTres) // 33 multiplos de 3 entre 0 e 100 (preguiça de fazer console)

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

let opcao =2
let escolha = 0
do {
    if (escolha === 0){
        opcao = 1
    } else if (escolha === 1){
        opcao = 2
    }else{
        opcao =3
    }
    if (opcao === 1){
        console.log("Ver saldo")
        }
    else if (opcao === 2){
        console.log("Fazer depósito")

    }else{
        console.log("Sair")
    }
    escolha++
} while( opcao !== 3)

// O laço for funciona com multiplas variaveis

for (let x =0, j = 10; x < j; x++, j--){
    console.log(x,j)}