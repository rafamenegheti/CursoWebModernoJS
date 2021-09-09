const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}


//Chamando a função anonima na posição 2 e 8
funcs[2]()
funcs[8]()



