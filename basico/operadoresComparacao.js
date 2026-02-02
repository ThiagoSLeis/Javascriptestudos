const idadeVinny = 36
const minhaIdade = '36'

const saoIguais = idadeVinny == minhaIdade // true or false
console.log("São da mesma idade: ", saoIguais) // False

const vinnyMaior = idadeVinny > minhaIdade
console.log("Idade do vinny é maior: ", vinnyMaior) // True

const vinnyMenor = idadeVinny < minhaIdade
console.log("Idade do vinny é menor: ", vinnyMenor) // False

const maiorIgual = idadeVinny >= minhaIdade
console.log("A idade do vinny é maior ou igual: ", maiorIgual) // True, pois idadeVinny > minhaIdade. (testei com as idades iguais)

const idade = 25
const idadeIrmao = 18
const maiorDeIdade = idade >= 18
const irmaoMaiorDeIdade = idadeIrmao >= 18
console.log("Meu irmão é maior de idade: ", irmaoMaiorDeIdade)
console.log("Sou maior de idade: ", maiorDeIdade)

/* 
Observação o JavaScript permite qualquer tipo de comparação(number==string for example)
*/

// comparação estrita

const comparacaoEstrita = minhaIdade === idadeVinny 
/*
Caso comparacaoEstrita tivesse dois iguais, o retorno seria true.
O JavaScript tentaria igualar os valores, transformando string em number ou o contrário
*/ 
console.log(comparacaoEstrita)