@echo off
REM ============================================================
REM   GERADOR AUTOMATICO DE FOTOS  -  COMPUTOSBET777
REM   (NAO precisa instalar nada - usa o PowerShell do Windows)
REM
REM   COMO USAR: basta dar DUPLO CLIQUE neste arquivo sempre que
REM   adicionar ou remover uma foto na pasta "fotos".
REM   Ele recria o arquivo "fotos.js" automaticamente.
REM ============================================================
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ext = '.jpg','.jpeg','.png','.gif','.webp','.avif','.svg','.jfif','.bmp';" ^
  "$arquivos = Get-ChildItem -File 'fotos' | Where-Object { $ext -contains $_.Extension.ToLower() } | Select-Object -ExpandProperty Name;" ^
  "$json = ($arquivos | ConvertTo-Json);" ^
  "if ($arquivos.Count -eq 1) { $json = '[' + $json + ']' };" ^
  "if ($arquivos.Count -eq 0) { $json = '[]' };" ^
  "$conteudo = \"/* ARQUIVO GERADO AUTOMATICAMENTE - NAO edite a mao. */`r`nconst FOTOS = $json;`r`n\";" ^
  "Set-Content -Path 'fotos.js' -Value $conteudo -Encoding UTF8;" ^
  "Write-Host ('Pronto! ' + $arquivos.Count + ' foto(s) encontrada(s).')"
echo.
echo Arquivo fotos.js atualizado. Agora e so abrir o index.html
pause
