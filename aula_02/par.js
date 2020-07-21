const numeros = [1, 2, 3, 4, 5, 6]

function ePar(numeros) {
    numeros.forEach((numero) => {
        if (numero % 2 == 0){
            console.log('O número ' + numero + ' é par.')
        }else {
            console.log('O número ' + numero + ' não é par.')
        }
    })
}

ePar(numeros)