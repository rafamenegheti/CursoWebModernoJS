function calculaNota(codigo, num1, num2, num3){

    let notas = []
    notas.push(num1, num2, num3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let media = ((notas[0]*4) + (notas[1]*3) + (notas[2]*3)) / 10

    console.log(`O aluno de codigo ${codigo} teve media igual a ${media} e foi ${media >= 5? 'APROVADO' : 'REPROVADO'}`)
}

calculaNota(123, 5,3,7)