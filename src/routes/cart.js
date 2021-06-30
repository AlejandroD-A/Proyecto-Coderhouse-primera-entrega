const express = require('express')
const router  = express.Router()

const CartCtrl = require('../controllers/CartController')

router.get('/listar/:id?',CartCtrl.listar)
router.post('/agregar/:id_producto',CartCtrl.agregar)
router.delete('/borrar/:id',CartCtrl.borrar)


module.exports = router