let num1 = 1
let num2 = 2

num1++  //Acrescenta uma unidade ao valor da variavel
console.log(num1)
--num1 //Subtrai uma unidade ao valor da unidade
console.log(num1)

//tanto o operador antes da variavel quanto depois funciona,
//a difença é que o operador antes da variavel tem "preferencia"
//Assistir a aula de unarios para entender melhor

console.log(++num1 === num2--)  //Isso é true pois o ++ é contabilizado antes da comparação
//por estar antes da variavel, porem o -- não, pois esta depois da varriavel, logos os dois ficam
//valendo 2
console.log(num1 === num2)

