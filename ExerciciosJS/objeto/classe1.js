class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinaneiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancametos = []

    }
    addLancamentos(...lancamento) {
        lancamento.forEach(l => this.lancametos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancametos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -200)

const contas = new CicloFinaneiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
