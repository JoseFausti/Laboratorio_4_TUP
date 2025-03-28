// 2.	Crea un script con Yargs que permita sumar dos números desde la línea de comandos. (n1 y n2)

const yargs = require('yargs');

const argv = yargs
    .option('numero1', {
        alias: 'n1',
        describe: 'primer valor',
        demandOption: true,
        type: 'number'
    })
    .option('numero2', {
        alias: 'n2',
        describe: 'segundo valor',
        demandOption: true,
        type: 'number'
    })
    .check((argv, options) => {
        if (isNaN(argv.numero1) || isNaN(argv.numero2)) {
            throw 'Ambos valores deben ser números';
        }
        return true;
    })
    .help()
    .argv;


// Mostar la suma de los dos valores
console.log(`La suma de ${argv.numero1} + ${argv.numero2} es ${argv.numero1 + argv.numero2}`);