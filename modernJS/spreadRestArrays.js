const frutas = ['Maçã', 'Banana', 'Goiaba']

const maisFrutas = ['Uva', 'Morango', 'Kiwi']

const clone = [...frutas]

frutas.push('Pitanga')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)

const todasAsFrutas = [...frutas, ...maisFrutas]
console.log(todasAsFrutas)

// ACESSAR ALGO DENTRO DO ARRAY.
const [frutaUm, frutaDois, ...restante] = todasAsFrutas

console.log(frutaUm)
console.log(frutaDois)
console.log(restante)