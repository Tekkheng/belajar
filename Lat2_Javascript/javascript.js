// const bikinbuttonmain = document.createElement("button");
// isi = document.createTextNode("Mulai Main");
// bikinbuttonmain.appendChild(isi);
// bikinbuttonmain.setAttribute("class", "btn btn-primary");
// document.body.appendChild(bikinbuttonmain);

// bikinbuttonmain.addEventListener("click", function () {
//   let lagi = true;
//   while (lagi == true) {
//     const player = prompt("kertas,gunting,batu");
//     bot = comp();
//     result = hasil(player, bot);

//     alert(
//       "PilihanMu : " +
//         player +
//         "\n" +
//         "PilihanBot : " +
//         bot +
//         "\n" +
//         "Hasil : " +
//         result
//     );
//     lagi = confirm("main lagi ? OK or Cancel ?");
//   }

//   console.log("Player : " + player);
//   console.log("Bot : " + bot);
//   console.log("Hasil : " + result);
// });

// function comp() {
//   const pilcomp = Math.random();
//   if (pilcomp < 0.34) return "kertas";
//   if (pilcomp >= 0.34 && pilcomp < 0.54) return "gunting";
//   return "batu";
// }
// function hasil(pemain, komputer) {
//   if (pemain == komputer) return "Seri!";
//   if (pemain == "kertas") return komputer == "batu" ? "You Win" : "You Lose";
//   if (pemain == "batu") return komputer == "gunting" ? "You Win" : "You Lose";
//   if (pemain == "gunting") return komputer == "kertas" ? "You Win" : "You Lose";
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tangkapnilai = document.querySelectorAll("section#b img");
tangkapnilai.forEach(function (pil) {
  pil.addEventListener("click", function () {
    player = pil.className;
    komp = bot();
    winner = penentu(player, komp);

    console.log(
      "user : " + player + "\n" + "bot : " + komp + "\n" + "Result : " + winner
    );

    domparenthasil = document.querySelectorAll("div")[1];
    domparenthasil.removeAttribute("hidden");

    domhasiluser = domparenthasil.querySelectorAll("img")[1];
    domhasiluser.setAttribute("src", "img/" + player + ".png");

    console.log(domparenthasil);

    animasi();
    setTimeout(function () {
      ubahgambarbot = document.querySelector("section#a img");
      ubahgambarbot.setAttribute("src", "img/" + komp + ".png");

      domhasilbot = domparenthasil.querySelector("img");
      domhasilbot.setAttribute("src", "img/" + komp + ".png");
    }, 2000);

    animasihasil();
    setTimeout(function () {
      domhasil = domparenthasil.querySelector("span p");
      domhasil.innerText = winner;
    }, 2000);
  });
});

function bot() {
  nilaibot = Math.random();
  if (nilaibot < 0.34) return "kertas";
  if (nilaibot >= 0.34 && nilaibot < 0.54) return "gunting";
  return "batu";
}
function penentu(user, enemy) {
  if (user == enemy) return "Draw";
  if (user == "kertas") return enemy == "batu" ? "You Win" : "You Lose";
  if (user == "batu") return enemy == "gunting" ? "You Win" : "You Lose";
  if (user == "gunting") return enemy == "kertas" ? "You Win" : "You Lose";
}
function animasi() {
  ubahgambarbot = document.querySelector("section#a img");
  animasigambar = ["kertas", "gunting", "batu"];
  let i = 0;
  getWaktu = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - getWaktu > 2000) {
      clearInterval;
      return;
    }
    if (i == animasigambar.length) {
      i = 0;
    }
    ubahgambarbot.setAttribute("src", "img/" + animasigambar[i++] + ".png");
  }, 200);
}
function animasihasil() {
  domparenthasil = document.querySelectorAll("div")[1];
  domhasil = domparenthasil.querySelector("span p");
  animasihasil = ["You Lose", "You Win", "Draw"];
  let i = 0;
  getWaktu = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - getWaktu > 2000) {
      clearInterval;
      return;
    }
    if (i == animasihasil.length) {
      i = 0;
    }
    domhasil.innerText = animasihasil[i++];
  }, 200);
}
