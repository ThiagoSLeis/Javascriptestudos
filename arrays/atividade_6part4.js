/* 
10. Lista de tarefas
Crie dois arrays:

um array com nomes de tarefas
outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
Exiba a lista de tarefas pendentes no console.
*/
// A maneira de resolver esse exercício é relacionar as duas listas.
// Relacionar as duas via index.
// tarefa[0] -> Estudar -> concluidas[0] -> true
// Estudar aponta para o true (fez a tarefa)
// Se concluida[index] === false, a tarefa está pendente
// “Eu quero filtrar tarefas cujo valor em concluida[index] seja false”
const tarefas  = ["Estudar", "Comer", "Treinar"]
const concluidas = [true, false, true]

const tarefasPendentes = tarefas.filter((tarefa, index)=>{
    return concluidas[index] === false
})
console.log(tarefasPendentes)