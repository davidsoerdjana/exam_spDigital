function supremeIsChecked() {
  if (document.getElementById("supreme").checked) {
    document.getElementById("avocado").disabled = true;
    document.getElementById("tuna").disabled = true;
    document.getElementById("duck").disabled = true;
    document.getElementById("sausage").disabled = true;
    document.getElementById("oyster").disabled = false;
    document.getElementById("salmon").disabled = false;
    document.getElementById("ham").disabled = false;
    document.getElementById("bacon").disabled = false;
    document.getElementById("lobster").disabled = false;
    document.getElementById("broccoli").disabled = false;
    document.getElementById("onions").disabled = false;
    document.getElementById("zucchini").disabled = false;
  }
}

function margaritaIsChecked() {
  if (document.getElementById("margarita").checked) {
    document.getElementById("lobster").disabled = true;
    document.getElementById("oyster").disabled = true;
    document.getElementById("salmon").disabled = true;
    document.getElementById("bacon").disabled = true;
    document.getElementById("duck").disabled = true;
    document.getElementById("sausage").disabled = true;
    document.getElementById("avocado").disabled = false;
    document.getElementById("tuna").disabled = false;
    document.getElementById("ham").disabled = false;
    document.getElementById("broccoli").disabled = false;
    document.getElementById("onions").disabled = false;
    document.getElementById("zucchini").disabled = false;
  }
}

function hawaiIsChecked() {
  if (document.getElementById("hawai").checked) {
    document.getElementById("avocado").disabled = true;
    document.getElementById("lobster").disabled = true;
    document.getElementById("oyster").disabled = true;
    document.getElementById("salmon").disabled = true;
    document.getElementById("bacon").disabled = false;
    document.getElementById("duck").disabled = false;
    document.getElementById("sausage").disabled = false;
    document.getElementById("tuna").disabled = false;
    document.getElementById("ham").disabled = false;
    document.getElementById("broccoli").disabled = false;
    document.getElementById("onions").disabled = false;
    document.getElementById("zucchini").disabled = false;
  }
}

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
