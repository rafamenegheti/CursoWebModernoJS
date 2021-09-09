const imprimirResultado = function(nota) { 
    if(nota >= 7) {
        console.log('Aprovado!')
    }
    else{
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(6.9)
imprimirResultado('Epa!')  // Por Js ser fracamente tipada ele aceita isso, nao da erro mas cai no else nesse caso, tomar cuidado


