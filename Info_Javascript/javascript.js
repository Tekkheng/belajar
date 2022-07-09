const ubahjudul = document.getElementsByTagName("h2")[0];
ubahjudul.innerHTML = "<h1>JUDULBARU</h1>";
ubahjudul.classList.add("tes", "containes");

function kliksaya() {
  const parentjudul = document.querySelector("h2");
  const ubahjudul = document.getElementsByTagName("h1")[0];
  parentjudul.removeChild(ubahjudul);

  const konekelemen = document.querySelectorAll("div")[4];

  const buatelemenbaru = document.createElement("h4");
  const buatisinya = document.createTextNode("Akheng Disini");

  buatelemenbaru.appendChild(buatisinya);
  konekelemen.appendChild(buatelemenbaru);

  const konekhr = document.querySelector("hr");
  konekelemen.insertBefore(buatelemenbaru, konekhr);

  parentjudul.removeAttribute("class", "card-title text-center");
  konekelemen.removeChild(parentjudul);

  const konekh4 = document.querySelector("h4");
  konekh4.setAttribute("name", "tekkheng");
  konekh4.setAttribute("class", "text-center");
  konekh4.classList.replace("text-center", "bg-light");
  konekh4.classList.add("text-dark", "text-center");
  konekh4.classList.remove("text-center");

  const sectB = document.querySelector("section#b ul");
  const ditimpak = document.getElementsByTagName("li")[3];
  const timpak = document.createElement("span");
  const isitimpak = document.createTextNode("Akheng_Gaming");
  timpak.appendChild(isitimpak);
  sectB.replaceChild(timpak, ditimpak);
}
const sectA = document.getElementById("a");
sectA.removeAttribute("class", "article");

const konek = document.querySelector("section#a p");

konek.addEventListener("dblclick", function () {
  const parentb = document.querySelector("section#b ul");
  const li5 = parentb.querySelector("li:nth-child(4)");

  const creates = document.createElement("li");
  const isicreates = document.createTextNode("akheng");
  creates.appendChild(isicreates);
  parentb.replaceChild(creates, li5);
  console.log(parentb);
});

const parent = document.querySelector("section#b ul");
const li = parent.querySelector("li:nth-child(2)");
const build2 = document.createElement("span");
const isibuild2 = document.createTextNode("Akheng_Gaming");
build2.appendChild(isibuild2);
li.after(build2);

// Catatan
// =================================================================
// var,let,const cth
// =================================================================
// tipe2 Data pada javascript
// String,Integer,Boolean,Real
// =================================================================
// Selector :
// getElementById("");
// getElementsByClassName("")[];
// getElementsByTagName("")[];
// querySelector("li:nth-child()");
// querySelectorAll("")[];
// =================================================================
// Manipulasi Element DOM :
// innerHTML("<>");
// innerText("");
// style.backgroundColor = "";

// setAttribute("id",2);
// removeAttribute("class","btn-primary text-light");
// getAttribute("id");

// classList.add("text-center","text-light");
// classList.remove("rounded");
// classList.replace("class-lama","class-baru");
// classList.toggle("bg-dark");
// classList.contains("");  -> nanya apakahada class dengan nama ()
// classList.item(0); -> mencari isi dari class dengan index[]
// ==================================================================
// Manipulasi Node DOM :
// createElement("h4");
// createTextNode("isi dari h4");
// .appendChild();
// .insertBefore(insert,before);
// .removeChild();
// .replaceChild(databaru,datalama);
// ==================================================================
// ==================================================================
// Event :
// cara lama :
// onclick,onchange
//  const p2 = document.getElementById('a');
//  p2.onclick = ubahwarna;
//  p2.onclick = ubahwarna(){
//   p2.style.backgroundColor = "red";
//  };
// cara baru :
// element.addEventListener("click", kliksaya);
// element.addEventListener("click", function nama(){
//   alert('tes');
// });
// .insertBefore(insert,before);
// .removeChild();
// .replaceChild(databaru,datalama);
// ==================================================================

const tes = document.createElement("section");
tes.setAttribute("id", "2");
const div = document.querySelector("section#b");
div.after(tes);

const div2 = document.getElementById("2");
const input = document.createElement("input");
input.setAttribute("type", "text");
div2.appendChild(input);

const button = document.querySelector("a");
button.addEventListener("click", valid);
function valid() {
  if (input.value.length <= 5 && input.value.length > 0) {
    alert("tersubmit ");
  } else if (input.value.length > 5) {
    alert("huruf maksimal 5");
  } else {
    alert("Data kosong");
  }
}
