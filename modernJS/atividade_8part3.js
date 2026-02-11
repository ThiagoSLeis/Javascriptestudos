// Objeto com função construtora
function Livro(titulo, autor){
    this.titulo = titulo,
    this.autor = autor
    this.descrever = function(){
        return `O livro ${this.titulo} foi escrito por ${this.autor}`
    }
}

const livroUm = new Livro("Dom casmurro", "Machado de Assis")
const livroDois = new Livro("1984", "George Orwell")
console.log(livroUm)
console.log(livroDois)
console.log(livroDois.descrever())
// Método no objeto