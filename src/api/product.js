const fs = require('fs')

class Product{
    
    constructor(path){
        this.path = path
    }

      async getAll(){
        try{            
            const data = await fs.promises.readFile(this.path)
            const dataProductos = JSON.parse(data)
            const { products = [] } = dataProductos
            return products
        }catch(err){
            return []
        }
    }

    async get(id){
        const products = await this.getAll()
        const product = products.find(prod => prod.id == id)
        return product
    }
    
    async create(data){
        
            const product = { id : await this.#getCurrentId() + 1 , timestamps: Date.now() ,...data } 
            const newProducts = [ ...await this.getAll(), product]

            await this.#saveInFile(newProducts,product.id)
 
            return product
        
       
    }

    async update(id, data){
        let productUpdated; 

        let products = await this.getAll()

        let newProducts = products.map((prod)=>{
            if(prod.id == id) {
                productUpdated = { ...prod, ...data}
                return productUpdated
            }
            return prod
        })

        await this.#saveInFile(newProducts)

        return productUpdated
    }
    async remove(id){

        let deletedProduct

        let newProducts = await this.getAll()
        
        newProducts = newProducts.filter(prod =>{
            if(prod.id !== id){
                return prod
            }else{
                deletedProduct = prod
            }
        } )

        await this.#saveInFile(newProducts)

        return deletedProduct
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

    async #saveInFile(products,currentId = null){
        await fs.promises.writeFile(
            this.path,
            JSON.stringify(
                {products: products, 
                 currentId: currentId || await this.#getCurrentId() },
                 null,'\t'))

    }
}   

module.exports = new Product('productos.txt')