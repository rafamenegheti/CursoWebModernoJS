function triangulo (l1, l2, l3) {
    let tipo = ''
    if(l1 == l2 && l2 == l3) {
            tipo = 'Equilatero'
        } else if (l1 == l2 || l2 == l3 || l3 == l1){
            tipo = 'Isoseles'
        } else {
            tipo = 'Escaleno'
        }
        console.log(tipo)
    } 


triangulo(1, 1, 1)
triangulo(2, 1, 1)
triangulo(2, 1, 3)


