const originalButton = document.getElementById("item1");
let cant = 1;
const precioSandalias = 4;
const precioCoqutea = 400;
const precioYeezy = 800;

function seleccionaUnits() {
    originalButton.parentNode.innerHTML = `
    <div class="field is-grouped">
      <p class="control">
        <button onclick="decremento()" id="menos" class="button is-danger is-small" disabled>
        -
        </button>
      </p>
      <p id="cantidad" class="control">
      1
      </p>
      <p class="control">
        <button onclick="incremento()" id="mas" class="button is-link is-small">
        +
        </button>
      </p>
    </div>
    
    <div class="media-content">
    <div class="media-left">
        <button id="confirmar" class="button is-primary">
            <strong>Confirmar</strong>
        </button>
    </div>
</div>
  `;
  
  const botonConfirmar = document.getElementById("confirmar");
  botonConfirmar.addEventListener("click", agregarAlCarrito);
}

function incremento() {
  cant = cant + 1
  document.getElementById("cantidad").innerText = cant;
  let botonmenos = document.getElementById("menos");

  if(cant != 1){
      botonmenos.removeAttribute("disabled");
  }
}

function decremento() {

  cant = cant - 1;
  document.getElementById("cantidad").innerText = cant;
  let botonmenos = document.getElementById("menos");

  if(cant == 1){
      botonmenos.setAttribute('disabled', '');
  }
}

function agregarAlCarrito() {

  const nombreProducto = document.getElementById("producto1").textContent;
  const precioProducto = document.getElementById("precio1").textContent;


  const cantidadSeleccionada = document.getElementById("cantidad").textContent;


  const nuevoDivisor = document.createElement("hr")
  nuevoDivisor = document.classList.add("dropdown-divider")
  const nuevoItem = document.createElement("div");
  nuevoItem.classList.add("dropdown-item");
  nuevoItem.innerHTML = `
    <p>${nombreProducto}</p>
    <p>Cantidad: ${cantidadSeleccionada}</p>
    <p>Precio: $${precioProducto}</p>
  `;
  const contenedorMenu = document.getElementById("carrito");
  contenedorMenu.appendChild(nuevoItem);

  alert("¡Producto agregado al carrito!");
}




originalButton.addEventListener('click', seleccionaUnits);


