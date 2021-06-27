const productApi = require('../api/product')

class Cart{

    constructor(){
        this.cartProducts = [
            {
             id: 1,
             timestamp: Date.now(),
             producto: {
                    id: 1,
                    timestamps: Date.now(),
                    nombre: 'Nuevo producto',
                    descripcion: 'Mi nuevo Producto',
                    codigo: '0001',
                    foto: 'http://image.jpg',
                    precio: 5500.00,
                    stock: 5
                }
            }
        ]
        this.lastId = 1
    }

    get(id){
        const cartProduct = this.cartProducts.find(prod => prod.id === id)
        return cartProduct 
    }
    getAll(){
        return this.cartProducts
    }
    add(product){

       this.lastId += 1
       const cartProduct = { id: this.lastId ,timestamp: Date.now(), product }
        
       this.cartProducts.push(cartProduct)

       return cartProduct
    }
    remove(id){
        let deletedProduct
        this.cartProducts = this.cartProducts.filter(prod =>{
            if(prod.id !== id){
                return prod
            }else{
                deletedProduct = prod
            }
        } )

        return deletedProduct
    }

    #getLastId(){

    }

}

module.exports = new Cart()