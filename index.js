function total() {
  // setting pizza and pizzaPrice based on selection
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

  // setting size and sizePrice based on selection
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

  // setting topping and toppingPrice based on multiple check boxes selected
  var topping = document.querySelector('input[name="topping"]:checked').value;
  var toppingPrice = 0;
  if (topping === "avocado") {
    toppingPrice + 1;
  }
  if (topping === "broccoli") {
    toppingPrice + 1;
  }
  if (topping === "onions") {
    toppingPrice + 1;
  }
  if (topping === "zucchini") {
    toppingPrice + 1;
  }
  if (topping === "lobster") {
    toppingPrice + 2;
  }
  if (topping === "oyster") {
    toppingPrice + 2;
  }
  if (topping === "salmon") {
    toppingPrice + 2;
  }
  if (topping === "tuna") {
    toppingPrice + 2;
  }
  if (topping === "bacon") {
    toppingPrice + 3;
  }
  if (topping === "duck") {
    toppingPrice + 3;
  }
  if (topping === "ham") {
    toppingPrice + 3;
  }
  if (topping === "sausage") {
    toppingPrice + 3;
  }

  var totalPrice = sizePrice + toppingPrice;
  console.log("totalPrice=" + totalPrice);
}
