const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO


const falarDePessoa = falar.bind(pessoa)  //passando com o bind, e colcoando o parametro pessoa, agora sim
//a variavel falarDePessoa vai ficar valendo "pessoa.falar()"
falarDePessoa()