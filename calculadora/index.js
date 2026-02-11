// funciona apenas no commonjs: const readline = require('readline') // Quando queremos importar determinada funcionalidade usamos REQUIRE
import {createInterface} from 'readline'
import {soma, subtracao} from './operacoesMatematicas.js'


const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite o primeiro número:\n>', (numero1)=>{
    rl.question('Digite a operação:\n+: soma\n-:subtração\n>', (operacao)=>{
        rl.question('Digite o segundo número:\n>', (numero2)=>{

            const num1 = Number(numero1)
            const num2 = Number(numero2)

            let resultado = null

            if (operacao == '+'){
                resultado = soma(num1, num2)
            }else if(operacao == '-'){
                resultado = subtracao(num1,num2)
            }else{
                console.log('Operação inválida')
            }
            if (resultado != null){
                console.log("O resultado da operação é:", resultado)
            }

            rl.close()
        })
    })
})