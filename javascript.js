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
