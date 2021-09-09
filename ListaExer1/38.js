function inicioFim(inicio = 0, fim = 100) {

   if(fim < inicio){
       [inicio, fim] = [fim, inicio]
   }

    for (let i = inicio; i < fim; i++) {
        if ((i % 2) !== 0) console.log(i)
    }
}


inicioFim(548, 10)
