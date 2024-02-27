const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta', (request, response, next) => {
    console.log(request.body)
    response.send('Respuesta de la ruta "/ruta"'); 
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

app.listen(3000);