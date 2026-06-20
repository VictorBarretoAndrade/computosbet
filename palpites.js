/*
 * ============================================================
 *   PALPITES e PATROCINADORES  -  COMPUTOSBET777
 * ============================================================
 *
 *  ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR!
 * ============================================================
 */

/*
 *  1) PALPITES (as apostas da galera)
 *  ---------------------------------------------------------
 *  Formato:
 *    "NOME DA FOTO (sem extensão)": { palpite: "...", valor: "..." }
 *
 *  - palpite: o placar. Use sempre "Brasil X x Y Marrocos"
 *             (o site lê os números X e Y para conferir quem acertou).
 *  - valor:   o "valor apostado" (pode ser uma zoeira à vontade 😄).
 *
 *  A associação é automática e NÃO diferencia maiúsculas nem acentos.
 *  Ex.: a foto "MIMI.png" combina com "Mimi", "mimi", etc.
 */
const PALPITES = {
  // Jogo: BRASIL x HAITI — formato: "Brasil [gols] x [gols] Haiti"

  // 👇 Apostaram a favor do BRASIL 🇧🇷 (placar do Brasil primeiro)
  //    A ORDEM aqui também é a ordem em que aparecem no site (os citados vêm primeiro).
  "LIMA":         { palpite: "Brasil 2 x 0 Haiti", valor: "Vai parar de fazer academia e fazer cookie 🍪" },
  "TUTU":         { palpite: "Brasil 7 x 1 Haiti", valor: "O tablet e os bots de agenda do Discord 🤖" },
  "JULANA":       { palpite: "Brasil 2 x 0 Haiti", valor: "Todos os livros e o kindle 📚" },
  "VICTOR":       { palpite: "Brasil 4 x 0 Haiti", valor: "Vai torcer pro Bahia por 4 jogos contra o Vitória ⚽" },
  "HILDETE":      { palpite: "Brasil 4 x 0 Haiti", valor: "1 mês sem ver a lalá 🐕" },
  "PEPU":         { palpite: "Brasil 3 x 0 Haiti", valor: "A casa de Itacimirim 🏖️" },
  "MARI":         { palpite: "Brasil 1 x 0 Haiti", valor: "1 ano sem fazer balé 🩰" },
  "CLARA":        { palpite: "Brasil 2 x 1 Haiti", valor: "Parar de tocar piano 🎹" },
  "CEZIMBRA":     { palpite: "Brasil 3 x 0 Haiti", valor: "O zap da mãe 📱" },
  "ANA":          { palpite: "Brasil 3 x 1 Haiti", valor: "A carteira da OAB ⚖️" },
  "JANDIRA":      { palpite: "Brasil 2 x 1 Haiti", valor: "Um voucher de limpeza dentária 🦷" },
  "HENEL":        { palpite: "Brasil 3 x 0 Haiti", valor: "5 shows de bateria 🥁" },
  "CARLOS":       { palpite: "Brasil 4 x 1 Haiti", valor: "As carpas 🐟" },
  "JONSO":        { palpite: "Brasil 4 x 0 Haiti", valor: "A conta da Steam 🎮" },
  "VITIN":        { palpite: "Brasil 3 x 1 Haiti", valor: "Minha casa 🏠" },
  "MIMI":         { palpite: "Brasil 2 x 1 Haiti", valor: "Vai parar de ver reels por 3 meses 📵" },
  "TOM O CRUEL":  { palpite: "Brasil 3 x 0 Haiti", valor: "A conta do LOL e o Jeep 🚙" },
  "ZEZE":         { palpite: "Brasil 2 x 1 Haiti", valor: "A casa de Villas 🏖️" },

  // 👇 NÃO foram citados: apostas a favor do HAITI 🇭🇹 (aparecem depois no site)
  "GORGIS":       { palpite: "Brasil 0 x 2 Haiti", valor: "A conta do DBD 🔪" },
  "GRADIN":       { palpite: "Brasil 1 x 3 Haiti", valor: "A conta do LOL e a dignidade 🎮" },
  "HECTOR":       { palpite: "Brasil 0 x 1 Haiti", valor: "A conta do LOL e o shape 💪" },
  "LETI DA MATA": { palpite: "Brasil 1 x 2 Haiti", valor: "A vaga de S.I na UNEB 🎓" },
  "PUTERSON":     { palpite: "Brasil 0 x 4 Haiti", valor: "A vaga na SBC e o Codeforces 💻" },
  "SANVAL":       { palpite: "Brasil 1 x 5 Haiti", valor: "O curso de Computação do SENAI 🎓" },
  "SOUSSA":       { palpite: "Brasil 0 x 3 Haiti", valor: "As notas de Modelagem 📐" },

  // ⚠️ Citado a favor do Brasil mas ainda NÃO tem foto na pasta fotos/
  //    Adicione a foto e rode Atualizar-fotos.bat para virar card:
  // "ANTONIO":   { palpite: "Brasil 4 x 0 Haiti", valor: "" },

  // 👇 Adicione novos palpites aqui, seguindo o mesmo formato:
  // "NomeDaFoto": { palpite: "Brasil 1 x 0 Haiti", valor: "uma fortuna 💰" },
};

/*
 *  2) PATROCINADORES
 *  ---------------------------------------------------------
 *  Coloque aqui o NOME DA FOTO (sem extensão) de quem é patrocinador.
 *  Essas imagens NÃO viram card de palpite: aparecem no rodapé,
 *  na seção "Patrocinadores".
 */
const PATROCINADORES = [
  "Bet365_Logo",
  "TIGRE",
  "brazino777gaming_logo",
];
