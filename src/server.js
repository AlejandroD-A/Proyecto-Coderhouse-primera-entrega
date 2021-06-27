const express = require ('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

//Routes
app.use('/api/productos',require('./routes/products'))
app.use('/api/carrito',require('./routes/cart'))

// Middleware para manejar errores
app.use((error, req, res, next) => {
    return res.status(error.code || 500).json({ error : error.message })
  })

const PORT = 8080
app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`))


app.on('error',err => console.log(err))