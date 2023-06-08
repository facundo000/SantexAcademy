const libraryService = require('../services/library-service');
const { Book } = require('../models/Book');
const { Library } = require('../models/Library');

/* controlador para crear una nueva libreria */
async function createLibrary(req, res) {
    try {
        const { name, location, phone } = req.body;
        const library = await libraryService.createLibrary( name, location, phone );
        res.status(201).json(library);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear la libreria '})
    }
}

/* Controlador para obtener una libreria por su ID */
async function getLibrary(req, res) {
    try {
        const libraryId = req.params.id;
        const library = await libraryService.getLibrary(libraryId);
        if(!library) {
            return res.status(404).json({ message: 'Libreria no encontrada' });
        }
        res.status(200).json(library);
    }   catch(error) {
        res.status(500).json({ error: 'No se pudo obtener la libreria' });
    }
}

/* Controlador para obtener todas las librerias */
async function getAllLibrary(req, res) {
    try {
        const libraries = await libraryService.getAllLibrary();
        res.status(200).json(libraries);
    }   catch(error) {
        res.status(500).json({ error: 'No se pudieron obtener las librerias' });
    }
}

/* Controlador para modificar una libreria */
async function updateLibrary(req, res) {
    try {
        const libraryId = req.params.id;
        const { name, location, phone } = req.body;

        const updatedLibrary = await libraryService.updateLibrary(libraryId, name, location, phone);

        if(!updatedLibrary) {
            return res.status(404).json({ message: 'Libreria no encontrada' });
        }
        res.status(200).json(updatedLibrary);
    }   catch(error) {
        res.status(500).json({ error: 'No se pudo actualizar la libreria'})
        }
}

/* Controlador para eliminar una libreria */

async function deleteLibrary(req, res) {
    try {
        const libraryId = req.params.id;
        await libraryService.deleteLibrary(libraryId);

        res.status(200).json({ menssage: 'libreria eliminada correctamente'});
    }  catch(error) {
        res.status(500).json({ error: 'No se pudo eliminar la libreria'});
    }
}

/* Controlador para agregar un libro nuevo */
async function addBookToLibrary(req, res, next) {
    try {
        const { libraryId } = req.params;
        const { isbn, title, author, year } = req.body;

        /* verificar si la biblioteca existe */
        const library = await Library.findByPk(libraryId);
        if(!library) {
            throw new Error('La biblioteca no existe');
        }
        let book;

        /* verificar si se proporciono el ID del libro */
        if(req.body.bookId) {
            /* crear el libro y asocioarlo a la biblioteca mediante si ID */
            book = await Book.findByPk(req.body.bookId);
            if(!book) {
                throw new Error('El libro especificado no existe');
            }

            /* asociar el libro a la biblioteca */
            book.libraryId = libraryId;
            await book.save();
        } else {
            /* crear un nuevo libro y asociarlo a la biblioteca */
            book = await Book.create({ isbn, title, author, year, libraryId });
        }

        res.status(201).json({
            message: 'Libro agregado a la biblioteca correctamente',
            book,
        });
    } catch(error) {
        next(error);
    }
};

module.exports = { createLibrary, getLibrary, getAllLibrary, updateLibrary, deleteLibrary, addBookToLibrary };
