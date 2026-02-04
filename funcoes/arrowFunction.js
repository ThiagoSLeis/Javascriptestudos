const saudacao = (nome) => {
    console.log("Olá, ",nome)
}

saudacao("Thiago")

/* 
Arrow function é uma forma mais curta de escrever funções no js
Muito utilizada em:
    callbacks
    funçoes pequenas 
    código moderno ES6+

Na sintaxe, a palavra function some e entra o arrow (=>):
const soma = (a, b) => {
    return a + b
}

quanto tem uma única linha o return fica implícito
const soma (a,b) => a + b
*/
const numeroDobrado = (numero) => {
    return numero * 2
}
const x = numeroDobrado(3)
console.log("O dobro de 3 é igual a:", x)

// Escrevendo arrow function de forma simplificada. (APENAS UMA LINHA)
const boasVindas = person => console.log("Boas vindas,", person)
boasVindas("Cristhiano")

const dobroNumero = (number) =>{ return number * 2}
let dobrado = dobroNumero(4) // esperando 8 de resultado aqui
console.log(dobrado)

