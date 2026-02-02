// Queremos fazer uma repetição de 1 até 5

for(let contador = 1 ; contador <= 5; contador ++) {
    console.log("Número Atual :", contador)
}

/*
Como funciona essa estrutura?
A sintaxe é: for (inicialização; condição; atualização){Bloco de código}
no exemplo dado temos "contador = 1" como inicializaçao, "contador <= 5" como condição e contador++ como atualização
*/

// console log dos números pares entre 0 e 15

for (let numeros = 0; numeros <= 15; numeros ++){
    if (numeros % 2 == 0){
        console.log("O número:",numeros + " é par!")
    }
}

// E se o número fosse ímpar?

for (let numero = 0; numero <= 15; numero ++){
    if (numero % 2 == 0){
       continue
    }else{
         console.log("O número:",numero + " é ímpar !")
    }
}

// Maneira do professor resolver
for (let impar = 0; impar <= 15; impar++){
    if (impar % 2 > 0){
        console.log("O número:", impar + " é ímpar !")
    }
}

// Percorrer as letras de uma palavra
const palavra = 'Calor'

// palavra.lenght indica quantos caracteres uma string possui
// palavra [cont] - pega a letra na posição indicada

for(let cont = 0; cont <= palavra.length; cont++){
    console.log(palavra[cont])
}
