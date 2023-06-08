const errorHandlerMiddleware = (err, req, res, next) => {
    const errStatus = err.statusCode || 500; // establece un valor predeterminado
    const errMsg = err.message || 'Internal Server Error'; // establece un mensaje predeterminado si el mensage no esta definido
  
    res.status(errStatus).send({
      error: errMsg
    })
  }
  
  module.exports = { errorHandlerMiddleware };