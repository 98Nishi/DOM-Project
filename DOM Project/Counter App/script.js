// getting html elements

const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const Value = document.getElementById("Value");

// for decrementing button
decrementBtn.addEventListener("click", () => {
  const val = Number(Value.innerText);
  if (val > 0) {
    Value.innerText = val - 1;
  }
  else {
    alert("Negative value not allowed");
  }
});

// for incrementing button
incrementBtn.addEventListener("click", () => {
  const val = Number(Value.innerText);
  if (val >= 100) {
    alert("100+ values are not allowed");
  } else {
    Value.innerText = val + 1;
  }
});

// for reset button
resetBtn.addEventListener("click", () => {
  Value.innerText = 0;
});
