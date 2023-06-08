const express = require('express');
const bookController = require('../controllers/book-controller');
const { isAuthenticated } = require('../middlewares/authentication'); // para aplicar la autenticacion

const router = express.Router();

/* Rutas para los libros*/
router.post("/crear-book", isAuthenticated, bookController.createBook); //crear libro (AUTH)
router.get("/book/:id", bookController.getBook); // obtener un libro en particular
router.get("/books", bookController.getAllBooks); //obtener todos los libros
router.put("/book/:id", isAuthenticated, bookController.updateBook); //modificar un libro (AUTH)
router.delete("/book/:id", isAuthenticated, bookController.deleteBook); //eliminar un libro (AUTH)

module.exports = router;