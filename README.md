## Proyecto Final


#### Rutas: 

 ##### Productos

 * **Obtener todos los productos**
    * `GET` | /api/productos
  
 * **Obtener un producto**
    * `GET` |  /api/productos/:id 
 
 * **Crear un nuevo producto**
    * `POST` |  /api/productos
 
 * **Actualizar  producto**
    * `PUT` |  /api/productos
 
 * **Eliminar producto**
    * `DELETE` |  /api/productos/:id
 
 ##### Carrito

* **Obtener todos los productos del carrito**
    * `GET` | /api/carrito
  
 * **Obtener un producto del carrito**
    * `GET` |  /api/carrito/:id 
 
 * **Agregar al carrito**
    * `POST` |  /api/carrito/:id_producto
 
 * **Eliminar item del carrito**
    * `DELETE` |  /api/carrito/:id


Se implemento el proyecto separando la logica de la siguiente manera:
* Routes:  Se definen las rutas necesarias tanto de productos como el carrito.
* Controllers: Se manejan las peticiones de las rutas y retorna la respuesta correspondiente 
* Api: Se encuentran las clases Product y Cart que manipulan y devuelven los recursos al controlador. 
* Persistence: Es utilizada por Product y Cart para obtener los datos desde los archivos correspondientes y guardar los mismos.

Se debia crear una variable Booleana.
*by Alejandro Aliaga.*

>Curso de Programacion Backend Coderhouse
