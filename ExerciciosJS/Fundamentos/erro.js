function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem de erro'
    throw {
        warning: Error,
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }finally{
        console.log('final')  // o Finally sempre sera executado
    }
}

//Foi criado a função, porem la foi pasado "name", e aqui no objeto se chama "nome", vai dar um erro
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)


