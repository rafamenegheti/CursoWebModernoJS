    function compras(t1, t2){
    const comprarSorvete = t1 || t2
    const comprarTV50 = t1 && t2
    //const comprarTV32 = !!(t1 ^ t2)    //bitwise xor
    const comprarTV32 = t1 != t2
    const manterSaudavel = !comprarSorvete //operador unário
    
    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(false,true))

const seila = false != false
console.log(seila)

console.log(true ^ false)