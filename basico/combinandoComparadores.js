const idade = 18
const maiorIdade = idade >= 18
const possuiCNH = true

const podeDirigir =  maiorIdade && possuiCNH // && é o AND do JavaScript
console.log("Pode dirigir? ", podeDirigir)

const podeViajarSozinha = maiorIdade || possuiCNH // || é o OR do JavaScript
console.log("Pode viajar sozinha? ", podeViajarSozinha)

const precisaDeAcompanhante = !maiorIdade // '!' é o AND em JavaScript. Inverte o valor, se é true vira false e o contrário.
console.log("Precisa de acompanhante? ", precisaDeAcompanhante)

// AND &&
// OR ||
// NOT !
// AND, OR e NOT sempre retorna um valor booleano
// Quando chegar em casa entender como funciona o bool de forma exata, string vazia e etc.
// PARA SABER MAIS: A TABELA DA VERDADE