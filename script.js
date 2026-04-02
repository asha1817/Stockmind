let balance = 10000;

function update() {
  document.getElementById("balance").innerText = "Balance: ₹" + balance;
}

function buy() {
  balance -= 100;
  update();
}

function sell() {
  balance += 100;
  update();
}

function learn() {
  alert("Start learning basics of stock market!");
}
