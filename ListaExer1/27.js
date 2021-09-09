function altura(altura1, taxaPorAno1, altura2, taxaPorAno2) {
    

    if (altura2 > altura1) {
        let temp = altura1
        altura1 = altura2
        altura2 = temp
        temp = taxaPorAno1
        taxaPorAno1 = taxaPorAno2
        taxaPorAno2 = temp

    }

    console.log(altura1, taxaPorAno1)


    let anos = 0

    while (altura1 > altura2) {
        anos++
        altura1 = altura1 + taxaPorAno1
        altura2 = altura2 + taxaPorAno2
        if(anos > 98){
            break
        }
    }
    

    anos < 99 ? console.log(`${anos} anos para passar`) : console.log('morreu')


}



altura(170, 1, 180, 0.5)


