function naoPareDeContarImparesAte(numero){
    let numerosimpares = 0
    for(i = 0; i <= numero; i++){       
        if(i % 2 != 0){
            numerosimpares++
        }
    }
    return numerosimpares
}

console.log(naoPareDeContarImparesAte(5))