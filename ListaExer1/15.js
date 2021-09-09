function carro(modelo){
    switch(modelo){
        case 'hatch':
        console.log('compra efetuada')
        break
        case 'sedan':
        console.log('Tem certeza que deseja um sedan?')
        break
        case 'motocicleta': 
        console.log('Tem certeza que deseja uma motocileta?')
        break
        case 'caminhonete':
        console.log('Tem certeza que deseja uma caminhonete?')
        break
        default:
        console.log('Não trabalhamos com esse modelo')
    }
}

carro('caminhonegte')

