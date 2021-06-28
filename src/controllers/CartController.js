const apiCart = require('../api/cart')
const apiProduct= require('../api/product')

class CartController{
    constructor(){
    }
    async listar(req,res){
        try{
            const id = req.params.id

            if( !id ) return res.json({cart: await apiCart.getAll() })
        
            const cartProduct =  await apiCart.get(Number(id))
        
            if( cartProduct == undefined ) return res.json({error: 'No se encontro el articulo en el carrito'})
    
            return res.json({cartProduct: cartProduct})

        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
        
    }

    async agregar(req,res){
        try{
            const product = await apiProduct.get(Number(req.params.id_producto))

            if( product == undefined || product == null ) return res.json({error: 'No existe ese producto a guardar'})
            
            const cartProduct = await apiCart.add(product)
    
            if(cartProduct == null || cartProduct == undefined ) res.json({error: 'Ha ocurrido un error'})
    
            return res.json({producto : cartProduct})
    
        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
       
    }

    async borrar(req,res){
        try{
            const producto = await apiCart.remove(Number(req.params.id))

            if(producto == undefined || producto == null ) return  res.json({error: 'No se encontro producto en carrito'})
        
            return res.json({message: 'Se ha eliminado el producto', producto: producto})

        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
       
    }
}

module.exports = new CartController()