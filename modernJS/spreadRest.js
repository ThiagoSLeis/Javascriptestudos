let pessoa = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

// Queremos clonar o objeto
// const camila2 = pessoa // asim não clona (os dois apontam para o mesmo espaço na memoria)
const camila2 = {...pessoa} // spread operator

camila2.idade = 30
console.log(pessoa) // pessoa ainda continua com 29 anos
console.log(camila2) // Atualizou para 30 anos agora

// Queremos atualizar todos os dados menos um.

pessoa = {
    ...camila2, // Copiando todas as propriedades da camila2
    profissao: 'Desenvolvedora Sênior', // Sobreescrevendo a propriedade "profissao"
    possuiCNH: true // Adicionando uma propriedade que não existia nem em pessoa nem em camila2
}

console.log(pessoa)

// Quero separar a propriedade nome em uma varíavel diferente e o resto fica igual
const {nome, ...resto}  = pessoa // SEPARAMOS O NOME DO RESTANTE DE TODAS AS OUTRAS PROPRIEDADES
console.log(nome, "O NOME AQUI")
console.log(resto)