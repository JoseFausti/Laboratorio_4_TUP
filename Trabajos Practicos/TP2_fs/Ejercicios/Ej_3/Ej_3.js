/*
    Ejercicio 3

    Instrucciones:
    Crear un archivo llamado contactos.json con el siguiente contenido inicial:

    json
    Copiar
    Editar
    [
        {
            "nombre": "Juan Pérez",
            "telefono": "123-456-7890",
            "email": "juan@example.com"
        }
    ]
    Crear una función en Node.js que agregue un nuevo contacto al archivo contactos.json. El contacto debe ser un objeto con los siguientes campos:

    json
    Copiar
    Editar
    {
        "nombre": "[Tu Nombre]",
        "telefono": "[Tu Teléfono]",
        "email": "[Tu Email]"
    }
    crear una funcion para Leer y mostrar en la consola todos los contactos almacenados en contactos.json.

    Agregar una función que elimine un contacto dado su nombre.

    // Código de prueba
    agregarContacto('Carlos López', '987-654-3210', 'carlos@example.com');
    mostrarContactos();
    eliminarContacto('Juan Pérez');
    mostrarContactos();
*/

const fs = require('fs');
const path = require('path'); // Libreria para manejar rutas de archivos (Opcional)

// Función para agregar un nuevo contacto
function addContact(name, phone, email) {
    const contact = { name, phone, email };
    const contacts = JSON.parse(fs.readFileSync(`${path.dirname(__filename)}/contactos.json`, 'utf8'));
    contacts.push(contact);
    fs.writeFileSync(`${path.dirname(__filename)}/contactos.json`, JSON.stringify(contacts, null, 4), 'utf8');
    console.log('Contacto agregado:');
    console.log(contact);
}

// Función para mostrar todos los contactos
function showContacts() {
    const contacts = JSON.parse(fs.readFileSync(`${path.dirname(__filename)}/contactos.json`, 'utf8'));
    console.log('Todos los contactos:');
    console.log(contacts);
}

// Función para eliminar un contacto por nombre
function deleteContact(name) {
    const contacts = JSON.parse(fs.readFileSync(`${path.dirname(__filename)}/contactos.json`, 'utf8'));
    const index = contacts.findIndex(contact => contact.name === name);
    if (index !== -1) {
        const deletedContact = contacts[index];
        contacts.splice(index, 1);
        fs.writeFileSync(`${path.dirname(__filename)}/contactos.json`, JSON.stringify(contacts, null, 4), 'utf8');
        console.log('Contacto eliminado:');
        console.log(deletedContact);
    } else {
        console.log('Contacto no encontrado.');
    }
}

// Código de prueba
addContact('Jose', '123-456-7890', 'jose@example.com');
showContacts();
deleteContact('Jose');
showContacts();