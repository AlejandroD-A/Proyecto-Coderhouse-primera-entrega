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
    * `GET` | /productos/listar
  
 * *Obtener un producto*
    * `GET` |  /productos/listar/:id 
 
 * *Crear un nuevo producto*
    * `POST` |  /productos/agregar
 
 * *Actualizar  producto*
    * `PUT` |  /productos/actualizar/:id
 
 * *Eliminar producto*
    * `DELETE` |  /productos/borrar/:id
 
 ##### Carrito

* **Obtener todos los productos del carrito con los campos id y timestamps de carrito**
    * `GET` | /carrito
  
 * **Obtener un producto del carrito con los campos id y timestamps de carrito**
    * `GET` |  /carrito/:id 
 
 * **Agregar al carrito**
    * `POST` |  /carrito/:id_producto
 
 * **Eliminar item del carrito**
    * `DELETE` |  /carrito/:id

Para ejecutar en local:   
`npm start`

Demo en Glitch: 

https://purrfect-square-pigment.glitch.me/ 


*by Alejandro Aliaga.*

>Curso de Programacion Backend Coderhouse
