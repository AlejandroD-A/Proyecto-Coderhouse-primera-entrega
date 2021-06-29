const express = require('express')
const router = express.Router()
const mdwCheckAdmin = require('../middlewares/checkAdmin')
const productCtrl = require('../controllers/ProductController')

router.get('/listar/:id?', productCtrl.listar )
router.post('/agregar', mdwCheckAdmin, productCtrl.agregar )
router.put('/actualizar/:id', mdwCheckAdmin,productCtrl.actualizar )
router.delete('/borrar/:id', mdwCheckAdmin, productCtrl.borrar)

module.exports = router