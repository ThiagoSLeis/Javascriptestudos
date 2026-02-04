const user = {
    nome: "Thiago",
    mostrarNome () {
        console.log(this.nome)
    }
}
user.mostrarNome()

/*
Funciona porque:
- Quem chama a função é o user
- logo, this === user
- FUNÇÃO CHAMADA ATRAVÉS DE UM OBJETO -> this APONTA PARA O OBJETO
*/

// ERRO CLÁSSICO:
// const usuario = {
//     login: "thiagossaleis13@gmail.com",
//     mostrarLogin(){
//         setTimeout(function(){
//             console.log(this.login)
//         }.bind(this),1000) // AQUI ESTOU "BINDANDO O THIS" a sitaxe é .bind(this) pra escolher onde referenciar
//     }
// }
// usuario.mostrarLogin()
// Poderia resolver com um .bind(). Se tira o bind aqui quebra o código e resulta undefined

const usuario = {
    login: "thiagossaleis13@gmail.com",
    mostrarLogin(){
        setTimeout(() => {
            console.log(this.login)
        },1000)
    }
}
usuario.mostrarLogin()

// Mesmo com o setTimeout resolve o problema do undefined pois:
/* 
ARROW FUNCTION NÃO CRIA THIS
ELE HERDA O THIS DO CONTEXTO EXTERNO

new pessoa()   ---   Objeto criado (this)
function()dentro de call back   ---   global (this)
() => {}   ---   herda do pai (this)
*/
