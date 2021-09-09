const fruta = fruta => {
    switch(fruta) {
        case 'maça':
            return 'Nao vendemos frutas aqui'
        case 'kiwi':
            return 'Estamos com escacez de kiwi'
        case 'melancia':
            return 'Aqui está! São 3 reais o kg'
        default:
           return 'Erro'        
        
    }
}

console.log(fruta('mafdça'))


