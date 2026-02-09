// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade

const nomes = [ {
    nome: 'Thiago',
    idade: 25
}, 
{
    nome: 'Melissa',
    idade: 19
}, 
{
    nome: 'Maya',
    idade: 3
}]
// Filtrando maiores de idade
//MINHA RESOLUÇÃO
nomes.forEach((valor) => {
    if (valor['idade'] >= 18){
        console.log(valor['nome'])
    }
})
// RESOLUÇÃO PROPOSTA
for( let pessoas of nomes){
    if (pessoas.idade >= 18){
        console.log(`${pessoas.nome} é maior de idade.`)
    }
}

