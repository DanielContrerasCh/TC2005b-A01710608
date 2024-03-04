const filesystem = require('fs');
let ctr = 1;

exports.get_armar = (request, response, next) => {
    response.render(`armar`);
};

exports.post_armar = (request, response, next) => {
    console.log(request.body);
    lista.push(request.body);
    let nombre = request.body.nombre;
    let imagen = request.body.imagen;
    let desc = request.body.descripcion;
    let top = `\nartista ${ctr}:\n${nombre}\n${imagen}\n${desc}\n`;
    ctr++;
    filesystem.appendFileSync('Top.txt', top);

    response.redirect('/');
};

exports.get_list = (request, response, next) => {
    response.render('visualiza', {
        lista: lista
    });
};

exports.get_root = (request, response, next) => {
    response.render(`musica`)
};