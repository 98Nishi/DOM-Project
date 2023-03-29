// keydown-keyup


let container = document.getElementById("container");
let display = document.getElementById("display");

// adding a keydown event listener to the document
document.addEventListener("keydown", function (event) {
  display.style.color = "Orange";
  display.innerText = event.key + " is---{{keyDown}}";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (event) {
  display.style.color = "Red";
  display.innerText = event.key + " is---{{keyUp}}";
});


