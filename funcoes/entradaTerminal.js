// O node já tem uma forma de interagir pelo terminal e capturar o que o usuário digitou (readline(lib) = Ler a linha)
const readline = require('readline') // Quando queremos importar determinada funcionalidade usamos REQUIRE

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Qual é o seu nome? ", (nome) => {
    console.log("Olá,",nome)
    console.log("Seja bem-vindo")

    leitor.close()
})