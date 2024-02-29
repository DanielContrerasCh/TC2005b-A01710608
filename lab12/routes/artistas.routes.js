const filesystem = require('fs');
let ctr = 1;

const express = require('express');

const router = express.Router();

const header = `    
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Música</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <nav class="navbar is-black" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://www.unhcr.org/spotlight/wp-content/uploads/sites/55/2021/05/Icon-test-House-white.png" width="30" height="28">
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="/">
                        Home
                    </a>

                    <a class="navbar-item" href="/armar">
                        Arma tu propio top
                    </a>

                    <a class="navbar-item" href="/error">
                        Error 404
                    </a>
                </div>
            </div>
        </nav>
    `;

const footer = `
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        <strong>Laboratorio 10</strong> por Daniel Contreras Chávez.
                    </p>
                </div>
            </footer>
        </body>
    </html>
`;

router.get('/armar', (request, response, next) => {
    send_response = header + `
        <section class="section">
            <div class="container">
                <h2 class="title">Arma tu top, será guardado en un txt</h2>
                <form action="/armar" method="POST">
                    <div class="field">
                        <label class="label">Nombre del artista / Banda</label>
                            <div class="control">
                                <input class="input" type="text" name="nombre">
                            </div>
                    </div>
                    <div class="field">
                        <label class="label">Imagen</label>
                            <div class="control">
                                <input class="input" type="text" name="imagen">
                            </div>
                    </div>
                    <div class="field">
                        <label class="label">Descripción</label>
                            <div class="control">
                                <textarea class="textarea" name="descripcion"></textarea>
                            </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-primary">Armar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    ` + footer;
    response.send(send_response);
});

router.use('/artistas/1', (request, response, next) => {
    send_response = header + `
        <div class="container">
            <div class="column is-three-fifths is-offset-one-fifth">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://www.macmillerswebsite.com/sites/g/files/g2000016711/files/2023-07/mac-swimming-cover-cutout_03.jpg" 
                            alt="Placeholder image">
                        </figure>
                    </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Mac Miller</p>
                        </div>
                    </div>

                    <div class="content">
                        Malcolm James McCormick (Pittsburgh, Pensilvania, 19 de enero de 1992-Studio City, California, 
                        7 de septiembre de 2018), conocido como Mac Miller, fue un rapero, 
                        cantante y productor discográfico estadounidense.
                    </div>
                </div>
            </div>
        </div>
    ` + footer;
    response.send(send_response);
});

router.use('/artistas/2', (request, response, next) => {
    send_response = header + `
        <div class="container">
            <div class="column is-three-fifths is-offset-one-fifth">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://ishopmx.vtexassets.com/arquivos/ids/282965-800-auto?v=638291915237730000&width=800&height=auto&aspect=true" 
                            alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Joji</p>
                            </div>
                        </div>

                        <div class="content">
                            George Kusunoki Miller (Osaka, 18 de septiembre de 1992, conocido por su nombre artístico Joji y 
                            anteriormente como Filthy Frank (o Pink Guy) es un cantautor, músico, productor, actor, 
                            expersonalidad de Internet y YouTuber nipo-australiano.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ` + footer;
    response.send(send_response);
});

router.use('/artistas/3', (request, response, next) => {
    send_response = header + `
        <div class="container">
            <div class="column is-three-fifths is-offset-one-fifth">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://enfoquenoticias.com.mx/wp-content/uploads/2023/04/artic.jpeg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Arctic Monkeys</p>
                            </div>
                        </div>

                        <div class="content">
                            Arctic Monkeys (Español: Los Monos Árticos) es una banda británica de rock alternativo, 
                            formada en Sheffield, Reino Unido. El grupo está compuesto por el guitarrista principal y vocalista Alex Turner, 
                            el guitarrista Jamie Cook, el baterista Matt Helders y el bajista Nick O'Malley. 
                            El bajista original de la banda, Andy Nicholson, dejó el proyecto en 2006 poco después del 
                            lanzamiento del álbum debut de la banda.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ` + footer;
    response.send(send_response);
});

router.post('/armar', (request, response, next) => {
    console.log(request.body);
    let nombre = request.body.nombre;
    let imagen = request.body.imagen;
    let desc = request.body.descripcion;
    let top = `\nartista ${ctr}:\n${nombre}\n${imagen}\n${desc}\n`;
    ctr++;
    filesystem.appendFileSync('Top.txt', top);

    response.redirect('/');
});

router.get('/', (request, response, next) => {
    response.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Música</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <nav class="navbar is-black" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://www.unhcr.org/spotlight/wp-content/uploads/sites/55/2021/05/Icon-test-House-white.png" width="30" height="28">
                </a>
  
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
  
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="/">
                        Home
                    </a>
  
                    <a class="navbar-item" href="/armar">
                        Arma tu propio top
                    </a>

                    <a class="navbar-item" href="/error">
                        Error 404
                    </a>
                </div>
            </div>
        </nav>
        <section class="section">
            <div class="container">
                <h1 class="subtitle">Mi sitio web sobre mis artistas y bandas favoritos</h1>
            </div>  
            <div class="container">
                <p>Aquí puedes encontrar información sobre ellos.</p>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <h2 class="title">Mi top 3</h2>
                <ul>
                    <li><a href="/artistas/1">Mac Miller</a></li>
                    <li><a href="/artistas/2">Joji</a></li>
                    <li><a href="/artistas/3">Arctic Monkeys</a></li>
                </ul>
            </div>
        </section>
        <footer class="footer">
            <div class="content has-text-centered">
              <p>
                <strong>Laboratorio 10</strong> por Daniel Contreras Chávez.
              </p>
            </div>
            </footer>
            </body>
            </html>
    `);
});

module.exports = router;