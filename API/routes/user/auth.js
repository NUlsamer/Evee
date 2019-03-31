const routes = require('express').Router();
const user = require('../../src/controller/user');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.post('/register', function (req, res, next) {
  var register = user.registerUser("test@gmail.com", "testpass")
  res.status(201).send(register)
});



module.exports = routes;