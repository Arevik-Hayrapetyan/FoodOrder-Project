function setItems(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (e) {
    throw new Error("Please enable local storage!");
  }
}

function getItems(key) {
  try {
    const serializedItem = localStorage.getItem(key);
    return JSON.parse(serializedItem);
  } catch (e) {
    throw new Error("Please enable local storage!");
  }
}

const input = document.querySelector(".counts");

function addOrder() {
  let foodTitle = document.getElementById("content").innerText;
  let foodCost = document.getElementById("food-cost").innerText;
  let cost = Number(foodCost.replace(`Գին $`, ""));
  let count = Number(document.getElementById("count").value);
  let foodInfo = getItems("foodInfo");

  setItems(
    "foodInfo",
    foodInfo !== null && foodInfo.length > 0
      ? [...foodInfo, { id: foodInfo.length, foodTitle, cost, count }]
      : [{ id: 0, foodTitle, cost, count }]
  );
  let currentUrl = window.location.href;
  let nextUrl = currentUrl.replace("menu-itemInfo", "basket");
  location.href = nextUrl;
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
// const tableNum = document.getElementById("menu-item");
// function takeTableNum(selectedNum) {
//   setItems("selectedNum", selectedNum);
//   let getNum = getItems("selectedNum");
//   tableNum.innerHTML = "Սեղանի համարը։" + getNum;
// }
// onChange="takeTableNum(this.options[this.selectedIndex].value)"
