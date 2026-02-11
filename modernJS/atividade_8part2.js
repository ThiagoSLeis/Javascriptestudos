// Rest Operator em função

function somarTudo(...numeros){
    let soma = 0
    for (let i =0; i<numeros.length; i++){
        soma += numeros[i]
    }
    return soma
}
console.log(somarTudo(1,2,3,4))

// Spread operator com arrays

const frutasUm = ['Uva', 'Banana']
const frutasDois = ['Abacate', 'Maçã']

const somaFrutas = [...frutasDois, ...frutasUm]
console.log(somaFrutas)

// Spread com objetos
const pessoaNome = {
    nome: 'Thiago'
}
const pessoaIdade = {
    idade: 25
}

const perfil = {...pessoaNome, ...pessoaIdade}
console.log(perfil)

function saudacao(nome){
    if(nome === undefined){
        console.log("Olá visitante")
    }else{
        console.log("Olá, ", nome)
        
    }
}

saudacao()

/* 
FORMA DO PROFESSOR
function saudacao(nome = "Visitante"){
    console.log(`Olá, ${nome}!`)
}
saudacao() // Olá, visitante!
saudacao('Thiago') // Olá, Thiago!
*/ 

// Trabalhando com datas

const hoje = new Date()
console.log(hoje.toLocaleDateString('pt-BR'))