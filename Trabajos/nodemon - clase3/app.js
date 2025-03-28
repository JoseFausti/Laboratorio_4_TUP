import yargs from "yargs";
import { hideBin } from "yargs/helpers"; // Necesario para compatibilidad

import { crearArchivo } from "./lib/functions.js";

const argv = yargs(hideBin(process.argv)) // hideBin limpia los argumentos internos de Node.js
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola',
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw new Error('La base tiene que ser un número');
        }
        return true;
    })
    .help()
    .parse(); // Ahora se usa .parse() en lugar de .argv. Esto procesa los argumentos sin necesidad de asignarlos a una variable: 'yargs(hideBin(process.argv))... .parse()'

// Ejecutar la función con los argumentos de Yargs
crearArchivo(argv.b, argv.l);
