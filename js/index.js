// import { setItems } from "../helpers/localStorage";
let orderedList = [
  { foodName: "Peperoni", foodCost: "350", foodCount: "2", amount: "700" },
];

const orderList = document.querySelector(".order-list");
const addButton = document.querySelector(".add-btn");
const input = document.querySelector(".counts");
// const foodName = document.querySelector(".food-name").textContent;
// const foodCost = document.querySelector(".food-cost").textContent;
const addCountBtn = document.getElementById("addCountBtn");
const subCountBtn = document.getElementById("subCountBtn");

addButton.addEventListener("click", addOrder);
addCountBtn.addEventListener("click", addCount);
subCountBtn.addEventListener("click", subCount);

// function handleOrder() {
//   setItems("orderedList", [
//     ...orderedList,
//     { foodName, foodCost, orderedCount },
//   ]);
// }
function addOrder(event) {
  event.preventDefault();
  // const orderDiv = document.createElement("div");
  // orderDiv.classList.add("order");
  // const newOrder = document.createElement("li");
  // newOrder.innerText = foodName;
  // newOrder.classList.add("order-item");
  // orderDiv.appendChild(newOrder);
  orderList.innerHTML = orderedList
    .map(
      (el) => `<div class="order">
  <li>${el.foodName}</li>
  <div class="price">${el.foodCost}</div>
  <div class="count">${el.foodCount}</div>
  <div class="amount">${el.amount}</div>
  <button class="delete">delete</button>
</div>`
    )
    .join("");
}
function addCount() {
  subCountBtn.disabled = false;
  input.value++;
}
function subCount() {
  if (Number(input.value)) {
    input.value--;
  } else {
    subCountBtn.disabled = true;
  }
}
