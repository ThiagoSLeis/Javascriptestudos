// if e else sintaxe

const idade = 19

if (idade >= 18){
    console.log("É maior de idade")
}
else{
    console.log("É menor de idade")
}

// entre 9 e 10 : excelente
// entre 7 e 8 : bom
// entre 4 e 6: regular
// entre 0 e 4: ruim

let nota = 10

if (nota >= 9 && nota <= 10) {
    console.log("Excelente")
} else if (nota >=7 && nota <=8){
    console.log("Bom")
} else if (nota >= 4 && nota <=6){
    console.log("Regular")
} else{
    console.log("Ruim")
}