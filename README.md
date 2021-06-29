## Proyecto Final- Primera entrega

Se implemento el proyecto separando la logica de la siguiente manera:
* Routes:  Se definen las rutas necesarias tanto de productos como el carrito.
* Controllers: Se manejan las peticiones de las rutas y retorna la respuesta correspondiente.
* Api: Se encuentran las clases Product y Cart que manipulan y devuelven los recursos al controlador. 
* Persistence: Es utilizada por Product y Cart para obtener los datos desde los archivos correspondientes y guardar los mismos en un .txt .

Se debia crear una variable Booleana administrador, la cual segun su valor permita alcanzar o no algunas rutas. **Se creo un middleware `\middlewares\checkAdmin` y se aplico en los archivos de rutas correspondientes.**



#### Rutas: 

 ##### Productos

 * *Obtener todos los productos*
    * `GET` | /api/productos/listar
  
 * *Obtener un producto*
    * `GET` |  /api/productos/listar/:id 
 
 * *Crear un nuevo producto*
    * `POST` |  /api/productos/agregar
 
 * *Actualizar  producto*
    * `PUT` |  /api/productos/actualizar/:id
 
 * *Eliminar producto*
    * `DELETE` |  /api/productos/borrar/:id
 
 ##### Carrito

* **Obtener todos los productos del carrito con los campos id y timestamps de carrito**
    * `GET` | /api/carrito
  
 * **Obtener un producto del carrito con los campos id y timestamps de carrito**
    * `GET` |  /api/carrito/:id 
 
 * **Agregar al carrito**
    * `POST` |  /api/carrito/:id_producto
 
 * **Eliminar item del carrito**
    * `DELETE` |  /api/carrito/:id

Para ejecutar en local:   
`npm start`

Demo en Glitch: 

https://purrfect-square-pigment.glitch.me/ 


*by Alejandro Aliaga.*

>Curso de Programacion Backend Coderhouse
