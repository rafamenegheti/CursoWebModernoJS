function doidao(valor) {
    const tipo = typeof valor
    if(tipo == 'boolean'){
        return !valor
    }else if(tipo == 'number'){
        return -valor
    }else{
        return "Esperado boolean ou number mais recebeu " + tipo
    }
}

console.log(doidao(-4))