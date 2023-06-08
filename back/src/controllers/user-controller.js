const userService = require('../services/user-service');

async function login(req, res) {
  const { name, password } = req.body;

  try {
    const result = await userService.login(name, password);
    res.status(200).send(result);
  } catch (error) {
    if (error.message === 'Usuario no autorizado') {
      res.status(401).send({ message: 'Usuario no autorizado' });
    } else {
      res.status(500).send({ message: 'Ocurrió un error en el servidor' });
    }
  } 
}


module.exports = { login };