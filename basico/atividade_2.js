const { PassThrough } = require("node:stream")

// Atividade proposta em aula 
console.log('Boas vindas a calculadora de trocos!')
let valorCompra =  17.50
let valorPago = 20
let troco = valorPago - valorCompra
console.log("Seu troco é:",troco)

// Verificação de maioridade
const idade = 19
const maiorIdade = idade >= 18

if (maiorIdade) {
    console.log(" É maior de idade, tem", idade,"anos.")
} else {
    console.log("É menor de idade")
}

// Situação do aluno

let notaUm = 10
let notaDois = 10
let notaTres = 1

let mediaAluno = (notaUm + notaDois + notaTres)/3

console.log("A média do aluno é:", mediaAluno)

// Simulação de troco é igual a atividade proposta em aula

// Validação de senha 

let senhaUm = 123456
let senhaDois = '123456'

let comparaSenha = senhaUm === senhaDois // Comparação estrita é a forma mais segura de comparar.

if (comparaSenha) {
    console.log("A senha são iguais!")
} else{
    console.log("As senhas não conferem")
}

// Controle de faltas

let totalAulas = 10
let faltas = 2
let faltasPermitidas = totalAulas / 4

if (faltas <= faltasPermitidas) { 
    console.log("Aprovado, você faltou", faltas, "vezes e o limite de faltas era:", faltasPermitidas)
} else{
    console.log("reprovado!")
}

// Resolução proposta pelo professor e mais adequedada para cálculo de porcentagem

let totalDeAulas = 10
let totalFaltas = 5

let limiteFaltas = totalDeAulas * 0.25

console.log(totalFaltas > limiteFaltas)

// Verificação de login

let temLogin = true
let temSenha = true

let podeAcessar = temLogin && temSenha
console.log("Se for false nega o login, se for true permite.", podeAcessar)

// Valor negado

let disponivel = true
console.log(!disponivel) // not inverte o valor

// condições compostas

let numeroUm = 2
let numeroDois = 2
console.log(numeroUm % 2 === 0 && numeroDois % 2 === 0 && numeroUm === numeroDois)

// calculadora de porcentagem

let porcentagem = 0.15 * 120
console.log("15% de 120 é igual a:", porcentagem)

// Ordem de operações

let contaUm = 2 + 3 * 5
console.log(contaUm,", a ordem de precedência calcula a multiplicação primeiro.")


contador = 0
console.log(++contador) // printa 1, incrementa antes de printar
console.log(contador++) //printa 1, incrementa depois de printar
