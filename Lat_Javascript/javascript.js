const bikinbutton = document.createElement("button");
const isi = document.createTextNode("button baru");
bikinbutton.appendChild(isi);
document.body.appendChild(bikinbutton);
bikinbutton.setAttribute("class", "btn btn-danger mt-4");

bikinbutton.addEventListener("click", lat);
function lat() {
  const red = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 155 + 1);
  const green = Math.round(Math.random() * 55 + 1);

  document.body.style.backgroundColor =
    "rgb(" + red + "," + blue + "," + green + ")";
}

const h1 = document.querySelector("h1");

const button = document.createElement("button");
const isibutton = document.createTextNode("Tombol");
button.appendChild(isibutton);
button.setAttribute("class", "btn btn-primary");
h1.after(button);

const kotakmerah = document.createElement("div");
kotakmerah.setAttribute("class", "kotakmerah");
button.after(kotakmerah);

const slidermerah = document.createElement("input");
slidermerah.setAttribute("type", "range");
slidermerah.setAttribute("min", "0");
slidermerah.setAttribute("max", "255");
kotakmerah.after(slidermerah);
console.log(slidermerah.value);

slidermerah.addEventListener("change", function () {
  console.log(slidermerah.value);
  const merah = slidermerah.value;

  const konekmerah = document.querySelectorAll("div")[3];
  konekmerah.style.backgroundColor = "rgb(" + merah + ",100,100)";
});

const kotakhijau = document.createElement("div");
kotakhijau.setAttribute("class", "kotakhijau mt-5");
slidermerah.after(kotakhijau);

const sliderhijau = document.createElement("input");
sliderhijau.setAttribute("type", "range");
sliderhijau.setAttribute("min", "0");
sliderhijau.setAttribute("max", "255");
kotakhijau.after(sliderhijau);

sliderhijau.addEventListener("input", function () {
  const hijau = sliderhijau.value;
  const konekhijau = document.querySelectorAll("div")[4];
  konekhijau.style.backgroundColor = "rgb(100," + hijau + ",100)";
});

const kotakbiru = document.createElement("div");
kotakbiru.setAttribute("class", "kotakbiru mt-5");
sliderhijau.after(kotakbiru);

const sliderbiru = document.createElement("input");
sliderbiru.setAttribute("type", "range");
sliderbiru.setAttribute("min", "0");
sliderbiru.setAttribute("max", "255");
kotakbiru.after(sliderbiru);

sliderbiru.addEventListener("input", function () {
  const biru = sliderbiru.value;
  const hijau = sliderhijau.value;
  const merah = slidermerah.value;
  const konekbiru = document.querySelectorAll("div")[5];
  konekbiru.style.backgroundColor =
    "rgb(" + merah + "," + hijau + "," + biru + ")";
});
