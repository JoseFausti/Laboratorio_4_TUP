/*
    1)_Solicitar Datos al Usuario:

    Usando el módulo readline, solicita los siguientes datos:

    Producto: El nombre de un producto.

    Precio: El precio del producto.

    Cantidad: La cantidad de unidades del producto.


    utilizarlo de manera asincrónica (sin la callback hell)

    2)_Guardar los Datos en un Archivo JSON:

    Utiliza el módulo fs (File System) para guardar los datos solicitados en un archivo JSON, cuyo nombre será el especificado por el usuario mediante yargs.

    Si el archivo JSON ya existe, debes leer el archivo, agregar el nuevo producto al array de productos dentro del archivo y sobrescribir el archivo con el array actualizado.

    Si el archivo no existe, debes crear un nuevo archivo JSON que contenga un array con el producto ingresado.

    Cada producto debe ser representado como un objeto JSON con las siguientes propiedades:

    nombre: El nombre del producto.

    precio: El precio del producto.

    cantidad: La cantidad de unidades.

    3)_Leer y Mostrar el Contenido del Archivo JSON:

    Después de guardar los datos, usa fs.readFile para leer el archivo JSON y mostrar su contenido en la consola.

    4)_Argumento de Línea de Comandos:

    Utiliza el módulo yargs para pedir un argumento adicional en la línea de comandos:

    Argumento --file (o -f): Este argumento permitirá al usuario especificar el nombre del archivo en el que se guardarán los productos. Si no se proporciona el nombre del archivo, el valor predeterminado será productos.json



    Línea de Comandos:

    node app.js --file productos.json

    SUBIR EL EJERCICIO A GITHUB Y AGREGAR EL ENLASE 
*/

import obtenerDatos from "./utils/functions/readline";


// Función principal
export const datos = async () => await obtenerDatos()
