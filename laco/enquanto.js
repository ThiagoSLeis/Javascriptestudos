// Queremos contar de 1 até 10
let contador = 1


// Primeiro o while verifica, se a condição for false ele nunca vai executar.
while(contador <= 10){
    console.log(contador)
    contador ++
}

// No caso do (do while), ele faz e depois verifica.(executa ao menos uma vez, mesmo que seja false)
let numero = 1

do {
    console.log('Número Atual', numero)
    numero ++
} while ( numero <= 10)

// imprimir números pares, numeros impares e as letras de uma palavra

let numeroPar = 0

while(numeroPar <= 20){
    numeroPar++
    if (numeroPar% 2 === 0){
        console.log("O número: ", numeroPar,"É par!")
    }
}

let numeroImpar = 0
    do{
        if (numeroImpar % 2 !== 0){
            console.log("Este número é impar: ",numeroImpar)
        }
        numeroImpar ++
    } while (numeroImpar <=20)

// Exemplo para fugir do undefined de forma segura

const texto = "Condicionador"

for( const letra of texto){
    console.log(letra)
}