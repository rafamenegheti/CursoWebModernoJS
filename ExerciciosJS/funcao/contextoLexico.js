const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

minhaFuncao()

function exec() {
    const valor = 'Local' 
    minhaFuncao()  //imprimi
    console.log(valor)   //imprimi "Local"
}

exec()