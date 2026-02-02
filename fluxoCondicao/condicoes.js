const nome = 'Thiago'

if (nome){
    console.log("Olá, ", nome)
} else {
    console.log('Ainda não sei o seu nome')
}
const idade = null // Ainda não tem valor, null

if (idade >= 18) {
    console.log('Maior de idade')
} else if (idade === null){
    console.log("Não foi informada idade alguma")
} else {
    console.log("Menor de idade")
}

/*
Truthy: Valores que, embora não sejam exatamente true, são interpretados como verdadeiros
Falsy: Valores que, embora não sejam exatamente false, são interpretados como falsos

Para Falsy: false, 0, "", null, undefined, NaN (Not a Number)
*/

let quantidade = 0
if(quantidade){
    console.log("Há itens!")
} else{
    console.log("Sem itens!")
}

/* 
Caso quiséssemos tratar o zero como um caso válido, representando 0 itens teríamos que explicar explícitamente
*/

let quantidadeValida = 0

if (quantidadeValida !== undefined && quantidadeValida !== null){
    console.log("Quantidade informada corretamente!")
} else{
    console.log("Quantidade inválida!")
}