// Objeto com método
const usuario = {
    nome: "Thiago",
    saudacao: function(){
        console.log("Olá, eu sou " + usuario.nome)
    }
}
usuario.saudacao() 

// Listando propriedade com for in

const pessoa = {
    nome: "Melissa",
    idade: 19
}

for(let p in pessoa){
    console.log(`chave: ${p}, valor: ${pessoa[p]}`)
}

// Calculo de compra 
const produto = {
    preco: 25,
    quantidade: 4
}

const valorTotal = produto.preco * produto.quantidade
console.log(valorTotal)