const express = require('express')
const router = express.Router()
const mdwCheckAdmin = require('../middlewares/checkAdmin')
const product = require('../api/product')

router.get('/listar/:id?',(req,res)=>{

    const id = req.params.id
    if(id){
        const producto = product.get(Number(id))

        if(producto == undefined)return  res.status(404).json({message: 'No se encontro el producto'})
        return res.json({producto: producto})
    }

    return res.json({productos : product.getAll() })
})
router.post('/agregar',mdwCheckAdmin,(req,res)=>{
    const data = req.body

    res.json({producto: product.create(data)})
})
router.put('/actualizar/:id',mdwCheckAdmin,(req,res)=>{
    const data = req.body
    const producto = product.update(Number(req.params.id),data)

    if( producto == undefined || producto == null ) res.status(404).json({error: 'No se encontro el producto'})

    res.json({producto: producto})
})
router.delete('/borrar/:id',mdwCheckAdmin,(req,res)=>{
    const producto = product.remove(Number(req.params.id))

    if( producto == undefined || producto == null ) res.status(404).json({error: 'No se encontro el producto'})

    res.json({producto: producto })
})

module.exports = router