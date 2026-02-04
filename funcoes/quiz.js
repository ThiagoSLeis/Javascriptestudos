
// Passo um, importar readline
const { error } = require('console')
const readline = require('readline')

// Passo dois, criar interface
const rl = readline.createInterface({
    input: process.stdin, // Indica que a entrada é o teclado
    output: process.stdout // Indica que a saída é o terminal
})
let acertos = 0
// Passo três, perguntar ao usuário
rl.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n>', (resposta1) => {
    console.log("você disse: ", resposta1)
    if (resposta1 === 'b' || resposta1 === 'function'){
        console.log("Você acertou a primeira questão!")
        acertos ++
    } else{
        console.log("Você errou a primeira questão!")
    }
rl.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar()\n(b) repeat\n(c) for\n>', (resposta2) =>{
    console.log("você disse: ", resposta2)
    if (resposta2 === 'c' || resposta2 === 'for'){
        console.log("Você acertou a a segunda questão!")
        acertos ++
    } else{
        console.log("Você errou a segunda questão!")
    }
rl.question('3) Qual valor considerado "falsy" em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n>', (resposta3)=>{
    if (resposta3 === "b" || resposta3 === '0'){
        console.log("Você acertou a terceira questão!")
        acertos ++
    }else{
        console.log("Você errou a terceira questão!")
    }
    rl.close()

    // Bloco de acertos e erros
    if (acertos === 0){
        console.log("Continue praticando!")
    }else if(acertos === 1){
        console.log("Bom, mas dá pra melhorar!")
    }else if(acertos === 2){
        console.log("Muito bom! Você está quase lá!")
    }else{
        console.log("Ótimo, acertou todas!")
    }
}) // Fecha a terceira pergunta (pois depende da segunda)
}) // Fecha a segunda pergunta, pois depende da primeira
}) // fecha a primeira pergunta do bloco principal
