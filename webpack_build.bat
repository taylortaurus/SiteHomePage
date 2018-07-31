@echo off
Setlocal enabledelayedexpansion
::CODER BY taurus POWERD BY iBAT

echo =======================================
echo  webpack build... 
echo ======================================

pushd %~dp0%

npm run-script build

pause
