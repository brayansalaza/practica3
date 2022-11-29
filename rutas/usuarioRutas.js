var express = require('express');
var UsuarioControl = require('../controlador/usuarioControlador');


//hola soy brayan
var api = express.Router();

api.get('/probando-controlador', UsuarioControl.prueba);

module.exports = api;