/*
    Ejercicio 1

    Escribir en el archivo un mensaje de inicio cada vez que el programa se ejecuta, con la fecha y hora actual en el formato:

    [YYYY-MM-DD HH:MM:SS] - Inicio del programa
    Simular la ejecución de una tarea que tarda 5 segundos. Mientras la tarea se ejecuta, escribir en log.txt:

    [YYYY-MM-DD HH:MM:SS] - Ejecutando tarea...
    Cuando la tarea finaliza, escribir en log.txt:

    [YYYY-MM-DD HH:MM:SS] - Tarea completada

*/

const fs = require('fs');
const path = require('path'); // Libreria para manejar rutas de archivos (Opcional)
const { getCurrentTime } = require('../utils/functions'); // Función para obtener la fecha y hora actual en formato [YYYY-MM-DD HH:MM:SS]

// Función para escribir en el archivo log
function writeLog(message) {
    const logMessage = `[${getCurrentTime()}] - ${message}\n`;
    // fs.appendFileSync('/ejercicios/Ej_1/log.txt', logMessage, 'utf8');
    fs.appendFileSync(`${path.dirname(__filename)}/log.txt`, logMessage, 'utf8');
}

// Registrar el inicio del programa
writeLog('Inicio del programa');
console.log('Inicio del programa');

// Simular la ejecución de una tarea que tarda 5 segundos
writeLog('Ejecutando tarea...');
console.log('Ejecutando tarea...');

setTimeout(() => {
    writeLog('Tarea completada');
    console.log('Tarea completada');
}, 5000);
