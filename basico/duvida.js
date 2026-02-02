/* 
No JavaScript &&(and) e ||(or), NÃO necessariamente retornam true ou false
ele retornam um dos operandos
*/
// Exemplo AND e OR

const exemploAnd = true && 'Thiago' // Retorna Thiago
const exemploAndDois = false && 'Thiago' // Retorna False
console.log(exemploAnd, typeof exemploAnd)
console.log(exemploAndDois, typeof exemploAndDois)
// Retorna o primeiro valor falsy ou o último valor, se tudo for truthy

const exemploOr = false || "Thiago" // Retorna Thiago
const exemploOrDois = true || "Thiago" // Retorna True
console.log(exemploOr, typeof exemploOr)
console.log(exemploOr, typeof exemploOrDois)
// Retorna o primeiro valor truthy

// Exemplo com NOT

const exemploNot = !"Thiago" //false
const exemploNotDois = !0 //True
// Retorna sempre um valor booleano sem exceção

let testeStringVazia = true && "" && true // No primeiro falsy ele retorna falsy, no caso daqui foi a string vazia
console.log(testeStringVazia, "Tem algo aqui")

let testeNumeroZero = "oi" && 0 && true // Retorna o primeiro falsy, no caso o número 0
console.log(testeNumeroZero)

// Resumo
/*
No operador AND &&, todos os valores precisam ser true para que o resultado seja true, se qualquer valor for false, O RESULTADO SERÁ FALSE!
No operador OR ||, basta que um dos valores seja true para que o resultado seja true.
No operador NOT, o valor lógico é invertido, true vira false, e false vira true.
*/ 