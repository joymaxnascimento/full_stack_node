function  processar(listaSites, callback) {
    return listaSites.map(function (item) {
        return callback(item)
    })
}

function adicionarHttp(url){
    return 'http://' + url
}

lista = ['algum', 'coisa']

console.log(processar(lista, adicionarHttp))