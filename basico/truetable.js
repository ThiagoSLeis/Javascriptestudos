// Tabela da verdade com primeiro exemplo de if else]]

let maiorIdade = true
let possuiDocumento = false

if (maiorIdade && possuiDocumento) {
    console.log('Pode entrar na festa');
} else {
    console.log("Não pode entrar na festa");
}
// Resultado esperado é o do else

let temCartao = false
let temDinheiro = true

if (temCartao || temDinheiro) {
    console.log("Pode comprar")
} else {
    console.log("Não pode comprar")
}
// Resultado esperado é o do if

let estaChovendo = true

if (!estaChovendo) {
    console.log("Pode sair sem guarda-chuva!")
} else{
    console.log("Leve o guarda-chuva!")
}

let contador = 5
console.log(++contador) // Imprime 6, pois a variável é incrementada antes da impressão
let contadorDois = 5
console.log(contadorDois++) // Imprime 5 e depois incrimenta mais um ao final do contador

// casos e casos
let a = 3
let b = a++ + 2 // b = 5 pois retorna 4 e depois vira 5
console.log(b)

let c = 3
let d = ++c + 2 // d = 6 pois ja foi incrementado um valor ao 3
console.log(d)