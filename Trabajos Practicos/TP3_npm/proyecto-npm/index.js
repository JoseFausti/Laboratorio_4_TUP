// 1.	Agrega otro comando a Yargs llamado despedir que muestre "Adiós, [nombre]!".

const yargs = require('yargs');

const argv = yargs
    .command('saludar', 'muestra un saludo', {
        nombre: {
            alias: 'n',
            describe: 'nombre de la persona a saludar',
            demmandOption: true,
            type: 'string'
        }
    })
    .command('despedir', 'muestra un despedida', {
        nombre: {
            alias: 'n',
            describe: 'nombre de la persona a despedir',
            demmandOption: true,
            type: 'string'
        }
    })
    .help()
    .argv;
    
if (argv._.includes('saludar')) {
    console.log(`Hola ${argv.nombre}!`);
}

if (argv._.includes('despedir')) {
    console.log(`Adios ${argv.nombre}!`);
}