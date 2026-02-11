const pessoa = {
    nome: 'Thiago',
    idade: 25,
    profissao: 'Desenvolvedor'
}
const {nome, idade} = pessoa
// Estamos criando novas constantes, usando como base as propriedades de um objeto

console.log(nome)
console.log(idade)

function saudacao({nome}){
    console.log('Olá,', nome)
}
saudacao(pessoa)

const frutas = ['Banana', 'Uva']

const [primeiraFruta, segundaFruta] = frutas 
console.log(primeiraFruta) // ESTOU PEGANDO APENAS A PRIMEIRA FRUTA (0- no array)