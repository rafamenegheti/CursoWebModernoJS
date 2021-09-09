console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'        //Essas duas linhas sao equivalentes
//obj1['nome'] = 'Bola2'  //Com essa notação voce consegue acesae um objeto a partir de uma string

console.log(obj1.nome)


function Obj(nome) { 
    this.nome = nome 
    this.exec = function(){
        console.log('Exec...' + nome)
    }
}


const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa') 
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
obj2.exec()

