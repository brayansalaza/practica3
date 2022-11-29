var express = require('express');
var UsuarioControl = require('../controlador/usuarioControlador');

var api = express.Router();

api.get('/probando-controlador', UsuarioControl.prueba);

module.exports = api;