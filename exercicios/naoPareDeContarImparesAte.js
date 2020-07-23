function  naoPareDeContarImparesAte(numero){
    let numerosImpares = 0
    for(let i = 0; i <= numero; i++){
        if(i % 2 != 0){
            numerosImpares++
        }
    }
    return numerosImpares
}

console.log(naoPareDeContarImparesAte(7))