const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter não altera o array original, ele entrega outra lista
const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})
const numerosImpares = numeros.filter((numero) => {
    return numero % 2 != 0
})
console.log("Todos os números: ", numeros)
console.log("Números pares: ", numerosPares)
console.log("Números ímpares: ", numerosImpares)

// Transforma nossa lista em outra lista de coisas diferentes
// Além de percorrer ele retorna outra lista, não altera a lista original
const numerosDobrados = numeros.map((numeros) =>{
    return numeros * 2
})
console.log(numerosDobrados)