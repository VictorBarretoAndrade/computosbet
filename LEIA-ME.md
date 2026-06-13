# ⚽ COMPUTOSBET777 — Palpites Brasil x Marrocos

Site simples e moderno para mostrar os palpites da galera antes do jogo.

## Como abrir
Dê **duplo clique** em `index.html`. Pronto, o site abre no navegador.

## Estrutura dos arquivos
```
copa/
├── index.html            ← a página
├── style.css             ← o visual (cores da Copa)
├── app.js                ← monta os cards (não precisa mexer)
├── palpites.js           ← 👈 EDITE AQUI os palpites
├── fotos.js              ← lista gerada automaticamente (não edite à mão)
├── Atualizar-fotos.bat   ← duplo clique p/ reler as fotos da pasta
├── gerar.js              ← mesma coisa, mas para quem tem Node.js
└── fotos/                ← 👈 COLOQUE AQUI as fotos dos participantes
```

## Para adicionar um novo participante (2 passos)
1. **Coloque a foto** dentro da pasta `fotos/`. O nome do arquivo vira o nome
   da pessoa (ex.: `Joao.jpg` → "Joao").
2. **Dê duplo clique em `Atualizar-fotos.bat`** para o site reconhecer a nova foto.
   *(Se você tiver Node.js instalado, pode rodar `node gerar.js` no lugar.)*

## Para editar os palpites
Abra **`palpites.js`** e edite a lista. É o único lugar:
```js
const PALPITES = {
  "Joao":  { palpite: "Brasil 2 x 1 Marrocos", valor: "R$ 5 e um chiclete" },
  "Maria": { palpite: "Brasil 3 x 0 Marrocos", valor: "a casa da praia 🏖️" },
};
```
- A chave deve ser o **nome do arquivo da foto** (sem a extensão).
- `palpite`: use sempre o formato **"Brasil X x Y Marrocos"** (o site lê os
  números para conferir quem acertou).
- `valor`: o valor apostado — pode ser uma zoeira à vontade. 😄
- Não diferencia maiúsculas/minúsculas nem acentos: `SANVAL.jpg` combina com `"Sanval"`.
- Foto sem palpite cadastrado mostra **"Palpite a definir"**.

## Recursos interativos
- **🔥 Bora!** — botão em cada card para a galera "torcer" (conta os cliques).
- **🏁 Conferir resultado** — no topo, digite o placar real e clique em
  *"Ver quem acertou"*: os cards certos ganham brilho de campeão 🏆 e cai
  confete; os demais ficam apagados. O botão *"Limpar"* desfaz.

## Para marcar uma foto como PATROCINADOR
No mesmo arquivo `palpites.js`, adicione o nome do arquivo na lista
`PATROCINADORES`. Essas imagens não viram card de palpite — aparecem
no rodapé, na seção **"Patrocinadores"**.
```js
const PATROCINADORES = [
  "Bet365_Logo",
  "TIGRE",
  "brazino777gaming_logo",
];
```

Formatos de imagem aceitos: jpg, jpeg, png, gif, webp, avif, svg, jfif, bmp.
