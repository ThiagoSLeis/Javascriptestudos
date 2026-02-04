// HOF -> High-Order Function === Função que recebe outra função como parâmetro

function calcular(numeroUm, numeroDois, operacao){
    return operacao(numeroUm,numeroDois)
}
function soma(numUm, numDois){
    return numUm + numDois
}
const resultadoSoma = calcular(2, 4, soma)
console.log(resultadoSoma)

function subtracao(numeroUm, numeroDois){
    return numeroUm - numeroDois
}
const resultadoSubtracao = calcular(5, 70, subtracao)
console.log(resultadoSubtracao)

function multiplicacao(numeroUm, numeroDois){
    return numeroUm * numeroDois
}
const resultadoMultiplicacao = calcular(5 , 5, multiplicacao)
console.log(resultadoMultiplicacao)

function divisao(numeroUm, numeroDois){
    return numeroUm / numeroDois
}
const resultadoDivisao = calcular(10, 5, divisao)
console.log(resultadoDivisao)

