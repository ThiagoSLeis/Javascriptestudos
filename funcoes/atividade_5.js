// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada

const saudacao = () =>{
    return "Olá! Seja bem vindo(a)!"
}
const chamaSaudacao = saudacao()
console.log(chamaSaudacao)

// Crie uma função apresentarPessoa(nome,idade) que exibe no console: "Olá, meu nome é {nome} e tenho {idade} anos."
function apresentarPessoa(nome,idade){
    return (`Meu nome é ${nome} e tenho ${idade} anos`)
}
const nomeUm = "Thiago"
const idade = 25
console.log(apresentarPessoa(nomeUm, idade))

// Cálculo de IMC
const calcularIMC = (peso,altura) => {
    return peso/(altura ** 2)
}
let pesoUm = 70
let alturaUm = 1.77
console.log(calcularIMC(pesoUm,alturaUm))

// Verificar aprovação
function verificarAprovacao(nota){
    if (nota>=7){
        console.log("Aprovado")
    } else{
        console.log("Reprovado")
    }
}

verificarAprovacao(2)

// Número par ou impar
function ehPar(numero){
    if (numero % 2 === 0){
        return true
    } else{
        return false
    }
}

console.log(ehPar(3))

// Função soma 
function soma(a,b){
    return a + b
}
let somaNumeros = soma(5,5)
console.log(`O resultado da soma é igual a : ${somaNumeros}`)

/* 
OUTRA ALTERNATIVA - MOSTRANDO OS VALORES E ARMAZENANDO EM VARIÀVEIS
// Função soma
function soma(a, b) {
    return a + b
}

const numero1 = 5
const numero2 = 5

const somaNumeros = soma(numero1, numero2)

console.log(`O resultado da soma de ${numero1} e ${numero2} é igual a: ${somaNumeros}`)
*/

// CALCULADORA DE TROCO COM FUNÇÕES 

function calcularTroco(valorPago, valorCompra){
    return valorPago - valorCompra
}
let troco = calcularTroco(100, 50)
console.log(`O seu troco é de ${troco}R$`)

// arrow function da soma(vou fazer de subtração)

let subtracao = (c,d) => {
    return c - d
}
let valores = subtracao(2,2)
console.log(valores)

function executaAcao(acao){
    console.log("Olá," + acao()) 
}

function mundo(){
    return " mundo!"
}

executaAcao(mundo)