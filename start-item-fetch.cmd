@echo off
cd /d "%~dp0"
start "InstaScrap Image Proxy" cmd /k node image-proxy-server.js
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:3001/"
