const { Library } = require('../models/Library');

// funcion para crear una nueva libreria
async function createLibrary(name, location, phone) {
    const library = await Library.create({ name, location, phone });

    return library;
}

// funcion para obtener una libreria por su ID
async function getLibrary(libraryId) {
    const library = await Library.findByPk(libraryId);

    return library;
}

// funcion para obtener todas las librerias
async function getAllLibraries() {
    const library = await Library.findAll();

    return library;
}

// funcion para modificar una libreria
async function updateLibrary(libraryId, updateData) {
    const library = await Library.findByPk(libraryId);
    if(!library) {
        throw new Error('Libreria no encontrada');
    }
    await library.update(updateData);

    return library;
}

// funcion para eliminar libreria
async function deleteLibrary(libraryId) {
    const library = await Library.findByPk(libraryId);
    if(!library) {
        throw new Error('Libreria no encontrada');
    }
    await library.destroy();
}

// funcion para agregar un libro nuevo
async function addBookToLibrary(libraryId, title, author, genre) {
    const library = await Library.findByPk(libraryId);
    if(!library) {
        throw new Error('Libreria no encontrada');
    }
    const book = await library.createBook({ title, author, genre });

    return book;
}

module.exports = { createLibrary, getLibrary, getAllLibraries, updateLibrary, deleteLibrary, addBookToLibrary };