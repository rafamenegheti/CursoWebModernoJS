//Par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}


//Obejetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123, 
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereco.logradouro)
console.log(cliente)


