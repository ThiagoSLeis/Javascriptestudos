// Boas vindas personalizadas
let nome = "Thiago Santos Leis"
console.log("Olá,", nome + '!',"Seja bem vindo ao curso de JavaScript.");

// Cálculo de idade

let anoAtual = 2025
let anoNascimento = 2000

function idadeAtual(){
    idade = anoAtual - anoNascimento
    console.log("Você tem ", idade, "anos")
}

idadeAtual()

// Mensagem de localização

let cidade = "São Luís"
let estado = "Maranhão"
let nacao = "Brasil"

console.log("Você está em ", cidade + ' -', estado + ",", nacao + ".")

// Tipo da variável

let temCarteira = false

console.log(typeof temCarteira)

// Simulação bancária simples

saldo = 0; //saldo inicial
saldo += 200; //depósito
saldo -= 50; //saque

console.log("Saldo final: R$"+ saldo)

// Média de notas

let matematica = 10
let portugues = 10
let ciencias = 5

media = matematica + portugues + ciencias / 3

console.log("A média de nota entre as três disciplinas é: ", media)

// Reajuste de Salário

let salarioAtual = 3000;
let porcentagem = salarioAtual * 0.1;
let aumentoSalario = porcentagem + salarioAtual
console.log("Seu salário era: " + salarioAtual + "R$. Aumentamos em 10%, agora ele é: " + aumentoSalario)

// contador de cliques
// Não consegui fazer, não conhecia a sintaxe e não sabia fazer loop assim.
let cliques = 0

cliques++
cliques++
cliques++

console.log("O botão foi clicado:", cliques, "vezes!")

// Constantes não podem ser alteradas

const PI = 3.14
console.log(PI)

// PI = 2.20 ERROR: Assingment to constant variable

// Concatenando tipos diferentes
let mensagem = "Oi"
let numero = 2
let mensagemNumero = mensagem + numero

console.log(mensagemNumero)