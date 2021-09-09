function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(
    function(){
        self.idade++
        console.log(self.idade)
        console.log(self)
    }/*.bind(this)*/, 1000)
}
//Caso eu nao use o bind, dentro da funcao setInterval ele nao achara o this, pois nao existe o nenhum objeto nessa função,
//É necessario entao usar o bind, o bind, como esta fora da função setInterval, leva o this como a função Pessoa
// Tambem posso usar essa tecnica do self

new Pessoa 

