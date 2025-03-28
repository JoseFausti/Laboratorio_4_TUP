import yargs from 'yargs';
import fs from 'fs';
import path from 'path';
import { datos } from '../../app';

const leerDatos = (name) => {
    const data = JSON.parse(fs.readFileSync(`${path.dirname(__filename)}/${name}.json`, 'utf-8'));
    console.log(data);
}

const argv = yargs
    .option('f', {
        alias: 'file',
        type: 'string',
        describe: 'Nombre del archivo'
    })
    .argv;

const guardarDatos = async () => {
    try {
        const {producto, precio, cantidad} = await datos();
        if (argv.file) {
            if (fs.existsSync(`${path.dirname(__filename)}/${argv.file}.json`)) {
                const data = JSON.parse(fs.readFileSync(`${path.dirname(__filename)}/${argv.file}.json`, 'utf-8'));
                data.push({name: producto, precio, cantidad});
                fs.writeFileSync(`${path.dirname(__filename)}/${argv.file}.json`, JSON.stringify(data));
            } else {
                fs.writeFileSync(`${path.dirname(__filename)}/${argv.file}.json`, JSON.stringify([{name: producto, precio, cantidad}]));
            }
            leerDatos(argv.file);
        }else{
            if (fs.existsSync(`${path.dirname(__filename)}/productos.json`)) {
                const data = JSON.parse(fs.readFileSync(`${path.dirname(__filename)}/productos.json`, 'utf-8'));
                data.push({name: producto, precio, cantidad});
                fs.writeFileSync(`${path.dirname(__filename)}/productos.json`, JSON.stringify(data));
            } else {
                fs.writeFileSync(`${path.dirname(__filename)}/productos.json`, JSON.stringify([{name: producto, precio, cantidad}])); 
            }
            leerDatos('productos');
        }
    } catch (error) {
        console.error('Error al guardar los datos:', error);
    }

    guardarDatos();
}