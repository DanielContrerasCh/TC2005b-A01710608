function greet(){
    alert("¡Gracias! juguemos algún día :)");
}

function iniciaFunc(){
    document.write('<link rel="stylesheet" href="styles.css">')
    createTable();

    suma();

    const arr = [-5, 8, 9, -98, 0, 45, 7, 8];
    contador(arr);

    const mat = [[1,2], [2,3], [3,4], [4,5]]
    prom(mat);

    const num = -143;
    inverso(num);

    inicia();
}

function createTable(){
    let num = prompt("Introduce un número");

    document.write(`<h1>Ejercicio 1</h1>`)
    document.write(`<table>`)
    document.write(`<tr><th>Número</th> <th>Cuadrado</th>   <th>Cubo</th></tr>`);

    for(let i = 1; i <= num; i++){
        document.write(`
            <td>${i}</td>
            <td>${i * i}</td>
            <td>${i * i * i}</td></tr>
            `)
    }
    document.write(`</table>`)
}

function suma(){
    document.write(`<h1>Ejercicio 2</h1>`);
    let inicio = Date.now();
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let res = num1 + num2;
    let ans = prompt(`Introduce la respuesta de la siguiente operación: ${num1} + ${num2}`);
    let fin = Date.now();
    let tiempo = (fin - inicio) * 0.001;
    
    if(res == ans){
        alert(`Tu respuesta fue correcta, te tomó ${tiempo} segundos`);
    } else {
        alert(`Tu respuesta fue incorrecta, te tomó ${tiempo} segundos`);
    }

    document.write(`<p>La operación fue: ${num1} + ${num2}</p>`);
    document.write(`<p>La respuesta correcta era: ${res}</p>`);
    document.write(`<p>La respuesta fue calculada en ${tiempo} segundos</p>`);
}

function contador(arr){
    document.write(`<h1>Ejercicio 3</h1>`);
    document.write(`<p>El arreglo es el siguiente [${arr}]</p>`)
    let pos = 0;
    let neg = 0;
    let zero = 0;

    for(i in arr){
        if(arr[i] < 0){
            neg++;
        }
        if(arr[i] == 0){
            zero++;
        }
        if(arr[i] > 0){
            pos++;
        }
    }
    document.write(`<p>En el arreglo hay ${pos} números positivos, ${zero} ceros, y ${neg} números negativos</p>`);
}

function prom(mat){
    document.write(`<h1>Ejercicio 4</h1>`);
    document.write(`<p>El arreglo es el siguiente [${mat}]</p>`)
    const res = [];

    for(i in mat){
        let prom = 0;
        for(j in mat[i]){
            prom = prom + mat[i][j];
        }
        prom = prom / mat[i].length;
        res.push(prom);
    }
    document.write(`<p>El arreglo con los resultados es el siguiente ${res}</p>`);
}

function inverso(num){
    document.write(`<h1>Ejercicio 5</h1>`);
    document.write(`<p>El número a invertir es el siguiente: ${num}</p>`)
    let rev = 0;
    let validate = false;

    if(num < 0){
        num = Math.abs(num);
        validate = true
    }

    while(num > 0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.trunc(num / 10);
    }

    if(validate == true){
        rev = -rev
    }
    document.write(`<p>El número invertido es el siguiente: ${rev}</p>`)
}

function PlaylistGenerator(videojuegos, anime, musica) {
    this.videojuegos = videojuegos;
    this.anime = anime;
    this.musica = musica;
}


PlaylistGenerator.prototype.generarLista = function() {
    let playlist = [];


    playlist.push(this.videojuegos[Math.floor(Math.random() * this.videojuegos.length)]);
    playlist.push(this.videojuegos[Math.floor(Math.random() * this.videojuegos.length)]);
    playlist.push(this.anime[Math.floor(Math.random() * this.anime.length)]);
    playlist.push(this.anime[Math.floor(Math.random() * this.anime.length)]);
    playlist.push(this.musica[Math.floor(Math.random() * this.musica.length)]);
    playlist.push(this.musica[Math.floor(Math.random() * this.musica.length)]);

    return playlist;
}


PlaylistGenerator.prototype.mostrarLista = function(playlist) {
    let listaHTML = "<h3>Lista de Reproducción Aleatoria:</h3><ul>";
    playlist.forEach(function(item){
        listaHTML += "<li>" + item + "</li>";    
    });
    listaHTML += "</ul>";
    document.getElementById("playlist").innerHTML = listaHTML;
}


let generador = new PlaylistGenerator(
    ["The Legend of Zelda", "Final Fantasy", "Super Mario", "Pokemon", "skyrim", "League of Legends"],
    ["Naruto", "One Piece", "Attack on Titan", "Dragon Ball", "Devliman Cry Baby", "Cowboy bebop"],
    ["Queen", "Linkin Park", "BTS", "Eminem", "The strokes", "Arctic monkeys"]
);

function inicia(){
    document.write(`<h1>Ejercicio 5</h1>`);
    document.write(`<p>Mi problema es que luego no sé qué hacer con mis tiempos libres, y ya que mis grandes pasiones
        son los videojuegos, la música y el anime, decidí crear una playlist que me daba opciones para elegir qué hacer
        en esos tiempos libres.
    </p>`)
    document.write(`<div id="playlist"></div>`);
    let lista = generador.generarLista();
    generador.mostrarLista(lista);
}
