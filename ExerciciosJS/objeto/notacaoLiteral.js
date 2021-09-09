const a = 1
const b = 2
const c = 3

const obj1 = { a, b, c}   //pode fazer assim



const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {}

obj3[nomeAtributo] = valorAtributo

console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo}

const obj5 = {
    funcao1: function() {

    },   //modo antigo
    funcao2(){

    }    //modo novo
}

console.log(obj5)