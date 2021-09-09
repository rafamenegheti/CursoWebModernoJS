const calculadora = (num1, operador, num2) => {
    switch(operador){
        case '+':
            console.log(num1 + num2)
            break
        case '-':
            console.log(num1 - num2)
            break
        case '*':
            console.log(num1 * num2)
            break
        case '/':
            console.log(num1 / num2)   
            break
        default:
            console.log('Operador nao identificado')     

    }
}

calculadora(3, '-', 2)