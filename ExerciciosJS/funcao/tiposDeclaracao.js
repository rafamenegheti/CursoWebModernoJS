console.log(soma(3, 4))   //functona por conta do hoisting
console.log(sub(3, 4))   //function expression nao sofre hoisting

// function declaration,   hoisting

function soma(x, y) {
    return x + y
}

// function expression

const sub = function (x, y) {
    return x - y
}

// named function expression, a unica vantagem seria que o nome aparece em alguns casos na debugação

const mult = function mult(x, y) {
    return x + y
}


