@echo off
title Napoleon Bonaparte
color 0a
echo [BOT] Bot yeniden başlatılıyor...
timeout /t 2 /nobreak >nul

:: Bot dosyanızın adı "index.js" ise aşağıdaki komut çalıştırır
node just.js

:: Eğer node_modules yoksa veya ilk çalıştırmaysa:
:: npm install

pause