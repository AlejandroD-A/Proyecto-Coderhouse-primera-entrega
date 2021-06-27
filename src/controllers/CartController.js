const apiCart = require('../api/cart')
const apiProduct= require('../api/product')

class CartController{
    constructor(){

    }

    listar(req,res,next){
        const id = req.params.id

        if( !id ) return res.json({cart: apiCart.getAll() })
    
        const cartProduct = apiCart.get(Number(id))
    
        if( cartProduct == undefined ) {
           return res.json({error: 'No se encontro el articulo en el carrito'})
        } 
    
        return  res.json({cartProduct: cartProduct})
    }

    agregar(req,res){
        const product = apiProduct.get(Number(req.params.id_producto))

        if( product == undefined || product == null ) return res.json({error: 'No existe ese producto a guardar'})
        
        const cartProduct = apiCart.add(product)

        if(cartProduct == null || cartProduct == undefined ) res.json({error: 'Ha ocurrido un error'})

        return res.json({producto : cartProduct})

    }

    borrar(req,res){
        const producto = apiCart.remove(Number(req.params.id))

        if(producto == undefined || producto == null ) res.json({error: 'No se encontro producto en carrito'})
    
        res.json({message: 'Se ha eliminado el producto', producto: producto})
    }
}

module.exports = new CartController()