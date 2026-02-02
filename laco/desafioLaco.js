// usar um único laço de repetição pra poder contar numeros pares e impares de 0 a 100
// Eu errei no exercicio, pois eu iterei sobre os número e não contei que era o objetivo
let numeros = 0

    do{
        if (numeros % 2 !== 0){
            console.log("Este número é impar: ",numeros)
        }else if (numeros %2 ===0){
            console.log("Este número é par: ", numeros)
        }
        numeros++
    } while (numeros <= 100)


// Na resolução do professor eu errei colocando a variável errada dentro do if
let totalNumerosPares = 0
let totalNumerosImpares = 0

for (contador = 0; contador <= 100; contador++){
    if (contador % 2 === 0){
        totalNumerosPares ++
    }else{
        totalNumerosImpares ++
    }
}
console.log("Quantidade de números pares: ", totalNumerosPares, " Quantidade de números ímpares: ", totalNumerosImpares)
