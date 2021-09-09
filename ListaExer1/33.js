let vetorString = ['oi', 'bom', 'sim', 'legal']
let vetorDouble = [5.4, 2.8, 2.7, 9.5]
let vetorInt = [5, 2, 9, 7]

let novo = vetorString.concat(vetorDouble, vetorInt)
console.log(novo)


function concatenar(...args) {
    novo = []
    for (let i = 0; i < args.length; i++) {
        novo = novo.concat(args[i])
    }
    console.log(novo)
}


concatenar(vetorDouble, vetorString)