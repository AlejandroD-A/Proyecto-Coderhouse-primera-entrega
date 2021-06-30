const fsMngr = require ('../utils/FsManager')

class Cart{

    constructor(path){
        this.path = path
    }

    async get(id){
        const cartItems = await fsMngr.getData(this.path)
        const cartProduct = cartItems.find(prod => prod.id === id)
        
        return cartProduct
    }
    async getAll(){
        try{            
            const cartItems = await fsMngr.getData(this.path)
            return  cartItems
        }catch(err){
            return []
        }
    }

    async add(product){
       const cartItem = { id: await fsMngr.getCurrentId(this.path) + 1 ,timestamp: Date.now(), product }
       const cartItems = [...await fsMngr.getData(this.path), cartItem]

       await fsMngr.saveInFile(this.path,cartItems,cartItem.id)

       return cartItem
    }

    async remove(id){

        let deletedItem

        let cartItems = await fsMngr.getData(this.path)

        cartItems = cartItems.filter(prod =>{
            if(prod.id !== id){
                return prod
            }else{
                deletedItem = prod
            }
        } )

        await fsMngr.saveInFile(this.path,cartItems)
        return deletedItem
    }


}

module.exports = new Cart('carrito.txt')