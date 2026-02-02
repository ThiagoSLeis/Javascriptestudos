// Exemplo básico de função baseado na matemática
/* 
f(x) = x + 2
f(2) = 2 + 2
*/

/*
Funções -  Bloco de código reutilizável.
    Ela recebe uma ou mais entradas, executa um processamento e pode devolver um resultado.
    ENTRADA ----> PROCESSAMENTO ----> SAÍDA
*/
function f(x){
    return x + 2;
}

console.log(f(2)) //4
console.log(f(4)) //6

// Usamos return para devolver um valor após a execução.
// Caso o return seja omitido a função retorna undefined por padrão