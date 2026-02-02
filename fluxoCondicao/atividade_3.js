// Verificação de idade para compra de bebida

let idade = 15

if (idade >=18) {
    console.log("Pode comprar bebida alcoólica!")
} else{
    console.log("Venda proibida para menores de 18 anos!")
}

// Saudação de acordo com a hora

let horaAtual = 19

if (horaAtual >= 6 && horaAtual <= 12){
    console.log("Bom dia")
} else if (horaAtual >= 13 && horaAtual <= 18){
    console.log("Boa tarde")
} else{
    console.log("Boa noite")
}

// Verificação de número positivo ou negativo

let numeroQualquer = -1

if (numeroQualquer >0){
    console.log("O número:",numeroQualquer + " é positivo")
} else if(numeroQualquer <0){
    console.log("O número:", numeroQualquer +" é negativo")
} else{
    console.log("O número é igual a 0")
}

// Número par ou impar com ternário

let numero = 43

numero % 2 ==0 ? console.log("O número é par") : console.log("O número é impar");

// Menu com swith-case

let opcao = 1
switch (opcao) {
    case 1:
        console.log('1 - "Cadastrar"')
        break
    case 2:
        console.log('2 - "Listar"')
        break
    case 3:
        console.log('3 - "Sair"')    
}

// Validação de campo obrigatória

let email = ""
if (email === ""){
    console.log("Preencha o campo de email")
} else{
    console.log("Email válido")
}

// Validação de senha segura 
// Não havia entendido a pergunta, a variável senha aqui seria completamente ilustrativa

let senha = ""
let senhaValida = true
if (senhaValida){
    console.log("Senha válida!")
} else{
    console.log("Senha muito curta!")
}

// Compra com saldo

let saldoDisponivel = null
let valorCompra = undefined

if (saldoDisponivel >= valorCompra){
    console.log("Compra aprovada!")
}else{
    console.log("Saldo indisponível")
}

// Validação de formulário completo

let nome = null
let emailDez = null
let idadeDez = null
let formularioValido = true

if (formularioValido){
    console.log("Formulário enviado com sucesso!")
} else{
    console.log("Por favor, preencha todos os campos corretamente")
}