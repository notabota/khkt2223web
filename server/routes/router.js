const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const controller1 = require('../controller/controller1');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/tra-cuu', services.tra_cuu)
route.get('/tra-cuu2', services.tra_cuu2)
// route.get('/nhap', function(req, res,next) {
//     res.sendFile('E:/khkt/web/' + '/index.html');
// });

// API 1
route.post('/api/ds_benhnhan', controller.create);
route.get('/api/ds_benhnhan', controller.find);
route.put('/api/ds_benhnhan/:id', controller.update);
route.delete('/api/ds_benhnhan/:id', controller.delete);

// API 2
route.post('/api/ds_dieutri', controller1.create);
route.get('/api/ds_dieutri', controller1.find);
route.put('/api/ds_dieutri/:id', controller1.update);
route.delete('/api/ds_dieutri/:id', controller1.delete);


module.exports = route