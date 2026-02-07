const { clearInterval } = require("node:timers")

function bomDia (nome){
    return "Bom dia, " + nome()
}
function pessoa() {
    return "Thiago"
}
const resultado = bomDia(pessoa)
console.log(resultado)

function saudacao(){
    console.log("E aí, beleza ?")
}

setTimeout(saudacao,2000)

setTimeout(()=> saudacao(), 3000
)

let contador = 0
const id = setInterval(() => {  // Definindo o ID
    contador++
    console.log("Tempo: ", contador)
    if (contador === 10){  
        clearInterval(id) // INFORMANDO O ID DEFINIDO PARA PARADA
    }
}, 1000)

// Um ponto super importante (READLINE SEMPRE VAI RETORNAR STRING)

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

