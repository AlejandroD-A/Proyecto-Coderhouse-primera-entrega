
class Product{
    
    constructor(){
        this.products = [{
            id: 1,
            timestamps: Date.now(),
            nombre: 'Nuevo producto',
            descripcion: 'Mi nuevo Producto',
            codigo: '0001',
            foto: 'http://image.jpg',
            precio: 5500.00,
            stock: 5
        }]
        this.lastId = 1
    }

    getAll(){
        return this.products 
    }

    get(id){
        const product = this.products.find(prod => prod.id === id)
        return product
    }
    
    create(data){
        this.lastId = this.lastId + 1
        const newProduct = { id : this.lastId , timestamps: Date.now() ,...data}
        this.products.push(newProduct)
   
        return newProduct
    }

    update(id, data){
        let productUpdated; 

        this.products = this.products.map((prod)=>{
            if(prod.id == id) {
                productUpdated = { ...prod, ...data}

                return productUpdated
            }

            return prod
        })

        return productUpdated
    }
    remove(id){
        let deletedProduct
        this.products = this.products.filter(prod =>{
            if(prod.id !== id){
                return prod
            }else{
                deletedProduct = prod
            }
        } )

        return deletedProduct
    }



}   

module.exports = new Product()