const nums = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]

for (x in nums) {
    if (x == 5) {
    break
    }
    console.log(`indice ${x} = ${nums[x]}`)
}
// O break nao age no If, no caso esta agindo no For, ele age em for, while e switch, então ele vai agir no bloco
// mais perto dele que for de algum desses tipos
console.log("------------------------------------------------")
console.log("________________________________________________")




// continue interrompe a repetição atual e pula para a proxima

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`indice ${y} = ${nums[y]}`)
}

console.log("------------------------------------------------")
console.log("________________________________________________")


// externo é um nome para o for, nesse caso nao é usado
// se eu colocar break externo, ao inves de interno, ele para toda a execução, pois para o for mais externo
externo: 
for (a in nums) {
    interno:
    for (b in nums) {
        if( a == 2 && b == 3) {
            break interno
        }
        console.log(`Par = ${a}, ${b}`)
    }
}


//Nesse naso ele interrompeu a execução do for interno qundo a = 2 and b = 3, pulou para o for externo novamente
//e deu continuidade ao ciclo

//Nao usar essa porra de codigo o cara do curso falou