function infoCamisa ({ numeroVestir, preco}) {
    return `A camisa é de pontuação ${numeroVestir} e custa R$ ${preco.toFixed(2)}.`
}

const camisa = {
    numeroVestir: 'GG',
    preco: 79.90
}
console.log(infoCamisa(camisa))