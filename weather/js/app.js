const express = require('express')
const app = express()
const morgan = require('morgan')

// const url = 'http://api.weatherstack.com/current?access_key=1e6d8d82891cfcf6c36d345a49067c35&query=Chiapas&lenguaje=es'

// Setting
const port = process.env.PORT || 3000
app.set('json spaces', 2)

// middlewares
app.use(morgan('dev'))
app.use(express.json())

// Router
app.get('/api/weather', (req, res) => {
    // fetch(url).then(response => response.json().then(data => console.log(data)))
    res.json({
        "Ciudad": `${req.query.search}`
    })
})

// Inicialización del servidor
app.listen(port, () => {
    console.log('Servidor en puerto ' + port)
})