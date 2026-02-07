// Lista de Nomes
// Neste caso, apenas percorre os valores de um iterável, não modifica o array original.

let nomes = ["Thiago", "Samira", "Melissa", "Kaique", "Bruno"]
for (nome of nomes){
    console.log(nome)
}
// Outra maneira de percorrer sobre o array
for (let i = 0 ; i < nomes.length; i++){
    console.log(nomes[i], "índice: ", i)
}

// Adicionar e remover itens

let frutas = ['Ameixa', 'Uva', 'Banana', 'Kiwi', 'Maçã', 'Morango']
console.log(frutas)

// ADICIONANDO Melancia
frutas.push("Melancia")
console.log(frutas)

// Removendo Banana
frutas.shift() // SHIFT NÃO RECEBE PARÂMETRO, SEMPRE REMOVE O PRIMEIRO VALOR
console.log(frutas.indexOf("Morango"))

indiceBanana = frutas.indexOf("Banana")
if (indiceBanana !== -1){
    frutas.splice(indiceBanana, 1) // REMOVE APENAS UM ELEMENTO NO INDICE
}
console.log(frutas)