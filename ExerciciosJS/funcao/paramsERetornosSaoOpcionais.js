function area(largura, altura) {
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }
    else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 487))  //Parametros passos a mais sao ignorados
console.log(area(5, 5)) //Imprimiu undefined no console pq chamei dentro do console. sendo que n tem return nenhum

