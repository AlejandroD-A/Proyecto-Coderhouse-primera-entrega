const cartPersis = require('../persistence/cart')
const productPersis= require('../persistence/product')

class CartController{
    constructor(){
    }
    async listar(req,res){
        try{
            const id = req.params.id

            if( !id ) return res.json({cart: await cartPersis.getAll() })
        
            const cartProduct =  await cartPersis.get(Number(id))
        
            if( cartProduct == undefined ) return res.json({error: 'No se encontro el articulo en el carrito'})
    
            return res.json({cartProduct: cartProduct})

        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
        
    }

    async agregar(req,res){
        try{
            const product = await productPersis.get(Number(req.params.id_producto))

            if( product == undefined || product == null ) return res.json({error: 'No existe ese producto a guardar'})
            
            const cartProduct = await cartPersis.add(product)
    
            if(cartProduct == null || cartProduct == undefined ) res.json({error: 'Ha ocurrido un error'})
    
            return res.json({producto : cartProduct})
    
        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
       
    }

    async borrar(req,res){
        try{
            const producto = await cartPersis.remove(Number(req.params.id))

            if(producto == undefined || producto == null ) return  res.json({error: 'No se encontro producto en carrito'})
        
            return res.json({message: 'Se ha eliminado el producto', producto: producto})

        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
       
    }
}

module.exports = new CartController()