// Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade de itens usando .lenght

let cidades = ["São Luís", "Salvador", "Fortaleza", "Recife"]
console.log(cidades.length) // Exibindo quantidade total de itens

for (let i = 0; i < cidades.length; i ++){
    console.log("Índice: ", i, "Cidade:", cidades[i]) // Iterando sobre todos eles
}

// SOMAR TODOS OS NÚMEROS

const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
console.log(numeros)

let numerosInteiros = numeros.map(Number) // Transformei em números inteiros usando map(number)
console.log(numerosInteiros)

let somaNumeros = null
numerosInteiros.forEach((v) => {
    somaNumeros += v
})
console.log(somaNumeros)
/* 
const numeros = [1,2,3,4,5,6,7,8,9,10]

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log(soma)

*/