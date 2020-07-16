//Cínica veterinária
let animais = [];


function cadastrarAnimal(nomeDoAnimal, especie, sintomas, tratado){
    let animal = {
        nome: nomeDoAnimal,
        especie: especie,
        sintomas: sintomas,
        tratado: tratado
    }
    animais.push(nomeDoAnimal)
}

const acharAnimalPorEspecie = function(especie){
    for(let i = 0; i< animais.length; i++){
        let animal = animais[i]
        if(animal.especie == especie){
            console.log('Nome: ' + animal.nome + ' | Sintomas: ' + ( animal.sintomas.join(', ') + '| Tratado: ' + animal.tratado ? 'Tratado' : 'Não tratado') )
        }
    }
}

function informarQueAnimalFoiTratado(nome){
    animais.forEach(function(animal){
        if(animal.nome == nome){
            animal.tratado = true
        }
    })
}

cadastrarAnimal('Totó', 'Cachorro', ['Tontura', 'Febre'], false)
cadastrarAnimal('Loro', 'Papagaio', ['Tontura', 'Febre'], true)
cadastrarAnimal('Cisco', 'Gato', ['Tontura', 'Febre'], false)
//console.log(animais)
//acharAnimalPorEspecie('Papagaio')
informarQueAnimalFoiTratado('Totó')
console.log(animais)