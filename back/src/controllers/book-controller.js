const bookService = require('../services/book-service');

async function createBook(req, res) {
    try {
        const { isbn, title, author, year, libraryId } = req.body;
        const book = await bookService.createBook(isbn, title, author, year, libraryId);
        res.status(201).json(book);
    }   catch(error) {
        res.status(500).json({ error: 'No se pudo crear el libro'});
    }
}

async function getBook(req, res) {
    try {
        const bookId = req.params.id;
        const book = await bookService.getBook(bookId);
        if(!book) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        res.status(200).json(book);
    }   catch(error) {
        res.status(500).json({ error: 'No se pudo crear el libro'});
    }
}

async function getAllBooks(req, res) {
    try {
        const books = await bookService.getAllBook();
        res.status(200).json(books);
    }   catch(error) {
        res.status(500).json({ error: 'No se pudieron obtener los libros'});
    }
}

async function updateBook(req, res) {
    try {
        const bookId = req.params.id;
        const { isbn, title, author, year } = req.body;
        const  updateBook = await bookService.updateBook(bookId, { isbn, title, author, year });
        if(!updateBook) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        res.status(200).json(updateBook);
    }   catch(error) {
        res.status(500).json({ error: 'No se pudo actualizar el libros'});
    }
}

async function deleteBook(req, res) {
    try {
        const bookId = req.params.id;
        await bookService.deleteBook(bookId);
        res.status(200).json({ message: 'Libro eliminado correctamente' });
    }   catch(error) {
        res.status(500).json({ error: 'No se pudo eliminar el libros'});
    }
}

module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook };