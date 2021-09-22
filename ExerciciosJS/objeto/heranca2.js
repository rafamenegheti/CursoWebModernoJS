// Cadeia de prorotipos (prototype chain) 
Object.prototype.attr0 = 'Z'    // <--- exemplo louco, nao faça
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1)  //posso chamar um valor que nao foi definido no "filho"
console.log(pai.attr0)
console.log(avo.attr3)   //esse nao funciona hehe

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax} Km/h`
    }
}



const ferrari = {
    modelo: 'F40',
    velMax: 324  //shadowing
}



const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`   //super referencia o prototipo, no caso, o objeto carro
    }
}


Object.setPrototypeOf(ferrari, carro)  //modo diferente de definer relação de objetos
Object.setPrototypeOf(volvo, carro) 


volvo.acelerarMais(10)
volvo.acelerarMais(20)
console.log(volvo.status())
ferrari.acelerarMais(40)
console.log(ferrari.status())
console.log(volvo.velMax)  //pesou a velMax do pai (carro)

