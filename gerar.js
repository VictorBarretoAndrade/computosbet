/*
 * ============================================================
 *  GERADOR AUTOMÁTICO DA LISTA DE FOTOS  -  COMPUTOSBET777
 * ============================================================
 *
 *  O QUE ESTE ARQUIVO FAZ?
 *  Ele lê automaticamente TODAS as imagens dentro da pasta "fotos/"
 *  e gera o arquivo "fotos.js", que o site usa para montar os cards.
 *
 *  COMO USAR (passo a passo):
 *  1. Coloque as fotos dos participantes dentro da pasta "fotos/".
 *  2. No terminal, dentro da pasta do projeto, rode:  node gerar.js
 *  3. Abra o "index.html" no navegador. Pronto!
 *
 *  Sempre que adicionar/remover uma foto, rode "node gerar.js" de novo.
 * ============================================================
 */

const fs = require("fs");
const path = require("path");

// Pasta onde ficam as fotos dos participantes.
const PASTA_FOTOS = path.join(__dirname, "fotos");

// Extensões de imagem aceitas.
const EXTENSOES_VALIDAS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif", ".svg", ".jfif", ".bmp"];

// Lê os arquivos da pasta e filtra apenas as imagens.
const arquivos = fs
  .readdirSync(PASTA_FOTOS)
  .filter((nome) => EXTENSOES_VALIDAS.includes(path.extname(nome).toLowerCase()));

// Monta o conteúdo do arquivo fotos.js
const conteudo =
  "/* ARQUIVO GERADO AUTOMATICAMENTE por gerar.js - NÃO edite à mão. */\n" +
  "const FOTOS = " +
  JSON.stringify(arquivos, null, 2) +
  ";\n";

fs.writeFileSync(path.join(__dirname, "fotos.js"), conteudo, "utf8");

console.log(`✓ ${arquivos.length} foto(s) encontrada(s):`);
arquivos.forEach((a) => console.log("   - " + a));
console.log('✓ Arquivo "fotos.js" gerado com sucesso!');
