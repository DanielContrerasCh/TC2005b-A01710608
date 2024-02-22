const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const str = "Hola este es el ejercicio dos, este texto será escrito en ej.txt";

function prom(arr) {
    let res = 0;
    for(let i of arr){
        res = res + i;
    }
    res = res / arr.length;
    console.log(res);
}

function wr(str){
    const filesystem = require('fs');
    filesystem.writeFileSync('ej.txt', str);
}

function fibonacci(num){
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    console.log(b);
}


prom(arr);
wr(str);
fibonacci(5);

const http = require('http');

const server = http.createServer((request,response) =>{
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    
<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foundation for Sites</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/css/foundation.min.css" crossorigin="anonymous">

    <link rel="stylesheet" href="css/app.css">
  </head>
<body>
  <header>
    <a class="button expanded" href="../Laboratiorio1.html">← Regresar a los anteriores laboratorios</a>
  </header>


  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="large-12 cell">
        <h1>¿Qué es League of Legends?</h1>
      </div>
    </div>

    <div class="grid-x grid-padding-x ">
      <div class="large-12 cell">
        <div class="callout">
          <h3>League of Legends (también conocido por sus siglas LoL), es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games.</h3>
          <p>En el juego, dos equipos de cinco jugadores luchan en un combate jugador contra jugador, cada equipo ocupando y defendiendo su mitad del mapa. 
            Cada uno de los diez jugadores controla un personaje, conocido como "campeón", con habilidades únicas y diferentes estilos de juego. </p>

          <div class="grid-x grid-padding-x align-center">
            <div class="large-4 medium-4 cell">
              <p><strong>Minions</strong><br/>Los minions son una parte importante del juego, pues mediante eliminarlos, obtienes oro para seguir mejorando a tu campeón.</p>
              <img src="https://static1-es.millenium.gg/articles/1/46/39/1/@/247006-minion-article_image_d-1.jpg">
            </div>
            <div class="large-4 medium-4 cell">
              <p><strong>Torres</strong><br/>Las torres son uno de los objetivos del juego, debes derribarlas para poder acercarte a la victoria.</p>
              <img src="https://www.esportmaniacos.com/wp-content/uploads/2022/08/bug-torretas-780x470.jpg">
            </div>
          </div>
          <div class="grid-x grid-padding-x align-center">
            <div class="large-4 medium-4 medium-push-2 cell">
              <p><strong>Inhibidores</strong><br/>Los inhibidores son los que se encuentran más cerca de la base del enemigo, de igual manera que las torres, hay que derribarlos para 
              acercarse más a la victoria y generar "super minions"</p>
              <img src="https://pm1.aminoapps.com/6236/775abe3b4fb0a3ccea539ca409083fd8e34c5028_hq.jpg">
            </div>
            <div class="large-4 medium-4 medium-pull-2 cell">
              <p><strong>Nexo</strong><br/>El nexo es el centro de la base enemiga, es el que se debe derribar para obtener la victoria, está resguardado por 2 torretas y se encuentra enfrente
              del punto de reaparición del enemigo.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMjajxWuvbxK0fJ1v4JgTyeV7f5nBwBf94w&usqp=CAU">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-x grid-padding-x align-center">
      <div class="large-8 medium-8 cell">
        <h5>Campeones:</h5>

        <div class="grid-x grid-padding-x">
          <div class="large-12 cell">
            <div class="primary callout">
              <p>En League of Legends existen más de 140 campeones, cada uno con habilidades y roles únicos. Es por eso que me gusta tanto, la variedad lo vuelve un juego en el que es imposible aburrirse, 
                pues puedes siempre buscar otro campeón para dominar.
              </p>
              <p>
                <strong>En el juego hay 5 roles:</strong>
              </p>
            </div>
          </div>
        </div>  
        <div class="grid-x grid-padding-x">
          <div class="large-6 medium-6 cell">
            <div class="primary callout">
              <p><strong>Top</strong></p>
              <p>Es el que se encuentra en la línea superior del mapa, en esta línea usualmente se juegan campeones del tipo luchador o tanque. 
                Se encarga de ser el que absorbe el daño del otro equipo.
              </p>
              <img src="https://lol-script.com/wp-content/uploads/2023/07/lol-top-lane.webp">
            </div>
          </div>
          <div class="large-6 medium-6 cell">
            <div class="primary callout">
              <p><strong>Mid</strong></p>
              <p>Es el que se encuentra en la línea de en medio del mapa, en esta línea usualmente se juegan campeones del tipo mago, o asesinos.
                Se encarga de proporcionar mucho daño en poco tiempo.
              </p>
              <img src="https://lol-script.com/wp-content/uploads/2023/07/league-of-legends-wild-rift-ios-android-map-mid-lane_jpg_820.webp">
            </div>
          </div>
        </div>
        <div class="grid-x grid-padding-x">
          <div class="large-4 medium-4 small-4 cell">
            <div class="primary callout">
              <p><strong>ADC</strong></p>
              <p>Es el que se encuentra en la línea de abajo del mapa, en esta línea, a diferencia de otras, juegan 2 personas, una tiene el rol de ADC y la otra
                tiene el rol de soporte, en el caso del primer rol, usualmente se juegan campeones del tipo tirador. Se encarga de ser la principal fuente de daño del equipo.</p>
                <img src="https://slang.net/img/slang/lg/bot_3117.png">
            </div>
          </div>
          <div class="large-4 medium-4 small-4 cell">
            <div class="primary callout">
              <p><strong>Support</strong></p>
              <p>Es el que se encuentra en la línea de en abajo del mapa, en este rol se juegan campeones de tipo sanadores o de control de masas. 
                Se encarga de dar apoyo al ADC y al resto del equipo.</p>
                <img src="https://slang.net/img/slang/lg/bot_3117.png">
            </div>
          </div>
          <div class="large-4 medium-4 small-4 cell">
            <div class="primary callout">
              <p><strong>Jungla</strong></p>
              <p>Es el área que se encuentra entre las demás líneas del mapa, en este rol se juegan usualmente campeones del tipo luchador, o tanques. Se encarga de apoyar al resto de
                líneas y controlar objetivos.
              </p>
              <img src="https://slang.net/img/slang/lg/bot_3117.png">
            </div>
          </div>
        </div> 
      </div>
      
    </div>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>

    `);
    response.end();
});

server.listen(3000);