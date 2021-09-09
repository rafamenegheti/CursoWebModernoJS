
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    }
    else if(nota.entre(7, 8.9)){
        console.log('Aprovado!!')
    }
    else if (nota.entre(4, 6.99)){
        console.log('Recuperação!!')
    }
    else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    }
    else{
        console.log('Nota invalida!!')
    }
    console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)




//_--------------------___-----------___---------------------------//

//Esse é um tipo de função que voce deve chamar dessa forma, var.Função
//o 'this' se refere ao numero passado na função, que é pegado por meio do Number.prototype 

let numero = 5

Number.prototype.myMethod = function(number) {
    return this / 2;
  };

console.log(numero.myMethod())






