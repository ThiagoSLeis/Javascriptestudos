// Formas diferentes de criar váriaveis
//1- Variável Global = Pode ser atribuida, recriada e modificada em qualquer parte do script (normalmente, não se escreve assim.)
//2- var
//3- let
//4 - const valor imutável
var idade = 36
var dataAniversario = "8 de agosto"

let idadeAtual = 36
let dataAniversarioNova = "11 de agosto"

const minhaIdade = 28
console.log("Minha idade atual é ", minhaIdade)

minhaIdade = 29 // Aqui vai apresentar um erro, pois não se pode alterar valor de constante