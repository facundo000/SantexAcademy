const express = require('express');
const libraryRoutes = require('./src/routes/library-routes');
const userRoutes = require('./src/routes/user-routes');
const bookRoutes = require('./src/routes/books-routes');

const { errorHandlerMiddleware } = require('./src/middlewares/error-handler');
const { initializeAuthentication } = require('./src/auth/auth');

const app = express();
const port = 8080;

initializeAuthentication();

app.use(express.json());
app.use('/user', userRoutes);
app.use('/library', libraryRoutes);
app.use('/book', bookRoutes);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Esta funcionando en el puerto ${port}`)
});
