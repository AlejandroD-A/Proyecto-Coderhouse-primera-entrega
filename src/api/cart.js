const fs = require ('fs')

class Cart{

    constructor(path){
        this.path = path
    }

    async get(id){
        const cartItems = await this.getAll()

        const cartProduct = cartItems.find(prod => prod.id === id)

        return cartProduct 
    }
    async getAll(){
        try{            
            const data = await fs.promises.readFile(this.path)
            const dataCart = JSON.parse(data)
            const { cartItems = [] } = dataCart
            return cartItems
        }catch(err){
            return []
        }
    }

    async add(product){
       const cartItem = { id: await this.#getCurrentId() + 1 ,timestamp: Date.now(), product }
       const cartItems = [...await this.getAll(), cartItem]

       await this.#saveInFile(cartItems,cartItem.id)
       return cartItem
    }

    async remove(id){

        let deletedItem

        let cartItems = await this.getAll()

        cartItems = cartItems.filter(prod =>{
            if(prod.id !== id){
                return prod
            }else{
                deletedItem = prod
            }
        } )
        this.#saveInFile(cartItems)
        return deletedItem
    }

    async #getCurrentId(){
        try{
            const data =  await fs.promises.readFile(this.path)
            const { currentId } = JSON.parse(data)
            return currentId 

        }catch(err){
            return 0
        }
    }

    async #saveInFile(cartItems,currentId = null){
        await fs.promises.writeFile(
            this.path,
            JSON.stringify(
                {cartItems: cartItems, 
                 currentId: currentId || await this.#getCurrentId() },
                 null,'\t'))
    }

}

module.exports = new Cart('carrito.txt')