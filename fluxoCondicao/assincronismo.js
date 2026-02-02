/*
O assincronismo é um dos pilares que permite ao JavaScript executar operações SEM TRAVAR A EXECUÇÃO DO CÓDIGO.
Isso possibilita que tarefas de longa duração, como requisiçoes de rede ou operações de leitura e escrita, sejam
realizadas em SEGUNDO PLANO, garantindo que a aplicação continue responsiva
*/

/*
Event Loop - Quando uma operação é assíncrona é iniciada, ela é delegada para a API do ambiente(Navegador ou node.js) e, após ser concluída
sua CALLBACK é enviada para uma pilha de tarefas.
O Event Loop monitora essa fila e insere essas tarefas na pilha de execução quando esta estiver disponível.
*/

console.log('Início');

setTimeout(() => {
  console.log('Tarefa assíncrona concluída');
}, 1000);

console.log('Fim');

// Promisses, Callback, Assync e Await
// Usando Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dados obtidos');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Usando Async/Await
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();