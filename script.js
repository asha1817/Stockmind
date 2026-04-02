let balance = 10000;
let streak = localStorage.getItem("streak") || 1;

const tips = [
  "Always use stop loss",
  "Don't invest blindly",
  "let balance = 10000;
let pl = 0;

const markets = [
  ["Bullish", "Strong buying in banks"],
  ["Bearish", "Global weakness"],
  ["Sideways", "No clear trend"]
];

const tips = [
  "Cut losses early",
  "Follow trend",
  "Avoid overtrading",
  "Be patient"
];

let today = new Date().getDay();

document.getElementById("market").innerText = markets[today % 3][0];
document.getElementById("reason").innerText = markets[today % 3][1];
document.getElementById("tip").innerText = tips[today % 4];

function show(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

function buy() {
  balance -= 100;
  pl -= 10;
  update();
}

function sell() {
  balance += 100;
  pl += 10;
  update();
}

function update() {
  document.getElementById("balance").innerText = balance;
  document.getElementById("tradeBalance").innerText = balance;
  document.getElementById("pl").innerText = (pl >= 0 ? "+" : "") + pl;
} before trading",
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
