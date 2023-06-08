const { Book } = require('../models/Book');

// funcion para crear libro
async function createBook(isbn, title, author, year, libraryId) {
    const  book = await Book.create({ isbn, title, author, year, libraryId });

    return book;
}

//funcion para obtener un libro en particular
async function getBook(bookId) {
    const  book = await Book.findByPk(bookId);

    return book;
}

//funcion para obtener todos los libros
async function getAllBooks() {
    const  books = await Book.findAll();

    return books;
}

//funcion para modificar un libro
async function updateBook(bookId, updateData) {
    const  book = await Book.findByPk(bookId);
    if(!book) {
        throw new Error('Libro no encontrado');
    }
    const updatedBook = await book.update(updateData);

    return updatedBook;
}

//funcion para eliminar un libro
async function deleteBook(bookId) {
    const  book = await Book.findByPk(bookId);
    if(!book) {
        throw new Error('Libro no encontrado');
    }
    await book.destroy();
}

module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook };