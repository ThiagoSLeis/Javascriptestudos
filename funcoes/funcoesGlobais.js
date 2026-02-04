// Executa um bloco de código depois de um determinado tempo
function sauda(nome){
    setTimeout(() => {
         console.log("Olá,",nome)
    }, 2000)
}
sauda("Thiago")

const soma = (a,b) => {return a + b}
console.log(soma(2,10)) // teste acidental. executa soma primeiro e depois executa sauda por causa do timeout

// Função exemplo do professor:

function saudacao(){
    console.log("E aí, beleza?")
}
setTimeout(saudacao, 1000) // depois de 1000 ms ou seja 1s

let contador = 0
const id = setInterval(() => {
    contador ++
    console.log('Tempo decorrido: ', contador)
    if(contador === 10){
        clearInterval(id)}
},1000)

