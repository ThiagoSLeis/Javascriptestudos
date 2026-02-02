function saudacao(nome){ // Nome é o parametro da função
    console.log('olá,',nome)
}
saudacao("Thiago") // "Thiago" é o argumento passado pra função

function dobroDoNumero(numero){
    return numero * 2 // Retorna o valor da função reservada
}
console.log(dobroDoNumero(2)) // 4
console.log(dobroDoNumero(5)) // 10
const numeroTresDobrado = dobroDoNumero(3)
console.log("O número 3 dobrado é igual a:",numeroTresDobrado)
