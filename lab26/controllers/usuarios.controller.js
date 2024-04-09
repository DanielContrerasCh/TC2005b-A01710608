const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login' , {
        username: request.session.username || '',
        registrar: false,
        error: error,
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.postLogin = (request, response, next) => {
    Usuario.fetchOne(request.body.username, request.body.password).then(([users, fieldData]) => {
        if(users.length == 1) {
            // users[0] contiene el objeto de la respuesta de la consulta
            const user = users[0];
            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        Usuario.getPermisos(user.username).then(([permisos, fieldData]) => {
                            request.session.isLoggedIn = true;
                            request.session.permisos = permisos;
                            console.log("aqui deberia ir el permisos");
                            request.session.username = user.username;
                            return request.session.save(err => {
                                response.redirect('/armar/vis');
                            });
                        }).catch((error) => {console.log(error);});
                    } else {
                        request.session.error = 'El usuario y/o contraseña son incorrectos.';
                        return response.redirect('/users/login');
                    }
                }).catch(err => {
                    response.redirect('/users/login');
                });
        } else {
            request.session.error = 'El usuario y/o contraseña son incorrectos.';
            response.redirect('/users/login');
        }        
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getLogOut = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.getSignUp = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registrar: true,
        error: error,
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    })
};

exports.postSignUp = (request, response, next) => {
    const nuevoUsuario = new Usuario(request.body.username, request.body.password);
    nuevoUsuario.save().then(([rows, fieldData]) => {
        response.redirect('/users/login');
    })
    .catch(err => {
        console.log(err);
        request.session.error = 'Nombre de usuario inválido';
        response.redirect('/users/signUp');
    });
};