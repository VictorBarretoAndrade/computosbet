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
  "MIMI":     { palpite: "Brasil 2 x 1 Marrocos", valor: "Gabriel 🧍" },
  "CEZIMBRA": { palpite: "Brasil 1 x 1 Marrocos", valor: "O zap da mãe 📱" },
  "PEPU":     { palpite: "Brasil 2 x 1 Marrocos", valor: "A casa de Itacimirim 🏖️" },
  "GORGIS":   { palpite: "Brasil 1 x 0 Marrocos", valor: "A conta do DBD 🔪" },
  "GRADIN":   { palpite: "Brasil 3 x 0 Marrocos", valor: "A conta do LOL e a dignidade 🎮" },
  "SANVAL":   { palpite: "Brasil 0 x 3 Marrocos", valor: "O curso de Computação do SENAI 🎓" },
  "HECTOR":   { palpite: "Brasil 1 x 1 Marrocos", valor: "A conta do LOL e o shape 💪" },
  "TUTU":        { palpite: "Brasil 2 x 1 Marrocos",  valor: "O controle do PS5 🎮" },
  "LETI DA MATA":{ palpite: "Brasil 3 x 1 Marrocos",  valor: "A vaga de S.I na UNEB 🎓" },
  "SOUSSA":      { palpite: "Brasil 1 x 5 Marrocos",  valor: "As notas de Modelagem 📐" },
  "PUTERSON":    { palpite: "Brasil 0 x 1 Marrocos",  valor: "A vaga na SBC e o Codeforces 💻" },
  "TOM O CRUEL": { palpite: "Brasil 3 x 1 Marrocos",  valor: "A conta do LOL e o JEP 🎮" },
  "VITIN":       { palpite: "Brasil 3 x 2 Marrocos",  valor: "Minha casa 🏠" },
  "JONSO":       { palpite: "Brasil 2 x 1 Marrocos",  valor: "A conta da Steam 🎮" },

  // 👇 Adicione novos palpites aqui, seguindo o mesmo formato:
  // "NomeDaFoto": { palpite: "Brasil 1 x 0 Marrocos", valor: "uma fortuna 💰" },
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
