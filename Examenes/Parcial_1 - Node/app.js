import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import fs from 'fs';
import path from 'path';
import obtenerDatos from './utils/functions/readline.js';

const argv = yargs(hideBin(process.argv));

    argv.option('file', {
        alias: 'f',
        type: 'string',
        description: 'Nombre del archivo JSON'
    }
    )
    .parse();

const leerDatos = (name) => {
    const data = JSON.parse(fs.readFileSync(`${name}.json`, 'utf-8'));
    console.log(data);
}
const guardarDatos = async () => {
    try {
        const {producto, precio, cantidad} = await obtenerDatos();
        if (argv.file) {
            if (fs.existsSync(`${argv.file}.json`)) {
                const data = JSON.parse(fs.readFileSync(`${argv.file}.json`, 'utf-8'));
                data.push({name: producto, precio, cantidad});
                fs.writeFileSync(`${argv.file}.json`, JSON.stringify(data));
            } else {
                fs.writeFileSync(`${argv.file}.json`, JSON.stringify([{name: producto, precio, cantidad}]));
            }
            leerDatos(argv.file);
        }else{
            if (fs.existsSync(`productos.json`)) {
                const data = JSON.parse(fs.readFileSync(`productos.json`, 'utf-8'));
                data.push({name: producto, precio, cantidad});
                fs.writeFileSync(`productos.json`, JSON.stringify(data));
            } else {
                fs.writeFileSync(`productos.json`, JSON.stringify([{name: producto, precio, cantidad}])); 
            }
            leerDatos('productos');
        }
    } catch (error) {
        console.error('Error al guardar los datos:', error);
    }
}

guardarDatos();