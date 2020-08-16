function encontreUm5(numeros = [1, 2, 3, 4, 5]){
    do{
        console.log('Encontramos um 5!')
        break
    }while (numeros.includes(5))
}
encontreUm5()