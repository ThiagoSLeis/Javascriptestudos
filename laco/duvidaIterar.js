// /*
// Para ver o tamanho da string no JS usamos length
// */
// let texto = "Thiago"
// for (let contador = 0; contador < texto.length; contador++){
//     console.log(texto[contador])
// }

// // Para Array usamos o mesmo método

// let numeros = [0,2,4,6,8]
// for (let cont = 0; cont < numeros.length; cont++){
//     console.log(numeros[cont])
// }

// // Obejetos não possuem length

// let pessoa = {nome: 'Thiago', idade: 25}
// // object.keys(pessoa).length

// for (let chave in pessoa){
//     console.log(chave, pessoa[chave])
// }
// // Observação, números não tem tamanho neste sentido, se quisermos saber o tamanho devemos transformar em string

// let number = 1850
// number.toString().length

// for (let digito of number.toString()){
//     console.log(digito)
// }

/*
Percorrer uma palavra letra por letra
A cada letra:
    contar
    guardar o valor
No final:
    imprimir a palavra
    imprimir a contagem
*/

let palavraExiste = "Condicionador"
let palavraVazia = ""
let contagemTotal = 0

for (let progressao = 0; progressao < palavraExiste.length; progressao++){
    palavraVazia += palavraExiste[progressao]
    contagemTotal += 1
}
console.log(palavraVazia, contagemTotal)
console.log(palavraExiste.length)
