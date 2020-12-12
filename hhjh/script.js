var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

function myFunction() {
  let x = document.getElementById("res-topnav");
  if (x.className === "res-menu") {
    x.className += " responsive";
  } else {
    x.className = "res-menu";
  }
  let y = document.getElementById("fas");
  if (y.className === "fas fa-bars") {
    y.className = " fas fa-chevron-left";
  } else {
    y.className = "fas fa-bars";
  }
}
