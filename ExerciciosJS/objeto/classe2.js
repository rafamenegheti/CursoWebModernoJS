class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }

}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)    //recebe o sobrenome do pai
        this.profissao = profissao
    }
    
}


class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho 
console.log(filho)