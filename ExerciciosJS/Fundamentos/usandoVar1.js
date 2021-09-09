{
  {
    {
      {
        var sera = "sera";
      }
    }
  }
}

console.log(sera) //Var é printada fora do bloco que foi definida


function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local) //Nao é possivel acessar uma varivel criada em uma função fora da função

