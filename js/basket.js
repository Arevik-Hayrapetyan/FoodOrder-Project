function getItems(key) {
  try {
    const serializedItem = localStorage.getItem(key);
    return JSON.parse(serializedItem);
  } catch (e) {
    throw new Error("Please enable local storage!");
  }
}

function setItems(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (e) {
    throw new Error("Please enable local storage!");
  }
}

let info;
window.onload = function loadInfo() {
  const orderList = document.querySelector(".order-list");

  info = getItems("foodInfo");
  orderList.innerHTML = info.map(
    (el) =>
      `<div class="order">
  <li>${el.foodTitle}</li>
  <div class="price">${el.cost}</div>
  <div class="count">${el.count}</div>
  <div class="amount">${el.count * el.cost}</div>
  <button id="` +
      el.id +
      `" class="delete" onClick="handleDelete(${el.id})">delete</button>
</div>`
  );
};

function handleDelete(id) {
  let newInfo = info.filter((el) => el.id !== id);
  setItems("foodInfo", newInfo);
  window.location.href = window.location.href;
}
