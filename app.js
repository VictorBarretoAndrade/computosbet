/*
 * ============================================================
 *   APP  -  COMPUTOSBET777
 * ============================================================
 *  Monta os cards juntando as FOTOS (fotos.js) com os PALPITES (palpites.js).
 *  Patrocinadores (PATROCINADORES em palpites.js) vão para o rodapé.
 *  Inclui: botão de torcida em cada card + conferidor de resultado.
 *  Normalmente você NÃO precisa mexer aqui.
 * ============================================================
 */

// Pasta onde estão as imagens.
const PASTA = "fotos/";

// Remove acentos e deixa em minúsculo para comparar nomes com segurança.
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // remove acentos
    .toLowerCase()
    .trim();
}

// Tira a extensão do nome do arquivo. Ex.: "MIMI.png" -> "MIMI"
function semExtensao(arquivo) {
  return arquivo.replace(/\.[^.]+$/, "");
}

// Transforma o nome do arquivo em um nome bonito para exibir.
function nomeBonito(arquivo) {
  return semExtensao(arquivo)
    .replace(/[_-]+/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

// Verifica se uma foto é de patrocinador.
function ehPatrocinador(arquivo) {
  if (typeof PATROCINADORES === "undefined") return false;
  const chave = normalizar(semExtensao(arquivo));
  return PATROCINADORES.some((p) => normalizar(p) === chave);
}

// Procura os dados (palpite + valor) de uma foto.
// Aceita tanto o formato novo { palpite, valor } quanto texto simples.
function acharDados(arquivo) {
  const chaveFoto = normalizar(semExtensao(arquivo));
  for (const chave in PALPITES) {
    if (normalizar(chave) === chaveFoto) {
      const dado = PALPITES[chave];
      if (typeof dado === "string") return { palpite: dado, valor: "" };
      return { palpite: dado.palpite || "Palpite a definir", valor: dado.valor || "" };
    }
  }
  return { palpite: "Palpite a definir", valor: "" };
}

// Extrai os gols do texto do palpite. Ex.: "Brasil 2 x 1 Marrocos" -> [2, 1]
function extrairPlacar(palpite) {
  const m = palpite.match(/(\d+)\s*[xX]\s*(\d+)/);
  if (!m) return null;
  return [parseInt(m[1], 10), parseInt(m[2], 10)];
}

// Cria o HTML de um card de participante.
function criarCard(arquivo) {
  const nome = nomeBonito(arquivo);
  const { palpite, valor } = acharDados(arquivo);
  const placar = extrairPlacar(palpite);

  const card = document.createElement("article");
  card.className = "card";
  if (placar) {
    card.dataset.brasil = placar[0];
    card.dataset.marrocos = placar[1];
  }

  card.innerHTML = `
    <span class="card-badge" hidden>🏆 ACERTOU!</span>
    <div class="card-foto">
      <img src="${PASTA}${arquivo}" alt="Foto de ${nome}" loading="lazy" />
    </div>
    <h2 class="card-nome">${nome}</h2>
    <p class="card-palpite">
      <span class="card-palpite-rotulo">Palpite</span>
      ${palpite}
    </p>
    ${
      valor
        ? `<p class="card-valor"><span class="card-valor-rotulo">Apostou</span>${valor}</p>`
        : ""
    }
    <button class="card-torcida" type="button">
      🔥 Bora! <span class="card-torcida-num">0</span>
    </button>
  `;

  // Botão de torcida: incrementa o contador com uma animação.
  const botao = card.querySelector(".card-torcida");
  const num = card.querySelector(".card-torcida-num");
  botao.addEventListener("click", () => {
    num.textContent = parseInt(num.textContent, 10) + 1;
    botao.classList.remove("pulou");
    void botao.offsetWidth; // reinicia a animação
    botao.classList.add("pulou");
  });

  return card;
}

// Cria o HTML de um logo de patrocinador.
function criarLogoPatrocinador(arquivo) {
  const nome = nomeBonito(arquivo);
  const item = document.createElement("div");
  item.className = "patrocinador-item";
  item.innerHTML = `<img src="${PASTA}${arquivo}" alt="Patrocinador ${nome}" loading="lazy" />`;
  return item;
}

// Solta confete na tela (efeito divertido quando alguém acerta).
function soltarConfete() {
  const cores = ["#009739", "#ffdf00", "#002776", "#ffffff", "#1d4ed8"];
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confete";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = cores[Math.floor(Math.random() * cores.length)];
    c.style.animationDelay = Math.random() * 0.5 + "s";
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3500);
  }
}

// Confere o resultado digitado contra os palpites.
function conferirResultado() {
  const b = parseInt(document.getElementById("gols-brasil").value, 10);
  const m = parseInt(document.getElementById("gols-marrocos").value, 10);
  const mensagem = document.getElementById("conferir-resultado");

  if (isNaN(b) || isNaN(m)) return;

  const cards = document.querySelectorAll("#cards .card");
  const vencedores = [];

  cards.forEach((card) => {
    card.classList.remove("acertou", "errou");
    const badge = card.querySelector(".card-badge");
    badge.hidden = true;

    const cb = parseInt(card.dataset.brasil, 10);
    const cm = parseInt(card.dataset.marrocos, 10);

    if (cb === b && cm === m) {
      card.classList.add("acertou");
      badge.hidden = false;
      vencedores.push(card.querySelector(".card-nome").textContent);
    } else {
      card.classList.add("errou");
    }
  });

  mensagem.hidden = false;
  if (vencedores.length > 0) {
    mensagem.className = "conferir-mensagem sucesso";
    mensagem.textContent = `🏆 ${vencedores.join(", ")} cravou o ${b} x ${m}! Bora pagar a aposta!`;
    soltarConfete();
  } else {
    mensagem.className = "conferir-mensagem falha";
    mensagem.textContent = `😅 Ninguém acertou o ${b} x ${m}. A casa agradece!`;
  }
}

// Limpa os destaques do conferidor.
function limparResultado() {
  document.querySelectorAll("#cards .card").forEach((card) => {
    card.classList.remove("acertou", "errou");
    card.querySelector(".card-badge").hidden = true;
  });
  const mensagem = document.getElementById("conferir-resultado");
  mensagem.hidden = true;
  mensagem.textContent = "";
}

// Inicializa a página.
function iniciar() {
  const container = document.getElementById("cards");

  if (typeof FOTOS === "undefined" || FOTOS.length === 0) {
    container.innerHTML = `
      <div class="aviso">
        Nenhuma foto encontrada.<br />
        Coloque as imagens na pasta <strong>fotos/</strong> e rode o
        <code>Atualizar-fotos.bat</code>.
      </div>`;
    return;
  }

  const participantes = FOTOS.filter((f) => !ehPatrocinador(f));
  const patrocinadores = FOTOS.filter((f) => ehPatrocinador(f));

  participantes.forEach((arquivo) => container.appendChild(criarCard(arquivo)));

  if (patrocinadores.length > 0) {
    const secao = document.getElementById("secao-patrocinadores");
    const logos = document.getElementById("logos-patrocinadores");
    patrocinadores.forEach((arquivo) =>
      logos.appendChild(criarLogoPatrocinador(arquivo))
    );
    secao.hidden = false;
  }

  // Liga os botões do conferidor de resultado.
  document.getElementById("btn-conferir").addEventListener("click", conferirResultado);
  document.getElementById("btn-limpar").addEventListener("click", limparResultado);
}

document.addEventListener("DOMContentLoaded", iniciar);
