function Carro(velocidadeMaxima = 200, delta = 5) {   //valores padrões
    //Atributo privado
    let velocidadeAtual = 0

    //Metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }

    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)

ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)  // Carro é uma função
console.log(typeof ferrari)   //ferrari é um objeto

