let conceitos = []

function professor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] <= 4.9) {
            conceitos.push(`aluno: ${i+1}, conceito D`)
        } else if (vetor[i] > 4.9 && vetor[i] < 6.9) {
            conceitos.push(`aluno: ${i+1}, conceito C`)
        } else if (vetor[i] > 6.9 && vetor[i] < 8.9) {
            conceitos.push(`aluno: ${i+1}, conceito B`)
        } else if (vetor[i] > 8.9 && vetor[i] <= 10) {
            conceitos.push(`aluno: ${i+1}, conceito A`)
        }

    }
    console.log(conceitos)

}

professor([2, 6, 7, 9])

