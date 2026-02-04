// Quero uma saudação usando arrow function
const saudacao = (nome) => { console.log("Olá,",nome)}
saudacao ("Thiago.")

// Quero dobrar o número usando uma arrow function
const numeroDobrado = (numero) => {return numero * 2}
let numeroDois = numeroDobrado(2)
console.log(numeroDois) // Resultado esperado = 4

// Usando HOF(HIGH ORDER FUNCTION): Faça todas as operações matemáticas básicas.
// HOF -> High-Order Function === Função que recebe outra função como parâmetro

// Função geral que vai receber outras funções (soma/subtração/divisão/multiplicação)
function calcular(numeroUm, numeroDois, operacao){
    return operacao(numeroUm, numeroDois)
}

// Função que vai fazer a soma
function soma(numeroUm,numeroDois){
    return numeroUm + numeroDois
}

// Função que vai fazer a subtração
let subtracao = (numeroUm, numeroDois) => {
    return numeroUm - numeroDois
} // Quis testar uma arrow function aqui

function multiplicacao(numeroUm, numeroDois){
    return numeroUm * numeroDois
}

function divisao(numeroUm, numeroDois){
    return numeroUm / numeroDois
}
// soma
const resultadoSoma = calcular(10, 5, soma)
console.log(resultadoSoma)
// subtração
const resultadoSubtracao = calcular(10, 5, subtracao)
console.log(resultadoSubtracao)
// multiplicação
const resultadoMultiplicacao = calcular(10, 5, multiplicacao)
console.log(resultadoMultiplicacao)
// Divisão
const resultadoDivisão = calcular(10, 5, divisao)
console.log(resultadoDivisão)

/* 
ENUNCIADO ULTIMO EXERCÍCIO
1- O programa deve iniciar um contador em 0
2- A cada 1s contador ++
3- Exibir o tempo passando
4- Usar setInterval() e clearInterval()
5- Para o contador em 10s
*/

let contador = 0 // let pois o contador vai ser alterado a cada 1s

const paradaId = setInterval(() => {
    contador ++
    console.log("Tempo passado: ", contador)
    if (contador === 10){
        clearInterval(paradaId)
        console.log("O tempo acabou!")
    }
}, 1000)