import readline from 'readline';

// Crear una interfaz readline para interactuar con el usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para hacer una pregunta de forma asincrónica
const question = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

// Función principal que solicita los datos
const obtenerDatos = async () => {
  try {
    // Solicitar el nombre del producto
    const producto = await question('Ingrese el nombre del producto: ');

    // Solicitar el precio del producto
    const precio = await question('Ingrese el precio del producto: ');

    // Solicitar la cantidad del producto
    const cantidad = await question('Ingrese la cantidad de unidades: ');
    rl.close();

    return { producto, precio, cantidad };

  } catch (error) {
    console.error('Error al obtener los datos:', error);
    rl.close();
  }
};

export default obtenerDatos;