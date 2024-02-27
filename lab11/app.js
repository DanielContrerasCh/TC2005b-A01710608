const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/armar', (request, response, next) => {
    console.log(request.body)
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

app.post('/armar', (request, response, next) => {
    console.log(request.body);

    response.redirect('/');
});

app.get('/', (request, response, next) => {
    console.log('Ruta /');
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
    `); //Manda la respuesta
});

app.use((request, response, next) => {
    response.status(404);
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
        <h1 class="title">404, Aquí no existe buena música</h1>
    `);
});

app.listen(3000);