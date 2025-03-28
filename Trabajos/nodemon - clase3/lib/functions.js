import fs from 'fs';  

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

export function crearArchivo(base, listar){
    const resultado = crearTabla(base, listar);
    if (!fs.existsSync('tabla')) {
        fs.mkdirSync('tabla');
    }

    fs.writeFileSync(`tabla/tabla-${base}.txt`, resultado);
    console.log(`Archivo tabla-${base}.txt creado`); 
}
