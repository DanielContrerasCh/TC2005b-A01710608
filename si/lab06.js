const totalPrice = document.getElementById("total-price");
const counter01 = document.getElementById("counter-card-01");
const counter02 = document.getElementById("counter-card-02");
const counter03 = document.getElementById("counter-card-03");

const totalCS = document.getElementById("cs-price");
const totalGrilled = document.getElementById("grilled-price");
const totalburguer = document.getElementById("burguer-price");

const addCS = document.getElementById("btn-club-sandwich");
const addGrilled = document.getElementById("btn-grilled-cheese");
const addBurguer = document.getElementById("btn-burguer");

const priceClubSandwich = 9.99;
const priceGrilledCheese = 12.99;
const priceBurguer = 14.99;
let total = 0;

function updateTotal() {
  const quantityCS = parseInt(counter01.value) || 0;
  const quantityGrilled = parseInt(counter02.value) || 0;
  const quantityBurguer = parseInt(counter03.value) || 0;

  total =
    quantityCS * priceClubSandwich +
    quantityGrilled * priceGrilledCheese +
    quantityBurguer * priceBurguer;

  totalPrice.innerHTML = "$" + total;
}

function updateItemTotal(counter, totalElement, price) {
  const quantity = parseInt(counter.value) || 0;
  const itemTotal = quantity * price;
  totalElement.innerHTML = "$" + itemTotal;
}

counter01.addEventListener("change", function () {
  updateItemTotal(counter01, totalCS, priceClubSandwich);
});
addCS.addEventListener("click", updateTotal);

counter02.addEventListener("change", function () {
  updateItemTotal(counter02, totalGrilled, priceGrilledCheese);
});
addGrilled.addEventListener("click", updateTotal);

counter03.addEventListener("change", function () {
  updateItemTotal(counter03, totalburguer, priceBurguer);
});
addBurguer.addEventListener("click", updateTotal);

//hacer que el counter si es 1 sea 20*1 y asi hasta n
