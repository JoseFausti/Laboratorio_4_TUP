const yargs = require('yargs');

// Configuración de Yargs
const argv = yargs
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true, // Elemento obligatorio (si no se pasa, se muestra un error)
        describe: 'Base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola',
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true; // Se retorna true si todo está correcto
    })
    .help() // Muestra la ayuda
    .argv; // Para que Yargs procese la información ((los argumentos pasados por consola) sin esto, no funcionará)

// Función para generar la tabla de multiplicar
function crearTabla(base, listar) {
    let resultado = '';
    
    for (let i = 1; i <= 10; i++) {
        resultado += `${base} x ${i} = ${base * i}\n`;
    }

    // Si el usuario usa la opción "-l", mostramos la tabla
    if (listar) {
        console.log(`----  Tabla del ${base} ----`);
        console.log(resultado);
    }

    return resultado;
}

// Ejecutar la función con los argumentos de Yargs
crearTabla(argv.base, argv.listar);
