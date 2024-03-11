const Usuario = require('../models/usuario.model');

exports.getLogin = (request, response, next) => {
    response.render('login' , {
        username: request.session.username || '',
        registrar: false,
    });
};

exports.postLogin = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/')
};

exports.getLogOut = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.getSignUp = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registrar: true,
    })
};

exports.postSignUp = (request, response, next) => {
    const nuevoUsuario = new Usuario(request.body.username, request.body.password);
    nuevoUsuario.save().then(([rows, fieldData]) => {
        response.redirect('/users/login');
    })
    .catch(err => {
        console.log(err);
    });1
};