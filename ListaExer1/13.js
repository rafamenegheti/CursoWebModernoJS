function dia(dia){
    let menino = ''
    switch (dia){
        case 1:
            menino = 'nao util'
            break
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
            menino = 'util' 
            break
        case 7:
            menino = 'nao util'
        break
        default: menino = 'invalido'                                         
    }
    console.log(menino)
}

dia(5)

