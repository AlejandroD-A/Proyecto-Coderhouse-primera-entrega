const productPersis = require('../persistence/product')


class ProductController{
    constructor(){

    }

    async listar(req,res){
        try{
            const id = req.params.id
           
            if(id){
                const producto = await productPersis.get(Number(id))
                if(producto == undefined) return  res.status(404).json({error: 'No se encontro el producto'})
                return res.json({producto: producto})
            }
            const productos = await productPersis.getAll()
            return res.json({productos : productos })
    
        }catch(err){
            return res.json.status(500)({error: 'Ha ocurrido un error'})
        }
    }

    async agregar(req,res){
        const data = req.body
        res.json({ producto: await productPersis.create(data)})
    }

    async actualizar(req,res){
        try {
            const data = req.body
            const producto = await productPersis.update(Number(req.params.id),data)
            if( producto == undefined || producto == null ){
                return res.status(404).json({error: 'No se encontro el producto'})
            } 
            
            return res.json({producto: producto})
        }catch(err){
            return res.json.status(500)({error: 'Ha ocurrido un error'})
        }
    }
    async borrar (req,res){
        try{
            const producto = await productPersis.remove(Number(req.params.id))
    
            if( producto == undefined || producto == null ) return  res.status(404).json({error: 'No se encontro el producto'})
    
            return  res.json({producto: producto })
        }catch(err){
            console.log(err)
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
        
    }
}

module.exports = new ProductController()