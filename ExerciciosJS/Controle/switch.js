const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7: 
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
        default:
            console.log('Nota invalida!!')    
    }
}

//Caso nao coloque o break, assim que ele entrar em um case, ele executara todos os de baixo independete
//se for true ou false, logo, sempre lembrar de colocar o break.
//No caso, do case: 10 pro case: 9 nao tem break justamente pq a saida desses dois resultados sao a mesma.
//o Default pode colcoar em qualquer posição, mas caso nao esteja no final, tem que colocar o Default

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)


