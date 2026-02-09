/* 
Objeto = Uma estrutura que agrupa dados em formato de chave e valor
*/

let pessoa = { nome: 'Ana', idade: 25, temCarteira: true}
console.log(pessoa)
// Fez aniversário -> Aqui atualizamos a idade de 'Ana'
pessoa.idade = 26
console.log(pessoa)
console.log(pessoa.nome) // Estamos apenas acessando o valor dentro do objeto
pessoa.sobrenome = ('Radrany') // Estamos atribuindo uma nova chave e um novo valor
console.log(pessoa.nome, pessoa.sobrenome)

/* 
Agora eu consigo criar um objeto
ver o objeto criado
acessar algum componente do objeto
Alterar um componente existente 
Criar um componente novo
forma = {chave: 'valor'}
*/

// Criando outro objeto

const livro = {
    titulo: 'O Hobbit',
    paginas: 310
}
console.log(livro) // acessando meu objeto criado
livro.publicado = true // Criando um componente (publicado: true)
livro.idiomas = [
    'Inglês', 'Português', 'Espanhol'
]
console.log(livro.idiomas) // acessando idiomas
console.log('AQUI')
console.log(livro) // acessando meu objeto novamente após alterações
// USANDO O MÉTODO PUSH PARA ADICIONAR IDIOMA DENTRO DE IDIOMAS
livro.idiomas.push('Italiano') // O método push adiciona dentro de um objeto existente
livro.idiomas.push('Mandarim')
console.log(livro.idiomas)
// Podemos usar qualquer propriedade de arrays para o idioma 
// APAGANDO DADOS DO OBJETO
console.log("Livro antes: ", livro)
delete livro.paginas
console.log("Livro depois: ", livro)
console.log('autor do livro:', livro['autor'])

// Podemos também aninhar objetos (RETIREI O AUTOR LÁ EM CIMA)

const autor = {
    nome: 'J R R Tolkien',
    nacionalidade: 'Britânico',
    idade: 98
}
console.log (autor)
livro.autor = autor // Estou anexando um objeto ao meu objeto já existente
console.log(livro)

// AGORA PARA ACESSAR O NOMEDO AUTOR DO LIVRO
console.log(livro.autor.nome)
// O MESMO COM NACIONALIDADE
console.log(livro.autor.nacionalidade)