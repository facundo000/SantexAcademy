const express = require('express');
const libraryController = require('../controllers/library-controller');

const { isAuthenticated } = require('../middlewares/authentication');

const router = express.Router();

/* Rutas para las librerias */
router.post("/crear-libreria", isAuthenticated, libraryController.createLibrary); // requiere estar autenticado
router.get("/obtener-libreria/:id", libraryController.getLibrary);
router.get("/obtener-todas", libraryController.getAllLibrary);
router.put("/editar-libreria/:id", isAuthenticated, libraryController.updateLibrary); // requiere estar autenticado
router.delete("/eliminar-libreria/:id", isAuthenticated, libraryController.deleteLibrary); // requiere estar autenticado

/* aca se va a agregar un libro nuevo a la libreria */
router.post("/libreria/:id/agregar-libro", isAuthenticated, libraryController.addBookToLibrary); // requiere estar autenticado

module.exports = router;