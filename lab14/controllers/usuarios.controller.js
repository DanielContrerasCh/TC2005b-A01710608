exports.getLogin = (request, response, next) => {
    response.render('login' , {
        username: request.session.username || '',
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