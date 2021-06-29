const express = require ('express')
require('dotenv').config()
const app = express()


app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

//Routes
app.use('/productos',require('./routes/products'))
app.use('/carrito',require('./routes/cart'))

// Middleware para manejar errores
app.use((error, req, res, next) => {
    return res.status(error.code || 500).json({ error : error })
  })

//Error de Ruta
app.use((req, res, next) => {
    res.status(404).json({
    status: 404,
    message: `No se encuentra la ruta ${req.originalUrl}`,
    error: 'Not Found'
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`))

app.on('error',err => console.log(err))