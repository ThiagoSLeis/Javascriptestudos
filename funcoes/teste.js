setTimeout(() => {
    console.log("Primeira mensagem")
}, 1000)
setTimeout(() => {
    console.log("Segunda mensagem")
}, 1000)
setTimeout(() => {
    console.log("Terceira mensagem") // Vai executar essa mensagem primeiro pois não defini timeout algum
})
setTimeout(() => {
    console.log("Quarta mensagem")
}, 0)