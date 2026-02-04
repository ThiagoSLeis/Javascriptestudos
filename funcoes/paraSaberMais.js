/*
No JavaScript this é uma palavra-chave especial que se refere ao contexto onde uma função está sendo executada.
Porém seu valor pode mudar dependendo de como a função é invocada

Com funções tradicionais (criadas usando function), o valor de this é definido pela forma em que a função é chamada.
*/

function mostrarNome(){
    console.log(this.nome)
}
nome = 'Ana'
mostrarNome()
// Aqui o this referencia o escopo global porque chamamos a função diretamente.
// Isso pode gerar problemas quando usamos funções como callbacks (funções que são passadas para outras funções

// Antes das arrows functions, era muito comum o problema perder o contexto do this dentro de funções de callback.
// Isso acontecia muito em situações internas, como calbacks em temporizadores ou eventos:

function pessoa(nome){
    this.nome = nome

    setTimeout(function(){
        console.log(this.nome) //undefined
    }, 1000) 
}

new pessoa('Carlos') // resultado: Undefined

// Aqui o this dentro do setTimeout perdeu a referencia ao objeto criado por new Pessoa()

// Como lidávamos com isso antes das Arrow Functions
// O método .bind() podíamos fixar o contexto do this


function animal(nomeA){
    this.nomeA = nomeA

    setTimeout(function(){
        console.log(this.nomeA) //undefined
    }.bind(this),1000)
}

new animal('MACACO PRETO') // resultado: Undefined
/* A chegada das Arrows Functions
Arrow Functions não possuem seu próprio valor de this. em vez disso, elas capturam 
o this do contexto onde foram declaradas (lexical scoping)
*/

function humano(identidade){
    this.identidade = identidade

    setTimeout(() => {
        console.log(this.identidade) // Arrow function captura o this corretamente
    },1000)
}

new humano("Melissa") // Resultado : Melissa

/*
this: Refere-se ao contexto onde a função é chamada
Funções tradicionais: Possuem seu próprio valor de this, dependendo da forma como são chamadas
Arrow Functions: Não tem seu próprio this; Capturam o valor de this do contexto em que são declaradas
Antes das Arrows, usávamos .bind() para corrigir o problema com o this
*/