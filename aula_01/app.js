// OK 1) Preciso armazenar todos os animais da minha clínica 
// OK 2) Preciso armazenar todos os sintomas que os animais tem
// OK 3) Preciso falar quando um animal foi tratado
let animais = []

function cadastrarAnimal(nomeDoAnimal, especie, sintomas) {
    let animal = {
        nome: nomeDoAnimal,
        especie: especie,
        sintomas: sintomas,
        tratado: false,
        valorDeTratamento: 0,
        foiPago: false,
        remedio: []
    }

    animais.push(animal)
}

const acharAnimalPorEspecie = function(especie) {
    for(let i=0;i<animais.length;i++) {
        let animal = animais[i]
        if(animal.especie == especie) {
            console.log('Nome: ' + animal.nome + ' | Espécie: ' + animal.especie + ' | Sintomas: ' + animal.sintomas.join(', ') + ' | Tratado: ' + (animal.tratado ? 'Foi tratado' : 'Não foi tratado'))
        }
    }
}

function informarQueAnimalFoiTratado(nome) {
    const indexDoAnimal = acharAnimal(nome)
    animais[indexDoAnimal].tratado = true
}

function adicionarValorDoTratamento(nome, valor){
    const indexDoAnimal = acharAnimal(nome)
    animais[indexDoAnimal].valorDeTratamento += valor
}

function acharAnimal(valor, propriedade){
    for (let i = 0; i < animais.length; i++){
        if (animais[i][propriedade] === valor){
            return i
        }else {
            return null
        }
    }
}

function cadastrarAnimalParaAdocao(nomeDoAnimal, especie, castrado){
    let animal = {

    }
}

cadastrarAnimal('Toto', 'gato', ['tontura', 'vômito', 'febre'])
cadastrarAnimal('Belinha', 'cachorro', ['tontura', 'vômito', 'febre'])
cadastrarAnimal('Loro', 'papagaio', ['febre'])
acharAnimalPorEspecie('cachorro')
informarQueAnimalFoiTratado('Belinha')

adicionarValorDoTratamento('Belinha', 2999)
adicionarValorDoTratamento('Belinha', 1)
console.log(animais)