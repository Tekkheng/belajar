const tangkap = document.querySelectorAll("section#a button");

tangkap.forEach(function (pil) {
  pil.addEventListener("click", function () {
    let a = parseInt(prompt("isi nilai a"));
    let b = parseInt(prompt("isi nilai b"));
    let nilai = pil.className;

    if (nilai == "pertambahan") {
      const hasil = tambah(a, b);
      alert("Hasil Penjumlahan : " + hasil);
    } else if (nilai == "pengurangan") {
      const hasil = kurang(a, b);
      alert("Hasil Pengurangan : " + hasil);
    } else if (nilai == "perkalian") {
      const hasil = kali(a, b);
      alert("Hasil Perkalian : " + hasil);
    } else if (nilai == "pembagian") {
      const hasil = bagi(a, b);
      alert("Hasil Pembagian : " + hasil);
    } else {
      alert("ERROR");
    }
  });
});

function tambah(a, b) {
  return a + b;
}
function kali(a, b) {
  return a * b;
}
function kurang(a, b) {
  return a - b;
}
function bagi(a, b) {
  return a / b;
}
