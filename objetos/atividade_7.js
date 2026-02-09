// Criando um objeto pessoal
const thiago = {
    nome: "Thiago",
    idade: 25,
    profissao: 'Desenvolvedor backend'
}

// Acessando propriedades
console.log(thiago.nome) // usando .
const nomeThiago = 'nome'  // usando colchetes para acessar o valor da chave
console.log(thiago[nomeThiago])

// Atualizando valores
console.log("Antes de atuaizar: ", thiago)
thiago.idade = 26
console.log("Depois de atualizar: ", thiago)

// Adicionando uma nova propriedade

thiago.cidade = "São Luís"
console.log("Propriedade Cidade: ",thiago)

// Função com objeto
// Crie uma função que receba um objeto pessoa, contendo as propriedades nome, idade, profissão e cidade.
// A função deve retornar uma frase montada exibindo os dados da pessoa

function meusDados({nome, idade, profissao, cidade}){
    return `Meu nome é ${nome}, tenho ${idade} anos. Sou ${profissao} e moro em ${cidade}`
}
console.log(meusDados(thiago))