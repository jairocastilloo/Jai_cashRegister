let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

let changeDueList = {};
const changeDue = document.getElementById("change-due");
const cashList = document.getElementById("cash-list");
const priceElement = document.getElementById("price-element");
const purchaseBtn = document.getElementById("purchase-btn");
const cash = document.getElementById("cash");

cashList.innerHTML = `
<h2>Change in drawer:</h2><ul class="list-group">
<li class="list-group-item fs-5">Pennies: $${cid[0][1]}</li>
<li class="list-group-item fs-5">Nickels: $${cid[1][1]}</li>
<li class="list-group-item fs-5">Dimes: $${cid[2][1]}</li>
<li class="list-group-item fs-5">Quarter: $${cid[3][1]}</li>
<li class="list-group-item fs-5">Ones: $${cid[4][1]}</li>
<li class="list-group-item fs-5">Fives: $${cid[5][1]}</li>
<li class="list-group-item fs-5">Tens: $${cid[6][1]}</li>
<li class="list-group-item fs-5">Twenties: $${cid[7][1]}</li>
<li class="list-group-item fs-5">Hundreds: $${cid[8][1]}</li>
</ul>`;
priceElement.innerHTML = `<h2>Total: $${price}</h2>`;

purchaseBtn.addEventListener("click", () => {
  changeDue.innerHTML = "";
  changeDueList = {};
  if (parseFloat(cash.value) < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (price === parseFloat(cash.value)) {
    changeDue.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
  } else {
    let sumOfChanges = 0;
    for (let x = 0; x < cid.length; x++) {
      sumOfChanges += cid[x][1];
    }
    let change = parseFloat(cash.value) - price;
    if (change > sumOfChanges) {
      changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS `;
    } else if (sumOfChanges < -0) {
      changeDue.innerHTML = `Status: CLOSED `;
    } else {
      let isPossible = false;
      let cashInput = parseFloat(cash.value);
      changeDue.innerHTML = `Status: OPEN `;
      while (cashInput > parseFloat(price)) {
        cashInput = parseFloat(cashInput).toFixed(2);
        if (
          cashInput >= 100 &&
          cid[8][1] > 0 &&
          cashInput - 100 >= parseFloat(price)
        ) {
          cid[8][1] -= 100;
          cashInput -= 100;
          if (changeDueList[cid[8][0]]) {
            changeDueList[cid[8][0]] += 100;
          } else {
            changeDueList[cid[8][0]] = 100;
          }
        } else if (
          cashInput >= 20 &&
          cid[7][1] > 0 &&
          cashInput - 20 >= parseFloat(price)
        ) {
          cid[7][1] -= 20;
          cashInput -= 20;
          if (changeDueList[cid[7][0]]) {
            changeDueList[cid[7][0]] += 20;
          } else {
            changeDueList[cid[7][0]] = 20;
          }
        } else if (
          cashInput >= 10 &&
          cid[6][1] > 0 &&
          cashInput - 10 >= parseFloat(price)
        ) {
          cid[6][1] -= 10;
          cashInput -= 10;
          if (changeDueList[cid[6][0]]) {
            changeDueList[cid[6][0]] += 10;
          } else {
            changeDueList[cid[6][0]] = 10;
          }
        } else if (
          cashInput >= 5 &&
          cid[5][1] > 0 &&
          cashInput - 5 >= parseFloat(price)
        ) {
          cid[5][1] -= 5;
          cashInput -= 5;
          if (changeDueList[cid[5][0]]) {
            changeDueList[cid[5][0]] += 5;
          } else {
            changeDueList[cid[5][0]] = 5;
          }
        } else if (
          cashInput >= 1 &&
          cid[4][1] > 0 &&
          cashInput - 1 >= parseFloat(price)
        ) {
          cid[4][1] -= 1;
          cashInput -= 1;
          if (changeDueList[cid[4][0]]) {
            changeDueList[cid[4][0]] += 1;
          } else {
            changeDueList[cid[4][0]] = 1;
          }
        } else if (
          cashInput >= 0.25 &&
          cid[3][1] > 0 &&
          cashInput - 0.25 >= parseFloat(price)
        ) {
          cid[3][1] -= 0.25;
          cashInput -= 0.25;
          if (changeDueList[cid[3][0]]) {
            changeDueList[cid[3][0]] += 0.25;
          } else {
            changeDueList[cid[3][0]] = 0.25;
          }
        } else if (
          cashInput >= 0.1 &&
          cid[2][1] > 0 &&
          cashInput - 0.1 >= parseFloat(price)
        ) {
          cid[2][1] -= 0.1;
          cashInput -= 0.1;
          if (changeDueList[cid[2][0]]) {
            changeDueList[cid[2][0]] += 0.1;
          } else {
            changeDueList[cid[2][0]] = 0.1;
          }
        } else if (
          cashInput >= 0.05 &&
          cid[1][1] > 0 &&
          cashInput - 0.05 >= parseFloat(price)
        ) {
          cid[1][1] -= 0.05;
          cashInput -= 0.05;
          if (changeDueList[cid[1][0]]) {
            changeDueList[cid[1][0]] += 0.05;
          } else {
            changeDueList[cid[1][0]] = 0.05;
          }
        } else if (
          cashInput >= 0.01 &&
          cid[0][1] > 0 &&
          cashInput - 0.01 >= parseFloat(price)
        ) {
          cid[0][1] -= 0.01;
          cashInput -= 0.01;
          if (changeDueList[cid[0][0]]) {
            changeDueList[cid[0][0]] += 0.01;
          } else {
            changeDueList[cid[0][0]] = 0.01;
          }
        } else {
          break;
        }
      }

      if (cashInput > parseFloat(price)) {
        changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS`;
      } else {
        let sumOfChangess = 0;
        for (let x = 0; x < cid.length; x++) {
          sumOfChangess += cid[x][1];
        }
        if (sumOfChangess <= 0) {
          changeDue.innerHTML = `Status: CLOSED `;
        }
        Object.keys(changeDueList).forEach((key) => {
          changeDue.innerHTML += `${key}: $${changeDueList[key]} `;
        });
      }
    }

    /*
      Object.keys(changeDueList).forEach((key) => {
     changeDue.innerHTML += `${key}: $${Number.isInteger(changeDueList[key]) ? changeDueList[key] : changeDueList[key].toFixed(2)} `;
   });
    */
    cashList.innerHTML = `
<h2>Change in drawer:</h2><ul class="list-group">
<li class="list-group-item fs-5">Pennies: $${cid[0][1]}</li>
<li class="list-group-item fs-5">Nickels: $${cid[1][1]}</li>
<li class="list-group-item fs-5">Dimes: $${cid[2][1]}</li>
<li class="list-group-item fs-5">Quarter: $${cid[3][1]}</li>
<li class="list-group-item fs-5">Ones: $${cid[4][1]}</li>
<li class="list-group-item fs-5">Fives: $${cid[5][1]}</li>
<li class="list-group-item fs-5">Tens: $${cid[6][1]}</li>
<li class="list-group-item fs-5">Twenties: $${cid[7][1]}</li>
<li class="list-group-item fs-5">Hundreds: $${cid[8][1]}</li>
</ul>`;
    //console.log(changeDue.innerHTML);
  }
});
