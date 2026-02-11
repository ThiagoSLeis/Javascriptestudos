// Destructuring em objetos

const pessoa = {
    nome: 'Thiago',
    idade: 25,
    email: 'thiagossaleis13@gmail.com'
}

const {nome, idade, email} = pessoa
console.log("Nome:", nome)
console.log("Idade:", idade)
console.log("Email:", email)

// Destructuring em arrays

const linguagens = ['Python', 'JavaScript', 'SQL']

const [ling1, ling2, ling3] = linguagens
console.log(ling1)
console.log(ling2)
console.log(ling3)