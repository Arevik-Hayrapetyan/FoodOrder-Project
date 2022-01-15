const orderList = document.querySelector(".order-list");
const addButton = document.querySelector(".add-btn");
const input = document.querySelector(".counts");
const foodName = document.querySelector(".food-name").textContent;
const addCountBtn = document.getElementById("addCountBtn");
const subCountBtn = document.getElementById("subCountBtn");

addButton.addEventListener("click", addOrder);
addCountBtn.addEventListener("click", addCount);
subCountBtn.addEventListener("click", subCount);

function getFoodName() {
  return foodName;
}

function addOrder(event) {
  event.preventDefault();
  const orderDiv = document.createElement("div");
  orderDiv.classList("order");
  const newOrder = document.createElement("li");
  newOrder.innerText = foodName;
  newOrder.classList.add("order-item");
  orderDiv.appendChild(newOrder);
}
function addCount() {
  input.value++;
  subCountBtn.disabled = false;
}
function subCount() {
  if (input.value) {
    subCountBtn.disabled = true;
  }
  subCountBtn = false;
  input.value--;
}
