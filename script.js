let count = 0;

// Increase the counter
function increase() {
  count++;
  document.getElementById("count").innerText = count;
}

// Decrease the counter
function decrease() {
  count--;
  document.getElementById("count").innerText = count;
}

// Reset the counter
function reset() {
  count = 0;
  document.getElementById("count").innerText = count;
}
