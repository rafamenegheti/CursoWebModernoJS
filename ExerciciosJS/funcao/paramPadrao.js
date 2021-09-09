// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1  // || é o operador ou, se 'a' for false, ele passa a valer 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(1), soma1(3))
console.log(soma1(1, 2, 3))
console.log(0, 0, 0) //0 conta como falso, logo ele passo pelo ou e vira 1


// estrategia 2, 3 e 4 para gerar valor padrao, so nao serve quando a variavel é criado dentro da função
// e eu queira te ela tenha um valor padrão

function soma2(a, b, c) {
    a = (a !== undefined ? a : 1)
    b = 1 in arguments ? b : 1  //Existe o segundo parametro passado na função? se sim b = b, se nao b = 1
    c = isNaN(c) ? 1 : c   // essa seria a melhor e mais segura dentre todas essas vistas, mas n é a melhor ainda

}


//valor padrao do es2015, aka melhor jeito

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

