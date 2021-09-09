const [a] = [10]
console.log(a)

const [n1, ,n3, , n5, n6 = 0] = [10, 7, 9, 8,]
console.log(n1, n3, n5, n6) 

//O de cima é a mesma coisa que esse:
const b = [10, 7, 9, 8,]
const [num1, ,num3, , num5, num6 = 0] = b
console.log(num1, num3, num5, num6)

//=====================================

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
