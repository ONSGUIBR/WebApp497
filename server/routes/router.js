const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);

// route.get('/add-user', services.add_user);
//
// route.get('/update_user', services.update_user);
//
// route.post('/api/users', controller.create);

// route.post('/api/logins', controller.createLogin);
// route.get('/api/logins', controller.findLogin);
// route.put('/api/logins/:id', controller.updateLogin);
// route.delete('/api/logins/:id', controller.deleteLogin);

route.post('/api/usersDB', controller.createUser);
route.get('/api/usersDB', controller.findUser);
// route.put('/api/users/:id', controller.updateLogin);
route.delete('/api/usersDB/:id', controller.deleteUser);

module.exports = route
