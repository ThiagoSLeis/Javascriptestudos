const numeroUm = 4 
const numeroDois = 8

// Operador de subtração "-"
const subtracao = numeroUm - numeroDois
console.log("Subtração: ", subtracao)

// Operador de soma "+"
const soma = numeroUm + numeroDois
console.log("Soma: ", soma)

// Operador de divisão "/"
const divisao = numeroUm / numeroDois
console.log("Divisão: ", divisao)

// Operador de multiplicação
const multiplicacao = numeroUm * numeroDois
console.log("Multiplicação: ", multiplicacao)

// Operador de resto
const resto = 13 % 2
console.log("Resto da divisão: ", resto)

// Operador de potência
const potencia = numeroUm ** numeroDois
console.log("A potência de 4^8: ", potencia)

// Conta Complexa
const contaComplexa = numeroUm + numeroDois * numeroUm
console.log("Conta complexa: ", contaComplexa)

/*
Ordem de precedência dos operadores aritméticos

1 - Parênteses ()
2- Exponenciação **
3 - Multiplicação, Divisão e Resto
4- Adição e Subtração
*/

let numero = 5
let numeroString = '10'

let somaString = numero + numeroString
console.log(somaString) // concatenou on número 5 com a string 10
console.log(typeof numeroString) // ao concatenar o número com a string o resultado retorna string

let contador = 5
// contador = contador + 1
contador++ // Incrementa 1 no contador
console.log("Incremento: ", contador)

//contador = contador - 1
contador-- //Decrementa menos 1
console.log("Decremento: ", contador)

let numeroTres = 3
numeroTres += 2 // Funciona pra qualquer operação += -= *= /=
console.log("3 + 2 = ", numeroTres)

