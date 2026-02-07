const media = [10, 10, 10, 10]
let mediaSomada = 0

for (let i = 0; i < media.length; i++){
    console.log(media[i])
    mediaSomada += media[i]
}
if ((mediaSomada / media.length) >= 7){
    console.log("APROVADO")
} else{
    console.log("REPROVADO")
}

// Faltou declarar var com let, calcular media com lenght e definir variavel de contagem com 0 ao invés de null
// Crie mensagens personalizadas com forEach

const nomes = ["Thiago", "Samira"]
nomes.forEach((valor, indice) => {
    console.log(valor, indice)
    console.log(`Olá, ${nomes[indice]}`) // aqui eu so colocaria o valor pq ele já faz isso
})

// Descontos com map

const precos = [100.00 , 50.00, 20.00]

const precoDesconto = precos.map((precos)=>{
    return precos - (precos * 0.10)
})
console.log(precoDesconto)

// Filtrar valores altos

const idades = [18, 50, 12, 10, 35, 99, 25]

const maiorIdade = idades.filter((idade) => {
    if (idade >= 18){
        return idade
    }
})
console.log(maiorIdade)