App Gestión de Fotos con subida a la nube y a BBDD.

App realizada en NODE.JS para el Backend, y HTML,BOOTSTRAP Y JS para la parte FRONT en formato .ejs

Para poder lanzar la aplicación será necesario dentro de la carpeta donde se encuentrar los archivos abrir una consola e instalar node y sus respectivas dependencias.

En una consola.

        sudo apt-get update
        sudo apt-get install node
        sudo apt-get install nodejs
        sudo apt-get install npm


Si ya se tiene instalado NODE bastará con un:

        npm install

Para ejecutar la APP es necesario instalar las siguientes dependencias.

        npm i body-parser cloudinary cross-env dotenv ejs express fs-extra mongoose morgan multer
    
y para poder utilizar la app en modo de desarrollo.
        npm i nodemon -D

Al ser una aplicación NODE las dependecias son imprescindibles para que se pueda ejecutar de una manera más optima.

Para la BBDD vamos a utilizar MongoDB y para la subida de imagenes al servidor Cloudinary, que es un cloud de fotos para que NODE las pueda reenderizar y no ocupar espacio en tu propio servidor o tu propio ordenador.

Para la gestión y la comprobación del funcionamiento de la app al tratarse de una prueba técnica, si se subirán las URI y nombres de usuarios y contraseñas, normalmente si se tratara de un proyecto real se subirian en el arvhivo .env, que está creado también.

Cuenta gmail =  tecnicaprueba.guillermo@gmail.com // contraseña: Inclusiva1!

Tanto el login de MongoDB y Cloudinary se accede a través de la cuenta de Gmail.

Explicación de las dependencias:

     body-parser - Es lo que permite a Express leer el cuerpo y luego analizarlo en un objeto Json que podamos entender.

     Cloudinary - Servicios de gestión de imágenes y vídeos basados ​​en la nube.

     Cross- ENV para resolver la configuración de la plataforma cruzada NODE ENV.

     dotenv - nos permite tener varios archivos de configuración.

     ejs - la extensión de archivo .ejs representa el tipo de archivo Embedded JavaScript Template (.ejs).

    Express -  es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares.

    fs-extra - En NodeJS todas las operaciones de acceso al sistema de archivos están englobadas dentro del módulo "fs" (File System), y con fs-extra llegamos a más.

    Morgan es un Middleware de nivel de solicitud HTTP. Es una gran herramienta que registra las requests junto con alguna otra información dependiendo de su configuración y el valor predeterminado utilizado.

    Mongoose es una librería para Node. js que nos permite escribir consultas para una base de datos de MongooDB, 

    Multer es un "middleware" de node. js para el manejo de multipart/form-data , el cuál es usado sobre todo para la subida de archivos.

He decido utilizar Node por su compatibilidad y su manejo desde VS CODE y sobre todo por que es una técnología al alza debido a que es ideal para manejar aplicaciones de alto tráfico y por su rendimiento y el poder acceder a los cambios en tiempo real.

Se podría combinar su Front con Angular también, pero gracias a las dependencias se puede realizar todo desde NODE

Una de las cosas que más me gusta de Node y por lo que he realizado la app en este lenguaje es la facilidad para implementar código dentro de la misma app; me refiero a los partials o templates que se pueden utilizar en todas las páginas de tu app y teniendo solo un archivo para modificarlo.
De ahí mi carpeta templates donde contiene un head común para todas las páginas.
Se podría incluso seperar ese head para crear 2 templates más por ejemplo como el menu NAV o el mismo FOOTER.

Al ser una app pequeña con un solo template a modo de ejemplo es suficiente para ver su funcionamiento.

Node funciona desde su app.js donde se "cargan" las dependencias, Modelos, inicializaciones, middlewares, propiedades y rutas.

Cargando un modelo para todo el sitio y des un index.js se controlan todas las rutas, todos los GET PUT y demás funciones.

En la carpeta Views o vistas se cargan todas las páginas que se tendran que ver en tu app.

En la carpeta public se cargaran de manera estática los archivos de nuestro proyectyo, dentro de este public existe una carpeta Uploads que siempre permanecerá vacía, ya que aunque se suban las imagenes ahí, una vez subidas a Cloudinary, es borrada automaticamente para no ocupar espacio.

Para la conexion a la BBDD de MongoDB tenemos un archivo database.js donde se colocará el acceso a dicha base de datos.

Desde la página principal se verán las fotos ya subidas a la BBDD, estarán cada imagen, con su título y su pequeña descripción, dentro de un CARD para ir ordenandolas.

Tambien un button con acceso al panel de control apra subir fotos

Desde el Nav podemos voler a la página principal o acceder al panel de control.

En cada Imagen tenemos un boton EDITAR/ELIMINAR que nos dará acceso a otra página donde podremos ver los datos de esa imagen, con la opción de editarla o borrarla.

En el panel de control, podemos subir una foto nueva para nuestra app y también podemos ver un pequeño esquema con información de las fotos ya subidas.

                              //EXPLICACIÓN DEL BACK//

Cuando accedemos al INDEX o página principal con un comando IF en el que le decimos que si encuentra elementos dentro de un array los muestre a través de un ForEach para que se puedan ver todas las imágenes.

En la subida de Imágenes se suben la imagen a la carpeta upload, esta se sube directamente a cloudinary donde obtenemos un URL de la imagen, siempre con las promesas Async y Await para que aunque tarde un poco más la subida nos aseguramos de que se suba correctamente, ya que Node no puede mostrar fotos estáticas, se borra la imagen de upload, y toda la información en un JSON en forma de String se suben MongoDB, desde donde podemos ver, recuperar y eliminar desde la misma app.

Testado con POSTMAN y desde Consola.

Espero que se haya podido cumplir con todos los requisitos.

Muchas gracias.
Guillermo de Porras.

