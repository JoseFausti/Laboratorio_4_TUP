import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Mostrar las variables en consola
console.log("Base de Datos:");
console.log("Host:", process.env.DB_HOST);
console.log("Usuario:", process.env.DB_USER);
console.log("Contraseña:", process.env.DB_PASS);


// Ejercicio 2

/*  CommonJS
    const sumar = require('./math');
    console.log(sumar(5, 3));
*/

// ES6
import sumar from './Ejercicios/Ej2/math.js';
console.log(sumar(5, 3));


// Ejercicio 3

// import readline from 'readline'; // Pedir Datos por Consola

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('¿Cuál es tu nombre? ', (nombre) => {
//     console.log(`Hola, ${nombre}!`);
//      rl.close();
//     }
// );


// Ejercicio 3-2

// import readline from 'readline'; // Pedir Datos por Consola

// const readLine = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readLine.question('Ingrese su edad: ', (edad) => {
//     const anio_nacimiento = new Date().getFullYear() - parseInt(edad);
//     console.log(`Usted nació en el año ${anio_nacimiento}`);
//     readLine.close();
// });
   

// Ejercicio 4
import readline from 'readline';
import fs from 'fs'; // File System

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuál es tu nombre? ", (nombre) => {
    rl.question("¿Cuál es tu edad? ", (edad) => {
        rl.question("¿Cuál es tu correo electrónico? ", (email) => {

            // Validaciones
            if (isNaN(edad) || 
                !email.includes("@") || 
                !email.includes(".") || 
                email.indexOf("@") > email.indexOf(".") || 
                !email.endsWith(".com")) {
                throw new Error("Error en los datos ingresados");
            }

            const datos_usuario = `Nombre: ${nombre}\nEdad: ${edad}\nCorreo: ${email}\n`; 

            try {
             
                // if (!fs.existsSync('./Ejercicios/Ej4')) {
                //     fs.mkdirSync('./Ejercicios/Ej4');
                // }

                // Crea la carpeta sin necesidad de verificar si existe
                fs.mkdirSync('./Ejercicios/Ej4', { recursive: true });

                // fs.writeFileSync('./Ejercicios/Ej4/datos_usuario.txt', `${datos_usuario}\n`, {flag: 'a'});
                fs.appendFileSync('./Ejercicios/Ej4/datos_usuario.txt', `${datos_usuario}\n`);

                leerArchivo();
                
            } catch (error) {
                console.log(error);
            } finally {
                rl.close();
            }
        });
    });
});

// Leer archivo
const leerArchivo = () => {
    try {
        fs.readFile('./Ejercicios/Ej4/datos_usuario.txt', {encoding:'utf-8', flag: 'r'}, (_, data) => {
          console.log(data);
        });
    } catch (error) {
        console.log("Error al leer el archivo: ", error);
    }
}