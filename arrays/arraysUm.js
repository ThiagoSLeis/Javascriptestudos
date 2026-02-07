const frutas = ['Uva', 'Banana', 'Kiwi', 'Maçã', 'Morango']

console.log(frutas)
frutas.splice(2,1) // Em qual posição e quantos. Caso o parâmetro 2 fosse "2", removeria o kiwi e a maçã
console.log(frutas)

// Uma das formas mais simpels de percorrer o array:
for (let i = 0; i < frutas.length; i++){
    console.log("Índice: ", i)
    console.log(frutas[i])
} // Neste caso estamos fazendo um for desaclopado da lista baseado no tamanho dela

console.log("USANDO FOR EACH")
/* 
forEach é um método de array. Ele percorre cada elemento, um por um e executa uma função para cada item.
obs{
- Ele não retorna nada
- Serve para executar ações (printar, calcular, salvar, etc.)
}
VALOR -> ELEMENTO ATUAL DO ARRAY
INDICE -> POSIÇÃO DO ARRAY, COMEÇA EM 0

Podemos ignorar o parâmetro que quisermos.
frutas.foreach((valor) => {
    console.log(valor)
    
IDEAL PARA: MOSTRAR DADOS, LOG, EXECUTAR AÇÕES, PERCORRER ARRAYS SIMPLES.
})
*/
frutas.forEach((valor, indicie) => {
    console.log("índice: ",indicie,valor)
})

// FOR OF (só quero olhar as frutas e não estou interessado no índice)
console.log("USANDO FOR OF")
for (const fruta of frutas){
    console.log(fruta)
}