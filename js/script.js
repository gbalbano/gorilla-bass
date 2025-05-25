let vidaGorila = 100;
let humanos = Array(100).fill(true); // true = vivo, false = morto

window.onload = function () {
  renderizarHumanos();
  atualizarStatus();
};

function renderizarHumanos() {
  const campo = document.getElementById("campoHumanos");
  campo.innerHTML = "";
  humanos.forEach((vivo, i) => {
    const div = document.createElement("div");
    div.className = "humano";
    if (!vivo) div.classList.add("morto");
    div.id = `humano-${i}`;
    campo.appendChild(div);
  });
}

function atualizarStatus() {
  document.getElementById("vidaGorila").innerText = vidaGorila;
  const vivos = humanos.filter(h => h).length;
  document.getElementById("humanosRestantes").innerText = vivos;
}

function log(msg) {
  const mensagens = document.getElementById("mensagens");
  mensagens.innerHTML += `<p>${msg}</p>`;
}
