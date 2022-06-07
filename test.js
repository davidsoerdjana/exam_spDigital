function total() {
  var pizza = document.querySelector('input[name="pizza"]:checked').value;
  var pizzaPrice = 0;
  if (pizza === "margarita") {
    pizzaPrice = 8;
  }
  if (pizza === "supreme") {
    pizzaPrice = 10;
  }
  if (pizza === "hawai") {
    pizzaPrice = 12;
  }

  var size = document.querySelector('input[name="size"]:checked').value;
  var sizePrice = pizzaPrice;
  if (size === "small") {
    sizePrice - 1;
  }
  if (size === "Medium") {
    sizePrice = pizzaPrice;
  }
  if (size === "Large") {
    sizePrice + 2;
  }

  function getPizzaPrice(name) {
    return pizzaPrice[name];
  }
  function getSizePrice(size) {
    return sizePrice[size];
  }
  function displayPrice() {
    var pizzaName = document.getElementById("name").value;
    var pizzaSize = document.getElementById("size").value;
    var pizzaPrices = getPizzaPrice(pizzaName);
    var sizePrices = getSizePrice(pizzaSize);

    document.getElementById("result").innerHTML = pizzaPrices + sizePrices;
  }
  document.getElementById("name").onchange = displayPrice;
  document.getElementById("size").onchange = displayPrice;
  displayPrice();
}
