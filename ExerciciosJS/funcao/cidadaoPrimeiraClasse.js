// Função em JS é first-class Object (Citezens)
// Higher-Ordem function

//Criar de forma literal
// Se voce nao retornar nada na função, ela retorna undefined
function fun1() { }



//Armazenar uma função em uma variavel

const fun2 = function () { }
console.log(fun2)



// Arnazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array)
//Chamando a função que esta dentro do array
console.log(array[0](2, 3))



// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'roupa'}

// Chamano a função que esta dentro do objeto
console.log(obj.falar())




//Pasar função como parametro
function run(fun) {
    fun()
}
//Criando função fun
run(function fun(){ console.log('Executando')})



// Um função pode retornar/conter uma função
function soma(a,b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(4,2)(4)

const cincoMais = soma(2, 3)   //Isso atribui uma função a constante cincoMais
cincoMais(4)   //Isso é doidera hehe




