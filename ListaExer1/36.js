/*36) ​ Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/




function func1(vetor, num) {
    for (i in vetor) {
        vetor[i] = vetor[i] * num
    }
    console.log(vetor)
}

func1([1, 2, 3], 2)




function func2(vetor, num) {
    if (vetor.length > 5) {
        for (i in vetor) {
            vetor[i] = vetor[i] * num
        }
        console.log(vetor)
    }

}

func2([5, 1, 4, 7, 2, 7], 2)
