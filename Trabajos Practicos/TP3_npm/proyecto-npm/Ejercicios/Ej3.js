/*
    3.	Implementa un comando que lea un archivo JSON y muestre su contenido en la terminal.
    4.	Modifica el script para que, si el usuario no proporciona el argumento nombre, se muestre un mensaje de error adecuado.
*/

const yargs = require('yargs');
const fs = require('fs');

const argv = yargs
    .option('archivo', {
        alias: 'a',
        describe: 'archivo a leer',
        demandOption: true, // para que sea obligatorio
        type: 'string',
        requiresArg: true // para que no acepte --archivo= sin valor
    })
    .check((argv, options) => {
        // si no proporciona el argumento nombre, se muestre un mensaje de error adecuado
        if (!argv.archivo) {
            throw new Error('Debe proporcionar el argumento --archivo o -a');
        }
        if (!fs.existsSync(argv.archivo)) {
            throw 'El archivo no existe';
        }
        return true;
    })
    .help()
    .argv;

const contenido = fs.readFileSync(argv.archivo, 'utf-8');
console.log(contenido);