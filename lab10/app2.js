const filesystem = require('fs');

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
                </div>
            </div>
        </nav>
    `;

const body = `
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

const http = require('http');

const server = http.createServer( (request, response) => {    

    console.log(request.url);
    
    if (request.url == "/") {

      response.setHeader('Content-Type', 'text/html');
      response.write(header);
      response.write(body);
      response.write(footer);
      response.end();

    } else if (request.url == "/artistas/1") {

      response.write(header);
      response.write(`
      <div class="container">
        <div class="column is-three-fifths is-offset-one-fifth">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://www.macmillerswebsite.com/sites/g/files/g2000016711/files/2023-07/mac-swimming-cover-cutout_03.jpg" alt="Placeholder image">
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
      `);
      response.write(footer);
      response.end();

    } else if (request.url == "/artistas/2") {
        response.write(header);
      response.write(`
      <div class="container">
      <div class="column is-three-fifths is-offset-one-fifth">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://ishopmx.vtexassets.com/arquivos/ids/282965-800-auto?v=638291915237730000&width=800&height=auto&aspect=true" alt="Placeholder image">
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
      `);
      response.write(footer);
      response.end();

    } else if (request.url == "/artistas/3") {
        response.write(header);
        response.write(`
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
      `);
      response.write(footer);
      response.end();

    } else if(request.url == "/armar" && request.method == "GET") {
        response.write(header);
        response.write(`
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
        `);
    } else if(request.url == "/armar" && request.method == "POST") {
        
        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nombre = datos_completos.split('&')[0].split('=')[1];
            console.log(nombre);
            const imagen = datos_completos.split('&')[1].split('=')[1];
            console.log(imagen);
            const desc = datos_completos.split('&')[2].split('=')[1];
            console.log(desc);

            const top = `${nombre}\n${imagen}\n${desc}\n`;
            filesystem.appendFileSync('Top.txt', top);
            response.write(`<script>alert('Los datos fueron guardados exitosamente.');</script>`);
            response.write('<script>setTimeout(function () { window.location.href = "/armar"; }, 1000);</script>');
            return response.end();
        });
        
    } else {

      response.statusCode = 404;

      response.setHeader('Content-Type', 'text/html');
      response.write(header);
      response.write(`<h1 class="title">404, Aquí no existe buena música</h1>`);
      response.write(footer);
      
      response.end();
    }
    
});

server.listen(3000);

