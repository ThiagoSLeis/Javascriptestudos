// Como faço para trabalhar com datas no JS 
const agora = new Date()
// Quando usamos new Date() o JS constrói um objeto de data
// Entrega um formato de data ISO 8601 (data em formato de string)
console.log(typeof agora) // OBJECT
console.log(agora)

// Pegando apenas o ano
console.log("Ano: ", agora.getFullYear()) // Sempre lembrar de executar a função

// Mês vai de 0 a 11 (0 = janeiro)
console.log("Mês: ", agora.getMonth()) // Retorna mês 1, no caso fevereiro

// Dia
console.log("Dia do mês: ", agora.getDate())
// OBS -> Ao digitar o ponto, aparece a uma lista de funções a serem executadas.

// Quero uma data específica
const nascimento = new Date('2000-08-11T03:00:00.000Z')
console.log(nascimento)

// IMPRIMIR DATAS EM FORMATOS ESPECÍFICOS
console.log('DATA FORMATADA (BR):', nascimento.toLocaleDateString('pt-BR'))
console.log('DATA FORMATADA (USA):', nascimento.toLocaleDateString('en-US'))