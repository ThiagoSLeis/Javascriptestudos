const pessoa = {
    nome: 'Vinicius',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}
for (const chaves in pessoa){
    console.log(chaves)
    // também posso pegar o valor da chave
    console.log('Valor: ', pessoa[chaves])
}
console.log(pessoa.nome, pessoa.idade, pessoa.pets, pessoa.nacionalidade)
// Maneira de mostrar via chave
const propriedadeNome = 'nome'
console.log(pessoa[propriedadeNome])

// Pegando todas as chaves de um objeto
const chave = Object.keys(pessoa)
// Pegando valores
const valores = Object.values(pessoa)

// Mostra chave e valor
const entradas = Object.entries(pessoa)

console.log("Chaves:", chave)
console.log('Valores:', valores)
console.log('Entradas:', entradas)