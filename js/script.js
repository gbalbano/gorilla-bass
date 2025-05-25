let vidaDoGorila = 100;
let humanos = Array(100).fill(true);

window.onload = function () {
  renderizarHumanos();
  atualizarStatus();
  setInterval(ataqueDosHumanos, 5000);
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
  document.getElementById("vidaGorila").innerText = vidaDoGorila;
  const vivos = humanos.filter(h => h).length;
  document.getElementById("humanosRestantes").innerText = vivos;
}

function adicionarMensagemNoLog(texto) {
  const mensagens = document.getElementById("mensagens");
  mensagens.innerHTML += "<p>" + texto + "</p>";
  mensagens.scrollTop = mensagens.scrollHeight;
}

function atacar() {
  let derrotados = 0;
  for (let i = 0; i < humanos.length; i++) {
    if (humanos[i] === true) {
      humanos[i] = false;
      derrotados++;
      if (derrotados >= 5) break;
    }
  }

  adicionarMensagemNoLog("Gorila atacou e derrotou " + derrotados + " humanos!");
  renderizarHumanos();
  atualizarStatus();
  verificarFimDeJogo();
}

function curar() {
  if (vidaDoGorila < 100) {
    vidaDoGorila += 10;
    if (vidaDoGorila > 100) vidaDoGorila = 100;
    adicionarMensagemNoLog("Gorila se curou. +10 de vida!");
  } else {
    adicionarMensagemNoLog("Gorila já está com vida cheia!");
  }
  atualizarStatus();
}

function defender() {
  adicionarMensagemNoLog("Gorila se defendeu! (efeito ainda não implementado)");
}

function ataqueDosHumanos() {
  if (vidaDoGorila > 0) {
    let dano = Math.floor(Math.random() * 10) + 1;
    vidaDoGorila -= dano;
    if (vidaDoGorila < 0) vidaDoGorila = 0;

    adicionarMensagemNoLog("Humanos atacaram! Gorila perdeu " + dano + " de vida.");
    atualizarStatus();
    verificarFimDeJogo();
  }
}

function verificarFimDeJogo() {
  const vivos = humanos.filter(h => h).length;

  if (vivos === 0) {
    adicionarMensagemNoLog("Todos os humanos foram derrotados! 🦍 venceu!");
    desativarBotoes();
  }

  if (vidaDoGorila <= 0) {
    adicionarMensagemNoLog("O gorila foi derrotado! Os humanos venceram!");
    desativarBotoes();
  }
}

function desativarBotoes() {
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}
