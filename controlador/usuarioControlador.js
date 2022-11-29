'use strict'
const {param }=require('../app');
var bcrypt = require('bcrypt');
var usuariosModelo = require('../modelo/usuarios');

function prueba(req, res){
    res.status(200).send({
        mesagge: 'Probando una accion del controlador de usuarios del api REST con node y mongo'
    });
}

function registrarUsuario(req, res) {
    var params = req.body; //recibe todos los datos por el metod post
    console.log(params);

    usuario.nombre = params.nombre;
    // usuario.nombre = params.nombre;
    usuario.apellido = params.apellido;
    usuario.email = params.email;
    usuario.password = params.password;
    usuario.rol = 'ROLE_USER';
    usuario.imagen = 'null';

    if (params.password) {

    }else{
        res.status(500).send({mesagge: 'introduce la contraseña'})
    }

}
module.exports = {
    prueba,registrarUsuario
};