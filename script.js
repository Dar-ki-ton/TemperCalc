// declaring variables
var fahrIn = document.getElementById("fahr-in");
var celsBtn = document.getElementById("cels-convert");
var celsOutEl = document.getElementById("cels-out");
var celsIn = document.getElementById("cels-in");
var fahrBtn = document.getElementById("fahr-convert");
var fahrOutEl = document.getElementById("fahr-out");

// event listener
celsBtn.addEventListener("click", celsConvert);

// event function
function celsConvert() {
  // input
  var fahrF = parseInt(fahrIn.value);
  fahrIn.value = "";

  // process
  var celsius = (fahrF - 32) * (5 / 9);
  celsius = celsius.toFixed(1);

  // output
  celsOutEl.innerHTML = `${celsius}°C`;
  fahrIn.style.backgroundColor = `#26d978`;
}

// event listener
fahrBtn.addEventListener("click", fahrConvert);

// event function
function fahrConvert() {
  // input
  var celsC = parseInt(celsIn.value);
  celsIn.value = "";

  // process
  var fahrenheit = celsC * (5 / 9) + 32;
  fahrenheit = fahrenheit.toFixed(1);

  // output
  fahrOutEl.innerHTML = `${fahrenheit}°F`;
  celsIn.style.backgroundColor = `#26d978`;
}
