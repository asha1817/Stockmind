let balance = 10000;
let streak = localStorage.getItem("streak") || 1;

const tips = [
  "Always use stop loss",
  "Don't invest blindly",
  "Learn before trading",
  "Control emotions"
];

const markets = [
  "Market is bullish today",
  "Market is slightly down",
  "Market is sideways"
];

document.getElementById("market").innerText =
  markets[new Date().getDay() % markets.length];

document.getElementById("tip").innerText =
  tips[new Date().getDay() % tips.length];

document.getElementById("streak").innerText =
  "Day " + streak;

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(page).style.display = "block";
}

showPage("home");

function buy() {
  balance -= 100;
  update();
}

function sell() {
  balance += 100;
  update();
}

function update() {
  document.getElementById("balance").innerText = "₹" + balance;
}

function check(ans) {
  if (ans === 1) {
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Wrong!";
  }
}
