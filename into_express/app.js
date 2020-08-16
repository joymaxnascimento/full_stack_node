const express = require('express')

const app = express()

//rota principal
app.get('/', (req, res) => res.send('Olá, mundo!'))

//rota contatos
app.get('/contatos', (req, res) => res.send('Página de contatos!'))

//rota parametrizada
app.get('/produtos/:id', (req, res) => {
    let{id} = req.params
    console.log('Você digitou o produto com id: ', id * 500)
})

//servidor
app.listen(3000,() => console.log('Meu primeiro servidor Express!'))