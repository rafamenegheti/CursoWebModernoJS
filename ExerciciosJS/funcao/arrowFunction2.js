function Pessoa() {
    this.idade = 0
    setInterval(() => {                //Arrow function
        this.idade++
        console.log(this.idade)
    }, 1000)
}

//Nesse caso, como é chamada uma ArrowFunction ao inves de uma function normal, o this funciona como esperado
//Quando o this é chamado dentro de uma arrowFunction, o this nao cai para o escopo global, fica dentro do escopo
//de onde foi criada

new Pessoa 
