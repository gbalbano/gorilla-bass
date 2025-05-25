let vidaGorila = 100;
let humanos = Array(100).fill(true); 

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

function atacar() {
  let humanosDerrotados = 0;

  for (let i = 0; i < listaDeHumanos.length; i++) {
    if (listaDeHumanos[i] === true) {
      listaDeHumanos[i] = false;
      humanosDerrotados++;
      if (humanosDerrotados >= 5) {
        break;
      }
    }
  }

  adicionarMensagemNoLog("Gorila atacou e derrotou " + humanosDerrotados + " humanos!");
  mostrarHumanosNaTela();
  atualizarInformacoes();
  verificarFimDeJogo();
}

function defender() {
  adicionarMensagemNoLog("Gorila se defendeu! Menos dano no próximo ataque.");
 
}

function curar() {
  if (vidaDoGorila < 100) {
    vidaDoGorila += 10;
    if (vidaDoGorila > 100) vidaDoGorila = 100;
    adicionarMensagemNoLog("Gorila se curou. +10 de vida!");
    atualizarInformacoes();
  } else {
    adicionarMensagemNoLog("Gorila já está com vida cheia!");
  }
}
